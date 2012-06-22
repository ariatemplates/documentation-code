Aria.interfaceDefinition({
	$classpath : 'x.z.MyInterface',
	$interface : {
		mySimpleFunction : function () {},
		myAsynchronousFunction : {
			$type : "Function",
			$callbackParam : 0
		}
	}
});
