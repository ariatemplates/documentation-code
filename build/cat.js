var path = require('path');
var fs = require('fs');
var glob = require("glob");
var yaml = require('js-yaml');

var rootFolder = path.join(__dirname, '..');
var samplesFolder = path.join(rootFolder, 'samples');
var filelist = [];


var categories = {
        "samples\\.widgets\\.widgetlibs" : "Widgets/Libs",
        "samples\\.widgets\\.(\\w+)" : "Widgets/$1",
        "samples\\.html\\.custom" : "Widgets/Custom",
        "samples\\.intro\\.SgtGreeters" : "Templates",
        "samples\\.templates\\.cdata" : "Templates",
        "samples\\.templates\\.csstemplates" : "Templates/Css",
        "samples\\.templates\\.domInteractions" : "Templates/Dom",
        "samples\\.templates\\.keyboardnavigation" : "Templates/Keyboard navigation",
        "samples\\.templates\\.templateScripts" : "Templates/Template scripts",
        "samples\\.templates\\.tplinheritance" : "Templates/Inheritance",
        "samples\\.templates\\.(\\w+)" : "Templates/$1",
        "samples\\.features\\.(\\w+)" : "Features/$1",
        "samples\\.pageEngine" : "Page engine",
        "samples\\.modules" : "Modules",
        "samples\\.utils\\.domevents" : "Utils/Dom events",
        "samples\\.utils\\.css\\.animations" : "Utils/Animations",
        "samples\\.utils\\.keynav" : "Utils/Keyboard navigation",
        "samples\\.utils\\.visualfocus" : "Utils/Focus",
        "samples\\.utils\\.loadingoverlay" : "Utils/Loading overlay",
        "samples\\.utils\\.scrollcontrol" : "Utils/Scroll control",
        "samples\\.utils\\.(\\w+)" : "Utils/$1",
};

var createdCat = {};

//Start the process here
glob("**/*.yml", {cwd: samplesFolder}, function (er, files) {

        files.sort();
        for(var i = 0, ii = files.length; i < ii; i++) {
            var file = files[i];
            var fullpath = path.join(samplesFolder, file);

            var doc;
            try {
                doc = require(fullpath);
            } catch (e) {
                doc = {};
                console.log(e);
            }

            var newCats = [];
            for(var regexpStr in categories) {
                var matches = doc.template.match(new RegExp(regexpStr));
                if (matches) {
                    var cat = categories[regexpStr];
                    for(var j = 1, jj = matches.length; j < jj; j++) {
                        var matchWithCase = matches[j];
                        matchWithCase = matchWithCase.substr(0,1).toUpperCase() + matchWithCase.substr(1);
                        cat = cat.replace(new RegExp("\\$" + j, "g"), matchWithCase);
                    }
                    newCats.push(cat);
                    createdCat[cat] = createdCat[cat] || 0;
                    createdCat[cat]++;
                    break;
                }
            }

            if (!newCats.length) {
                console.log(doc.template + " matches nothing");
            }
            newCats = newCats.join("/");
            if (!doc.categories) {
                fs.appendFileSync(fullpath, "\ncategories: " + newCats);
            }
        }
        processEnd(filelist);
});

var processEnd = function() {
    console.log(createdCat);
    console.log("The categories have been generated");
};
