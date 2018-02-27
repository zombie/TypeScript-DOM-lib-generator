/////////////////////////////
/// DOM ES6 APIs
/////////////////////////////

interface AudioTrackList {
    [Symbol.iterator](): IterableIterator<AudioTrack>
}

interface CSSRuleList {
    [Symbol.iterator](): IterableIterator<CSSRule | null>
}

interface CSSStyleDeclaration {
    [Symbol.iterator](): IterableIterator<string>
}

interface ClientRectList {
    [Symbol.iterator](): IterableIterator<ClientRect>
}

interface DOMStringList {
    [Symbol.iterator](): IterableIterator<string | null>
}

interface DOMTokenList {
    [Symbol.iterator](): IterableIterator<string | null>
}

interface DataTransferItemList {
    [Symbol.iterator](): IterableIterator<File>
}

interface FileList {
    [Symbol.iterator](): IterableIterator<File | null>
}

interface HTMLAllCollection {
    [Symbol.iterator](): IterableIterator<Element | null>
}

interface HTMLCollection {
    [Symbol.iterator](): IterableIterator<Element | null>
}

interface MSRangeCollection {
    [Symbol.iterator](): IterableIterator<Range>
}

interface MediaList {
    [Symbol.iterator](): IterableIterator<string | null>
}

interface MimeTypeArray {
    [Symbol.iterator](): IterableIterator<Plugin>
}

interface NamedNodeMap {
    [Symbol.iterator](): IterableIterator<Attr | null>
}

interface NodeList {
    [Symbol.iterator](): IterableIterator<Node>
}

interface Plugin {
    [Symbol.iterator](): IterableIterator<MimeType>
}

interface PluginArray {
    [Symbol.iterator](): IterableIterator<Plugin>
}

interface SourceBufferList {
    [Symbol.iterator](): IterableIterator<SourceBuffer>
}

interface StyleSheetList {
    [Symbol.iterator](): IterableIterator<StyleSheet | null>
}

interface StyleSheetPageList {
    [Symbol.iterator](): IterableIterator<CSSPageRule>
}

interface TextTrackCueList {
    [Symbol.iterator](): IterableIterator<TextTrackCue>
}

interface TextTrackList {
    [Symbol.iterator](): IterableIterator<TextTrack>
}

interface TouchList {
    [Symbol.iterator](): IterableIterator<Touch | null>
}

interface VideoTrackList {
    [Symbol.iterator](): IterableIterator<VideoTrack>
}
