function verificar(){
    const data = new Date();
    const ano = data.getFullYear();
    const nacimento = document.getElementById("ano").value;
    const res = document.getElementById("res");
    if(nacimento == "" || nacimento > ano){
        window.alert("[ERRO] Voçê não preencheu um campo ou colocou um ano maior que o atual!");
    }
    else{
         let sexo = document.getElementsByName("sexo");
         const idade = ano - Number(nacimento);
         res.innerHTML = `idade: ${idade}`;
         let genero = "";
         let img = document.createElement("img");
         img.setAttribute('id', 'foto');
            if(sexo[0].checked){
                 genero = "Homem";
                 res.style.textAlign = 'center';
                 res.innerHTML =  `detectamos um ${genero} de ${idade} anos`;
                 if(idade >= 0 && idade < 10){
                    img.setAttribute("src","img/boy.png")
                 }
                 else if(idade < 21 ){
                    img.setAttribute("src","img/jovem_masc.png")
                 }
                 else if (idade < 50){
                    img.setAttribute("src","img/homem.png")
                 }
                 else{
                    img.setAttribute("src","img/vo.png")
                 }
            }
            else  if(sexo[1].checked){
                    genero = "Mulher"
                    res.style.textAlign = 'center';
                    res.innerHTML =  `detectamos uma ${genero} de ${idade} anos`;
                    if(idade >= 0 && idade < 10){
                        img.src = "img/girl_meni.png"
                     }
                     else if(idade < 21 ){
                        img.src = "img/jovem_femi.png"
                     }
                     else if (idade < 50){
                        img.src = "img/mulher.png"
                     }
                     else{
                        img.src = "img/vovo.png"
                     }
            }
            
            res.appendChild(img);
        }
    

   
}
