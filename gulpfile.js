const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var files = ['*.js', './lib/*.js', './test/*.js'];

gulp.task('test:mocha', () => {
  return gulp.src('./test/**/*test.js')
    .pipe(mocha());
});

gulp.task('lint:tests', () => {
  return gulp.src('./test/**/*test.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint:app', () => {
  return gulp.src(files)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('test', ['test:mocha']);
gulp.task('lint', ['lint:tests', 'lint:app']);
gulp.task('watch', () => {
  gulp.watch(files, ['test', 'lint']);
});

gulp.task('default', ['watch', 'lint', 'test']);
