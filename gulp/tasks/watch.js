var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

    gulp.task('watch', function () {
    browserSync.init({
        notify: false,
        server: {
            baseDir: 'app'
        }
    });
    // Start HTML
    watch('./app/*.html', function () {
        browserSync.reload();
    });
    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'], ()=>{
    return gulp.src('./app/src/styles/styles.css')
        .pipe(browserSync.stream());
});