var { gulp, parallel, watch, src, dest} = require('gulp');
var js_import = require('gulp-js-import');
var browserSync = require('browser-sync');

function importJs() {
    return src("assets/app.js").
    pipe(js_import({
        hideConsole : true,
        importStack: true
    }))
    .pipe(dest("dist/js"));
}


function watchFiles() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    watch("./assets/**/*.js", importJs).on('change', browserSync.reload);
    watch("*.html").on('change', browserSync.reload);
}


exports.importJs = importJs;
exports.watchFiles = watchFiles;
exports.default = watchFiles;