module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: [
      'halloween',
      'lofi',
      'cupcake',
      'synthwave',
      'dark',
      'black',
      'cmyk',
      'light',
      'luxury',
      'wireframe',
      'fantasy',
      'pastel',
      'aqua',
      'forest',
      'garden',
      'valentine',
      'cyberpunk',
      'retro',
      'corporate',
      'emerald',
      'bumblebee',
      'dracula',
    ],
    base: false,
    utils: true,
    logs: true,
    rtl: false,
  },
}