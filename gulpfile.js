var gulp = require('gulp');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefix =require('gulp-autoprefixer');
var useref=require('gulp-useref');
var gulpif=require('gulp-if');
var sass=require('gulp-sass');
var del=require('del');

gulp.task('default',function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('autoprefix',function(){
    return gulp.src('css/*.css').pipe(autoprefix({browers:['last 4 versions']})).pipe(gulp.dest('dist/css'));
});

gulp.task('watch',function(){
    gulp.watch('css/*.css',['autoprefix']);
    gulp.watch('css/*.scss',['sass']);
})

gulp.task('clean', function() {
    return del(['dist/*']);
});

gulp.task('html',function(){
    gulp.src('*.html')
        .pipe(useref())
        .pipe(gulpif('*.js',uglify()))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass',function(){
    gulp.src('css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
});