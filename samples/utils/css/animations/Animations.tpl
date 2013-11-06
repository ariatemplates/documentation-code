{Template {
  $classpath:'samples.utils.css.animations.Animations',
  $hasScript: true,
  $dependencies: ["aria.utils.css.Effects"],
  $css : ['samples.utils.css.animations.AnimationsCSS']
}}
    {macro main()}

        <div class="container">
            <h1>Box</h1>
            <div class="section">
                <h2>Background</h2>
                <div id="backgroundId" style="width: 100px; height: 70px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat;"></div>
                <button {on click "animateBackground"/}>Animate</button>
            </div>
            <div class="section">
                <h2>Borders</h2>
                <div id="borderId" style="width: 100px; height: 70px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat; border: 1px solid blue;"></div>
                <button {on click "animateBorders"/}>Animate</button>
            </div>
            <div class="section">
                <h2>Outline width</h2>
                <div id="outlineWidthId" style="width: 100px; height: 70px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat;  outline: blue dotted 1px;"></div>
                <button {on click "animateOutlineWidth"/}>Animate</button>
            </div>
            <div class="section">
                <h2>Position</h2>
                <div id="positionId" style="width: 100px; height: 70px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat; position: relative;"></div>
                <button {on click "animatePosition"/}>Animate</button>
            </div>
            <div class="section">
                <h2>Size</h2>
                <div id="sizeId" style="width: 100px; height: 30px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat;"></div>
                <button {on click "animateSize"/}>Animate</button>
            </div>
            <div class="section">
                <h2>Min size</h2>
                <div id="minsizeId" style="min-width: 150px; min-height: 70px; width: 100px; height: 30px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat;"></div>
                <button {on click "animateMinsize"/}>Animate</button>
            </div>
            <div class="section">
                <h2>Max size</h2>
                <div id="maxsizeId" style="width: 150px; height: 70px; max-width: 100px; max-height: 30px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat;"></div>
                <button {on click "animateMaxsize"/}>Animate</button>
            </div>
            <div class="section" style="borders: 1px solid blue;">
                <h2>Margin</h2>
                <div style="border: 1px solid blue; display: inline-block;">
                    <div id="marginId" style="width: 100px; height: 70px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat;"></div>
                </div>
                <button {on click "animateMargin"/}>Animate</button>
            </div>
            <div class="section" style="borders: 1px solid blue;">
                <h2>Padding</h2>
                <div id="paddingId" style="width: 100px; height: 70px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat;border: 1px solid blue;"></div>
                <button {on click "animatePadding"/}>Animate</button>
            </div>

            <h1>Text</h1>
            <div class="section">
                <h2>Font size</h2>
                <div id="fontsizeId" style="width: 100px; height: 70px;font-size: 18px;">Aria templates</div>
                <button {on click "animateFontsize"/}>Animate</button>
            </div>
            <div class="section">
                <h2>Word spacing</h2>
                <div id="wordSpacingId" style="width: 100px; height: 70px;font-size: 18px;white-space: nowrap;">Aria templates</div>
                <button {on click "animateWordSpacing"/}>Animate</button>
            </div>
            <div class="section">
                <h2>Letter spacing</h2>
                <div id="letterSpacingId" style="width: 100px; height: 70px;font-size: 18px;">Aria templates</div>
                <button {on click "animateLetterSpacing"/}>Animate</button>
            </div>
           <div class="section">
                <h2>Text indent</h2>
                <div id="textIndentId" style="width: 100px; height: 70px;font-size: 18px;">Aria templates</div>
                <button {on click "animateTextIndent"/}>Animate</button>
            </div>
            <div class="section">
                <h2>Line height</h2>
                <div id="lineHeightId" style="width: 100px; height: 70px;font-size: 18px;">Aria templates</div>
                <button {on click "animateLineHeight"/}>Animate</button>
            </div>

            <h1>Other</h1>
            <div class="section">
                <h2>Spacing</h2>
                <table id="spacingId" style="border-spacing: 1px; border: 1px solid black;">
                    <tr>
                        <td style="border: 1px solid black;">Click</td>
                        <td style="border: 1px solid black;">me!</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid black;">Click</td>
                        <td style="border: 1px solid black;">me!</td>
                    </tr>
                </table>
                <button {on click "animateSpacing"/}>Animate</button>
            </div>
            <div class="section">
                <h2>Scroll</h2>
                <div id="scrollId" style="height: 90px; overflow: scroll;">
                    <div style="width: 300px; height: 200px; margin-left:0px; background: url(http://ariatemplates.com/images/logo-page.png) no-repeat;"></div>
                </div>
                <button {on click "animateScroll"/}>Animate</button>
            </div>
        </div>

    {/macro}


{/Template}
