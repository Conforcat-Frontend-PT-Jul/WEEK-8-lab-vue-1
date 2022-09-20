new Vue({
  el: "#form",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      errors: {
        phone: "",
        message: "",
      },
      successMessage: "",
    };
  },
  methods: {
    onSubmit() {
      this.errors.phone = "";
      this.errors.message = "";

      if (!this.phone.startsWith("+")) {
        this.errors.phone = "Number must start with +";
        return false;
      }

      if (this.message.length < 50) {
        this.errors.message = "Minimum length of the message is 50 characters";
        return false;
      }

      const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";

      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };

      const body = { item: data };

      const params = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H",
        },
        body: JSON.stringify(body),
      };

      fetch(url, params)
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((json) => {
          console.log(json);
          this.successMessage = "Enviado correctamente";
        })
        .catch((err) => console.log(err));
    },
  },
});
