var liste1 = [["a","b","c"],["a","b","c"],["a","b","c"],["a","b","c"],["a","b","c"],["a","b","c"],["a","b","c"],["a","b","c"],["a","b","c"],["a","b","c"]];
    
    

   for (var i = 0; i < liste1.length; i++) {
      var lignetab = "<tr>";/*déclare ma nouvelle ligne de tableau html*/

    for (var x = 0 ;x < liste1[i].length ; x++) {
      lignetab+="<td>";//ajoute une colonne à ma ligne
      lignetab+=liste1[i][x];//ajoute à cette colonne la valeur
      lignetab+="</td>";
      
    }
    lignetab+="</tr>";
    
    document.getElementById('classmt').innerHTML+=lignetab;
  }
  