new Vue({
    el: '#vueForm',
    data() {
        return { 
            name: '',
            email: '',
            phone: '',
            message: '',                   
        }      
    },   

    methods: { 
        postForm(event){ 
        event.preventDefault()
        const body = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message
        }
        console.log(body)
        const fetchParams = {
            method: "POST",
            headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
            "X-API-Key":'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
            },
            body: JSON.stringify({ item: body })
            };
            fetch("https://database.deta.sh/v1/a0wwnrex/contactmessages/items", fetchParams)
            .then(response => {
                if (response.ok) return response.json(); 
            })
                                        
            .then(json => {
            console.log(json);
            })
                                        
            .catch(error => {
            console.log(error)
            });
                                        
            vueForm.reset()                                 
                            
                            
        }
    },
})




        
        
                     
                    
                     
                     
                     
                     
    

/* formValidation() {
            const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
            const validPhone = /^\+34(0-9){9}$/;
            let postForm = true;

            for (item in this.data) {
                if (!this.name || !this.email || !this.phone || !this.message)
                this.errors[item] = 'All fields must be completed', postForm = false
                else {
                    if (item === 'email' && !validMail.test(this.data[item])) this.errors[item] = 'Please insert a valid mail', postForm = false
                    if (item === 'phone' && !validPhone.test(this.data[item])) this.errors[item] = 'please use a valid number +34 XXX XXX XXX', postForm = false
                    if (item === 'message' && this.data[item].length < 50) this.errors[item] = 'please enter at least 50 characters', postForm = false
                 }; */ 








