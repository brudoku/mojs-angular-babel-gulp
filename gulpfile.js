const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const connect = require('gulp-connect');
const gulp = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-minify-css');
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');

/*=====COPY HTML AND CLEAN=====*/
gulp.task('clean', function() {
    gulp.src('./dist/*')
        .pipe(clean({ force: true }));
    gulp.src('./ app/js/bundled.js')
        .pipe(clean({ force: true }));
});

gulp.task('copy-bower-components', function() {
    gulp.src('./app/bower_components/**')
        .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('copy-html-files', function() {
    gulp.src('./app/**/*.html')
        .pipe(gulp.dest('dist/'));
});

/*=====CONNECT=====*/
gulp.task('connect', function() {
    connect.server({
        root: 'app/',
        port: 8888,
        livereload: true
    });
});

gulp.task('connectDist', function() {
    connect.server({
        root: 'dist/',
        port: 9999
    });
});

gulp.task('reloadconnect', function() {
    gulp.src(['app/**/*.js'])
        .pipe(connect.reload())
});

gulp.task('watch', function() {
    gulp.watch('./app/js/**', ['browserify', 'reloadconnect']);
    gulp.watch('./app/css/*.*', ['less', 'process-css', 'reloadconnect']);
    gulp.watch('./app/*.html', ['reloadconnect']);
});

/*=====TRANSPILE=====*/
gulp.task('browserify', function() {
    gulp.src(['app/js/main.ts'])
        .pipe(babel())
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(concat('bundled.js'))
        .pipe(gulp.dest('./app/js'));
});

gulp.task('browserifyDist', function() {
    gulp.src(['app/js/main.ts'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(concat('bundled.js'))
        .pipe(gulp.dest('./dist/js'));
});

/*=====CSS=====*/
gulp.task('less', function() {
    return gulp.src('./app/css/main.less')
        .pipe(less())
        .pipe(gulp.dest('./app/css'));
});

gulp.task('process-css', function() {
    var opts = { comments: true, spare: true };
    gulp.src(['./app/css/main.css', '!./app/bower_components/**'])
        .pipe(minifyCSS())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./app/css/'))
});

gulp.task('process-css-dist', function() {
    var opts = { comments: true, spare: true };
    gulp.src(['./app/css/main.css', '!./app/bower_components/**'])
        .pipe(minifyCSS())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./dist/css/'))
});

/*=====TASKS=====*/
gulp.task('default', function() {
    runSequence(
        ['clean'], ['less', 'process-css', 'connect', 'watch', 'browserify']
    );
});

gulp.task('build', function() {
    runSequence(
        ['clean'], ['less', 'copy-html-files', 'process-css-dist', 'copy-bower-components', 'connectDist', 'browserifyDist']
    );
});