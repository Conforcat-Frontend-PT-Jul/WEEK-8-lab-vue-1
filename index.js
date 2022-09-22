
new Vue({
    el: '#form',
    data() { 
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
        };
    },


    methods: {
        submitForm: function(e) {
            if(!this.name){
                alert("Por favor, rellena este campo.");
                 e.preventDefault();
            }
            if(!this.email){
                alert("Por favor, introduce una dirección de correo electrónico válida.");
                e.preventDefault();

            }
            
            if(!this.phone){
                alert("Por favor, rellena este campo.");
                e.preventDefault();
            }
            if(this.phone && this.phone[0] != '+'){
                alert('Por favor, introduce un número de teléfono indicando el código de país. Por ejemplo: +34000000000');
            }
            if(!this.message){
                alert("Por favor, rellena este campo.");
                e.preventDefault();
            }
            if(message.length > 50){
                alert('El mensaje debe contener un máximo de 50 caracteres.');             
            }           



const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';

const body = {
    item: data
    };

const fetchParams = {
    method: 'POST',
    headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "X-API-Key": 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
    },
    body: JSON.stringify(body)
};

    
    fetch(url, fetchParams)
        .then(response => {
                if (response.ok) return response.json();
        })
        .then(json => {
            if(result.errors){
                result_api[0].innerHTML = 'error';
                console.log('Error');
                form.reset();

            }else{
                result_api[0].innerText= 'Gracias Tu mensaje se ha enviado correctamente.';
                form.reset();
        }
    })
},
    },
});