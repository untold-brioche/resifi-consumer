import m, { Component } from "mithril";

const Layout: Component = {
	view: (vnode) => {
		return m("main.layout",
			m("h1.name-header", "E-Commerce Site"),
			m("hr"),
			vnode.children
		)
	}
}

export default Layout
