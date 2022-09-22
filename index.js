new Vue({
    el: '#contactform', /*el: elemento*/ 
    data() {
      return {
        name: "",
        email: "",
        phone: "",
        message: "",
        errorinfo: {
            name: "",
            email: "",
            phone: "",
            message: "",
      },
      successORerrorMessage: "",
      };
    }, 
   
    methods: {
      GoandSubmit(event) {
        event.preventDefault()
        this.errorinfo.name="";
        this.errorinfo.email="";
        this.errorinfo.phone="";
        this.errorinfo.message="";

        let noproceed = false;

         /*---Full Name check in box-------------------------------------------------------------------------------------*/
        if (this.name.length <= 0) {
          this.errorinfo.name = "Error: invalid name not correct"
          noproceed = true;
        }

         /*---email check in box with regex email check JS----------------------------------------------------------------*/
        if (this.email.length === 0 || /^\s+$/.test(this.email)) {
          this.errorinfo.email = "Error: invalid email address"
          noproceed = true;
        }
        
        /*---Phone check in box-------------------------------------------------------------------------------------*/
        if (this.phone[0] !== "+") {
          this.errorinfo.phone = "Error: invalid information, start with '+'"
          noproceed = true;
        }

        /*---Message check in box ---------------------*--------------------------------------------------------------------*/
        if (this.message.length < 50){
          this.errorinfo.message= "Error: invalid message, minimum 50 characters"
          noproceed = true;
        }

        /*---check in proceeds or not and clean form------------------------------------------------------------------*/
        if (noproceed === true){
          return false;
        }

        
        
        
        /*----------FETCH API----------------------------------------------------------------------------------*/
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
        
            const params = {
                method: 'POST',
                headers: {
                    'X-API-Key': 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(body),
              };

            fetch (url, params)
              .then(function(response) {
                if(response.ok) {
                    return response.json();
                } else {
                    throw "Error: data base API";//
                }
              })

              .then((json) => {
                this.successORerrorMessage = "Your information has been submitted";
                   })
              
              .catch((err) => {
                this.successORerrorMessage = "Error: There is an error, proceed again";
              })
            
    }
  
    }

  })
