Aria.interfaceDefinition({
	$classpath : 'snippets.core.interceptors.MyInterface',
	$interface : {
		mySimpleFunction : function () {},
		myAsynchronousFunction : {
			$type : "Function",
			$callbackParam : 0
		}
	}
});
