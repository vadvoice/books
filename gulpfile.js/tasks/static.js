"use strict"

var config      = require('../config.json')
if(!config.tasks.static) return

var browserSync = require('browser-sync')
var gulp        = require('gulp')
var path        = require('path')

var paths = {
  "src": path.join( config.tasks.static.src, "**/*.*" ),
  "dest": config.tasks.static.dest
}

var staticTask = function() {
  return gulp.src(paths.src)
    .pipe(gulp.dest(paths.dest))
    .on('end', browserSync.reload)
}

gulp.task('static', staticTask)

module.exports = staticTask
