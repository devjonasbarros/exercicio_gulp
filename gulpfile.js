
const gulp = require('gulp');

// Plugins instalados e declarados 

const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Comprimindo imagens com Gulp JS

function comprimirImagem(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

// Comprimindo arquivo em Java Script

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

// Comprimindo arquivo Sass em CSS

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}


// Exportando as funções criadas - tarefas 

exports.sass = compilaSass;
exports.watch = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
}

exports.javascript = comprimeJavaScript;
exports.images = comprimirImagem;


// INSTRUÇÕES NO TERMINAL 

// Comando para execultar as imagens ( compressão )
// npm run gulp images


// Comando para execultar SCSS       ( compilação )
// npm run gulp sass

// Comando para execultar javaScript  ( compressão )
// npm run gulp javascript