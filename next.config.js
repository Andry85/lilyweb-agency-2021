module.exports = {
    reactStrictMode: true,
    images: {
      deviceSizes: [320, 420, 768, 1024, 1200],
      loader: "imgix",
    },
    exportPathMap: function () {
      return {
        "/": { page: "/" },
        "/about": { page: "/about" },
        "/blogs": { page: "/blogs" },
        "/contact": { page: "/contact" },
        "/service": { page: "/service" },
        "/portfolio": { page: "/portfolio" },
      }
    },
    // assetPrefix: '/lilyweb-agency-2021/',
  }