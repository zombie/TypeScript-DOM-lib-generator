/////////////////////////////
/// AudioWorklet Async Iterable APIs
/////////////////////////////

interface ReadableStream<R = any> {
    [Symbol.asyncIterator](options?: ReadableStreamIteratorOptions): BuiltinAsyncIterator<R, BuiltinIteratorReturn>;
    values(options?: ReadableStreamIteratorOptions): BuiltinAsyncIterator<R, BuiltinIteratorReturn>;
}
