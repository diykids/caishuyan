const fs = require('fs');
const path = require('path');
const ghpages = require('gh-pages');
const EndWebpackPlugin = require('end-webpack-plugin');

const outputPath = path.resolve(__dirname, './dist');

function publishGhPages() {
    return new Promise((resolve, reject) => {
        ghpages.publish(outputPath, {dotfiles: true}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        })
    });
}

module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            // '/api': {
            //     target: 'http://127.0.0.1:8081', // 源地址
            //     changeOrigin: true, // 改变源
            // }
        }
    },
    configureWebpack: {
        plugins: [
            new EndWebpackPlugin(async () => {
                fs.writeFileSync(path.resolve(outputPath, 'CNAME'), 'caishuyan.com');
                // 重新发布到 ghpages
                await publishGhPages();
            })
        ]
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
}