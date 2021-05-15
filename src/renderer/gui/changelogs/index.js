const files = require.context('.', false, /\.js$/)
const re = []
const compare = require('version-comparison')
files.keys().forEach(key => {
  if (key === './index.js' || key === './template.js') return
  re.push({version: key.replace(/(\.\/|\.js)/g, ''), info: files(key).default})
})
let fn = (m, n) => {
  return compare(m['version'], n['version'])
}
let modules = re.sort(fn).reverse()
export default modules
