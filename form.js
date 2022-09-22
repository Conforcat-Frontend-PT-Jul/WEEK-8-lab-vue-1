new Vue ({
    el: '#validateForm',
    data() {
        return{
             name: '',
             email: '',
             phone: '',
             message: '',
            }
        },
    methods: {
        validateForm: function(e) {
            if(!this.name){
                alert("Please, complete the name field");
                e.preventDefault();
            }
            if(!this.email){
                alert("Please, complete the email field");
                e.preventDefault();
            }
            if(!this.phone){
                alert("Please, complete the phone field");
                e.preventDefault();
            }
            if(this.phone && this.phone[0] != '+'){
                alert('ERROR: Phone number should start with +');
            }
            if(!this.message){
                alert("Please, complete the message field");
                e.preventDefault();
            }
            if(message.length > 50){
                alert('ERROR: Message should not exceed 50 characters.'); 
            }

            const body = {item: data};

            const fetchParams = {
                method: 'POST',
                headers: {
                   "Accept": 'application/json',
                   "Content-Type": 'application/json',
                   'X-API-Key': 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
                },
                body: JSON.stringify(body),
               
             };
             console.log(result_api);
          
             fetch(url, fetchParams)
                .then(res => res.json())
                .then(result => {
                   if(result.errors){
                      result_api[0].innerHTML = 'error';
                      console.log('Error');
         
                   }else{
                      result_api[0].innerText= 'Thank you! Your message has been sent.';
                      console.log('Thank you! Your message has been sent.');
                      register.reset();
         
                   };
                });

        },
        
    },
 
});