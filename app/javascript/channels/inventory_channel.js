// import consumer from "channels/consumer"

// consumer.subscriptions.create("InventoryChannel", {
//   connected() {
//     // Called when the subscription is ready for use on the server
//   },

//   disconnected() {
//     // Called when the subscription has been terminated by the server
//   },

//   received(data) {
//     // Called when there's incoming data on the websocket for this channel
//   }
// });


import consumer from "./consumer"

consumer.subscriptions.create("InventoryChannel", {
  received(data) {
    const item = document.querySelector(`#inventory_item_${data.id}`)
    if (item) {
      item.querySelector('p:nth-of-type(2)').textContent = `Quantity: ${data.quantity}`
    }
  }
})

