import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    productList: [
      {
        id: 1,
        name: "Moisture t-shirt",
        category: 'Type 1',
        price: 453.00,
        image: '/images/1.png',
        stock: 5,
      },
      {
        id: 2,
        name: "Be 69",
        category: 'Type 3',
        price: 450.00,
        image: '/images/2.png',
        stock: 4,
      },
      {
        id: 3,
        name: "Cezezne t-shirt",
        category: 'Type 1',
        price: 560.00,
        image: '/images/3.png',
        stock: 6,
      },
      {
        id: 4,
        name: "Baking t-shirt",
        category: 'Type 3',
        price: 600.00,
        image: '/images/4.png',
        stock: 8,
      },
      {
        id: 5,
        name: "Kamino t-shirt",
        category: 'Type 1',
        price: 750.00,
        image: '/images/5.png',
        stock: 10,
      },
      {
        id: 6,
        name: "Chenise t-shirt",
        category: 'Type 4',
        price: 890.00,
        image: '/images/6.png',
        stock: 0,
      },
      {
        id: 7,
        name: " Hash t-shirt",
        category: 'Type 2',
        price: 890.00,
        image: '/images/9.png',
        stock: 70,
      },
      {
        id: 8,
        name: "Mix t-shirt",
        category: 'Type 3',
        price: 900.00,
        image: '/images/8.png',
        stock: 7,
      },
      {
        id: 9,
        name: "Meroon t-shirt",
        category: 'Type 5',
        price: 308.00,
        image: '/images/7.png',
        stock: 14,
      },
      {
        id: 10,
        name: "Hello t-shirt",
        category: 'Type 1',
        price: 70.00,
        image: '/images/10.png',
        stock: 19,
      },
      {
        id: 11,
        name: "Ca 1 t-shirt",
        category: 'Type 1',
        price: 70.00,
        image: '/images/11.png',
        stock: 19,
      },
      {
        id: 12,
        name: "Tk 1 t-shirt",
        category: 'Type 6',
        price: 906.00,
        image: '/images/12.png',
        stock: 6,
      },
      {
        id: 13,
        name: "yu 1 t-shirt",
        category: 'Type 6',
        price: 906.00,
        image: '/images/13.png',
        stock: 2,
      },
      {
        id: 14,
        name: "Pick t-shirt",
        category: 'Type 4',
        price: 78.00,
        image: '/images/14.png',
        stock: 8,
      },
      {
        id: 15,
        name: "Hello t-shirt",
        category: 'Type 3',
        price: 70.00,
        image: '/images/15.png',
        stock: 1,
      },
      {
        id: 16,
        name: "re t-shirt",
        category: 'Type 3',
        price: 740.00,
        image: '/images/16.png',
        stock: 6,
      },
    ],
    cartList: [],
    query: ''
  }),
  getters: {
    getProducts: (state) => state.productList.filter(product => product.name.toLowerCase().includes(state.query.toLowerCase())) || [],
    getCartList: (state) => state.cartList || [],
    getCartTotal: (state) => state.cartList.reduce((sum, item) => sum + item.price * item.quantity, 0)
  },
  actions: {
    addToCart(payload) {
      const productIndex = this.productList.findIndex(product => product.id === payload.id)
      this.productList[productIndex].stock--

      let indexInCart = this.cartList.findIndex(item => item.id === payload.id);

      if (indexInCart !== -1) {
        this.cartList[indexInCart].quantity += 1;
      } else {
        payload.quantity = 1;
        this.cartList.push(payload);
      }
    },

    increseCart(payload) {
      if (payload.stock) {
        let indexInCart = this.cartList.findIndex(item => item.id === payload.id);
        this.cartList[indexInCart].quantity += 1;
        this.cartList[indexInCart].stock -= 1;
      }
    },
    dicreaseCart(payload) {
      if (payload.quantity) {
        let indexInCart = this.cartList.findIndex(item => item.id === payload.id);
        this.cartList[indexInCart].quantity -= 1;
        this.cartList[indexInCart].stock += 1;
      }
    },

    removeItemFromCart(id) {
      // this.cartList = this.cartList.filter(function (product) {
      //   return product.id != id;
      // });
      const indexToRemoveCart = this.cartList.findIndex(function(product) {
        return product.id == id;
      });
      this.cartList.splice(indexToRemoveCart, 1);
      const indexToRProductCart = this.productList.findIndex(function(product) {
        return product.id == id;
      });
      this.productList[indexToRProductCart].stock = this.productList[indexToRProductCart].stock + this.productList[indexToRProductCart].quantity
    },

    updateQuery(payload) {
      this.query = payload;
    }
  }
})