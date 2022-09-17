new Vue({
    el: 'form',








    
}) 
    





const fetchParams = {
    method: "POST",
    headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "X-API-Key":'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
    },
    body: JSON.stringify({ item: data })
};

fetch(url, fetchParams)
    .then(response => {
        if (response.ok) return response.json(); 
    })

    .then(json => {
        console.log(json);
    })

    .catch(error => {
        console.log(error)
    });

    form.reset()







