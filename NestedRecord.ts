export type ValueObject<T> = { [P in keyof T]: T[P] } & NestedRecord<T>;

export class NestedRecord<T> {

    children:  ValueObject<T>[] = [];

    [x: string]: any;

    static wrap<T>(v: T): ValueObject<T> {
        return Object.assign(new NestedRecord(), v) as ValueObject<T>;
    }

    child(child: T) {
        this.children.push(NestedRecord.wrap(child));
    }

    getFields(): string[] {

        const allFields: string[] = [];

        for (const k of Object.getOwnPropertyNames(this)) {
            allFields.push(k);

            console.log(this[k]);
        }

        return allFields;
    }
}