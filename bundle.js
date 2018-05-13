System.register("NestedRecord", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NestedRecord;
    return {
        setters: [],
        execute: function () {
            NestedRecord = /** @class */ (function () {
                function NestedRecord() {
                    this.children = [];
                }
                NestedRecord.wrap = function (v) {
                    return Object.assign(new NestedRecord(), v);
                };
                NestedRecord.prototype.child = function (child) {
                    this.children.push(NestedRecord.wrap(child));
                };
                NestedRecord.prototype.getFields = function () {
                    var allFields = [];
                    for (var _i = 0, _a = Object.getOwnPropertyNames(this); _i < _a.length; _i++) {
                        var k = _a[_i];
                        allFields.push(k);
                        console.log(this[k]);
                    }
                    return allFields;
                };
                return NestedRecord;
            }());
            exports_1("NestedRecord", NestedRecord);
        }
    };
});
System.register("SitemapRecord", ["NestedRecord"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var NestedRecord_1, records, mapping, v;
    return {
        setters: [
            function (NestedRecord_1_1) {
                NestedRecord_1 = NestedRecord_1_1;
            }
        ],
        execute: function () {
            records = [
                { id: 1, name: 'zoe', age: 35 },
                { id: 2, name: 'old zoe', age: 55, gender: false },
                { id: 3, name: 'young zoe', age: 18, gender: false, parentId: 2 },
            ];
            mapping = new Map();
            for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
                var record = records_1[_i];
                if (record.parentId) {
                    var parent_1 = mapping.get(record.parentId);
                    if (!parent_1) {
                        parent_1 = NestedRecord_1.NestedRecord.wrap(record);
                        mapping.set(record.id, parent_1);
                    }
                    parent_1.child(record);
                }
                else {
                    mapping.set(record.id, NestedRecord_1.NestedRecord.wrap(record));
                }
            }
            v = mapping.get(1);
            console.log(Array.from(mapping.values()));
            debugger;
        }
    };
});
//# sourceMappingURL=bundle.js.map