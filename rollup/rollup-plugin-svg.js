import {createFilter} from '@rollup/pluginutils' 

export default function svg (options = {}) {
  const filter = createFilter(options.include, options.exclude)
  return {
    name: 'svg',
    // options (ops) {
    //   // console.log('options ops:', ops)
    //   return ops
    // },

    // buildStart (source) {
    //   // console.log('buildStart source:', source)
    // },

    resolveId (source, importer) {
      console.log('source:', source)
      console.log('importer:', importer)
      return null
    },

    load (id) {
      console.log('load id:', id)
      return null
    },

    transform (code, id) {
      console.log('code:', code)
      if (!filter(id)) return null
      return `console.log('It is a svg')`
    },

    moduleParsed (module) {
      console.log('module:', module)
    }
  } 
}
