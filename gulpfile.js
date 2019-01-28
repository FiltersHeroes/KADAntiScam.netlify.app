var gulp = require('gulp');
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

// Compile SCSS files to CSS
gulp.task("sass", function () {
  return gulp.src("assets/sass/*.scss")
      .pipe(sass({
          outputStyle : "compressed"
      }))
      .pipe(autoprefixer({
          browsers : ["last 20 versions"]
      }))
      .pipe(gulp.dest("assets/css"));
});
