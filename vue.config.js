const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 修改默认的入口
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        // vue默认@指向src目录，这里要修正为examples，另外新增一个~指向packages
        // config.resolve.alias
        //     .set('@', resolve('examples'))
        //     .set('~', resolve('packages'))
        //     .set('@@', resolve('src/styles/components'))
        // packages和examples目录需要加入编译
        config.module
            .rule('js')
            .include.add(/packages/)
            .end()
            .include.add(/examples/)
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options;
            })
    }
}
