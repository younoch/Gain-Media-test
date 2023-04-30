import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    productList: [
      {
        id: 1,
        name: "Moisture powder",
        cetegory: 'beauty',
        price: 453,
        image: '/public/images/1.jpg',
        stock: 5, 
      },
      {
        id: 2,
        name: "Be 69",
        cetegory: 'beauty',
        price: 450,
        image: '/public/images/2.jpg',
        stock: 4, 
      },
      {
        id: 3,
        name: "Cezezne powder",
        cetegory: 'beauty',
        price: 560,
        image: '/public/images/3.jpg',
        stock: 6, 
      },
      {
        id: 4,
        name: "Baking powder",
        cetegory: 'beauty',
        price: 600,
        image: '/public/images/4.jpg',
        stock: 8, 
      },
      {
        id: 5,
        name: "Kamino powder",
        cetegory: 'beauty',
        price: 750,
        image: '/public/images/5.jpg',
        stock: 10, 
      },
      {
        id: 6,
        name: "Chenise powder",
        cetegory: 'beauty',
        price: 890,
        image: '/public/images/6.jpg',
        stock: 0, 
      },
    ],
    cartList: [],
    query: ''
  }),
  getters: {
    getProducts: (state) => state.productList.filter(product => product.name.toLowerCase().includes(state.query.toLowerCase())) || []
  },
  actions: {
    addToCart(payload) {
      const productIndex = this.productList.findIndex(product => product.id === payload.id)
      this.productList[productIndex].stock--

      let indexInCart = this.cartList.findIndex(item => item.id === payload.id);
      console.log(indexInCart);

      if (indexInCart !== -1) {
        this.cartList[indexInCart].quantity += 1;
      } else {
        payload.quantity = 1;
        this.cartList.push(payload);
      }
    },
    updateQuery(payload) {
      this.query = payload;
    }
  }
})