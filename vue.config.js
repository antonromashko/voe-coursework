module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-coursework/'
    : '/',
    css: {
      requireModuleExtension: true,
        sourceMap: true,
    }
}
