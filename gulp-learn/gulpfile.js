var gulp = require('gulp');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefix = require('gulp-autoprefixer');
var gulpif = require('gulp-if');
var sass = require('gulp-sass');
var del = require('del');
var st = require('st');
var connect=require('gulp-connect');
var open = require('gulp-open');
var proxy = require('http-proxy-middleware');

gulp.task('clean', function () {
    return del(['dist']);
});

gulp.task('sass', function () {
    gulp.src('src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/styles'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('json', function () {
  return gulp.src('src/test.json')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
});

gulp.task('server', function (done) {
    connect.server({
        root:'dist',
        livereload: true,
        middleware: function (connect, opt) {
          return [
            proxy('/**/*.action', {
              target: 'http://dangerous.com',
              changeOrigin:true
            })
          ]
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('src/styles/*.scss', ['sass']);
    gulp.watch('src/*.html', ['html']);
});

gulp.task('open', function () {
    gulp.src('src/')
        .pipe(open({
            uri:'http://localhost:8080',
            app:'chrome'
        }))
});

gulp.task('serve', ['clean', 'sass', 'json', 'html', 'server','open','watch']);




gulp.task('demo-concat', function () {
  return gulp.src('demo/*.js').pipe(concat('test.js')).pipe(gulp.dest('./demo-dist/'))
})

gulp.task('demo-min', ['demo-concat'], function () {
    gulp.src('demo-dist/*.js').pipe(uglify()).pipe(gulp.dest('./demo-dist/'))
})
gulp.task('demo', ['demo-concat', 'demo-min'])
