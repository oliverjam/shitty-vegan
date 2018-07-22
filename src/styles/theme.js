import { hsl } from 'polished';

const palette = {
  green: hsl(110, 0.6, 0.55),
  grellow: hsl(75, 0.6, 0.55),
  orange: hsl(40, 0.6, 0.55),
  red: hsl(20, 0.6, 0.55),
  blue: hsl(220, 0.4, 0.6),

  charcoal: '#555',
  cream: '#f8f8f8',
};

export default {
  great: palette.green,
  good: palette.grellow,
  ok: palette.orange,
  bad: palette.red,
  ratings: [
    'transparent',
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

  spaceS: '0.75rem',
  spaceM: '1rem',
  spaceL: '2rem',
  spaceXL: '4rem',
};
