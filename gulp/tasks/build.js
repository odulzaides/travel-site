//    Ready site for distribution 

// This build file can be used along
// with the other module files in the
// gulp folder. 
// All modules and templates need to be included
// in order for it to work.


var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    cssnano = require('gulp-cssnano'),
    rev = require('gulp-rev'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

// setup browser to preview dist
gulp.task('previewDist',function(){
    browserSync.init({
    notify: false,
    server: {
      baseDir: "dist"
    }
  });
})

// delete previous dist folder and start fresh
gulp.task('deleteDistFolder', function () {
    return del('./dist')
});

// compress all css and js files and copy to dist folder
gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function () {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [function () {return rev()},function () {return cssnano()}],
            js: [function () {return rev()},function () {return uglify()}]
        }))
        .pipe(gulp.dest('./dist'))
});

// copy over any additional files not included in app/assets or /app/temp folder
gulp.task('copyGeneralFiles', ['deleteDistFolder'], function () {
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/image/**',
        '!./app/assets/scripts/**',
        '!./app/assets/styles/',
        '!./app/assets/styles/**',
        '!./app/temp/',
        '!./app/temp/**'
    ];
    return gulp.src(pathsToCopy)
        .pipe(gulp.dest('./dist'))
});

// optimize images 
gulp.task('optimizeImages', ['deleteDistFolder', 'icons'], function () {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./dist/assets/images'));
});

// build task with dependencies
gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin']);