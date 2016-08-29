var gulp = require('gulp');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefix =require('gulp-autoprefixer');
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
})

gulp.task('clean', function() {
    return del(['dist/*']);
});