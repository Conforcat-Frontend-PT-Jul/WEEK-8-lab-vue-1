const contactForm = Vue.component("contact-form", {
  template: `
  <div>
    <h1>Contact us</h1>
    <form method="POST" v-on:submit.prevent="validateForm">
        <div class="col-1">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" v-model="formData.name">
            <small v-if="errorData.name"> {{ errorData.name }}</small>
        </div>
        <div class="col-2">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" v-model="formData.email">
            <small v-if="errorData.email"> {{ errorData.email }}</small>
        </div>
        <div class="col-2">
            <label for="phone">Phone</label>
            <input type="text" id="phone" name="phone" placeholder="Enter your phone number" v-model="formData.phone">
            <small v-if="errorData.phone"> {{ errorData.phone }}</small>
        </div>
        <div class="col-1">
            <label for="message">Message</label>
            <textarea id="message" name="comment" placeholder="Write your message here..." rows="8" v-model="formData.message"></textarea>
            <small v-if="errorData.message"> {{ errorData.message }}</small>
        </div>
        <div class="col-1">
            <input type="submit" value="Submit" />
        </div>
    </form>
    <small></small>
  </div>
  `,
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      errorData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    validateForm() {
      const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const regexPhone = /^\+([0-9]{11})$/;
      let sendForm = true;

      for (element in this.formData) {
        this.errorData[element] = "";
        if (element === "" || element.length < 1) {
          (errorData.element += "Information required"), (sendForm = false);
        } else {
          if (element === "email" && !regexEmail.test(this.formData[element]))
            (this.errorData[element] = "Email is not valid"),
              (sendForm = false);
          if (element === "phone" && !regexPhone.test(this.formData[element]))
            (this.errorData[element] = "Phone needs to be international"),
              (sendForm = false);
          if (element === "message" && this.formData[element].length < 50)
            (this.errorData[element] =
              "This field needs to be 50 characters minumum"),
              (sendForm = false);
        }
      }
      if (sendForm) {
        this.sendForm(this.formData);
        for (element in this.formData) this.formData[element] = "";
      }
    },
    sendForm(formData) {
      const url = "https://database.deta.sh/v1/a0wwnrex/contactmessages/items";
      const fetchParams = {
        method: 'POST',
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
            "X-API-Key": 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
        },
        body: JSON.stringify({ item: formData }),
      };
      fetch(url, fetchParams)
        .then((response) => {
          if (response.ok) {
            alert("Form sent");
            sendForm = true;
          } else alert("Problem sending form");
        })
        .catch((error) => {
          alert("There's an error" + error);
        });
    },
  },
});

new Vue({
  el: "#app",
  components: { contactForm },
  data() {
    return {}
  },
});
