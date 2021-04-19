import babel from '@rollup/plugin-babel'
import svg from './rollup-plugin-svg'

const config = {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'esm',
    banner: '// I am a banner',
    footer:'// I am a footer',
    outro: '// I am a outro',
    intro: '// I am a intro'
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    svg({
      include: /\.svg/
    })
  ]
};

export default config;
