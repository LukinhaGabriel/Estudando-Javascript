function botao(){
    let inicio = Number(document.getElementById("primeiro").value);
    let ultimo = Number(document.getElementById("ultimo").value);
    let passo = Number(document.getElementById("passo").value);
    let resultado = document.getElementById("resultado");
    if(inicio == "" || ultimo == "" || passo == ""){
        resultado.innerHTML = "impossivel contar"
        resultado.style.textAlign = "center";
       
        
    }
    else{
         resultado.innerHTML = "Contando: ";
         let contador;
         if(inicio < ultimo){
            //CONTAGEM CRECENTE
            for(contador = inicio; contador <= ultimo; contador += passo){
                resultado.innerHTML += ` \u{1F449} ${contador} `;
            }
        }
        else{
            //CONTAGEM DECRECENTE
            for(contador = inicio; contador >= ultimo; contador -= passo){
                resultado.innerHTML += ` \u{1F449} ${contador} `
            }
        }
    }
}
