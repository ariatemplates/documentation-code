Aria.classDefinition({
	$classpath : 'snippets.core.interceptors.MyClass',
	$constructor : function () {},
	$implements : ['snippets.core.interceptors.MyInterface'],
	$prototype : {
		mySimpleFunction : function () {
			alert('mySimpleFunction is called.');
		},
		myAsynchronousFunction : function (callback) {
			alert('myAsynchronousFunction is called.');
			aria.core.IO.asyncRequest({
				url : "myAction", // relative path pointing to a dynamic or static resource, for instance create a
									// text file "something.txt"
				callback : {
					fn : this._returnFromServer,
					scope : this,
					args : {
						callback : callback
					}
				}
			});
		},
		_returnFromServer : function (res, args) {
			alert('An answer (to the request done in myAsynchronousFunction) has been received from the server: '
					+ res.data);
			this.$callback(args.callback);
		}
	}
});
