$(document).ready(function(){



    const name = 'ogiansouza';
    const endpoint = `https://api.github.com/users/${name}`;

    // fetch(endpoint).then(function(resposta){
    //     return resposta.json();})
    //     .then(function(json){
    //     console.log(json);


    //     $('.profile-avatar').attr('src', json.avatar_url)

    //     $('.profile-username').text(json.login);
    //     $('.profile-name').text(json.name);

    //     $('.numbers__repository').text(json.public_repos);
    //     $('.numbers__followers').text(json.followers);
    //     $('.numbers__following').text(json.following);

    //     $('.profile-link').attr('href', json.html_url);
        

    // })


    $.ajax(endpoint).done(function(resposta){
        
        $('.profile-avatar').attr('src', resposta.avatar_url);

        $('.profile-name').text(resposta.name);

        $('.profile-username').text(`@${resposta.login}`);

        $('.numbers__repository').text(resposta.public_repos);
        $('.numbers__followers').text(resposta.followers);
        $('.numbers__following').text(resposta.following);

        $('.profile-link').attr('href', resposta.html_url);
    })


})