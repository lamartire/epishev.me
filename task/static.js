const gulp = require('gulp')
const browserSync = require('browser-sync')
const imageMin = require('gulp-imagemin')

function fonts(cb) {
  gulp.src('src/assets/fonts/**/*').pipe(gulp.dest('dist/assets/fonts'))
  cb()
}

function images(cb) {
  gulp
    .src('src/assets/img/**/*')
    .pipe(imageMin())
    .pipe(gulp.dest('dist/assets/img'))
    .pipe(browserSync.stream())
  cb()
}

function pdf(cb) {
  gulp.src('src/assets/pdf/*').pipe(gulp.dest('dist/assets/pdf'))
  cb()
}

function cname(cb) {
  gulp.src('CNAME').pipe(gulp.dest('dist'))
  cb()
}

module.exports = {
  fonts,
  images,
  pdf,
  cname,
}
