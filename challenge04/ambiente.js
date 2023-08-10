function tabuada(){
    const valor = Number(document.getElementById("num").value);
    const res = document.getElementById("resultado");
    let contador;
    let mult;
    res.innerHTML = "";
    contador = 0;
    while(contador<=10){
        document.createElement("option");
        mult = Number(valor * contador);
        res.innerHTML += `<option>${contador} x ${valor} = ${mult}</option>`
        contador++
    }

}
    

