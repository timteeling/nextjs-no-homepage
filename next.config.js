module.exports = {
  experimental: {
    async redirects () {
      return [
        { source: '/', destination: '/about', permanent: true },
    ]}
  }
};