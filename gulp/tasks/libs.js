module.exports = function () {
    $.gulp.task("libs", function () {
        return $.gulp.src(["./src/libs/**/*.js", "!./src/libs/**/jquery.js"])
            .pipe($.sourcemaps.init())
            .pipe($.concat("libs.js"))
            .pipe($.uglify())
            .pipe($.rename({suffix: ".min"}))
            .pipe($.sourcemaps.write("./maps/"))
            .pipe($.gulp.dest("./dest/js/"))
            .pipe($.debug({"title": "scripts"}))
            .on("end", $.browsersync.reload);
    });
};