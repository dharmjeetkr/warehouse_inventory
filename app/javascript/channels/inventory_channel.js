import consumer from "./consumer"

consumer.subscriptions.create("InventoryChannel", {
  received(data) {
    const item = document.querySelector(`#inventory_item_${data.id}`)
    if (item) {
      item.querySelector('p:nth-of-type(2)').textContent = `Quantity: ${data.quantity}`
    }
  }
})

