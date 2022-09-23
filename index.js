new Vue({
    el: "#form",
    data() {
        return {
            data: {
                name: "",
                email: "",
                phone: "",
                message: ""
            }
        }
    },
    methods: {
        sendData(event) {
            event.preventDefault();
            if (!this.name || !this.email || !this.phone || !this.message) {
                alert('You must complete all fields');
            }
            if (this.phone && this.phone[0] != '+') {
                alert('Your phone number should start with +');
            }
            if (mssage.leght > 50) {
                alert('The message should not be more than 50 characters');
            }
            else if (this.name && this.email && this.phone && this.message) {
                const url = 'https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js';
                const data = {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    message: this.message
                };                
// incluir las funciones de validacion del email, del phone y del name
// colocar las funciones  1 hacer el fetch con la Api key, 2 validacion del formulario, dentro de los params debo pasarle url, body, a this.data esto va dentro del fetch
                const body = { item: data };
                const fetchParams = {
                    method: 'POST',
                    headers: {
                        "Accept": 'application/json',
                        "Content-Type": 'application/json',
                        "X-API-Key": "a0wwug58_ETwr54cycm96108ujKEHNeDadoVSKjLV"
                    },
                    body: JSON.stringify(body)
                };
                fetch(url, fetchParams)
                    .then(response => {
                        if (response.ok)
                        console.log ("ok");
                        else return new error ('error')
                            // return response.json();
                    })
                    // .then(json => {
                    //     console.log(json);
                    // })
                }
            }
        }
    })

