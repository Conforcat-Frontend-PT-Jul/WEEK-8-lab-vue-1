new Vue({
    el:'#form',
    data: function(){
        return{
            name:'',
            phone:'',
            email:'',
            message:'',
            errors: {
                phone:'',
                email:'',
                message:'',
            },  
            showResult:'',
        };
    },

  
    methods: {
        submit: function(event){
            event.preventDefault();
       
            this.errors.phone='';
            this.errors.email='';
            this.errors.message='';

            let error = false;

            if (!/^\+[0-9]{1,3}[0-9]{9,}$/.test(this.phone)){
                this.errors.phone= "Debe empezar con (+) y mínimo 9 dígitos"
                error = true;

            }

            if(this.email === null || this.email.length === 0 || /^\s+$/.test(this.email)){
                this.errors.email="Debe escribir un email siguiendo el formato de email"
                error = true;

            }

            if (this.message.length < 50){
                this.errors.message= "Mínimo 50 caracteres"
                error = true;
            }

            if (error === true){
                return false;
            }
            
            const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';
            const data = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message
            };

            const body = {
                item: data
            };
        
            const vueData = this;

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'X-API-Key': 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(function(response) {
                if(response.ok) {
                    return response.json();
                } else {
                    throw 'Error in API';
                }
            }).then(function(responseObject) {
                vueData.showResult = 'The form was submitted successfully.';
            }).catch(function(errorMessage) {
                vueData.showResult = `Error submitting the form, please try again. Error: ${errorMessage}`;
            });
        }  
    }

})