var awspublish = require('gulp-awspublish'),
    gulp = require('gulp');

gulp.task('publish', function () {

    // create a new publisher using S3 options 
    // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property 
    var publisher = awspublish.create({
        region: 'us-east-1',
        params: {
            Bucket: 'webok.com'
        }
    });

    // define custom headers 
    var headers = {
        'Cache-Control': 'max-age=315360000, no-transform, public'
        // ... 
    };

    return gulp.src('./dist/**/*.*')
        // gzip, Set Content-Encoding headers and add .gz extension 
        .pipe(awspublish.gzip({ ext: '' }))

        // publisher will add Content-Length, Content-Type and headers specified above 
        // If not specified it will set x-amz-acl to public-read by default 
        .pipe(publisher.publish(headers))

        //sync ????
        // .pipe(publisher.sync)

        // create a cache file to speed up consecutive uploads 
        .pipe(publisher.cache())

        // print upload updates to console 
        .pipe(awspublish.reporter());
});