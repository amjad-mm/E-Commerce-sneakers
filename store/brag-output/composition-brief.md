# Hyperframes Composition Brief: SOLE//RAW

## Objective
Create a short launch-style brag video for SOLE//RAW.

## Output
- Composition directory: `/Users/max/Desktop/Angluar/E-commerce/store/brag-output/composition/`
- Rendered video: `/Users/max/Desktop/Angluar/E-commerce/store/brag-output/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 20 seconds

## Source Material
- Project root: /Users/max/Desktop/Angluar/E-commerce/store
- Primary files read: src/app/shared/section1/section1.component.html, src/app/shared/navbar/navbar.component.html, src/app/features/product-details/product-details.component.html, src/styles.css, db.json
- Product name: SOLE//RAW
- Tagline / strongest claim: BUILT TO MOVE.
- Key UI or visual moment to recreate: silhouette telemetry panel + NEW DROPS grid + QUICK ADD → BAG flow
- Copy that must appear verbatim:
  - BUILT TO MOVE.
  - RAW ARCHIVAL RIGS // KINETIC PROPULSION CHASSIS
  - RAW ENGINEERING // EST. 2026
  - FW-2026 DROP 04 LIVE
  - SILHOUETTE_TELEMETRY // NK-DJ7926-001
  - Pegasus Trail 4 GORE-TEX
  - Ultraboost Light
  - Dunk Low Retro
  - NEW DROPS [AVAILABLE NOW]
  - QUICK ADD
  - Move Different.

## Creative Direction
- Tone preset: polished
- Creative direction: brutalist archive product film — engineered hype
- Interpretation: Fewer scenes, longer holds. Soft crossfades. Cream/black/lime brutalism with hard shadows.
- Angle: Treat a working sneaker store like a military archive dispatch. Dead-serious engineering copy, all grounded in the site.
- Hook: Giant BUILT TO MOVE. slam on cream with ticker
- Outro / punchline: SOLE//RAW / Move Different. on black
- Avoid:
  - Generic SaaS language
  - Abstract filler visuals
  - Unrelated visual redesign

## Visual Identity
- Background: #faf7f2
- Text: #111111
- Accent: #d9f13d
- Display font: Archivo Black fallback — heavy uppercase sans, system sans bold
- Body font: Inter fallback — system sans
- Visual references from the project: ticker bar, telemetry topbar, sneaker stage corner ticks, hard 4px shadows, stat boxes, product cards

## Storyboard
Use the storyboard in `/Users/max/Desktop/Angluar/E-commerce/store/brag-output/brag-plan.md` as the creative contract.

Scene summary:
1. Hook / BUILT TO MOVE — 3.5s — giant headline + ticker must be read
2. Telemetry panel — 5.0s — SKU panel, sneaker name, 3 stats sequential
3. NEW DROPS flow — 7.5s — 3 cards sequential, QUICK ADD click, BAG increment, ORDER PLACED
4. Outro / Move Different — 4.0s — logo lockup on black

## Audio
- Audio role: warm bed
- Audio arc: establish → steady tech → rhythmic build → fade with bell
- Music: happy-beats-business-moves-vol-12-by-ende-dot-app.mp3
- Music treatment: volume 0.32, start 0.5s, fade-out last 2s
- Music cue guidance: preset at <skill-dir>/assets/music/cues/happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.json, tempo 109.96 BPM; strong cues 8.74s, 10.93s, 13.11s for major reveals; beat-grid 3.27-4.91 and 12.02-13.64 for sequential reveals; or unavailable — continue without beat sync
- Audio-reactive treatment: subtle; hero glow and card presence breathe with RMS, no waveform visuals
- Audio-coupled moments:
  - hook slam — impact announce
  - stat boxes / drop cards — card sequence
  - QUICK ADD click — simulated interaction
  - final logo — soft payoff bell
- SFX selection guidance: motion-matched, sparse, professional restraint; card-place for cards, click for QUICK ADD, impactBell for hook/outro
- SFX analysis guidance: <skill-dir>/assets/sfx/sfx-analysis.md — prefer low HF risk for polished moments
- Exact SFX choice: Hyperframes should choose filenames, timestamps, density, and volume based on the implemented animation.
- Audio files: copy the chosen music and any Hyperframes-selected SFX into `/Users/max/Desktop/Angluar/E-commerce/store/brag-output/composition/assets/`

## Hyperframes Instructions
Load the composition-building Hyperframes domain skills — `hyperframes-core`, `hyperframes-animation`, `hyperframes-creative`, `hyperframes-keyframes`, and `hyperframes-cli`. /brag is its own workflow: do not enter the `hyperframes` entry-point intent interview and do not route into its generic promo / launch-video workflow. Prefer native Hyperframes conventions over anything in `/brag`.

Requirements:
- Show at least one real UI, copy, or visual element from the source project.
- Keep all text readable in the final render.
- Keep the video within 15-25 seconds.
- Include the planned music/SFX layer unless audio was explicitly disabled or documented as intentionally silent.
- Treat `/brag` audio notes as guidance, not a fixed cue sheet. Choose SFX after the visual animation exists.
- Treat music cue metadata as optional timing hints. Hyperframes decides exact animation timing and should ignore cues that hurt readability, scene pacing, or the product story.
- Major reveals may move toward nearby strong cues within about 0.15s. Smaller entrances may align to nearby beat points within about 0.10s. Use only 1-3 strong cue locks in a 15-25s video unless the edit clearly benefits from more.
- Use SFX to support motion and interaction: card sounds for card-like reveals, short announcement cues for major payoffs, key/click sounds for text or user actions, and restraint when the edit is already busy.
- Honor planned music treatment such as fade-outs, ducking, beat-aligned reveals, or letting a final SFX ring over the music, using the best Hyperframes-supported implementation.
- When music is present and the treatment is not `none`, consider Hyperframes audio-reactive workflow: extract audio data and use RMS/frequency bands for subtle, brand-specific motion. Good targets are glow, depth, background warmth, card presence, title emphasis, or other existing visual elements. Avoid waveform/equalizer visuals, musical-note graphics, generic particle systems, strobing, or heavy pulsing.
- Use local assets for audio and any required runtime/media dependencies when possible.
- Run `hyperframes check` before render — it is brag's single gate.
- Keep creation and rendering local. Remote or publishing workflows require a separate explicit user request.
