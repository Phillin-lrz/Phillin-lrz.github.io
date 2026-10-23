# Self-hosted title fonts

Only visual primary page titles use the title faces below. Body copy, navigation, buttons, metadata and section-heading fonts retain their existing typography.

## Current production faces

- **Homepage English wordmark — Oooh Baby Regular**: `signature-oooh.ttf`, 8,608 bytes. Original Google Fonts subset for `Phil LinBar`; CSS family Bar Signature. Font, sizes, weight, colors, spacing, two-line markup and English positions are frozen. Source: https://fonts.googleapis.com/css2?family=Oooh+Baby&text=Phil%20LinBar . SIL OFL 1.1: `OFL-Oooh-Baby.txt`.
- **Homepage 的 — Noto Serif SC Regular**: `noto-serif-sc-de.ttf`, 2,016 bytes, U+7684 only; CSS family Bar Song De. The user confirmed retaining this formal choice; no replacement is pending. SIL OFL 1.1: `OFL-Noto-Serif.txt`.
- **Inner Chinese primary titles — LXGW WenKai Lite Light v1.530**: `title-editorial-light.woff2`, 97,800 bytes. Original source: https://github.com/lxgw/LxgwWenKai-Lite/releases/tag/v1.530 . SIL OFL 1.1: `OFL-WenKai-Lite.txt`. Locally subsetted to 428 current title/metadata/ASCII characters; internal derivative family/full/PostScript names are Bar Editorial Light / BarEditorialLight to avoid reserved names. No artificial thinning of outlines. Selected after actual Tonight/long-article browser comparison against Noto Serif SC ExtraLight, to replace Yozai's stronger casual handwriting.
- **Inner Latin primary titles — Oooh Baby Regular**: `title-signature-latin.woff2`, 19,388 bytes, Google Fonts supplied printable-ASCII subset converted locally to WOFF2. Same `OFL-Oooh-Baby.txt`. Separate from the frozen homepage asset.

The two inner faces form the CSS composite Bar Title Editorial: supported non-ASCII glyphs use WenKai Light, U+0020–U+007E uses the existing signature. Descriptor weight 300 selects actual Light Chinese outlines and original Regular signature outlines without synthesis. The files total 117,188 bytes. They load from this website using WOFF2 and font-display: swap, with no third-party visitor font requests or new client runtime dependency. WOFF2 is a W3C Web standard implemented in all major browsers: https://www.w3.org/TR/WOFF2/ . Actual rendering was inspected in Chromium at desktop/tablet/mobile viewports; physical macOS/iOS/Android rasterization has not been tested.

Future titles with new characters may require refreshing the subset. FontTools/Brotli are used only in the external work directory for asset preparation. Title characters were processed locally; no title text was sent to a font service during the final refinement.

## Homepage 的 candidates — archived comparison, not adopted

| Option | Source face | One-glyph WOFF2 | Treatment |
| --- | --- | --- | --- |
| A | ChenYuluoyan 2.0 Thin | 3,256 bytes | Fine pen; .36em for comparable readable ink size |
| B | Noto Sans SC ExtraLight 200 | 960 bytes | Restrained modern transition; existing .30em size |
| C | WenKai Lite Light 300 | 1,204 bytes | Mature writing rhythm; existing .30em size; recommended |

All candidates use SIL OFL 1.1. A's original font/license: https://github.com/Chenyu-otf/chenyuluoyan_thin ; B: Google Fonts Noto Sans SC (`OFL-Noto-Sans-SC.txt`); C uses the WenKai license above. Derivative names avoid reserved names, while retaining original notices. Candidate assets, licenses and temporary actual-homepage specimens are stored outside the website, as recorded in AGENT_FINAL_POLISH.md. None is loaded by index.html. Previews lock 的's original measured advance width before changing its glyph, so Phil Lin and Bar preserve their exact desktop boxes and font properties.

## Retained rollback faces

The former Yozai subset (`title-handwritten-yozai.woff2`, OFL-Yozai.txt), Noto Sans SC title subset and TeX Gyre Chorus file/licenses remain available for rollback and are not loaded by production styles. See AGENT_FINAL_POLISH.md for the latest scope, screenshots, rendering observations and rollback snapshot.

Final user decision: keep the existing homepage 的 and the current website. A/B/C remain comparison references only and must not be applied without a new explicit request.
