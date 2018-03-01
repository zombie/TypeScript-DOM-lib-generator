export function filter(obj: any, fn: (o: any, n: string | undefined) => boolean) {
    if (typeof obj === "object") {
        if (Array.isArray(obj)) {
            const newArray: any[] = [];
            for (const e of obj) {
                if (fn(e, undefined)) {
                    newArray.push(filter(e, fn));
                }
            }
            return newArray;
        }
        else {
            const result: any = {};
            for (const e in obj) {
                if (fn(obj[e], e)) {
                    result[e] = filter(obj[e], fn);
                }
            }
            return result;
        }
    }
    return obj;
}

export function filterProperties<T>(obj: Record<string, T>, fn: (o: T) => boolean): Record<string, T> {
    const result: Record<string, T> = {};
    for (const e in obj) {
        if (fn(obj[e])) {
            result[e] = obj[e];
        }
    }
    return result;
}

export function merge<T>(src: T, target: T): T {
    if (typeof src !== "object" || typeof target !== "object") {
        return src;
    }
    for (const k in target) {
        if (Object.getOwnPropertyDescriptor(target, k)) {
            if (Object.getOwnPropertyDescriptor(src, k)) {
                const srcProp = src[k];
                const targetProp = target[k];
                if (Array.isArray(srcProp) && Array.isArray(targetProp)) {
                    mergeNamedArrays(srcProp, targetProp);
                }
                else {
                    if (Array.isArray(srcProp) !== Array.isArray(targetProp)) {
                        throw new Error("Mismatch on property: " + k + JSON.stringify(targetProp));
                    }
                    merge(src[k], target[k]);
                }
            }
            else {
                src[k] = target[k];
            }
        }
    }
    return src;
}

function mergeNamedArrays<T extends { name: string }>(srcProp: T[], targetProp: T[]) {
    const map: any = {};
    for (const e1 of srcProp) {
        if (e1.name) {
            map[e1.name] = e1;
        }
    }

    for (const e2 of targetProp) {
        if (e2.name && map[e2.name]) {
            merge(map[e2.name], e2);
        }
        else {
            srcProp.push(e2);
        }
    }
}

export function distinct<T>(a: T[]): T[] {
    return Array.from(new Set(a).values());
}

export function mapToArray<T>(m: Record<string, T>): T[] {
    return Object.keys(m || {}).map(k => m[k]);
}

export function map<T, U>(obj: Record<string, T> | undefined, fn: (o: T) => U): U[] {
    return Object.keys(obj || {}).map(k => fn(obj![k]));
}

export function toNameMap<T extends { name: string }>(array: T[]) {
    const result: Record<string, T> = {};
    for (const value of array) {
        result[value.name] = value;
    }
    return result;
}