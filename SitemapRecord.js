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
var circularCount = new Map(); //環參照
while (records.length > 0) {
    var record = records.shift();
    var exists = false;
    if (!mapping.get(record.id)) {
        mapping.set(record.id, NestedRecord_1.NestedRecord.wrap(record));
    }
    else {
        exists = true;
    }
    var wrap = mapping.get(record.id);
    if (record.parentId) {
        var parent_1 = mapping.get(record.parentId);
        if (parent_1) {
            parent_1.child(wrap);
        }
        else {
            if (exists)
                throw new Error("\u8CC7\u6599\u932F\u8AA4\uFF1A" + record.id);
            records.push(record);
        }
    }
}
// for(const record of records) {
//     if (record.parentId) {
//         let parent = mapping.get(record.parentId);
//         if(!parent)  {
//             parent = NestedRecord.wrap(record);
//             mapping.set(record.id, parent);    
//         } 
//         parent.child(record);
//     } else {
//         mapping.set(record.id, NestedRecord.wrap(record));
//     }
// }
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