````function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
   let notaDosAlunos = (p1+ p2 + ex) / 3
  if (notaDosAlunos >= 9){
    return "A"
  }else if( notaDosAlunos < 9 && notaDosAlunos >= 7.50){
    return "B"
  }else if(notaDosAlunos < 7.50 && notaDosAlunos >= 6){
    return "C"
  }else{
    return "D"
}```
````
