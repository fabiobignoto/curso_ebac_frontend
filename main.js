$(document).ready(function(){

    let cont = 0;

    $('form').on('submit', function(e){
        e.preventDefault();
        
        const newTask = $('#TaskName').val();
        const newListLine = $(`<li>${newTask}</li>`);
        $(newListLine).appendTo('ul');
        $(`#TaskName`).val("");

        $(`li`).on("click", function(){
            $(this).addClass(`completed-task`);
        })
    })

})

    
