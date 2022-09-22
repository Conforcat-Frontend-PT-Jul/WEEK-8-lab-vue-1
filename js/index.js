new Vue({
    el: '#form',
    data() {
        return{
            url: "https://database.deta.sh/v1/a0wwnrex/contactmessages/items",
            
            errorName: false,
            errorEmail: false,
            errorPhone: false,
            errorMessage: false,
            successForm: false,
            invalidForm: false,

            fields: {
                name: false,
                email: false,
                phone: false,
                message: false
            },

            data: {
                name: '',
                email: '',
                phone: '',
                comment: ''
            },
            
            apiKey: 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
        }
    },

    methods: {
        validate(){

            // VALIDACIÓN DE LOS INPUTS
            if (this.data.name){
                this.fields.name = true;
                this.errorName = false;
            } else{
                this.fields.name = false;
                this.errorName = true;
            }

            if (this.data.email){
                this.fields.email = true;
                this.errorEmail = false;
            } else{
                this.fields.email = false;
                this.errorEmail = true;
            }

            if (this.data.phone){
                this.fields.phone = true;
                this.errorPhone = false;
            } else{
                this.fields.phone = false;
                this.errorPhone = true;
            }

            if (this.data.comment.length > 50){
                this.fields.message = true;
                this.errorMessage = false;
            } else{
                this.fields.message = false;
                this.errorMessage = true;
            }

            // VALIDACIÓN DEL FORMULARIO COMPLETO

            if(this.fields.name && this.fields.email && this.fields.phone && this.fields.message){

                this.successForm = true;
                this.invalidForm = false;

            // FECTH DE LOS DATOS A DETA

            const body = {item: this.data}            
            const fetchParams = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-API-Key': this.apiKey
                },
                body: JSON.stringify(body)
            }
            fetch(this.url, fetchParams)
                .then(response => {
                    if(response.ok) return response.json();
                })
                .then(json => {
                    if("key" in json){
                         console.log(json);
                        form.reset();    
                    }
                });

            } else {
                this.successForm = false;
                this.invalidForm = true;
            }            
        }        
    }
})