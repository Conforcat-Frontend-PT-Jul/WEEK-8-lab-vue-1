
new VTTCue({
    el: '#form',
    data: () { 
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
            errors {
                name: '',
                email: '',
                phone: '',
                message: ''  
            };
            enviado: '',
        }
    }

    methods: {
        submit() {
            this.errors.name = '';
            this.errors.email = '';
            this.errors.phone = '';
            this.errors.message = '';

            if (!this.name) {
                this.errors.name = 'Por favor, rellena este campo.';
                return false;
              }

            if (!this.email) {
                this.errors.email = 'Por favor, introduce una dirección de correo electrónico válida.';
                return false;
              }
        
            if (!this.phone.startsWith("+")) {
              this.errors.phone = 'Por favor, introduce un número de teléfono indicando el código de país. Por ejemplo: +34000000000';
              return false;
            }
        
            if (this.message.length > 50) {
              this.errors.message = 'El mensaje debe contener un máximo de 50 caracteres.';
              return false;
            }



const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';

const data = {
    name: this.name,
    email: this.email,
    phone: this.phone,
    message: this.message,
    };
    
    
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
            console.log (json);
            this.enviado = 'Gracias por tu mensaje. Ha sido enviado correctamente';
            form.reset();
        })
        .catch(error => {
            console.log(err);
        }),
    };
}

})