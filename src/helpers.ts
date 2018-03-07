export function filter(obj: any, fn: (o: any, n: string | undefined) => boolean): any {
    if (typeof obj === "object") {
        if (Array.isArray(obj)) {
            return mapDefined(obj, e => fn(e, undefined) ? filter(e, fn) : undefined);
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

export function arrayToMap<T, U>(array: ReadonlyArray<T>, makeKey: (value: T) => string, makeValue: (value: T) => U): Record<string, U> {
    const result: Record<string, U> = {};
    for (const value of array) {
        result[makeKey(value)] = makeValue(value);
    }
    return result;
}

export function map<T, U>(obj: Record<string, T> | undefined, fn: (o: T) => U): U[] {
    return Object.keys(obj || {}).map(k => fn(obj![k]));
}

export function mapDefined<T, U>(array: ReadonlyArray<T> | undefined, mapFn: (x: T, i: number) => U | undefined): U[] {
    const result: U[] = [];
    if (array) {
        for (let i = 0; i < array.length; i++) {
            const mapped = mapFn(array[i], i);
            if (mapped !== undefined) {
                result.push(mapped);
            }
        }
    }
    return result;
}

export function toNameMap<T extends { name: string }>(array: T[]) {
    const result: Record<string, T> = {};
    for (const value of array) {
        result[value.name] = value;
    }
    return result;
}

export function isArray(value: any): value is ReadonlyArray<{}> {
    return Array.isArray ? Array.isArray(value) : value instanceof Array;
}

export function flatMap<T, U>(array: ReadonlyArray<T> | undefined, mapfn: (x: T, i: number) => U | ReadonlyArray<U> | undefined): U[]  {
    let result: U[] | undefined;
    if (array) {
        result = [];
        for (let i = 0; i < array.length; i++) {
            const v = mapfn(array[i], i);
            if (v) {
                if (isArray(v)) {
                    result.push(...v);
                }
                else {
                    result.push(v);
                }
            }
        }
    }
    return result || [];
}

export function concat<T>(a: T[] | undefined, b: T[] | undefined): T[] {
    return !a ? b || [] : a.concat(b || []);
}