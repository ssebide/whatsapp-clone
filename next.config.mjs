/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "colorless-goose-369.convex.cloud" },
			{ hostname: "oaidalleapiprodscus.blob.core.windows.net" },
		],
	},
};

export default nextConfig;