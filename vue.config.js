module.exports = {
    css: {
        sourceMap: true,
        loaderOptions: {
            sass: {
                additionalData: `@import "~bootstrap/scss/bootstrap";`
            }
        }
    }
}
