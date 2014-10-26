module.exports = function(grunt)
{
    grunt.initConfig(
    {
        bower:  grunt.file.readJSON('bower.json'),
        watch:
        {
            js:
            {
                files: 'src/*.js',
                tasks: 'uglify:js',
                options:
                {
                    spawn: false
                }
            }
        },
        uglify:
        {
            options:
            {
                banner: '/* <%= bower.title %> <%= bower.version %> - <%= bower.homepage %> */\n'
            },
            js:
            {
                files:
                {
                    'dist/jquery.notready.min.js': 'src/jquery.notready.js',
                    'dist/jquery.ready.min.js': 'src/jquery.ready.js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify:js']);
    grunt.registerTask('watch', ['watch:js']);
};