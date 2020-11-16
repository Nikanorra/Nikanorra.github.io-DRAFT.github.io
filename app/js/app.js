const {src, dest, parallel, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();

function browsersync(){
	browserSync.init({
		server: {
				baseDir: "./app/"
		}
		notify: true,
		online: true
	})
}

function scripts(){
	
}
exports.browsersync = browsersync;
