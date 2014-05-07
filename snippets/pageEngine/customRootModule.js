var pageEngine = new aria.pageEngine.PageEngine();
pageEngine.start({
    pageProvider : myPageProviderInstance,
    rootModule : {
        classpath : "my.custom.RootModule",
        constructorArgs : {
            cfg : {}
        },
        initArgs : {
            further : "args"
        }
    }
});
