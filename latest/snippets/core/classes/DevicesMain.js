Aria.classDefinition({
	$classpath : "ariadoc.snippets.core.classes.DevicesMain",
	$dependencies : ["ariadoc.snippets.core.classes.Disk"],

	$singleton : true,

	$prototype : {
		execute : function () {
			////#execute
			var disk = ariadoc.samples.classes.Disk("MainOS", 100);

			alert("Disk " + disk.id() + " and size " + disk.size() + "GB is active? " + disk.isOn());
			disk.start();
			alert("Disk " + disk.id() + " and size " + disk.size() + "GB is active? " + disk.isOn());
			disk.stop();
			alert("Disk " + disk.id() + " and size " + disk.size() + "GB is active? " + disk.isOn());
			////#execute
		}
	}
});
