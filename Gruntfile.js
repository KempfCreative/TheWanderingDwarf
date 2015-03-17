'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
};
module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            compass: {
                files: ['sass/**/*.scss'],
                tasks: ['compass']
            },
            livereload: {
                files: ['*.html', 'css/*.css', 'javascript/**/*.js', 'images/**/*.{png,jpg,jpeg,webp}', 'articles/**/*.json'],
                tasks: ['concat:dist']
            }
        },
        concat: {
            options: {
                stripBanners: false,
                separator: ';',
                banner:''
            },
            dist: {
                files: {
                    'javascript/build/twd.js': [
                        'javascript/vendor/jquery-1.10.2.min.js',
                        'javascript/app.js',
                        'javascript/articleView.js',
                        'javascript/articleController.js',
                        'javascript/articleModel.js'
                    ]
                }
            }
        },
        compass: {
            options: {
                sassDir: 'sass',
                cssDir: 'css',
                imagesDir: 'img',
                javascriptsDir: 'js',
                fontsDir: 'fonts',
                relativeAssets: true
            },
            debug: {
                options: {
                    debugInfo: true
                }
            }
        },
        connect: {
            options: {
                port: 8000,
                protocol: 'http',
                hostname: 'localhost',
                base: ''
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                        mountFolder(connect, '')];
                    }
                }
            }
        },
        open: {
            local: {
                path: 'http:localhost:<%= connect.options.port %>'
            }
        }
    });

    grunt.registerTask('default', ['connect:livereload', 'open:local', 'watch']);
};