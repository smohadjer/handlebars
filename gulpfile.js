var gulp = require('gulp');

// Rerun the task when a file changes
gulp.task('watch', function() {
	//gulp.watch('app/resources/css/*', ['sass']);
});

// serve development templates
gulp.task('serve', ['watch']);
