const vueForm =
new Vue({
    el: '#vueForm',
    data() {
        return { 
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    },

    methods: { 
        formValidation() {
            const validMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
            const validPhone = /^\+34(0-9){9})$/;
            let postForm = true;

        for (item in this.data) {
            this.errors[item] = ''
        }

        
        }

        onSubmit(e) {
            e.preventDefault()
            if(!this.name || !this.email || !this.phone || !this.message){
                alert('All fields must be completed')
            };
        function mailValidate(email) {
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
                alert("The email adress" + email + " is correct.")
                    }    
        }       
            

            





        }
    }








    
}
    

const data = {
    name: '',
    email: '',
    phone: '',
    message: ''
}



const fetchParams = {
    method: "POST",
    headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "X-API-Key":'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
    },
    body: JSON.stringify({ item: data })
};

fetch(url, fetchParams)
    .then(response => {
        if (response.ok) return response.json(); 
    })

    .then(json => {
        console.log(json);
    })

    .catch(error => {
        console.log(error)
    });

    form.reset()







