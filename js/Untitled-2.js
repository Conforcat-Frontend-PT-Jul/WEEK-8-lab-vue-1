fetch('https://database.deta.sh/v1/a0wwnrex/contactmessages/items', {
        method: 'POST',
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message,
        }),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H"
        },
      })
        .then((response)=> response.json())
        .then((json)=> console.log(json));