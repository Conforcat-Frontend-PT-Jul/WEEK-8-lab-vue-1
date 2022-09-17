new Vue({
    el: '#form',
    data() {
        return{
            url: "https://database.deta.sh/v1/a0wwnrex/contactmessages/items",
            data: {
                name: "",
                email: "",
                phone: 0,
                message: ""
            },
            body: {item: this.data},            
            fetchParams: {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-API-Key': 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
                },
                body: JSON.stringify(this.body)
            }
        }
    },

    methods: {
        fetch(url, fetchParams){
            console.log("button pressed!!")
            // .then(response => {
            //     if(response.ok) return response.json();
            // })
            // .then(json => {
            //     if("key" in json){
            //         console.log(json);
            //         form.reset();
            //     }
            // })
        }
        
    }
})