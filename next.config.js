
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/translate/store",
        destination: "https://milsonn.com/api/user/translate/store",
      },
    ];
  },
}
module.exports ={
  images: {
    domains: ['http://127.0.0.1:8000/image/'],
  },
}


module.exports = nextConfig
