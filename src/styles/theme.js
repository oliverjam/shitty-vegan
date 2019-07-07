const palette = {
  green: "#2CC938",
  grellow: "#D4D641",
  orange: "#E7B417",
  red: "#CC3333",
  blue: "hsl(220, 40%, 60%)",

  charcoal: "#555",
  cream: "#f8f8f8",
};

export default {
  great: palette.green,
  good: palette.grellow,
  ok: palette.orange,
  bad: palette.red,
  ratings: [
    "transparent",
    palette.red,
    palette.orange,
    palette.grellow,
    palette.green,
  ],

  highlight: palette.blue,

  textLight: palette.cream,
  textDark: palette.charcoal,
  bgLight: palette.cream,
  bgDark: palette.charcoal,

  spaceS: "0.75rem",
  spaceM: "1rem",
  spaceL: "2rem",
  spaceXL: "4rem",
};
