const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const fileinclude = require('gulp-file-include');

// .init starts the server
gulp.task ('server', function() {
	browserSync.init({
	    server: "./app"
	});
});

// Now call methods on bs instead of the
// main browserSync module export
// browserSync.reload("*.html");



gulp.task ('watch', function() {
	watch (['./app/*.html', './app/css/**/*.css'], gulp.parallel(browserSync.reload));
	watch ('./app/scss/**/*.scss', gulp.parallel('scss'));
	watch ('./app/html/**/*.html', gulp.parallel('html'));
});

gulp.task ('scss', function(callback) {
	return gulp.src('./app/scss/main.scss')
		.pipe(plumber({
			errorHandler: notify.onError(function(err){
				return {
					title: 'Styles',
					sound: false,
					message: err.message
				}
			})
		}))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({ //заппуск автопрефиксов  после запуска sass
			overrideBrowserslist: ['last 4 versions']
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./app/css/'));
	callback();
});


gulp.task('html', function(callback){
	return gulp.src('./app/html/*.html')
	.pipe(plumber({
		errorHandler: notify.onError(function(err){
			return {
				title: 'HML include',
				sound: false,
				message: err.message
			}
		})
	}))
	.pipe(fileinclude({prefix:'@@'}))
	.pipe(gulp.dest('./app/'))
	callback();
})

gulp.task ('default', gulp.parallel('server', 'watch', 'scss', 'html'));
