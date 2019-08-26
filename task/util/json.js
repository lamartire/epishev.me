const path = require('path')
const { readFileSync } = require('fs')
const fg = require('fast-glob')

const loadJSON = () => {
  const jsonGlob = path.resolve(__dirname, '../../src/data/**/*.json')
  const jsonPaths = fg.sync(jsonGlob)
  const jsonData = {}

  jsonPaths.forEach(filePath => {
    Object.assign(jsonData, {
      [path.parse(filePath).name]: JSON.parse(readFileSync(filePath, 'utf8')),
    })
  })

  return jsonData
}

module.exports = {
  loadJSON,
}
