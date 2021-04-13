import babel from '@rollup/plugin-babel'
import svg from './rollup-plugin-svg'

const config = {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    svg({
      include: /\.svg/
    })
  ]
};

export default config;
