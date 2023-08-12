import m from "mithril"

m.route(document.body, "/", {
	"/": {
		render: function() {
			return m("t", "Hello World!")
		}
	}
})
