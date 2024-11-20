type HexColor = { r: number; g: number; b: number };

export function generateColorFromString(
  str: string,
  brightness?: number //Set to under 1 to darken the color
): HexColor {
  // Simple hash function to generate a number from a string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Generate RGB values from the hash
  let r = (hash >> 8) & 0xff;
  let g = hash & 0xff;
  let b = (hash >> 16) & 0xff;

  // Ensure the color is dark by reducing brightness (keeping it below 100)
  // This darkens the color while ensuring it's distinguishable against a white background
  r = Math.floor(r * (brightness ?? 1)); // Darken by 50%
  g = Math.floor(g * (brightness ?? 1));
  b = Math.floor(b * (brightness ?? 1));

  // Return the hex color code
  return { r, g, b };
}

export function hexToRgb(hex: string): HexColor {
  // Remove the hash (#) if it's present
  hex = hex.replace(/^#/, "");

  // Parse the hex string
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

// Function to convert RGB to a hex string
export function rgbToHex({ r, g, b }: HexColor): string {
  const toHex = (value: number) => {
    const hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Function to lighten a hex color by a given percentage
export function lightenColor({ r, g, b }: HexColor, percent: number): HexColor {
  // const { r, g, b } = hexToRgb(hex);

  // Lighten the color by increasing RGB values by the percentage
  const lighten = (value: number) =>
    Math.min(255, Math.floor(value + (255 - value) * (percent / 100)));

  const newR = lighten(r);
  const newG = lighten(g);
  const newB = lighten(b);

  return { r: newR, g: newG, b: newB };
}
