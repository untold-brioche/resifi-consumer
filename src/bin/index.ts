import m from "mithril"
import ReturnView from "./ReturnView"
import Layout from "./Layout"
import ReturnedView from "./ReturnedView"

m.route(document.body, "/", {
	"/": {
		render: function() {
			return m(Layout, m(ReturnView))
		}
	},
	"/refunded": {
		render: function() {
			return m(Layout, m(ReturnedView))
		}
	},
})
