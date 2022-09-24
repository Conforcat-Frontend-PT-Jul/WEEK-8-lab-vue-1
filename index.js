new Vue({
  el: "#Form",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  //  .this In a function, this refers to the global object.
  methods: {
    submitForm(event) {
      event.preventDefault();
      const body = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };
      console.log(body);
      const fetchParams = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H",
        },
        body: JSON.stringify({ item: body }),
      };
      fetch(
        "https://database.deta.sh/v1/a0wwnrex/contactmessages/items",
        fetchParams
      )
        .then((response) => {
          if (response.ok) return response.json();
        })

        .then((json) => {
          console.log(json);
        })

        .catch((error) => {
          console.log(error);
        });

      Form.reset();
    },
  },
});
