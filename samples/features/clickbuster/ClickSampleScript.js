Aria.tplScriptDefinition({
    $classpath : 'samples.features.clickbuster.ClickSampleScript',
    $prototype : {

      $dataReady: function () {
        this.data = {toggle: true, log: [], tapMode: "tap", element: "input"};
      },
      tapCB: function(evt) {
          aria.utils.Json.add(this.data.log, "tap")
          aria.utils.Json.setValue(this.data,"toggle", !this.data.toggle);
      },
      resetLabel: function(evt) {
          aria.utils.Json.setValue(this.data,"toggle", true);
      },
      inputCB: function(e, element) {
          aria.utils.Json.add(this.data.log, "click")
          alert("Click on " + element + "!");
          e.preventDefault();
          return false;
      }
    }
});
