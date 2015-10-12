(function () {
    var _eventManager = _$createEventManager(
        function getEventObject(type, attach, obj, ignoreCase) {
            function _eventTypeToObject(type, attach) {
                if (attach) return Event;
                
                switch (type) {
                    case 'close': return CloseEvent;
                    case 'error': return ErrorEvent;
                    case 'loadend': return ProgressEvent;
                    case 'message': return MessageEvent;
                    case 'progress': return ProgressEvent;
                    case 'upgradeneeded': return IDBVersionChangeEvent;
                }
                return Event;
            }
            var e = _eventTypeToObject(type, attach);
            var eventObject = Object.create(e);
            eventObject.target = obj;
            eventObject.currentTarget = obj;
            eventObject.type = type;
            if (eventObject.relatedTarget)
                eventObject.relatedTarget = obj;
            return eventObject;
        });
    var _events = _eventManager.createEventProperties;

    
    var AudioBuffer = {};
    var Blob = {};
    var BlobCtor = function() { return Object.create(Blob); };
    var Console = {};
    var Coordinates = {};
    var DOMError = {};
    var DOMException = {};
    var DOMStringList = {};
    var Event = {};
    var EventCtor = function(type, eventInitDict) { 
        /// <signature>
        /// <param name='type' type='String'/>
        /// <param name='eventInitDict' type='EventInit' optional='true' />
        /// </signature>
        return Object.create(Event);
    };
    var EventTarget = {};
    var FileList = {};
    var IDBCursor = {};
    var IDBFactory = {};
    var IDBIndex = {};
    var IDBKeyRange = {};
    var IDBObjectStore = {};
    var ImageData = {};
    var MSApp = {};
    var MSBlobBuilder = {};
    var MSBlobBuilderCtor = function() { return Object.create(MSBlobBuilder); };
    var MSStream = {};
    var MediaQueryList = {};
    var MessageChannel = {};
    var MessageChannelCtor = function() { return Object.create(MessageChannel); };
    var Position = {};
    var PositionError = {};
    var EventListener = {};
    var AbstractWorker = {};
    var MSBaseReader = {};
    var NavigatorID = {};
    var NavigatorOnLine = {};
    var WindowBase64 = {};
    var WindowConsole = {};
    var XMLHttpRequestEventTarget = {};
    var FileReaderSync = {};
    var FileReaderSyncCtor = function() { return Object.create(FileReaderSync); };
    var WorkerLocation = {};
    var DedicatedWorkerGlobalScope = {};
    var CloseEvent = _$inherit(Event);
    var ErrorEvent = _$inherit(Event);
    var File = _$inherit(Blob);
    var FileReader = _$inherit(EventTarget);
    var FileReaderCtor = function() { return Object.create(FileReader); };
    var IDBCursorWithValue = _$inherit(IDBCursor);
    var IDBDatabase = _$inherit(EventTarget);
    var IDBRequest = _$inherit(EventTarget);
    var IDBTransaction = _$inherit(EventTarget);
    var IDBVersionChangeEvent = _$inherit(Event);
    var MSAppAsyncOperation = _$inherit(EventTarget);
    var MSStreamReader = _$inherit(EventTarget);
    var MSStreamReaderCtor = function() { return Object.create(MSStreamReader); };
    var MessageEvent = _$inherit(Event);
    var MessagePort = _$inherit(EventTarget);
    var ProgressEvent = _$inherit(Event);
    var WebSocket = _$inherit(EventTarget);
    var WebSocketCtor = function(url, protocols) { 
        /// <signature>
        /// <param name='url' type='String'/>
        /// <param name='protocols' type='String' optional='true' />
        /// </signature>
        /// <signature>
        /// <param name='url' type='String'/>
        /// <param name='protocols' type='Object' optional='true' />
        /// </signature>
        return Object.create(WebSocket);
    };
    var Worker = _$inherit(EventTarget);
    var WorkerCtor = function(stringUrl) { 
        /// <signature>
        /// <param name='stringUrl' type='String'/>
        /// </signature>
        return Object.create(Worker);
    };
    var XMLHttpRequest = _$inherit(EventTarget);
    var XMLHttpRequestCtor = function() { return Object.create(XMLHttpRequest); };
    var XMLHttpRequestUpload = _$inherit(EventTarget);
    var WorkerNavigator = {};
    var WorkerUtils = {};
    var IDBOpenDBRequest = _$inherit(IDBRequest);
    var WorkerGlobalScope = this;
    var ErrorEventHandler = function(event, source, fileno, columnNumber) {
        /// <signature>
        /// <param name='event' type='Event'/>
        /// <param name='source' type='String' optional='true' />
        /// <param name='fileno' type='Number' optional='true' />
        /// <param name='columnNumber' type='Number' optional='true' />
        /// </signature>
        /// <signature>
        /// <param name='event' type='String'/>
        /// <param name='source' type='String' optional='true' />
        /// <param name='fileno' type='Number' optional='true' />
        /// <param name='columnNumber' type='Number' optional='true' />
        /// </signature>
    };
    var PositionCallback = function(position) {
        /// <signature>
        /// <param name='position' type='Position'/>
        /// </signature>
    };
    var PositionErrorCallback = function(error) {
        /// <signature>
        /// <param name='error' type='PositionError'/>
        /// </signature>
    };
    var MediaQueryListListener = function(mql) {
        /// <signature>
        /// <param name='mql' type='MediaQueryList'/>
        /// </signature>
    };
    var MSLaunchUriCallback = function() {
    };
    var FrameRequestCallback = function(time) {
        /// <signature>
        /// <param name='time' type='Number'/>
        /// </signature>
    };
    var MSUnsafeFunctionCallback = function() {
        /// <signature>
        /// <returns type='Object'/>
        /// </signature>
        return Object;
    };
    var MSExecAtPriorityFunctionCallback = function(args) {
        /// <signature>
        /// <param name='args' type='Object'/>
        /// <returns type='Object'/>
        /// </signature>
        return Object;
    };
    var MutationCallback = function(mutations, observer) {
        /// <signature>
        /// <param name='mutations' type='Array' elementType='MutationRecord' />
        /// <param name='observer' type='MutationObserver'/>
        /// </signature>
    };
    var DecodeSuccessCallback = function(decodedData) {
        /// <signature>
        /// <param name='decodedData' type='AudioBuffer'/>
        /// </signature>
    };
    var DecodeErrorCallback = function() {
    };
    var FunctionStringCallback = function(data) {
        /// <signature>
        /// <param name='data' type='String'/>
        /// </signature>
    };
    
    /* -- type: AudioBuffer -- */
    
    AudioBuffer.duration = 0;
    AudioBuffer.length = 0;
    AudioBuffer.numberOfChannels = 0;
    AudioBuffer.sampleRate = 0;
    AudioBuffer.getChannelData = function(channel) {
        /// <signature>
        /// <param name='channel' type='Number'/>
        /// <returns type='Float32Array'/>
        /// </signature>
        return new Float32Array();
    };
    
    /* -- type: Blob -- */
    
    Blob.size = 0;
    Blob.type = '';
    Blob.msClose = function() {
    };
    Blob.msDetachStream = function() {
        /// <signature>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    Blob.slice = function(start, end, contentType) {
        /// <signature>
        /// <param name='start' type='Number' optional='true' />
        /// <param name='end' type='Number' optional='true' />
        /// <param name='contentType' type='String' optional='true' />
        /// <returns type='Blob'/>
        /// </signature>
        return Blob;
    };
    
    /* -- type: Console -- */
    
    Console.assert = function(test, message, optionalParams) {
        /// <signature>
        /// <param name='test' type='Boolean' optional='true' />
        /// <param name='message' type='String' optional='true' />
        /// <param name='optionalParams' type='Object'/>
        /// </signature>
    };
    Console.clear = function() {
    };
    Console.count = function(countTitle) {
        /// <signature>
        /// <param name='countTitle' type='String' optional='true' />
        /// </signature>
    };
    Console.debug = function(message, optionalParams) {
        /// <signature>
        /// <param name='message' type='String' optional='true' />
        /// <param name='optionalParams' type='Object'/>
        /// </signature>
    };
    Console.dir = function(value, optionalParams) {
        /// <signature>
        /// <param name='value' type='Object' optional='true' />
        /// <param name='optionalParams' type='Object'/>
        /// </signature>
    };
    Console.dirxml = function(value) {
        /// <signature>
        /// <param name='value' type='Object'/>
        /// </signature>
    };
    Console.error = function(message, optionalParams) {
        /// <signature>
        /// <param name='message' type='String' optional='true' />
        /// <param name='optionalParams' type='Object'/>
        /// </signature>
    };
    Console.group = function(groupTitle) {
        /// <signature>
        /// <param name='groupTitle' type='String' optional='true' />
        /// </signature>
    };
    Console.groupCollapsed = function(groupTitle) {
        /// <signature>
        /// <param name='groupTitle' type='String' optional='true' />
        /// </signature>
    };
    Console.groupEnd = function() {
    };
    Console.info = function(message, optionalParams) {
        /// <signature>
        /// <param name='message' type='String' optional='true' />
        /// <param name='optionalParams' type='Object'/>
        /// </signature>
    };
    Console.log = function(message, optionalParams) {
        /// <signature>
        /// <param name='message' type='String' optional='true' />
        /// <param name='optionalParams' type='Object'/>
        /// </signature>
    };
    Console.msIsIndependentlyComposed = function(element) {
        /// <signature>
        /// <param name='element' type='Object'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Console.profile = function(reportName) {
        /// <signature>
        /// <param name='reportName' type='String' optional='true' />
        /// </signature>
    };
    Console.profileEnd = function() {
    };
    Console.select = function(element) {
        /// <signature>
        /// <param name='element' type='Object'/>
        /// </signature>
    };
    Console.time = function(timerName) {
        /// <signature>
        /// <param name='timerName' type='String' optional='true' />
        /// </signature>
    };
    Console.timeEnd = function(timerName) {
        /// <signature>
        /// <param name='timerName' type='String' optional='true' />
        /// </signature>
    };
    Console.trace = function() {
    };
    Console.warn = function(message, optionalParams) {
        /// <signature>
        /// <param name='message' type='String' optional='true' />
        /// <param name='optionalParams' type='Object'/>
        /// </signature>
    };
    
    /* -- type: Coordinates -- */
    
    Coordinates.accuracy = 0;
    Coordinates.altitude = 0;
    Coordinates.altitudeAccuracy = 0;
    Coordinates.heading = 0;
    Coordinates.latitude = 0;
    Coordinates.longitude = 0;
    Coordinates.speed = 0;
    
    /* -- type: DOMError -- */
    
    DOMError.name = '';
    DOMError.toString = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    
    /* -- type: DOMException -- */
    
    DOMException.code = 0;
    DOMException.message = '';
    DOMException.name = '';
    DOMException.ABORT_ERR = 20;
    DOMException.DATA_CLONE_ERR = 25;
    DOMException.DOMSTRING_SIZE_ERR = 2;
    DOMException.HIERARCHY_REQUEST_ERR = 3;
    DOMException.INDEX_SIZE_ERR = 1;
    DOMException.INUSE_ATTRIBUTE_ERR = 10;
    DOMException.INVALID_ACCESS_ERR = 15;
    DOMException.INVALID_CHARACTER_ERR = 5;
    DOMException.INVALID_MODIFICATION_ERR = 13;
    DOMException.INVALID_NODE_TYPE_ERR = 24;
    DOMException.INVALID_STATE_ERR = 11;
    DOMException.NAMESPACE_ERR = 14;
    DOMException.NETWORK_ERR = 19;
    DOMException.NOT_FOUND_ERR = 8;
    DOMException.NOT_SUPPORTED_ERR = 9;
    DOMException.NO_DATA_ALLOWED_ERR = 6;
    DOMException.NO_MODIFICATION_ALLOWED_ERR = 7;
    DOMException.PARSE_ERR = 81;
    DOMException.QUOTA_EXCEEDED_ERR = 22;
    DOMException.SECURITY_ERR = 18;
    DOMException.SERIALIZE_ERR = 82;
    DOMException.SYNTAX_ERR = 12;
    DOMException.TIMEOUT_ERR = 23;
    DOMException.TYPE_MISMATCH_ERR = 17;
    DOMException.URL_MISMATCH_ERR = 21;
    DOMException.VALIDATION_ERR = 16;
    DOMException.WRONG_DOCUMENT_ERR = 4;
    DOMException.toString = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    
    /* -- type: DOMStringList -- */
    
    DOMStringList.length = 0;
    DOMStringList.contains = function(str) {
        /// <signature>
        /// <param name='str' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    DOMStringList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='String'/>
        /// </signature>
        return this[index] || _$getTrackingNull('');
    };
    /* Add a single array element */
    DOMStringList[0] = _$getTrackingNull('');
    
    /* -- type: Event -- */
    
    EventCtor.AT_TARGET = 2;
    EventCtor.BUBBLING_PHASE = 3;
    EventCtor.CAPTURING_PHASE = 1;
    Event.bubbles = false;
    Event.cancelBubble = false;
    Event.cancelable = false;
    Event.currentTarget = EventTarget;
    Event.defaultPrevented = false;
    Event.eventPhase = 0;
    Event.isTrusted = false;
    Event.returnValue = false;
    Event.srcElement = {};
    Event.target = EventTarget;
    Event.timeStamp = 0;
    Event.type = '';
    Event.AT_TARGET = 2;
    Event.BUBBLING_PHASE = 3;
    Event.CAPTURING_PHASE = 1;
    Event.initEvent = function(eventTypeArg, canBubbleArg, cancelableArg) {
        /// <signature>
        /// <param name='eventTypeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// </signature>
    };
    Event.preventDefault = function() {
    };
    Event.stopImmediatePropagation = function() {
    };
    Event.stopPropagation = function() {
    };
    
    /* -- type: EventTarget -- */
    
    EventTarget.addEventListener = function(type, listener, useCapture) {
        /// <signature>
        /// <param name='type' type='String'/>
        /// <param name='listener' type='EventListener'/>
        /// <param name='useCapture' type='Boolean' optional='true' />
        /// </signature>
        _eventManager.add(this, type, listener);
    };
    EventTarget.dispatchEvent = function(evt) {
        /// <signature>
        /// <param name='evt' type='Event'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    EventTarget.removeEventListener = function(type, listener, useCapture) {
        /// <signature>
        /// <param name='type' type='String'/>
        /// <param name='listener' type='EventListener'/>
        /// <param name='useCapture' type='Boolean' optional='true' />
        /// </signature>
    };
    
    /* -- type: FileList -- */
    
    FileList.length = 0;
    FileList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='File'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(File));
    };
    /* Add a single array element */
    FileList[0] = _$getTrackingNull(Object.create(File));
    
    /* -- type: IDBCursor -- */
    
    IDBCursor.direction = '';
    IDBCursor.key = {};
    IDBCursor.primaryKey = {};
    IDBCursor.source = {};
    IDBCursor.NEXT = "next";
    IDBCursor.NEXT_NO_DUPLICATE = "nextunique";
    IDBCursor.PREV = "prev";
    IDBCursor.PREV_NO_DUPLICATE = "prevunique";
    IDBCursor.advance = function(count) {
        /// <signature>
        /// <param name='count' type='Number'/>
        /// </signature>
    };
    IDBCursor.continue = function(key) {
        /// <signature>
        /// <param name='key' type='Object' optional='true' />
        /// </signature>
    };
    IDBCursor.delete = function() {
        /// <signature>
        /// <returns type='IDBRequest'/>
        /// </signature>
        return _createIDBRequest(IDBRequest, this, undefined);
    };
    IDBCursor.update = function(value) {
        /// <signature>
        /// <param name='value' type='Object'/>
        /// <returns type='IDBRequest'/>
        /// </signature>
        return _createIDBRequest(IDBRequest, this, value);
    };
    
    /* -- type: IDBFactory -- */
    
    IDBFactory.cmp = function(first, second) {
        /// <signature>
        /// <param name='first' type='Object'/>
        /// <param name='second' type='Object'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    IDBFactory.deleteDatabase = function(name) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <returns type='IDBOpenDBRequest'/>
        /// </signature>
        return _createIDBRequest(IDBOpenDBRequest, null, null);
    };
    IDBFactory.open = function(name, version) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <param name='version' type='Number' optional='true' />
        /// <returns type='IDBOpenDBRequest'/>
        /// </signature>
        return _createIDBRequest(IDBOpenDBRequest, null, Object.create(IDBDatabase));
    };
    
    /* -- type: IDBIndex -- */
    
    IDBIndex.keyPath = '';
    IDBIndex.name = '';
    IDBIndex.objectStore = IDBObjectStore;
    IDBIndex.unique = false;
    IDBIndex.count = function(key) {
        /// <signature>
        /// <param name='key' type='Object' optional='true' />
        /// <returns type='IDBRequest'/>
        /// </signature>
        return _createIDBRequest(IDBRequest, this, 0);
    };
    IDBIndex.get = function(key) {
        /// <signature>
        /// <param name='key' type='Object'/>
        /// <returns type='IDBRequest'/>
        /// </signature>
        return _createIDBRequest(IDBRequest, this.objectStore, {});
    };
    IDBIndex.getKey = function(key) {
        /// <signature>
        /// <param name='key' type='Object'/>
        /// <returns type='IDBRequest'/>
        /// </signature>
        return _createIDBRequest(IDBRequest, this.objectStore, {});
    };
    IDBIndex.openCursor = function(range, direction) {
        /// <signature>
        /// <param name='range' type='IDBKeyRange' optional='true' />
        /// <param name='direction' type='String' optional='true' />
        /// <returns type='IDBRequest'/>
        /// </signature>
        var cursor = Object.create(IDBCursorWithValue); cursor.source = this; return _createIDBRequest(IDBRequest, this, cursor);
    };
    IDBIndex.openKeyCursor = function(range, direction) {
        /// <signature>
        /// <param name='range' type='IDBKeyRange' optional='true' />
        /// <param name='direction' type='String' optional='true' />
        /// <returns type='IDBRequest'/>
        /// </signature>
        var cursor = Object.create(IDBCursor); cursor.source = this; return _createIDBRequest(IDBRequest, this.objectStore, cursor);
    };
    
    /* -- type: IDBKeyRange -- */
    
    IDBKeyRange.lower = {};
    IDBKeyRange.lowerOpen = false;
    IDBKeyRange.upper = {};
    IDBKeyRange.upperOpen = false;
    IDBKeyRange.bound = function(lower, upper, lowerOpen, upperOpen) {
        /// <signature>
        /// <param name='lower' type='Object'/>
        /// <param name='upper' type='Object'/>
        /// <param name='lowerOpen' type='Boolean' optional='true' />
        /// <param name='upperOpen' type='Boolean' optional='true' />
        /// <returns type='IDBKeyRange'/>
        /// </signature>
        return IDBKeyRange;
    };
    IDBKeyRange.lowerBound = function(bound, open) {
        /// <signature>
        /// <param name='bound' type='Object'/>
        /// <param name='open' type='Boolean' optional='true' />
        /// <returns type='IDBKeyRange'/>
        /// </signature>
        return IDBKeyRange;
    };
    IDBKeyRange.only = function(value) {
        /// <signature>
        /// <param name='value' type='Object'/>
        /// <returns type='IDBKeyRange'/>
        /// </signature>
        return IDBKeyRange;
    };
    IDBKeyRange.upperBound = function(bound, open) {
        /// <signature>
        /// <param name='bound' type='Object'/>
        /// <param name='open' type='Boolean' optional='true' />
        /// <returns type='IDBKeyRange'/>
        /// </signature>
        return IDBKeyRange;
    };
    
    /* -- type: IDBObjectStore -- */
    
    IDBObjectStore.indexNames = DOMStringList;
    IDBObjectStore.keyPath = '';
    IDBObjectStore.name = '';
    IDBObjectStore.transaction = IDBTransaction;
    IDBObjectStore.add = function(value, key) {
        /// <signature>
        /// <param name='value' type='Object'/>
        /// <param name='key' type='Object' optional='true' />
        /// <returns type='IDBRequest'/>
        /// </signature>
        return _createIDBRequest(IDBRequest, this, key);
    };
    IDBObjectStore.clear = function() {
        /// <signature>
        /// <returns type='IDBRequest'/>
        /// </signature>
        return _createIDBRequest(IDBRequest, this, undefined);
    };
    IDBObjectStore.count = function(key) {
        /// <signature>
        /// <param name='key' type='Object' optional='true' />
        /// <returns type='IDBRequest'/>
        /// </signature>
        return _createIDBRequest(IDBRequest, this, 0);
    };
    IDBObjectStore.createIndex = function(name, keyPath, optionalParameters) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <param name='keyPath' type='String'/>
        /// <param name='optionalParameters' type='Object' optional='true' />
        /// <returns type='IDBIndex'/>
        /// </signature>
        return IDBIndex;
    };
    IDBObjectStore.delete = function(key) {
        /// <signature>
        /// <param name='key' type='Object'/>
        /// <returns type='IDBRequest'/>
        /// </signature>
        return _createIDBRequest(IDBRequest, this, undefined);
    };
    IDBObjectStore.deleteIndex = function(indexName) {
        /// <signature>
        /// <param name='indexName' type='String'/>
        /// </signature>
    };
    IDBObjectStore.get = function(key) {
        /// <signature>
        /// <param name='key' type='Object'/>
        /// <returns type='IDBRequest'/>
        /// </signature>
        return _createIDBRequest(IDBRequest, this, {});
    };
    IDBObjectStore.index = function(name) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <returns type='IDBIndex'/>
        /// </signature>
        return IDBIndex;
    };
    IDBObjectStore.openCursor = function(range, direction) {
        /// <signature>
        /// <param name='range' type='Object' optional='true' />
        /// <param name='direction' type='String' optional='true' />
        /// <returns type='IDBRequest'/>
        /// </signature>
        var cursor = Object.create(IDBCursorWithValue); cursor.source = this; return _createIDBRequest(IDBRequest, this, cursor);
    };
    IDBObjectStore.put = function(value, key) {
        /// <signature>
        /// <param name='value' type='Object'/>
        /// <param name='key' type='Object' optional='true' />
        /// <returns type='IDBRequest'/>
        /// </signature>
        return _createIDBRequest(IDBRequest, this, key);
    };
    
    /* -- type: ImageData -- */
    
    ImageData.data = new UInt8ClampedArray();
    ImageData.height = 0;
    ImageData.width = 0;
    
    /* -- type: MSApp -- */
    
    MSApp.CURRENT = "current";
    MSApp.HIGH = "high";
    MSApp.IDLE = "idle";
    MSApp.NORMAL = "normal";
    MSApp.clearTemporaryWebDataAsync = function() {
        /// <signature>
        /// <returns type='MSAppAsyncOperation'/>
        /// </signature>
        return MSAppAsyncOperation;
    };
    MSApp.createBlobFromRandomAccessStream = function(type, seeker) {
        /// <signature>
        /// <param name='type' type='String'/>
        /// <param name='seeker' type='Object'/>
        /// <returns type='Blob'/>
        /// </signature>
        return Blob;
    };
    MSApp.createDataPackage = function(object) {
        /// <signature>
        /// <param name='object' type='Object'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    MSApp.createDataPackageFromSelection = function() {
        /// <signature>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    MSApp.createFileFromStorageFile = function(storageFile) {
        /// <signature>
        /// <param name='storageFile' type='Object'/>
        /// <returns type='File'/>
        /// </signature>
        return File;
    };
    MSApp.createStreamFromInputStream = function(type, inputStream) {
        /// <signature>
        /// <param name='type' type='String'/>
        /// <param name='inputStream' type='Object'/>
        /// <returns type='MSStream'/>
        /// </signature>
        return MSStream;
    };
    MSApp.execAsyncAtPriority = function(asynchronousCallback, priority, args) {
        /// <signature>
        /// <param name='asynchronousCallback' type='MSExecAtPriorityFunctionCallback'/>
        /// <param name='priority' type='String'/>
        /// <param name='args' type='Object'/>
        /// </signature>
    };
    MSApp.execAtPriority = function(synchronousCallback, priority, args) {
        /// <signature>
        /// <param name='synchronousCallback' type='MSExecAtPriorityFunctionCallback'/>
        /// <param name='priority' type='String'/>
        /// <param name='args' type='Object'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    MSApp.getCurrentPriority = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    MSApp.getHtmlPrintDocumentSourceAsync = function(htmlDoc) {
        /// <signature>
        /// <param name='htmlDoc' type='Object'/>
        /// <returns type='Promise'/>
        /// </signature>
        return new Promise(function(resolve, reject) { });
    };
    MSApp.getViewId = function(view) {
        /// <signature>
        /// <param name='view' type='Object'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    MSApp.isTaskScheduledAtPriorityOrHigher = function(priority) {
        /// <signature>
        /// <param name='priority' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    MSApp.pageHandlesAllApplicationActivations = function(enabled) {
        /// <signature>
        /// <param name='enabled' type='Boolean'/>
        /// </signature>
    };
    MSApp.suppressSubdownloadCredentialPrompts = function(suppress) {
        /// <signature>
        /// <param name='suppress' type='Boolean'/>
        /// </signature>
    };
    MSApp.terminateApp = function(exceptionObject) {
        /// <signature>
        /// <param name='exceptionObject' type='Object'/>
        /// </signature>
    };
    
    /* -- type: MSBlobBuilder -- */
    
    MSBlobBuilder.append = function(data, endings) {
        /// <signature>
        /// <param name='data' type='Object'/>
        /// <param name='endings' type='String' optional='true' />
        /// </signature>
    };
    MSBlobBuilder.getBlob = function(contentType) {
        /// <signature>
        /// <param name='contentType' type='String' optional='true' />
        /// <returns type='Blob'/>
        /// </signature>
        return Blob;
    };
    
    /* -- type: MSStream -- */
    
    MSStream.type = '';
    MSStream.msClose = function() {
    };
    MSStream.msDetachStream = function() {
        /// <signature>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    
    /* -- type: MediaQueryList -- */
    
    MediaQueryList.matches = false;
    MediaQueryList.media = '';
    MediaQueryList.addListener = function(listener) {
        /// <signature>
        /// <param name='listener' type='MediaQueryListListener'/>
        /// </signature>
    };
    MediaQueryList.removeListener = function(listener) {
        /// <signature>
        /// <param name='listener' type='MediaQueryListListener'/>
        /// </signature>
    };
    
    /* -- type: MessageChannel -- */
    
    MessageChannel.port1 = MessagePort;
    MessageChannel.port2 = MessagePort;
    
    /* -- type: Position -- */
    
    Position.coords = Coordinates;
    Position.timestamp = 0;
    
    /* -- type: PositionError -- */
    
    PositionError.code = 0;
    PositionError.message = '';
    PositionError.PERMISSION_DENIED = 1;
    PositionError.POSITION_UNAVAILABLE = 2;
    PositionError.TIMEOUT = 3;
    PositionError.toString = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    
    /* -- type: EventListener -- */
    
    EventListener.handleEvent = function(evt) {
        /// <signature>
        /// <param name='evt' type='Event'/>
        /// </signature>
    };
    
    /* -- type: AbstractWorker -- */
    
    _events(AbstractWorker, "onerror");
    
    /* -- type: MSBaseReader -- */
    
    MSBaseReader.readyState = 0;
    MSBaseReader.result = {};
    MSBaseReader.DONE = 2;
    MSBaseReader.EMPTY = 0;
    MSBaseReader.LOADING = 1;
    MSBaseReader.abort = function() {
    };
    _events(MSBaseReader, "onabort", "onerror", "onload", "onloadend", "onloadstart", "onprogress");
    
    /* -- type: NavigatorID -- */
    
    NavigatorID.appName = '';
    NavigatorID.appVersion = '';
    NavigatorID.platform = '';
    NavigatorID.product = '';
    NavigatorID.productSub = '';
    NavigatorID.userAgent = '';
    NavigatorID.vendor = '';
    NavigatorID.vendorSub = '';
    
    /* -- type: NavigatorOnLine -- */
    
    NavigatorOnLine.onLine = false;
    
    /* -- type: WindowBase64 -- */
    
    WindowBase64.atob = function(encodedString) {
        /// <signature>
        /// <param name='encodedString' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    WindowBase64.btoa = function(rawString) {
        /// <signature>
        /// <param name='rawString' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    
    /* -- type: WindowConsole -- */
    
    WindowConsole.console = Console;
    
    /* -- type: XMLHttpRequestEventTarget -- */
    
    _events(XMLHttpRequestEventTarget, "onabort", "onerror", "onload", "onloadend", "onloadstart", "onprogress", "ontimeout");
    
    /* -- type: FileReaderSync -- */
    
    FileReaderSync.readAsArrayBuffer = function(blob) {
        /// <signature>
        /// <param name='blob' type='Blob'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    FileReaderSync.readAsBinaryString = function(blob) {
        /// <signature>
        /// <param name='blob' type='Blob'/>
        /// </signature>
    };
    FileReaderSync.readAsDataURL = function(blob) {
        /// <signature>
        /// <param name='blob' type='Blob'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    FileReaderSync.readAsText = function(blob, encoding) {
        /// <signature>
        /// <param name='blob' type='Blob'/>
        /// <param name='encoding' type='String' optional='true' />
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    
    /* -- type: WorkerLocation -- */
    
    WorkerLocation.hash = '';
    WorkerLocation.host = '';
    WorkerLocation.hostname = '';
    WorkerLocation.href = '';
    WorkerLocation.pathname = '';
    WorkerLocation.port = '';
    WorkerLocation.protocol = '';
    WorkerLocation.search = '';
    WorkerLocation.toString = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    
    /* -- type: DedicatedWorkerGlobalScope -- */
    
    DedicatedWorkerGlobalScope.postMessage = function(data) {
        /// <signature>
        /// <param name='data' type='Object'/>
        /// </signature>
    };
    DedicatedWorkerGlobalScope.onmessage = function () {};
    
    /* -- type: CloseEvent -- */
    
    CloseEvent.code = 0;
    CloseEvent.reason = '';
    CloseEvent.wasClean = false;
    CloseEvent.initCloseEvent = function(typeArg, canBubbleArg, cancelableArg, wasCleanArg, codeArg, reasonArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='wasCleanArg' type='Boolean'/>
        /// <param name='codeArg' type='Number'/>
        /// <param name='reasonArg' type='String'/>
        /// </signature>
    };
    
    /* -- type: ErrorEvent -- */
    
    ErrorEvent.colno = 0;
    ErrorEvent.error = {};
    ErrorEvent.filename = '';
    ErrorEvent.lineno = 0;
    ErrorEvent.message = '';
    ErrorEvent.initErrorEvent = function(typeArg, canBubbleArg, cancelableArg, messageArg, filenameArg, linenoArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='messageArg' type='String'/>
        /// <param name='filenameArg' type='String'/>
        /// <param name='linenoArg' type='Number'/>
        /// </signature>
    };
    
    /* -- type: File -- */
    
    File.lastModifiedDate = {};
    File.name = '';
    
    /* -- type: FileReader -- */
    
    _$implement(FileReader, MSBaseReader);
    FileReader.error = DOMError;
    FileReader.readAsArrayBuffer = function(blob) {
        /// <signature>
        /// <param name='blob' type='Blob'/>
        /// </signature>
    };
    FileReader.readAsBinaryString = function(blob) {
        /// <signature>
        /// <param name='blob' type='Blob'/>
        /// </signature>
    };
    FileReader.readAsDataURL = function(blob) {
        /// <signature>
        /// <param name='blob' type='Blob'/>
        /// </signature>
    };
    FileReader.readAsText = function(blob, encoding) {
        /// <signature>
        /// <param name='blob' type='Blob'/>
        /// <param name='encoding' type='String' optional='true' />
        /// </signature>
    };
    
    /* -- type: IDBCursorWithValue -- */
    
    IDBCursorWithValue.value = {};
    
    /* -- type: IDBDatabase -- */
    
    IDBDatabase.name = '';
    IDBDatabase.objectStoreNames = DOMStringList;
    IDBDatabase.version = '';
    IDBDatabase.close = function() {
    };
    IDBDatabase.createObjectStore = function(name, optionalParameters) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <param name='optionalParameters' type='Object' optional='true' />
        /// <returns type='IDBObjectStore'/>
        /// </signature>
        return IDBObjectStore;
    };
    IDBDatabase.deleteObjectStore = function(name) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// </signature>
    };
    IDBDatabase.transaction = function(storeNames, mode) {
        /// <signature>
        /// <param name='storeNames' type='Object'/>
        /// <param name='mode' type='String' optional='true' />
        /// <returns type='IDBTransaction'/>
        /// </signature>
        return IDBTransaction;
    };
    _events(IDBDatabase, "onabort", "onerror");
    
    /* -- type: IDBRequest -- */
    
    IDBRequest.error = DOMError;
    IDBRequest.readyState = '';
    IDBRequest.result = {};
    IDBRequest.source = {};
    IDBRequest.transaction = IDBTransaction;
    _events(IDBRequest, "onerror", "onsuccess");
    
    /* -- type: IDBTransaction -- */
    
    IDBTransaction.db = IDBDatabase;
    IDBTransaction.error = DOMError;
    IDBTransaction.mode = '';
    IDBTransaction.READ_ONLY = "readonly";
    IDBTransaction.READ_WRITE = "readwrite";
    IDBTransaction.VERSION_CHANGE = "versionchange";
    IDBTransaction.abort = function() {
    };
    IDBTransaction.objectStore = function(name) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <returns type='IDBObjectStore'/>
        /// </signature>
        return IDBObjectStore;
    };
    _events(IDBTransaction, "onabort", "oncomplete", "onerror");
    
    /* -- type: IDBVersionChangeEvent -- */
    
    IDBVersionChangeEvent.newVersion = 0;
    IDBVersionChangeEvent.oldVersion = 0;
    
    /* -- type: MSAppAsyncOperation -- */
    
    MSAppAsyncOperation.error = DOMError;
    MSAppAsyncOperation.readyState = 0;
    MSAppAsyncOperation.result = {};
    MSAppAsyncOperation.COMPLETED = 1;
    MSAppAsyncOperation.ERROR = 2;
    MSAppAsyncOperation.STARTED = 0;
    MSAppAsyncOperation.start = function() {
    };
    _events(MSAppAsyncOperation, "oncomplete", "onerror");
    
    /* -- type: MSStreamReader -- */
    
    _$implement(MSStreamReader, MSBaseReader);
    MSStreamReader.error = DOMError;
    MSStreamReader.readAsArrayBuffer = function(stream, size) {
        /// <signature>
        /// <param name='stream' type='MSStream'/>
        /// <param name='size' type='Number' optional='true' />
        /// </signature>
    };
    MSStreamReader.readAsBinaryString = function(stream, size) {
        /// <signature>
        /// <param name='stream' type='MSStream'/>
        /// <param name='size' type='Number' optional='true' />
        /// </signature>
    };
    MSStreamReader.readAsBlob = function(stream, size) {
        /// <signature>
        /// <param name='stream' type='MSStream'/>
        /// <param name='size' type='Number' optional='true' />
        /// </signature>
    };
    MSStreamReader.readAsDataURL = function(stream, size) {
        /// <signature>
        /// <param name='stream' type='MSStream'/>
        /// <param name='size' type='Number' optional='true' />
        /// </signature>
    };
    MSStreamReader.readAsText = function(stream, encoding, size) {
        /// <signature>
        /// <param name='stream' type='MSStream'/>
        /// <param name='encoding' type='String' optional='true' />
        /// <param name='size' type='Number' optional='true' />
        /// </signature>
    };
    
    /* -- type: MessageEvent -- */
    
    MessageEvent.data = {};
    MessageEvent.origin = '';
    MessageEvent.ports = {};
    MessageEvent.source = {};
    MessageEvent.initMessageEvent = function(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='dataArg' type='Object'/>
        /// <param name='originArg' type='String'/>
        /// <param name='lastEventIdArg' type='String'/>
        /// <param name='sourceArg' type='Object'/>
        /// </signature>
    };
    
    /* -- type: MessagePort -- */
    
    MessagePort.close = function() {
    };
    MessagePort.postMessage = function(message, ports) {
        /// <signature>
        /// <param name='message' type='Object' optional='true' />
        /// <param name='ports' type='Object' optional='true' />
        /// </signature>
    };
    MessagePort.start = function() {
    };
    _events(MessagePort, "onmessage");
    
    /* -- type: ProgressEvent -- */
    
    ProgressEvent.lengthComputable = false;
    ProgressEvent.loaded = 0;
    ProgressEvent.total = 0;
    ProgressEvent.initProgressEvent = function(typeArg, canBubbleArg, cancelableArg, lengthComputableArg, loadedArg, totalArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='lengthComputableArg' type='Boolean'/>
        /// <param name='loadedArg' type='Number'/>
        /// <param name='totalArg' type='Number'/>
        /// </signature>
    };
    
    /* -- type: WebSocket -- */
    
    WebSocketCtor.CLOSED = 3;
    WebSocketCtor.CLOSING = 2;
    WebSocketCtor.CONNECTING = 0;
    WebSocketCtor.OPEN = 1;
    WebSocket.binaryType = '';
    WebSocket.bufferedAmount = 0;
    WebSocket.extensions = '';
    WebSocket.protocol = '';
    WebSocket.readyState = 0;
    WebSocket.url = '';
    WebSocket.CLOSED = 3;
    WebSocket.CLOSING = 2;
    WebSocket.CONNECTING = 0;
    WebSocket.OPEN = 1;
    WebSocket.close = function(code, reason) {
        /// <signature>
        /// <param name='code' type='Number' optional='true' />
        /// <param name='reason' type='String' optional='true' />
        /// </signature>
    };
    WebSocket.send = function(data) {
        /// <signature>
        /// <param name='data' type='Object'/>
        /// </signature>
    };
    _events(WebSocket, "onclose", "onerror", "onmessage", "onopen");
    
    /* -- type: Worker -- */
    
    _$implement(Worker, AbstractWorker);
    Worker.postMessage = function(message, ports) {
        /// <signature>
        /// <param name='message' type='Object'/>
        /// <param name='ports' type='Object' optional='true' />
        /// </signature>
    };
    Worker.terminate = function() {
    };
    _events(Worker, "onmessage", "onerror");
    
    /* -- type: XMLHttpRequest -- */
    
    _$implement(XMLHttpRequest, XMLHttpRequestEventTarget);
    XMLHttpRequestCtor.DONE = 4;
    XMLHttpRequestCtor.HEADERS_RECEIVED = 2;
    XMLHttpRequestCtor.LOADING = 3;
    XMLHttpRequestCtor.OPENED = 1;
    XMLHttpRequestCtor.UNSENT = 0;
    XMLHttpRequest.msCaching = '';
    XMLHttpRequest.readyState = 0;
    XMLHttpRequest.response = {};
    XMLHttpRequest.responseBody = {};
    XMLHttpRequest.responseText = '';
    XMLHttpRequest.responseType = '';
    XMLHttpRequest.responseXML = {};
    XMLHttpRequest.status = 0;
    XMLHttpRequest.statusText = '';
    XMLHttpRequest.timeout = 0;
    XMLHttpRequest.upload = XMLHttpRequestUpload;
    XMLHttpRequest.withCredentials = false;
    XMLHttpRequest.DONE = 4;
    XMLHttpRequest.HEADERS_RECEIVED = 2;
    XMLHttpRequest.LOADING = 3;
    XMLHttpRequest.OPENED = 1;
    XMLHttpRequest.UNSENT = 0;
    XMLHttpRequest.abort = function() {
    };
    XMLHttpRequest.create = function() {
        /// <signature>
        /// <returns type='XMLHttpRequest'/>
        /// </signature>
        return XMLHttpRequest;
    };
    XMLHttpRequest.getAllResponseHeaders = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    XMLHttpRequest.getResponseHeader = function(header) {
        /// <signature>
        /// <param name='header' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    XMLHttpRequest.msCachingEnabled = function() {
        /// <signature>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    XMLHttpRequest.open = function(method, url, async, user, password) {
        /// <signature>
        /// <param name='method' type='String'/>
        /// <param name='url' type='String'/>
        /// <param name='async' type='Boolean' optional='true' />
        /// <param name='user' type='String' optional='true' />
        /// <param name='password' type='String' optional='true' />
        /// </signature>
    };
    XMLHttpRequest.overrideMimeType = function(mime) {
        /// <signature>
        /// <param name='mime' type='String'/>
        /// </signature>
    };
    XMLHttpRequest.send = function(data) {
        /// <signature>
        /// <param name='data' type='Object' optional='true' />
        /// </signature>
        /// <signature>
        /// <param name='data' type='String' optional='true' />
        /// </signature>
        this.status = 200; this.readyState = XMLHttpRequest.DONE; this.status = 4; this.statusText = "OK";
    };
    XMLHttpRequest.setRequestHeader = function(header, value) {
        /// <signature>
        /// <param name='header' type='String'/>
        /// <param name='value' type='String'/>
        /// </signature>
    };
    _events(XMLHttpRequest, "onreadystatechange", "onabort", "onerror", "onload", "onloadend", "onloadstart", "onprogress", "ontimeout");
    
    /* -- type: XMLHttpRequestUpload -- */
    
    _$implement(XMLHttpRequestUpload, XMLHttpRequestEventTarget);
    
    /* -- type: WorkerNavigator -- */
    
    _$implement(WorkerNavigator, NavigatorID);
    _$implement(WorkerNavigator, NavigatorOnLine);
    
    /* -- type: WorkerUtils -- */
    
    _$implement(WorkerUtils, WindowBase64);
    WorkerUtils.indexedDB = IDBFactory;
    WorkerUtils.msIndexedDB = IDBFactory;
    WorkerUtils.navigator = WorkerNavigator;
    WorkerUtils.clearImmediate = function(handle) {
        /// <signature>
        /// <param name='handle' type='Number'/>
        /// </signature>
        _$clearTimeout(handle);
    };
    WorkerUtils.clearInterval = function(handle) {
        /// <signature>
        /// <param name='handle' type='Number'/>
        /// </signature>
        _$clearTimeout(handle);
    };
    WorkerUtils.clearTimeout = function(handle) {
        /// <signature>
        /// <param name='handle' type='Number'/>
        /// </signature>
        _$clearTimeout(handle);
    };
    WorkerUtils.importScripts = function(urls) {
        /// <signature>
        /// <param name='urls' type='String'/>
        /// </signature>
        for (var i = 0; i < arguments.length; i++) _$asyncRequests.add({ src: arguments[i] });
    };
    WorkerUtils.setImmediate = function(handler, args) {
        /// <signature>
        /// <param name='handler' type='Object'/>
        /// <param name='args' type='Object' optional='true' />
        /// <returns type='Number'/>
        /// </signature>
        return _$setTimeout(handler, 0, args);
    };
    WorkerUtils.setInterval = function(handler, timeout, args) {
        /// <signature>
        /// <param name='handler' type='Object'/>
        /// <param name='timeout' type='Object' optional='true' />
        /// <param name='args' type='Object'/>
        /// <returns type='Number'/>
        /// </signature>
        return _$setTimeout(handler, timeout, args);
    };
    WorkerUtils.setTimeout = function(handler, timeout, args) {
        /// <signature>
        /// <param name='handler' type='Object'/>
        /// <param name='timeout' type='Object' optional='true' />
        /// <param name='args' type='Object'/>
        /// <returns type='Number'/>
        /// </signature>
        return _$setTimeout(handler, timeout, args);
    };
    
    /* -- type: IDBOpenDBRequest -- */
    
    _events(IDBOpenDBRequest, "onblocked", "onupgradeneeded", "onerror", "onsuccess");
    
    /* -- type: WorkerGlobalScope -- */
    
    _$implement(WorkerGlobalScope, WorkerUtils);
    _$implement(WorkerGlobalScope, DedicatedWorkerGlobalScope);
    _$implement(WorkerGlobalScope, WindowConsole);
    _$implement(WorkerGlobalScope, EventTarget);
    WorkerGlobalScope.location = WorkerLocation;
    WorkerGlobalScope.self = _$getTrackingNull(Object.create(WorkerGlobalScope));
    WorkerGlobalScope.close = function() {
    };
    WorkerGlobalScope.msWriteProfilerMark = function(profilerMarkName) {
        /// <signature>
        /// <param name='profilerMarkName' type='String'/>
        /// </signature>
    };
    WorkerGlobalScope.toString = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    WorkerGlobalScope.onerror = function () {};
    WorkerGlobalScope.onmessage = function () {};

    function _publicInterface(name, interface, interfacePrototype) {
        _$nonRemovable(interface);
        WorkerGlobalScope[name] = interface;
        WorkerGlobalScope[name].prototype = interfacePrototype;
    }

    function _publicObject(name, obj) {
        _$nonRemovable(obj);
        WorkerGlobalScope[name] = obj;
    }
    
    _publicInterface('IDBOpenDBRequest', {}, IDBOpenDBRequest);
    _publicInterface('WorkerGlobalScope', {}, WorkerGlobalScope);
    _publicInterface('XMLHttpRequestUpload', {}, XMLHttpRequestUpload);
    _publicInterface('ProgressEvent', {}, ProgressEvent);
    _publicInterface('MessagePort', {}, MessagePort);
    _publicInterface('MessageEvent', {}, MessageEvent);
    _publicInterface('MSAppAsyncOperation', {'COMPLETED' : 1,'ERROR' : 2,'STARTED' : 0}, MSAppAsyncOperation);
    _publicInterface('IDBVersionChangeEvent', {}, IDBVersionChangeEvent);
    _publicInterface('IDBTransaction', {'READ_ONLY' : readonly,'READ_WRITE' : readwrite,'VERSION_CHANGE' : versionchange}, IDBTransaction);
    _publicInterface('IDBRequest', {}, IDBRequest);
    _publicInterface('IDBDatabase', {}, IDBDatabase);
    _publicInterface('IDBCursorWithValue', {}, IDBCursorWithValue);
    _publicInterface('File', {}, File);
    _publicInterface('ErrorEvent', {}, ErrorEvent);
    _publicInterface('CloseEvent', {}, CloseEvent);
    _publicInterface('WorkerNavigator', {}, WorkerNavigator);
    _publicInterface('WorkerLocation', {}, WorkerLocation);
    _publicInterface('PositionError', {'PERMISSION_DENIED' : 1,'POSITION_UNAVAILABLE' : 2,'TIMEOUT' : 3}, PositionError);
    _publicInterface('Position', {}, Position);
    _publicInterface('MediaQueryList', {}, MediaQueryList);
    _publicInterface('MSStream', {}, MSStream);
    _publicObject('MSApp', MSApp);
    _publicInterface('ImageData', {}, ImageData);
    _publicInterface('IDBObjectStore', {}, IDBObjectStore);
    _publicInterface('IDBKeyRange', {'bound' : IDBKeyRange.bound,'lowerBound' : IDBKeyRange.lowerBound,'only' : IDBKeyRange.only,'upperBound' : IDBKeyRange.upperBound}, IDBKeyRange);
    _publicInterface('IDBIndex', {}, IDBIndex);
    _publicInterface('IDBFactory', {}, IDBFactory);
    _publicInterface('IDBCursor', {'NEXT' : next,'NEXT_NO_DUPLICATE' : nextunique,'PREV' : prev,'PREV_NO_DUPLICATE' : prevunique}, IDBCursor);
    _publicInterface('FileList', {}, FileList);
    _publicInterface('EventTarget', {}, EventTarget);
    _publicInterface('DOMStringList', {}, DOMStringList);
    _publicInterface('DOMException', {'ABORT_ERR' : 20,'DATA_CLONE_ERR' : 25,'DOMSTRING_SIZE_ERR' : 2,'HIERARCHY_REQUEST_ERR' : 3,'INDEX_SIZE_ERR' : 1,'INUSE_ATTRIBUTE_ERR' : 10,'INVALID_ACCESS_ERR' : 15,'INVALID_CHARACTER_ERR' : 5,'INVALID_MODIFICATION_ERR' : 13,'INVALID_NODE_TYPE_ERR' : 24,'INVALID_STATE_ERR' : 11,'NAMESPACE_ERR' : 14,'NETWORK_ERR' : 19,'NOT_FOUND_ERR' : 8,'NOT_SUPPORTED_ERR' : 9,'NO_DATA_ALLOWED_ERR' : 6,'NO_MODIFICATION_ALLOWED_ERR' : 7,'PARSE_ERR' : 81,'QUOTA_EXCEEDED_ERR' : 22,'SECURITY_ERR' : 18,'SERIALIZE_ERR' : 82,'SYNTAX_ERR' : 12,'TIMEOUT_ERR' : 23,'TYPE_MISMATCH_ERR' : 17,'URL_MISMATCH_ERR' : 21,'VALIDATION_ERR' : 16,'WRONG_DOCUMENT_ERR' : 4}, DOMException);
    _publicInterface('DOMError', {}, DOMError);
    _publicInterface('Coordinates', {}, Coordinates);
    _publicInterface('Console', {}, Console);
    _publicInterface('AudioBuffer', {}, AudioBuffer);
    _publicInterface('XMLHttpRequest', XMLHttpRequestCtor , XMLHttpRequest);
    _publicInterface('Worker', WorkerCtor , Worker);
    _publicInterface('WebSocket', WebSocketCtor , WebSocket);
    _publicInterface('MSStreamReader', MSStreamReaderCtor , MSStreamReader);
    _publicInterface('FileReader', FileReaderCtor , FileReader);
    _publicInterface('FileReaderSync', FileReaderSyncCtor , FileReaderSync);
    _publicInterface('MessageChannel', MessageChannelCtor , MessageChannel);
    _publicInterface('MSBlobBuilder', MSBlobBuilderCtor , MSBlobBuilder);
    _publicInterface('Event', EventCtor , Event);
    _publicInterface('Blob', BlobCtor , Blob);

    this.XMLHttpRequest.create = this.XMLHttpRequest;
})();

function _$getActiveXObject(className, location) {
    if ((/XMLHTTP/i).test(className))
        return new window.XMLHttpRequest();
}
