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
    { id: 2, name: 'old zoe', age: 55, gender: false },
    { id: 3, name: 'young zoe', age: 18, gender: false, parentId: 2 },
]

const mapping = new Map<number, SitemapRecord>();
for(const record of records) {
    
    if (record.parentId) {
        let parent = mapping.get(record.parentId);

        if(!parent)  {
            parent = NestedRecord.wrap(record);
            mapping.set(record.id, parent);    
        } 

        parent.child(record);

    } else {
        mapping.set(record.id, NestedRecord.wrap(record));
    }
}

const v = mapping.get(1);

console.log(Array.from(mapping.values()));

debugger;

// const zoeObj: SitemapData = { id: '1', name: 'zoe', age: 35 };
// const zoeObj2: SitemapData = { id: '2', name: 'old zoe', age: 55, gender: false };

// const zoeResult = NestedRecord.wrap(zoeObj);
// zoeResult.child(zoeObj2);

// console.log(zoeResult.getFields());

// debugger;