////#urlmap1
aria.core.DownloadMgr.updateUrlMap({
	foo : {
		bar : {
			"BarClass" : "foo/bar/AnotherBarClass.js"
		}
	}
});
////#urlmap1

////#urlmap2
aria.core.DownloadMgr.updateUrlMap({
	foo : {
		bar : {
			"*" : "foo/bar.js"
		}
	}
});
////#urlmap2

////#rootmap
aria.core.DownloadMgr.updateRootMap({
	foo : {
		"*" : "/newroot/",
		specialclasses : "/specialroot/"
	}
})
////#rootmap

////#urlmapper1
myUrlMapper : function (logicalPath) {
	return logicalPath + ";jsessionid=" + d.currentSessionId;
}
////#urlmapper1

////#rootmapper1
myRootMapper : function (logicalPath) {
	if (/bar\//.test(logicalPath)) {
		return "newBarPath/"
	} else {
		return ""
	}
}
////#rootmapper1

////#urlmapper2
aria.core.DownloadMgr.updateUrlMap({
	foo : {
		"*" : myUrlMapper
	}
});
////#urlmapper2

////#urlmapper3
aria.core.DownloadMgr.updateUrlMap({
	foo : {
		"*" : function (logicalPath) {
			return logicalPath + ";jsessionid=" + someGlobalObject.currentSessionId;
		}
	}
});
////#urlmapper3

////#urlmapperCB
var myUrlMapper = new aria.utils.Callback({
	fn : function (logicalPath) {
		return logicalPath + ";jsessionid=" + this.currentSessionId;
	},
	scope : anObjectWithTheSessionId
});
////#urlmapperCB
