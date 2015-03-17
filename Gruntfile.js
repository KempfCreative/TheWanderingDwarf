'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
};
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            compass: {
                files: ['sass/**/*.scss'],
                tasks: ['compass']
            },
            livereload: {
                files: ['*.html', 'css/*.css', 'javascript/**/*.js', 'images/**/*.{png,jpg,jpeg,webp}']
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

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-livereload');

    grunt.registerTask('default', ['watch', 'compass', 'connect', 'open:local']);
};