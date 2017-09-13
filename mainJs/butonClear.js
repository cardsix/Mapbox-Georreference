function viewclearAll() {

  LayersArray = ["cerroAlegre", "cerroMiraflores", "cerroCarcel", "cerroPanteon", "cerroLaLoma", "cerroJimenez", "cerroSanJuandeDios", "cerroYungay", "cerroBellavista", "cerroFlorida", "cerroMariposas", "cerroMonjas", "territorio", "sector18", "sector27", "18A", "18B", "18C", "27A", "27B", "27C"];
  //LayersArray = ["cerroAlegre", "cerroMiraflores", "cerroCarcel", "cerroPanteon", "cerroLaLoma", "cerroJimenez", "cerroSanJuandeDios", "cerroYungay", "cerroBellavista", "cerroFlorida", "cerroMariposas", "cerroMonjas", "territorio", "sector18", "sector27", "18A", "18B", "18C", "27A", "27B", "27C", "Busqueda", "Postrado", "Inmovilizado"];
  for (i = 0; i < LayersArray.length; i++) {
    if (map.getLayer(LayersArray[i])) {
      map.removeLayer(LayersArray[i]);
    }
  }
}

function viewclearSearch() {
  SearchArray = ["Busqueda"];
  SearchSource = ["markers0"];
  if (map.getLayer(SearchArray[0])) {
    map.removeLayer(SearchArray[0])
  }
  if (map.getSource(SearchSource[0])) {
    map.removeSource(SearchSource[0])
  }
}