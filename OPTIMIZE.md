# ⚡ Media Optimization Guide

Your platform currently uses high-end 4K videos that are ~450MB each. To ensure a premium experience for all users (even on mobile), these must be compressed to < 10MB.

## Recommended Tools
- **Handbrake** (Windows/Mac/Linux) - Free & Open Source.
- **CloudConvert.com** - Online tool.

## Optimized Settings for Web
| Setting | Recommended Value |
| :--- | :--- |
| **Container** | MP4 or WebM |
| **Codec** | H.264 (MP4) or VP9 (WebM) |
| **Resolution** | 1920x1080 (1080p is sufficient for web backgrounds) |
| **Framerate** | 24 or 30 FPS |
| **Bitrate** | 1500 - 2500 kbps (CRF 22-24) |
| **Audio** | Disable/Remove (Background videos should be silent) |

## How to Apply:
1. Open your video in **Handbrake**.
2. Select the **Web Optimized** checkbox.
3. In the **Video** tab, set "Constant Quality" to 22.
4. Go to the **Audio** tab and click "Clear" to remove all tracks.
5. Click **Start Encode**.
6. Replace the files in `public/` with the new ones, keeping the same filenames:
   - `1118494_4k_Telecommunications_3840x2160.mp4`
   - `1118495_4k_Telecommunications_3840x2160.mp4`

## Result
Your page will load **50x faster**, and the visual quality on a screen will remain identical to the casual eye.
