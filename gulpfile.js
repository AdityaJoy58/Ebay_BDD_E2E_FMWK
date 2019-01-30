var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var reporter = require("gulp-protractor-cucumber-html-report");

gulp.task("execute",function () {
    return gulp.src([])
        .pipe(protractor({
            configFile: "./conf.js"
        })).on('error', (err) => {
            gulp.start('report',function() {
                throw err});
        }).on('end',  () => {
            gulp.start('report');
        });
    }
);

gulp.task("report", function () {
    gulp.src("./reports/cucumber-test-results.json")
        .pipe(reporter({
            dest: "reports"
        }));
});
