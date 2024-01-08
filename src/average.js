export default function calculerMoyenne(tableau) {
    if (tableau.length === 0) {
      return 0;
    }
  
    var somme = 0;
    for (var i = 0; i < tableau.length; i++) {
      somme += tableau[i];
    }
  
    var moyenne = somme / tableau.length;
    return moyenne;
}
