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

for(const record of records) {
    mapping.set(record.id, NestedRecord.wrap(record));
}

for(const sitemap of Array.from(mapping.values())) {
    if(mapping.has(sitemap.parentId!)) {
        mapping.get(sitemap.parentId!)!.childValue(sitemap);
    }
}

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