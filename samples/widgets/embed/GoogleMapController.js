/**
 * This is the map controller for the embed sample. It can be any class with onEmbeddedElementCreate and
 * onEmbeddedElementDispose available
 */
Aria.classDefinition({
    $classpath : "samples.widgets.embed.GoogleMapController",
    $dependencies : ["aria.utils.ScriptLoader"],
    $interface : ["aria.embed.IEmbedController"],
    $events : {
        "MapLoaded" : "Raised when the map is loaded"
    },
    $constructor : function () {
        this.apiLoaded = false;
        this.map = null;
        this.element = null;
    },
    $prototype : {

        /**
         * Initialize the map
         * @param {HtmlNode} domContainer Embed widget container
         */

        initMap : function (domContainer) {
            if (this.apiLoaded) {
                this._initMap(domContainer);
            } else {
                var that = this;
                Aria.$frameworkWindow.onMapLoaded = function () {
                    that.apiLoaded = true;
                    that._initMap(domContainer);
                    that.$raiseEvent("MapLoaded");
                    Aria.$frameworkWindow.onMapLoaded = null;
                };
                aria.utils.ScriptLoader.load(["http://maps.googleapis.com/maps/api/js?sensor=false&callback=onMapLoaded"]);
            }
        },

        /**
         * Internal initializer for the map
         * @private
         */
        _initMap : function (domContainer) {
            this.element = document.createElement("DIV");
            var el = this.element;
            el.style.width = "100%";
            el.style.height = "100%";

            var myOptions = {
                center : new google.maps.LatLng(43.623495, 7.071201),
                zoom : 15,
                mapTypeId : google.maps.MapTypeId.ROADMAP
            };

            this.map = new google.maps.Map(el, myOptions);

            // Initialise a "offdom" marker
            this.addMarker({
                title : "Offdom marker",
                infoWindow : "<b>Offdom marker</b>",
                lat : 43.618990,
                lon : 7.074999
            });

            domContainer.appendChild(el);

        },
        /**
         * Called on widget refresh
         * @private
         */
        onEmbeddedElementCreate : function (domContainer) {
            // If I never created the map, I create it now and then return its DOM object
            if (!this.map) {
                this.initMap(domContainer);
            } else {
                domContainer.appendChild(this.element);
            }
        },
        /**
         * Called on widget dispose
         * @private
         */
        onEmbeddedElementDispose : function (domContainer) {
            // The widget/template containing the map now is being refreshed or destroyed
            // Let's move the map out of the dom so that it can be re-inserted later
            // If I know that, functionally, it doesn't make sense to keep the map anymore, I destroy it
            if (this.map) {
                this.element.parentNode.removeChild(this.element);
            }
        },

        // The rest of the file is pure functional stuff
        // Like listening to ECB events to know when to get rid of the map completely

        getMap : function () {
            return this.map;
        },

        addMarker : function (options) {
            var googleOptions = {
                map : this.map,
                position : new google.maps.LatLng(options.lat, options.lon),
                title : options.title,
                optimized: false
            };
            var marker = new google.maps.Marker(googleOptions);
            var map = this.map;
            if (options.infoWindow) {
                var infowindow = new google.maps.InfoWindow({
                    content : options.infoWindow
                });
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);
                });
            }
        }
    }
});
