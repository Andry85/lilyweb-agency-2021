module.exports = {
    reactStrictMode: true,
    images: {
      deviceSizes: [320, 420, 768, 1024, 1200],
      loader: "imgix",
    },
    exportPathMap: function () {
      return {
        '/': { page: '/' }
      }
    },
    assetPrefix: '/lilyweb-agency-2021/'
  }