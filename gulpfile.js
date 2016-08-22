var gulp = require('gulp');

gulp.task('default',function(){
    /*gulp.src('js/a.js')
        .pipe(minify())
        .pipe(gulp.dest('build/a.min.js'));*/
    var stream = gulp.src('js/a.js')
        .pipe(minify())
        .pipe(gulp.dest('build/a.min.js'));
    return stream;
});