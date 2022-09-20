new Vue({
  el: "#form",
  data() {
    return {
      errors: [],
      contacts: {
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

      if (!this.contacts.fullName) {
        this.errors.push("El nombre es obligatorio.");
      }

      if (!this.validateEmail(this.contacts.email)) {
        this.errors.push("El correo electrónico debe ser válido.");
        this.showSubmissionMessage = false;
      }

      if (!this.validatePhone(this.contacts.phone)) {
        console.log(this.validatePhone(this.contacts.phone));
        this.errors.push("El telefono debe ser valido.");
        this.showSubmissionMessage = false;
      }

      if (!this.validateMessage(this.contacts.message)) {
        this.errors.push("El mensaje debe contener mas de 50 caracteres.");
        this.showSubmissionMessage = false;
      }

      if (!this.errors.length) {
        this.submitForm();
        return true;
      }
    },

    validateEmail: function (email) {
      let re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validatePhone: function (phone) {
      let regex = /^(\+34|0034|34)?[6789]\d{8}$/;
      return regex.test(phone);
    },

    validateMessage: function (message) {
      return message.length > 50;
    },

    submitForm() {
      const CONTACT_API_BASE_URL =
        "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";
      const X_API_KEY = "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H";

      const datos = {
        fullName: this.contacts.fullName,
        email: this.contacts.email,
        phone: this.contacts.phone,
        message: this.contacts.message,
      };

      //console.log(JSON.stringify(datos));

      const body = { item: datos };

      const fetchParams = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "X-API-KEY": X_API_KEY,
        },
        body: JSON.stringify(body),
      };

      fetch(CONTACT_API_BASE_URL, fetchParams)
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
          // Reset form field
          this.contacts.fullName = "";
          this.contacts.phone = "";
          this.contacts.email = "";
          this.contacts.message = "";
        });
    },
  },
});
