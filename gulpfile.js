var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    sass = require('gulp-ruby-sass')
    bower = require('gulp-bower')
    notify = require("gulp-notify") ;

gulp.task('js', function () {
   return gulp.src('public/js/*.js')
      .pipe(plugins.uglify())
      .pipe(plugins.concat('goalpad.js'))
      .pipe(gulp.dest('./build'));
});
