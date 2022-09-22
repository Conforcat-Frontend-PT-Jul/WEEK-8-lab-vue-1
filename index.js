new Vue({
  el: "#form",
  data() {
    return {
      errors: [],
      info: {
        fullName: "",
        email: "",
        phone: "",
        message: "",
      },
      showSubmissionMessage: false,
    };
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.info.fullName) {
        this.errors.push(".");
      }

      if (!this.validateEmail(this.info.email)) {
        this.errors.push("Please, provide a valid email address.");
        this.showSubmissionMessage = false;
      }

      if (!this.validatePhone(this.info.phone)) {
        console.log(this.validatePhone(this.info.phone));
        this.errors.push("Please, provide a valid phone number formatting, with + and dial.");
        this.showSubmissionMessage = false;
      }

      if (!this.validateMessage(this.info.message)) {
        this.errors.push("Make sure your message is, at least, 50 characters long.");
        this.showSubmissionMessage = false;
      }

      if (!this.errors.length) {
        this.submitForm();
        return true;
      }
    },

    validateEmail: function (email) {
      let emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(email);
    },
    validatePhone: function (phone) {
      let phoneRegex = /^(\+34|0034|34)?[6789]\d{8}$/;
      return phoneRegex.test(phone);
    },

    validateMessage: function (message) {
      return message.length > 50;
    },

    submitForm() {
      const data = {
        fullName: this.info.fullName,
        email: this.info.email,
        phone: this.info.phone,
        message: this.info.message,
      };

      const body = { item: data };

      const fetchParams = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "X-API-KEY": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H",
        },
        body: JSON.stringify(body),
      };

      fetch("https://database.deta.sh/v1/a0wwnrex/contactmessages/items", fetchParams)
        .then(async (response) => {
          console.log(response);
          if (response.status === 201) {
            this.showSubmissionMessage = true;
          } else {
            await showError();
          }
        })
        .catch(async () => {
          await showError();
        })
        .finally(() => {
          this.showSubmissionMessage = true;
          this.info.fullName = "";
          this.info.phone = "";
          this.info.email = "";
          this.info.message = "";
        });
    },
  },
});
