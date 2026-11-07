# NOOLAM · Kanchipuram Silk — rebuilt

A rebuild of the NOOLAM saree showcase, made from the reference video
(`../WhatsApp Video …mp4`) and the reference repo (`../noolam-saree-showcase`). That repo has only
prompts and screenshots, no code. See `PLAN.md` for the analysis and the section map.

> **Credit:** the NOOLAM brand concept, section ideas and copy come from
> [alagappan567/noolam-saree-showcase](https://github.com/alagappan567/noolam-saree-showcase).
> This repo is an independent re-implementation. All code, including the 3D silk engine, was written from scratch. NOOLAM is a demo brand.

## Run

The SSD is **exFAT**, which has no symlinks, so always install with `--no-bin-links`:

```bash
cd /media/aruneshwaran/ssd/saree/noolam-site
npm install --no-bin-links
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Sections

| Section | Component |
|---|---|
| Silk-curtain intro (**3D cloth**) | `components/Intro.tsx` → `components/three/Curtain3D.tsx` |
| Glass pill navbar | `components/Navbar.tsx` |
| Hero "Woven for the Divine." | `components/Hero.tsx` |
| Fixed gold ticker | `components/Ticker.tsx` |
| Six Moods (gopuram arches) | `components/SixMoods.tsx` |
| Try the Look (drag carousel + panel) | `components/TryTheLook.tsx` |
| Pick a Silk (tilt cards on an arc) | `components/PickASilk.tsx` |
| The Rack + detail view (**3D cloth**) | `components/TheRack.tsx` → `components/three/SilkRack3D.tsx`, `SilkDetail3D.tsx` |
| The Muse Film | `components/MuseFilm.tsx` |
| The Muse Reels (3D arc + full-screen viewer) | `components/MuseReels.tsx` |
| The Bridal Collection | `components/Bridal.tsx` |
| Three silks, one weave (**3D silk** braid) | `components/Weave.tsx` |
| Footer | `components/Footer.tsx` |

All products, prices and copy are in `lib/data.ts`. Styles are in `app/globals.css`.
Smooth scrolling (Lenis) and scroll-in reveals: `components/SmoothScroll.tsx`. Add `data-reveal` to any element to animate it in.

## 3D silk engine (`lib/silk/`)

The fabric is rendered live with three.js, not drawn:

| File | What it does |
|---|---|
| `texture.ts` | Weaves Kanjivaram textures on canvas: body patterns (check, stripe, butta, brocade), temple-tooth zari borders, pallu side border. Also paints a roughness/metalness map so the **zari is metallic** and a bump map for the woven texture. Uses `MeshPhysicalMaterial` with **silk sheen**. |
| `cloth.ts` | Verlet cloth physics. The cloth hangs, sways and swings when hangers slide, and ruffles when you move over it ("poke the silk"). Pleats seeded at creation stay in place. |
| `garment.ts` | A wooden hanger with a chrome hook, plus a cloth saree, half-saree or blouse (cut-out silhouette) pinned along the bar. |
| `stage.ts` | Shared renderer: studio reflections (RoomEnvironment), neutral tone mapping, resize handling, and pauses rendering when off-screen. |

Change a product's look by editing its `colors` and `pattern` in `lib/data.ts`. The 3D rack re-weaves it automatically.

## Adding the real photos and videos

The original AI studio images and films were never published. Every image slot loads a file
from `public/` **if it exists**. If it doesn't, it draws a procedural SVG in the right colours
(`components/Art.tsx`). Drop files at these paths and they appear automatically, with no code changes:

| Slot | Path | Notes |
|---|---|---|
| Hero showroom | `public/images/hero-showroom.jpg` | full-bleed, ~1920×1080 |
| Six moods | `public/images/moods/1.jpg … 6.jpg` | portrait 3:4 |
| Try-the-look models | `public/images/looks/1.png … 8.png` | full-length, **transparent PNG** |
| Look items | `public/images/look-items/<product-slug>.png`, e.g. `jhumkas-with-pearl-drops.png` (shared across looks) | square thumbs; exact names in `IMAGE-PROMPTS.md` |
| Pick-a-silk models | `public/images/silks/1.png … 9.png` | transparent PNG, in front of the title |
| Muse columns | `public/images/muse/left-1.jpg … left-4.jpg`, `right-1.jpg … right-4.jpg` | portrait |
| Brand film | `public/media/muse-film.mp4` | 16:9 |
| Reels | `public/media/reels/01.mp4 … 05.mp4` (poster: `public/images/reels/01.jpg …`) | 9:16 |
| Bridal | `public/images/bridal/1.jpg … 7.jpg` | portrait |

The rack, the curtain and the weave ribbons are real-time 3D, so they need no images.
Run `npm run image-prompts` to regenerate `IMAGE-PROMPTS.md`, and `npm run check-images` to see progress.

To match the original look, generate images with these prompts:
- **Models:** "studio photo, Indian woman in a [colour] Kanjivaram silk saree with gold zari border, full length, plain white background, soft shadow"
