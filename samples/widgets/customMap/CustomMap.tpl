{Template {
  $classpath : "samples.widgets.customMap.CustomMap",
  $hasScript : true,
  $css : ["samples.widgets.customMap.CustomMapCSS", "samples.widgets.customMap.provider.MapMarkerCSS"],
  $wlibs: {
          "embed": "aria.embed.EmbedLib"
  }
}}

  {macro main()}
    <div class="mapSampleContainer">
      {@embed:Map {
        id : "myMap",
        provider : "custom",
        initArgs : {
          latitude : 40.432067536364706,
          longitude : -3.7061067280859072,
          zoomLevel : 10,
          mapType : "road",
          controls : true,
          mapChooser : false,
          scrollWheelZoom : true,
          markerGroups : [{
            name : "green",
            markerType : "greenMarker"
          },{
            name : "blue",
            markerType : "blueMarker"
          }]
        },
        type : "DIV",
        attributes : {
          classList : ["mapContainer"]
        },
        loadingIndicator : true
      }/}

      <div class="infoSection">
        {call displayCommands()/}
        {call displayGroup("green")/}
        {call displayGroup("blue")/}
      </div>
    </div>

  {/macro}


  {macro displayCommands()}
    <div>
      <span class="control rounded greenBorder" {on click {fn : addMarker, scope : this, args : "green"}/}>Add</span>
      <span class="control rounded blueBorder" {on click {fn : addMarker, scope : this, args : "blue"}/}>Add</span>
      <span class="control rounded greyBorder" {on click centerOnAll/}>Center</span>
    </div>
  {/macro}


  {macro displayGroup(groupName)}
    <div class="markerGroup rounded  ${groupName}Border">
      <div class="${groupName}MarkerGroupHeader">
        <span>${groupName}</span>
        {@aria:CheckBox {
          onchange : {
            fn : toggleGroupVisibility,
            args : groupName
          },
          bind : {
            "value" : {
              inside: data.markerGroups[groupName],
              to: "visible"
            }
          }
        }/}
      </div>
      <div class="markerGroupContainer">
        <table>
          {repeater {
            content: data.markers[groupName],
            loopType: "array",
            type: "TBODY",
            childSections : {
                id: groupName,
                macro: {
                    name: "displayMarkerInfo"
                },
                type: "TR"
            }
          }/}
        </table>
      </div>
    </div>

  {/macro}

  {macro displayMarkerInfo(args)}
    {var item = args.item/}
    <td>${item.id}</td>
    <td>
      {@aria:CheckBox {
        onchange : {
          fn : toggleMarkerVisibility,
          args : item
        },
        bind : {
          "value" : {
            inside: item,
            to: "visible"
          }
        }
      }/}
    </td>
    <td><span{on click {fn : centerOn, scope : this, args : item.position}/}>center</span></td>

  {/macro}

{/Template}