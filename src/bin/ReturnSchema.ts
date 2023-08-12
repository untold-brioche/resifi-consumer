import m from "mithril"

const ReturnSchema: any = {
	addr: "",
	data: undefined,
	charity_data: undefined,
	request: async () => {
		ReturnSchema.data = await m.request({
			url: process.env.RESIFI_API + "/return", method: "POST", body: {
				consumer_address: ReturnSchema.addr,
				business_id: 1,
				item_id: 2,
			}
		})
		ReturnSchema.charity_data = await m.request({
			url: process.env.RESIFI_API + "/charity/" + ReturnSchema.data.inventory_item.charity_id, method: "GET"
		})
	}
}

export default ReturnSchema
