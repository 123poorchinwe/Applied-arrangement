let initialZoomLevel = 10;
let initialCenter = [1588911.734653, 6026906.806230];

let mapObjectInput = {
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        target: 'map',
        view: new ol.View({
          center: initialCenter,
          zoom: initialZoomLevel
        })
      };

var map = new ol.Map(mapObjectInput);

document.getElementById('zoom-out').onclick = function() {
    var view = map.getView();
    var zoom = view.getZoom();
    view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function() {
    var view = map.getView();
    var zoom = view.getZoom();
    view.setZoom(zoom + 1);
};

document.getElementById('reset').onclick = function() {
    var view = map.getView();
    view.animate({zoom: initialZoomLevel}, {center: initialCenter});
};

document.getElementById('left').onclick = function() {
    var view = map.getView();
    var currentCenter = view.getCenter();
    view.animate({center: [currentCenter[0] - 100000, currentCenter[1]]});
};

document.getElementById('right').onclick = function() {
    var view = map.getView();
    var currentCenter = view.getCenter();
    view.animate({center: [currentCenter[0] + 100000, currentCenter[1]]});
};

document.getElementById('up').onclick = function() {
    var view = map.getView();
    var currentCenter = view.getCenter();
    view.animate({center: [currentCenter[0], currentCenter[1] + 100000]});
};

document.getElementById('down').onclick = function() {
    var view = map.getView();
    var currentCenter = view.getCenter();
    view.animate({center: [currentCenter[0], currentCenter[1] - 100000]});
};

map.on('click', function(e) {
    console.log(e);
});

//Task1:Measure distance between two points on the map

var isMeasuring=false;//measure?
var firstPoint=null;
var measureButton=document.getElementById('measure');

//add 2 points and a line layer for measurement
var measureSource=new ol.source.Vector();
var measureLayer=new ol.layer.Vector({
    source:measureSource
});
map.addLayer(measureLayer);
//button click event
measureButton.onclick = function() {
    if (isMeasuring) {
        // cancel measurement
        isMeasuring=false;//then no points
        firstPoint=null;
        measureSource.clear();
        measureButton.textContent='Measure Distance';
        alert('Measurement cancelled.');
    } else {
        // start measure
        isMeasuring=true;
        firstPoint=null;
        measureSource.clear();
        measureButton.textContent='Click 2 points...';
        alert('Measurement!Add 2 points on the map.');
    }
};

// start measure 
map.on('click', function(e) {
    // no measure, do nothing
    if (!isMeasuring) {
        return;
    }
    var clickedCoord=e.coordinate;
    // point
    var point=new ol.Feature({
        geometry:new ol.geom.Point(clickedCoord)
    });
    point.setStyle(new ol.style.Style({
        image:new ol.style.Circle({
            radius:6,
            fill:new ol.style.Fill({color:'red'}),
            stroke:new ol.style.Stroke({color:'white',width:2})
        })
    }));
    measureSource.addFeature(point);
    
    if (firstPoint===null) {
        //1 pint, wait for the second
        firstPoint=clickedCoord;
        measureButton.textContent='Click 2nd point...';
    } else {
        //2 point, calculate distance
        var secondPoint=clickedCoord;
        var line=new ol.Feature({
            geometry:new ol.geom.LineString([firstPoint,secondPoint])
        });
        line.setStyle(new ol.style.Style({
            stroke:new ol.style.Stroke({color:'red', width:3})
        }));
        measureSource.addFeature(line);
        
        // distance
        var dx=secondPoint[0]-firstPoint[0];
        var dy=secondPoint[1]-firstPoint[1];
        var distance=Math.sqrt(dx*dx+dy*dy);
        var distanceKm=(distance/1000).toFixed(2);

        alert('Distance: '+distanceKm+'km');
        
        //reset
        isMeasuring=false;
        firstPoint=null;
        measureButton.textContent='Measure';
        
        // clear measurement after 3 seconds
        setTimeout(function() {
            measureSource.clear();
        }, 3000);
    }
});


// Task 2:Geolocation

document.getElementById('locate').onclick=function() {
    if (!navigator.geolocation) {
        alert('Your browser does not support geolocation.');
        return;
    }
    //get the current position by API
    navigator.geolocation.getCurrentPosition(
        function(position) {
            var lon=position.coords.longitude;
            var lat=position.coords.latitude;
            // convert WGS84 to EPSG:3857
            var userCoord=ol.proj.fromLonLat([lon, lat]);
            // fly to location
            var view=map.getView();
            view.animate({
                center:userCoord,
                zoom:15,
                duration:1000
            });
            // draw blue marker
            var locateSource=new ol.source.Vector();
            var locateLayer=new ol.layer.Vector({
                source:locateSource
            });
            map.addLayer(locateLayer);
            
            var marker=new ol.Feature({
                geometry:new ol.geom.Point(userCoord)
            });
            marker.setStyle(new ol.style.Style({
                image:new ol.style.Circle({
                    radius:10,
                    fill:new ol.style.Fill({color:'blue'}),
                    stroke:new ol.style.Stroke({color: 'white', width: 2})
                })
            }));
            locateSource.addFeature(marker);
            
            alert('Your location: '+lat.toFixed(4)+', '+lon.toFixed(4));
            
            // clear after 5 seconds
            setTimeout(function() {
                locateSource.clear();
            }, 5000);
        },
        function(error) {
            alert('Location failed. Error code:'+error.code);
        }
    );
};