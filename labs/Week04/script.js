function Run() {
    alert("Run function called!");
    
    var data = theJSON.data;

    var topLeftPoint = findTopLeft(data);
    var topRightPoint = findTopRight(data);
    var bottomLeftPoint = findBottomLeft(data);
    var bottomRightPoint = findBottomRight(data);

    var boundingBox = {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight: bottomRightPoint
    };

    console.log("Bounding box computed for ericmc33@tamu.edu: ");
    console.log(boundingBox);
}

function findTopLeft(data) {
    var maxLat = null;
    var minLon = null;
    data.forEach(element => {
        if (maxLat == null || element.lat > maxLat) maxLat = element.lat;
        if (minLon == null || element.lon < minLon) minLon = element.lon;
    });
    return { lat: maxLat, lon: minLon };
}

function findTopRight(data) {
    var maxLat = null;
    var maxLon = null;
    data.forEach(element => {
        if (maxLat == null || element.lat > maxLat) maxLat = element.lat;
        if (maxLon == null || element.lon > maxLon) maxLon = element.lon;
    });
    return { lat: maxLat, lon: maxLon };
}

function findBottomLeft(data) {
    var minLat = null;
    var minLon = null;
    data.forEach(element => {
        if (minLat == null || element.lat < minLat) minLat = element.lat;
        if (minLon == null || element.lon < minLon) minLon = element.lon;
    });
    return { lat: minLat, lon: minLon };
}

function findBottomRight(data) {
    var minLat = null;
    var maxLon = null;
    data.forEach(element => {
        if (minLat == null || element.lat < minLat) minLat = element.lat;
        if (maxLon == null || element.lon > maxLon) maxLon = element.lon;
    });
    return { lat: minLat, lon: maxLon };
}
