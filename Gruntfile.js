/**
 * Example Gruntfile for Mocha setup
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      appServer: {
        // server begin
        options: {
          hostname: "localhost",
          port: 6234,
          keepalive: true
        }
        // server begin
      }
    },
    mocha: {
      testableJS: {
        src: ['./test/spec_runner/**/*.html'],        
        options: {
          reporter: 'Nyan',
        },
        dest: './test/output/xunit.out',
      }      
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-mocha');


  grunt.task.registerTask('appServer', ['connect']);
  grunt.task.registerTask('default', ['mocha']);
};
