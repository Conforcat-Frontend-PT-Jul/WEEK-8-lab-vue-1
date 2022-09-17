new Vue({
  el: "#form",
  data() {
    return {
      errors: [],
      fullName: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

      if (!this.fullName) {
        this.errors.push("El nombre es obligatorio.");
      }
      if (!this.email) {
        this.errors.push("El correo electrónico es obligatorio.");
      } else if (!this.validateEmail(this.email)) {
        this.errors.push("El correo electrónico debe ser válido.");
      }

      if (!this.errors.length) {
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

    submit: function (form) {
      const CONTACT_API_BASE_URL =
        "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";
      const X_API_KEY = "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H";

      const datos = {
        fullName: this.fullName,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };

      console.log(JSON.stringify(datos));

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
            //hideForm();
            //showSubmissionMessage();
          } else {
            await showError();
          }
        })
        .catch(async () => {
          await showError();
        })
        .finally(() => {
          //restoreSendFormButton();
        });
    },
  },

  mounted() {},
});
