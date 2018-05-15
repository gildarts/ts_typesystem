import { NestedRecord, ValueObject } from "./NestedRecord";

interface SitemapData {
    id: number;
    name: string;
    age: number;
    gender?: boolean;
    parentId?: number;
}

type SitemapRecord = ValueObject<SitemapData>;

const records: SitemapData[] = [
    { id: 1, name: 'zoe', age: 35 },
    { id: 3, name: 'young', age: 18, gender: false, parentId: 2 },
    { id: 2, name: 'old', age: 55, gender: false },
    { id: 4, name: 'big', age: 100, gender: false, parentId: 3 },
]

const mapping = new Map<number, SitemapRecord>();
const circularCount = new Map<number, number>(); //環參照

while(records.length > 0) {
    const record = records.shift()!;
    let exists = false;

    if(!mapping.get(record.id)) {
        mapping.set(record.id, NestedRecord.wrap(record));
    } else {
        exists = true;
    }

    const wrap = mapping.get(record.id)!;

    if(record.parentId) {
        const parent = mapping.get(record.parentId);

        if(parent) {
            parent.child(wrap);
        } else {
            if(exists) throw new Error(`資料錯誤：${record.id}`);
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

const output = Array.from(mapping.values());

const filtered = output.filter(v => v.parentId ? false : true);

console.log(output);
console.log(filtered);

debugger;

// const zoeObj: SitemapData = { id: '1', name: 'zoe', age: 35 };
// const zoeObj2: SitemapData = { id: '2', name: 'old zoe', age: 55, gender: false };

// const zoeResult = NestedRecord.wrap(zoeObj);
// zoeResult.child(zoeObj2);

// console.log(zoeResult.getFields());

// debugger;