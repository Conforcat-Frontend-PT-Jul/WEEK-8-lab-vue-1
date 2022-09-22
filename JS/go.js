new Vue({
    el: '#data',
    data() {
        return {
            user: {
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
        send() {

            this.validateName();
            this.validateEmail();
            this.validatePhone();
            this.validateMessage();

            const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';
            const fetchParams = {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H"
                },
                body: JSON.stringify({ item: this.user })
            };

            fetch(url, fetchParams)
            .then(response => {
                if (response.ok) {
                    
                    this.confirmation = "Form was sent properly!",
                    this.user= {
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                    }
                    return response.json()
                }
            })            
        },

        checkForm() {
            return this.invalidName && this.invalidEmail && this.invalidPhone && this.invalidMessage
        },

        validateName() {
            if (this.user.name) {
                this.invalidName = true;
            } else {
                this.invalidName = false;
            }
        },

        validateEmail() {
            const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.user.email || !regExEmail.test(this.user.email)) {
                this.invalidEmail = true;
            } else {
                this.invalidEmail = false;
            }
        },

        validatePhone() {
            const regExPhone = /(\+)[0-9]{11}/;
            if (!this.user.phone || !regExPhone.test(this.user.phone)) {
                this.invalidPhone = true;
            } else {
                this.invalidPhone = false;
            }
        },

        validateMessage() {
            const regExMessage = /^[\s\S]{50,}$/;
            if (!this.user.message || !regExMessage.test(this.user.message)) {
                this.invalidMessage = true;
            } else {
                this.invalidMessage = false;
            }
        },

        reset() {
            this.user.name = '';
            this.user.email = '';
            this.user.phone = '';
            this.user.message = '';
        },

        hideConfirmation() {
            this.confirmation = '';
        }
    }
});