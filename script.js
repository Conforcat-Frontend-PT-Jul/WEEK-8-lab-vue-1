new Vue({
    el: "#form",
    data() {
        return {
            fname: "56y65y65",
            email: "",
            phone: "",
            message: "",
            nameErr: "",
            emailErr: "",
            phoneErr: "",
            msgErr: ""
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
            this.nameErr = this.fname.match(fnameFormat) ? "" : "Incorrect name format, please, enter valid full name";

            //this.nameErr = this.fname !== "" ? "" : "Please, enter your full name"; ---this validate only if there is an input
            
            //validate email
            //regex to validate email contains @ and .
            let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            this.emailErr = this.email.match(mailFormat) ? "" : "Incorrect email format, should contain @ and .";

            //validate phone
            this.phoneErr = this.phone.startsWith("+") ? "" : "Telephone should start with +";
            //validate message
            this.msgErr = this.message.length >= 20 ? "" : "The minimum length of message is 20 characters, add some more";


        }

}

  });