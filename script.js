const contactForm = Vue.component("contact-form", {
	template: `
        <form method="POST" @submit.prevent="validateForm" @enter="validateForm">
            <div class="col-1">
                <label for="name">Full Name *</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" v-model="data.name">
                <p v-if="errors.name" class="alert alert-danger">{{ errors.name }}</p>
            </div>
            <div class="col-2">
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" v-model="data.email">
                <p v-if="errors.email" class="alert alert-danger">{{ errors.email }}</p>
            </div>
            <div class="col-2">
                <label for="phone">Phone *</label>
                <input type="text" id="phone" name="phone" placeholder="Enter your phone number" v-model="data.phone">
                <p v-if="errors.phone" class="alert alert-danger">{{ errors.phone }}</p>
            </div>
            <div class="col-1">
                <label for="message">Message *</label>
                <textarea id="message" name="comment" placeholder="Write your message here..." rows="8" v-model="data.message"></textarea>
                <p v-if="errors.message" class="alert alert-danger">{{ errors.message }}</p>
            </div>
            <div class="col-1">
                <input type="submit" value="Submit" />
                </div>
            <div class="col-1">
                <p v-if="mailsent" class="alert alert-success">Congratulations, form sent successfully! &#128512;</p>
            </div>
        </form>
	`,
	data() {
        return {
            data: {
                email: '',
                message: '',
                name: '',
                phone: ''
            },
            errors: {
                email: '',
                message: '',
                name: '',
                phone: ''
            },
            mailsent: false
        }
    },
    methods: {
        validateForm() {
            const mailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+([\.-]?\w+))+$/;
            const telPattern = /^\+([0-9]{11})$/;
            let sendMail = true;

            for (item in this.data) {
                this.errors[item] = ''
                if (!this.data[item]) this.errors[item] = 'Field required', sendMail = false
                else {
                    if (item === 'email' && !mailPattern.test(this.data[item])) this.errors[item] = 'Invalid email', sendMail = false
                    if (item === 'phone' && !telPattern.test(this.data[item])) this.errors[item] = 'Invalid phone, must start with + and have 11 characters without spaces', sendMail = false
                    if (item === 'message' && this.data[item].length < 50) this.errors[item] = 'This field must have at least 50 characters', sendMail = false
                }
            }

            if (sendMail) {
                this.sendData(this.data)
                for (item in this.data) this.data[item] = ''
            }
        },
        sendData(data) {
            const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';
            const fetchParams = {
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json',
                    "X-API-Key": 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
                },
                body: JSON.stringify({ item: data })
            };
        
            fetch(url, fetchParams)
                .then(response => {
                    if (response.ok) this.mailsent = true
                    else return new Error('Error')
                })
        },
    }
})

new Vue({
	el: '#app',
	components: {contactForm},
	data() {
		return {
            title: "Contact form"
        }
	}
})