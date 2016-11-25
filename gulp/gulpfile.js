var gulp = require('gulp');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefix = require('gulp-autoprefixer');
var gulpif = require('gulp-if');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var del = require('del');
var http = require('http');
var st = require('st');
var open = require('gulp-open');

gulp.task('clean', function () {
    return del(['dist']);
});

gulp.task('sass', function () {
    gulp.src('styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/styles'))
        .pipe(livereload({ start: true }));
});

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('dist'))
        .pipe(livereload({ start: true }));
});

gulp.task('server', function (done) {
    http.createServer(
        st({path: __dirname + '/dist', index: 'index.html', cache: false})
    ).listen(8080, done);
});

gulp.task('watch', function () {
    livereload.listen();
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