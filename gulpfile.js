var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// process JS files and return the stream.
gulp.task('css', function () {
    return gulp.src('css/*css')
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('css-watch', ['css'], function (done) {
    browserSync.reload();
    done();
});

// use default task to launch Browsersync and watch JS files
gulp.task('default', ['css'], function () {

    // Serve files from the root of this project
    browserSync.init(['css/*.css', '*.html'],{
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("css/*.css", ['css-watch']);
});