var gulp = require('gulp');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default',function(){
    gulp.src('js/*.js')
        .pipe(uglify('all.js'))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'));
});