import m from "mithril"
import ReturnView from "./ReturnView"
import Layout from "./Layout"

m.route(document.body, "/", {
	"/": {
		render: function() {
			return m(Layout, m(ReturnView))
		}
	}
})
