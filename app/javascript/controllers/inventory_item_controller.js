// import { Controller } from "@hotwired/stimulus"

// // Connects to data-controller="inventory-item"
// export default class extends Controller {
//   connect() {
//   }
// }

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "form" ]

  connect() {
    this.formTarget.addEventListener("turbo:submit-end", () => {
      this.formTarget.reset()
    })
  }
}
