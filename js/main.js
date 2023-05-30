$(document).ready(function(){


    $(`#telefone`).mask( `(00) 0000-0000`,{
        placeholder: `(00) 12345-6789`
    });
    
    $(`#cpf`).mask( `000.000.000-00`,{
        placeholder: `012.345.678-90`
    });

    $(`#cep`).mask( `00000-000`,{
        placeholder: `01234-567`
    });

    $("form").on("submit", function(){
        alert("Cadastro realizado com sucesso!");

    })
})