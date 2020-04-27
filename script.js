function validaCampos(){            
    $("#vazio").empty();
    $("#svazio").empty();
    if($("#nome").val()==""){
        $("#vazio").addClass("alerta");
        $("#vazio").css("color","red");
        $("#vazio").html("Preencha os dados corretamente");
        return false;
    }
    else if($("#tel").val()==""){
        $("#vazio").addClass("alerta");
        $("#vazio").css("color","red");
        $("#vazio").html("Preencha os dados corretamente");
        return false;
    }
    else if($("#endereco").val()==""){
        $("#vazio").addClass("alerta");
        $("#vazio").css("color","red");
        $("#vazio").html("Preencha os dados corretamente");
        return false;
    }
    else if($("#sabores").val()==""){
        $("#svazio").addClass("alerta");
        $("#svazio").css("color","red");
        $("#svazio").html("Escolha pelo menos um sabor");
        return false;
    }
    else{
        return true;
    }
}
function totalpagar(){
    $("#esctam").empty();
    var resp;
    var tipo_t = parseInt($("input[name=tamanho]:checked").val());
    switch(tipo_t){
        case 1:
            if($("#ing").val()==""){
                resp = 20.00 ;
            }
            else{
                if($("#ing").val()=="Cebola"){
                    resp = 7.50 + 20.00 ;
                }
                else  if($("#ing").val()=="Tomate"){
                    resp = 7.50 + 20.00 ;
                }
                else  if($("#ing").val()=="Milho"){
                    resp = 7.50 + 20.00 ;
                }
                else{
                    resp = 11.50 + 20.00 ;
                }
            }
            break;
        case 2:  
            if($("#ing").val()==""){
                resp = 25.00 ;
            }
            else{
                if($("#ing").val()=="Cebola"){
                    resp = 7.50 + 25.00 ;
                }
                else  if($("#ing").val()=="Tomate"){
                    resp = 7.50 + 25.00 ;
                }
                else  if($("#ing").val()=="Milho"){
                    resp = 7.50 + 25.00 ;
                }
                else{
                    resp = 11.50 + 25.00 ;
                }
            }
            break;
        case 3:  
            if($("#ing").val()==""){
                resp = 30.00 ;
            }
            else{
                if($("#ing").val()=="Cebola"){
                    resp = 7.50 + 30.00 ;
                }
                else  if($("#ing").val()=="Tomate"){
                    resp = 7.50 + 30.00 ;
                }
                else  if($("#ing").val()=="Milho"){
                    resp = 7.50 + 30.00 ;
                }
                else{
                    resp = 11.50 + 30.00 ;
                }
            }
            break;
        default:
            
            $("#esctam").css("color","red");
            $("#esctam").html("Escolha o tamanho da pizza");
            resp = -1;
    }
    return resp;
}
