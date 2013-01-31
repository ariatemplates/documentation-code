Aria.tplScriptDefinition({
  $classpath : 'samples.widgets.splitter.TemplateSplitterScript',
  $prototype : {
    $dataReady : function () {
      this.data['firstPanelSize'] = 100;
      this.data['secondPanelSize'] = 150;
      this.data['s2firstPanelSize'] = 100;
      this.data['s2secondPanelSize'] = 100;
      this.data['counter'] = 1;
    },
    changeState : function (a, b) {
      this.$json.setValue(this.data, "counter", this.data['counter'] + 1 );
      if (b == "mOnePlus") {
        if (this.data['firstPanelSize'] < 397) {
          this.$json.setValue(this.data, "firstPanelSize", this.data['firstPanelSize'] + 50);
        }
      }
      if (b == "mOneMinus") {
        if (this.data['firstPanelSize'] > 0) {
          this.$json.setValue(this.data, "firstPanelSize", this.data['firstPanelSize'] - 50);
        }
      }
      if (b == "mTwoPlus") {
        if (this.data['secondPanelSize'] < 397) {
          this.$json.setValue(this.data, "secondPanelSize", this.data['secondPanelSize'] + 50);
        }
      }
      if (b == "mTwoMinus") {
        if (this.data['secondPanelSize'] > 0) {
          this.$json.setValue(this.data, "secondPanelSize", this.data['secondPanelSize'] - 50);
        }
      }
      if (b == "subSplitterPlus") {
        if (this.data['s2firstPanelSize'] < this.data['firstPanelSize']) {
          this.$json.setValue(this.data, "s2firstPanelSize", this.data['s2firstPanelSize'] + 25);
        }
      }
      if (b == "subSplitterMinus") {
        if (this.data['s2firstPanelSize'] > 0) {
          this.$json.setValue(this.data, "s2firstPanelSize", this.data['s2firstPanelSize'] - 25);
        }
      }
    }

  }
});