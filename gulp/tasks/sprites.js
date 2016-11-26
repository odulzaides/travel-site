var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del');

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

// Clean out old folders
gulp.task('beginClean', function () {
    return del(['./app/temp/sprite', './app/assets/images/sprites'])
});

// Make a sprite file from icon or image files
gulp.task('createSprite', ['beginClean'], function () {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});

// Copy SVG to corresct location in assets/images/sprites folder
gulp.task('copySpriteGraphic', ['createSprite'], function () {
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites/'))
});

// Copy styles file to the modules so icons can be used
gulp.task('copySpriteCSS', ['createSprite'], function () {
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules/'))
});

// Clean up /app/temp folder
gulp.task('endClean', ['copySpriteCSS'], function () {
    return del(['./app/temp/sprite'])
});

// Main icon task to trigger process 
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
