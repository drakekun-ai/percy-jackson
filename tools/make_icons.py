"""
make_icons.py — draws the app's home-screen icons.

A simple Doric column on a dark aegean-blue field, gold on navy, matching
the site's palette (styles.css --accent / --accent2-strong). Chosen because
it reads clearly at 32px as well as 512px, and isn't tied to any single god
or myth the way a thunderbolt or owl would be.

Run from the project root:  python tools/make_icons.py
Regenerates icon-192.png, icon-512.png, and apple-touch-icon.png (180x180).
"""

from PIL import Image, ImageDraw

NAVY = (28, 52, 80)      # --accent2-strong
GOLD = (212, 175, 55)    # --accent (dark-mode value, reads well on navy)
PARCHMENT = (246, 239, 221)  # --bg


def draw_column(size):
    img = Image.new("RGB", (size, size), NAVY)
    d = ImageDraw.Draw(img)

    u = size / 100.0  # unit

    # thin parchment-toned border ring for definition at small sizes
    d.rectangle([u * 3, u * 3, size - u * 3, size - u * 3], outline=PARCHMENT, width=max(1, int(u * 1.2)))

    # capital (top slab + abacus)
    d.rectangle([u * 24, u * 20, u * 76, u * 28], fill=GOLD)
    d.rectangle([u * 30, u * 28, u * 70, u * 33], fill=GOLD)

    # fluted shaft — a slightly tapered column with a few flute lines
    shaft_top, shaft_bottom = u * 33, u * 72
    d.polygon(
        [
            (u * 34, shaft_top), (u * 66, shaft_top),
            (u * 69, shaft_bottom), (u * 31, shaft_bottom),
        ],
        fill=GOLD,
    )
    flute_color = NAVY
    for fx in (42, 50, 58):
        d.line([(u * fx, shaft_top + u * 2), (u * fx, shaft_bottom - u * 2)], fill=flute_color, width=max(1, int(u * 0.8)))

    # base (plinth)
    d.rectangle([u * 26, u * 72, u * 74, u * 77], fill=GOLD)
    d.rectangle([u * 20, u * 77, u * 80, u * 83], fill=GOLD)

    return img


def main():
    for size, name in [(192, "icon-192.png"), (512, "icon-512.png"), (180, "apple-touch-icon.png")]:
        img = draw_column(size)
        img.save(name)
        print("wrote", name)


if __name__ == "__main__":
    main()
