function soma(n1, n2, n3, n4, n5) {
  totalDeFuros =
    parseFloat(n1) +
    parseFloat(n2) +
    parseFloat(n3) +
    parseFloat(n4) +
    parseFloat(n5);
  let alturaMedia = totalDeFuros / 5;
  return alturaMedia;
}


function calcular() {
    
  let f1 = document.querySelector("#f1").value;
  let f2 = document.querySelector("#f2").value;
  let f3 = document.querySelector("#f3").value;
  let f4 = document.querySelector("#f4").value;
  let f5 = document.querySelector("#f5").value;
  if(f1,f2,f3,f4,f5 == "" && f1,f2,f3,f4,f5 == 0){
    alert("Por favor Digite os Campos  em brancos para Realizar o Calculo")
  }
   else{
  let alturaMedia = soma(f1, f2, f3, f4, f5);
  let larguraDoCaminhao = prompt("Qual é Largura do Caminhão ? ");
  let comprimentoDoCaminhao = prompt("Qual é o Comprimento do Caminhão ?");

  let metroTotal = larguraDoCaminhao * comprimentoDoCaminhao * alturaMedia;

  alert(`${metroTotal.toFixed(2)}M²`);
        
};
}
