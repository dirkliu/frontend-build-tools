module.exports = function myTest () {
  return {
    name: 'my-test',
    options (ops) {
      // console.log('options ops:', ops)
      return ops
    },

    buildStart (source) {
      // console.log('buildStart source:', source)
    },

    resolveId (source, importer, options) {
      console.log('resolveId source:', source)
      console.log('resolveId importer:', importer)
      console.log('resolveId options:', options)
      return source
    }
    // load (id) {
    //   console.log('id:', id)
    //   return 'export default 8'
    // }
  }
}
