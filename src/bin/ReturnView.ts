import m, { Component } from "mithril"

const ReturnView: Component = {
	view: () => {
		return [
			m("h1", "Return an item"),
			m("p", "We're sorry that our item could not satisfy your needs. Please fill out this form to initiate a refund.")
		]
	}
}

export default ReturnView
