{Template {
    $classpath:'samples.customization.flow.flows.templates.Avail'
}}
    {macro main()}
        {var lastSearch=data.lastSearch/}

        <h1>Availability</h1>
        <h2>Your search:</h2>
        From: ${lastSearch.from.cityName}, ${lastSearch.from.countryName}<br/>
        To: ${lastSearch.to.cityName}, ${lastSearch.to.countryName}<br/>
        Date: ${lastSearch.date|dateformat:aria.utils.environment.Date.getDateFormats().longFormat}<br/><br/>
        {@aria:Button {
            label: "Change search criteria",
            onclick: function () {
                flowCtrl.navigate("search");
            }
        }/}
        <br/><br/>
        <h2>Flights:</h2>
        <table>
            <tr>
                <td>Flight Number</td>
                <td>Airline</td>
                <td>Departure time</td>
                <td>Arrival time</td>
            </tr>
            {foreach flight in data.avails}
                <tr>
                    <td>${flight.flightId}</td>
                    <td>${flight.airline}</td>
                    <td>${flight.departureTime}</td>
                    <td>${flight.arrivalTime}</td>
                </tr>
            {/foreach}
        </table>
        {@aria:Button {
            label: "Info",
            onclick: function () {
                flowCtrl.navigate("info");
            }
        }/}
    {/macro}
{/Template}
