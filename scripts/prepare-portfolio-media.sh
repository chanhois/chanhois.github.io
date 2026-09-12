#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 2 ]]; then
  echo "Usage: $0 input.gif public/media/<project>/<name>" >&2
  exit 64
fi

input_path="$1"
output_base="$2"
mkdir -p "$(dirname "$output_base")"

ffmpeg -y -i "$input_path" -an -c:v libvpx-vp9 -crf 32 -b:v 0 -pix_fmt yuv420p "${output_base}.webm"
ffmpeg -y -i "$input_path" -an -c:v libx264 -crf 23 -pix_fmt yuv420p -movflags +faststart "${output_base}.mp4"
ffmpeg -y -i "$input_path" -vf "select=eq(n\,0)" -frames:v 1 -q:v 2 "${output_base}-poster.jpg"
