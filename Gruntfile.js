module.exports = function (grunt) {

  var configuration = {
    gitRemote : 'origin'
  };

  // -----------------------------------------------------------------------------------------------
  // Plugin tasks

  /**
   * Transpile the AngularJS arithmetic component using Babel
   */
  configuration.babel = {
    options : {
      sourceMap : true,
      presets : ['es2015']
    },
    components : {
      files : {
        'build/angular-arithmetic.es5.js' : 'components/arithmetic/arithmetic.js'
      }
    }
  };

  /**
   * Bump the package.json version property and commit the built artifacts
   * @see "release-major", "release-minor", "release-patch" registered tasks below
   */
  configuration.bump = {
    options : {
      commitFiles : [
        'build/angular-arithmetic.es5.js',
        'build/angular-arithmetic.es5.js.map',
        'build/angular-arithmetic.js',
        'CHANGELOG.md',
        'package.json'
      ],
      commitMessage : 'chore: release v%VERSION%',
      pushTo : '<%= gitRemote %>'
    }
  };

  /**
   * Clean the build directory
   */
  configuration.clean = ['build'];

  /**
   * Generate a CHANGELOG.md file based on the Angular commit message conventions
   */
  configuration.conventionalChangelog = {
    options : {
      changelogOpts : {
        preset : 'angular'
      }
    },
    release : {
      src : 'CHANGELOG.md'
    }
  };

  /**
   * Copy the Angular arithmetic component for external use
   */
  configuration.copy = {
    components : {
      files : {
        'build/angular-arithmetic.js' : 'components/arithmetic/arithmetic.js'
      }
    },
  };

  /**
   * Lint the ES6 components
   */
  configuration.eslint = {
    components : [
      'components/**/*.js'
    ]
  };

  /**
   * Run a karma instance to unit test the AngularJS components
   */
  configuration.karma = {
    components : {
      options : {
        preprocessors : {
          'components/**/*.js' : ['babel'],
        },
        files : [
          'node_modules/angular/angular.js',
          'node_modules/angular-mocks/angular-mocks.js',
          'components/**/*.js'
        ],
        browsers : ['PhantomJS'],
        frameworks : ['jasmine'],
        singleRun : true,
        babelPreprocessor : {
          options : {
            presets : ['es2015']
          }
        }
      }
    }
  };

  /**
   * Watch for components changes
   */
  configuration.watch = {
    components : {
      files : 'components/**/*.js',
      tasks : 'test'
    }
  };

  // -----------------------------------------------------------------------------------------------
  // Registered tasks

  /**
   * Build the AngularJS arithmetic component for external use
   */
  grunt.registerTask('build', [
    'clean',
    'test',
    'babel',
    'copy'
  ]);

  /**
   * Release a SemVer Major version (X.x.x)
   */
  grunt.registerTask('release-major', [
    'build',
    'bump-only:major',
    'conventionalChangelog',
    'bump-commit'
  ]);

  /**
   * Release a SemVer Minor version (x.X.x)
   */
  grunt.registerTask('release-minor', [
    'build',
    'bump-only:minor',
    'conventionalChangelog',
    'bump-commit'
  ]);

  /**
   * Release a SemVer Patch version (x.x.X)
   */
  grunt.registerTask('release-patch', [
    'build',
    'bump-only:patch',
    'conventionalChangelog',
    'bump-commit'
  ]);

  /**
   * Test the AngularJS components
   */
  grunt.registerTask('test', [
    'eslint',
    'karma'
  ]);

  // -----------------------------------------------------------------------------------------------
  // Dependencies

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-conventional-changelog');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig(configuration);

};