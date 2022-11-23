index.js

const IronhackCart = Vue.component("ironhack-cart", {

  template: `
    <div id="cart">
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item, index in items" :key="index">
            <td>Ironhack {{ item.name }}</td>
            <td>$<span>{{ item.price }}</span></td>
            <td>
              <input
                type="number"
                min="0"
                placeholder="Quantity"
                v-model="item.amount"
              >
            </td>
            <td>$<span>{{ item.total }}</span></td>
            <td>
              <button
                class="btn btn-remove"
                @click="remove(index)"
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="create-product">
            <td>
              <input
                type="text"
                placeholder="Product Name"
                v-model="newProductName"
              />
            </td>
            <td>
              <input
                type="number"
                min="0"
                v-model="newProductPrice"
                placeholder="Product Price"
              />
            </td>
            <td></td>
            <td></td>
            <td>
              <button class="btn" @click="add">Create Product</button>
            </td>
          </tr>
        </tfoot>
      </table>
      <h2 id="total-value">Total: $<span>{{ total }}</span></h2>
    </div>
  `,
  data() {
    return {
      shipping: 10,
      items: [],
      newProductName: '',
      newProductPrice: 0
    }
  },
  methods: {
    add() {
      this.items.push({
        name: this.newProductName,
        amount: 1,
        price: this.newProductPrice,
        total: 0
      })
    },
    remove(index) {
      this.items.splice(index, 1)
    }
  },
  computed: {
    total() {
      return this.items.reduce(
        (accum, item) => {
          item.total = item.amount * item.price
          return accum + item.total
        },
        0
      )
    }
  },
  mounted() {
    fetch("js/datos.json")
      .then(response => {
        if (response.ok) return response.json()
        else return new Error("Error")
      })
      .then(json => {
        this.items = json
      })
  }
})

new Vue({
  el: '#app',
  components: { IronhackCart },
  data() {
    return {}
  }
})


