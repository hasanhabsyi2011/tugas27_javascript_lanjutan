var kalimat1 = ["No","rumah saya", 30,"A"]
var kalimat2 = ["Jalan pangeran Tirtayasa No", 70]

function konkat(kalimat){
      var gabungKal = "";
      for(var i = 0; i<kalimat.length; i++){
      	gabungKal = gabungKal.concat(kalimat[i]," ");
      }
  console.log(gabungKal)
}
konkat(kalimat1);
konkat(kalimat2);
