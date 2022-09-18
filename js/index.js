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
      error: {
        email: "",
        message: "",
        name: "",
        phone: "",
      },
      mailsent: false,
    };
  },
  methods: {
    validateForm() {
      const mailPattern =
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+([\.-]?\w+))+$/;
      const telephonePattern = /^\+([0-9]{11})$/;
      let sendMail = true;

      for (item in this.data) {
        this.error[item] = "";
        if (!this.data[item])
          (this.error[item] = "Please do not forget to fill in this field!"),
            (sendMail = false);
        else {
          if (item === "email" && !mailPattern.test(this.data[item]))
            (this.error[item] = "Please enter a valid email address!"),
              (sendMail = false);
          if (item === "phone" && !telephonePattern.test(this.data[item]))
            (this.error[item] =
              "The telephone number must start with + and have 11 characters without spaces!"),
              (sendMail = false);
          if (item === "message" && this.data[item].length < 50)
            (this.error[item] =
              "The message must be at least 50 characters long!"),
              (sendMail = false);
        }
      }

      if (sendMail) {
        this.sendData(this.data);
        for (item in this.data) this.data[item] = "";
      }
    },
    sendData(data) {
      const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";
      const fetchParams = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H",
        },
        body: JSON.stringify({ item: data }),
      };

      fetch(url, fetchParams).then((response) => {
        if (response.ok) this.mailsent = true;
        else return new Error("Error");
      });
    },
  },
});
