var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    importcss = require('postcss-import');


    gulp.task('styles', function () {
        return gulp.src('./app/assets/styles/*.css')
            .pipe(postcss([importcss, cssvars, nested, autoprefixer]))
            .on('error', function(errorInfo){
                console.log(errorInfo.toString());
                this.emit('end');
            })
            .pipe(gulp.dest('./app/src/styles/'));
    });