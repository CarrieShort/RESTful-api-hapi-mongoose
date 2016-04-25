const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

const files = ['./server.js', './routes/*', './models/*'];
gulp.task('lint:test', () => {
  return gulp.src('./test/*')
  .pipe(eslint({
    envs: [
      'mocha',
      'es6'
    ]
  }))
  .pipe(eslint.format());
});

gulp.task('lint:nontest', () => {
  return gulp.src(files)
  .pipe(eslint({
    envs: [
      'es6'
    ]
  }))
  .pipe(eslint.format());
});

gulp.task('mocha', () => {
  return gulp.src('./test/*')
  .pipe(mocha())
  .once('end', () => {
    process.exit();
  });
});

gulp.task('default', ['lint:test', 'lint:nontest', 'mocha']);
