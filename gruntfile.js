module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
                files: ['./sass/*.scss'],
                tasks: ['sass', 'cssmin'],
            }
        },

        uglify: {
            options: {
                manage: false
            },
            my_target: {
                files: {
                    './js/main.min.js': ['./js/input2.js']
                }
            }
        },

        sass: {
            dist: {
                files: {
                    './css/style.css': './sass/style.scss'
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: './css',
                    src: ['*.css', '!*.min.css'],
                    dest: './css',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};