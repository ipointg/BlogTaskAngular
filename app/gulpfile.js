var gulp = require('gulp'),
    less = require('gulp-less');
gulp.task('less', function(){
    return gulp.src('./src/app.less')
        .pipe(less())
        .pipe(gulp.dest('./'))
});
gulp.task('watch', function() {
    gulp.watch('src/app.less', ['less']);
});
