var path = require('path');
var fs = require('fs');
var glob = require("glob");
require('js-yaml');

var rootFolder = path.join(__dirname, '..');
var samplesFolder = path.join(rootFolder, 'samples');
var filelist = [];


//Start the process here
glob("**/*.yml", {cwd: samplesFolder}, function (er, files) {
        files.sort();
        for(var i = 0, ii = files.length; i < ii; i++) {
            var file = files[i];

            var doc;
            try {
                doc = require(path.join(samplesFolder, file));
            } catch (e) {
                doc = {};
                console.log(e);
            }

            filelist.push({
                path: doc.template || "",
                title: doc.title || "",
                categories: doc.categories || "",
                desc: doc.description || "",
                release: doc.release || false
            });
        }
        saveManifest(filelist);
});

var saveManifest = function(filelist) {
    fs.writeFile(rootFolder + '/manifest.json', JSON.stringify(filelist, null, "\t"), function() {
        processEnd();
    });
};

var processEnd = function() {
    console.log("The manifest.json has been generated");
};
