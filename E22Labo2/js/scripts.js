let chemin = "../interets/";
let listeInteret = [
  {"id":1,"link":"musique.html"},
  {"id":2,"link":"loisir.html"},
  {"id":3,"link":"musique.html"},
  {"id":4,"link":"loisir.html"}
];

let remplirInteretDansSelect = () =>{
  document.getElementById('idframe').src = chemin+"musique.html";
  let selInteret = document.getElementById('selInteret');
  for(let unInteret of listeInteret){
    selInteret.options[selInteret.options.length] = new Option(unInteret.id, unInteret.link);
  }
}
let traiterInterert = () => {
  
  let selInteret = document.getElementById('selInteret');
  let idInteret = selInteret.options[selInteret.selectedIndex].value;
  let objInteret = listeInteret.find(unInteret => unInteret.id == idInteret);
  let srcInteret = objInteret.id;
  
 // document.getElementById('frameErr').innerHTML = srcInteret;

  document.getElementById('idframe').src = chemin + srcInteret;

}
