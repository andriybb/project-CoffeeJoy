'use strict'

export let myOrders = {
    
    initialCount: JSON.parse(localStorage.getItem("id")) || 0,
    orders: JSON.parse(localStorage.getItem("myOrders")) || [],
    idCurrentList: null,
  
    getNewId() {
      ++this.initialCount;
      localStorage.setItem("id", JSON.stringify(this.initialCount));
      return this.initialCount;
    },

    setMyOrders(myOrderObj){

      const newOrder = {
        id: this.getNewId(),
        myOrderDate: myOrderObj.myOrderDate,
        myOrderGoodName: myOrderObj.myOrderGoodName,
        myOrderFullName: myOrderObj.myOrderFullName,
        myOrderGoodQuantity: myOrderObj.myOrderGoodQuantity,
        myOrderPrice: myOrderObj.myOrderPrice,
        imgSrc: myOrderObj.imgSrc,
        myOrderCity: myOrderObj.myOrderCity,
        myOrderNewPost: myOrderObj.myOrderNewPost,
        myOrderPayment: myOrderObj.myOrderPayment,
        myOrderComment: myOrderObj.myOrderComment,
        myOrderTotal: myOrderObj.myOrderTotal
      };
      
      this.orders.push(newOrder);    
      this.saveToLocalStorage();

    },
    
    deleteOrder(id) {
      const index = this.orders.findIndex((item) => item.id === +id);
      this.orders.splice(index, 1);
      this.saveToLocalStorage();
    },

    saveToLocalStorage() {
      localStorage.setItem("myOrders", JSON.stringify(this.orders));
    }
}