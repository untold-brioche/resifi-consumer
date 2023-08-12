import m, { Component } from "mithril"

const ReturnedView: Component = {
	view: () => {
		return [
			m("h1", "Shipping"),
			m("p", "Please print this shipping label to return your package."),
			m("div.shipping-label",
				m("h1", "USPS PRIORITY MAIL"),
				m("hr"),
				m("p", "FROM:"),
				m("br"),
				m("hr"),
				m("p", "TO: ", m("b", "")),
				m("img.barc", { src: "https://barcodeapi.org/api/128/ggyybnzffogkzgzykn" }),
				m("img.qr", { src: "https://barcodeapi.org/api/qr/jkldjaslkjdlfkasjbcxvquklasjdflkasjdlkfjalskdfjlkasdjfe" })
			)
		]
	}
}

export default ReturnedView
