/*
ProgramasArray = [objects[0][1].id, objects[1][1].id, objects[2][1].id];
ProgramasSource = [objects[0][1].source, objects[1][1].source,objects[2][1].source];
*/
/*
console.log(objects);
*/
//exports.tip= function(objects){

exports.popUp = function() {
  map.on('click', 'Adulto Mayor', function(e) {
    new mapboxgl.Popup()
      .setLngLat(e.features[0].geometry.coordinates)
      .setHTML(e.features[0].properties.description)
      .addTo(map);
  });
  map.on('mouseenter', 'Adulto Mayor', function() {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseleave', 'Adulto mayor', function() {
    map.getCanvas().style.cursor = '';
  });
}
//}
