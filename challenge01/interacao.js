function carregar(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    //var hora = 19; 
    msg.innerHTML = `Agora são ${hora} horas`;
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = "img/manha_redonda.png";
        
    }
    else{
        if(hora >= 12 && hora < 18){
            //BOA TARDE!
            img.src = "img/tarde_redonda.png";
            document.body.style.backgroundColor = "#bad7ea";
            
        }
        else{
            //Boa Noite
            img.src = "img/noite_redonda.png";
            document.body.style.backgroundColor = "#091838";
        }
    }
}
