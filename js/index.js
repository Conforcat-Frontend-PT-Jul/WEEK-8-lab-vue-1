new Vue({
    el: '#form',
    data: function() {
      return {
        name: '',
        email: '',
        phone: '',
        message: '',
        hi: "Contact us!",
        f1: "Full Name*",
        f2: "Email",
        f3: "Phone",
        f4: "Message"
      }
    },

    methods: {
        go() {
          fetch('https://database.deta.sh/v1/a0wwnrex/contactmessages/items',{
            method:  'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H"
              },
            body: JSON.stringify({item:{
              name: this.name,
              phone:  this.phone,
              email:   this.email,
              message: this.message,
            
            }})
          })
            .then(response => response.json())
            .then(data => console.log(data))
        }
      }

    });
    