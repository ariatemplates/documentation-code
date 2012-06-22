var myObj = new x.z.MyClass();
var myItf = myObj.$interface('x.z.MyInterface');

var myInterceptor = function (param) {
	alert("Interceptor: " + param.method + " [" + param.step + "].");
};

myObj.$addInterceptor('x.z.MyInterface', myInterceptor);

myItf.mySimpleFunction();
myObj.mySimpleFunction();

var myCallback = function () {
	alert("myCallback is called.");

	myObj.$removeInterceptors('x.z.MyInterface', null, myInterceptor);
	myItf.mySimpleFunction();
};

myItf.myAsynchronousFunction(myCallback);
