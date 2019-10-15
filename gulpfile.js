var gulp=require('gulp'),
    pump=require('pump'),
    rename=require('gulp-rename'),
    minifyCSS=require('gulp-minify-css');

gulp.task('css', done => {
    // 1\. 找到文件
    gulp.src('css/creative.css')
    // 2\. 压缩文件
        .pipe(minifyCSS())
        // 3\. 另存为压缩文件
        .pipe(gulp.dest('dist/css'))

    done();
})

