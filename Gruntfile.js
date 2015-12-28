module.exports = function(grunt) {
	// require('load-grunt-tasks')(grunt);

		// Necessary for task configuration to useful (listed above)
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks("grunt-contrib-eslint");
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.loadNpmTasks('grunt-babel');

	grunt.initConfig({
		uglify: {
			options: {
				mangle: true,
				compress: true,
				sourceMap: "dist/application/map",
				banner: "/* Author: Andy Nunez*/\n"
			},
			target: {
				src: "build/application.compiled.js",
				dest: "dist/application.compiled.min.js"
				// src: "dest/application.js",
				// dest: "dist/application.min.js"
			}
		},
		babel: {
			options: {
				presets: ['es2015']
			},
		  files: 
		    {
		        expand:true,
		        cwd: 'dest',
		        dest: 'build',
		        src: ['application.js'],
		        ext: '.compiled.js'
		    }  		  
		    // {
		    //     expand:true,
		    //     cwd: 'src',
		    //     dest: 'build',
		    //     src: ['**/*.js'],
		    //     ext: '.compiled.js'
		    // }  
		},
		eslint: {
				src: ["**/*.js"],
				rules: {
					"eqeqeq": true,
					"curly": true,
					"undef": true
				}
		},
		jshint: {
			options: {
				jshintrc: "rc/jshintrc"
			},
			target: {
				src: "src/*.js"
			}
		},
		concat: {
			options: {
				seperator: ";"
			},
			target: {
				// src: ["src/application.js", "src/util.js"],
				src: ["src/*.js"],
				dest: "dest/application.js"
			}
		},
		watch: {
			scripts: {
				files: ["src/*.js"],
				tasks: ["default"]
			}
		},
		coffee: {
			options: {
				bare: true,
				join: false,
				seperator: ";"
			},
			target: {
				expand: true,
				cwd: 'src/',
				src: '*.coffee',
				dest: 'lib',
				ext: ".js"
			}
		},
		nodeunit: {
			target: 'test/*_test.js'
		},
		clean: {
			target: ['dist', 'build', 'lib']
		},
		multi: {
			target: {
				name: "andy",
				age: 23
			},
			other: {
				arr: [1,2,3],
				bool:false
			},
			last: {
				obj: {
					one: 1,
					two: 2
				}
			}
		},
		plugins:{
			target: {
				src: "src/*.js"
			}
		}
	});


	// Custom plugin
	// grunt.loadTasks('/home/fishtails/Development/node/grunt/tutsplus/plugins/tasks') 

	// Actual task that are run at commandline
	// grunt.registerTask("default", ['jshint', 'concat', 'babel']);
	grunt.registerTask("default", ['jshint', 'concat', 'babel', 'uglify']);
	grunt.registerTask("reboot", ['clean', 'default']);
	grunt.registerTask("es6", ['babel']);


	// custom tasks
	grunt.registerTask("tutorial", "doing something api like... or not.", function(){
		console.log('doing something javascripty here');
	});
	grunt.registerTask("tutorialWithArgs", function(one,two){
		var str = this.name + ": ";
		str += one || "one";
		str += two ? ", " + two: ", two";

		console.log(str);
	});

	// Configuring mulitple tasks in one swoop :)
	grunt.registerMultiTask("multi", function() {
		console.log(this.target);
		console.log(this.data);
	});

	// Working with grunt file api
	grunt.registerTask("files", function(){
		var str = grunt.file.read("package.json");
		grunt.log.writeLn(str);
	});
}