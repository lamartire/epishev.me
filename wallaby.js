const fs = require('fs')
const path = require('path')
const babelConfig = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.babelrc'), 'utf-8')
)

module.exports = wallaby => {
  return {
    files: ['src/**/*.js', '!src/**/*.spec.js'],
    tests: ['src/**/*.spec.js'],
    env: {
      type: 'node'
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel(babelConfig)
    },
    testFramework: 'jest'
  }
}
