const gulp = require('gulp')
const rename = require('gulp-rename')
const csso = require('gulp-csso')
const clean = require('gulp-clean')
const sass = require('gulp-sass')(require('sass'))

function cleanDist(){
    return gulp.src('dist/**/*')
    .pipe(clean())
}

function buildCss(){
    return gulp.src('src/style.scss')
    .pipe(sass({}))
    .pipe(gulp.dest('dist'))
    .pipe(csso())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist'))
}


const build = gulp.series(cleanDist, buildCss)

exports.build = build
exports.clean = gulp.series(cleanDist)