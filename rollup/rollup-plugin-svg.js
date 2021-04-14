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
      // console.log('resolveId source:', source)
      // console.log('resolveId importer:', importer)
      return null
    },

    load (id) {
      console.log('load this.getModuleInfo:', this.getModuleInfo())
      return null
    },

    transform (code, id) {
      // console.log('code:', code)
      if (!filter(id)) return null
      return `
        const name = 'It is a svg: ${code}'
        export default name
      `
    },

    moduleParsed (module) {
      // console.log('module.importers:', module.importers)
      // console.log('moduleInfo', tjis)
    },

    resolveDynamicImport (specifier, importer) {
      // specifier 动态模块说明符
      // importer 由哪个模块引用的动态模块
      console.log('resolveDynamicImport specifier:', specifier)
      console.log('resolveDynamicImport importer:', importer)
      return null
    },

    buildEnd (error) {
      console.log('buildEnd error:', error)
    }
  } 
}
