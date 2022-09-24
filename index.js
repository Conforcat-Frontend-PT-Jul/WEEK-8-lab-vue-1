new Vue({
  el: "#form",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      error: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },

  methods: {
    submit() {
      this.error.name = "";
      this.error.email = "";
      this.error.phone = "";
      this.error.message = "";

      let noproceed = false;

      if (this.name.length <= 0) {
        this.error.name = "Please, enter a valid name";
        noproceed = true;
      }

      if (this.email.length === 0 || /^\s+$/.test(this.email)) {
        this.error.email = "Please, enter a valid email address";
        noproceed = true;
      }

      if (this.phone == /^\+([0-9]{11})$/.test(this.phone)) {
        this.error.phone =
          "Please, enter a valid phone number that starts with '+'";
        noproceed = true;
      }

      if (this.message.length < 50) {
        this.error.message =
          "Please, consider that the minimum length are 50 characters";
        noproceed = true;
      }

      if (noproceed === true) {
        return false;
      }

      const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };

      const body = {
        item: data,
      };

      const parameters = {
        method: "POST",
        headers: {
          "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      };

      fetch(url, parameters)
        .then((response) => {
          console.log(response);
          console.log(body);
          if (response.ok) {
            alert("Form sent");
          } else {
            alert("The form has not been sent");
          }
        })
        .finally(() => {
          this.name = "";
          this.phone = "";
          this.email = "";
          this.message = "";
        });
    },
  },
});
