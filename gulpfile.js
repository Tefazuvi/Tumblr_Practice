/* Gulpfile.js */
let gulp = require('gulp')
//let gutil =  require('gulp-util')
let sass = require('gulp-sass')
let webserver = require('gulp-webserver');
let stylelint = require('gulp-stylelint');
let path = require('path')

/* tasks */
// gulp.task(
//   name : String,
//   deps : [] :: optional,
//   cb : fn
// )

/* Styles task */
gulp.task('styles', () => {
    return gulp.src('src/scss/main.scss')
        .pipe(sass({
            includePaths: [
                path.join(__dirname, 'node_modules/bootstrap/scss/'),
                path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/scss/'),
                path.join(__dirname, 'src/scss')]
            , outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('dist/css/'))
})

gulp.task('html', () => {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'))
})

// Fonts
gulp.task('fonts', function () {
    return gulp.src([
        'node_modules/@fortawesome/fontawesome-free/webfonts/*'])
        .pipe(gulp.dest('dist/webfonts/'));
});

gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', ['styles'], cb => cb)
    gulp.watch('src/**/*.html', ['html'], cb => cb)
})

gulp.task('server', () => {
    gulp.src('dist/')
        .pipe(webserver({
            livereload: true,
            open: true
        }))
})

gulp.task('linter', function lintCssTask() {
    return gulp
        .src('src/scss/**/main.scss')
        .pipe(stylelint({
            reporters: [
                { formatter: 'string', console: true }
            ]
        }));
});


gulp.task('start', [
    'html',
    'styles',
    //'linter',
    'fonts',
    'server',
    'watch'
], cb => cb)