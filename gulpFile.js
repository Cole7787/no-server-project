var gulp = require('gulp')
, concat = require('gulp-concat')
, sass = require('gulp-sass')
, sourcemaps = require('gulp-sourcemaps')
, print = require('gulp-print')
, babel = require('gulp-babel');

var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();

gulp.task('hello', function(){
  console.log('Hello everybody!');
})

gulp.task('build-scss', function(){
  return gulp.src('views/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(cachebust.resources())
  .pipe(concat('styles.css'))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./dist'));
})

gulp.task('build-js', [], function() {
   return gulp.src(['app.js', 'views/**/*.js'])
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', ['build-scss', 'build-js'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html','./partials/*.html', 'views/**/*.scss', 'app.js', './views/**/*.js'], ['build']);
});
