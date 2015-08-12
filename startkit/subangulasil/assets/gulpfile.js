var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
var bower = require('gulp-bower');
var notify = require('gulp-notify');

var config = {
    sassPath: './dev/sass',
    bowerDir: './bower_components'
};

gulp.task('bower', function () {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

gulp.task('move_scripts', function () {
    return gulp.src('./dev/js/**')
        .pipe(gulp.dest('./prod/js'));
});

gulp.task('css', function () {
    return gulp.src(config.sassPath + '/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'})
            .on("error", notify.onError(function (error) {
                return "Error: " + error.message;
            })))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./prod/css'))
});

gulp.task('watch', function () {
    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});

gulp.task('install', ['bower', 'move_scripts', 'css']);