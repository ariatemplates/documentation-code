{Template {
  $classpath : 'samples.widgets.datefield.TemplateDateField',
  $hasScript : false } }

  {macro main ( )}
    <fieldset> <legend> Date field demo </legend>
    <span> <h2> Date range validation </h2> </span>
    {var minDate = new Date(1980,0,1)/}
    {var maxDate = new Date(2025,11,25)/}
    {var shortFormat = aria.core.AppEnvironment.getDateFormats().shortFormat/}
    <p> Both dates should be between ${ minDate|dateformat:shortFormat } and ${ maxDate|dateformat:shortFormat } . </p>
    <div> <span> <h2> User format ( flying out on ) : </h2> </span>
    <p> 05 04 1980 - - > Updates to : 5 / 4 / 80 </p>
    <p> 05041980 - - > Updates to : 5 / 4 / 80 </p>
    <p> 04 APR1980 / + 1 - - > Updates to : 5 / 4 / 80 </p>
    <p>
    {@aria:DateField {
      label : "Flying out on",
      labelPos : "left",
      labelAlign : "right",
      helptext : "Enter date 1",
      width : 250,
      block : true,
      minValue : minDate,
      maxValue : maxDate }/}
    </p> <span> <h2> User format ( Returning on ) : </h2> </span>
    <p> 05 04 1980 - - > Updates to : Samedi 5 Avril 1980 </p>
    <p> 05041980 - - > Updates to : Samedi 5 Avril 1980 </p>
    <p> 07 APR1980 / - 2 - - > Updates to : Samedi 5 Avril 1980 </p> </div>
    <p>
    {@aria:DateField {
      label : "Returning on",
      labelPos : "left",
      labelAlign : "right",
      helptext : "Enter date 2",
      width : 350,
      block : true,
      pattern : aria.core.AppEnvironment.getDateFormats().fullFormat,
      minValue : minDate,
      maxValue : maxDate }/}
    </p> </fieldset>
  {/macro}

{/Template}