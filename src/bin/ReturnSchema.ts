import m from "mithril"

const ReturnSchema: any = {
	addr: "",
	data: {},
	request: async () => {
		ReturnSchema.data = await m.request({
			url: process.env.RESIFI_API + "/return", method: "POST", body: {
				consumer_address: ReturnSchema.addr,
				business_id: 1,
				item_id: 2,
			}
		})
		console.log(ReturnSchema.data)
	}
}

export default ReturnSchema
