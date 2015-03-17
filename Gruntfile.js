'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
};
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            task: {
                src: ['source'],
                dest: 'destination'
            },
            options: {
                'banner': null,
                'keepSpecialComments': '*',
                'report': 'min'
            }
        },
        sass: {
            task: {
                src: ['source'],
                dest: 'destination'
            },
            options: {
                'sourcemap': 'auto',
                'trace': false,
                'unixNewlines': false,
                'check': false,
                'style': 'nested',
                'precision': 3,
                'quiet': false,
                'compass': false,
                'debugInfo': false,
                'lineNumbers': false,
                'loadPath': [],
                'require': [],
                'cacheLocation': '.sass-cache',
                'noCache': false,
                'bundleExec': false,
                'banner': '',
                'update': false
            }
        },
        watch: {
            task: {
                src: ['source'],
                dest: 'destination'
            },
            options: {
                'spawn': true,
                'interrupt': false,
                'debounceDelay': 500,
                'interval': 100,
                'event': 'all',
                'reload': false,
                'forever': true,
                'dateFormat': null,
                'atBegin': false,
                'livereload': false,
                'cwd': process.cwd(),
                'livereloadOnError': true
            },
            livereload: {
                files: ['inc/**/*.html', '*.html', 'css/*.css', 'js/**/*.js', 'img/**/*.{png,jpg,jpeg,webp}'],
                tasks: ['concat:dist']
            }
        },
        compass: {
            task: {
                src: ['source'],
                dest: 'destination'
            },
            options: {
                'gigantocluster-of-options-see-them-here': 'https'
            }
        },
        connect: {
            task: {
                src: ['source'],
                dest: 'destination'
            },
            options: {
                'port': 8000,
                'protocol': 'http',
                'hostname': '0.0.0.0',
                'base': '.',
                'directory': null,
                'keepalive': false,
                'debug': false,
                'livereload': false,
                'open': false,
                'useAvailablePort': false,
                'onCreateServer': null,
                'middleware': []
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-livereload');

    grunt.registerTask('default', ['cssmin', 'sass', 'watch', 'compass', 'connect']);
};