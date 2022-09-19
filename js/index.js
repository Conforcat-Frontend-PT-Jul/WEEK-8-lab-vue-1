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
    };
  },
  methods: {
    sendData() {
      console.log(
        this.data.name,
        this.data.email,
        this.data.mmessage,
        this.data.phone
      );
    },
  },
});
