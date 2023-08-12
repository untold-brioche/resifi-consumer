import * as esbuild from 'esbuild'
import * as process from "process"

import { htmlPlugin } from "@craftamap/esbuild-plugin-html"
import { stringify } from 'querystring'

let api_url = "http://localhost:5000"
if (process.env["RESIFI_API"] != undefined) {
	api_url = stringify(process.env["RESIFI_API"])
}

const baseConfig = {
	logLevel: "info",
	entryPoints: ['src/bin/index.ts', 'src/css/style.css'],
	bundle: true,
	define: { "process.env.RESIFI_API": JSON.stringify(api_url) },
	outdir: "dist/",
	metafile: true,
	plugins: [
		htmlPlugin({
			files: [
				{
					entryPoints: ['src/bin/index.ts', 'src/css/style.css'],
					filename: "index.html",
					htmlTemplate: `
						<!DOCTYPE html>
						<html lang="en">
						<head>
							<meta charset="UTF-8">
							<meta name="viewport" content="width=device-width, initial-scale=1.0">
						</head>
						<body>
							<div id="root">
							</div>
						</body>
						</html>
					  `,
					// favicon: "./src/favicon.ico",
				}
			]
		})
	]
}
const releaseConfig = {
	minify: true,
}
const devConfig = {
	outdir: "www/",
	sourcemap: true,
}

switch (process.argv[2]) {
	case "release":
		await esbuild.build({ ...baseConfig, ...releaseConfig })
		break
	case "serve":
		let ctx = await esbuild.context({ ...baseConfig, ...devConfig })
		await ctx.serve({
			servedir: devConfig.outdir
		})
		break
	default:
		await esbuild.build(baseConfig)
		break
}
