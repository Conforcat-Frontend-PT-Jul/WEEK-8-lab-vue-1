new Vue({
  el: "#form",
  data() {
    return {
      items: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    findInput(arr, name) {
      const input = arr.find((i) => i.id === name);
      return input._value;
    },
    submit(e) {
      const inputs = [...e.target];
      this.items = {
        name: this.findInput(inputs, "name"),
        email: this.findInput(inputs, "email"),
        phone: this.findInput(inputs, "phone"),
        message: this.findInput(inputs, "message"),
      };
      console.log(inputs);
      e.preventDefault();
      const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";
      fetch(url, {
        method: "POST",
        headers: {
          "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H",
        },
        body: JSON.stringify(this.items),
      });
    },
  },
});
