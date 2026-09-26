"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { portfolioContent } from "./content";
import { EvidenceGraphic } from "./evidence-graphic";
import type { MediaSpec } from "./model";
import { useLanguage } from "./use-language";

interface MediaStageProps {
  media: MediaSpec;
  active: boolean;
  onFailure?: () => void;
  labelledBy?: string;
}

function MediaFallback() {
  const { t } = useLanguage();
  return (
    <div className="media-fallback" role="status">
      <span aria-hidden="true">×</span>
      <strong>{t(portfolioContent.site.ui.mediaUnavailable)}</strong>
      <p>{t(portfolioContent.site.ui.mediaUnavailableHint)}</p>
    </div>
  );
}

function ControlledEvidenceVideo({
  media,
  active,
  onFailure,
}: Omit<MediaStageProps, "labelledBy">) {
  const { language, t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!active) {
      video.pause();
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // play() only returns a promise on modern browsers; guard before chaining.
    const started = video.play() as Promise<void> | undefined;
    void started?.catch(() => undefined);
  }, [active, media.src]);

  if (failed || (!media.src && !media.mp4Src)) {
    return media.poster ? (
      // A poster remains useful when playback is unavailable.
      // Native image sizing is intentional inside the fixed evidence frame.
      // eslint-disable-next-line @next/next/no-img-element
      <img className="media-poster" src={media.poster} alt={language === "en" ? media.alt.en : media.alt.ko} />
    ) : <MediaFallback />;
  }

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try {
        await video.play();
        setPlaying(true);
      } catch {
        setFailed(true);
        onFailure?.();
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="evidence-video">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        poster={media.poster}
        aria-label={language === "en" ? media.alt.en : media.alt.ko}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        onError={() => {
          setFailed(true);
          onFailure?.();
        }}
      >
        {media.src ? <source src={media.src} type="video/webm" /> : null}
        {media.mp4Src ? <source src={media.mp4Src} type="video/mp4" /> : null}
      </video>
      <button type="button" className="media-control" onClick={togglePlayback}>
        {playing ? <Pause aria-hidden="true" size={15} /> : <Play aria-hidden="true" size={15} />}
        {playing
          ? t(portfolioContent.site.ui.pause)
          : t(portfolioContent.site.ui.play)}
      </button>
    </div>
  );
}

export function MediaStage({
  media,
  active,
  onFailure,
  labelledBy,
}: MediaStageProps) {
  const { t } = useLanguage();
  const [failed, setFailed] = useState(false);

  let content;
  if (media.kind === "video") {
    content = (
      <ControlledEvidenceVideo
        media={media}
        active={active}
        onFailure={onFailure}
      />
    );
  } else if (media.kind === "image") {
    content = failed || !media.src ? (
      <MediaFallback />
    ) : (
      // Native image sizing is intentional inside the fixed evidence frame.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className="evidence-image"
        src={media.src}
        alt={t(media.alt)}
        onError={() => {
          setFailed(true);
          onFailure?.();
        }}
      />
    );
  } else {
    content = media.visual ? (
      <EvidenceGraphic visual={media.visual} />
    ) : (
      <MediaFallback />
    );
  }

  // Recorded assets are plots whose edges carry meaning, so their frame letterboxes
  // instead of cropping, against a ground that suits a dark capture.
  const recorded = media.kind === "image" || media.kind === "video";

  return (
    <figure className="media-stage" aria-labelledby={labelledBy}>
      <div className={`media-stage__frame${recorded ? " media-stage__frame--recorded" : ""}`}>{content}</div>
      <figcaption>{t(media.caption)}</figcaption>
    </figure>
  );
}
