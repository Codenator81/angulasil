module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    var configBridge = grunt.file.readJSON('./grunt/configBridge.json', { encoding: 'utf8' });
    grunt.initConfig({
        clean: ["css"],
        less: {
            development: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                    sourceMapURL: 'style.css.map',
                    sourceMapFilename: 'css/style.css.map'
                },
                files: {
                    "css/style.css": "less/style.less" // destination file and source file
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: configBridge.config.autoprefixerBrowsers
            },
            core: {
                options: {
                    map: true
                },
                src: 'css/style.css'
            }
        },
        watch: {
            styles: {
                files: ['less/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });
    grunt.registerTask('less-compile', ['less:development']);
    grunt.registerTask('dist-css', ['less-compile', 'autoprefixer:core']);
    grunt.registerTask('default', ['clean', 'dist-css', 'watch']);
};
