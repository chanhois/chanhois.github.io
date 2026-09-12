# Portfolio media intake

The first release uses labeled HTML/CSS evidence graphics. Replace them only with authentic project media that adds useful evidence.

## Before copying a file into `public/`

Check every frame for customer and product names, serial numbers, internal tools, source paths, documents in the background, faces, location details, and distinctive unreleased hardware. Crop or blur only when the edit preserves the meaning of the evidence. Keep the original outside the public repository.

Write a Korean and English alt description and a caption that states the conclusion shown by the asset. Do not infer a result that the recording does not demonstrate.

## Images

Use a descriptive project directory and prefer WebP for photographs:

```text
public/media/lidar-stability/test-setup.webp
public/media/amr-calibration/wall-alignment.webp
```

## GIFs and recordings

Convert GIFs to WebM and MP4 so the site can provide play and pause controls and respect reduced-motion preferences:

```bash
./scripts/prepare-portfolio-media.sh \
  /absolute/path/to/source.gif \
  public/media/lidar-stability/before-after
```

The command creates:

```text
before-after.webm
before-after.mp4
before-after-poster.jpg
```

Use the generated paths in `app/_portfolio/content.ts`:

```ts
{
  kind: "video",
  src: "/media/lidar-stability/before-after.webm",
  mp4Src: "/media/lidar-stability/before-after.mp4",
  poster: "/media/lidar-stability/before-after-poster.jpg",
  alt: {
    en: "LiDAR scan before and after fixed-grid and EKF processing",
    ko: "고정 각도 그리드와 EKF 처리 전후의 LiDAR 스캔",
  },
  caption: {
    en: "Rigid yaw oscillation decreases across the raw, fixed-grid, and EKF stages.",
    ko: "원본, 고정 각도 그리드, EKF 단계에서 강체 yaw 진동이 감소합니다.",
  },
}
```

Keep videos muted and loop-safe. A poster must communicate the main visual result without playback.
