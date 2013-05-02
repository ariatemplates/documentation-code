Aria.tplScriptDefinition({
	$classpath : 'samples.widgets.select.bindoptions.BindOptionsScript',
	$prototype : {
		 changeList : function () {
		 	var i = this.data.list.length;
		 	if (i-1 < this.data.morevalues.length) {
		 		this.$json.splice(this.data.list, i, 0, this.data.morevalues[i-1]);
		 	}
		}
	}
});
