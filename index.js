new Vue ({
    el: '#form',
    data() {
        return {
            info: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            invalidName: false,
            invalidEmail: false,
            invalidPhone: false,
            invalidMessage: false,
            invalidForm: false,
            confirmation: ''
        }
    },
    
    methods: {
        async send() {
            
            this.validateName();
            this.validateEmail();
            this.validatePhone();
            this.validateMessage();

            if(this.checkForm()) {
                this.invalidForm = false;

                const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';
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
                    let response = await fetch(url, fetchParams);
                    if (response.ok) {
                        let result = await response.json();
                        this.confirmation = "El formulario se ha enviado correctamente!";
                        this.reset();
                    } else {
                        throw new Error(response.statusText);
                    }
                } catch (err) {
                   alert(err);
                }
            } else {
                this.invalidForm = true;
            }
        },

        checkForm() {
            return !this.invalidName && !this.invalidEmail && !this.invalidPhone && !this.invalidMessage
        },
        
        validateName() {
            if(!this.info.name) {
                this.invalidName = true;
            } else {
                this.invalidName = false;
            }
        },

        validateEmail() {
            const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!this.info.email || !regExEmail.test(this.info.email)) {
                this.invalidEmail = true;
            } else {
                this.invalidEmail = false;
            }
        },

        validatePhone() {
            const regExPhone = /(\+)[0-9]{11}/;

            if(!this.info.phone || !regExPhone.test(this.info.phone)) {
                this.invalidPhone = true;
            } else {
                this.invalidPhone = false;
            }
        },

        validateMessage() {
            const regExMessage = /^[\s\S]{50,}$/;

            if(!this.info.message || !regExMessage.test(this.info.message)) {
                this.invalidMessage = true;
            } else {
                this.invalidMessage = false;
            }
        },

        reset() {
           this.info.name = '';
           this.info.email = '';
           this.info.phone = '';
           this.info.message = '';
        },

        hideConfirmation() {
            this.confirmation = '';
        }
    }
});
