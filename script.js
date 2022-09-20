new Vue({
    el: "#form",
    data() {
        return {
            fname: "",
            email: "",
            phone: "",
            message: "",
            nameErr: "",
            emailErr: "",
            phoneErr: "",
            msgErr: "",
            successMsg: "",
            isSending: false
        }
    },

    methods: {
        handleSubmit(){
            console.log("form submitted");
            //validate name
            /* /^([\w]{3,})+\s+([\w\s]{3,})+$/i
            ([\w]{3,}) the first name should contain only letters and of length 3 or more
            +\s the first name should be followed by a space
            +([\w\s]{3,})+ the second name should contain only letters of length 3 or more and can be followed by other names or not
            /i ignores the case of the letters. Can be uppercase or lowercase letters */
            
            let fnameFormat = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;
            let nameIsValid = this.fname.match(fnameFormat);
            this.nameErr = nameIsValid ? "" : "Incorrect name format, please, enter valid full name";
            
            //this.nameErr = this.fname !== "" ? "" : "Please, enter your full name"; ---this validate only if there is an input
            
            //validate email
            //regex to validate email contains @ and .
            let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            let emailIsValid = this.email.match(mailFormat);
            this.emailErr = emailIsValid ? "" : "Incorrect email format, should contain @ and .";
            
            //validate phone
            let phoneIsValid = this.phone.startsWith("+");
            this.phoneErr = phoneIsValid ? "" : "Telephone should start with +";
            //validate message
            let messageIsValid = this.message.length >= 20;
            this.msgErr = messageIsValid ? "" : "The minimum length of message is 20 characters, add some more";

            
            if (nameIsValid || emailIsValid || phoneIsValid || messageIsValid) {

            const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";
            const data = {
                fname: this.fname,
                email: this.email,
                phone: this.phone,
                message: this.message,
              };
        
              const body = { item: data };

            const fetchParams = {
                method: "POST",
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H",
                },
                body: JSON.stringify(body),
            };

            fetch(url, fetchParams)
                .then((response) => {
                if (response.ok) return response.json();
                })
                //if all ok then
                .then((json) => {
                console.log(json);
                this.successMsg = "Thank you for contact us!";
                this.fname = "";
                this.email = "";
                this.phone = "";
                this.message = "";
                })
                .catch((err) => console.log(err));
            
                }
            }
        }
  });