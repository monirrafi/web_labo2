let chemin = "../interets/";
/*
let listeInteret = [
  {"id":1,"link":"musique.html"},
  {"id":2,"link":"loisir.html"},
  {"id":3,"link":"musique.html"},
  {"id":4,"link":"loisir.html"}
];
*/
let listeInteret = [
  "musique","soccer","dessin","autre"
]
let listeSite = [
  "https://en.wikipedia.org/wiki/Music","https://www.fifa.com","https://www.fifa.com",
  "https://www.pbs.org/wnet/nature"
]
let remplirInteretDansSelect = () =>{
  document.getElementById('idframe').src = listeSite[0];
  let selInteret = document.getElementById('selInteret');
  for(let unInteret of listeInteret){
    selInteret.options[selInteret.options.length] = new Option(unInteret);
  }
}
let traiterInterert = () => {

  let selInteret = document.getElementById('selInteret');
  let idInteret = selInteret.options[selInteret.selectedIndex].text;
  /*
  let objInteret = listeInteret.find(unInteret => unInteret.id == idInteret);
  
  let srcInteret;
 */
  let index = listeInteret.findIndex( interet => interet == idInteret);
 // for(let unInteret of listeInteret){
  //  if(unInteret == idInteret){
      document.getElementById('idframe').src = listeSite[index];

  //  }
//    selInteret.options[selInteret.options.length] = new Option(unInteret);
 // } 
  

}
