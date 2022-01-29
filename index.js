function GetMap() {
    var map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'AtEkXNzDUPvuBvqBdOvEO9hhcBMvIWBj6t-_1FVGdLdHIjaQ_Js9l0-5-d_vlnVg',
        center: new Microsoft.Maps.Location(29.054112, 119.410129),
        zoom : 11       
    });


    //Create custom Pushpin
    var firstlocation = new Microsoft.Maps.Location(29.054112, 119.410129)
    var pin = new Microsoft.Maps.Pushpin(firstlocation, {
        title: 'Tangxi City God Temple',
        subTitle: '湯谿縣城隍廟',
        text: '1'
    });
    var infobox;

    //Create an infobox at the map but don't show it.
    infobox = new Microsoft.Maps.Infobox(map, {
        visible: false,
    });

    //Assign the infobox to a map instance.
    infobox.setMap(map);

    //Store some metadata with the pushpin.
    pin.metadata = {
        title: 'Tangxi City God Temple 湯谿縣城隍廟',
        description: ' <p>这里是湯谿縣城隍廟的简介</p><br><a href="menu/index.html">Details</a>'
    };

    //Add a click event handler to the pushpin.
    Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);

    function pushpinClicked(e) {
        //Make sure the infobox has metadata to display.
        if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });
        }
    }

    var secondcation = new Microsoft.Maps.Location(28.822968, 119.851934)
    var pin2 = new Microsoft.Maps.Pushpin(secondcation, {
        title: 'Guodong Village',
        subTitle: '郭洞村',
        text: '2'
    });
    var infobox2;
    infobox2 = new Microsoft.Maps.Infobox(map, {
        visible: false,
    });

    infobox2.setMap(map);
    pin2.metadata = {
        title: 'Guodong Village 郭洞村',
        description: ' <p>这里是郭洞村的简介</p><br><a href="Guodong/menu/index.html">Details</a>'
    };
    Microsoft.Maps.Events.addHandler(pin2, 'click', pushpinClicked);
    
    var thirdcation = new Microsoft.Maps.Location(29.363032, 119.361547)
    var pin3 = new Microsoft.Maps.Pushpin(thirdcation, {
        title: 'Zhiyan Village',
        subTitle: '芝堰村',
        text: '3'
    });
    var infobox3;
    infobox3 = new Microsoft.Maps.Infobox(map, {
        visible: false,
    });

    infobox3.setMap(map);
    pin3.metadata = {
        title: 'Zhiyan Village 芝堰村',
        description: ' <p>这里是芝堰村的简介</p><br><a href="#">Details</a>'
    };
    Microsoft.Maps.Events.addHandler(pin3, 'click', pushpinClicked);
    
    

    //Add the pushpin to the map
    map.entities.push(pin);
    map.entities.push(pin2);
    map.entities.push(pin3);
}

