const contactUsForm = Vue.component("contact-us-form", {
    template: `
        <section>
            <h1>Contact us</h1>
            <form  @submit="submit">
                <div class="col-1">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your full name" v-model="name">
                </div>
                <div class="col-2">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email address" v-model="email">
                </div>
                <div class="col-2">
                    <label for="phone">Phone</label>
                    <input type="text" id="phone" name="phone" placeholder="Enter your phone number" v-model="phone">
                </div>
                <div class="col-1">
                    <label for="message">Message</label>
                    <textarea id="message" name="comment" placeholder="Write your message here..." rows="8"
                        v-model="message"></textarea>
                </div>
                <div class="col-1">
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </section>
    `,
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
            key: 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H',
            url: 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items'
        }
    },
    methods: {
        submit(event) {
            event.preventDefault();
            //limpiamos los cambios de los fallos
            //enviamos el formulario
            let warnings = "";
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            let entrar = false;

            if (this.name === '' || this.name.length <= 0) {
                warnings += "Invalid name, no name written <br>";
                entrar = true;
            } else {

            }

            if (!regexEmail.test(this.email)) {
                warnings += "Invalid email format <br>";
                entrar = true;
            } else {

            }

            if (this.message.length < 50) {
                warnings += "Invalid message, it must be at least 50 characters long <br>";
                entrar = true;
            } else {

            }

            if (this.phone[0] !== "+" || this.phone.length < 10) {
                warnings +=
                    "Invalid phone number, it must have at least 11 numbers and start with a '+' <br>";
                entrar = true;
            } else {

            }

            if (entrar) {
                alert("Formulari incorrecte: " + warnings);
            } else {
                const datos = {
                    code: Math.floor(Math.random() * 10000) + 1,
                    name: this.name,
                    message: this.message,
                    phone: this.phone,
                    email: this.email,
                };

                const body = { item: datos };

                const fetchParams = {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "X-API-Key": this.key,
                    },
                    body: JSON.stringify(body),
                };

                fetch(this.url, fetchParams).then((response) => {
                    if (response.ok) {
                        //mostramos
                        console.log(response);

                        // reiniciamos variables
                        this.name = '';
                        this.message = '';
                        this.phone = '';
                        this.email = '';
                        alert('Registre completat!')
                    } else {
                        alert("Ha hagut algun problema enviant el formulari, su us plau torni a intentar-lo en una estona.");
                    }
                }).catch((err) => {
                    alert("Error: " + err);
                });
            }
        }
    },
    computed: {

    },
    mounted() {

    }
})


new Vue({
    el: '#app',
    components: { contactUsForm },
    data() {
        return {}
    }
})