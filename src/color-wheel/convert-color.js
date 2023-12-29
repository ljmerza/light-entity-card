export const rgb2hsv = (rgb) => {
  const [r, g, b] = rgb;
  const v = Math.max(r, g, b);
  const c = v - Math.min(r, g, b);
  const h =
    c && (v === r ? (g - b) / c : v === g ? 2 + (b - r) / c : 4 + (r - g) / c);
  return [60 * (h < 0 ? h + 6 : h), v && c / v, v];
};

export const hsv2rgb = (hsv) => {
  const [h, s, v] = hsv;
  const f = (n) => {
    const k = (n + h / 60) % 6;
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };
  return [f(5), f(3), f(1)];
};

export const rgb2hs = (rgb) => rgb2hsv(rgb).slice(0, 2);

export const hs2rgb = (hs) => hsv2rgb([hs[0], hs[1], 255]);
