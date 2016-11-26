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

gulp.task('clean', function () {
    return del(['dist']);
});

gulp.task('sass', function () {
    gulp.src('styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/styles'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('server', function (done) {
    connect.server({
        root:'dist',
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch('styles/*.scss', ['sass']);
    gulp.watch('*.html', ['html']);
});

gulp.task('open', function () {
    gulp.src('./')
        .pipe(open({
            uri:'http://localhost:8080',
            app:'chrome'
        }))
});

gulp.task('serve', ['clean', 'sass', 'html', 'server','open','watch']);