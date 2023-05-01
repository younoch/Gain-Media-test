import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    productList: [
      {
        id: 1,
        name: "Moisture t-shirt",
        category: 'beauty',
        price: 453.00,
        image: '/images/1.png',
        stock: 5, 
      },
      {
        id: 2,
        name: "Be 69",
        category: 'beauty',
        price: 450.00,
        image: '/images/2.png',
        stock: 4, 
      },
      {
        id: 3,
        name: "Cezezne t-shirt",
        category: 'beauty',
        price: 560.00,
        image: '/images/3.png',
        stock: 6, 
      },
      {
        id: 4,
        name: "Baking t-shirt",
        category: 'beauty',
        price: 600.00,
        image: '/images/4.png',
        stock: 8, 
      },
      {
        id: 5,
        name: "Kamino t-shirt",
        category: 'beauty',
        price: 750.00,
        image: '/images/5.png',
        stock: 10, 
      },
      {
        id: 6,
        name: "Chenise t-shirt",
        category: 'beauty',
        price: 890.00,
        image: '/images/6.png',
        stock: 0, 
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
      console.log(payload);
      let indexInCart = this.cartList.findIndex(item => item.id === payload.id);
      this.cartList[indexInCart].quantity += 1;
    },
    updateQuery(payload) {
      this.query = payload;
    }
  }
})