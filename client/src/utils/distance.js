export function calculateDistanceBetweenPoints(pos1, pos2) {
    // Radius of the Earth in miles
    const R = 3958.8;

    // Convert latitude and longitude of the first marker to radians
    const rlat1 = pos1.lat * (Math.PI / 180);
    const rlon1 = pos1.lng * (Math.PI / 180);

    // Convert latitude and longitude of the second marker to radians
   const rlat2 = pos2.lat * (Math.PI / 180);
   const rlon2 = pos2.lng * (Math.PI / 180);

    // Calculate the differences in latitude and longitude
    const diffLat = rlat2 - rlat1;
    const diffLon = rlon2 - rlon1;

        // Haversine formula to calculate the distance
    const a = Math.sin(diffLat / 2) * Math.sin(diffLat / 2) +
                Math.cos(rlat1) * Math.cos(rlat2) *
                Math.sin(diffLon / 2) * Math.sin(diffLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance; // Distance between the two points in miles
}
