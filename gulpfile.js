const { series, src, dest, watch } = require('gulp')
const fileInclude = require('gulp-file-include')
const sass = require('gulp-sass')(require('sass'))


const html = () => {
  return src(['./#src/index.html'])
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./build/'))
}

const scss = () => {
  return src(['./#src/scss/index.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./build/'))
}

const js = () => {
  return src(['./#src/js/index.js'])
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./build/'))
}

const images = () => {
  return src(['./#src/images/**/*'])
    .pipe(dest('./build/images/'))
}

const watchFiles = () => {
  watch('./#src/**/*.html', html)
  watch('./#src/scss/**/*.scss', scss)
  watch('./#src/js/**/*.js', js)
  watch('./#src/images/**/*', images)
}

exports.default = series(html, scss, js, images, watchFiles)
