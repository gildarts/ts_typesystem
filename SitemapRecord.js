"use strict";
exports.__esModule = true;
var NestedRecord_1 = require("./NestedRecord");
var records = [
    { id: 1, name: 'zoe', age: 35 },
    { id: 3, name: 'young', age: 18, gender: false, parentId: 2 },
    { id: 2, name: 'old', age: 55, gender: false },
    { id: 4, name: 'big', age: 100, gender: false, parentId: 3 },
];
var mapping = new Map();
for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
    var record = records_1[_i];
    mapping.set(record.id, NestedRecord_1.NestedRecord.wrap(record));
}
for (var _a = 0, _b = Array.from(mapping.values()); _a < _b.length; _a++) {
    var sitemap = _b[_a];
    if (mapping.has(sitemap.parentId)) {
        mapping.get(sitemap.parentId).childValue(sitemap);
    }
}
var output = Array.from(mapping.values());
var filtered = output.filter(function (v) { return v.parentId ? false : true; });
console.log(output);
console.log(filtered);
debugger;
// const zoeObj: SitemapData = { id: '1', name: 'zoe', age: 35 };
// const zoeObj2: SitemapData = { id: '2', name: 'old zoe', age: 55, gender: false };
// const zoeResult = NestedRecord.wrap(zoeObj);
// zoeResult.child(zoeObj2);
// console.log(zoeResult.getFields());
// debugger;
//# sourceMappingURL=SitemapRecord.js.map