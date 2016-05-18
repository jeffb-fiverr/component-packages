const pkg = require('../package.json');
const gulp = require('gulp');

gulp
    .task('watch', () => {
        gulp.watch([`lib/styles/**/*.scss`], ['styles']);
        gulp.watch([`lib/js/**/*.jsx`, `public/src/**.*.js`], ['build']);
    });