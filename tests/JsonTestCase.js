/**
 * Retrieve a file containing a json and test it against a bean
 */
Aria.classDefinition({
    $classpath : "tests.JsonTestCase",
    $extends : "aria.jsunit.TestCase",
    $dependencies : ["aria.core.IO", "aria.core.JsonValidator"],
    $prototype : {

        /**
         * Retrieve the file containing the json and tests it against a bean. if bean-related properties are not set in
         * the argument, then the simple loading of the json object will be asserted
         * @param {Object} args Contains the information on the file containing the json and a bean definition
         *
         * <pre>
         * {
         *    filepath : {String} Path of the file containing the json,
         *    beanClass : {String} Classpath of the bean definition,
         *    beanName : {String} Name of the bean definition within the bean class. The name of the beanClass has to be omitted,
         *    cb : {aria.core.CfgBeans.Callback} Callback. It receives a boolean as first argument indicating the success of the test
         * }
         * </pre>
         */
        _testJson : function (args) {
            args = args || {};
            if (args.beanClass && args.beanName) {
                Aria.load({
                    classes : [args.beanClass],
                    oncomplete : {
                        fn : this._retrieveFile,
                        scope : this,
                        args : args
                    }
                });
            } else {
                this._retrieveFile(args);
            }
        },

        /**
         * @param {Object} args It looks like this
         *
         * <pre>
         *
         * {
         *    filepath : {String} Path of the file containing the json,
         *    beanClass : {String} Classpath of the bean definition,
         *    beanName : {String} Name of the bean definition within the bean class. The name of the beanClass has to be omitted,
         *    cb : {aria.core.CfgBeans.Callback} Callback
         * }
         * </pre>
         */
        _retrieveFile : function (args) {
            aria.core.IO.asyncRequest({
                url : aria.core.DownloadMgr.resolveURL(args.filepath),
                expectedResponseType : "json",
                callback : {
                    fn : this._afterFileRetrieve,
                    scope : this,
                    args : args
                }
            });
        },

        /**
         * @param {Object} res Contains the response json
         * @param {Object} args It looks like this
         *
         * <pre>
         *
         * {
         *    filepath : {String} Path of the file containing the json,
         *    beanClass : {String} Classpath of the bean definition,
         *    beanName : {String} Name of the bean definition within the bean class. The name of the beanClass has to be omitted,
         *    cb : {aria.core.CfgBeans.Callback} Callback
         * }
         * </pre>
         */
        _afterFileRetrieve : function (res, args) {
            var json = res.responseJSON;
            if (!json) {
                this.$callback(args.cb, false);
                return;
            }
            if (!args.beanClass || !args.beanName) {
                this.$callback(args.cb, true);
                return;
            }
            var valid = aria.core.JsonValidator.normalize({
                json : json,
                beanName : args.beanClass + "." + args.beanName
            }, true);
            this.$callback(args.cb, valid);
        }

    }

});