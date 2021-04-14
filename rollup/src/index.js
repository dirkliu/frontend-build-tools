// var a = (name) => {
//   console.log('name:', name)
// }
// a('test')
let mod = './a'
import svg from './test.svg'
import(mod).then(({a}) => {
  a('I am a')
})

console.log('svg:', svg)
