const { createApp } = Vue

  createApp({
    data() {
      return {
        fName: '',
        fEmail: '',
        fPhone: '',
        fMessage: '',
        emailErr: '',
        phoneErr: '',
        msgErr: ''
      }
    },
    methods: {
        submitForm() {
            let ready2Send = false;
            const emailErr = "Please insert your email in the correct format. You might have missed the @ sign or the dot";
            const phoneErr = "Phone needs to start with a + for international prefix";
            const msgErr = "Your message should be at least 50 characters long";

            const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';
            
            const data = {
                         Name: this.fName,
                         Email: this.fEmail,
                         Phone: this.fPhone,
                         Message: this.fMessage
                     }
            
            const body = {item: data}
            
            const fetchParams = {
                method : 'POST',
                headers: {
                    "Accept": 'application/json',
                    "Content-Type": 'application/json',
                    "X-API-Key": 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
                },
                body: JSON.stringify(body)
            };

            if(data.Email.includes("@") && data.Email.includes(".")) {
              ready2Send = true;
            } else {
              ready2Send=false;
              this.emailErr = emailErr;
            }

            if(data.Phone.charAt(0)=="+") {
              ready2Send = ready2Send && true;
            } else {
              ready2Send=false;
              this.phoneErr = phoneErr;
            }

            if(data.Message.length >= 50) {
              ready2Send = ready2Send && true;
            } else {
              ready2Send=false;
              this.msgErr = msgErr;
            }

            if(ready2Send) {
              this.emailErr = '';
              this.phoneErr = '';
              this.msgErr = '';

                           
// Send form to remote host using fetch

               fetch(url, fetchParams) 
                 .then(response => {
                   if(response.ok) return response.json();
                 })
                 .then(json => {
                   console.log(json);
                 })
                 .then(json => {
                   this.displaySuccess();
                 })
                 .then(json => {
                  this.clearForm();
                })
                 .catch((error) => { console.log(error); });
             }
        },

        clearForm () {
          this.fName= '';
          this.fEmail= '';
          this.fPhone= '';
          this.fMessage= ''
        },

        displaySuccess() {
          const succMsg = document.getElementsByClassName('successMessage')[0];
          succMsg.className = "successMessage success-visible";
          setTimeout(function() {succMsg.className = "successMessage"},3000);
      }
       
      }
  }).mount('#formSection')




