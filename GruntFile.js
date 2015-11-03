module.exports = function (grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: "\n\n"
			},
			dist: {
				src: ['bower_components/jquery/dist/jquery.min.js','dev/script.js'],
				dest: 'js/app.js'
			},
			css: {
				src: ['bower_components/normalize-css/normalize.css','dev/style.css'],
				dest: 'css/app.css'
			}
		},
		sass: {
			dev: {
				files: {
					'dev/style.css': 'sass/style.scss'
				}
			}
		},
		autoprefixer: {
		    options: {
		        browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
		    },
		    main: {
		        expand: true,
		        flatten: true,
		        src: 'css/app.css',
		        dest: 'css/'
		    }
		},

		watch: {
			
			styles: {
				files: ['sass/*.scss'],
				tasks: ['sass:dev','concat:css','autoprefixer']
			}
		}
	});

	//npm tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	

	//tasks
	grunt.registerTask('default', 'Default Task Alias', ['build']);

	grunt.registerTask('build', 'Build the application', 
		['sass:dev','concat:dist','concat:css']);
}