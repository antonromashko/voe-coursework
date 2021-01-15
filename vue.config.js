module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-project/'
    : '/',
    css: {
      requireModuleExtension: true,
        sourceMap: true,
    }
}
