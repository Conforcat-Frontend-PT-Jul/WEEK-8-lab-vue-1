const app = 
new Vue ({
  el: '#app',
  data: {
    name: '',
    email: '',
    phone: '',
    message: ''
  },

 //   };
 // },  
 methods: {
  onSubmit(e){
    e.preventDefault()
    if(!this.name  || !this.email || !this.phone || !this.message ){
      alert('ERROR: Please complete all the fields.');
        //this.showError= true;
      }
      if(this.phone && this.phone[0] != '+'){
        alert('ERROR: Phone number should start with +');
      }
      if(message.length > 50){
        alert('ERROR: Message should not exceed 50 characters.'); 
      }
      if(this.name  && this.email && this.phone && this.message ){
        const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';
        const datos = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        };
        const body = {
          item: datos
        };
        const fetchParams = {
          method: 'POST',
          headers: {
            "Accept":'application/json',
            "Content-Type":'application/json',
            "X-API-Key": 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
          },
          body: JSON.stringify(body)
        };
        fetch(url, fetchParams)
        .then(response => {
          if (response.ok) 
            console.log("Yei! --NO SÉ QUE HICE PERO FUNCIONA XD");
          else return new Error('Error')
        })
      }
    }//onSubmit
  }//methods
})