new Vue ({
    el: '#form',
    data() {
        return {
            info: {
                name: '',
                email: '',
                phone: '',
                message: ''
            }
        }

    },
    methods: {
        async send() {

            const fetchParams = {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H"
                },
                body: JSON.stringify({ item: this.info })
            };
            
            try {
                let response = await fetch('https://database.deta.sh/v1/a0wwnrex/contactmessages/items', fetchParams);
                if (response.ok) {
                    let result = await response.json();
                    alert("El formulario se ha enviado correctamente");
                    form.reset();
                } else {
                    throw new Error(response.statusText);
                }
            } catch (err) {
                alert(err);
            }
            
        }
        
    }
});





