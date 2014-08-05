////#easypackage
module.exports = function (grunt) {
    grunt.registerTask('default', ['easypackage:one']);

    ////#loadNpmTasks
    grunt.loadNpmTasks('ariatemplates');
    ////#loadNpmTasks

    grunt.config.set('easypackage.one', {
        options : {
            sourceDirectories : ['src'],
            packages : [{
                        "name" : "app.js",
                        "files" : ["app/**/*", "!app/**/*.png"]
                    }, {
                        "name" : "plugins.js",
                        "files" : ["atplugins/**/*"]
                    }]
        }
    });
};
////#easypackage
////#atbuild
module.exports = function (grunt) {
    grunt.registerTask('default', ['atbuild']);

    grunt.loadNpmTasks('ariatemplates');

    grunt.config.set('atbuild.default', {
        options : {
            packages : require(__dirname + '/build/config/my-at-config.json')
        }
    });

};
////#atbuild

