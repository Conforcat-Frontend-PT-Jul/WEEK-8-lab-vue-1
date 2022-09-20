new Vue({
  el: "form",
  data() {
    return {
      data: {
        email: "",
        message: "",
        name: "",
        phone: "",
      },
      mailed: false,
    };
  },
  methods: {
    sendData(data) {
      console.log(
        this.data.name,
        this.data.email,
        this.data.message,
        this.data.phone
      );
      const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";
      const fetchParams = {
        method: "Post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H",
        },
        body: JSON.stringify({ item: this.data }),
      };
      fetch(url, fetchParams).then((response) => {
        if (response.ok) this.mailed = true;
        else return new Error("Error");
      });
    },
  },
});
