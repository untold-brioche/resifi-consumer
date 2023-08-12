import m, { Component } from "mithril"

const ReturnView: Component = {
	view: () => {
		return [
			m("h1", "Return an item"),
			m("p", "We're sorry that our item could not satisfy your needs. Please fill out this form to initiate a refund."),
			m("br"),
			m("label", "Your address"),
			m("input.form-textbox[type=text]"),
			m("br"),
			m("button", "Initiate refund"),
			m("b", "Cup, 1pc."),
			m("img", {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Mug_of_Tea.JPG/800px-Mug_of_Tea.JPG"}),
		]
	}
}

export default ReturnView
