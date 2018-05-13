/**
 * 在 nodejs 使用 systemjs 需要一個純 javascript 前導，進行一些啟動的程式碼。
 */

const system = require('systemjs');

// bundle.js 是打包好的程式。
system.import('./bundle.js').then(async (v) => {

    // SitemapRecord 是 TypeScript 的主程式，類似 main，包含直接執行的程式。
    system.import('SitemapRecord');
});
