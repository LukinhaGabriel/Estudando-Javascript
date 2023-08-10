const arraynum = new Array;  
const lista = document.getElementById('valor_adicionado');
const resultado = document.getElementById("res");
function add() {
   const numero = document.getElementById("num");
   if(isNumero(numero.value) && !inlista(numero.value, arraynum)){
        arraynum.push(Number(numero.value));
        const item = document.createElement("option");
        item.text = `Valor ${numero.value} adicionado`;
        lista.appendChild(item);
        resultado.innerHTML = '';
        console.log(arraynum);

   } else{
         alert("Valor Invalaido ou já encontrado na lista");
        
    }
    numero.value = "";
    numero.focus();//pra voltar no input number//
    
}

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }
    else{
        return false;
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1 ){
        return true;
    } else{
        return false;
    }
}

function fin(){
    if(arraynum.length == ''){
        alert("Primeiro Adicione Algum valor")
    } else{
        const total =  arraynum.length;
        let maior = arraynum [ 0 ];
        let menor = arraynum [ 0 ];
        let soma = 0;
        for(const contador in arraynum){
            if (arraynum[ contador ] > maior){
            
                maior = arraynum[contador];
            
            } if( arraynum[contador] < menor ){
            
                menor = arraynum[contador];
            }
            soma += arraynum[contador];
        } 
        resultado.innerHTML += `<p>Ao todo temos ${total} número cadastrados</p>`;
        resultado.innerHTML += `<p>O menor número  cadastrados é ${menor}</p>`;
        resultado.innerHTML += `<p>O maior número  cadastrados é ${maior}</p>`;
        resultado.innerHTML += `<p>A soma de todos os números  cadastrados são ${soma}</p>`;
        resultado.innerHTML += `<p>A média dos números  cadastrados são ${soma/total}</p>`;
        
        
    }
   
    

}