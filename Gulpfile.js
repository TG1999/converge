let gulp = require('gulp')
let uglifyJS = require('gulp-uglify')
let cleanCSS = require('gulp-clean-css')
gulp.task('minify-css' , () => {
    return gulp.src('styles/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/styles'))
})
gulp.task('default',function() {
    gulp.watch('./styles/*.css', function(evt) {
        gulp.task('minify-css');
        });
})