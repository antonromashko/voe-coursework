module.exports = {
    publicPath: process.env.NODE_ENV === 'local'
    ? '/'
    : '/vue-project/',
    css: {
      requireModuleExtension: true,
        sourceMap: true,
    }
}
