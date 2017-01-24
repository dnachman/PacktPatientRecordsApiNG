/// <binding AfterBuild='stylemaker' ProjectOpened='lesswatcher' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/


var gulp = require('gulp');
var gulpless = require('gulp-less');

gulp.task('stylemaker', function () {
    gulp.src("./less/styles.less")
        .pipe(gulpless({ compress: true }))
        .pipe(gulp.dest("./wwwroot/css"));
});

gulp.task('lesswatcher', function() {
    gulp.watch("./less/*.less", ["stylemaker"]);
});
