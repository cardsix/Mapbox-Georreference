var calcButton = document.getElementById('draw');
var fiveofive = [];
exports.monkeys = function(gea2,largo) {

  fiveofive.push(gea2);
  if (fiveofive.length == largo) {

  calcButton.onclick = function() {

      var data = draw.getAll();
      if (data.features.length > 0) {
        for (i = 0; i < fiveofive.length; i++) {
          var ptsWithin = turf.within(fiveofive[i], data);
          console.log(ptsWithin);
        }
      } else {
        alert("Use la herramienta de dibujo");
      }

    }

  }
}