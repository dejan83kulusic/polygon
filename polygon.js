function inside(point, vs) {

    var x = point[0], y = point[1];

    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside;
}
{
    var polygon = [[32, 126], [163, 32], [293, 127], [244, 282], [82, 281]];
    document.addEventListener('click', function (event) {
        let isInsidePolygon = inside([event.clientX, event.clientY], polygon);
        if (isInsidePolygon)
            document.getElementById('click-result').innerHTML = 'You clicked inside of polygon.';
        else
            document.getElementById('click-result').innerHTML = 'You clicked outside of polygon.';
    });

}