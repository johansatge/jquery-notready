module.exports = function(grunt)
{
    grunt.initConfig(
    {
        bower:  grunt.file.readJSON('bower.json'),
        watch:
        {
            js:
            {
                files: 'assets/js/*.js',
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
                    'assets/js/jquery.notready.min.js': 'assets/js/jquery.notready.js',
                    'assets/js/jquery.ready.min.js': 'assets/js/jquery.ready.js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify:js']);
    grunt.registerTask('watch', ['watch:js']);
};