"use strict";
exports.__esModule = true;
var NestedRecord = /** @class */ (function () {
    function NestedRecord() {
        this.children = [];
    }
    NestedRecord.wrap = function (v) {
        return Object.assign(new NestedRecord(), v);
    };
    NestedRecord.prototype.child = function (child) {
        this.children.push(NestedRecord.wrap(child));
    };
    NestedRecord.prototype.childValue = function (child) {
        this.children.push(child);
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
exports.NestedRecord = NestedRecord;
//# sourceMappingURL=NestedRecord.js.map