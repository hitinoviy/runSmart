const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('server', function(){
    browserSync.init({
        server:{
            baseDir: 'srs'
        }
    });
});

gulp.task('styles', function(){
    return gulp.src('srs/sass/**/*.+(scss|sass)')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rename({
                prefix:'',
                suffix:'.min'
            }))
            .pipe(autoprefixer())
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest('srs/css'))
            .pipe(browserSync.stream());
});

gulp.task('watch', function(){
    gulp.watch('srs/sass/**/*.+(scss|sass)', gulp.parallel('styles'))
    gulp.watch('srs/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch','server','styles'));