const dayjs = require('dayjs')
const gulp = require('gulp')
const browserSync = require('browser-sync')
const gulpPug = require('gulp-pug')
const plumber = require('gulp-plumber')
const plumberErrorHandler = require('gulp-plumber-error-handler')
const filter = require('gulp-filter')
const rename = require('gulp-rename')
const { loadMarkdown } = require('./util/markdown')
const { loadJSON } = require('./util/json')
const ENV = process.env.NODE_ENV || 'development'

// TODO: move that things to another place
const classFromProp = (key, value) => {
  if (!value) {
    return null
  }

  return typeof value === 'string' ? value : key
}
const cn = props =>
  Object.keys(props)
    .reduce((acc, key, i) => {
      const className = classFromProp(key, props[key])

      return className ? acc.concat(className) : acc
    }, [])
    .join(' ')
const formatDate = date => dayjs(date).format('YYYY MMMM')

const md = loadMarkdown()
const json = loadJSON()
const data = {
  cv: md,
  json,
}

function pug(cb) {
  gulp
    .src('src/**/*.pug')
    .pipe(
      plumber({
        errorHandler: plumberErrorHandler(
          'Error was occurred during PUG compile',
        ),
      }),
    )
    .pipe(filter('src/pages/*'))
    .pipe(
      gulpPug({
        basedir: 'src',
        pretty: ENV === 'production',
        locals: {
          formatDate,
          cn,
        },
        data,
      }),
    )
    .pipe(
      rename({
        dirname: '.',
      }),
    )
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
  cb()
}

module.exports = {
  pug,
}
