var document = { };
(function () {
    var _eventManager = _$createEventManager(
        function getEventObject(type, attach, obj, ignoreCase) {
            function _eventTypeToObject(type, attach) {
                if (attach) return Event;
                
                switch (type) {
                    case 'DOMAttrModified': return MutationEvent;
                    case 'DOMCharacterDataModified': return MutationEvent;
                    case 'DOMContentLoaded': return Event;
                    case 'DOMNodeInserted': return MutationEvent;
                    case 'DOMNodeRemoved': return MutationEvent;
                    case 'DOMSubtreeModified': return MutationEvent;
                    case 'MSCandidateWindowHide': return Event;
                    case 'MSCandidateWindowShow': return Event;
                    case 'MSCandidateWindowUpdate': return Event;
                    case 'MSContentZoom': return UIEvent;
                    case 'MSGestureChange': return MSGestureEvent;
                    case 'MSGestureDoubleTap': return MSGestureEvent;
                    case 'MSGestureEnd': return MSGestureEvent;
                    case 'MSGestureHold': return MSGestureEvent;
                    case 'MSGestureStart': return MSGestureEvent;
                    case 'MSGestureTap': return MSGestureEvent;
                    case 'MSGotPointerCapture': return MSPointerEvent;
                    case 'MSHoldVisual': return MouseEvent;
                    case 'MSInertiaStart': return MSGestureEvent;
                    case 'MSLostPointerCapture': return MSPointerEvent;
                    case 'MSManipulationStateChanged': return MSManipulationEvent;
                    case 'MSOrientationChange': return Event;
                    case 'MSPointerCancel': return MSPointerEvent;
                    case 'MSPointerDown': return MSPointerEvent;
                    case 'MSPointerEnter': return MSPointerEvent;
                    case 'MSPointerHover': return MSPointerEvent;
                    case 'MSPointerLeave': return MSPointerEvent;
                    case 'MSPointerMove': return MSPointerEvent;
                    case 'MSPointerOut': return MSPointerEvent;
                    case 'MSPointerOver': return MSPointerEvent;
                    case 'MSPointerUp': return MSPointerEvent;
                    case 'MSRegionUpdate': return Event;
                    case 'MSVideoFormatChanged': return Event;
                    case 'MSVideoFrameStepCompleted': return Event;
                    case 'MSVideoOptimalLayoutChanged': return Event;
                    case 'MSWebViewContainsFullScreenElementChanged': return Event;
                    case 'MSWebViewContentLoading': return NavigationEvent;
                    case 'MSWebViewDOMContentLoaded': return NavigationEvent;
                    case 'MSWebViewFrameContentLoading': return NavigationEvent;
                    case 'MSWebViewFrameDOMContentLoaded': return NavigationEvent;
                    case 'MSWebViewFrameNavigationCompleted': return NavigationCompletedEvent;
                    case 'MSWebViewFrameNavigationStarting': return NavigationEvent;
                    case 'MSWebViewLongRunningScriptDetected': return LongRunningScriptDetectedEvent;
                    case 'MSWebViewNavigationCompleted': return NavigationCompletedEvent;
                    case 'MSWebViewNavigationStarting': return NavigationEvent;
                    case 'MSWebViewNewWindowRequested': return NavigationEventWithReferrer;
                    case 'MSWebViewPermissionRequested': return PermissionRequestedEvent;
                    case 'MSWebViewScriptNotify': return ScriptNotifyEvent;
                    case 'MSWebViewUnsafeContentWarningDisplaying': return Event;
                    case 'MSWebViewUnsupportedUriSchemeIdentified': return NavigationEvent;
                    case 'MSWebViewUnviewableContentIdentified': return UnviewableContentIdentifiedEvent;
                    case 'SVGAbort': return Event;
                    case 'SVGError': return Event;
                    case 'SVGLoad': return Event;
                    case 'SVGResize': return Event;
                    case 'SVGScroll': return Event;
                    case 'SVGUnload': return Event;
                    case 'SVGZoom': return SVGZoomEvent;
                    case 'abort': return UIEvent;
                    case 'activate': return UIEvent;
                    case 'addsourcebuffer': return Event;
                    case 'addtrack': return TrackEvent;
                    case 'afterprint': return Event;
                    case 'animationend': return AnimationEvent;
                    case 'animationiteration': return AnimationEvent;
                    case 'animationstart': return AnimationEvent;
                    case 'ariarequest': return AriaRequestEvent;
                    case 'audioprocess': return AudioProcessingEvent;
                    case 'beforeactivate': return UIEvent;
                    case 'beforecopy': return DragEvent;
                    case 'beforecut': return DragEvent;
                    case 'beforedeactivate': return UIEvent;
                    case 'beforepaste': return DragEvent;
                    case 'beforeprint': return Event;
                    case 'beforeunload': return BeforeUnloadEvent;
                    case 'blocked': return Event;
                    case 'blur': return FocusEvent;
                    case 'bounce': return Event;
                    case 'cached': return Event;
                    case 'canplay': return Event;
                    case 'canplaythrough': return Event;
                    case 'change': return Event;
                    case 'checking': return Event;
                    case 'click': return MouseEvent;
                    case 'close': return CloseEvent;
                    case 'command': return CommandEvent;
                    case 'compassneedscalibration': return Event;
                    case 'complete': return Event;
                    case 'compositionend': return CompositionEvent;
                    case 'compositionstart': return CompositionEvent;
                    case 'compositionupdate': return CompositionEvent;
                    case 'contextmenu': return PointerEvent;
                    case 'copy': return DragEvent;
                    case 'cuechange': return Event;
                    case 'cut': return DragEvent;
                    case 'dblclick': return MouseEvent;
                    case 'deactivate': return UIEvent;
                    case 'devicemotion': return DeviceMotionEvent;
                    case 'deviceorientation': return DeviceOrientationEvent;
                    case 'downloading': return Event;
                    case 'drag': return DragEvent;
                    case 'dragend': return DragEvent;
                    case 'dragenter': return DragEvent;
                    case 'dragleave': return DragEvent;
                    case 'dragover': return DragEvent;
                    case 'dragstart': return DragEvent;
                    case 'drop': return DragEvent;
                    case 'durationchange': return Event;
                    case 'emptied': return Event;
                    case 'end': return Event;
                    case 'ended': return Event;
                    case 'enter': return Event;
                    case 'error': return ErrorEvent;
                    case 'exit': return Event;
                    case 'finish': return Event;
                    case 'focus': return FocusEvent;
                    case 'focusin': return FocusEvent;
                    case 'focusout': return FocusEvent;
                    case 'fullscreenchange': return Event;
                    case 'fullscreenerror': return Event;
                    case 'gamepadconnected': return GamepadEvent;
                    case 'gamepaddisconnected': return GamepadEvent;
                    case 'gotpointercapture': return PointerEvent;
                    case 'hashchange': return HashChangeEvent;
                    case 'input': return Event;
                    case 'invalid': return Event;
                    case 'keydown': return KeyboardEvent;
                    case 'keypress': return KeyboardEvent;
                    case 'keyup': return KeyboardEvent;
                    case 'load': return Event;
                    case 'loadeddata': return Event;
                    case 'loadedmetadata': return Event;
                    case 'loadend': return ProgressEvent;
                    case 'loadstart': return Event;
                    case 'lostpointercapture': return PointerEvent;
                    case 'message': return MessageEvent;
                    case 'mousedown': return MouseEvent;
                    case 'mouseenter': return MouseEvent;
                    case 'mouseleave': return MouseEvent;
                    case 'mousemove': return MouseEvent;
                    case 'mouseout': return MouseEvent;
                    case 'mouseover': return MouseEvent;
                    case 'mouseup': return MouseEvent;
                    case 'mousewheel': return MouseWheelEvent;
                    case 'msbeforeeditfocus': return UIEvent;
                    case 'mscontrolresizeend': return UIEvent;
                    case 'mscontrolresizestart': return UIEvent;
                    case 'mscontrolselect': return UIEvent;
                    case 'mselementresize': return Event;
                    case 'mskeyadded': return Event;
                    case 'mskeyerror': return Event;
                    case 'mskeymessage': return MSMediaKeyMessageEvent;
                    case 'msneedkey': return MSMediaKeyNeededEvent;
                    case 'mssitemodejumplistitemremoved': return MSSiteModeEvent;
                    case 'mssitepinned': return Event;
                    case 'msthumbnailclick': return MSSiteModeEvent;
                    case 'noupdate': return Event;
                    case 'obsolete': return Event;
                    case 'offline': return Event;
                    case 'online': return Event;
                    case 'open': return Event;
                    case 'orientationchange': return Event;
                    case 'pagehide': return PageTransitionEvent;
                    case 'pageshow': return PageTransitionEvent;
                    case 'paste': return DragEvent;
                    case 'pause': return Event;
                    case 'play': return Event;
                    case 'playing': return Event;
                    case 'pointercancel': return PointerEvent;
                    case 'pointerdown': return PointerEvent;
                    case 'pointerenter': return PointerEvent;
                    case 'pointerleave': return PointerEvent;
                    case 'pointermove': return PointerEvent;
                    case 'pointerout': return PointerEvent;
                    case 'pointerover': return PointerEvent;
                    case 'pointerup': return PointerEvent;
                    case 'popstate': return PopStateEvent;
                    case 'progress': return ProgressEvent;
                    case 'ratechange': return Event;
                    case 'readystatechange': return ProgressEvent;
                    case 'removesourcebuffer': return Event;
                    case 'removetrack': return TrackEvent;
                    case 'reset': return Event;
                    case 'resize': return UIEvent;
                    case 'scroll': return UIEvent;
                    case 'seeked': return Event;
                    case 'seeking': return Event;
                    case 'select': return UIEvent;
                    case 'selectstart': return Event;
                    case 'sourceclose': return Event;
                    case 'sourceended': return Event;
                    case 'sourceopen': return Event;
                    case 'stalled': return Event;
                    case 'start': return Event;
                    case 'stop': return Event;
                    case 'storage': return StorageEvent;
                    case 'submit': return Event;
                    case 'success': return Event;
                    case 'suspend': return Event;
                    case 'textInput': return TextEvent;
                    case 'timeout': return ProgressEvent;
                    case 'timeupdate': return Event;
                    case 'touchcancel': return TouchEvent;
                    case 'touchend': return TouchEvent;
                    case 'touchmove': return TouchEvent;
                    case 'touchstart': return TouchEvent;
                    case 'transitionend': return TransitionEvent;
                    case 'transitionstart': return TransitionEvent;
                    case 'unload': return Event;
                    case 'update': return Event;
                    case 'updateend': return Event;
                    case 'updateready': return Event;
                    case 'updatestart': return Event;
                    case 'upgradeneeded': return IDBVersionChangeEvent;
                    case 'visibilitychanged': return Event;
                    case 'volumechange': return Event;
                    case 'waiting': return Event;
                    case 'webglcontextcreationerror': return WebGLContextEvent;
                    case 'webglcontextlost': return WebGLContextEvent;
                    case 'webglcontextrestored': return WebGLContextEvent;
                    case 'wheel': return WheelEvent;
                    case 'candidatewindowhide': return Event;
                    case 'candidatewindowshow': return Event;
                    case 'candidatewindowupdate': return Event;
                    case 'pointerlockchange': return Event;
                    case 'pointerlockerror': return Event;
                    case 'webkitfullscreenchange': return Event;
                    case 'webkitfullscreenerror': return Event;
                    case 'zoom': return SVGZoomEvent;
                }
                return Event;
            }
            function _eventTypeToObjectIgnoreCase(type, attach) {
                if (attach) return Event;
                type = type.toLowerCase();
                
                switch (type) {
                    case 'domattrmodified': return MutationEvent;
                    case 'domcharacterdatamodified': return MutationEvent;
                    case 'domcontentloaded': return Event;
                    case 'domnodeinserted': return MutationEvent;
                    case 'domnoderemoved': return MutationEvent;
                    case 'domsubtreemodified': return MutationEvent;
                    case 'mscandidatewindowhide': return Event;
                    case 'mscandidatewindowshow': return Event;
                    case 'mscandidatewindowupdate': return Event;
                    case 'mscontentzoom': return UIEvent;
                    case 'msgesturechange': return MSGestureEvent;
                    case 'msgesturedoubletap': return MSGestureEvent;
                    case 'msgestureend': return MSGestureEvent;
                    case 'msgesturehold': return MSGestureEvent;
                    case 'msgesturestart': return MSGestureEvent;
                    case 'msgesturetap': return MSGestureEvent;
                    case 'msgotpointercapture': return MSPointerEvent;
                    case 'msholdvisual': return MouseEvent;
                    case 'msinertiastart': return MSGestureEvent;
                    case 'mslostpointercapture': return MSPointerEvent;
                    case 'msmanipulationstatechanged': return MSManipulationEvent;
                    case 'msorientationchange': return Event;
                    case 'mspointercancel': return MSPointerEvent;
                    case 'mspointerdown': return MSPointerEvent;
                    case 'mspointerenter': return MSPointerEvent;
                    case 'mspointerhover': return MSPointerEvent;
                    case 'mspointerleave': return MSPointerEvent;
                    case 'mspointermove': return MSPointerEvent;
                    case 'mspointerout': return MSPointerEvent;
                    case 'mspointerover': return MSPointerEvent;
                    case 'mspointerup': return MSPointerEvent;
                    case 'msregionupdate': return Event;
                    case 'msvideoformatchanged': return Event;
                    case 'msvideoframestepcompleted': return Event;
                    case 'msvideooptimallayoutchanged': return Event;
                    case 'mswebviewcontainsfullscreenelementchanged': return Event;
                    case 'mswebviewcontentloading': return NavigationEvent;
                    case 'mswebviewdomcontentloaded': return NavigationEvent;
                    case 'mswebviewframecontentloading': return NavigationEvent;
                    case 'mswebviewframedomcontentloaded': return NavigationEvent;
                    case 'mswebviewframenavigationcompleted': return NavigationCompletedEvent;
                    case 'mswebviewframenavigationstarting': return NavigationEvent;
                    case 'mswebviewlongrunningscriptdetected': return LongRunningScriptDetectedEvent;
                    case 'mswebviewnavigationcompleted': return NavigationCompletedEvent;
                    case 'mswebviewnavigationstarting': return NavigationEvent;
                    case 'mswebviewnewwindowrequested': return NavigationEventWithReferrer;
                    case 'mswebviewpermissionrequested': return PermissionRequestedEvent;
                    case 'mswebviewscriptnotify': return ScriptNotifyEvent;
                    case 'mswebviewunsafecontentwarningdisplaying': return Event;
                    case 'mswebviewunsupportedurischemeidentified': return NavigationEvent;
                    case 'mswebviewunviewablecontentidentified': return UnviewableContentIdentifiedEvent;
                    case 'svgabort': return Event;
                    case 'svgerror': return Event;
                    case 'svgload': return Event;
                    case 'svgresize': return Event;
                    case 'svgscroll': return Event;
                    case 'svgunload': return Event;
                    case 'svgzoom': return SVGZoomEvent;
                    case 'abort': return UIEvent;
                    case 'activate': return UIEvent;
                    case 'addsourcebuffer': return Event;
                    case 'addtrack': return TrackEvent;
                    case 'afterprint': return Event;
                    case 'animationend': return AnimationEvent;
                    case 'animationiteration': return AnimationEvent;
                    case 'animationstart': return AnimationEvent;
                    case 'ariarequest': return AriaRequestEvent;
                    case 'audioprocess': return AudioProcessingEvent;
                    case 'beforeactivate': return UIEvent;
                    case 'beforecopy': return DragEvent;
                    case 'beforecut': return DragEvent;
                    case 'beforedeactivate': return UIEvent;
                    case 'beforepaste': return DragEvent;
                    case 'beforeprint': return Event;
                    case 'beforeunload': return BeforeUnloadEvent;
                    case 'blocked': return Event;
                    case 'blur': return FocusEvent;
                    case 'bounce': return Event;
                    case 'cached': return Event;
                    case 'canplay': return Event;
                    case 'canplaythrough': return Event;
                    case 'change': return Event;
                    case 'checking': return Event;
                    case 'click': return MouseEvent;
                    case 'close': return CloseEvent;
                    case 'command': return CommandEvent;
                    case 'compassneedscalibration': return Event;
                    case 'complete': return Event;
                    case 'compositionend': return CompositionEvent;
                    case 'compositionstart': return CompositionEvent;
                    case 'compositionupdate': return CompositionEvent;
                    case 'contextmenu': return PointerEvent;
                    case 'copy': return DragEvent;
                    case 'cuechange': return Event;
                    case 'cut': return DragEvent;
                    case 'dblclick': return MouseEvent;
                    case 'deactivate': return UIEvent;
                    case 'devicemotion': return DeviceMotionEvent;
                    case 'deviceorientation': return DeviceOrientationEvent;
                    case 'downloading': return Event;
                    case 'drag': return DragEvent;
                    case 'dragend': return DragEvent;
                    case 'dragenter': return DragEvent;
                    case 'dragleave': return DragEvent;
                    case 'dragover': return DragEvent;
                    case 'dragstart': return DragEvent;
                    case 'drop': return DragEvent;
                    case 'durationchange': return Event;
                    case 'emptied': return Event;
                    case 'end': return Event;
                    case 'ended': return Event;
                    case 'enter': return Event;
                    case 'error': return ErrorEvent;
                    case 'exit': return Event;
                    case 'finish': return Event;
                    case 'focus': return FocusEvent;
                    case 'focusin': return FocusEvent;
                    case 'focusout': return FocusEvent;
                    case 'fullscreenchange': return Event;
                    case 'fullscreenerror': return Event;
                    case 'gamepadconnected': return GamepadEvent;
                    case 'gamepaddisconnected': return GamepadEvent;
                    case 'gotpointercapture': return PointerEvent;
                    case 'hashchange': return HashChangeEvent;
                    case 'input': return Event;
                    case 'invalid': return Event;
                    case 'keydown': return KeyboardEvent;
                    case 'keypress': return KeyboardEvent;
                    case 'keyup': return KeyboardEvent;
                    case 'load': return Event;
                    case 'loadeddata': return Event;
                    case 'loadedmetadata': return Event;
                    case 'loadend': return ProgressEvent;
                    case 'loadstart': return Event;
                    case 'lostpointercapture': return PointerEvent;
                    case 'message': return MessageEvent;
                    case 'mousedown': return MouseEvent;
                    case 'mouseenter': return MouseEvent;
                    case 'mouseleave': return MouseEvent;
                    case 'mousemove': return MouseEvent;
                    case 'mouseout': return MouseEvent;
                    case 'mouseover': return MouseEvent;
                    case 'mouseup': return MouseEvent;
                    case 'mousewheel': return MouseWheelEvent;
                    case 'msbeforeeditfocus': return UIEvent;
                    case 'mscontrolresizeend': return UIEvent;
                    case 'mscontrolresizestart': return UIEvent;
                    case 'mscontrolselect': return UIEvent;
                    case 'mselementresize': return Event;
                    case 'mskeyadded': return Event;
                    case 'mskeyerror': return Event;
                    case 'mskeymessage': return MSMediaKeyMessageEvent;
                    case 'msneedkey': return MSMediaKeyNeededEvent;
                    case 'mssitemodejumplistitemremoved': return MSSiteModeEvent;
                    case 'mssitepinned': return Event;
                    case 'msthumbnailclick': return MSSiteModeEvent;
                    case 'noupdate': return Event;
                    case 'obsolete': return Event;
                    case 'offline': return Event;
                    case 'online': return Event;
                    case 'open': return Event;
                    case 'orientationchange': return Event;
                    case 'pagehide': return PageTransitionEvent;
                    case 'pageshow': return PageTransitionEvent;
                    case 'paste': return DragEvent;
                    case 'pause': return Event;
                    case 'play': return Event;
                    case 'playing': return Event;
                    case 'pointercancel': return PointerEvent;
                    case 'pointerdown': return PointerEvent;
                    case 'pointerenter': return PointerEvent;
                    case 'pointerleave': return PointerEvent;
                    case 'pointermove': return PointerEvent;
                    case 'pointerout': return PointerEvent;
                    case 'pointerover': return PointerEvent;
                    case 'pointerup': return PointerEvent;
                    case 'popstate': return PopStateEvent;
                    case 'progress': return ProgressEvent;
                    case 'ratechange': return Event;
                    case 'readystatechange': return ProgressEvent;
                    case 'removesourcebuffer': return Event;
                    case 'removetrack': return TrackEvent;
                    case 'reset': return Event;
                    case 'resize': return UIEvent;
                    case 'scroll': return UIEvent;
                    case 'seeked': return Event;
                    case 'seeking': return Event;
                    case 'select': return UIEvent;
                    case 'selectstart': return Event;
                    case 'sourceclose': return Event;
                    case 'sourceended': return Event;
                    case 'sourceopen': return Event;
                    case 'stalled': return Event;
                    case 'start': return Event;
                    case 'stop': return Event;
                    case 'storage': return StorageEvent;
                    case 'submit': return Event;
                    case 'success': return Event;
                    case 'suspend': return Event;
                    case 'textinput': return TextEvent;
                    case 'timeout': return ProgressEvent;
                    case 'timeupdate': return Event;
                    case 'touchcancel': return TouchEvent;
                    case 'touchend': return TouchEvent;
                    case 'touchmove': return TouchEvent;
                    case 'touchstart': return TouchEvent;
                    case 'transitionend': return TransitionEvent;
                    case 'transitionstart': return TransitionEvent;
                    case 'unload': return Event;
                    case 'update': return Event;
                    case 'updateend': return Event;
                    case 'updateready': return Event;
                    case 'updatestart': return Event;
                    case 'upgradeneeded': return IDBVersionChangeEvent;
                    case 'visibilitychanged': return Event;
                    case 'volumechange': return Event;
                    case 'waiting': return Event;
                    case 'webglcontextcreationerror': return WebGLContextEvent;
                    case 'webglcontextlost': return WebGLContextEvent;
                    case 'webglcontextrestored': return WebGLContextEvent;
                    case 'wheel': return WheelEvent;
                    case 'candidatewindowhide': return Event;
                    case 'candidatewindowshow': return Event;
                    case 'candidatewindowupdate': return Event;
                    case 'pointerlockchange': return Event;
                    case 'pointerlockerror': return Event;
                    case 'webkitfullscreenchange': return Event;
                    case 'webkitfullscreenerror': return Event;
                    case 'zoom': return SVGZoomEvent;
                }
                return Event;
            }
            var e = ignoreCase ? _eventTypeToObjectIgnoreCase(type, attach) : _eventTypeToObject(type, attach);
            var eventObject = Object.create(e);
            eventObject.target = obj;
            eventObject.currentTarget = obj;
            eventObject.type = type;
            if (eventObject.relatedTarget)
                eventObject.relatedTarget = obj;
            return eventObject;
        });
    var _events = _eventManager.createEventProperties;


    function _createEvent(eventType) {
        function _eventTypeToObject(eventType) {
            if (eventType && typeof eventType === 'string') {
                
                switch(eventType.toLowerCase()) {
                    case 'animationevent': return AnimationEvent;
                    case 'animationevents': return AnimationEvent;
                    case 'ariarequestevent': return AriaRequestEvent;
                    case 'ariarequestevents': return AriaRequestEvent;
                    case 'audioprocessingevent': return AudioProcessingEvent;
                    case 'audioprocessingevents': return AudioProcessingEvent;
                    case 'beforeunloadevent': return BeforeUnloadEvent;
                    case 'beforeunloadevents': return BeforeUnloadEvent;
                    case 'clipboardevent': return ClipboardEvent;
                    case 'clipboardevents': return ClipboardEvent;
                    case 'closeevent': return CloseEvent;
                    case 'closeevents': return CloseEvent;
                    case 'commandevent': return CommandEvent;
                    case 'commandevents': return CommandEvent;
                    case 'compositionevent': return CompositionEvent;
                    case 'compositionevents': return CompositionEvent;
                    case 'customevent': return CustomEvent;
                    case 'customevents': return CustomEvent;
                    case 'devicemotionevent': return DeviceMotionEvent;
                    case 'devicemotionevents': return DeviceMotionEvent;
                    case 'deviceorientationevent': return DeviceOrientationEvent;
                    case 'deviceorientationevents': return DeviceOrientationEvent;
                    case 'dragevent': return DragEvent;
                    case 'dragevents': return DragEvent;
                    case 'errorevent': return ErrorEvent;
                    case 'errorevents': return ErrorEvent;
                    case 'event': return Event;
                    case 'events': return Event;
                    case 'focusevent': return FocusEvent;
                    case 'focusevents': return FocusEvent;
                    case 'gamepadevent': return GamepadEvent;
                    case 'gamepadevents': return GamepadEvent;
                    case 'hashchangeevent': return HashChangeEvent;
                    case 'hashchangeevents': return HashChangeEvent;
                    case 'idbversionchangeevent': return IDBVersionChangeEvent;
                    case 'idbversionchangeevents': return IDBVersionChangeEvent;
                    case 'keyboardevent': return KeyboardEvent;
                    case 'keyboardevents': return KeyboardEvent;
                    case 'longrunningscriptdetectedevent': return LongRunningScriptDetectedEvent;
                    case 'longrunningscriptdetectedevents': return LongRunningScriptDetectedEvent;
                    case 'msgestureevent': return MSGestureEvent;
                    case 'msgestureevents': return MSGestureEvent;
                    case 'msmanipulationevent': return MSManipulationEvent;
                    case 'msmanipulationevents': return MSManipulationEvent;
                    case 'msmediakeymessageevent': return MSMediaKeyMessageEvent;
                    case 'msmediakeymessageevents': return MSMediaKeyMessageEvent;
                    case 'msmediakeyneededevent': return MSMediaKeyNeededEvent;
                    case 'msmediakeyneededevents': return MSMediaKeyNeededEvent;
                    case 'mspointerevent': return MSPointerEvent;
                    case 'mspointerevents': return MSPointerEvent;
                    case 'mssitemodeevent': return MSSiteModeEvent;
                    case 'mssitemodeevents': return MSSiteModeEvent;
                    case 'messageevent': return MessageEvent;
                    case 'messageevents': return MessageEvent;
                    case 'mouseevent': return MouseEvent;
                    case 'mouseevents': return MouseEvent;
                    case 'mousewheelevent': return MouseWheelEvent;
                    case 'mousewheelevents': return MouseWheelEvent;
                    case 'mutationevent': return MutationEvent;
                    case 'mutationevents': return MutationEvent;
                    case 'navigationcompletedevent': return NavigationCompletedEvent;
                    case 'navigationcompletedevents': return NavigationCompletedEvent;
                    case 'navigationevent': return NavigationEvent;
                    case 'navigationevents': return NavigationEvent;
                    case 'navigationeventwithreferrer': return NavigationEventWithReferrer;
                    case 'navigationeventwithreferrers': return NavigationEventWithReferrer;
                    case 'offlineaudiocompletionevent': return OfflineAudioCompletionEvent;
                    case 'offlineaudiocompletionevents': return OfflineAudioCompletionEvent;
                    case 'pagetransitionevent': return PageTransitionEvent;
                    case 'pagetransitionevents': return PageTransitionEvent;
                    case 'permissionrequestedevent': return PermissionRequestedEvent;
                    case 'permissionrequestedevents': return PermissionRequestedEvent;
                    case 'pointerevent': return PointerEvent;
                    case 'pointerevents': return PointerEvent;
                    case 'popstateevent': return PopStateEvent;
                    case 'popstateevents': return PopStateEvent;
                    case 'progressevent': return ProgressEvent;
                    case 'progressevents': return ProgressEvent;
                    case 'svgzoomevent': return SVGZoomEvent;
                    case 'svgzoomevents': return SVGZoomEvent;
                    case 'scriptnotifyevent': return ScriptNotifyEvent;
                    case 'scriptnotifyevents': return ScriptNotifyEvent;
                    case 'storageevent': return StorageEvent;
                    case 'storageevents': return StorageEvent;
                    case 'textevent': return TextEvent;
                    case 'textevents': return TextEvent;
                    case 'touchevent': return TouchEvent;
                    case 'touchevents': return TouchEvent;
                    case 'trackevent': return TrackEvent;
                    case 'trackevents': return TrackEvent;
                    case 'transitionevent': return TransitionEvent;
                    case 'transitionevents': return TransitionEvent;
                    case 'uievent': return UIEvent;
                    case 'uievents': return UIEvent;
                    case 'unviewablecontentidentifiedevent': return UnviewableContentIdentifiedEvent;
                    case 'unviewablecontentidentifiedevents': return UnviewableContentIdentifiedEvent;
                    case 'webglcontextevent': return WebGLContextEvent;
                    case 'webglcontextevents': return WebGLContextEvent;
                    case 'wheelevent': return WheelEvent;
                    case 'wheelevents': return WheelEvent;
                    case 'documentevent': return DocumentEvent;
                    case 'documentevents': return DocumentEvent;
                }
            }
        }
        var e = _eventTypeToObject(eventType);
        if (!e) e = Event;
        return Object.create(e);
    }

    function _getElementByTagName(tagName) {
        if (typeof tagName !== 'string') return;
        
        switch (tagName.toLowerCase()) {
            case 'a': return HTMLAnchorElement;
            case 'abbr': return HTMLPhraseElement;
            case 'acronym': return HTMLPhraseElement;
            case 'address': return HTMLBlockElement;
            case 'applet': return HTMLAppletElement;
            case 'area': return HTMLAreaElement;
            case 'article': return HTMLElement;
            case 'aside': return HTMLElement;
            case 'audio': return HTMLAudioElement;
            case 'b': return HTMLPhraseElement;
            case 'base': return HTMLBaseElement;
            case 'basefont': return HTMLBaseFontElement;
            case 'bdo': return HTMLPhraseElement;
            case 'big': return HTMLPhraseElement;
            case 'blockquote': return HTMLBlockElement;
            case 'body': return HTMLBodyElement;
            case 'br': return HTMLBRElement;
            case 'button': return HTMLButtonElement;
            case 'canvas': return HTMLCanvasElement;
            case 'caption': return HTMLTableCaptionElement;
            case 'center': return HTMLBlockElement;
            case 'circle': return SVGCircleElement;
            case 'cite': return HTMLPhraseElement;
            case 'clipPath': return SVGClipPathElement;
            case 'code': return HTMLPhraseElement;
            case 'col': return HTMLTableColElement;
            case 'colgroup': return HTMLTableColElement;
            case 'datalist': return HTMLDataListElement;
            case 'dd': return HTMLDDElement;
            case 'defs': return SVGDefsElement;
            case 'del': return HTMLModElement;
            case 'desc': return SVGDescElement;
            case 'dfn': return HTMLPhraseElement;
            case 'dir': return HTMLDirectoryElement;
            case 'div': return HTMLDivElement;
            case 'dl': return HTMLDListElement;
            case 'dt': return HTMLDTElement;
            case 'ellipse': return SVGEllipseElement;
            case 'em': return HTMLPhraseElement;
            case 'embed': return HTMLEmbedElement;
            case 'feBlend': return SVGFEBlendElement;
            case 'feColorMatrix': return SVGFEColorMatrixElement;
            case 'feComponentTransfer': return SVGFEComponentTransferElement;
            case 'feComposite': return SVGFECompositeElement;
            case 'feConvolveMatrix': return SVGFEConvolveMatrixElement;
            case 'feDiffuseLighting': return SVGFEDiffuseLightingElement;
            case 'feDisplacementMap': return SVGFEDisplacementMapElement;
            case 'feDistantLight': return SVGFEDistantLightElement;
            case 'feFlood': return SVGFEFloodElement;
            case 'feFuncA': return SVGFEFuncAElement;
            case 'feFuncB': return SVGFEFuncBElement;
            case 'feFuncG': return SVGFEFuncGElement;
            case 'feFuncR': return SVGFEFuncRElement;
            case 'feGaussianBlur': return SVGFEGaussianBlurElement;
            case 'feImage': return SVGFEImageElement;
            case 'feMerge': return SVGFEMergeElement;
            case 'feMergeNode': return SVGFEMergeNodeElement;
            case 'feMorphology': return SVGFEMorphologyElement;
            case 'feOffset': return SVGFEOffsetElement;
            case 'fePointLight': return SVGFEPointLightElement;
            case 'feSpecularLighting': return SVGFESpecularLightingElement;
            case 'feSpotLight': return SVGFESpotLightElement;
            case 'feTile': return SVGFETileElement;
            case 'feTurbulence': return SVGFETurbulenceElement;
            case 'fieldset': return HTMLFieldSetElement;
            case 'figcaption': return HTMLElement;
            case 'figure': return HTMLElement;
            case 'filter': return SVGFilterElement;
            case 'font': return HTMLFontElement;
            case 'footer': return HTMLElement;
            case 'foreignObject': return SVGForeignObjectElement;
            case 'form': return HTMLFormElement;
            case 'frame': return HTMLFrameElement;
            case 'frameset': return HTMLFrameSetElement;
            case 'g': return SVGGElement;
            case 'h1': return HTMLHeadingElement;
            case 'h2': return HTMLHeadingElement;
            case 'h3': return HTMLHeadingElement;
            case 'h4': return HTMLHeadingElement;
            case 'h5': return HTMLHeadingElement;
            case 'h6': return HTMLHeadingElement;
            case 'head': return HTMLHeadElement;
            case 'header': return HTMLElement;
            case 'hgroup': return HTMLElement;
            case 'hr': return HTMLHRElement;
            case 'html': return HTMLHtmlElement;
            case 'i': return HTMLPhraseElement;
            case 'iframe': return HTMLIFrameElement;
            case 'image': return SVGImageElement;
            case 'img': return HTMLImageElement;
            case 'input': return HTMLInputElement;
            case 'ins': return HTMLModElement;
            case 'isindex': return HTMLIsIndexElement;
            case 'kbd': return HTMLPhraseElement;
            case 'keygen': return HTMLBlockElement;
            case 'label': return HTMLLabelElement;
            case 'legend': return HTMLLegendElement;
            case 'li': return HTMLLIElement;
            case 'line': return SVGLineElement;
            case 'linearGradient': return SVGLinearGradientElement;
            case 'link': return HTMLLinkElement;
            case 'listing': return HTMLBlockElement;
            case 'map': return HTMLMapElement;
            case 'mark': return HTMLElement;
            case 'marker': return SVGMarkerElement;
            case 'marquee': return HTMLMarqueeElement;
            case 'mask': return SVGMaskElement;
            case 'menu': return HTMLMenuElement;
            case 'meta': return HTMLMetaElement;
            case 'metadata': return SVGMetadataElement;
            case 'nav': return HTMLElement;
            case 'nextid': return HTMLNextIdElement;
            case 'nobr': return HTMLPhraseElement;
            case 'noframes': return HTMLElement;
            case 'noscript': return HTMLElement;
            case 'object': return HTMLObjectElement;
            case 'ol': return HTMLOListElement;
            case 'optgroup': return HTMLOptGroupElement;
            case 'option': return HTMLOptionElement;
            case 'p': return HTMLParagraphElement;
            case 'param': return HTMLParamElement;
            case 'path': return SVGPathElement;
            case 'pattern': return SVGPatternElement;
            case 'plaintext': return HTMLBlockElement;
            case 'polygon': return SVGPolygonElement;
            case 'polyline': return SVGPolylineElement;
            case 'pre': return HTMLPreElement;
            case 'progress': return HTMLProgressElement;
            case 'q': return HTMLQuoteElement;
            case 'radialGradient': return SVGRadialGradientElement;
            case 'rect': return SVGRectElement;
            case 'rt': return HTMLPhraseElement;
            case 'ruby': return HTMLPhraseElement;
            case 's': return HTMLPhraseElement;
            case 'samp': return HTMLPhraseElement;
            case 'script': return HTMLScriptElement;
            case 'section': return HTMLElement;
            case 'select': return HTMLSelectElement;
            case 'small': return HTMLPhraseElement;
            case 'source': return HTMLSourceElement;
            case 'span': return HTMLSpanElement;
            case 'stop': return SVGStopElement;
            case 'strike': return HTMLPhraseElement;
            case 'strong': return HTMLPhraseElement;
            case 'style': return HTMLStyleElement;
            case 'sub': return HTMLPhraseElement;
            case 'sup': return HTMLPhraseElement;
            case 'svg': return SVGSVGElement;
            case 'switch': return SVGSwitchElement;
            case 'symbol': return SVGSymbolElement;
            case 'table': return HTMLTableElement;
            case 'tbody': return HTMLTableSectionElement;
            case 'td': return HTMLTableDataCellElement;
            case 'text': return SVGTextElement;
            case 'textPath': return SVGTextPathElement;
            case 'textarea': return HTMLTextAreaElement;
            case 'tfoot': return HTMLTableSectionElement;
            case 'th': return HTMLTableHeaderCellElement;
            case 'thead': return HTMLTableSectionElement;
            case 'title': return HTMLTitleElement;
            case 'tr': return HTMLTableRowElement;
            case 'track': return HTMLTrackElement;
            case 'tspan': return SVGTSpanElement;
            case 'tt': return HTMLPhraseElement;
            case 'u': return HTMLPhraseElement;
            case 'ul': return HTMLUListElement;
            case 'use': return SVGUseElement;
            case 'var': return HTMLPhraseElement;
            case 'video': return HTMLVideoElement;
            case 'view': return SVGViewElement;
            case 'wbr': return HTMLElement;
            case 'x-ms-webview': return MSHTMLWebViewElement;
            case 'xmp': return HTMLBlockElement;
            default: return HTMLElement;}
    }

    function _getNewElementByTagName(tagName) {
        if (typeof tagName !== 'string') return;
        var element = Object.create(_getElementByTagName(tagName));
        element.localName = tagName;
        element.tagName = element.nodeName = tagName.toUpperCase(); 
        return element;
    }

    function _createDomObject(name) {
        return Window[name] && Window[name].prototype && Object.create(Window[name].prototype);
    }

    function _isAsyncScript(object) {
        return object && HTMLScriptElement.isPrototypeOf(object);
    }

    function _createElementByTagName(tagName) {
        if (typeof tagName !== 'string') return;
        var element = _getNewElementByTagName(tagName);
        element._$searchable = true;
        return element;
    }

    function _wrapInList(list, resultListType, missingValueType, outputList) {
        var nodeList = typeof outputList !== 'undefined' ? outputList : Object.create(resultListType);
        var originalOutputListLength = typeof outputList !== 'undefined' ? outputList.length : 0;
        if (list) {
            for (var i = 0; i< list.length; i++) {
                nodeList[i] = list[i];
            }
            // clear any remaining items in outputList
            for (var i = list.length; i< originalOutputListLength; i++) {
                nodeList[i] = undefined;
            }
            nodeList.length = list.length;
        }
        if (missingValueType && nodeList.length === 0)
            nodeList[0] = _$getTrackingUndefined(missingValueType);
        return nodeList;
    }

    function _createHTMLCollection(elementType) {
        var result = Object.create(HTMLCollection);
        result[0] = _$getTrackingNull(_createElementByTagName(elementType));
        return result;
    }

    var _defaultScripts = [];

    function _scriptInDefaultList(scriptElement) {
        var found = false;
        if (scriptElement && scriptElement.src && _defaultScripts && _defaultScripts.length > 0) {
            _defaultScripts.forEach(function (entry) {
                if (scriptElement.src == entry.src)
                    found = true;
            });
        }
        return found;
    }

    function _getElementsByTagName(source, tagName) {
        var result = [];
        if (typeof tagName === 'string') {
            tagName = tagName.toLowerCase();
            if (source && source._$searchable)
                return _findElementsByTagName(source, tagName);
            else if (tagName === 'script') {
                if (_defaultScripts.length > 0)
                    result = _$asyncRequests.getItems().length == 1 ? _defaultScripts : _defaultScripts.concat(_$asyncRequests.getItems());
                else
                    result = _$asyncRequests.getItems();
            }
            else
                result = [ _getNewElementByTagName(tagName) ];
        }
        return _wrapInList(result, NodeList, _getNewElementByTagName(tagName));
    }

    function _findElementsByTagName(source, tagName, outputList) {
        var elements = [];
        _visitChildNodes(source, function(e) { 
            if (_isElement(e) && ('*' == tagName || e.tagName.toLowerCase() == tagName)) elements.push(e);        
        });
        var result = _wrapInList(elements, NodeList, _getNewElementByTagName(tagName), outputList);
        if (typeof outputList === 'undefined') {
            if (typeof source._$queries === 'undefined')
                source._$queries = [];
            source._$queries.push({queryString: tagName, result: result});
        }
        return result;
    }

    function _visitChildNodes(start, callback) {
        if (_isNode(start) && _hasChildNodes(start)) {
                var q = [];
                q = q.concat(_childNodeList(start));
                var c = 0;
                while (q.length > 0 && c++ < 1000) {
                        var e = q.shift();
                        if (_isNode(e)) { 
                            callback(e);
                            if (_hasChildNodes(e)) q = q.concat(_childNodeList(e));
                        }
                }
        }
    }

    function _refreshQueries(node){
        if (_isNode(node)){
            if (node._$queries)
                for(var i =0; i < node._$queries.length; i++)
                    _findElementsByTagName(node, node._$queries[i].queryString, node._$queries[i].result); 
                // referesh the parent queries
                _refreshQueries(node.parentNode);
        }
    }

    function _embedAsyncRequest(originalObject, asyncRequest) {
        if (originalObject) {
            var newObject = Object.create(originalObject);
            _$defineProperty(newObject, '_$asyncRequest', asyncRequest);
            return newObject;
        }
        return originalObject;
    }

    function _getEmbeddedAsyncRequest(obj) {
        return (obj && obj._$asyncRequest) ? obj._$asyncRequest : obj;
    }

    function _isNode(n) {
        return typeof n !== 'undefined' && n && Node.isPrototypeOf(n);
    }

    function _isElement(e) {
        return typeof e !== 'undefined' && e && Element.isPrototypeOf(e);
    }

    function _getMatchingNull(obj) {
        return _$getTrackingNull(Object.create(_isElement(obj) ? HTMLElement : Node));
    }

    function _isParentOf(parent, obj) {
        if (obj) {
            var cur = obj.parentNode;
            while (cur) {
                if (cur == parent) 
                    return true;
                cur = cur.parentNode;
            }
        }
        return false;
    }

    function _childNodes(obj, resultListType) {
        if (typeof obj._$children === 'undefined')
            obj._$children = Object.create(resultListType);
        return obj._$children;
    }

    function _childNodeList(obj) {
        return typeof obj._$children !== 'undefined'? Array.prototype.slice.call(obj._$children) : [];
    }

    function _hasChildNodes(obj) {
        return typeof obj._$children !== 'undefined' && obj._$children.length > 0;
    }

    function _firstChild(obj, defaultObj) {
        return _hasChildNodes(obj) ? obj._$children[0] : _$getTrackingNull(Object.create(_isElement(obj) ? HTMLElement : defaultObj));
    }

    function _lastChild(obj, defaultObj) {
        return _hasChildNodes(obj) ? obj._$children[obj._$children.length - 1] : _$getTrackingNull(Object.create(_isElement(obj) ? HTMLElement : defaultObj));
    }

    function _clearElement(obj) {
        if (_hasChildNodes(obj)) {
            for (var i = 0; i < obj._$children.length; i++)
                obj._$children[i].parentNode = obj._$children[i].nextSibling = obj._$children[i].previousSibling = _getMatchingNull(obj._$children[i]);
            obj._$children = undefined;
            _refreshQueries(obj);
        }
    }

    function _removeChild(obj, oldChild) {
        if (_isNode(oldChild) && _hasChildNodes(obj)) {
            for (var i = 0; i < obj._$children.length; i++) {
                if (oldChild == obj._$children[i]) {
                    if (oldChild.previousSibling) {
                        oldChild.previousSibling.nextSibling = oldChild.nextSibling;
                    }
                    if (oldChild.nextSibling) {
                        oldChild.nextSibling.previousSibling = oldChild.previousSibling;
                    }
                    Array.prototype.splice.call(obj._$children, i, 1);
                    oldChild.parentNode = oldChild.nextSibling = oldChild.previousSibling = _getMatchingNull(obj);
                    _refreshQueries(obj);
                    break;
                }
            }
        }
        return oldChild;
    }

    function _appendChildInternal(obj, newChild) {
        if (_isNode(newChild) && obj != newChild && !_isParentOf(newChild, obj)) {
            if (newChild.parentNode)
                _removeChild(newChild.parentNode, newChild);
            if (typeof obj._$children === 'undefined')
                obj._$children = Object.create(NodeList);
            var previousSibling = obj._$children.length >= 1 ? obj._$children[obj._$children.length - 1] : null;
            Array.prototype.push.call(obj._$children, newChild);
            newChild.parentNode = obj;
            if (previousSibling) {
                newChild.previousSibling = previousSibling;
                previousSibling.nextSibling = newChild;
            }
            _refreshQueries(obj);
        }
        return newChild;
    }

    function _appendChild(obj, newChild) {
        if (_isAsyncScript(newChild) && !_scriptInDefaultList(newChild))
            _$asyncRequests.add(newChild);
        return _appendChildInternal(obj, newChild);
    }

    function _insertBefore(obj, newChild, refChild) {
        if (_isNode(newChild) && obj != newChild && !_isParentOf(newChild, obj)) {
            if (newChild.parentNode)
                _removeChild(newChild.parentNode, newChild);
            if (typeof obj._$children === 'undefined')
                obj._$children = Object.create(NodeList);
            var index = 0;
            var nextSibling = null;
            var previousSibling = null;
            for (index = 0; index < obj._$children.length; index++) {
                if (refChild == obj._$children[index]) {
                    nextSibling = refChild;
                    break;
                }
                previousSibling = obj._$children[index];
            }
            Array.prototype.splice.call(obj._$children, index, 0, newChild);
            newChild.parentNode = obj;
            if (nextSibling) {
                newChild.nextSibling = nextSibling;
                nextSibling.previousSibling = newChild;
            }
            if (previousSibling) {
                newChild.previousSibling = previousSibling;
                previousSibling.nextSibling = newChild;
            }
            _refreshQueries(obj);
        }
        if (_isAsyncScript(newChild) && !_scriptInDefaultList(newChild))
            _$asyncRequests.insertBefore(newChild, _getEmbeddedAsyncRequest(refChild));
        return newChild;
    }

    function _replaceChild(obj, newChild, oldChild) {
        if (_isNode(newChild) && obj != newChild && !_isParentOf(newChild, obj) && _isNode(oldChild) && _hasChildNodes(obj)) {
            for (var i = 0; i < obj._$children.length; i++) {
                if (oldChild == obj._$children[i]) {
                    if (newChild.parentNode)
                        _removeChild(newChild.parentNode, newChild);
                    newChild.previousSibling = oldChild.previousSibling;
                    newChild.nextSibling = oldChild.nextSibling;
                    if (oldChild.previousSibling) {
                        oldChild.previousSibling.nextSibling = newChild;
                    }
                    if (oldChild.nextSibling) {
                        oldChild.nextSibling.previousSibling = newChild;
                    }
                    newChild.parentNode = obj;
                    obj._$children[i] = newChild;
                    oldChild.parentNode =    oldChild.nextSibling = oldChild.previousSibling = _getMatchingNull(obj);
                    _refreshQueries(obj);
                    break;
                }
            }
        }
        if (_isAsyncScript(newChild) && !_scriptInDefaultList(newChild))
            _$asyncRequests.replace(newChild, _getEmbeddedAsyncRequest(oldChild));
        return oldChild;
    }

    function _firstElementChild(obj) {
        if (_isNode(obj)) {
            var cur = _firstChild(obj);
            do {
                if (_isElement(cur))
                    return cur;
                cur = cur.nextSibling;
            } while (cur);
        }
        return _$getTrackingNull(Object.create(HTMLElement));
    }

    function _lastElementChild(obj) {
        if (_isNode(obj)) {
            var cur = _lastChild(obj);
            do {
                if (_isElement(cur))
                    return cur;
                cur = cur.previousSibling;
            } while (cur);
        }
        return _$getTrackingNull(Object.create(HTMLElement));
    }

    function _nextElementSibling(obj) {
        if (_isNode(obj)) {
            var cur = obj.nextSibling;
            do {
                if (_isElement(cur))
                    return cur;
                cur = cur.nextSibling;
            } while (cur);
        }
        return _$getTrackingNull(Object.create(HTMLElement));
    }

    function _previousElementSibling(obj) {
        if (_isNode(obj)) {
            var cur = obj.previousSibling;
            do {
                if (_isElement(cur))
                    return cur;
                cur = cur.previousSibling;
            } while (cur);
        }
        return _$getTrackingNull(Object.create(HTMLElement));
    }

    function _parentElement(obj) {
        if (_isNode(obj)) {
            var cur = obj.parentNode;
            do {
                if (_isElement(cur))
                    return cur;
                cur = cur.parentNode;
            } while (cur);
        }
        return _$getTrackingNull(Object.create(HTMLElement));
    }

    function _childElementCount(obj) {
        var count = 0;
        if (_isNode(obj)) {
            var cur = _firstChild(obj);
            do {
                if (_isElement(cur))
                    count ++;
                cur = cur.nextSibling;
            } while (cur);
        }
        return count;
    }

    function _applyElement(obj, apply, where) {
        if (!obj || !apply) return;
        if (where === undefined || where == "outside") {
            if (!obj.parentNode) return;
            _replaceChild(obj.parentNode, apply, obj);
            _appendChild(apply, obj);
        } 
        else if (where == 'inside') {
            var children = obj._$children !== undefined ? Array.prototype.slice.call(obj._$children) : [];
            for(i=0; i<children.length; i++) {
                _removeChild(obj, children[i]);
            }
            _appendChild(obj, apply);
            for(i=0; i<children.length; i++) {
                _appendChild(apply, children[i]);
            }
        }
    }

    function _hasAttribute(object, name) {
        if (object)
            return object.hasOwnProperty(name);
        else
            return false;
    }

    function _setAttribute(object, name, value) {
        if (object)
            object[name] = value;
    }

    function _getAttribute(object, name) {
        if (_hasAttribute(object, name))
            return object[name];
        else 
            return null;
    }

    function _recordElementId(id, e) {
        if (typeof document._$documentElements != 'object')
            document._$documentElements = {};
        document._$documentElements[id] = e;
    }

    function _lookupElement(id) {
        return (document._$documentElements && document._$documentElements[id]);
    }

    function _getElementById(elementId) {
        var element = _lookupElement(elementId) || Object.create(HTMLElement);
        element.id = elementId;
        return element;
    }

    var scriptTagRegEx = /<[\s]*script[^>]*src[\s]*=[\s]*['"]([^'">]+)['"]/gim;
    function _setInnerHTML(source, content) {
            // since we are not parsing the inner html, mark the node as unsearchable
            source._$searchable = false;
            var scriptTag = null;
            while (scriptTag = scriptTagRegEx.exec(content)) {
                    var scriptElement = Object.create(HTMLScriptElement);
                    scriptElement.src = scriptTag[1];
                    if (!_scriptInDefaultList(scriptElement))
                        _$asyncRequests.add(scriptElement);
            }
    }

    function _formElements(form) {
        var elements = [];
        _visitChildNodes(form, function(node) {
            if (_isElement(node)) {
                var tagName = node.tagName.toLowerCase();
                if (tagName == 'input' || tagName == 'select' || tagName == 'button' || tagName == 'textarea' || tagName == 'fieldset') elements.push(node);
            }
        });
        return _wrapInList(elements, HTMLCollection, Object.create(HTMLElement));
    }

    function _selectOptions(select) {
        var options = [];
        _visitChildNodes(select, function(node) {
            var tagName = node.tagName.toLowerCase();
            if (tagName == 'option') options.push(node); 
            else if (tagName != 'optgroup') return false; 
        });
        return _wrapInList(options, HTMLCollection, _createElementByTagName('option'));
    }

    var queryIdSelectorRegEx = /^\s*#([^<>\s]+)\s*$/;
    function _queryIdSelector(selectors, returnFirstElementOnly) {
        var results = [];
        if (typeof selectors === 'string') {
            var parts = selectors.split(',');
            for (var i = 0; i < parts.length; i++) {
                var m = queryIdSelectorRegEx.exec(parts[i]);
                if (m && m[1]) {
                    var e = _lookupElement(m[1]);
                    if (e) {
                        if (returnFirstElementOnly) return e;
                        results.push(e);
                    }
                }
            }
        }
        if (!returnFirstElementOnly)
            return results;
    }

    function _querySelectorAll(obj, selectors) {
        var results = _queryIdSelector(selectors);
        if (results.length === 0)
            results = [Object.create(_getElementByTagName(selectors) || HTMLElement)];
        return _wrapInList(results, NodeList);
    }

    function _querySelector(obj, selectors) {
        var results = _queryIdSelector(selectors, true);
        if (!result)
            result = _$getTrackingNull(Object.create(_getElementByTagName(selectors) || HTMLElement));
        return results;
    }

    function _extend(obj, original, filter) {
        if (obj && original) {
            var propertyNames = Object.getOwnPropertyNames(original);
            if (propertyNames && propertyNames.length > 0) {
                for (var p in propertyNames) {
                    var name = propertyNames[p];
                    if (typeof name != 'string' || (filter && name.match(filter))) continue;
                    Object.defineProperty(obj, name, Object.getOwnPropertyDescriptor(original, name));
                }
            }
        }
    }


    function _getConstructorFromString(type) {
        if (typeof type !== "string") {
            return;
        }

        var typeParts = type.split(".");
        var ctor = _$globalObject;
        var i;
        for (i = 0; i < typeParts.length && ctor; i++) {
            ctor = ctor[typeParts[i]];
        }

        if (typeof ctor === "function") {
            return ctor;
        }
    }

    function _recordChildren(parent, elementDefinitions, parentForm) {
        if (_isElement(parent) && elementDefinitions && elementDefinitions.length > 0) {
            for (var i = 0 ; i < elementDefinitions.length; i++) {
                var e = elementDefinitions[i];
                if (e) {
                    var element = _createElementByTagName(e.$tag);

                    // Insert in global lists
                    if (typeof e.id == 'string') {
                        _recordElementId(e.id, element);
                        // Simulate IE behaviour by exposing the element on the parent using its id
                        if (parentForm && e.$formElement)
                            parentForm[e.id] = element;
                        else 
                            window[e.id] = element;
                    }

                    if (_isAsyncScript(element))
                        _defaultScripts.push(element);

                    // Initialize children
                    if (e.$children)
                        _recordChildren(element, e.$children, e.$tag.toLowerCase() == 'form' ? element : parentForm);

                    // Copy properties
                    _extend(element, e, /(^[\$].+)|(^_\$fieldDoc\$\$.+)/);

                    if (e.$object) {
                        _extend(element, e.$object);
                    }

                    // Add winControl property if there is a data-win-control attribute
                    if (typeof e["data-win-control"] === "string") {
                        var winControlType = e["data-win-control"];
                        element.winControl = _$initVar(undefined, {
                            ctor: _getConstructorFromString(winControlType),
                            type: winControlType,
                            isUnsafeType: true
                        });
                    }

                    _appendChildInternal(parent, element);
                }
            }
        }
    }

    function _recordDomStructure(elementDefinitions) {
        if (elementDefinitions && elementDefinitions.length > 0) {
            _clearElement(document.body);
            _clearElement(document.head);
            _defaultScripts = [];

            for (var i = 0 ; i < elementDefinitions.length; i++) {
                var e = elementDefinitions[i];
                if (e && e.$tag && e.$children) {
                    if (e.$tag == 'body')
                        _recordChildren(document.body, e.$children);
                    else if (e.$tag == 'head')
                        _recordChildren(document.head, e.$children);
                }
            }
        }
    }

    function _createIDBRequest(requestType, source, result){
        var request = Object.create(requestType);
        request.source = source;
        request.result = result;
        return request; 
    }

    
    var ANGLE_instanced_arrays = {};
    var AudioBuffer = {};
    var AudioListener = {};
    var AudioParam = {};
    var AudioTrack = {};
    var BarProp = {};
    var Blob = {};
    var BlobCtor = function() { return Object.create(Blob); };
    var CSS = {};
    var CSSRule = {};
    var CSSRuleList = {};
    var CSSStyleDeclaration = {};
    var CanvasGradient = {};
    var CanvasPattern = {};
    var CanvasRenderingContext2D = {};
    var ClientRect = {};
    var ClientRectList = {};
    var Console = {};
    var Coordinates = {};
    var CryptoKey = {};
    var CryptoKeyPair = {};
    var DOMError = {};
    var DOMException = {};
    var DOMImplementation = {};
    var DOMParser = {};
    var DOMParserCtor = function() { return Object.create(DOMParser); };
    var DOMStringList = {};
    var DOMStringMap = {};
    var DOMTokenList = {};
    var DataTransfer = {};
    var DataTransferItem = {};
    var DataTransferItemList = {};
    var DeferredPermissionRequest = {};
    var DeviceAcceleration = {};
    var DeviceRotationRate = {};
    var EXT_texture_filter_anisotropic = {};
    var Event = {};
    var EventCtor = function(type, eventInitDict) { 
        /// <signature>
        /// <param name='type' type='String'/>
        /// <param name='eventInitDict' type='EventInit' optional='true' />
        /// </signature>
        return Object.create(Event);
    };
    var EventTarget = {};
    var External = {};
    var FileList = {};
    var FormData = {};
    var FormDataCtor = function() { return Object.create(FormData); };
    var Gamepad = {};
    var GamepadButton = {};
    var Geolocation = {};
    var HTMLCollection = {};
    var History = {};
    var IDBCursor = {};
    var IDBFactory = {};
    var IDBIndex = {};
    var IDBKeyRange = {};
    var IDBObjectStore = {};
    var ImageData = {};
    var Location = {};
    var MSApp = {};
    var MSBlobBuilder = {};
    var MSBlobBuilderCtor = function() { return Object.create(MSBlobBuilder); };
    var MSCSSMatrix = {};
    var MSCSSMatrixCtor = function(text) { 
        /// <signature>
        /// <param name='text' type='String' optional='true' />
        /// </signature>
        return Object.create(MSCSSMatrix);
    };
    var MSGesture = {};
    var MSGestureCtor = function() { return Object.create(MSGesture); };
    var MSGraphicsTrust = {};
    var MSMediaKeyError = {};
    var MSMediaKeys = {};
    var MSMediaKeysCtor = function(keySystem) { 
        /// <signature>
        /// <param name='keySystem' type='String'/>
        /// </signature>
        return Object.create(MSMediaKeys);
    };
    var MSMimeTypesCollection = {};
    var MSPluginsCollection = {};
    var MSRangeCollection = {};
    var MSStream = {};
    var MSWebViewSettings = {};
    var MediaError = {};
    var MediaList = {};
    var MediaQueryList = {};
    var MessageChannel = {};
    var MessageChannelCtor = function() { return Object.create(MessageChannel); };
    var MimeType = {};
    var MimeTypeArray = {};
    var MutationObserver = {};
    var MutationObserverCtor = function(callback) { 
        /// <signature>
        /// <param name='callback' type='MutationCallback'/>
        /// </signature>
        return Object.create(MutationObserver);
    };
    var MutationRecord = {};
    var NamedNodeMap = {};
    var NodeFilter = {};
    var NodeIterator = {};
    var NodeList = {};
    var OES_element_index_uint = {};
    var OES_standard_derivatives = {};
    var OES_texture_float = {};
    var OES_texture_float_linear = {};
    var PerfWidgetExternal = {};
    var Performance = {};
    var PerformanceEntry = {};
    var PerformanceNavigation = {};
    var PerformanceTiming = {};
    var PeriodicWave = {};
    var Plugin = {};
    var PluginArray = {};
    var Position = {};
    var PositionError = {};
    var Range = {};
    var SVGAngle = {};
    var SVGAnimatedAngle = {};
    var SVGAnimatedBoolean = {};
    var SVGAnimatedEnumeration = {};
    var SVGAnimatedInteger = {};
    var SVGAnimatedLength = {};
    var SVGAnimatedLengthList = {};
    var SVGAnimatedNumber = {};
    var SVGAnimatedNumberList = {};
    var SVGAnimatedPreserveAspectRatio = {};
    var SVGAnimatedRect = {};
    var SVGAnimatedString = {};
    var SVGAnimatedTransformList = {};
    var SVGElementInstanceList = {};
    var SVGLength = {};
    var SVGLengthList = {};
    var SVGMatrix = {};
    var SVGNumber = {};
    var SVGNumberList = {};
    var SVGPathSeg = {};
    var SVGPathSegList = {};
    var SVGPoint = {};
    var SVGPointList = {};
    var SVGPreserveAspectRatio = {};
    var SVGRect = {};
    var SVGStringList = {};
    var SVGTransform = {};
    var SVGTransformList = {};
    var SVGUnitTypes = {};
    var SVGZoomAndPan = {};
    var Selection = {};
    var Storage = {};
    var StyleMedia = {};
    var StyleSheet = {};
    var StyleSheetList = {};
    var StyleSheetPageList = {};
    var SubtleCrypto = {};
    var TextMetrics = {};
    var TextRange = {};
    var TextRangeCollection = {};
    var TextTrackCueList = {};
    var TimeRanges = {};
    var Touch = {};
    var TouchList = {};
    var TreeWalker = {};
    var URL = {};
    var ValidityState = {};
    var VideoPlaybackQuality = {};
    var VideoTrack = {};
    var WEBGL_compressed_texture_s3tc = {};
    var WEBGL_debug_renderer_info = {};
    var WEBGL_depth_texture = {};
    var WebGLActiveInfo = {};
    var WebGLObject = {};
    var WebGLRenderingContext = {};
    var WebGLShaderPrecisionFormat = {};
    var WebGLUniformLocation = {};
    var WebKitCSSMatrix = {};
    var WebKitCSSMatrixCtor = function(text) { 
        /// <signature>
        /// <param name='text' type='String' optional='true' />
        /// </signature>
        return Object.create(WebKitCSSMatrix);
    };
    var WebKitPoint = {};
    var WebKitPointCtor = function(x, y) { 
        /// <signature>
        /// <param name='x' type='Number' optional='true' />
        /// <param name='y' type='Number' optional='true' />
        /// </signature>
        return Object.create(WebKitPoint);
    };
    var XMLSerializer = {};
    var XMLSerializerCtor = function() { return Object.create(XMLSerializer); };
    var XPathEvaluator = {};
    var XPathEvaluatorCtor = function() { return Object.create(XPathEvaluator); };
    var XPathExpression = {};
    var XPathNSResolver = {};
    var XPathResult = {};
    var XSLTProcessor = {};
    var XSLTProcessorCtor = function() { return Object.create(XSLTProcessor); };
    var EventListener = {};
    var AbstractWorker = {};
    var ChildNode = {};
    var DOML2DeprecatedColorProperty = {};
    var DOML2DeprecatedSizeProperty = {};
    var DocumentEvent = {};
    var ElementTraversal = {};
    var GetSVGDocument = {};
    var GlobalEventHandlers = {};
    var HTMLTableAlignment = {};
    var IDBEnvironment = {};
    var LinkStyle = {};
    var MSBaseReader = {};
    var MSFileSaver = {};
    var MSNavigatorDoNotTrack = {};
    var NavigatorContentUtils = {};
    var NavigatorGeolocation = {};
    var NavigatorID = {};
    var NavigatorOnLine = {};
    var NavigatorStorageUtils = {};
    var NodeSelector = {};
    var RandomSource = {};
    var SVGAnimatedPathData = {};
    var SVGAnimatedPoints = {};
    var SVGExternalResourcesRequired = {};
    var SVGFitToViewBox = {};
    var SVGLangSpace = {};
    var SVGLocatable = {};
    var SVGStylable = {};
    var SVGTests = {};
    var SVGURIReference = {};
    var WindowBase64 = {};
    var WindowConsole = {};
    var WindowLocalStorage = {};
    var WindowSessionStorage = {};
    var WindowTimersExtension = {};
    var XMLHttpRequestEventTarget = {};
    var AnimationEvent = _$inherit(Event);
    var ApplicationCache = _$inherit(EventTarget);
    var AriaRequestEvent = _$inherit(Event);
    var AriaRequestEventCtor = function(type, eventInitDict) { 
        /// <signature>
        /// <param name='type' type='String'/>
        /// <param name='eventInitDict' type='AriaRequestEventInit' optional='true' />
        /// </signature>
        return Object.create(AriaRequestEvent);
    };
    var AudioContext = _$inherit(EventTarget);
    var AudioContextCtor = function() { return Object.create(AudioContext); };
    var AudioNode = _$inherit(EventTarget);
    var AudioProcessingEvent = _$inherit(Event);
    var AudioTrackList = _$inherit(EventTarget);
    var BeforeUnloadEvent = _$inherit(Event);
    var CSSFontFaceRule = _$inherit(CSSRule);
    var CSSGroupingRule = _$inherit(CSSRule);
    var CSSImportRule = _$inherit(CSSRule);
    var CSSKeyframeRule = _$inherit(CSSRule);
    var CSSKeyframesRule = _$inherit(CSSRule);
    var CSSNamespaceRule = _$inherit(CSSRule);
    var CSSPageRule = _$inherit(CSSRule);
    var CSSStyleRule = _$inherit(CSSRule);
    var CSSStyleSheet = _$inherit(StyleSheet);
    var ClipboardEvent = _$inherit(Event);
    var ClipboardEventCtor = function(type, eventInitDict) { 
        /// <signature>
        /// <param name='type' type='String'/>
        /// <param name='eventInitDict' type='ClipboardEventInit' optional='true' />
        /// </signature>
        return Object.create(ClipboardEvent);
    };
    var CloseEvent = _$inherit(Event);
    var CommandEvent = _$inherit(Event);
    var CommandEventCtor = function(type, eventInitDict) { 
        /// <signature>
        /// <param name='type' type='String'/>
        /// <param name='eventInitDict' type='CommandEventInit' optional='true' />
        /// </signature>
        return Object.create(CommandEvent);
    };
    var Crypto = {};
    var CustomEvent = _$inherit(Event);
    var CustomEventCtor = function(typeArg, eventInitDict) { 
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='eventInitDict' type='CustomEventInit' optional='true' />
        /// </signature>
        return Object.create(CustomEvent);
    };
    var DOMSettableTokenList = _$inherit(DOMTokenList);
    var DeviceMotionEvent = _$inherit(Event);
    var DeviceOrientationEvent = _$inherit(Event);
    var ErrorEvent = _$inherit(Event);
    var File = _$inherit(Blob);
    var FileReader = _$inherit(EventTarget);
    var FileReaderCtor = function() { return Object.create(FileReader); };
    var GamepadEvent = _$inherit(Event);
    var HTMLAllCollection = _$inherit(HTMLCollection);
    var HTMLAreasCollection = _$inherit(HTMLCollection);
    var HashChangeEvent = _$inherit(Event);
    var HashChangeEventCtor = function(type, eventInitDict) { 
        /// <signature>
        /// <param name='type' type='String'/>
        /// <param name='eventInitDict' type='HashChangeEventInit' optional='true' />
        /// </signature>
        return Object.create(HashChangeEvent);
    };
    var IDBCursorWithValue = _$inherit(IDBCursor);
    var IDBDatabase = _$inherit(EventTarget);
    var IDBRequest = _$inherit(EventTarget);
    var IDBTransaction = _$inherit(EventTarget);
    var IDBVersionChangeEvent = _$inherit(Event);
    var LongRunningScriptDetectedEvent = _$inherit(Event);
    var MSAppAsyncOperation = _$inherit(EventTarget);
    var MSInputMethodContext = _$inherit(EventTarget);
    var MSMediaKeyMessageEvent = _$inherit(Event);
    var MSMediaKeyNeededEvent = _$inherit(Event);
    var MSMediaKeySession = _$inherit(EventTarget);
    var MSSiteModeEvent = _$inherit(Event);
    var MSStreamReader = _$inherit(EventTarget);
    var MSStreamReaderCtor = function() { return Object.create(MSStreamReader); };
    var MSWebViewAsyncOperation = _$inherit(EventTarget);
    var MediaSource = _$inherit(EventTarget);
    var MediaSourceCtor = function() { return Object.create(MediaSource); };
    var MessageEvent = _$inherit(Event);
    var MessagePort = _$inherit(EventTarget);
    var MutationEvent = _$inherit(Event);
    var NavigationEvent = _$inherit(Event);
    var Navigator = {};
    var Node = _$inherit(EventTarget);
    var OfflineAudioCompletionEvent = _$inherit(Event);
    var PageTransitionEvent = _$inherit(Event);
    var PerformanceMark = _$inherit(PerformanceEntry);
    var PerformanceMeasure = _$inherit(PerformanceEntry);
    var PerformanceNavigationTiming = _$inherit(PerformanceEntry);
    var PerformanceResourceTiming = _$inherit(PerformanceEntry);
    var PermissionRequest = _$inherit(DeferredPermissionRequest);
    var PermissionRequestedEvent = _$inherit(Event);
    var PopStateEvent = _$inherit(Event);
    var ProgressEvent = _$inherit(Event);
    var SVGElementInstance = _$inherit(EventTarget);
    var SVGPathSegArcAbs = _$inherit(SVGPathSeg);
    var SVGPathSegArcRel = _$inherit(SVGPathSeg);
    var SVGPathSegClosePath = _$inherit(SVGPathSeg);
    var SVGPathSegCurvetoCubicAbs = _$inherit(SVGPathSeg);
    var SVGPathSegCurvetoCubicRel = _$inherit(SVGPathSeg);
    var SVGPathSegCurvetoCubicSmoothAbs = _$inherit(SVGPathSeg);
    var SVGPathSegCurvetoCubicSmoothRel = _$inherit(SVGPathSeg);
    var SVGPathSegCurvetoQuadraticAbs = _$inherit(SVGPathSeg);
    var SVGPathSegCurvetoQuadraticRel = _$inherit(SVGPathSeg);
    var SVGPathSegCurvetoQuadraticSmoothAbs = _$inherit(SVGPathSeg);
    var SVGPathSegCurvetoQuadraticSmoothRel = _$inherit(SVGPathSeg);
    var SVGPathSegLinetoAbs = _$inherit(SVGPathSeg);
    var SVGPathSegLinetoHorizontalAbs = _$inherit(SVGPathSeg);
    var SVGPathSegLinetoHorizontalRel = _$inherit(SVGPathSeg);
    var SVGPathSegLinetoRel = _$inherit(SVGPathSeg);
    var SVGPathSegLinetoVerticalAbs = _$inherit(SVGPathSeg);
    var SVGPathSegLinetoVerticalRel = _$inherit(SVGPathSeg);
    var SVGPathSegMovetoAbs = _$inherit(SVGPathSeg);
    var SVGPathSegMovetoRel = _$inherit(SVGPathSeg);
    var Screen = _$inherit(EventTarget);
    var ScriptNotifyEvent = _$inherit(Event);
    var SourceBuffer = _$inherit(EventTarget);
    var SourceBufferList = _$inherit(EventTarget);
    var StorageEvent = _$inherit(Event);
    var TextTrack = _$inherit(EventTarget);
    var TextTrackCue = _$inherit(EventTarget);
    var TextTrackCueCtor = function(startTime, endTime, text) { 
        /// <signature>
        /// <param name='startTime' type='Number'/>
        /// <param name='endTime' type='Number'/>
        /// <param name='text' type='String'/>
        /// </signature>
        return Object.create(TextTrackCue);
    };
    var TextTrackList = _$inherit(EventTarget);
    var TrackEvent = _$inherit(Event);
    var TransitionEvent = _$inherit(Event);
    var UIEvent = _$inherit(Event);
    var UIEventCtor = function(type, eventInitDict) { 
        /// <signature>
        /// <param name='type' type='String'/>
        /// <param name='eventInitDict' type='UIEventInit' optional='true' />
        /// </signature>
        return Object.create(UIEvent);
    };
    var VideoTrackList = _$inherit(EventTarget);
    var WebGLBuffer = _$inherit(WebGLObject);
    var WebGLContextEvent = _$inherit(Event);
    var WebGLContextEventCtor = function() { return Object.create(WebGLContextEvent); };
    var WebGLFramebuffer = _$inherit(WebGLObject);
    var WebGLProgram = _$inherit(WebGLObject);
    var WebGLRenderbuffer = _$inherit(WebGLObject);
    var WebGLShader = _$inherit(WebGLObject);
    var WebGLTexture = _$inherit(WebGLObject);
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
    var SVGFilterPrimitiveStandardAttributes = _$inherit(SVGStylable);
    var SVGTransformable = _$inherit(SVGLocatable);
    var WindowTimers = {};
    var AnalyserNode = _$inherit(AudioNode);
    var Attr = _$inherit(Node);
    var AudioBufferSourceNode = _$inherit(AudioNode);
    var AudioDestinationNode = _$inherit(AudioNode);
    var BiquadFilterNode = _$inherit(AudioNode);
    var CSSConditionRule = _$inherit(CSSGroupingRule);
    var ChannelMergerNode = _$inherit(AudioNode);
    var ChannelSplitterNode = _$inherit(AudioNode);
    var CharacterData = _$inherit(Node);
    var CompositionEvent = _$inherit(UIEvent);
    var CompositionEventCtor = function(typeArg, eventInitDict) { 
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='eventInitDict' type='CompositionEventInit' optional='true' />
        /// </signature>
        return Object.create(CompositionEvent);
    };
    var ConvolverNode = _$inherit(AudioNode);
    var DataCue = _$inherit(TextTrackCue);
    var DelayNode = _$inherit(AudioNode);
    var Document = _$inherit(Node);
    var DocumentFragment = _$inherit(Node);
    var DocumentType = _$inherit(Node);
    var DynamicsCompressorNode = _$inherit(AudioNode);
    var Element = _$inherit(Node);
    var FocusEvent = _$inherit(UIEvent);
    var FocusEventCtor = function(typeArg, eventInitDict) { 
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='eventInitDict' type='FocusEventInit' optional='true' />
        /// </signature>
        return Object.create(FocusEvent);
    };
    var GainNode = _$inherit(AudioNode);
    var IDBOpenDBRequest = _$inherit(IDBRequest);
    var KeyboardEvent = _$inherit(UIEvent);
    var KeyboardEventCtor = function(typeArg, eventInitDict) { 
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='eventInitDict' type='KeyboardEventInit' optional='true' />
        /// </signature>
        return Object.create(KeyboardEvent);
    };
    var MSGestureEvent = _$inherit(UIEvent);
    var MSManipulationEvent = _$inherit(UIEvent);
    var MediaElementAudioSourceNode = _$inherit(AudioNode);
    var MouseEvent = _$inherit(UIEvent);
    var MouseEventCtor = function(typeArg, eventInitDict) { 
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='eventInitDict' type='MouseEventInit' optional='true' />
        /// </signature>
        return Object.create(MouseEvent);
    };
    var NavigationCompletedEvent = _$inherit(NavigationEvent);
    var NavigationEventWithReferrer = _$inherit(NavigationEvent);
    var OfflineAudioContext = _$inherit(AudioContext);
    var OfflineAudioContextCtor = function(numberOfChannels, length, sampleRate) { 
        /// <signature>
        /// <param name='numberOfChannels' type='Number'/>
        /// <param name='length' type='Number'/>
        /// <param name='sampleRate' type='Number'/>
        /// </signature>
        return Object.create(OfflineAudioContext);
    };
    var OscillatorNode = _$inherit(AudioNode);
    var PannerNode = _$inherit(AudioNode);
    var SVGZoomEvent = _$inherit(UIEvent);
    var ScriptProcessorNode = _$inherit(AudioNode);
    var StereoPannerNode = _$inherit(AudioNode);
    var TextEvent = _$inherit(UIEvent);
    var TouchEvent = _$inherit(UIEvent);
    var WaveShaperNode = _$inherit(AudioNode);
    var Window = this;
    var CSSMediaRule = _$inherit(CSSConditionRule);
    var CSSSupportsRule = _$inherit(CSSConditionRule);
    var Comment = _$inherit(CharacterData);
    var DragEvent = _$inherit(MouseEvent);
    var HTMLDocument = _$inherit(Document);
    var HTMLElement = _$inherit(Element);
    var MSPointerEvent = _$inherit(MouseEvent);
    var MSPointerEventCtor = function(typeArg, eventInitDict) { 
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='eventInitDict' type='PointerEventInit' optional='true' />
        /// </signature>
        return Object.create(MSPointerEvent);
    };
    var MouseWheelEvent = _$inherit(MouseEvent);
    var PointerEvent = _$inherit(MouseEvent);
    var PointerEventCtor = function(typeArg, eventInitDict) { 
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='eventInitDict' type='PointerEventInit' optional='true' />
        /// </signature>
        return Object.create(PointerEvent);
    };
    var ProcessingInstruction = _$inherit(CharacterData);
    var SVGElement = _$inherit(Element);
    var Text = _$inherit(CharacterData);
    var UnviewableContentIdentifiedEvent = _$inherit(NavigationEventWithReferrer);
    var WheelEvent = _$inherit(MouseEvent);
    var WheelEventCtor = function(typeArg, eventInitDict) { 
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='eventInitDict' type='WheelEventInit' optional='true' />
        /// </signature>
        return Object.create(WheelEvent);
    };
    var XMLDocument = _$inherit(Document);
    var CDATASection = _$inherit(Text);
    var HTMLAnchorElement = _$inherit(HTMLElement);
    var HTMLAppletElement = _$inherit(HTMLElement);
    var HTMLAreaElement = _$inherit(HTMLElement);
    var HTMLBRElement = _$inherit(HTMLElement);
    var HTMLBaseElement = _$inherit(HTMLElement);
    var HTMLBaseFontElement = _$inherit(HTMLElement);
    var HTMLBlockElement = _$inherit(HTMLElement);
    var HTMLBodyElement = _$inherit(HTMLElement);
    var HTMLButtonElement = _$inherit(HTMLElement);
    var HTMLCanvasElement = _$inherit(HTMLElement);
    var HTMLDDElement = _$inherit(HTMLElement);
    var HTMLDListElement = _$inherit(HTMLElement);
    var HTMLDTElement = _$inherit(HTMLElement);
    var HTMLDataListElement = _$inherit(HTMLElement);
    var HTMLDirectoryElement = _$inherit(HTMLElement);
    var HTMLDivElement = _$inherit(HTMLElement);
    var HTMLEmbedElement = _$inherit(HTMLElement);
    var HTMLFieldSetElement = _$inherit(HTMLElement);
    var HTMLFontElement = _$inherit(HTMLElement);
    var HTMLFormElement = _$inherit(HTMLElement);
    var HTMLFrameElement = _$inherit(HTMLElement);
    var HTMLFrameSetElement = _$inherit(HTMLElement);
    var HTMLHRElement = _$inherit(HTMLElement);
    var HTMLHeadElement = _$inherit(HTMLElement);
    var HTMLHeadingElement = _$inherit(HTMLElement);
    var HTMLHtmlElement = _$inherit(HTMLElement);
    var HTMLIFrameElement = _$inherit(HTMLElement);
    var HTMLImageElement = _$inherit(HTMLElement);
    var HTMLInputElement = _$inherit(HTMLElement);
    var HTMLIsIndexElement = _$inherit(HTMLElement);
    var HTMLLIElement = _$inherit(HTMLElement);
    var HTMLLabelElement = _$inherit(HTMLElement);
    var HTMLLegendElement = _$inherit(HTMLElement);
    var HTMLLinkElement = _$inherit(HTMLElement);
    var HTMLMapElement = _$inherit(HTMLElement);
    var HTMLMarqueeElement = _$inherit(HTMLElement);
    var HTMLMediaElement = _$inherit(HTMLElement);
    var HTMLMenuElement = _$inherit(HTMLElement);
    var HTMLMetaElement = _$inherit(HTMLElement);
    var HTMLModElement = _$inherit(HTMLElement);
    var HTMLNextIdElement = _$inherit(HTMLElement);
    var HTMLOListElement = _$inherit(HTMLElement);
    var HTMLObjectElement = _$inherit(HTMLElement);
    var HTMLOptGroupElement = _$inherit(HTMLElement);
    var HTMLOptionElement = _$inherit(HTMLElement);
    var HTMLParagraphElement = _$inherit(HTMLElement);
    var HTMLParamElement = _$inherit(HTMLElement);
    var HTMLPhraseElement = _$inherit(HTMLElement);
    var HTMLPreElement = _$inherit(HTMLElement);
    var HTMLProgressElement = _$inherit(HTMLElement);
    var HTMLQuoteElement = _$inherit(HTMLElement);
    var HTMLScriptElement = _$inherit(HTMLElement);
    var HTMLSelectElement = _$inherit(HTMLElement);
    var HTMLSourceElement = _$inherit(HTMLElement);
    var HTMLSpanElement = _$inherit(HTMLElement);
    var HTMLStyleElement = _$inherit(HTMLElement);
    var HTMLTableCaptionElement = _$inherit(HTMLElement);
    var HTMLTableCellElement = _$inherit(HTMLElement);
    var HTMLTableColElement = _$inherit(HTMLElement);
    var HTMLTableElement = _$inherit(HTMLElement);
    var HTMLTableRowElement = _$inherit(HTMLElement);
    var HTMLTableSectionElement = _$inherit(HTMLElement);
    var HTMLTextAreaElement = _$inherit(HTMLElement);
    var HTMLTitleElement = _$inherit(HTMLElement);
    var HTMLTrackElement = _$inherit(HTMLElement);
    var HTMLUListElement = _$inherit(HTMLElement);
    var HTMLUnknownElement = _$inherit(HTMLElement);
    var MSHTMLWebViewElement = _$inherit(HTMLElement);
    var SVGAElement = _$inherit(SVGElement);
    var SVGCircleElement = _$inherit(SVGElement);
    var SVGClipPathElement = _$inherit(SVGElement);
    var SVGComponentTransferFunctionElement = _$inherit(SVGElement);
    var SVGDefsElement = _$inherit(SVGElement);
    var SVGDescElement = _$inherit(SVGElement);
    var SVGEllipseElement = _$inherit(SVGElement);
    var SVGFEBlendElement = _$inherit(SVGElement);
    var SVGFEColorMatrixElement = _$inherit(SVGElement);
    var SVGFEComponentTransferElement = _$inherit(SVGElement);
    var SVGFECompositeElement = _$inherit(SVGElement);
    var SVGFEConvolveMatrixElement = _$inherit(SVGElement);
    var SVGFEDiffuseLightingElement = _$inherit(SVGElement);
    var SVGFEDisplacementMapElement = _$inherit(SVGElement);
    var SVGFEDistantLightElement = _$inherit(SVGElement);
    var SVGFEFloodElement = _$inherit(SVGElement);
    var SVGFEGaussianBlurElement = _$inherit(SVGElement);
    var SVGFEImageElement = _$inherit(SVGElement);
    var SVGFEMergeElement = _$inherit(SVGElement);
    var SVGFEMergeNodeElement = _$inherit(SVGElement);
    var SVGFEMorphologyElement = _$inherit(SVGElement);
    var SVGFEOffsetElement = _$inherit(SVGElement);
    var SVGFEPointLightElement = _$inherit(SVGElement);
    var SVGFESpecularLightingElement = _$inherit(SVGElement);
    var SVGFESpotLightElement = _$inherit(SVGElement);
    var SVGFETileElement = _$inherit(SVGElement);
    var SVGFETurbulenceElement = _$inherit(SVGElement);
    var SVGFilterElement = _$inherit(SVGElement);
    var SVGForeignObjectElement = _$inherit(SVGElement);
    var SVGGElement = _$inherit(SVGElement);
    var SVGGradientElement = _$inherit(SVGElement);
    var SVGImageElement = _$inherit(SVGElement);
    var SVGLineElement = _$inherit(SVGElement);
    var SVGMarkerElement = _$inherit(SVGElement);
    var SVGMaskElement = _$inherit(SVGElement);
    var SVGMetadataElement = _$inherit(SVGElement);
    var SVGPathElement = _$inherit(SVGElement);
    var SVGPatternElement = _$inherit(SVGElement);
    var SVGPolygonElement = _$inherit(SVGElement);
    var SVGPolylineElement = _$inherit(SVGElement);
    var SVGRectElement = _$inherit(SVGElement);
    var SVGSVGElement = _$inherit(SVGElement);
    var SVGScriptElement = _$inherit(SVGElement);
    var SVGStopElement = _$inherit(SVGElement);
    var SVGStyleElement = _$inherit(SVGElement);
    var SVGSwitchElement = _$inherit(SVGElement);
    var SVGSymbolElement = _$inherit(SVGElement);
    var SVGTextContentElement = _$inherit(SVGElement);
    var SVGTitleElement = _$inherit(SVGElement);
    var SVGUseElement = _$inherit(SVGElement);
    var SVGViewElement = _$inherit(SVGElement);
    var HTMLAudioElement = _$inherit(HTMLMediaElement);
    var HTMLTableDataCellElement = _$inherit(HTMLTableCellElement);
    var HTMLTableHeaderCellElement = _$inherit(HTMLTableCellElement);
    var HTMLVideoElement = _$inherit(HTMLMediaElement);
    var SVGFEFuncAElement = _$inherit(SVGComponentTransferFunctionElement);
    var SVGFEFuncBElement = _$inherit(SVGComponentTransferFunctionElement);
    var SVGFEFuncGElement = _$inherit(SVGComponentTransferFunctionElement);
    var SVGFEFuncRElement = _$inherit(SVGComponentTransferFunctionElement);
    var SVGLinearGradientElement = _$inherit(SVGGradientElement);
    var SVGRadialGradientElement = _$inherit(SVGGradientElement);
    var SVGTextPathElement = _$inherit(SVGTextContentElement);
    var SVGTextPositioningElement = _$inherit(SVGTextContentElement);
    var SVGTSpanElement = _$inherit(SVGTextPositioningElement);
    var SVGTextElement = _$inherit(SVGTextPositioningElement);
    var Algorithm = {};
    var AriaRequestEventInit = _$inherit(EventInit);
    var ClipboardEventInit = _$inherit(EventInit);
    var CommandEventInit = _$inherit(EventInit);
    var CompositionEventInit = _$inherit(UIEventInit);
    var ConfirmSiteSpecificExceptionsInformation = _$inherit(ExceptionInformation);
    var CustomEventInit = _$inherit(EventInit);
    var DeviceAccelerationDict = {};
    var DeviceRotationRateDict = {};
    var EventInit = {};
    var ExceptionInformation = {};
    var FocusEventInit = _$inherit(UIEventInit);
    var HashChangeEventInit = _$inherit(EventInit);
    var KeyAlgorithm = {};
    var KeyboardEventInit = _$inherit(SharedKeyboardAndMouseEventInit);
    var MouseEventInit = _$inherit(SharedKeyboardAndMouseEventInit);
    var MsZoomToOptions = {};
    var MutationObserverInit = {};
    var ObjectURLOptions = {};
    var PointerEventInit = _$inherit(MouseEventInit);
    var PositionOptions = {};
    var SharedKeyboardAndMouseEventInit = _$inherit(UIEventInit);
    var StoreExceptionsInformation = _$inherit(ExceptionInformation);
    var StoreSiteSpecificExceptionsInformation = _$inherit(StoreExceptionsInformation);
    var UIEventInit = _$inherit(EventInit);
    var WebGLContextAttributes = {};
    var WebGLContextEventInit = _$inherit(EventInit);
    var WheelEventInit = _$inherit(MouseEventInit);
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
    
    /* -- type: ANGLE_instanced_arrays -- */
    
    ANGLE_instanced_arrays.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE = 0x88FE;
    ANGLE_instanced_arrays.drawArraysInstancedANGLE = function(mode, first, count, primcount) {
        /// <signature>
        /// <param name='mode' type='Number'/>
        /// <param name='first' type='Number'/>
        /// <param name='count' type='Number'/>
        /// <param name='primcount' type='Number'/>
        /// </signature>
    };
    ANGLE_instanced_arrays.drawElementsInstancedANGLE = function(mode, count, type, offset, primcount) {
        /// <signature>
        /// <param name='mode' type='Number'/>
        /// <param name='count' type='Number'/>
        /// <param name='type' type='Number'/>
        /// <param name='offset' type='Number'/>
        /// <param name='primcount' type='Number'/>
        /// </signature>
    };
    ANGLE_instanced_arrays.vertexAttribDivisorANGLE = function(index, divisor) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <param name='divisor' type='Number'/>
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
    
    /* -- type: AudioListener -- */
    
    AudioListener.dopplerFactor = 0;
    AudioListener.speedOfSound = 0;
    AudioListener.setOrientation = function(x, y, z, xUp, yUp, zUp) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='z' type='Number'/>
        /// <param name='xUp' type='Number'/>
        /// <param name='yUp' type='Number'/>
        /// <param name='zUp' type='Number'/>
        /// </signature>
    };
    AudioListener.setPosition = function(x, y, z) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='z' type='Number'/>
        /// </signature>
    };
    AudioListener.setVelocity = function(x, y, z) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='z' type='Number'/>
        /// </signature>
    };
    
    /* -- type: AudioParam -- */
    
    AudioParam.defaultValue = 0;
    AudioParam.value = 0;
    AudioParam.cancelScheduledValues = function(startTime) {
        /// <signature>
        /// <param name='startTime' type='Number'/>
        /// </signature>
    };
    AudioParam.exponentialRampToValueAtTime = function(value, endTime) {
        /// <signature>
        /// <param name='value' type='Number'/>
        /// <param name='endTime' type='Number'/>
        /// </signature>
    };
    AudioParam.linearRampToValueAtTime = function(value, endTime) {
        /// <signature>
        /// <param name='value' type='Number'/>
        /// <param name='endTime' type='Number'/>
        /// </signature>
    };
    AudioParam.setTargetAtTime = function(target, startTime, timeConstant) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='startTime' type='Number'/>
        /// <param name='timeConstant' type='Number'/>
        /// </signature>
    };
    AudioParam.setValueAtTime = function(value, startTime) {
        /// <signature>
        /// <param name='value' type='Number'/>
        /// <param name='startTime' type='Number'/>
        /// </signature>
    };
    AudioParam.setValueCurveAtTime = function(values, startTime, duration) {
        /// <signature>
        /// <param name='values' type='Float32Array'/>
        /// <param name='startTime' type='Number'/>
        /// <param name='duration' type='Number'/>
        /// </signature>
    };
    
    /* -- type: AudioTrack -- */
    
    AudioTrack.enabled = false;
    AudioTrack.id = '';
    AudioTrack.kind = '';
    AudioTrack.label = '';
    AudioTrack.language = '';
    AudioTrack.sourceBuffer = SourceBuffer;
    
    /* -- type: BarProp -- */
    
    BarProp.visible = false;
    
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
    
    /* -- type: CSS -- */
    
    CSS.supports = function(property, value) {
        /// <signature>
        /// <param name='property' type='String'/>
        /// <param name='value' type='String' optional='true' />
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    
    /* -- type: CSSRule -- */
    
    CSSRule.cssText = '';
    CSSRule.parentRule = _$getTrackingNull(Object.create(CSSRule));
    CSSRule.parentStyleSheet = CSSStyleSheet;
    CSSRule.type = 0;
    CSSRule.CHARSET_RULE = 2;
    CSSRule.FONT_FACE_RULE = 5;
    CSSRule.IMPORT_RULE = 3;
    CSSRule.KEYFRAMES_RULE = 7;
    CSSRule.KEYFRAME_RULE = 8;
    CSSRule.MEDIA_RULE = 4;
    CSSRule.NAMESPACE_RULE = 10;
    CSSRule.PAGE_RULE = 6;
    CSSRule.STYLE_RULE = 1;
    CSSRule.SUPPORTS_RULE = 12;
    CSSRule.UNKNOWN_RULE = 0;
    CSSRule.VIEWPORT_RULE = 15;
    
    /* -- type: CSSRuleList -- */
    
    CSSRuleList.length = 0;
    CSSRuleList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='CSSRule'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(CSSRule));
    };
    /* Add a single array element */
    CSSRuleList[0] = _$getTrackingNull(Object.create(CSSRule));
    
    /* -- type: CSSStyleDeclaration -- */
    
    CSSStyleDeclaration.alignContent = '';
    CSSStyleDeclaration.alignItems = '';
    CSSStyleDeclaration.alignSelf = '';
    CSSStyleDeclaration.alignmentBaseline = '';
    CSSStyleDeclaration.animation = '';
    CSSStyleDeclaration.animationDelay = '';
    CSSStyleDeclaration.animationDirection = '';
    CSSStyleDeclaration.animationDuration = '';
    CSSStyleDeclaration.animationFillMode = '';
    CSSStyleDeclaration.animationIterationCount = '';
    CSSStyleDeclaration.animationName = '';
    CSSStyleDeclaration.animationPlayState = '';
    CSSStyleDeclaration.animationTimingFunction = '';
    CSSStyleDeclaration.backfaceVisibility = '';
    CSSStyleDeclaration.background = '';
    CSSStyleDeclaration.backgroundAttachment = '';
    CSSStyleDeclaration.backgroundClip = '';
    CSSStyleDeclaration.backgroundColor = '';
    CSSStyleDeclaration.backgroundImage = '';
    CSSStyleDeclaration.backgroundOrigin = '';
    CSSStyleDeclaration.backgroundPosition = '';
    CSSStyleDeclaration.backgroundPositionX = '';
    CSSStyleDeclaration.backgroundPositionY = '';
    CSSStyleDeclaration.backgroundRepeat = '';
    CSSStyleDeclaration.backgroundSize = '';
    CSSStyleDeclaration.baselineShift = '';
    CSSStyleDeclaration.border = '';
    CSSStyleDeclaration.borderBottom = '';
    CSSStyleDeclaration.borderBottomColor = '';
    CSSStyleDeclaration.borderBottomLeftRadius = '';
    CSSStyleDeclaration.borderBottomRightRadius = '';
    CSSStyleDeclaration.borderBottomStyle = '';
    CSSStyleDeclaration.borderBottomWidth = '';
    CSSStyleDeclaration.borderCollapse = '';
    CSSStyleDeclaration.borderColor = '';
    CSSStyleDeclaration.borderImage = '';
    CSSStyleDeclaration.borderImageOutset = '';
    CSSStyleDeclaration.borderImageRepeat = '';
    CSSStyleDeclaration.borderImageSlice = '';
    CSSStyleDeclaration.borderImageSource = '';
    CSSStyleDeclaration.borderImageWidth = '';
    CSSStyleDeclaration.borderLeft = '';
    CSSStyleDeclaration.borderLeftColor = '';
    CSSStyleDeclaration.borderLeftStyle = '';
    CSSStyleDeclaration.borderLeftWidth = '';
    CSSStyleDeclaration.borderRadius = '';
    CSSStyleDeclaration.borderRight = '';
    CSSStyleDeclaration.borderRightColor = '';
    CSSStyleDeclaration.borderRightStyle = '';
    CSSStyleDeclaration.borderRightWidth = '';
    CSSStyleDeclaration.borderSpacing = '';
    CSSStyleDeclaration.borderStyle = '';
    CSSStyleDeclaration.borderTop = '';
    CSSStyleDeclaration.borderTopColor = '';
    CSSStyleDeclaration.borderTopLeftRadius = '';
    CSSStyleDeclaration.borderTopRightRadius = '';
    CSSStyleDeclaration.borderTopStyle = '';
    CSSStyleDeclaration.borderTopWidth = '';
    CSSStyleDeclaration.borderWidth = '';
    CSSStyleDeclaration.bottom = '';
    CSSStyleDeclaration.boxShadow = '';
    CSSStyleDeclaration.boxSizing = '';
    CSSStyleDeclaration.breakAfter = '';
    CSSStyleDeclaration.breakBefore = '';
    CSSStyleDeclaration.breakInside = '';
    CSSStyleDeclaration.captionSide = '';
    CSSStyleDeclaration.clear = '';
    CSSStyleDeclaration.clip = '';
    CSSStyleDeclaration.clipPath = '';
    CSSStyleDeclaration.clipRule = '';
    CSSStyleDeclaration.color = '';
    CSSStyleDeclaration.colorInterpolationFilters = '';
    CSSStyleDeclaration.columnCount = {};
    CSSStyleDeclaration.columnFill = '';
    CSSStyleDeclaration.columnGap = {};
    CSSStyleDeclaration.columnRule = '';
    CSSStyleDeclaration.columnRuleColor = {};
    CSSStyleDeclaration.columnRuleStyle = '';
    CSSStyleDeclaration.columnRuleWidth = {};
    CSSStyleDeclaration.columnSpan = '';
    CSSStyleDeclaration.columnWidth = {};
    CSSStyleDeclaration.columns = '';
    CSSStyleDeclaration.content = '';
    CSSStyleDeclaration.counterIncrement = '';
    CSSStyleDeclaration.counterReset = '';
    CSSStyleDeclaration.cssFloat = '';
    CSSStyleDeclaration.cssText = '';
    CSSStyleDeclaration.cursor = '';
    CSSStyleDeclaration.direction = '';
    CSSStyleDeclaration.display = '';
    CSSStyleDeclaration.dominantBaseline = '';
    CSSStyleDeclaration.emptyCells = '';
    CSSStyleDeclaration.enableBackground = '';
    CSSStyleDeclaration.fill = '';
    CSSStyleDeclaration.fillOpacity = '';
    CSSStyleDeclaration.fillRule = '';
    CSSStyleDeclaration.filter = '';
    CSSStyleDeclaration.flex = '';
    CSSStyleDeclaration.flexBasis = '';
    CSSStyleDeclaration.flexDirection = '';
    CSSStyleDeclaration.flexFlow = '';
    CSSStyleDeclaration.flexGrow = '';
    CSSStyleDeclaration.flexShrink = '';
    CSSStyleDeclaration.flexWrap = '';
    CSSStyleDeclaration.floodColor = '';
    CSSStyleDeclaration.floodOpacity = '';
    CSSStyleDeclaration.font = '';
    CSSStyleDeclaration.fontFamily = '';
    CSSStyleDeclaration.fontFeatureSettings = '';
    CSSStyleDeclaration.fontSize = '';
    CSSStyleDeclaration.fontSizeAdjust = '';
    CSSStyleDeclaration.fontStretch = '';
    CSSStyleDeclaration.fontStyle = '';
    CSSStyleDeclaration.fontVariant = '';
    CSSStyleDeclaration.fontWeight = '';
    CSSStyleDeclaration.glyphOrientationHorizontal = '';
    CSSStyleDeclaration.glyphOrientationVertical = '';
    CSSStyleDeclaration.height = '';
    CSSStyleDeclaration.imeMode = '';
    CSSStyleDeclaration.justifyContent = '';
    CSSStyleDeclaration.kerning = '';
    CSSStyleDeclaration.left = '';
    CSSStyleDeclaration.length = 0;
    CSSStyleDeclaration.letterSpacing = '';
    CSSStyleDeclaration.lightingColor = '';
    CSSStyleDeclaration.lineHeight = '';
    CSSStyleDeclaration.listStyle = '';
    CSSStyleDeclaration.listStyleImage = '';
    CSSStyleDeclaration.listStylePosition = '';
    CSSStyleDeclaration.listStyleType = '';
    CSSStyleDeclaration.margin = '';
    CSSStyleDeclaration.marginBottom = '';
    CSSStyleDeclaration.marginLeft = '';
    CSSStyleDeclaration.marginRight = '';
    CSSStyleDeclaration.marginTop = '';
    CSSStyleDeclaration.marker = '';
    CSSStyleDeclaration.markerEnd = '';
    CSSStyleDeclaration.markerMid = '';
    CSSStyleDeclaration.markerStart = '';
    CSSStyleDeclaration.mask = '';
    CSSStyleDeclaration.maxHeight = '';
    CSSStyleDeclaration.maxWidth = '';
    CSSStyleDeclaration.minHeight = '';
    CSSStyleDeclaration.minWidth = '';
    CSSStyleDeclaration.msContentZoomChaining = '';
    CSSStyleDeclaration.msContentZoomLimit = '';
    CSSStyleDeclaration.msContentZoomLimitMax = {};
    CSSStyleDeclaration.msContentZoomLimitMin = {};
    CSSStyleDeclaration.msContentZoomSnap = '';
    CSSStyleDeclaration.msContentZoomSnapPoints = '';
    CSSStyleDeclaration.msContentZoomSnapType = '';
    CSSStyleDeclaration.msContentZooming = '';
    CSSStyleDeclaration.msFlowFrom = '';
    CSSStyleDeclaration.msFlowInto = '';
    CSSStyleDeclaration.msFontFeatureSettings = '';
    CSSStyleDeclaration.msGridColumn = {};
    CSSStyleDeclaration.msGridColumnAlign = '';
    CSSStyleDeclaration.msGridColumnSpan = {};
    CSSStyleDeclaration.msGridColumns = '';
    CSSStyleDeclaration.msGridRow = {};
    CSSStyleDeclaration.msGridRowAlign = '';
    CSSStyleDeclaration.msGridRowSpan = {};
    CSSStyleDeclaration.msGridRows = '';
    CSSStyleDeclaration.msHighContrastAdjust = '';
    CSSStyleDeclaration.msHyphenateLimitChars = '';
    CSSStyleDeclaration.msHyphenateLimitLines = {};
    CSSStyleDeclaration.msHyphenateLimitZone = {};
    CSSStyleDeclaration.msHyphens = '';
    CSSStyleDeclaration.msImeAlign = '';
    CSSStyleDeclaration.msOverflowStyle = '';
    CSSStyleDeclaration.msScrollChaining = '';
    CSSStyleDeclaration.msScrollLimit = '';
    CSSStyleDeclaration.msScrollLimitXMax = {};
    CSSStyleDeclaration.msScrollLimitXMin = {};
    CSSStyleDeclaration.msScrollLimitYMax = {};
    CSSStyleDeclaration.msScrollLimitYMin = {};
    CSSStyleDeclaration.msScrollRails = '';
    CSSStyleDeclaration.msScrollSnapPointsX = '';
    CSSStyleDeclaration.msScrollSnapPointsY = '';
    CSSStyleDeclaration.msScrollSnapType = '';
    CSSStyleDeclaration.msScrollSnapX = '';
    CSSStyleDeclaration.msScrollSnapY = '';
    CSSStyleDeclaration.msScrollTranslation = '';
    CSSStyleDeclaration.msTextCombineHorizontal = '';
    CSSStyleDeclaration.msTextSizeAdjust = {};
    CSSStyleDeclaration.msTouchAction = '';
    CSSStyleDeclaration.msTouchSelect = '';
    CSSStyleDeclaration.msUserSelect = '';
    CSSStyleDeclaration.msWrapFlow = '';
    CSSStyleDeclaration.msWrapMargin = {};
    CSSStyleDeclaration.msWrapThrough = '';
    CSSStyleDeclaration.opacity = '';
    CSSStyleDeclaration.order = '';
    CSSStyleDeclaration.orphans = '';
    CSSStyleDeclaration.outline = '';
    CSSStyleDeclaration.outlineColor = '';
    CSSStyleDeclaration.outlineStyle = '';
    CSSStyleDeclaration.outlineWidth = '';
    CSSStyleDeclaration.overflow = '';
    CSSStyleDeclaration.overflowX = '';
    CSSStyleDeclaration.overflowY = '';
    CSSStyleDeclaration.padding = '';
    CSSStyleDeclaration.paddingBottom = '';
    CSSStyleDeclaration.paddingLeft = '';
    CSSStyleDeclaration.paddingRight = '';
    CSSStyleDeclaration.paddingTop = '';
    CSSStyleDeclaration.pageBreakAfter = '';
    CSSStyleDeclaration.pageBreakBefore = '';
    CSSStyleDeclaration.pageBreakInside = '';
    CSSStyleDeclaration.parentRule = CSSRule;
    CSSStyleDeclaration.perspective = '';
    CSSStyleDeclaration.perspectiveOrigin = '';
    CSSStyleDeclaration.pointerEvents = '';
    CSSStyleDeclaration.position = '';
    CSSStyleDeclaration.quotes = '';
    CSSStyleDeclaration.right = '';
    CSSStyleDeclaration.rubyAlign = '';
    CSSStyleDeclaration.rubyOverhang = '';
    CSSStyleDeclaration.rubyPosition = '';
    CSSStyleDeclaration.stopColor = '';
    CSSStyleDeclaration.stopOpacity = '';
    CSSStyleDeclaration.stroke = '';
    CSSStyleDeclaration.strokeDasharray = '';
    CSSStyleDeclaration.strokeDashoffset = '';
    CSSStyleDeclaration.strokeLinecap = '';
    CSSStyleDeclaration.strokeLinejoin = '';
    CSSStyleDeclaration.strokeMiterlimit = '';
    CSSStyleDeclaration.strokeOpacity = '';
    CSSStyleDeclaration.strokeWidth = '';
    CSSStyleDeclaration.tableLayout = '';
    CSSStyleDeclaration.textAlign = '';
    CSSStyleDeclaration.textAlignLast = '';
    CSSStyleDeclaration.textAnchor = '';
    CSSStyleDeclaration.textDecoration = '';
    CSSStyleDeclaration.textFillColor = '';
    CSSStyleDeclaration.textIndent = '';
    CSSStyleDeclaration.textJustify = '';
    CSSStyleDeclaration.textKashida = '';
    CSSStyleDeclaration.textKashidaSpace = '';
    CSSStyleDeclaration.textOverflow = '';
    CSSStyleDeclaration.textShadow = '';
    CSSStyleDeclaration.textTransform = '';
    CSSStyleDeclaration.textUnderlinePosition = '';
    CSSStyleDeclaration.top = '';
    CSSStyleDeclaration.touchAction = '';
    CSSStyleDeclaration.transform = '';
    CSSStyleDeclaration.transformOrigin = '';
    CSSStyleDeclaration.transformStyle = '';
    CSSStyleDeclaration.transition = '';
    CSSStyleDeclaration.transitionDelay = '';
    CSSStyleDeclaration.transitionDuration = '';
    CSSStyleDeclaration.transitionProperty = '';
    CSSStyleDeclaration.transitionTimingFunction = '';
    CSSStyleDeclaration.unicodeBidi = '';
    CSSStyleDeclaration.verticalAlign = '';
    CSSStyleDeclaration.visibility = '';
    CSSStyleDeclaration.webkitAlignContent = '';
    CSSStyleDeclaration.webkitAlignItems = '';
    CSSStyleDeclaration.webkitAlignSelf = '';
    CSSStyleDeclaration.webkitAnimation = '';
    CSSStyleDeclaration.webkitAnimationDelay = '';
    CSSStyleDeclaration.webkitAnimationDirection = '';
    CSSStyleDeclaration.webkitAnimationDuration = '';
    CSSStyleDeclaration.webkitAnimationFillMode = '';
    CSSStyleDeclaration.webkitAnimationIterationCount = '';
    CSSStyleDeclaration.webkitAnimationName = '';
    CSSStyleDeclaration.webkitAnimationPlayState = '';
    CSSStyleDeclaration.webkitAnimationTimingFunction = '';
    CSSStyleDeclaration.webkitAppearance = '';
    CSSStyleDeclaration.webkitBackfaceVisibility = '';
    CSSStyleDeclaration.webkitBackground = '';
    CSSStyleDeclaration.webkitBackgroundAttachment = '';
    CSSStyleDeclaration.webkitBackgroundClip = '';
    CSSStyleDeclaration.webkitBackgroundColor = '';
    CSSStyleDeclaration.webkitBackgroundImage = '';
    CSSStyleDeclaration.webkitBackgroundOrigin = '';
    CSSStyleDeclaration.webkitBackgroundPosition = '';
    CSSStyleDeclaration.webkitBackgroundPositionX = '';
    CSSStyleDeclaration.webkitBackgroundPositionY = '';
    CSSStyleDeclaration.webkitBackgroundRepeat = '';
    CSSStyleDeclaration.webkitBackgroundSize = '';
    CSSStyleDeclaration.webkitBorderBottomLeftRadius = '';
    CSSStyleDeclaration.webkitBorderBottomRightRadius = '';
    CSSStyleDeclaration.webkitBorderImage = '';
    CSSStyleDeclaration.webkitBorderImageOutset = '';
    CSSStyleDeclaration.webkitBorderImageRepeat = '';
    CSSStyleDeclaration.webkitBorderImageSlice = '';
    CSSStyleDeclaration.webkitBorderImageSource = '';
    CSSStyleDeclaration.webkitBorderImageWidth = '';
    CSSStyleDeclaration.webkitBorderRadius = '';
    CSSStyleDeclaration.webkitBorderTopLeftRadius = '';
    CSSStyleDeclaration.webkitBorderTopRightRadius = '';
    CSSStyleDeclaration.webkitBoxAlign = '';
    CSSStyleDeclaration.webkitBoxDirection = '';
    CSSStyleDeclaration.webkitBoxFlex = '';
    CSSStyleDeclaration.webkitBoxOrdinalGroup = '';
    CSSStyleDeclaration.webkitBoxOrient = '';
    CSSStyleDeclaration.webkitBoxPack = '';
    CSSStyleDeclaration.webkitBoxSizing = '';
    CSSStyleDeclaration.webkitColumnBreakAfter = '';
    CSSStyleDeclaration.webkitColumnBreakBefore = '';
    CSSStyleDeclaration.webkitColumnBreakInside = '';
    CSSStyleDeclaration.webkitColumnCount = {};
    CSSStyleDeclaration.webkitColumnGap = {};
    CSSStyleDeclaration.webkitColumnRule = '';
    CSSStyleDeclaration.webkitColumnRuleColor = {};
    CSSStyleDeclaration.webkitColumnRuleStyle = '';
    CSSStyleDeclaration.webkitColumnRuleWidth = {};
    CSSStyleDeclaration.webkitColumnSpan = '';
    CSSStyleDeclaration.webkitColumnWidth = {};
    CSSStyleDeclaration.webkitColumns = '';
    CSSStyleDeclaration.webkitFilter = '';
    CSSStyleDeclaration.webkitFlex = '';
    CSSStyleDeclaration.webkitFlexBasis = '';
    CSSStyleDeclaration.webkitFlexDirection = '';
    CSSStyleDeclaration.webkitFlexFlow = '';
    CSSStyleDeclaration.webkitFlexGrow = '';
    CSSStyleDeclaration.webkitFlexShrink = '';
    CSSStyleDeclaration.webkitFlexWrap = '';
    CSSStyleDeclaration.webkitJustifyContent = '';
    CSSStyleDeclaration.webkitOrder = '';
    CSSStyleDeclaration.webkitPerspective = '';
    CSSStyleDeclaration.webkitPerspectiveOrigin = '';
    CSSStyleDeclaration.webkitTapHighlightColor = '';
    CSSStyleDeclaration.webkitTextFillColor = '';
    CSSStyleDeclaration.webkitTextSizeAdjust = {};
    CSSStyleDeclaration.webkitTransform = '';
    CSSStyleDeclaration.webkitTransformOrigin = '';
    CSSStyleDeclaration.webkitTransformStyle = '';
    CSSStyleDeclaration.webkitTransition = '';
    CSSStyleDeclaration.webkitTransitionDelay = '';
    CSSStyleDeclaration.webkitTransitionDuration = '';
    CSSStyleDeclaration.webkitTransitionProperty = '';
    CSSStyleDeclaration.webkitTransitionTimingFunction = '';
    CSSStyleDeclaration.webkitUserSelect = '';
    CSSStyleDeclaration.webkitWritingMode = '';
    CSSStyleDeclaration.whiteSpace = '';
    CSSStyleDeclaration.widows = '';
    CSSStyleDeclaration.width = '';
    CSSStyleDeclaration.wordBreak = '';
    CSSStyleDeclaration.wordSpacing = '';
    CSSStyleDeclaration.wordWrap = '';
    CSSStyleDeclaration.writingMode = '';
    CSSStyleDeclaration.zIndex = '';
    CSSStyleDeclaration.zoom = '';
    CSSStyleDeclaration.getPropertyPriority = function(propertyName) {
        /// <signature>
        /// <param name='propertyName' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    CSSStyleDeclaration.getPropertyValue = function(propertyName) {
        /// <signature>
        /// <param name='propertyName' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    CSSStyleDeclaration.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    CSSStyleDeclaration.removeProperty = function(propertyName) {
        /// <signature>
        /// <param name='propertyName' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    CSSStyleDeclaration.setProperty = function(propertyName, value, priority) {
        /// <signature>
        /// <param name='propertyName' type='String'/>
        /// <param name='value' type='String'/>
        /// <param name='priority' type='String' optional='true' />
        /// </signature>
    };
    
    /* -- type: CanvasGradient -- */
    
    CanvasGradient.addColorStop = function(offset, color) {
        /// <signature>
        /// <param name='offset' type='Number'/>
        /// <param name='color' type='String'/>
        /// </signature>
    };
    
    /* -- type: CanvasPattern -- */
    
    
    /* -- type: CanvasRenderingContext2D -- */
    
    CanvasRenderingContext2D.canvas = HTMLCanvasElement;
    CanvasRenderingContext2D.fillStyle = {};
    CanvasRenderingContext2D.font = '';
    CanvasRenderingContext2D.globalAlpha = 0;
    CanvasRenderingContext2D.globalCompositeOperation = '';
    CanvasRenderingContext2D.lineCap = '';
    CanvasRenderingContext2D.lineDashOffset = 0;
    CanvasRenderingContext2D.lineJoin = '';
    CanvasRenderingContext2D.lineWidth = 0;
    CanvasRenderingContext2D.miterLimit = 0;
    CanvasRenderingContext2D.msFillRule = '';
    CanvasRenderingContext2D.msImageSmoothingEnabled = false;
    CanvasRenderingContext2D.shadowBlur = 0;
    CanvasRenderingContext2D.shadowColor = '';
    CanvasRenderingContext2D.shadowOffsetX = 0;
    CanvasRenderingContext2D.shadowOffsetY = 0;
    CanvasRenderingContext2D.strokeStyle = {};
    CanvasRenderingContext2D.textAlign = '';
    CanvasRenderingContext2D.textBaseline = '';
    CanvasRenderingContext2D.arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='radius' type='Number'/>
        /// <param name='startAngle' type='Number'/>
        /// <param name='endAngle' type='Number'/>
        /// <param name='anticlockwise' type='Boolean' optional='true' />
        /// </signature>
    };
    CanvasRenderingContext2D.arcTo = function(x1, y1, x2, y2, radius) {
        /// <signature>
        /// <param name='x1' type='Number'/>
        /// <param name='y1' type='Number'/>
        /// <param name='x2' type='Number'/>
        /// <param name='y2' type='Number'/>
        /// <param name='radius' type='Number'/>
        /// </signature>
    };
    CanvasRenderingContext2D.beginPath = function() {
    };
    CanvasRenderingContext2D.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
        /// <signature>
        /// <param name='cp1x' type='Number'/>
        /// <param name='cp1y' type='Number'/>
        /// <param name='cp2x' type='Number'/>
        /// <param name='cp2y' type='Number'/>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// </signature>
    };
    CanvasRenderingContext2D.clearRect = function(x, y, w, h) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='w' type='Number'/>
        /// <param name='h' type='Number'/>
        /// </signature>
    };
    CanvasRenderingContext2D.clip = function(fillRule) {
        /// <signature>
        /// <param name='fillRule' type='String' optional='true' />
        /// </signature>
    };
    CanvasRenderingContext2D.closePath = function() {
    };
    CanvasRenderingContext2D.createImageData = function(imageDataOrSw, sh) {
        /// <signature>
        /// <param name='imageDataOrSw' type='Number'/>
        /// <param name='sh' type='Number' optional='true' />
        /// <returns type='ImageData'/>
        /// </signature>
        /// <signature>
        /// <param name='imageDataOrSw' type='ImageData'/>
        /// <param name='sh' type='Number' optional='true' />
        /// <returns type='ImageData'/>
        /// </signature>
        return ImageData;
    };
    CanvasRenderingContext2D.createLinearGradient = function(x0, y0, x1, y1) {
        /// <signature>
        /// <param name='x0' type='Number'/>
        /// <param name='y0' type='Number'/>
        /// <param name='x1' type='Number'/>
        /// <param name='y1' type='Number'/>
        /// <returns type='CanvasGradient'/>
        /// </signature>
        return CanvasGradient;
    };
    CanvasRenderingContext2D.createPattern = function(image, repetition) {
        /// <signature>
        /// <param name='image' type='HTMLImageElement'/>
        /// <param name='repetition' type='String'/>
        /// <returns type='CanvasPattern'/>
        /// </signature>
        /// <signature>
        /// <param name='image' type='HTMLCanvasElement'/>
        /// <param name='repetition' type='String'/>
        /// <returns type='CanvasPattern'/>
        /// </signature>
        /// <signature>
        /// <param name='image' type='HTMLVideoElement'/>
        /// <param name='repetition' type='String'/>
        /// <returns type='CanvasPattern'/>
        /// </signature>
        return CanvasPattern;
    };
    CanvasRenderingContext2D.createRadialGradient = function(x0, y0, r0, x1, y1, r1) {
        /// <signature>
        /// <param name='x0' type='Number'/>
        /// <param name='y0' type='Number'/>
        /// <param name='r0' type='Number'/>
        /// <param name='x1' type='Number'/>
        /// <param name='y1' type='Number'/>
        /// <param name='r1' type='Number'/>
        /// <returns type='CanvasGradient'/>
        /// </signature>
        return CanvasGradient;
    };
    CanvasRenderingContext2D.drawImage = function(image, offsetX, offsetY, width, height, canvasOffsetX, canvasOffsetY, canvasImageWidth, canvasImageHeight) {
        /// <signature>
        /// <param name='image' type='HTMLImageElement'/>
        /// <param name='offsetX' type='Number'/>
        /// <param name='offsetY' type='Number'/>
        /// <param name='width' type='Number' optional='true' />
        /// <param name='height' type='Number' optional='true' />
        /// <param name='canvasOffsetX' type='Number' optional='true' />
        /// <param name='canvasOffsetY' type='Number' optional='true' />
        /// <param name='canvasImageWidth' type='Number' optional='true' />
        /// <param name='canvasImageHeight' type='Number' optional='true' />
        /// </signature>
        /// <signature>
        /// <param name='image' type='HTMLCanvasElement'/>
        /// <param name='offsetX' type='Number'/>
        /// <param name='offsetY' type='Number'/>
        /// <param name='width' type='Number' optional='true' />
        /// <param name='height' type='Number' optional='true' />
        /// <param name='canvasOffsetX' type='Number' optional='true' />
        /// <param name='canvasOffsetY' type='Number' optional='true' />
        /// <param name='canvasImageWidth' type='Number' optional='true' />
        /// <param name='canvasImageHeight' type='Number' optional='true' />
        /// </signature>
        /// <signature>
        /// <param name='image' type='HTMLVideoElement'/>
        /// <param name='offsetX' type='Number'/>
        /// <param name='offsetY' type='Number'/>
        /// <param name='width' type='Number' optional='true' />
        /// <param name='height' type='Number' optional='true' />
        /// <param name='canvasOffsetX' type='Number' optional='true' />
        /// <param name='canvasOffsetY' type='Number' optional='true' />
        /// <param name='canvasImageWidth' type='Number' optional='true' />
        /// <param name='canvasImageHeight' type='Number' optional='true' />
        /// </signature>
    };
    CanvasRenderingContext2D.fill = function(fillRule) {
        /// <signature>
        /// <param name='fillRule' type='String' optional='true' />
        /// </signature>
    };
    CanvasRenderingContext2D.fillRect = function(x, y, w, h) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='w' type='Number'/>
        /// <param name='h' type='Number'/>
        /// </signature>
    };
    CanvasRenderingContext2D.fillText = function(text, x, y, maxWidth) {
        /// <signature>
        /// <param name='text' type='String'/>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='maxWidth' type='Number' optional='true' />
        /// </signature>
    };
    CanvasRenderingContext2D.getImageData = function(sx, sy, sw, sh) {
        /// <signature>
        /// <param name='sx' type='Number'/>
        /// <param name='sy' type='Number'/>
        /// <param name='sw' type='Number'/>
        /// <param name='sh' type='Number'/>
        /// <returns type='ImageData'/>
        /// </signature>
        return ImageData;
    };
    CanvasRenderingContext2D.getLineDash = function() {
        /// <signature>
        /// <returns type='Array' elementType='Number'/>
        /// </signature>
        return [];
    };
    CanvasRenderingContext2D.isPointInPath = function(x, y, fillRule) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='fillRule' type='String' optional='true' />
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    CanvasRenderingContext2D.lineTo = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// </signature>
    };
    CanvasRenderingContext2D.measureText = function(text) {
        /// <signature>
        /// <param name='text' type='String'/>
        /// <returns type='TextMetrics'/>
        /// </signature>
        return TextMetrics;
    };
    CanvasRenderingContext2D.moveTo = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// </signature>
    };
    CanvasRenderingContext2D.putImageData = function(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
        /// <signature>
        /// <param name='imagedata' type='ImageData'/>
        /// <param name='dx' type='Number'/>
        /// <param name='dy' type='Number'/>
        /// <param name='dirtyX' type='Number' optional='true' />
        /// <param name='dirtyY' type='Number' optional='true' />
        /// <param name='dirtyWidth' type='Number' optional='true' />
        /// <param name='dirtyHeight' type='Number' optional='true' />
        /// </signature>
    };
    CanvasRenderingContext2D.quadraticCurveTo = function(cpx, cpy, x, y) {
        /// <signature>
        /// <param name='cpx' type='Number'/>
        /// <param name='cpy' type='Number'/>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// </signature>
    };
    CanvasRenderingContext2D.rect = function(x, y, w, h) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='w' type='Number'/>
        /// <param name='h' type='Number'/>
        /// </signature>
    };
    CanvasRenderingContext2D.restore = function() {
    };
    CanvasRenderingContext2D.rotate = function(angle) {
        /// <signature>
        /// <param name='angle' type='Number'/>
        /// </signature>
    };
    CanvasRenderingContext2D.save = function() {
    };
    CanvasRenderingContext2D.scale = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// </signature>
    };
    CanvasRenderingContext2D.setLineDash = function(segments) {
        /// <signature>
        /// <param name='segments' type='Array' elementType='Number' />
        /// </signature>
    };
    CanvasRenderingContext2D.setTransform = function(m11, m12, m21, m22, dx, dy) {
        /// <signature>
        /// <param name='m11' type='Number'/>
        /// <param name='m12' type='Number'/>
        /// <param name='m21' type='Number'/>
        /// <param name='m22' type='Number'/>
        /// <param name='dx' type='Number'/>
        /// <param name='dy' type='Number'/>
        /// </signature>
    };
    CanvasRenderingContext2D.stroke = function() {
    };
    CanvasRenderingContext2D.strokeRect = function(x, y, w, h) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='w' type='Number'/>
        /// <param name='h' type='Number'/>
        /// </signature>
    };
    CanvasRenderingContext2D.strokeText = function(text, x, y, maxWidth) {
        /// <signature>
        /// <param name='text' type='String'/>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='maxWidth' type='Number' optional='true' />
        /// </signature>
    };
    CanvasRenderingContext2D.transform = function(m11, m12, m21, m22, dx, dy) {
        /// <signature>
        /// <param name='m11' type='Number'/>
        /// <param name='m12' type='Number'/>
        /// <param name='m21' type='Number'/>
        /// <param name='m22' type='Number'/>
        /// <param name='dx' type='Number'/>
        /// <param name='dy' type='Number'/>
        /// </signature>
    };
    CanvasRenderingContext2D.translate = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// </signature>
    };
    
    /* -- type: ClientRect -- */
    
    ClientRect.bottom = 0;
    ClientRect.height = 0;
    ClientRect.left = 0;
    ClientRect.right = 0;
    ClientRect.top = 0;
    ClientRect.width = 0;
    
    /* -- type: ClientRectList -- */
    
    ClientRectList.length = 0;
    ClientRectList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='ClientRect'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(ClientRect));
    };
    /* Add a single array element */
    ClientRectList[0] = _$getTrackingNull(Object.create(ClientRect));
    
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
        /// <param name='element' type='Element'/>
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
        /// <param name='element' type='Element'/>
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
    
    /* -- type: CryptoKey -- */
    
    CryptoKey.algorithm = KeyAlgorithm;
    CryptoKey.extractable = false;
    CryptoKey.type = '';
    CryptoKey.usages = [];
    
    /* -- type: CryptoKeyPair -- */
    
    CryptoKeyPair.privateKey = CryptoKey;
    CryptoKeyPair.publicKey = CryptoKey;
    
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
    
    /* -- type: DOMImplementation -- */
    
    DOMImplementation.createDocument = function(namespaceURI, qualifiedName, doctype) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <param name='qualifiedName' type='String'/>
        /// <param name='doctype' type='DocumentType'/>
        /// <returns type='Document'/>
        /// </signature>
        return Document;
    };
    DOMImplementation.createDocumentType = function(qualifiedName, publicId, systemId) {
        /// <signature>
        /// <param name='qualifiedName' type='String'/>
        /// <param name='publicId' type='String'/>
        /// <param name='systemId' type='String'/>
        /// <returns type='DocumentType'/>
        /// </signature>
        return DocumentType;
    };
    DOMImplementation.createHTMLDocument = function(title) {
        /// <signature>
        /// <param name='title' type='String'/>
        /// <returns type='Document'/>
        /// </signature>
        return Document;
    };
    DOMImplementation.hasFeature = function(feature, version) {
        /// <signature>
        /// <param name='feature' type='String'/>
        /// <param name='version' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    
    /* -- type: DOMParser -- */
    
    DOMParser.parseFromString = function(source, mimeType) {
        /// <signature>
        /// <param name='source' type='String'/>
        /// <param name='mimeType' type='String'/>
        /// <returns type='Document'/>
        /// </signature>
        return Document;
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
    
    /* -- type: DOMStringMap -- */
    
    
    /* -- type: DOMTokenList -- */
    
    DOMTokenList.length = 0;
    DOMTokenList.add = function(token) {
        /// <signature>
        /// <param name='token' type='String'/>
        /// </signature>
    };
    DOMTokenList.contains = function(token) {
        /// <signature>
        /// <param name='token' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    DOMTokenList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='String'/>
        /// </signature>
        return this[index] || _$getTrackingNull('');
    };
    DOMTokenList.remove = function(token) {
        /// <signature>
        /// <param name='token' type='String'/>
        /// </signature>
    };
    DOMTokenList.toString = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    DOMTokenList.toggle = function(token, force) {
        /// <signature>
        /// <param name='token' type='String'/>
        /// <param name='force' type='Boolean' optional='true' />
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    /* Add a single array element */
    DOMTokenList[0] = _$getTrackingNull('');
    
    /* -- type: DataTransfer -- */
    
    DataTransfer.dropEffect = '';
    DataTransfer.effectAllowed = '';
    DataTransfer.files = FileList;
    DataTransfer.items = DataTransferItemList;
    DataTransfer.types = DOMStringList;
    DataTransfer.clearData = function(format) {
        /// <signature>
        /// <param name='format' type='String' optional='true' />
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    DataTransfer.getData = function(format) {
        /// <signature>
        /// <param name='format' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    DataTransfer.setData = function(format, data) {
        /// <signature>
        /// <param name='format' type='String'/>
        /// <param name='data' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    
    /* -- type: DataTransferItem -- */
    
    DataTransferItem.kind = '';
    DataTransferItem.type = '';
    DataTransferItem.getAsFile = function() {
        /// <signature>
        /// <returns type='File'/>
        /// </signature>
        return File;
    };
    DataTransferItem.getAsString = function(_callback) {
        /// <signature>
        /// <param name='_callback' type='FunctionStringCallback'/>
        /// </signature>
    };
    
    /* -- type: DataTransferItemList -- */
    
    DataTransferItemList.length = 0;
    DataTransferItemList.add = function(data) {
        /// <signature>
        /// <param name='data' type='File'/>
        /// <returns type='DataTransferItem'/>
        /// </signature>
        return DataTransferItem;
    };
    DataTransferItemList.clear = function() {
    };
    DataTransferItemList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='File'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(File));
    };
    DataTransferItemList.remove = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// </signature>
    };
    /* Add a single array element */
    DataTransferItemList[0] = _$getTrackingNull(Object.create(File));
    
    /* -- type: DeferredPermissionRequest -- */
    
    DeferredPermissionRequest.id = 0;
    DeferredPermissionRequest.type = '';
    DeferredPermissionRequest.uri = '';
    DeferredPermissionRequest.allow = function() {
    };
    DeferredPermissionRequest.deny = function() {
    };
    
    /* -- type: DeviceAcceleration -- */
    
    DeviceAcceleration.x = 0;
    DeviceAcceleration.y = 0;
    DeviceAcceleration.z = 0;
    
    /* -- type: DeviceRotationRate -- */
    
    DeviceRotationRate.alpha = 0;
    DeviceRotationRate.beta = 0;
    DeviceRotationRate.gamma = 0;
    
    /* -- type: EXT_texture_filter_anisotropic -- */
    
    EXT_texture_filter_anisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84FF;
    EXT_texture_filter_anisotropic.TEXTURE_MAX_ANISOTROPY_EXT = 0x84FE;
    
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
    Event.srcElement = HTMLElement;
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
    
    /* -- type: External -- */
    
    
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
    
    /* -- type: FormData -- */
    
    FormData.append = function(name, value, blobName) {
        /// <signature>
        /// <param name='name' type='Object'/>
        /// <param name='value' type='Object'/>
        /// <param name='blobName' type='String' optional='true' />
        /// </signature>
    };
    
    /* -- type: Gamepad -- */
    
    Gamepad.axes = [];
    Gamepad.buttons = [];
    Gamepad.connected = false;
    Gamepad.id = '';
    Gamepad.index = 0;
    Gamepad.mapping = '';
    Gamepad.timestamp = 0;
    
    /* -- type: GamepadButton -- */
    
    GamepadButton.pressed = false;
    GamepadButton.value = 0;
    
    /* -- type: Geolocation -- */
    
    Geolocation.clearWatch = function(watchId) {
        /// <signature>
        /// <param name='watchId' type='Number'/>
        /// </signature>
    };
    Geolocation.getCurrentPosition = function(successCallback, errorCallback, options) {
        /// <signature>
        /// <param name='successCallback' type='PositionCallback'/>
        /// <param name='errorCallback' type='PositionErrorCallback' optional='true' />
        /// <param name='options' type='PositionOptions' optional='true' />
        /// </signature>
    };
    Geolocation.watchPosition = function(successCallback, errorCallback, options) {
        /// <signature>
        /// <param name='successCallback' type='PositionCallback'/>
        /// <param name='errorCallback' type='PositionErrorCallback' optional='true' />
        /// <param name='options' type='PositionOptions' optional='true' />
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    
    /* -- type: HTMLCollection -- */
    
    HTMLCollection.length = 0;
    HTMLCollection.item = function(nameOrIndex, optionalIndex) {
        /// <signature>
        /// <param name='nameOrIndex' type='Object' optional='true' />
        /// <param name='optionalIndex' type='Object' optional='true' />
        /// <returns type='Element'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(HTMLElement));
    };
    HTMLCollection.namedItem = function(name) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <returns type='Element'/>
        /// </signature>
        return HTMLElement;
    };
    /* Add a single array element */
    HTMLCollection[0] = _$getTrackingNull(Object.create(HTMLElement));
    
    /* -- type: History -- */
    
    History.length = 0;
    History.state = {};
    History.back = function(distance) {
        /// <signature>
        /// <param name='distance' type='Object' optional='true' />
        /// </signature>
    };
    History.forward = function(distance) {
        /// <signature>
        /// <param name='distance' type='Object' optional='true' />
        /// </signature>
    };
    History.go = function(delta) {
        /// <signature>
        /// <param name='delta' type='Object' optional='true' />
        /// </signature>
    };
    History.pushState = function(statedata, title, url) {
        /// <signature>
        /// <param name='statedata' type='Object'/>
        /// <param name='title' type='String' optional='true' />
        /// <param name='url' type='String' optional='true' />
        /// </signature>
    };
    History.replaceState = function(statedata, title, url) {
        /// <signature>
        /// <param name='statedata' type='Object'/>
        /// <param name='title' type='String' optional='true' />
        /// <param name='url' type='String' optional='true' />
        /// </signature>
    };
    
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
    
    /* -- type: Location -- */
    
    Location.hash = '';
    Location.host = '';
    Location.hostname = '';
    Location.href = '';
    Location.origin = '';
    Location.pathname = '';
    Location.port = '';
    Location.protocol = '';
    Location.search = '';
    Location.assign = function(url) {
        /// <signature>
        /// <param name='url' type='String'/>
        /// </signature>
    };
    Location.reload = function(forcedReload) {
        /// <signature>
        /// <param name='forcedReload' type='Boolean' optional='true' />
        /// </signature>
    };
    Location.replace = function(url) {
        /// <signature>
        /// <param name='url' type='String'/>
        /// </signature>
    };
    Location.toString = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    
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
    
    /* -- type: MSCSSMatrix -- */
    
    MSCSSMatrix.a = 0;
    MSCSSMatrix.b = 0;
    MSCSSMatrix.c = 0;
    MSCSSMatrix.d = 0;
    MSCSSMatrix.e = 0;
    MSCSSMatrix.f = 0;
    MSCSSMatrix.m11 = 0;
    MSCSSMatrix.m12 = 0;
    MSCSSMatrix.m13 = 0;
    MSCSSMatrix.m14 = 0;
    MSCSSMatrix.m21 = 0;
    MSCSSMatrix.m22 = 0;
    MSCSSMatrix.m23 = 0;
    MSCSSMatrix.m24 = 0;
    MSCSSMatrix.m31 = 0;
    MSCSSMatrix.m32 = 0;
    MSCSSMatrix.m33 = 0;
    MSCSSMatrix.m34 = 0;
    MSCSSMatrix.m41 = 0;
    MSCSSMatrix.m42 = 0;
    MSCSSMatrix.m43 = 0;
    MSCSSMatrix.m44 = 0;
    MSCSSMatrix.inverse = function() {
        /// <signature>
        /// <returns type='MSCSSMatrix'/>
        /// </signature>
        return MSCSSMatrix;
    };
    MSCSSMatrix.multiply = function(secondMatrix) {
        /// <signature>
        /// <param name='secondMatrix' type='MSCSSMatrix'/>
        /// <returns type='MSCSSMatrix'/>
        /// </signature>
        return MSCSSMatrix;
    };
    MSCSSMatrix.rotate = function(angleX, angleY, angleZ) {
        /// <signature>
        /// <param name='angleX' type='Number'/>
        /// <param name='angleY' type='Number' optional='true' />
        /// <param name='angleZ' type='Number' optional='true' />
        /// <returns type='MSCSSMatrix'/>
        /// </signature>
        return MSCSSMatrix;
    };
    MSCSSMatrix.rotateAxisAngle = function(x, y, z, angle) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='z' type='Number'/>
        /// <param name='angle' type='Number'/>
        /// <returns type='MSCSSMatrix'/>
        /// </signature>
        return MSCSSMatrix;
    };
    MSCSSMatrix.scale = function(scaleX, scaleY, scaleZ) {
        /// <signature>
        /// <param name='scaleX' type='Number'/>
        /// <param name='scaleY' type='Number' optional='true' />
        /// <param name='scaleZ' type='Number' optional='true' />
        /// <returns type='MSCSSMatrix'/>
        /// </signature>
        return MSCSSMatrix;
    };
    MSCSSMatrix.setMatrixValue = function(value) {
        /// <signature>
        /// <param name='value' type='String'/>
        /// </signature>
    };
    MSCSSMatrix.skewX = function(angle) {
        /// <signature>
        /// <param name='angle' type='Number'/>
        /// <returns type='MSCSSMatrix'/>
        /// </signature>
        return MSCSSMatrix;
    };
    MSCSSMatrix.skewY = function(angle) {
        /// <signature>
        /// <param name='angle' type='Number'/>
        /// <returns type='MSCSSMatrix'/>
        /// </signature>
        return MSCSSMatrix;
    };
    MSCSSMatrix.toString = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    MSCSSMatrix.translate = function(x, y, z) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='z' type='Number' optional='true' />
        /// <returns type='MSCSSMatrix'/>
        /// </signature>
        return MSCSSMatrix;
    };
    
    /* -- type: MSGesture -- */
    
    MSGesture.target = HTMLElement;
    MSGesture.addPointer = function(pointerId) {
        /// <signature>
        /// <param name='pointerId' type='Number'/>
        /// </signature>
    };
    MSGesture.stop = function() {
    };
    
    /* -- type: MSGraphicsTrust -- */
    
    MSGraphicsTrust.constrictionActive = false;
    MSGraphicsTrust.status = '';
    
    /* -- type: MSMediaKeyError -- */
    
    MSMediaKeyError.code = 0;
    MSMediaKeyError.systemCode = 0;
    MSMediaKeyError.MS_MEDIA_KEYERR_CLIENT = 2;
    MSMediaKeyError.MS_MEDIA_KEYERR_DOMAIN = 6;
    MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE = 5;
    MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT = 4;
    MSMediaKeyError.MS_MEDIA_KEYERR_SERVICE = 3;
    MSMediaKeyError.MS_MEDIA_KEYERR_UNKNOWN = 1;
    
    /* -- type: MSMediaKeys -- */
    
    MSMediaKeys.keySystem = '';
    MSMediaKeys.createSession = function(type, initData, cdmData) {
        /// <signature>
        /// <param name='type' type='String'/>
        /// <param name='initData' type='Uint8Array'/>
        /// <param name='cdmData' type='Uint8Array' optional='true' />
        /// <returns type='MSMediaKeySession'/>
        /// </signature>
        return MSMediaKeySession;
    };
    MSMediaKeys.isTypeSupported = function(keySystem, type) {
        /// <signature>
        /// <param name='keySystem' type='String'/>
        /// <param name='type' type='String' optional='true' />
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    
    /* -- type: MSMimeTypesCollection -- */
    
    MSMimeTypesCollection.length = 0;
    
    /* -- type: MSPluginsCollection -- */
    
    MSPluginsCollection.length = 0;
    MSPluginsCollection.refresh = function(reload) {
        /// <signature>
        /// <param name='reload' type='Boolean' optional='true' />
        /// </signature>
    };
    
    /* -- type: MSRangeCollection -- */
    
    MSRangeCollection.length = 0;
    MSRangeCollection.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='Range'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(Range));
    };
    /* Add a single array element */
    MSRangeCollection[0] = _$getTrackingNull(Object.create(Range));
    
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
    
    /* -- type: MSWebViewSettings -- */
    
    MSWebViewSettings.isIndexedDBEnabled = false;
    MSWebViewSettings.isJavaScriptEnabled = false;
    
    /* -- type: MediaError -- */
    
    MediaError.code = 0;
    MediaError.msExtendedCode = 0;
    MediaError.MEDIA_ERR_ABORTED = 1;
    MediaError.MEDIA_ERR_DECODE = 3;
    MediaError.MEDIA_ERR_NETWORK = 2;
    MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
    MediaError.MS_MEDIA_ERR_ENCRYPTED = 5;
    
    /* -- type: MediaList -- */
    
    MediaList.length = 0;
    MediaList.mediaText = '';
    MediaList.appendMedium = function(newMedium) {
        /// <signature>
        /// <param name='newMedium' type='String'/>
        /// </signature>
    };
    MediaList.deleteMedium = function(oldMedium) {
        /// <signature>
        /// <param name='oldMedium' type='String'/>
        /// </signature>
    };
    MediaList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='String'/>
        /// </signature>
        return this[index] || _$getTrackingNull('');
    };
    MediaList.toString = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    /* Add a single array element */
    MediaList[0] = _$getTrackingNull('');
    
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
    
    /* -- type: MimeType -- */
    
    MimeType.description = '';
    MimeType.enabledPlugin = Plugin;
    MimeType.suffixes = '';
    MimeType.type = '';
    
    /* -- type: MimeTypeArray -- */
    
    MimeTypeArray.length = 0;
    MimeTypeArray.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='Plugin'/>
        /// </signature>
        return Plugin;
    };
    MimeTypeArray.namedItem = function(type) {
        /// <signature>
        /// <param name='type' type='String'/>
        /// <returns type='Plugin'/>
        /// </signature>
        return Plugin;
    };
    
    /* -- type: MutationObserver -- */
    
    MutationObserver.disconnect = function() {
    };
    MutationObserver.observe = function(target, options) {
        /// <signature>
        /// <param name='target' type='Node'/>
        /// <param name='options' type='MutationObserverInit'/>
        /// </signature>
    };
    MutationObserver.takeRecords = function() {
        /// <signature>
        /// <returns type='Array' elementType='MutationRecord'/>
        /// </signature>
        return [];
    };
    
    /* -- type: MutationRecord -- */
    
    MutationRecord.addedNodes = NodeList;
    MutationRecord.attributeName = '';
    MutationRecord.attributeNamespace = '';
    MutationRecord.nextSibling = Node;
    MutationRecord.oldValue = '';
    MutationRecord.previousSibling = Node;
    MutationRecord.removedNodes = NodeList;
    MutationRecord.target = Node;
    MutationRecord.type = '';
    
    /* -- type: NamedNodeMap -- */
    
    NamedNodeMap.length = 0;
    NamedNodeMap.getNamedItem = function(name) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <returns type='Attr'/>
        /// </signature>
        return Attr;
    };
    NamedNodeMap.getNamedItemNS = function(namespaceURI, localName) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <param name='localName' type='String'/>
        /// <returns type='Attr'/>
        /// </signature>
        return Attr;
    };
    NamedNodeMap.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='Attr'/>
        /// </signature>
        return Attr;
    };
    NamedNodeMap.removeNamedItem = function(name) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <returns type='Attr'/>
        /// </signature>
        return Attr;
    };
    NamedNodeMap.removeNamedItemNS = function(namespaceURI, localName) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <param name='localName' type='String'/>
        /// <returns type='Attr'/>
        /// </signature>
        return Attr;
    };
    NamedNodeMap.setNamedItem = function(arg) {
        /// <signature>
        /// <param name='arg' type='Attr'/>
        /// <returns type='Attr'/>
        /// </signature>
        return Attr;
    };
    NamedNodeMap.setNamedItemNS = function(arg) {
        /// <signature>
        /// <param name='arg' type='Attr'/>
        /// <returns type='Attr'/>
        /// </signature>
        return Attr;
    };
    
    /* -- type: NodeFilter -- */
    
    NodeFilter.FILTER_ACCEPT = 1;
    NodeFilter.FILTER_REJECT = 2;
    NodeFilter.FILTER_SKIP = 3;
    NodeFilter.SHOW_ALL = 0xFFFFFFFF;
    NodeFilter.SHOW_ATTRIBUTE = 0x00000002;
    NodeFilter.SHOW_CDATA_SECTION = 0x00000008;
    NodeFilter.SHOW_COMMENT = 0x00000080;
    NodeFilter.SHOW_DOCUMENT = 0x00000100;
    NodeFilter.SHOW_DOCUMENT_FRAGMENT = 0x00000400;
    NodeFilter.SHOW_DOCUMENT_TYPE = 0x00000200;
    NodeFilter.SHOW_ELEMENT = 0x00000001;
    NodeFilter.SHOW_ENTITY = 0x00000020;
    NodeFilter.SHOW_ENTITY_REFERENCE = 0x00000010;
    NodeFilter.SHOW_NOTATION = 0x00000800;
    NodeFilter.SHOW_PROCESSING_INSTRUCTION = 0x00000040;
    NodeFilter.SHOW_TEXT = 0x00000004;
    NodeFilter.acceptNode = function(n) {
        /// <signature>
        /// <param name='n' type='Node'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    
    /* -- type: NodeIterator -- */
    
    NodeIterator.expandEntityReferences = false;
    NodeIterator.filter = NodeFilter;
    NodeIterator.root = Node;
    NodeIterator.whatToShow = 0;
    NodeIterator.detach = function() {
    };
    NodeIterator.nextNode = function() {
        /// <signature>
        /// <returns type='Node'/>
        /// </signature>
        return Node;
    };
    NodeIterator.previousNode = function() {
        /// <signature>
        /// <returns type='Node'/>
        /// </signature>
        return Node;
    };
    
    /* -- type: NodeList -- */
    
    NodeList.length = 0;
    NodeList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='Node'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(Node));
    };
    /* Add a single array element */
    NodeList[0] = _$getTrackingNull(Object.create(Node));
    
    /* -- type: OES_element_index_uint -- */
    
    
    /* -- type: OES_standard_derivatives -- */
    
    OES_standard_derivatives.FRAGMENT_SHADER_DERIVATIVE_HINT_OES = 0x8B8B;
    
    /* -- type: OES_texture_float -- */
    
    
    /* -- type: OES_texture_float_linear -- */
    
    
    /* -- type: PerfWidgetExternal -- */
    
    PerfWidgetExternal.activeNetworkRequestCount = 0;
    PerfWidgetExternal.averageFrameTime = 0;
    PerfWidgetExternal.averagePaintTime = 0;
    PerfWidgetExternal.extraInformationEnabled = false;
    PerfWidgetExternal.independentRenderingEnabled = false;
    PerfWidgetExternal.irDisablingContentString = '';
    PerfWidgetExternal.irStatusAvailable = false;
    PerfWidgetExternal.maxCpuSpeed = 0;
    PerfWidgetExternal.paintRequestsPerSecond = 0;
    PerfWidgetExternal.performanceCounter = 0;
    PerfWidgetExternal.performanceCounterFrequency = 0;
    PerfWidgetExternal.addEventListener = function(eventType, callback) {
        /// <signature>
        /// <param name='eventType' type='String'/>
        /// <param name='callback' type='Function'/>
        /// </signature>
    };
    PerfWidgetExternal.getMemoryUsage = function() {
        /// <signature>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    PerfWidgetExternal.getProcessCpuUsage = function() {
        /// <signature>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    PerfWidgetExternal.getRecentCpuUsage = function(last) {
        /// <signature>
        /// <param name='last' type='Number'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    PerfWidgetExternal.getRecentFrames = function(last) {
        /// <signature>
        /// <param name='last' type='Number'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    PerfWidgetExternal.getRecentMemoryUsage = function(last) {
        /// <signature>
        /// <param name='last' type='Number'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    PerfWidgetExternal.getRecentPaintRequests = function(last) {
        /// <signature>
        /// <param name='last' type='Number'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    PerfWidgetExternal.removeEventListener = function(eventType, callback) {
        /// <signature>
        /// <param name='eventType' type='String'/>
        /// <param name='callback' type='Function'/>
        /// </signature>
    };
    PerfWidgetExternal.repositionWindow = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// </signature>
    };
    PerfWidgetExternal.resizeWindow = function(width, height) {
        /// <signature>
        /// <param name='width' type='Number'/>
        /// <param name='height' type='Number'/>
        /// </signature>
    };
    
    /* -- type: Performance -- */
    
    Performance.navigation = PerformanceNavigation;
    Performance.timing = PerformanceTiming;
    Performance.clearMarks = function(markName) {
        /// <signature>
        /// <param name='markName' type='String' optional='true' />
        /// </signature>
    };
    Performance.clearMeasures = function(measureName) {
        /// <signature>
        /// <param name='measureName' type='String' optional='true' />
        /// </signature>
    };
    Performance.clearResourceTimings = function() {
    };
    Performance.getEntries = function() {
        /// <signature>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    Performance.getEntriesByName = function(name, entryType) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <param name='entryType' type='String' optional='true' />
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    Performance.getEntriesByType = function(entryType) {
        /// <signature>
        /// <param name='entryType' type='String'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    Performance.getMarks = function(markName) {
        /// <signature>
        /// <param name='markName' type='String' optional='true' />
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    Performance.getMeasures = function(measureName) {
        /// <signature>
        /// <param name='measureName' type='String' optional='true' />
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    Performance.mark = function(markName) {
        /// <signature>
        /// <param name='markName' type='String'/>
        /// </signature>
    };
    Performance.measure = function(measureName, startMarkName, endMarkName) {
        /// <signature>
        /// <param name='measureName' type='String'/>
        /// <param name='startMarkName' type='String' optional='true' />
        /// <param name='endMarkName' type='String' optional='true' />
        /// </signature>
    };
    Performance.now = function() {
        /// <signature>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    Performance.setResourceTimingBufferSize = function(maxSize) {
        /// <signature>
        /// <param name='maxSize' type='Number'/>
        /// </signature>
    };
    Performance.toJSON = function() {
        /// <signature>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    
    /* -- type: PerformanceEntry -- */
    
    PerformanceEntry.duration = 0;
    PerformanceEntry.entryType = '';
    PerformanceEntry.name = '';
    PerformanceEntry.startTime = 0;
    
    /* -- type: PerformanceNavigation -- */
    
    PerformanceNavigation.redirectCount = 0;
    PerformanceNavigation.type = 0;
    PerformanceNavigation.TYPE_BACK_FORWARD = 2;
    PerformanceNavigation.TYPE_NAVIGATE = 0;
    PerformanceNavigation.TYPE_RELOAD = 1;
    PerformanceNavigation.TYPE_RESERVED = 255;
    PerformanceNavigation.toJSON = function() {
        /// <signature>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    
    /* -- type: PerformanceTiming -- */
    
    PerformanceTiming.connectEnd = 0;
    PerformanceTiming.connectStart = 0;
    PerformanceTiming.domComplete = 0;
    PerformanceTiming.domContentLoadedEventEnd = 0;
    PerformanceTiming.domContentLoadedEventStart = 0;
    PerformanceTiming.domInteractive = 0;
    PerformanceTiming.domLoading = 0;
    PerformanceTiming.domainLookupEnd = 0;
    PerformanceTiming.domainLookupStart = 0;
    PerformanceTiming.fetchStart = 0;
    PerformanceTiming.loadEventEnd = 0;
    PerformanceTiming.loadEventStart = 0;
    PerformanceTiming.msFirstPaint = 0;
    PerformanceTiming.navigationStart = 0;
    PerformanceTiming.redirectEnd = 0;
    PerformanceTiming.redirectStart = 0;
    PerformanceTiming.requestStart = 0;
    PerformanceTiming.responseEnd = 0;
    PerformanceTiming.responseStart = 0;
    PerformanceTiming.unloadEventEnd = 0;
    PerformanceTiming.unloadEventStart = 0;
    PerformanceTiming.toJSON = function() {
        /// <signature>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    
    /* -- type: PeriodicWave -- */
    
    
    /* -- type: Plugin -- */
    
    Plugin.description = '';
    Plugin.filename = '';
    Plugin.length = 0;
    Plugin.name = '';
    Plugin.version = '';
    Plugin.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='MimeType'/>
        /// </signature>
        return MimeType;
    };
    Plugin.namedItem = function(type) {
        /// <signature>
        /// <param name='type' type='String'/>
        /// <returns type='MimeType'/>
        /// </signature>
        return MimeType;
    };
    
    /* -- type: PluginArray -- */
    
    PluginArray.length = 0;
    PluginArray.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='Plugin'/>
        /// </signature>
        return Plugin;
    };
    PluginArray.namedItem = function(name) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <returns type='Plugin'/>
        /// </signature>
        return Plugin;
    };
    PluginArray.refresh = function(reload) {
        /// <signature>
        /// <param name='reload' type='Boolean' optional='true' />
        /// </signature>
    };
    
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
    
    /* -- type: Range -- */
    
    Range.collapsed = false;
    Range.commonAncestorContainer = Node;
    Range.endContainer = Node;
    Range.endOffset = 0;
    Range.startContainer = Node;
    Range.startOffset = 0;
    Range.END_TO_END = 2;
    Range.END_TO_START = 3;
    Range.START_TO_END = 1;
    Range.START_TO_START = 0;
    Range.cloneContents = function() {
        /// <signature>
        /// <returns type='DocumentFragment'/>
        /// </signature>
        return DocumentFragment;
    };
    Range.cloneRange = function() {
        /// <signature>
        /// <returns type='Range'/>
        /// </signature>
        return Range;
    };
    Range.collapse = function(toStart) {
        /// <signature>
        /// <param name='toStart' type='Boolean'/>
        /// </signature>
    };
    Range.compareBoundaryPoints = function(how, sourceRange) {
        /// <signature>
        /// <param name='how' type='Number'/>
        /// <param name='sourceRange' type='Range'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    Range.createContextualFragment = function(fragment) {
        /// <signature>
        /// <param name='fragment' type='String'/>
        /// <returns type='DocumentFragment'/>
        /// </signature>
        return DocumentFragment;
    };
    Range.deleteContents = function() {
    };
    Range.detach = function() {
    };
    Range.expand = function(Unit) {
        /// <signature>
        /// <param name='Unit' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Range.extractContents = function() {
        /// <signature>
        /// <returns type='DocumentFragment'/>
        /// </signature>
        return DocumentFragment;
    };
    Range.getBoundingClientRect = function() {
        /// <signature>
        /// <returns type='ClientRect'/>
        /// </signature>
        return ClientRect;
    };
    Range.getClientRects = function() {
        /// <signature>
        /// <returns type='ClientRectList'/>
        /// </signature>
        return ClientRectList;
    };
    Range.insertNode = function(newNode) {
        /// <signature>
        /// <param name='newNode' type='Node'/>
        /// </signature>
    };
    Range.selectNode = function(refNode) {
        /// <signature>
        /// <param name='refNode' type='Node'/>
        /// </signature>
    };
    Range.selectNodeContents = function(refNode) {
        /// <signature>
        /// <param name='refNode' type='Node'/>
        /// </signature>
    };
    Range.setEnd = function(refNode, offset) {
        /// <signature>
        /// <param name='refNode' type='Node'/>
        /// <param name='offset' type='Number'/>
        /// </signature>
    };
    Range.setEndAfter = function(refNode) {
        /// <signature>
        /// <param name='refNode' type='Node'/>
        /// </signature>
    };
    Range.setEndBefore = function(refNode) {
        /// <signature>
        /// <param name='refNode' type='Node'/>
        /// </signature>
    };
    Range.setStart = function(refNode, offset) {
        /// <signature>
        /// <param name='refNode' type='Node'/>
        /// <param name='offset' type='Number'/>
        /// </signature>
    };
    Range.setStartAfter = function(refNode) {
        /// <signature>
        /// <param name='refNode' type='Node'/>
        /// </signature>
    };
    Range.setStartBefore = function(refNode) {
        /// <signature>
        /// <param name='refNode' type='Node'/>
        /// </signature>
    };
    Range.surroundContents = function(newParent) {
        /// <signature>
        /// <param name='newParent' type='Node'/>
        /// </signature>
    };
    Range.toString = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    
    /* -- type: SVGAngle -- */
    
    SVGAngle.unitType = 0;
    SVGAngle.value = 0;
    SVGAngle.valueAsString = '';
    SVGAngle.valueInSpecifiedUnits = 0;
    SVGAngle.SVG_ANGLETYPE_DEG = 2;
    SVGAngle.SVG_ANGLETYPE_GRAD = 4;
    SVGAngle.SVG_ANGLETYPE_RAD = 3;
    SVGAngle.SVG_ANGLETYPE_UNKNOWN = 0;
    SVGAngle.SVG_ANGLETYPE_UNSPECIFIED = 1;
    SVGAngle.convertToSpecifiedUnits = function(unitType) {
        /// <signature>
        /// <param name='unitType' type='Number'/>
        /// </signature>
    };
    SVGAngle.newValueSpecifiedUnits = function(unitType, valueInSpecifiedUnits) {
        /// <signature>
        /// <param name='unitType' type='Number'/>
        /// <param name='valueInSpecifiedUnits' type='Number'/>
        /// </signature>
    };
    
    /* -- type: SVGAnimatedAngle -- */
    
    SVGAnimatedAngle.animVal = SVGAngle;
    SVGAnimatedAngle.baseVal = SVGAngle;
    
    /* -- type: SVGAnimatedBoolean -- */
    
    SVGAnimatedBoolean.animVal = false;
    SVGAnimatedBoolean.baseVal = false;
    
    /* -- type: SVGAnimatedEnumeration -- */
    
    SVGAnimatedEnumeration.animVal = 0;
    SVGAnimatedEnumeration.baseVal = 0;
    
    /* -- type: SVGAnimatedInteger -- */
    
    SVGAnimatedInteger.animVal = 0;
    SVGAnimatedInteger.baseVal = 0;
    
    /* -- type: SVGAnimatedLength -- */
    
    SVGAnimatedLength.animVal = SVGLength;
    SVGAnimatedLength.baseVal = SVGLength;
    
    /* -- type: SVGAnimatedLengthList -- */
    
    SVGAnimatedLengthList.animVal = SVGLengthList;
    SVGAnimatedLengthList.baseVal = SVGLengthList;
    
    /* -- type: SVGAnimatedNumber -- */
    
    SVGAnimatedNumber.animVal = 0;
    SVGAnimatedNumber.baseVal = 0;
    
    /* -- type: SVGAnimatedNumberList -- */
    
    SVGAnimatedNumberList.animVal = SVGNumberList;
    SVGAnimatedNumberList.baseVal = SVGNumberList;
    
    /* -- type: SVGAnimatedPreserveAspectRatio -- */
    
    SVGAnimatedPreserveAspectRatio.animVal = SVGPreserveAspectRatio;
    SVGAnimatedPreserveAspectRatio.baseVal = SVGPreserveAspectRatio;
    
    /* -- type: SVGAnimatedRect -- */
    
    SVGAnimatedRect.animVal = SVGRect;
    SVGAnimatedRect.baseVal = SVGRect;
    
    /* -- type: SVGAnimatedString -- */
    
    SVGAnimatedString.animVal = '';
    SVGAnimatedString.baseVal = '';
    
    /* -- type: SVGAnimatedTransformList -- */
    
    SVGAnimatedTransformList.animVal = SVGTransformList;
    SVGAnimatedTransformList.baseVal = SVGTransformList;
    
    /* -- type: SVGElementInstanceList -- */
    
    SVGElementInstanceList.length = 0;
    SVGElementInstanceList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGElementInstance'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(SVGElementInstance));
    };
    /* Add a single array element */
    SVGElementInstanceList[0] = _$getTrackingNull(Object.create(SVGElementInstance));
    
    /* -- type: SVGLength -- */
    
    SVGLength.unitType = 0;
    SVGLength.value = 0;
    SVGLength.valueAsString = '';
    SVGLength.valueInSpecifiedUnits = 0;
    SVGLength.SVG_LENGTHTYPE_CM = 6;
    SVGLength.SVG_LENGTHTYPE_EMS = 3;
    SVGLength.SVG_LENGTHTYPE_EXS = 4;
    SVGLength.SVG_LENGTHTYPE_IN = 8;
    SVGLength.SVG_LENGTHTYPE_MM = 7;
    SVGLength.SVG_LENGTHTYPE_NUMBER = 1;
    SVGLength.SVG_LENGTHTYPE_PC = 10;
    SVGLength.SVG_LENGTHTYPE_PERCENTAGE = 2;
    SVGLength.SVG_LENGTHTYPE_PT = 9;
    SVGLength.SVG_LENGTHTYPE_PX = 5;
    SVGLength.SVG_LENGTHTYPE_UNKNOWN = 0;
    SVGLength.convertToSpecifiedUnits = function(unitType) {
        /// <signature>
        /// <param name='unitType' type='Number'/>
        /// </signature>
    };
    SVGLength.newValueSpecifiedUnits = function(unitType, valueInSpecifiedUnits) {
        /// <signature>
        /// <param name='unitType' type='Number'/>
        /// <param name='valueInSpecifiedUnits' type='Number'/>
        /// </signature>
    };
    
    /* -- type: SVGLengthList -- */
    
    SVGLengthList.numberOfItems = 0;
    SVGLengthList.appendItem = function(newItem) {
        /// <signature>
        /// <param name='newItem' type='SVGLength'/>
        /// <returns type='SVGLength'/>
        /// </signature>
        return SVGLength;
    };
    SVGLengthList.clear = function() {
    };
    SVGLengthList.getItem = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGLength'/>
        /// </signature>
        return SVGLength;
    };
    SVGLengthList.initialize = function(newItem) {
        /// <signature>
        /// <param name='newItem' type='SVGLength'/>
        /// <returns type='SVGLength'/>
        /// </signature>
        return SVGLength;
    };
    SVGLengthList.insertItemBefore = function(newItem, index) {
        /// <signature>
        /// <param name='newItem' type='SVGLength'/>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGLength'/>
        /// </signature>
        return SVGLength;
    };
    SVGLengthList.removeItem = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGLength'/>
        /// </signature>
        return SVGLength;
    };
    SVGLengthList.replaceItem = function(newItem, index) {
        /// <signature>
        /// <param name='newItem' type='SVGLength'/>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGLength'/>
        /// </signature>
        return SVGLength;
    };
    
    /* -- type: SVGMatrix -- */
    
    SVGMatrix.a = 0;
    SVGMatrix.b = 0;
    SVGMatrix.c = 0;
    SVGMatrix.d = 0;
    SVGMatrix.e = 0;
    SVGMatrix.f = 0;
    SVGMatrix.flipX = function() {
        /// <signature>
        /// <returns type='SVGMatrix'/>
        /// </signature>
        return SVGMatrix;
    };
    SVGMatrix.flipY = function() {
        /// <signature>
        /// <returns type='SVGMatrix'/>
        /// </signature>
        return SVGMatrix;
    };
    SVGMatrix.inverse = function() {
        /// <signature>
        /// <returns type='SVGMatrix'/>
        /// </signature>
        return SVGMatrix;
    };
    SVGMatrix.multiply = function(secondMatrix) {
        /// <signature>
        /// <param name='secondMatrix' type='SVGMatrix'/>
        /// <returns type='SVGMatrix'/>
        /// </signature>
        return SVGMatrix;
    };
    SVGMatrix.rotate = function(angle) {
        /// <signature>
        /// <param name='angle' type='Number'/>
        /// <returns type='SVGMatrix'/>
        /// </signature>
        return SVGMatrix;
    };
    SVGMatrix.rotateFromVector = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <returns type='SVGMatrix'/>
        /// </signature>
        return SVGMatrix;
    };
    SVGMatrix.scale = function(scaleFactor) {
        /// <signature>
        /// <param name='scaleFactor' type='Number'/>
        /// <returns type='SVGMatrix'/>
        /// </signature>
        return SVGMatrix;
    };
    SVGMatrix.scaleNonUniform = function(scaleFactorX, scaleFactorY) {
        /// <signature>
        /// <param name='scaleFactorX' type='Number'/>
        /// <param name='scaleFactorY' type='Number'/>
        /// <returns type='SVGMatrix'/>
        /// </signature>
        return SVGMatrix;
    };
    SVGMatrix.skewX = function(angle) {
        /// <signature>
        /// <param name='angle' type='Number'/>
        /// <returns type='SVGMatrix'/>
        /// </signature>
        return SVGMatrix;
    };
    SVGMatrix.skewY = function(angle) {
        /// <signature>
        /// <param name='angle' type='Number'/>
        /// <returns type='SVGMatrix'/>
        /// </signature>
        return SVGMatrix;
    };
    SVGMatrix.translate = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <returns type='SVGMatrix'/>
        /// </signature>
        return SVGMatrix;
    };
    
    /* -- type: SVGNumber -- */
    
    SVGNumber.value = 0;
    
    /* -- type: SVGNumberList -- */
    
    SVGNumberList.numberOfItems = 0;
    SVGNumberList.appendItem = function(newItem) {
        /// <signature>
        /// <param name='newItem' type='SVGNumber'/>
        /// <returns type='SVGNumber'/>
        /// </signature>
        return SVGNumber;
    };
    SVGNumberList.clear = function() {
    };
    SVGNumberList.getItem = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGNumber'/>
        /// </signature>
        return SVGNumber;
    };
    SVGNumberList.initialize = function(newItem) {
        /// <signature>
        /// <param name='newItem' type='SVGNumber'/>
        /// <returns type='SVGNumber'/>
        /// </signature>
        return SVGNumber;
    };
    SVGNumberList.insertItemBefore = function(newItem, index) {
        /// <signature>
        /// <param name='newItem' type='SVGNumber'/>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGNumber'/>
        /// </signature>
        return SVGNumber;
    };
    SVGNumberList.removeItem = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGNumber'/>
        /// </signature>
        return SVGNumber;
    };
    SVGNumberList.replaceItem = function(newItem, index) {
        /// <signature>
        /// <param name='newItem' type='SVGNumber'/>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGNumber'/>
        /// </signature>
        return SVGNumber;
    };
    
    /* -- type: SVGPathSeg -- */
    
    SVGPathSeg.pathSegType = 0;
    SVGPathSeg.pathSegTypeAsLetter = '';
    SVGPathSeg.PATHSEG_ARC_ABS = 10;
    SVGPathSeg.PATHSEG_ARC_REL = 11;
    SVGPathSeg.PATHSEG_CLOSEPATH = 1;
    SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
    SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
    SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
    SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
    SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
    SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
    SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
    SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;
    SVGPathSeg.PATHSEG_LINETO_ABS = 4;
    SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
    SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
    SVGPathSeg.PATHSEG_LINETO_REL = 5;
    SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
    SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
    SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
    SVGPathSeg.PATHSEG_MOVETO_REL = 3;
    SVGPathSeg.PATHSEG_UNKNOWN = 0;
    
    /* -- type: SVGPathSegList -- */
    
    SVGPathSegList.numberOfItems = 0;
    SVGPathSegList.appendItem = function(newItem) {
        /// <signature>
        /// <param name='newItem' type='SVGPathSeg'/>
        /// <returns type='SVGPathSeg'/>
        /// </signature>
        return SVGPathSeg;
    };
    SVGPathSegList.clear = function() {
    };
    SVGPathSegList.getItem = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGPathSeg'/>
        /// </signature>
        return SVGPathSeg;
    };
    SVGPathSegList.initialize = function(newItem) {
        /// <signature>
        /// <param name='newItem' type='SVGPathSeg'/>
        /// <returns type='SVGPathSeg'/>
        /// </signature>
        return SVGPathSeg;
    };
    SVGPathSegList.insertItemBefore = function(newItem, index) {
        /// <signature>
        /// <param name='newItem' type='SVGPathSeg'/>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGPathSeg'/>
        /// </signature>
        return SVGPathSeg;
    };
    SVGPathSegList.removeItem = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGPathSeg'/>
        /// </signature>
        return SVGPathSeg;
    };
    SVGPathSegList.replaceItem = function(newItem, index) {
        /// <signature>
        /// <param name='newItem' type='SVGPathSeg'/>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGPathSeg'/>
        /// </signature>
        return SVGPathSeg;
    };
    
    /* -- type: SVGPoint -- */
    
    SVGPoint.x = 0;
    SVGPoint.y = 0;
    SVGPoint.matrixTransform = function(matrix) {
        /// <signature>
        /// <param name='matrix' type='SVGMatrix'/>
        /// <returns type='SVGPoint'/>
        /// </signature>
        return SVGPoint;
    };
    
    /* -- type: SVGPointList -- */
    
    SVGPointList.numberOfItems = 0;
    SVGPointList.appendItem = function(newItem) {
        /// <signature>
        /// <param name='newItem' type='SVGPoint'/>
        /// <returns type='SVGPoint'/>
        /// </signature>
        return SVGPoint;
    };
    SVGPointList.clear = function() {
    };
    SVGPointList.getItem = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGPoint'/>
        /// </signature>
        return SVGPoint;
    };
    SVGPointList.initialize = function(newItem) {
        /// <signature>
        /// <param name='newItem' type='SVGPoint'/>
        /// <returns type='SVGPoint'/>
        /// </signature>
        return SVGPoint;
    };
    SVGPointList.insertItemBefore = function(newItem, index) {
        /// <signature>
        /// <param name='newItem' type='SVGPoint'/>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGPoint'/>
        /// </signature>
        return SVGPoint;
    };
    SVGPointList.removeItem = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGPoint'/>
        /// </signature>
        return SVGPoint;
    };
    SVGPointList.replaceItem = function(newItem, index) {
        /// <signature>
        /// <param name='newItem' type='SVGPoint'/>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGPoint'/>
        /// </signature>
        return SVGPoint;
    };
    
    /* -- type: SVGPreserveAspectRatio -- */
    
    SVGPreserveAspectRatio.align = 0;
    SVGPreserveAspectRatio.meetOrSlice = 0;
    SVGPreserveAspectRatio.SVG_MEETORSLICE_MEET = 1;
    SVGPreserveAspectRatio.SVG_MEETORSLICE_SLICE = 2;
    SVGPreserveAspectRatio.SVG_MEETORSLICE_UNKNOWN = 0;
    SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_NONE = 1;
    SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_UNKNOWN = 0;
    SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMAX = 10;
    SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMID = 7;
    SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMIN = 4;
    SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMAX = 9;
    SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMID = 6;
    SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMIN = 3;
    SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMAX = 8;
    SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMID = 5;
    SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMIN = 2;
    
    /* -- type: SVGRect -- */
    
    SVGRect.height = 0;
    SVGRect.width = 0;
    SVGRect.x = 0;
    SVGRect.y = 0;
    
    /* -- type: SVGStringList -- */
    
    SVGStringList.numberOfItems = 0;
    SVGStringList.appendItem = function(newItem) {
        /// <signature>
        /// <param name='newItem' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    SVGStringList.clear = function() {
    };
    SVGStringList.getItem = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    SVGStringList.initialize = function(newItem) {
        /// <signature>
        /// <param name='newItem' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    SVGStringList.insertItemBefore = function(newItem, index) {
        /// <signature>
        /// <param name='newItem' type='String'/>
        /// <param name='index' type='Number'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    SVGStringList.removeItem = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    SVGStringList.replaceItem = function(newItem, index) {
        /// <signature>
        /// <param name='newItem' type='String'/>
        /// <param name='index' type='Number'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    
    /* -- type: SVGTransform -- */
    
    SVGTransform.angle = 0;
    SVGTransform.matrix = SVGMatrix;
    SVGTransform.type = 0;
    SVGTransform.SVG_TRANSFORM_MATRIX = 1;
    SVGTransform.SVG_TRANSFORM_ROTATE = 4;
    SVGTransform.SVG_TRANSFORM_SCALE = 3;
    SVGTransform.SVG_TRANSFORM_SKEWX = 5;
    SVGTransform.SVG_TRANSFORM_SKEWY = 6;
    SVGTransform.SVG_TRANSFORM_TRANSLATE = 2;
    SVGTransform.SVG_TRANSFORM_UNKNOWN = 0;
    SVGTransform.setMatrix = function(matrix) {
        /// <signature>
        /// <param name='matrix' type='SVGMatrix'/>
        /// </signature>
    };
    SVGTransform.setRotate = function(angle, cx, cy) {
        /// <signature>
        /// <param name='angle' type='Number'/>
        /// <param name='cx' type='Number'/>
        /// <param name='cy' type='Number'/>
        /// </signature>
    };
    SVGTransform.setScale = function(sx, sy) {
        /// <signature>
        /// <param name='sx' type='Number'/>
        /// <param name='sy' type='Number'/>
        /// </signature>
    };
    SVGTransform.setSkewX = function(angle) {
        /// <signature>
        /// <param name='angle' type='Number'/>
        /// </signature>
    };
    SVGTransform.setSkewY = function(angle) {
        /// <signature>
        /// <param name='angle' type='Number'/>
        /// </signature>
    };
    SVGTransform.setTranslate = function(tx, ty) {
        /// <signature>
        /// <param name='tx' type='Number'/>
        /// <param name='ty' type='Number'/>
        /// </signature>
    };
    
    /* -- type: SVGTransformList -- */
    
    SVGTransformList.numberOfItems = 0;
    SVGTransformList.appendItem = function(newItem) {
        /// <signature>
        /// <param name='newItem' type='SVGTransform'/>
        /// <returns type='SVGTransform'/>
        /// </signature>
        return SVGTransform;
    };
    SVGTransformList.clear = function() {
    };
    SVGTransformList.consolidate = function() {
        /// <signature>
        /// <returns type='SVGTransform'/>
        /// </signature>
        return SVGTransform;
    };
    SVGTransformList.createSVGTransformFromMatrix = function(matrix) {
        /// <signature>
        /// <param name='matrix' type='SVGMatrix'/>
        /// <returns type='SVGTransform'/>
        /// </signature>
        return SVGTransform;
    };
    SVGTransformList.getItem = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGTransform'/>
        /// </signature>
        return SVGTransform;
    };
    SVGTransformList.initialize = function(newItem) {
        /// <signature>
        /// <param name='newItem' type='SVGTransform'/>
        /// <returns type='SVGTransform'/>
        /// </signature>
        return SVGTransform;
    };
    SVGTransformList.insertItemBefore = function(newItem, index) {
        /// <signature>
        /// <param name='newItem' type='SVGTransform'/>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGTransform'/>
        /// </signature>
        return SVGTransform;
    };
    SVGTransformList.removeItem = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGTransform'/>
        /// </signature>
        return SVGTransform;
    };
    SVGTransformList.replaceItem = function(newItem, index) {
        /// <signature>
        /// <param name='newItem' type='SVGTransform'/>
        /// <param name='index' type='Number'/>
        /// <returns type='SVGTransform'/>
        /// </signature>
        return SVGTransform;
    };
    
    /* -- type: SVGUnitTypes -- */
    
    SVGUnitTypes.SVG_UNIT_TYPE_OBJECTBOUNDINGBOX = 2;
    SVGUnitTypes.SVG_UNIT_TYPE_UNKNOWN = 0;
    SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE = 1;
    
    /* -- type: SVGZoomAndPan -- */
    
    SVGZoomAndPan.zoomAndPan = 0;
    SVGZoomAndPan.SVG_ZOOMANDPAN_DISABLE = 1;
    SVGZoomAndPan.SVG_ZOOMANDPAN_MAGNIFY = 2;
    SVGZoomAndPan.SVG_ZOOMANDPAN_UNKNOWN = 0;
    
    /* -- type: Selection -- */
    
    Selection.anchorNode = Node;
    Selection.anchorOffset = 0;
    Selection.focusNode = Node;
    Selection.focusOffset = 0;
    Selection.isCollapsed = false;
    Selection.rangeCount = 0;
    Selection.type = '';
    Selection.addRange = function(range) {
        /// <signature>
        /// <param name='range' type='Range'/>
        /// </signature>
    };
    Selection.collapse = function(parentNode, offset) {
        /// <signature>
        /// <param name='parentNode' type='Node'/>
        /// <param name='offset' type='Number'/>
        /// </signature>
    };
    Selection.collapseToEnd = function() {
    };
    Selection.collapseToStart = function() {
    };
    Selection.containsNode = function(node, partlyContained) {
        /// <signature>
        /// <param name='node' type='Node'/>
        /// <param name='partlyContained' type='Boolean'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Selection.deleteFromDocument = function() {
    };
    Selection.empty = function() {
    };
    Selection.extend = function(newNode, offset) {
        /// <signature>
        /// <param name='newNode' type='Node'/>
        /// <param name='offset' type='Number'/>
        /// </signature>
    };
    Selection.getRangeAt = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='Range'/>
        /// </signature>
        return Range;
    };
    Selection.removeAllRanges = function() {
    };
    Selection.removeRange = function(range) {
        /// <signature>
        /// <param name='range' type='Range'/>
        /// </signature>
    };
    Selection.selectAllChildren = function(parentNode) {
        /// <signature>
        /// <param name='parentNode' type='Node'/>
        /// </signature>
    };
    Selection.setBaseAndExtent = function(baseNode, baseOffset, extentNode, extentOffset) {
        /// <signature>
        /// <param name='baseNode' type='Node'/>
        /// <param name='baseOffset' type='Number'/>
        /// <param name='extentNode' type='Node'/>
        /// <param name='extentOffset' type='Number'/>
        /// </signature>
    };
    Selection.toString = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    
    /* -- type: Storage -- */
    
    Storage.length = 0;
    Storage.clear = function() {
    };
    Storage.getItem = function(key) {
        /// <signature>
        /// <param name='key' type='String'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    Storage.key = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    Storage.removeItem = function(key) {
        /// <signature>
        /// <param name='key' type='String'/>
        /// </signature>
    };
    Storage.setItem = function(key, data) {
        /// <signature>
        /// <param name='key' type='String'/>
        /// <param name='data' type='String'/>
        /// </signature>
    };
    
    /* -- type: StyleMedia -- */
    
    StyleMedia.type = '';
    StyleMedia.matchMedium = function(mediaquery) {
        /// <signature>
        /// <param name='mediaquery' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    
    /* -- type: StyleSheet -- */
    
    StyleSheet.disabled = false;
    StyleSheet.href = '';
    StyleSheet.media = MediaList;
    StyleSheet.ownerNode = Node;
    StyleSheet.parentStyleSheet = _$getTrackingNull(Object.create(StyleSheet));
    StyleSheet.title = '';
    StyleSheet.type = '';
    
    /* -- type: StyleSheetList -- */
    
    StyleSheetList.length = 0;
    StyleSheetList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number' optional='true' />
        /// <returns type='StyleSheet'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(StyleSheet));
    };
    /* Add a single array element */
    StyleSheetList[0] = _$getTrackingNull(Object.create(StyleSheet));
    
    /* -- type: StyleSheetPageList -- */
    
    StyleSheetPageList.length = 0;
    StyleSheetPageList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='CSSPageRule'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(CSSPageRule));
    };
    /* Add a single array element */
    StyleSheetPageList[0] = _$getTrackingNull(Object.create(CSSPageRule));
    
    /* -- type: SubtleCrypto -- */
    
    SubtleCrypto.decrypt = function(algorithm, key, data) {
        /// <signature>
        /// <param name='algorithm' type='String'/>
        /// <param name='key' type='CryptoKey'/>
        /// <param name='data' type='Uint8Array'/>
        /// <returns type='Promise'/>
        /// </signature>
        /// <signature>
        /// <param name='algorithm' type='Algorithm'/>
        /// <param name='key' type='CryptoKey'/>
        /// <param name='data' type='Uint8Array'/>
        /// <returns type='Promise'/>
        /// </signature>
        return new Promise(function(resolve, reject) { });
    };
    SubtleCrypto.deriveBits = function(algorithm, baseKey, length) {
        /// <signature>
        /// <param name='algorithm' type='String'/>
        /// <param name='baseKey' type='CryptoKey'/>
        /// <param name='length' type='Number'/>
        /// <returns type='Promise'/>
        /// </signature>
        /// <signature>
        /// <param name='algorithm' type='Algorithm'/>
        /// <param name='baseKey' type='CryptoKey'/>
        /// <param name='length' type='Number'/>
        /// <returns type='Promise'/>
        /// </signature>
        return new Promise(function(resolve, reject) { });
    };
    SubtleCrypto.deriveKey = function(algorithm, baseKey, derivedKeyType, extractable, keyUsages) {
        /// <signature>
        /// <param name='algorithm' type='String'/>
        /// <param name='baseKey' type='CryptoKey'/>
        /// <param name='derivedKeyType' type='String'/>
        /// <param name='extractable' type='Boolean'/>
        /// <param name='keyUsages' type='Array' elementType='String' />
        /// <returns type='Promise'/>
        /// </signature>
        /// <signature>
        /// <param name='algorithm' type='String'/>
        /// <param name='baseKey' type='CryptoKey'/>
        /// <param name='derivedKeyType' type='Algorithm'/>
        /// <param name='extractable' type='Boolean'/>
        /// <param name='keyUsages' type='Array' elementType='String' />
        /// <returns type='Promise'/>
        /// </signature>
        /// <signature>
        /// <param name='algorithm' type='Algorithm'/>
        /// <param name='baseKey' type='CryptoKey'/>
        /// <param name='derivedKeyType' type='String'/>
        /// <param name='extractable' type='Boolean'/>
        /// <param name='keyUsages' type='Array' elementType='String' />
        /// <returns type='Promise'/>
        /// </signature>
        /// <signature>
        /// <param name='algorithm' type='Algorithm'/>
        /// <param name='baseKey' type='CryptoKey'/>
        /// <param name='derivedKeyType' type='Algorithm'/>
        /// <param name='extractable' type='Boolean'/>
        /// <param name='keyUsages' type='Array' elementType='String' />
        /// <returns type='Promise'/>
        /// </signature>
        return new Promise(function(resolve, reject) { });
    };
    SubtleCrypto.digest = function(algorithm, data) {
        /// <signature>
        /// <param name='algorithm' type='String'/>
        /// <param name='data' type='Uint8Array'/>
        /// <returns type='Promise'/>
        /// </signature>
        /// <signature>
        /// <param name='algorithm' type='Algorithm'/>
        /// <param name='data' type='Uint8Array'/>
        /// <returns type='Promise'/>
        /// </signature>
        return new Promise(function(resolve, reject) { });
    };
    SubtleCrypto.encrypt = function(algorithm, key, data) {
        /// <signature>
        /// <param name='algorithm' type='String'/>
        /// <param name='key' type='CryptoKey'/>
        /// <param name='data' type='Uint8Array'/>
        /// <returns type='Promise'/>
        /// </signature>
        /// <signature>
        /// <param name='algorithm' type='Algorithm'/>
        /// <param name='key' type='CryptoKey'/>
        /// <param name='data' type='Uint8Array'/>
        /// <returns type='Promise'/>
        /// </signature>
        return new Promise(function(resolve, reject) { });
    };
    SubtleCrypto.exportKey = function(format, key) {
        /// <signature>
        /// <param name='format' type='String'/>
        /// <param name='key' type='CryptoKey'/>
        /// <returns type='Promise'/>
        /// </signature>
        return new Promise(function(resolve, reject) { });
    };
    SubtleCrypto.generateKey = function(algorithm, extractable, keyUsages) {
        /// <signature>
        /// <param name='algorithm' type='String'/>
        /// <param name='extractable' type='Boolean'/>
        /// <param name='keyUsages' type='Array' elementType='String' />
        /// <returns type='Promise'/>
        /// </signature>
        /// <signature>
        /// <param name='algorithm' type='Algorithm'/>
        /// <param name='extractable' type='Boolean'/>
        /// <param name='keyUsages' type='Array' elementType='String' />
        /// <returns type='Promise'/>
        /// </signature>
        return new Promise(function(resolve, reject) { });
    };
    SubtleCrypto.importKey = function(format, keyData, algorithm, extractable, keyUsages) {
        /// <signature>
        /// <param name='format' type='String'/>
        /// <param name='keyData' type='Uint8Array'/>
        /// <param name='algorithm' type='String'/>
        /// <param name='extractable' type='Boolean'/>
        /// <param name='keyUsages' type='Array' elementType='String' />
        /// <returns type='Promise'/>
        /// </signature>
        /// <signature>
        /// <param name='format' type='String'/>
        /// <param name='keyData' type='Uint8Array'/>
        /// <param name='algorithm' type='Algorithm'/>
        /// <param name='extractable' type='Boolean'/>
        /// <param name='keyUsages' type='Array' elementType='String' />
        /// <returns type='Promise'/>
        /// </signature>
        return new Promise(function(resolve, reject) { });
    };
    SubtleCrypto.sign = function(algorithm, key, data) {
        /// <signature>
        /// <param name='algorithm' type='String'/>
        /// <param name='key' type='CryptoKey'/>
        /// <param name='data' type='Uint8Array'/>
        /// <returns type='Promise'/>
        /// </signature>
        /// <signature>
        /// <param name='algorithm' type='Algorithm'/>
        /// <param name='key' type='CryptoKey'/>
        /// <param name='data' type='Uint8Array'/>
        /// <returns type='Promise'/>
        /// </signature>
        return new Promise(function(resolve, reject) { });
    };
    SubtleCrypto.unwrapKey = function(format, wrappedKey, unwrappingKey, unwrapAlgorithm, unwrappedKeyAlgorithm, extractable, keyUsages) {
        /// <signature>
        /// <param name='format' type='String'/>
        /// <param name='wrappedKey' type='Uint8Array'/>
        /// <param name='unwrappingKey' type='CryptoKey'/>
        /// <param name='unwrapAlgorithm' type='String'/>
        /// <param name='unwrappedKeyAlgorithm' type='String'/>
        /// <param name='extractable' type='Boolean'/>
        /// <param name='keyUsages' type='Array' elementType='String' />
        /// <returns type='Promise'/>
        /// </signature>
        /// <signature>
        /// <param name='format' type='String'/>
        /// <param name='wrappedKey' type='Uint8Array'/>
        /// <param name='unwrappingKey' type='CryptoKey'/>
        /// <param name='unwrapAlgorithm' type='String'/>
        /// <param name='unwrappedKeyAlgorithm' type='Algorithm'/>
        /// <param name='extractable' type='Boolean'/>
        /// <param name='keyUsages' type='Array' elementType='String' />
        /// <returns type='Promise'/>
        /// </signature>
        /// <signature>
        /// <param name='format' type='String'/>
        /// <param name='wrappedKey' type='Uint8Array'/>
        /// <param name='unwrappingKey' type='CryptoKey'/>
        /// <param name='unwrapAlgorithm' type='Algorithm'/>
        /// <param name='unwrappedKeyAlgorithm' type='String'/>
        /// <param name='extractable' type='Boolean'/>
        /// <param name='keyUsages' type='Array' elementType='String' />
        /// <returns type='Promise'/>
        /// </signature>
        /// <signature>
        /// <param name='format' type='String'/>
        /// <param name='wrappedKey' type='Uint8Array'/>
        /// <param name='unwrappingKey' type='CryptoKey'/>
        /// <param name='unwrapAlgorithm' type='Algorithm'/>
        /// <param name='unwrappedKeyAlgorithm' type='Algorithm'/>
        /// <param name='extractable' type='Boolean'/>
        /// <param name='keyUsages' type='Array' elementType='String' />
        /// <returns type='Promise'/>
        /// </signature>
        return new Promise(function(resolve, reject) { });
    };
    SubtleCrypto.verify = function(algorithm, key, signature, data) {
        /// <signature>
        /// <param name='algorithm' type='String'/>
        /// <param name='key' type='CryptoKey'/>
        /// <param name='signature' type='Uint8Array'/>
        /// <param name='data' type='Uint8Array'/>
        /// <returns type='Promise'/>
        /// </signature>
        /// <signature>
        /// <param name='algorithm' type='Algorithm'/>
        /// <param name='key' type='CryptoKey'/>
        /// <param name='signature' type='Uint8Array'/>
        /// <param name='data' type='Uint8Array'/>
        /// <returns type='Promise'/>
        /// </signature>
        return new Promise(function(resolve, reject) { });
    };
    SubtleCrypto.wrapKey = function(format, key, wrappingKey, wrapAlgorithm) {
        /// <signature>
        /// <param name='format' type='String'/>
        /// <param name='key' type='CryptoKey'/>
        /// <param name='wrappingKey' type='CryptoKey'/>
        /// <param name='wrapAlgorithm' type='String'/>
        /// <returns type='Promise'/>
        /// </signature>
        /// <signature>
        /// <param name='format' type='String'/>
        /// <param name='key' type='CryptoKey'/>
        /// <param name='wrappingKey' type='CryptoKey'/>
        /// <param name='wrapAlgorithm' type='Algorithm'/>
        /// <returns type='Promise'/>
        /// </signature>
        return new Promise(function(resolve, reject) { });
    };
    
    /* -- type: TextMetrics -- */
    
    TextMetrics.width = 0;
    
    /* -- type: TextRange -- */
    
    TextRange.boundingHeight = 0;
    TextRange.boundingLeft = 0;
    TextRange.boundingTop = 0;
    TextRange.boundingWidth = 0;
    TextRange.htmlText = '';
    TextRange.offsetLeft = 0;
    TextRange.offsetTop = 0;
    TextRange.text = '';
    TextRange.collapse = function(start) {
        /// <signature>
        /// <param name='start' type='Boolean' optional='true' />
        /// </signature>
    };
    TextRange.compareEndPoints = function(how, sourceRange) {
        /// <signature>
        /// <param name='how' type='String'/>
        /// <param name='sourceRange' type='TextRange'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    TextRange.duplicate = function() {
        /// <signature>
        /// <returns type='TextRange'/>
        /// </signature>
        return TextRange;
    };
    TextRange.execCommand = function(cmdID, showUI, value) {
        /// <signature>
        /// <param name='cmdID' type='String'/>
        /// <param name='showUI' type='Boolean' optional='true' />
        /// <param name='value' type='Object' optional='true' />
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    TextRange.execCommandShowHelp = function(cmdID) {
        /// <signature>
        /// <param name='cmdID' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    TextRange.expand = function(Unit) {
        /// <signature>
        /// <param name='Unit' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    TextRange.findText = function(string, count, flags) {
        /// <signature>
        /// <param name='string' type='String'/>
        /// <param name='count' type='Number' optional='true' />
        /// <param name='flags' type='Number' optional='true' />
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    TextRange.getBookmark = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    TextRange.getBoundingClientRect = function() {
        /// <signature>
        /// <returns type='ClientRect'/>
        /// </signature>
        return ClientRect;
    };
    TextRange.getClientRects = function() {
        /// <signature>
        /// <returns type='ClientRectList'/>
        /// </signature>
        return ClientRectList;
    };
    TextRange.inRange = function(range) {
        /// <signature>
        /// <param name='range' type='TextRange'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    TextRange.isEqual = function(range) {
        /// <signature>
        /// <param name='range' type='TextRange'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    TextRange.move = function(unit, count) {
        /// <signature>
        /// <param name='unit' type='String'/>
        /// <param name='count' type='Number' optional='true' />
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    TextRange.moveEnd = function(unit, count) {
        /// <signature>
        /// <param name='unit' type='String'/>
        /// <param name='count' type='Number' optional='true' />
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    TextRange.moveStart = function(unit, count) {
        /// <signature>
        /// <param name='unit' type='String'/>
        /// <param name='count' type='Number' optional='true' />
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    TextRange.moveToBookmark = function(bookmark) {
        /// <signature>
        /// <param name='bookmark' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    TextRange.moveToElementText = function(element) {
        /// <signature>
        /// <param name='element' type='Element'/>
        /// </signature>
    };
    TextRange.moveToPoint = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// </signature>
    };
    TextRange.parentElement = function() {
        /// <signature>
        /// <returns type='Element'/>
        /// </signature>
        return HTMLElement;
    };
    TextRange.pasteHTML = function(html) {
        /// <signature>
        /// <param name='html' type='String'/>
        /// </signature>
    };
    TextRange.queryCommandEnabled = function(cmdID) {
        /// <signature>
        /// <param name='cmdID' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    TextRange.queryCommandIndeterm = function(cmdID) {
        /// <signature>
        /// <param name='cmdID' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    TextRange.queryCommandState = function(cmdID) {
        /// <signature>
        /// <param name='cmdID' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    TextRange.queryCommandSupported = function(cmdID) {
        /// <signature>
        /// <param name='cmdID' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    TextRange.queryCommandText = function(cmdID) {
        /// <signature>
        /// <param name='cmdID' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    TextRange.queryCommandValue = function(cmdID) {
        /// <signature>
        /// <param name='cmdID' type='String'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    TextRange.scrollIntoView = function(fStart) {
        /// <signature>
        /// <param name='fStart' type='Boolean' optional='true' />
        /// </signature>
    };
    TextRange.select = function() {
    };
    TextRange.setEndPoint = function(how, SourceRange) {
        /// <signature>
        /// <param name='how' type='String'/>
        /// <param name='SourceRange' type='TextRange'/>
        /// </signature>
    };
    
    /* -- type: TextRangeCollection -- */
    
    TextRangeCollection.length = 0;
    TextRangeCollection.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='TextRange'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(TextRange));
    };
    /* Add a single array element */
    TextRangeCollection[0] = _$getTrackingNull(Object.create(TextRange));
    
    /* -- type: TextTrackCueList -- */
    
    TextTrackCueList.length = 0;
    TextTrackCueList.getCueById = function(id) {
        /// <signature>
        /// <param name='id' type='String'/>
        /// <returns type='TextTrackCue'/>
        /// </signature>
        return TextTrackCue;
    };
    TextTrackCueList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='TextTrackCue'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(TextTrackCue));
    };
    /* Add a single array element */
    TextTrackCueList[0] = _$getTrackingNull(Object.create(TextTrackCue));
    
    /* -- type: TimeRanges -- */
    
    TimeRanges.length = 0;
    TimeRanges.end = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    TimeRanges.start = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    
    /* -- type: Touch -- */
    
    Touch.clientX = 0;
    Touch.clientY = 0;
    Touch.identifier = 0;
    Touch.pageX = 0;
    Touch.pageY = 0;
    Touch.screenX = 0;
    Touch.screenY = 0;
    Touch.target = EventTarget;
    
    /* -- type: TouchList -- */
    
    TouchList.length = 0;
    TouchList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='Touch'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(Touch));
    };
    /* Add a single array element */
    TouchList[0] = _$getTrackingNull(Object.create(Touch));
    
    /* -- type: TreeWalker -- */
    
    TreeWalker.currentNode = Node;
    TreeWalker.expandEntityReferences = false;
    TreeWalker.filter = NodeFilter;
    TreeWalker.root = Node;
    TreeWalker.whatToShow = 0;
    TreeWalker.firstChild = function() {
        /// <signature>
        /// <returns type='Node'/>
        /// </signature>
        return Node;
    };
    TreeWalker.lastChild = function() {
        /// <signature>
        /// <returns type='Node'/>
        /// </signature>
        return Node;
    };
    TreeWalker.nextNode = function() {
        /// <signature>
        /// <returns type='Node'/>
        /// </signature>
        return Node;
    };
    TreeWalker.nextSibling = function() {
        /// <signature>
        /// <returns type='Node'/>
        /// </signature>
        return Node;
    };
    TreeWalker.parentNode = function() {
        /// <signature>
        /// <returns type='Node'/>
        /// </signature>
        return Node;
    };
    TreeWalker.previousNode = function() {
        /// <signature>
        /// <returns type='Node'/>
        /// </signature>
        return Node;
    };
    TreeWalker.previousSibling = function() {
        /// <signature>
        /// <returns type='Node'/>
        /// </signature>
        return Node;
    };
    
    /* -- type: URL -- */
    
    URL.createObjectURL = function(object, options) {
        /// <signature>
        /// <param name='object' type='Object'/>
        /// <param name='options' type='ObjectURLOptions' optional='true' />
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    URL.revokeObjectURL = function(url) {
        /// <signature>
        /// <param name='url' type='String'/>
        /// </signature>
    };
    
    /* -- type: ValidityState -- */
    
    ValidityState.badInput = false;
    ValidityState.customError = false;
    ValidityState.patternMismatch = false;
    ValidityState.rangeOverflow = false;
    ValidityState.rangeUnderflow = false;
    ValidityState.stepMismatch = false;
    ValidityState.tooLong = false;
    ValidityState.typeMismatch = false;
    ValidityState.valid = false;
    ValidityState.valueMissing = false;
    
    /* -- type: VideoPlaybackQuality -- */
    
    VideoPlaybackQuality.corruptedVideoFrames = 0;
    VideoPlaybackQuality.creationTime = 0;
    VideoPlaybackQuality.droppedVideoFrames = 0;
    VideoPlaybackQuality.totalFrameDelay = 0;
    VideoPlaybackQuality.totalVideoFrames = 0;
    
    /* -- type: VideoTrack -- */
    
    VideoTrack.id = '';
    VideoTrack.kind = '';
    VideoTrack.label = '';
    VideoTrack.language = '';
    VideoTrack.selected = false;
    VideoTrack.sourceBuffer = SourceBuffer;
    
    /* -- type: WEBGL_compressed_texture_s3tc -- */
    
    WEBGL_compressed_texture_s3tc.COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83F1;
    WEBGL_compressed_texture_s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83F2;
    WEBGL_compressed_texture_s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83F3;
    WEBGL_compressed_texture_s3tc.COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83F0;
    
    /* -- type: WEBGL_debug_renderer_info -- */
    
    WEBGL_debug_renderer_info.UNMASKED_RENDERER_WEBGL = 0x9246;
    WEBGL_debug_renderer_info.UNMASKED_VENDOR_WEBGL = 0x9245;
    
    /* -- type: WEBGL_depth_texture -- */
    
    WEBGL_depth_texture.UNSIGNED_INT_24_8_WEBGL = 0x84FA;
    
    /* -- type: WebGLActiveInfo -- */
    
    WebGLActiveInfo.name = '';
    WebGLActiveInfo.size = 0;
    WebGLActiveInfo.type = 0;
    
    /* -- type: WebGLObject -- */
    
    
    /* -- type: WebGLRenderingContext -- */
    
    WebGLRenderingContext.canvas = HTMLCanvasElement;
    WebGLRenderingContext.drawingBufferHeight = 0;
    WebGLRenderingContext.drawingBufferWidth = 0;
    WebGLRenderingContext.ACTIVE_ATTRIBUTES = 0x8B89;
    WebGLRenderingContext.ACTIVE_TEXTURE = 0x84E0;
    WebGLRenderingContext.ACTIVE_UNIFORMS = 0x8B86;
    WebGLRenderingContext.ALIASED_LINE_WIDTH_RANGE = 0x846E;
    WebGLRenderingContext.ALIASED_POINT_SIZE_RANGE = 0x846D;
    WebGLRenderingContext.ALPHA = 0x1906;
    WebGLRenderingContext.ALPHA_BITS = 0x0D55;
    WebGLRenderingContext.ALWAYS = 0x0207;
    WebGLRenderingContext.ARRAY_BUFFER = 0x8892;
    WebGLRenderingContext.ARRAY_BUFFER_BINDING = 0x8894;
    WebGLRenderingContext.ATTACHED_SHADERS = 0x8B85;
    WebGLRenderingContext.BACK = 0x0405;
    WebGLRenderingContext.BLEND = 0x0BE2;
    WebGLRenderingContext.BLEND_COLOR = 0x8005;
    WebGLRenderingContext.BLEND_DST_ALPHA = 0x80CA;
    WebGLRenderingContext.BLEND_DST_RGB = 0x80C8;
    WebGLRenderingContext.BLEND_EQUATION = 0x8009;
    WebGLRenderingContext.BLEND_EQUATION_ALPHA = 0x883D;
    WebGLRenderingContext.BLEND_EQUATION_RGB = 0x8009;
    WebGLRenderingContext.BLEND_SRC_ALPHA = 0x80CB;
    WebGLRenderingContext.BLEND_SRC_RGB = 0x80C9;
    WebGLRenderingContext.BLUE_BITS = 0x0D54;
    WebGLRenderingContext.BOOL = 0x8B56;
    WebGLRenderingContext.BOOL_VEC2 = 0x8B57;
    WebGLRenderingContext.BOOL_VEC3 = 0x8B58;
    WebGLRenderingContext.BOOL_VEC4 = 0x8B59;
    WebGLRenderingContext.BROWSER_DEFAULT_WEBGL = 0x9244;
    WebGLRenderingContext.BUFFER_SIZE = 0x8764;
    WebGLRenderingContext.BUFFER_USAGE = 0x8765;
    WebGLRenderingContext.BYTE = 0x1400;
    WebGLRenderingContext.CCW = 0x0901;
    WebGLRenderingContext.CLAMP_TO_EDGE = 0x812F;
    WebGLRenderingContext.COLOR_ATTACHMENT0 = 0x8CE0;
    WebGLRenderingContext.COLOR_BUFFER_BIT = 0x00004000;
    WebGLRenderingContext.COLOR_CLEAR_VALUE = 0x0C22;
    WebGLRenderingContext.COLOR_WRITEMASK = 0x0C23;
    WebGLRenderingContext.COMPILE_STATUS = 0x8B81;
    WebGLRenderingContext.COMPRESSED_TEXTURE_FORMATS = 0x86A3;
    WebGLRenderingContext.CONSTANT_ALPHA = 0x8003;
    WebGLRenderingContext.CONSTANT_COLOR = 0x8001;
    WebGLRenderingContext.CONTEXT_LOST_WEBGL = 0x9242;
    WebGLRenderingContext.CULL_FACE = 0x0B44;
    WebGLRenderingContext.CULL_FACE_MODE = 0x0B45;
    WebGLRenderingContext.CURRENT_PROGRAM = 0x8B8D;
    WebGLRenderingContext.CURRENT_VERTEX_ATTRIB = 0x8626;
    WebGLRenderingContext.CW = 0x0900;
    WebGLRenderingContext.DECR = 0x1E03;
    WebGLRenderingContext.DECR_WRAP = 0x8508;
    WebGLRenderingContext.DELETE_STATUS = 0x8B80;
    WebGLRenderingContext.DEPTH_ATTACHMENT = 0x8D00;
    WebGLRenderingContext.DEPTH_BITS = 0x0D56;
    WebGLRenderingContext.DEPTH_BUFFER_BIT = 0x00000100;
    WebGLRenderingContext.DEPTH_CLEAR_VALUE = 0x0B73;
    WebGLRenderingContext.DEPTH_COMPONENT = 0x1902;
    WebGLRenderingContext.DEPTH_COMPONENT16 = 0x81A5;
    WebGLRenderingContext.DEPTH_FUNC = 0x0B74;
    WebGLRenderingContext.DEPTH_RANGE = 0x0B70;
    WebGLRenderingContext.DEPTH_STENCIL = 0x84F9;
    WebGLRenderingContext.DEPTH_STENCIL_ATTACHMENT = 0x821A;
    WebGLRenderingContext.DEPTH_TEST = 0x0B71;
    WebGLRenderingContext.DEPTH_WRITEMASK = 0x0B72;
    WebGLRenderingContext.DITHER = 0x0BD0;
    WebGLRenderingContext.DONT_CARE = 0x1100;
    WebGLRenderingContext.DST_ALPHA = 0x0304;
    WebGLRenderingContext.DST_COLOR = 0x0306;
    WebGLRenderingContext.DYNAMIC_DRAW = 0x88E8;
    WebGLRenderingContext.ELEMENT_ARRAY_BUFFER = 0x8893;
    WebGLRenderingContext.ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
    WebGLRenderingContext.EQUAL = 0x0202;
    WebGLRenderingContext.FASTEST = 0x1101;
    WebGLRenderingContext.FLOAT = 0x1406;
    WebGLRenderingContext.FLOAT_MAT2 = 0x8B5A;
    WebGLRenderingContext.FLOAT_MAT3 = 0x8B5B;
    WebGLRenderingContext.FLOAT_MAT4 = 0x8B5C;
    WebGLRenderingContext.FLOAT_VEC2 = 0x8B50;
    WebGLRenderingContext.FLOAT_VEC3 = 0x8B51;
    WebGLRenderingContext.FLOAT_VEC4 = 0x8B52;
    WebGLRenderingContext.FRAGMENT_SHADER = 0x8B30;
    WebGLRenderingContext.FRAMEBUFFER = 0x8D40;
    WebGLRenderingContext.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
    WebGLRenderingContext.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
    WebGLRenderingContext.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;
    WebGLRenderingContext.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
    WebGLRenderingContext.FRAMEBUFFER_BINDING = 0x8CA6;
    WebGLRenderingContext.FRAMEBUFFER_COMPLETE = 0x8CD5;
    WebGLRenderingContext.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
    WebGLRenderingContext.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
    WebGLRenderingContext.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
    WebGLRenderingContext.FRAMEBUFFER_UNSUPPORTED = 0x8CDD;
    WebGLRenderingContext.FRONT = 0x0404;
    WebGLRenderingContext.FRONT_AND_BACK = 0x0408;
    WebGLRenderingContext.FRONT_FACE = 0x0B46;
    WebGLRenderingContext.FUNC_ADD = 0x8006;
    WebGLRenderingContext.FUNC_REVERSE_SUBTRACT = 0x800B;
    WebGLRenderingContext.FUNC_SUBTRACT = 0x800A;
    WebGLRenderingContext.GENERATE_MIPMAP_HINT = 0x8192;
    WebGLRenderingContext.GEQUAL = 0x0206;
    WebGLRenderingContext.GREATER = 0x0204;
    WebGLRenderingContext.GREEN_BITS = 0x0D53;
    WebGLRenderingContext.HIGH_FLOAT = 0x8DF2;
    WebGLRenderingContext.HIGH_INT = 0x8DF5;
    WebGLRenderingContext.IMPLEMENTATION_COLOR_READ_FORMAT = 0x8B9B;
    WebGLRenderingContext.IMPLEMENTATION_COLOR_READ_TYPE = 0x8B9A;
    WebGLRenderingContext.INCR = 0x1E02;
    WebGLRenderingContext.INCR_WRAP = 0x8507;
    WebGLRenderingContext.INT = 0x1404;
    WebGLRenderingContext.INT_VEC2 = 0x8B53;
    WebGLRenderingContext.INT_VEC3 = 0x8B54;
    WebGLRenderingContext.INT_VEC4 = 0x8B55;
    WebGLRenderingContext.INVALID_ENUM = 0x0500;
    WebGLRenderingContext.INVALID_FRAMEBUFFER_OPERATION = 0x0506;
    WebGLRenderingContext.INVALID_OPERATION = 0x0502;
    WebGLRenderingContext.INVALID_VALUE = 0x0501;
    WebGLRenderingContext.INVERT = 0x150A;
    WebGLRenderingContext.KEEP = 0x1E00;
    WebGLRenderingContext.LEQUAL = 0x0203;
    WebGLRenderingContext.LESS = 0x0201;
    WebGLRenderingContext.LINEAR = 0x2601;
    WebGLRenderingContext.LINEAR_MIPMAP_LINEAR = 0x2703;
    WebGLRenderingContext.LINEAR_MIPMAP_NEAREST = 0x2701;
    WebGLRenderingContext.LINES = 0x0001;
    WebGLRenderingContext.LINE_LOOP = 0x0002;
    WebGLRenderingContext.LINE_STRIP = 0x0003;
    WebGLRenderingContext.LINE_WIDTH = 0x0B21;
    WebGLRenderingContext.LINK_STATUS = 0x8B82;
    WebGLRenderingContext.LOW_FLOAT = 0x8DF0;
    WebGLRenderingContext.LOW_INT = 0x8DF3;
    WebGLRenderingContext.LUMINANCE = 0x1909;
    WebGLRenderingContext.LUMINANCE_ALPHA = 0x190A;
    WebGLRenderingContext.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
    WebGLRenderingContext.MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
    WebGLRenderingContext.MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;
    WebGLRenderingContext.MAX_RENDERBUFFER_SIZE = 0x84E8;
    WebGLRenderingContext.MAX_TEXTURE_IMAGE_UNITS = 0x8872;
    WebGLRenderingContext.MAX_TEXTURE_SIZE = 0x0D33;
    WebGLRenderingContext.MAX_VARYING_VECTORS = 0x8DFC;
    WebGLRenderingContext.MAX_VERTEX_ATTRIBS = 0x8869;
    WebGLRenderingContext.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;
    WebGLRenderingContext.MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB;
    WebGLRenderingContext.MAX_VIEWPORT_DIMS = 0x0D3A;
    WebGLRenderingContext.MEDIUM_FLOAT = 0x8DF1;
    WebGLRenderingContext.MEDIUM_INT = 0x8DF4;
    WebGLRenderingContext.MIRRORED_REPEAT = 0x8370;
    WebGLRenderingContext.NEAREST = 0x2600;
    WebGLRenderingContext.NEAREST_MIPMAP_LINEAR = 0x2702;
    WebGLRenderingContext.NEAREST_MIPMAP_NEAREST = 0x2700;
    WebGLRenderingContext.NEVER = 0x0200;
    WebGLRenderingContext.NICEST = 0x1102;
    WebGLRenderingContext.NONE = 0;
    WebGLRenderingContext.NOTEQUAL = 0x0205;
    WebGLRenderingContext.NO_ERROR = 0;
    WebGLRenderingContext.ONE = 1;
    WebGLRenderingContext.ONE_MINUS_CONSTANT_ALPHA = 0x8004;
    WebGLRenderingContext.ONE_MINUS_CONSTANT_COLOR = 0x8002;
    WebGLRenderingContext.ONE_MINUS_DST_ALPHA = 0x0305;
    WebGLRenderingContext.ONE_MINUS_DST_COLOR = 0x0307;
    WebGLRenderingContext.ONE_MINUS_SRC_ALPHA = 0x0303;
    WebGLRenderingContext.ONE_MINUS_SRC_COLOR = 0x0301;
    WebGLRenderingContext.OUT_OF_MEMORY = 0x0505;
    WebGLRenderingContext.PACK_ALIGNMENT = 0x0D05;
    WebGLRenderingContext.POINTS = 0x0000;
    WebGLRenderingContext.POLYGON_OFFSET_FACTOR = 0x8038;
    WebGLRenderingContext.POLYGON_OFFSET_FILL = 0x8037;
    WebGLRenderingContext.POLYGON_OFFSET_UNITS = 0x2A00;
    WebGLRenderingContext.RED_BITS = 0x0D52;
    WebGLRenderingContext.RENDERBUFFER = 0x8D41;
    WebGLRenderingContext.RENDERBUFFER_ALPHA_SIZE = 0x8D53;
    WebGLRenderingContext.RENDERBUFFER_BINDING = 0x8CA7;
    WebGLRenderingContext.RENDERBUFFER_BLUE_SIZE = 0x8D52;
    WebGLRenderingContext.RENDERBUFFER_DEPTH_SIZE = 0x8D54;
    WebGLRenderingContext.RENDERBUFFER_GREEN_SIZE = 0x8D51;
    WebGLRenderingContext.RENDERBUFFER_HEIGHT = 0x8D43;
    WebGLRenderingContext.RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
    WebGLRenderingContext.RENDERBUFFER_RED_SIZE = 0x8D50;
    WebGLRenderingContext.RENDERBUFFER_STENCIL_SIZE = 0x8D55;
    WebGLRenderingContext.RENDERBUFFER_WIDTH = 0x8D42;
    WebGLRenderingContext.RENDERER = 0x1F01;
    WebGLRenderingContext.REPEAT = 0x2901;
    WebGLRenderingContext.REPLACE = 0x1E01;
    WebGLRenderingContext.RGB = 0x1907;
    WebGLRenderingContext.RGB565 = 0x8D62;
    WebGLRenderingContext.RGB5_A1 = 0x8057;
    WebGLRenderingContext.RGBA = 0x1908;
    WebGLRenderingContext.RGBA4 = 0x8056;
    WebGLRenderingContext.SAMPLER_2D = 0x8B5E;
    WebGLRenderingContext.SAMPLER_CUBE = 0x8B60;
    WebGLRenderingContext.SAMPLES = 0x80A9;
    WebGLRenderingContext.SAMPLE_ALPHA_TO_COVERAGE = 0x809E;
    WebGLRenderingContext.SAMPLE_BUFFERS = 0x80A8;
    WebGLRenderingContext.SAMPLE_COVERAGE = 0x80A0;
    WebGLRenderingContext.SAMPLE_COVERAGE_INVERT = 0x80AB;
    WebGLRenderingContext.SAMPLE_COVERAGE_VALUE = 0x80AA;
    WebGLRenderingContext.SCISSOR_BOX = 0x0C10;
    WebGLRenderingContext.SCISSOR_TEST = 0x0C11;
    WebGLRenderingContext.SHADER_TYPE = 0x8B4F;
    WebGLRenderingContext.SHADING_LANGUAGE_VERSION = 0x8B8C;
    WebGLRenderingContext.SHORT = 0x1402;
    WebGLRenderingContext.SRC_ALPHA = 0x0302;
    WebGLRenderingContext.SRC_ALPHA_SATURATE = 0x0308;
    WebGLRenderingContext.SRC_COLOR = 0x0300;
    WebGLRenderingContext.STATIC_DRAW = 0x88E4;
    WebGLRenderingContext.STENCIL_ATTACHMENT = 0x8D20;
    WebGLRenderingContext.STENCIL_BACK_FAIL = 0x8801;
    WebGLRenderingContext.STENCIL_BACK_FUNC = 0x8800;
    WebGLRenderingContext.STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
    WebGLRenderingContext.STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
    WebGLRenderingContext.STENCIL_BACK_REF = 0x8CA3;
    WebGLRenderingContext.STENCIL_BACK_VALUE_MASK = 0x8CA4;
    WebGLRenderingContext.STENCIL_BACK_WRITEMASK = 0x8CA5;
    WebGLRenderingContext.STENCIL_BITS = 0x0D57;
    WebGLRenderingContext.STENCIL_BUFFER_BIT = 0x00000400;
    WebGLRenderingContext.STENCIL_CLEAR_VALUE = 0x0B91;
    WebGLRenderingContext.STENCIL_FAIL = 0x0B94;
    WebGLRenderingContext.STENCIL_FUNC = 0x0B92;
    WebGLRenderingContext.STENCIL_INDEX = 0x1901;
    WebGLRenderingContext.STENCIL_INDEX8 = 0x8D48;
    WebGLRenderingContext.STENCIL_PASS_DEPTH_FAIL = 0x0B95;
    WebGLRenderingContext.STENCIL_PASS_DEPTH_PASS = 0x0B96;
    WebGLRenderingContext.STENCIL_REF = 0x0B97;
    WebGLRenderingContext.STENCIL_TEST = 0x0B90;
    WebGLRenderingContext.STENCIL_VALUE_MASK = 0x0B93;
    WebGLRenderingContext.STENCIL_WRITEMASK = 0x0B98;
    WebGLRenderingContext.STREAM_DRAW = 0x88E0;
    WebGLRenderingContext.SUBPIXEL_BITS = 0x0D50;
    WebGLRenderingContext.TEXTURE = 0x1702;
    WebGLRenderingContext.TEXTURE0 = 0x84C0;
    WebGLRenderingContext.TEXTURE1 = 0x84C1;
    WebGLRenderingContext.TEXTURE10 = 0x84CA;
    WebGLRenderingContext.TEXTURE11 = 0x84CB;
    WebGLRenderingContext.TEXTURE12 = 0x84CC;
    WebGLRenderingContext.TEXTURE13 = 0x84CD;
    WebGLRenderingContext.TEXTURE14 = 0x84CE;
    WebGLRenderingContext.TEXTURE15 = 0x84CF;
    WebGLRenderingContext.TEXTURE16 = 0x84D0;
    WebGLRenderingContext.TEXTURE17 = 0x84D1;
    WebGLRenderingContext.TEXTURE18 = 0x84D2;
    WebGLRenderingContext.TEXTURE19 = 0x84D3;
    WebGLRenderingContext.TEXTURE2 = 0x84C2;
    WebGLRenderingContext.TEXTURE20 = 0x84D4;
    WebGLRenderingContext.TEXTURE21 = 0x84D5;
    WebGLRenderingContext.TEXTURE22 = 0x84D6;
    WebGLRenderingContext.TEXTURE23 = 0x84D7;
    WebGLRenderingContext.TEXTURE24 = 0x84D8;
    WebGLRenderingContext.TEXTURE25 = 0x84D9;
    WebGLRenderingContext.TEXTURE26 = 0x84DA;
    WebGLRenderingContext.TEXTURE27 = 0x84DB;
    WebGLRenderingContext.TEXTURE28 = 0x84DC;
    WebGLRenderingContext.TEXTURE29 = 0x84DD;
    WebGLRenderingContext.TEXTURE3 = 0x84C3;
    WebGLRenderingContext.TEXTURE30 = 0x84DE;
    WebGLRenderingContext.TEXTURE31 = 0x84DF;
    WebGLRenderingContext.TEXTURE4 = 0x84C4;
    WebGLRenderingContext.TEXTURE5 = 0x84C5;
    WebGLRenderingContext.TEXTURE6 = 0x84C6;
    WebGLRenderingContext.TEXTURE7 = 0x84C7;
    WebGLRenderingContext.TEXTURE8 = 0x84C8;
    WebGLRenderingContext.TEXTURE9 = 0x84C9;
    WebGLRenderingContext.TEXTURE_2D = 0x0DE1;
    WebGLRenderingContext.TEXTURE_BINDING_2D = 0x8069;
    WebGLRenderingContext.TEXTURE_BINDING_CUBE_MAP = 0x8514;
    WebGLRenderingContext.TEXTURE_CUBE_MAP = 0x8513;
    WebGLRenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
    WebGLRenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
    WebGLRenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
    WebGLRenderingContext.TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
    WebGLRenderingContext.TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
    WebGLRenderingContext.TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
    WebGLRenderingContext.TEXTURE_MAG_FILTER = 0x2800;
    WebGLRenderingContext.TEXTURE_MIN_FILTER = 0x2801;
    WebGLRenderingContext.TEXTURE_WRAP_S = 0x2802;
    WebGLRenderingContext.TEXTURE_WRAP_T = 0x2803;
    WebGLRenderingContext.TRIANGLES = 0x0004;
    WebGLRenderingContext.TRIANGLE_FAN = 0x0006;
    WebGLRenderingContext.TRIANGLE_STRIP = 0x0005;
    WebGLRenderingContext.UNPACK_ALIGNMENT = 0x0CF5;
    WebGLRenderingContext.UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
    WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL = 0x9240;
    WebGLRenderingContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
    WebGLRenderingContext.UNSIGNED_BYTE = 0x1401;
    WebGLRenderingContext.UNSIGNED_INT = 0x1405;
    WebGLRenderingContext.UNSIGNED_SHORT = 0x1403;
    WebGLRenderingContext.UNSIGNED_SHORT_4_4_4_4 = 0x8033;
    WebGLRenderingContext.UNSIGNED_SHORT_5_5_5_1 = 0x8034;
    WebGLRenderingContext.UNSIGNED_SHORT_5_6_5 = 0x8363;
    WebGLRenderingContext.VALIDATE_STATUS = 0x8B83;
    WebGLRenderingContext.VENDOR = 0x1F00;
    WebGLRenderingContext.VERSION = 0x1F02;
    WebGLRenderingContext.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;
    WebGLRenderingContext.VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
    WebGLRenderingContext.VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
    WebGLRenderingContext.VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
    WebGLRenderingContext.VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
    WebGLRenderingContext.VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
    WebGLRenderingContext.VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
    WebGLRenderingContext.VERTEX_SHADER = 0x8B31;
    WebGLRenderingContext.VIEWPORT = 0x0BA2;
    WebGLRenderingContext.ZERO = 0;
    WebGLRenderingContext.activeTexture = function(texture) {
        /// <signature>
        /// <param name='texture' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.attachShader = function(program, shader) {
        /// <signature>
        /// <param name='program' type='WebGLProgram'/>
        /// <param name='shader' type='WebGLShader'/>
        /// </signature>
    };
    WebGLRenderingContext.bindAttribLocation = function(program, index, name) {
        /// <signature>
        /// <param name='program' type='WebGLProgram'/>
        /// <param name='index' type='Number'/>
        /// <param name='name' type='String'/>
        /// </signature>
    };
    WebGLRenderingContext.bindBuffer = function(target, buffer) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='buffer' type='WebGLBuffer'/>
        /// </signature>
    };
    WebGLRenderingContext.bindFramebuffer = function(target, framebuffer) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='framebuffer' type='WebGLFramebuffer'/>
        /// </signature>
    };
    WebGLRenderingContext.bindRenderbuffer = function(target, renderbuffer) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='renderbuffer' type='WebGLRenderbuffer'/>
        /// </signature>
    };
    WebGLRenderingContext.bindTexture = function(target, texture) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='texture' type='WebGLTexture'/>
        /// </signature>
    };
    WebGLRenderingContext.blendColor = function(red, green, blue, alpha) {
        /// <signature>
        /// <param name='red' type='Number'/>
        /// <param name='green' type='Number'/>
        /// <param name='blue' type='Number'/>
        /// <param name='alpha' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.blendEquation = function(mode) {
        /// <signature>
        /// <param name='mode' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.blendEquationSeparate = function(modeRGB, modeAlpha) {
        /// <signature>
        /// <param name='modeRGB' type='Number'/>
        /// <param name='modeAlpha' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.blendFunc = function(sfactor, dfactor) {
        /// <signature>
        /// <param name='sfactor' type='Number'/>
        /// <param name='dfactor' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.blendFuncSeparate = function(srcRGB, dstRGB, srcAlpha, dstAlpha) {
        /// <signature>
        /// <param name='srcRGB' type='Number'/>
        /// <param name='dstRGB' type='Number'/>
        /// <param name='srcAlpha' type='Number'/>
        /// <param name='dstAlpha' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.bufferData = function(target, size, usage) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='size' type='Number'/>
        /// <param name='usage' type='Number'/>
        /// </signature>
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='size' type='Uint8Array'/>
        /// <param name='usage' type='Number'/>
        /// </signature>
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='size' type='Object'/>
        /// <param name='usage' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.bufferSubData = function(target, offset, data) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='offset' type='Number'/>
        /// <param name='data' type='Uint8Array'/>
        /// </signature>
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='offset' type='Number'/>
        /// <param name='data' type='Object'/>
        /// </signature>
    };
    WebGLRenderingContext.checkFramebufferStatus = function(target) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    WebGLRenderingContext.clear = function(mask) {
        /// <signature>
        /// <param name='mask' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.clearColor = function(red, green, blue, alpha) {
        /// <signature>
        /// <param name='red' type='Number'/>
        /// <param name='green' type='Number'/>
        /// <param name='blue' type='Number'/>
        /// <param name='alpha' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.clearDepth = function(depth) {
        /// <signature>
        /// <param name='depth' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.clearStencil = function(s) {
        /// <signature>
        /// <param name='s' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.colorMask = function(red, green, blue, alpha) {
        /// <signature>
        /// <param name='red' type='Boolean'/>
        /// <param name='green' type='Boolean'/>
        /// <param name='blue' type='Boolean'/>
        /// <param name='alpha' type='Boolean'/>
        /// </signature>
    };
    WebGLRenderingContext.compileShader = function(shader) {
        /// <signature>
        /// <param name='shader' type='WebGLShader'/>
        /// </signature>
    };
    WebGLRenderingContext.compressedTexImage2D = function(target, level, internalformat, width, height, border, data) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='level' type='Number'/>
        /// <param name='internalformat' type='Number'/>
        /// <param name='width' type='Number'/>
        /// <param name='height' type='Number'/>
        /// <param name='border' type='Number'/>
        /// <param name='data' type='Uint8Array'/>
        /// </signature>
    };
    WebGLRenderingContext.compressedTexSubImage2D = function(target, level, xoffset, yoffset, width, height, format, data) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='level' type='Number'/>
        /// <param name='xoffset' type='Number'/>
        /// <param name='yoffset' type='Number'/>
        /// <param name='width' type='Number'/>
        /// <param name='height' type='Number'/>
        /// <param name='format' type='Number'/>
        /// <param name='data' type='Uint8Array'/>
        /// </signature>
    };
    WebGLRenderingContext.copyTexImage2D = function(target, level, internalformat, x, y, width, height, border) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='level' type='Number'/>
        /// <param name='internalformat' type='Number'/>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='width' type='Number'/>
        /// <param name='height' type='Number'/>
        /// <param name='border' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.copyTexSubImage2D = function(target, level, xoffset, yoffset, x, y, width, height) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='level' type='Number'/>
        /// <param name='xoffset' type='Number'/>
        /// <param name='yoffset' type='Number'/>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='width' type='Number'/>
        /// <param name='height' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.createBuffer = function() {
        /// <signature>
        /// <returns type='WebGLBuffer'/>
        /// </signature>
        return WebGLBuffer;
    };
    WebGLRenderingContext.createFramebuffer = function() {
        /// <signature>
        /// <returns type='WebGLFramebuffer'/>
        /// </signature>
        return WebGLFramebuffer;
    };
    WebGLRenderingContext.createProgram = function() {
        /// <signature>
        /// <returns type='WebGLProgram'/>
        /// </signature>
        return WebGLProgram;
    };
    WebGLRenderingContext.createRenderbuffer = function() {
        /// <signature>
        /// <returns type='WebGLRenderbuffer'/>
        /// </signature>
        return WebGLRenderbuffer;
    };
    WebGLRenderingContext.createShader = function(type) {
        /// <signature>
        /// <param name='type' type='Number'/>
        /// <returns type='WebGLShader'/>
        /// </signature>
        return WebGLShader;
    };
    WebGLRenderingContext.createTexture = function() {
        /// <signature>
        /// <returns type='WebGLTexture'/>
        /// </signature>
        return WebGLTexture;
    };
    WebGLRenderingContext.cullFace = function(mode) {
        /// <signature>
        /// <param name='mode' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.deleteBuffer = function(buffer) {
        /// <signature>
        /// <param name='buffer' type='WebGLBuffer'/>
        /// </signature>
    };
    WebGLRenderingContext.deleteFramebuffer = function(framebuffer) {
        /// <signature>
        /// <param name='framebuffer' type='WebGLFramebuffer'/>
        /// </signature>
    };
    WebGLRenderingContext.deleteProgram = function(program) {
        /// <signature>
        /// <param name='program' type='WebGLProgram'/>
        /// </signature>
    };
    WebGLRenderingContext.deleteRenderbuffer = function(renderbuffer) {
        /// <signature>
        /// <param name='renderbuffer' type='WebGLRenderbuffer'/>
        /// </signature>
    };
    WebGLRenderingContext.deleteShader = function(shader) {
        /// <signature>
        /// <param name='shader' type='WebGLShader'/>
        /// </signature>
    };
    WebGLRenderingContext.deleteTexture = function(texture) {
        /// <signature>
        /// <param name='texture' type='WebGLTexture'/>
        /// </signature>
    };
    WebGLRenderingContext.depthFunc = function(func) {
        /// <signature>
        /// <param name='func' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.depthMask = function(flag) {
        /// <signature>
        /// <param name='flag' type='Boolean'/>
        /// </signature>
    };
    WebGLRenderingContext.depthRange = function(zNear, zFar) {
        /// <signature>
        /// <param name='zNear' type='Number'/>
        /// <param name='zFar' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.detachShader = function(program, shader) {
        /// <signature>
        /// <param name='program' type='WebGLProgram'/>
        /// <param name='shader' type='WebGLShader'/>
        /// </signature>
    };
    WebGLRenderingContext.disable = function(cap) {
        /// <signature>
        /// <param name='cap' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.disableVertexAttribArray = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.drawArrays = function(mode, first, count) {
        /// <signature>
        /// <param name='mode' type='Number'/>
        /// <param name='first' type='Number'/>
        /// <param name='count' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.drawElements = function(mode, count, type, offset) {
        /// <signature>
        /// <param name='mode' type='Number'/>
        /// <param name='count' type='Number'/>
        /// <param name='type' type='Number'/>
        /// <param name='offset' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.enable = function(cap) {
        /// <signature>
        /// <param name='cap' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.enableVertexAttribArray = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.finish = function() {
    };
    WebGLRenderingContext.flush = function() {
    };
    WebGLRenderingContext.framebufferRenderbuffer = function(target, attachment, renderbuffertarget, renderbuffer) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='attachment' type='Number'/>
        /// <param name='renderbuffertarget' type='Number'/>
        /// <param name='renderbuffer' type='WebGLRenderbuffer'/>
        /// </signature>
    };
    WebGLRenderingContext.framebufferTexture2D = function(target, attachment, textarget, texture, level) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='attachment' type='Number'/>
        /// <param name='textarget' type='Number'/>
        /// <param name='texture' type='WebGLTexture'/>
        /// <param name='level' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.frontFace = function(mode) {
        /// <signature>
        /// <param name='mode' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.generateMipmap = function(target) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.getActiveAttrib = function(program, index) {
        /// <signature>
        /// <param name='program' type='WebGLProgram'/>
        /// <param name='index' type='Number'/>
        /// <returns type='WebGLActiveInfo'/>
        /// </signature>
        return WebGLActiveInfo;
    };
    WebGLRenderingContext.getActiveUniform = function(program, index) {
        /// <signature>
        /// <param name='program' type='WebGLProgram'/>
        /// <param name='index' type='Number'/>
        /// <returns type='WebGLActiveInfo'/>
        /// </signature>
        return WebGLActiveInfo;
    };
    WebGLRenderingContext.getAttachedShaders = function(program) {
        /// <signature>
        /// <param name='program' type='WebGLProgram'/>
        /// <returns type='Array' elementType='WebGLShader'/>
        /// </signature>
        return [];
    };
    WebGLRenderingContext.getAttribLocation = function(program, name) {
        /// <signature>
        /// <param name='program' type='WebGLProgram'/>
        /// <param name='name' type='String'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    WebGLRenderingContext.getBufferParameter = function(target, pname) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='pname' type='Number'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    WebGLRenderingContext.getContextAttributes = function() {
        /// <signature>
        /// <returns type='WebGLContextAttributes'/>
        /// </signature>
        return WebGLContextAttributes;
    };
    WebGLRenderingContext.getError = function() {
        /// <signature>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    WebGLRenderingContext.getExtension = function(name) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    WebGLRenderingContext.getFramebufferAttachmentParameter = function(target, attachment, pname) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='attachment' type='Number'/>
        /// <param name='pname' type='Number'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    WebGLRenderingContext.getParameter = function(pname) {
        /// <signature>
        /// <param name='pname' type='Number'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    WebGLRenderingContext.getProgramInfoLog = function(program) {
        /// <signature>
        /// <param name='program' type='WebGLProgram'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    WebGLRenderingContext.getProgramParameter = function(program, pname) {
        /// <signature>
        /// <param name='program' type='WebGLProgram'/>
        /// <param name='pname' type='Number'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    WebGLRenderingContext.getRenderbufferParameter = function(target, pname) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='pname' type='Number'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    WebGLRenderingContext.getShaderInfoLog = function(shader) {
        /// <signature>
        /// <param name='shader' type='WebGLShader'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    WebGLRenderingContext.getShaderParameter = function(shader, pname) {
        /// <signature>
        /// <param name='shader' type='WebGLShader'/>
        /// <param name='pname' type='Number'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    WebGLRenderingContext.getShaderPrecisionFormat = function(shadertype, precisiontype) {
        /// <signature>
        /// <param name='shadertype' type='Number'/>
        /// <param name='precisiontype' type='Number'/>
        /// <returns type='WebGLShaderPrecisionFormat'/>
        /// </signature>
        return WebGLShaderPrecisionFormat;
    };
    WebGLRenderingContext.getShaderSource = function(shader) {
        /// <signature>
        /// <param name='shader' type='WebGLShader'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    WebGLRenderingContext.getSupportedExtensions = function() {
        /// <signature>
        /// <returns type='Array' elementType='String'/>
        /// </signature>
        return [];
    };
    WebGLRenderingContext.getTexParameter = function(target, pname) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='pname' type='Number'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    WebGLRenderingContext.getUniform = function(program, location) {
        /// <signature>
        /// <param name='program' type='WebGLProgram'/>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    WebGLRenderingContext.getUniformLocation = function(program, name) {
        /// <signature>
        /// <param name='program' type='WebGLProgram'/>
        /// <param name='name' type='String'/>
        /// <returns type='WebGLUniformLocation'/>
        /// </signature>
        return WebGLUniformLocation;
    };
    WebGLRenderingContext.getVertexAttrib = function(index, pname) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <param name='pname' type='Number'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    WebGLRenderingContext.getVertexAttribOffset = function(index, pname) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <param name='pname' type='Number'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    WebGLRenderingContext.hint = function(target, mode) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='mode' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.isBuffer = function(buffer) {
        /// <signature>
        /// <param name='buffer' type='WebGLBuffer'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    WebGLRenderingContext.isContextLost = function() {
        /// <signature>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    WebGLRenderingContext.isEnabled = function(cap) {
        /// <signature>
        /// <param name='cap' type='Number'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    WebGLRenderingContext.isFramebuffer = function(framebuffer) {
        /// <signature>
        /// <param name='framebuffer' type='WebGLFramebuffer'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    WebGLRenderingContext.isProgram = function(program) {
        /// <signature>
        /// <param name='program' type='WebGLProgram'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    WebGLRenderingContext.isRenderbuffer = function(renderbuffer) {
        /// <signature>
        /// <param name='renderbuffer' type='WebGLRenderbuffer'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    WebGLRenderingContext.isShader = function(shader) {
        /// <signature>
        /// <param name='shader' type='WebGLShader'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    WebGLRenderingContext.isTexture = function(texture) {
        /// <signature>
        /// <param name='texture' type='WebGLTexture'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    WebGLRenderingContext.lineWidth = function(width) {
        /// <signature>
        /// <param name='width' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.linkProgram = function(program) {
        /// <signature>
        /// <param name='program' type='WebGLProgram'/>
        /// </signature>
    };
    WebGLRenderingContext.pixelStorei = function(pname, param) {
        /// <signature>
        /// <param name='pname' type='Number'/>
        /// <param name='param' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.polygonOffset = function(factor, units) {
        /// <signature>
        /// <param name='factor' type='Number'/>
        /// <param name='units' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.readPixels = function(x, y, width, height, format, type, pixels) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='width' type='Number'/>
        /// <param name='height' type='Number'/>
        /// <param name='format' type='Number'/>
        /// <param name='type' type='Number'/>
        /// <param name='pixels' type='Uint8Array'/>
        /// </signature>
    };
    WebGLRenderingContext.renderbufferStorage = function(target, internalformat, width, height) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='internalformat' type='Number'/>
        /// <param name='width' type='Number'/>
        /// <param name='height' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.sampleCoverage = function(value, invert) {
        /// <signature>
        /// <param name='value' type='Number'/>
        /// <param name='invert' type='Boolean'/>
        /// </signature>
    };
    WebGLRenderingContext.scissor = function(x, y, width, height) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='width' type='Number'/>
        /// <param name='height' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.shaderSource = function(shader, source) {
        /// <signature>
        /// <param name='shader' type='WebGLShader'/>
        /// <param name='source' type='String'/>
        /// </signature>
    };
    WebGLRenderingContext.stencilFunc = function(func, ref, mask) {
        /// <signature>
        /// <param name='func' type='Number'/>
        /// <param name='ref' type='Number'/>
        /// <param name='mask' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.stencilFuncSeparate = function(face, func, ref, mask) {
        /// <signature>
        /// <param name='face' type='Number'/>
        /// <param name='func' type='Number'/>
        /// <param name='ref' type='Number'/>
        /// <param name='mask' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.stencilMask = function(mask) {
        /// <signature>
        /// <param name='mask' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.stencilMaskSeparate = function(face, mask) {
        /// <signature>
        /// <param name='face' type='Number'/>
        /// <param name='mask' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.stencilOp = function(fail, zfail, zpass) {
        /// <signature>
        /// <param name='fail' type='Number'/>
        /// <param name='zfail' type='Number'/>
        /// <param name='zpass' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.stencilOpSeparate = function(face, fail, zfail, zpass) {
        /// <signature>
        /// <param name='face' type='Number'/>
        /// <param name='fail' type='Number'/>
        /// <param name='zfail' type='Number'/>
        /// <param name='zpass' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.texImage2D = function(target, level, internalformat, format, type, pixels) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='level' type='Number'/>
        /// <param name='internalformat' type='Number'/>
        /// <param name='format' type='Number'/>
        /// <param name='type' type='Number'/>
        /// <param name='pixels' type='ImageData'/>
        /// </signature>
    };
    WebGLRenderingContext.texParameterf = function(target, pname, param) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='pname' type='Number'/>
        /// <param name='param' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.texParameteri = function(target, pname, param) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='pname' type='Number'/>
        /// <param name='param' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.texSubImage2D = function(target, level, xoffset, yoffset, format, type, pixels) {
        /// <signature>
        /// <param name='target' type='Number'/>
        /// <param name='level' type='Number'/>
        /// <param name='xoffset' type='Number'/>
        /// <param name='yoffset' type='Number'/>
        /// <param name='format' type='Number'/>
        /// <param name='type' type='Number'/>
        /// <param name='pixels' type='ImageData'/>
        /// </signature>
    };
    WebGLRenderingContext.uniform1f = function(location, x) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='x' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.uniform1fv = function(location, v) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='v' type='Float32Array'/>
        /// </signature>
    };
    WebGLRenderingContext.uniform1i = function(location, x) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='x' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.uniform1iv = function(location, v) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='v' type='Int32Array'/>
        /// </signature>
    };
    WebGLRenderingContext.uniform2f = function(location, x, y) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.uniform2fv = function(location, v) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='v' type='Float32Array'/>
        /// </signature>
    };
    WebGLRenderingContext.uniform2i = function(location, x, y) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.uniform2iv = function(location, v) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='v' type='Int32Array'/>
        /// </signature>
    };
    WebGLRenderingContext.uniform3f = function(location, x, y, z) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='z' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.uniform3fv = function(location, v) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='v' type='Float32Array'/>
        /// </signature>
    };
    WebGLRenderingContext.uniform3i = function(location, x, y, z) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='z' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.uniform3iv = function(location, v) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='v' type='Int32Array'/>
        /// </signature>
    };
    WebGLRenderingContext.uniform4f = function(location, x, y, z, w) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='z' type='Number'/>
        /// <param name='w' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.uniform4fv = function(location, v) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='v' type='Float32Array'/>
        /// </signature>
    };
    WebGLRenderingContext.uniform4i = function(location, x, y, z, w) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='z' type='Number'/>
        /// <param name='w' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.uniform4iv = function(location, v) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='v' type='Int32Array'/>
        /// </signature>
    };
    WebGLRenderingContext.uniformMatrix2fv = function(location, transpose, value) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='transpose' type='Boolean'/>
        /// <param name='value' type='Float32Array'/>
        /// </signature>
    };
    WebGLRenderingContext.uniformMatrix3fv = function(location, transpose, value) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='transpose' type='Boolean'/>
        /// <param name='value' type='Float32Array'/>
        /// </signature>
    };
    WebGLRenderingContext.uniformMatrix4fv = function(location, transpose, value) {
        /// <signature>
        /// <param name='location' type='WebGLUniformLocation'/>
        /// <param name='transpose' type='Boolean'/>
        /// <param name='value' type='Float32Array'/>
        /// </signature>
    };
    WebGLRenderingContext.useProgram = function(program) {
        /// <signature>
        /// <param name='program' type='WebGLProgram'/>
        /// </signature>
    };
    WebGLRenderingContext.validateProgram = function(program) {
        /// <signature>
        /// <param name='program' type='WebGLProgram'/>
        /// </signature>
    };
    WebGLRenderingContext.vertexAttrib1f = function(indx, x) {
        /// <signature>
        /// <param name='indx' type='Number'/>
        /// <param name='x' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.vertexAttrib1fv = function(indx, values) {
        /// <signature>
        /// <param name='indx' type='Number'/>
        /// <param name='values' type='Float32Array'/>
        /// </signature>
    };
    WebGLRenderingContext.vertexAttrib2f = function(indx, x, y) {
        /// <signature>
        /// <param name='indx' type='Number'/>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.vertexAttrib2fv = function(indx, values) {
        /// <signature>
        /// <param name='indx' type='Number'/>
        /// <param name='values' type='Float32Array'/>
        /// </signature>
    };
    WebGLRenderingContext.vertexAttrib3f = function(indx, x, y, z) {
        /// <signature>
        /// <param name='indx' type='Number'/>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='z' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.vertexAttrib3fv = function(indx, values) {
        /// <signature>
        /// <param name='indx' type='Number'/>
        /// <param name='values' type='Float32Array'/>
        /// </signature>
    };
    WebGLRenderingContext.vertexAttrib4f = function(indx, x, y, z, w) {
        /// <signature>
        /// <param name='indx' type='Number'/>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='z' type='Number'/>
        /// <param name='w' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.vertexAttrib4fv = function(indx, values) {
        /// <signature>
        /// <param name='indx' type='Number'/>
        /// <param name='values' type='Float32Array'/>
        /// </signature>
    };
    WebGLRenderingContext.vertexAttribPointer = function(indx, size, type, normalized, stride, offset) {
        /// <signature>
        /// <param name='indx' type='Number'/>
        /// <param name='size' type='Number'/>
        /// <param name='type' type='Number'/>
        /// <param name='normalized' type='Boolean'/>
        /// <param name='stride' type='Number'/>
        /// <param name='offset' type='Number'/>
        /// </signature>
    };
    WebGLRenderingContext.viewport = function(x, y, width, height) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='width' type='Number'/>
        /// <param name='height' type='Number'/>
        /// </signature>
    };
    
    /* -- type: WebGLShaderPrecisionFormat -- */
    
    WebGLShaderPrecisionFormat.precision = 0;
    WebGLShaderPrecisionFormat.rangeMax = 0;
    WebGLShaderPrecisionFormat.rangeMin = 0;
    
    /* -- type: WebGLUniformLocation -- */
    
    
    /* -- type: WebKitCSSMatrix -- */
    
    WebKitCSSMatrix.a = 0;
    WebKitCSSMatrix.b = 0;
    WebKitCSSMatrix.c = 0;
    WebKitCSSMatrix.d = 0;
    WebKitCSSMatrix.e = 0;
    WebKitCSSMatrix.f = 0;
    WebKitCSSMatrix.m11 = 0;
    WebKitCSSMatrix.m12 = 0;
    WebKitCSSMatrix.m13 = 0;
    WebKitCSSMatrix.m14 = 0;
    WebKitCSSMatrix.m21 = 0;
    WebKitCSSMatrix.m22 = 0;
    WebKitCSSMatrix.m23 = 0;
    WebKitCSSMatrix.m24 = 0;
    WebKitCSSMatrix.m31 = 0;
    WebKitCSSMatrix.m32 = 0;
    WebKitCSSMatrix.m33 = 0;
    WebKitCSSMatrix.m34 = 0;
    WebKitCSSMatrix.m41 = 0;
    WebKitCSSMatrix.m42 = 0;
    WebKitCSSMatrix.m43 = 0;
    WebKitCSSMatrix.m44 = 0;
    WebKitCSSMatrix.inverse = function() {
        /// <signature>
        /// <returns type='WebKitCSSMatrix'/>
        /// </signature>
        return WebKitCSSMatrix;
    };
    WebKitCSSMatrix.multiply = function(secondMatrix) {
        /// <signature>
        /// <param name='secondMatrix' type='WebKitCSSMatrix'/>
        /// <returns type='WebKitCSSMatrix'/>
        /// </signature>
        return WebKitCSSMatrix;
    };
    WebKitCSSMatrix.rotate = function(angleX, angleY, angleZ) {
        /// <signature>
        /// <param name='angleX' type='Number'/>
        /// <param name='angleY' type='Number' optional='true' />
        /// <param name='angleZ' type='Number' optional='true' />
        /// <returns type='WebKitCSSMatrix'/>
        /// </signature>
        return WebKitCSSMatrix;
    };
    WebKitCSSMatrix.rotateAxisAngle = function(x, y, z, angle) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='z' type='Number'/>
        /// <param name='angle' type='Number'/>
        /// <returns type='WebKitCSSMatrix'/>
        /// </signature>
        return WebKitCSSMatrix;
    };
    WebKitCSSMatrix.scale = function(scaleX, scaleY, scaleZ) {
        /// <signature>
        /// <param name='scaleX' type='Number'/>
        /// <param name='scaleY' type='Number' optional='true' />
        /// <param name='scaleZ' type='Number' optional='true' />
        /// <returns type='WebKitCSSMatrix'/>
        /// </signature>
        return WebKitCSSMatrix;
    };
    WebKitCSSMatrix.setMatrixValue = function(value) {
        /// <signature>
        /// <param name='value' type='String'/>
        /// </signature>
    };
    WebKitCSSMatrix.skewX = function(angle) {
        /// <signature>
        /// <param name='angle' type='Number'/>
        /// <returns type='WebKitCSSMatrix'/>
        /// </signature>
        return WebKitCSSMatrix;
    };
    WebKitCSSMatrix.skewY = function(angle) {
        /// <signature>
        /// <param name='angle' type='Number'/>
        /// <returns type='WebKitCSSMatrix'/>
        /// </signature>
        return WebKitCSSMatrix;
    };
    WebKitCSSMatrix.toString = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    WebKitCSSMatrix.translate = function(x, y, z) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='z' type='Number' optional='true' />
        /// <returns type='WebKitCSSMatrix'/>
        /// </signature>
        return WebKitCSSMatrix;
    };
    
    /* -- type: WebKitPoint -- */
    
    WebKitPoint.x = 0;
    WebKitPoint.y = 0;
    
    /* -- type: XMLSerializer -- */
    
    XMLSerializer.serializeToString = function(target) {
        /// <signature>
        /// <param name='target' type='Node'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    
    /* -- type: XPathEvaluator -- */
    
    XPathEvaluator.createExpression = function(expression, resolver) {
        /// <signature>
        /// <param name='expression' type='String'/>
        /// <param name='resolver' type='XPathNSResolver'/>
        /// <returns type='XPathExpression'/>
        /// </signature>
        return XPathExpression;
    };
    XPathEvaluator.createNSResolver = function(nodeResolver) {
        /// <signature>
        /// <param name='nodeResolver' type='Node' optional='true' />
        /// <returns type='XPathNSResolver'/>
        /// </signature>
        return XPathNSResolver;
    };
    XPathEvaluator.evaluate = function(expression, contextNode, resolver, type, result) {
        /// <signature>
        /// <param name='expression' type='String'/>
        /// <param name='contextNode' type='Node'/>
        /// <param name='resolver' type='XPathNSResolver'/>
        /// <param name='type' type='Number'/>
        /// <param name='result' type='XPathResult'/>
        /// <returns type='XPathResult'/>
        /// </signature>
        return XPathResult;
    };
    
    /* -- type: XPathExpression -- */
    
    XPathExpression.evaluate = function(contextNode, type, result) {
        /// <signature>
        /// <param name='contextNode' type='Node'/>
        /// <param name='type' type='Number'/>
        /// <param name='result' type='XPathResult'/>
        /// <returns type='XPathExpression'/>
        /// </signature>
        return XPathExpression;
    };
    
    /* -- type: XPathNSResolver -- */
    
    XPathNSResolver.lookupNamespaceURI = function(prefix) {
        /// <signature>
        /// <param name='prefix' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    
    /* -- type: XPathResult -- */
    
    XPathResult.booleanValue = false;
    XPathResult.invalidIteratorState = false;
    XPathResult.numberValue = 0;
    XPathResult.resultType = 0;
    XPathResult.singleNodeValue = Node;
    XPathResult.snapshotLength = 0;
    XPathResult.stringValue = '';
    XPathResult.ANY_TYPE = 0;
    XPathResult.ANY_UNORDERED_NODE_TYPE = 8;
    XPathResult.BOOLEAN_TYPE = 3;
    XPathResult.FIRST_ORDERED_NODE_TYPE = 9;
    XPathResult.NUMBER_TYPE = 1;
    XPathResult.ORDERED_NODE_ITERATOR_TYPE = 5;
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE = 7;
    XPathResult.STRING_TYPE = 2;
    XPathResult.UNORDERED_NODE_ITERATOR_TYPE = 4;
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE = 6;
    XPathResult.iterateNext = function() {
        /// <signature>
        /// <returns type='Node'/>
        /// </signature>
        return Node;
    };
    XPathResult.snapshotItem = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='Node'/>
        /// </signature>
        return Node;
    };
    
    /* -- type: XSLTProcessor -- */
    
    XSLTProcessor.clearParameters = function() {
    };
    XSLTProcessor.getParameter = function(namespaceURI, localName) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <param name='localName' type='String'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    XSLTProcessor.importStylesheet = function(style) {
        /// <signature>
        /// <param name='style' type='Node'/>
        /// </signature>
    };
    XSLTProcessor.removeParameter = function(namespaceURI, localName) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <param name='localName' type='String'/>
        /// </signature>
    };
    XSLTProcessor.reset = function() {
    };
    XSLTProcessor.setParameter = function(namespaceURI, localName, value) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <param name='localName' type='String'/>
        /// <param name='value' type='Object'/>
        /// </signature>
    };
    XSLTProcessor.transformToDocument = function(source) {
        /// <signature>
        /// <param name='source' type='Node'/>
        /// <returns type='Document'/>
        /// </signature>
        return Document;
    };
    XSLTProcessor.transformToFragment = function(source, document) {
        /// <signature>
        /// <param name='source' type='Node'/>
        /// <param name='document' type='Document'/>
        /// <returns type='DocumentFragment'/>
        /// </signature>
        return DocumentFragment;
    };
    
    /* -- type: EventListener -- */
    
    EventListener.handleEvent = function(evt) {
        /// <signature>
        /// <param name='evt' type='Event'/>
        /// </signature>
    };
    
    /* -- type: AbstractWorker -- */
    
    _events(AbstractWorker, "onerror");
    
    /* -- type: ChildNode -- */
    
    ChildNode.remove = function() {
    };
    
    /* -- type: DOML2DeprecatedColorProperty -- */
    
    DOML2DeprecatedColorProperty.color = '';
    
    /* -- type: DOML2DeprecatedSizeProperty -- */
    
    DOML2DeprecatedSizeProperty.size = 0;
    
    /* -- type: DocumentEvent -- */
    
    DocumentEvent.createEvent = function(eventInterface) {
        /// <signature>
        /// <param name='eventInterface' type='String'/>
        /// <returns type='Event'/>
        /// </signature>
        return _createEvent(eventInterface);
    };
    
    /* -- type: ElementTraversal -- */
    
    Object.defineProperty(ElementTraversal,"childElementCount", { get: function () { return _childElementCount(this); } });
    Object.defineProperty(ElementTraversal,"firstElementChild", { get: function () { return _firstElementChild(this, HTMLElement); } });
    Object.defineProperty(ElementTraversal,"lastElementChild", { get: function () { return _lastElementChild(this, HTMLElement); } });
    Object.defineProperty(ElementTraversal,"nextElementSibling", { get: function () { return _nextElementSibling(this, HTMLElement); } });
    Object.defineProperty(ElementTraversal,"previousElementSibling", { get: function () { return _previousElementSibling(this, HTMLElement); } });
    
    /* -- type: GetSVGDocument -- */
    
    GetSVGDocument.getSVGDocument = function() {
        /// <signature>
        /// <returns type='Document'/>
        /// </signature>
        return Document;
    };
    
    /* -- type: GlobalEventHandlers -- */
    
    _events(GlobalEventHandlers, "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onwheel");
    
    /* -- type: HTMLTableAlignment -- */
    
    HTMLTableAlignment.ch = '';
    HTMLTableAlignment.chOff = '';
    HTMLTableAlignment.vAlign = '';
    
    /* -- type: IDBEnvironment -- */
    
    IDBEnvironment.indexedDB = IDBFactory;
    IDBEnvironment.msIndexedDB = IDBFactory;
    
    /* -- type: LinkStyle -- */
    
    LinkStyle.sheet = StyleSheet;
    
    /* -- type: MSBaseReader -- */
    
    MSBaseReader.readyState = 0;
    MSBaseReader.result = {};
    MSBaseReader.DONE = 2;
    MSBaseReader.EMPTY = 0;
    MSBaseReader.LOADING = 1;
    MSBaseReader.abort = function() {
    };
    _events(MSBaseReader, "onabort", "onerror", "onload", "onloadend", "onloadstart", "onprogress");
    
    /* -- type: MSFileSaver -- */
    
    MSFileSaver.msSaveBlob = function(blob, defaultName) {
        /// <signature>
        /// <param name='blob' type='Object'/>
        /// <param name='defaultName' type='String' optional='true' />
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    MSFileSaver.msSaveOrOpenBlob = function(blob, defaultName) {
        /// <signature>
        /// <param name='blob' type='Object'/>
        /// <param name='defaultName' type='String' optional='true' />
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    
    /* -- type: MSNavigatorDoNotTrack -- */
    
    MSNavigatorDoNotTrack.confirmSiteSpecificTrackingException = function(args) {
        /// <signature>
        /// <param name='args' type='ConfirmSiteSpecificExceptionsInformation'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    MSNavigatorDoNotTrack.confirmWebWideTrackingException = function(args) {
        /// <signature>
        /// <param name='args' type='ExceptionInformation'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    MSNavigatorDoNotTrack.removeSiteSpecificTrackingException = function(args) {
        /// <signature>
        /// <param name='args' type='ExceptionInformation'/>
        /// </signature>
    };
    MSNavigatorDoNotTrack.removeWebWideTrackingException = function(args) {
        /// <signature>
        /// <param name='args' type='ExceptionInformation'/>
        /// </signature>
    };
    MSNavigatorDoNotTrack.storeSiteSpecificTrackingException = function(args) {
        /// <signature>
        /// <param name='args' type='StoreSiteSpecificExceptionsInformation'/>
        /// </signature>
    };
    MSNavigatorDoNotTrack.storeWebWideTrackingException = function(args) {
        /// <signature>
        /// <param name='args' type='StoreExceptionsInformation'/>
        /// </signature>
    };
    
    /* -- type: NavigatorContentUtils -- */
    
    
    /* -- type: NavigatorGeolocation -- */
    
    NavigatorGeolocation.geolocation = Geolocation;
    
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
    
    /* -- type: NavigatorStorageUtils -- */
    
    
    /* -- type: NodeSelector -- */
    
    NodeSelector.querySelector = function(selectors) {
        /// <signature>
        /// <param name='selectors' type='String'/>
        /// <returns type='Element'/>
        /// </signature>
        return _querySelector(this, selectors);
    };
    NodeSelector.querySelectorAll = function(selectors) {
        /// <signature>
        /// <param name='selectors' type='String'/>
        /// <returns type='NodeList'/>
        /// </signature>
        return _querySelectorAll(this, selectors);
    };
    
    /* -- type: RandomSource -- */
    
    RandomSource.getRandomValues = function(array) {
        /// <signature>
        /// <param name='array' type='Uint8Array'/>
        /// <returns type='Uint8Array'/>
        /// </signature>
        return new Uint8Array();
    };
    
    /* -- type: SVGAnimatedPathData -- */
    
    SVGAnimatedPathData.pathSegList = SVGPathSegList;
    
    /* -- type: SVGAnimatedPoints -- */
    
    SVGAnimatedPoints.animatedPoints = SVGPointList;
    SVGAnimatedPoints.points = SVGPointList;
    
    /* -- type: SVGExternalResourcesRequired -- */
    
    SVGExternalResourcesRequired.externalResourcesRequired = SVGAnimatedBoolean;
    
    /* -- type: SVGFitToViewBox -- */
    
    SVGFitToViewBox.preserveAspectRatio = SVGAnimatedPreserveAspectRatio;
    SVGFitToViewBox.viewBox = SVGAnimatedRect;
    
    /* -- type: SVGLangSpace -- */
    
    SVGLangSpace.xmllang = '';
    SVGLangSpace.xmlspace = '';
    
    /* -- type: SVGLocatable -- */
    
    SVGLocatable.farthestViewportElement = SVGElement;
    SVGLocatable.nearestViewportElement = SVGElement;
    SVGLocatable.getBBox = function() {
        /// <signature>
        /// <returns type='SVGRect'/>
        /// </signature>
        return SVGRect;
    };
    SVGLocatable.getCTM = function() {
        /// <signature>
        /// <returns type='SVGMatrix'/>
        /// </signature>
        return SVGMatrix;
    };
    SVGLocatable.getScreenCTM = function() {
        /// <signature>
        /// <returns type='SVGMatrix'/>
        /// </signature>
        return SVGMatrix;
    };
    SVGLocatable.getTransformToElement = function(element) {
        /// <signature>
        /// <param name='element' type='SVGElement'/>
        /// <returns type='SVGMatrix'/>
        /// </signature>
        return SVGMatrix;
    };
    
    /* -- type: SVGStylable -- */
    
    SVGStylable.className = SVGAnimatedString;
    SVGStylable.style = CSSStyleDeclaration;
    
    /* -- type: SVGTests -- */
    
    SVGTests.requiredExtensions = SVGStringList;
    SVGTests.requiredFeatures = SVGStringList;
    SVGTests.systemLanguage = SVGStringList;
    SVGTests.hasExtension = function(extension) {
        /// <signature>
        /// <param name='extension' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    
    /* -- type: SVGURIReference -- */
    
    SVGURIReference.href = SVGAnimatedString;
    
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
    
    /* -- type: WindowLocalStorage -- */
    
    WindowLocalStorage.localStorage = Storage;
    
    /* -- type: WindowSessionStorage -- */
    
    WindowSessionStorage.sessionStorage = Storage;
    
    /* -- type: WindowTimersExtension -- */
    
    WindowTimersExtension.clearImmediate = function(handle) {
        /// <signature>
        /// <param name='handle' type='Number'/>
        /// </signature>
        _$clearTimeout(handle);
    };
    WindowTimersExtension.msClearImmediate = function(handle) {
        /// <signature>
        /// <param name='handle' type='Number'/>
        /// </signature>
        _$clearTimeout(handle);
    };
    WindowTimersExtension.msSetImmediate = function(expression, args) {
        /// <signature>
        /// <param name='expression' type='Object'/>
        /// <param name='args' type='Object'/>
        /// <returns type='Number'/>
        /// </signature>
        return _$setTimeout(expression, null, args);
    };
    WindowTimersExtension.setImmediate = function(expression, args) {
        /// <signature>
        /// <param name='expression' type='Object'/>
        /// <param name='args' type='Object'/>
        /// <returns type='Number'/>
        /// </signature>
        return _$setTimeout(expression, null, args);
    };
    
    /* -- type: XMLHttpRequestEventTarget -- */
    
    _events(XMLHttpRequestEventTarget, "onabort", "onerror", "onload", "onloadend", "onloadstart", "onprogress", "ontimeout");
    
    /* -- type: AnimationEvent -- */
    
    AnimationEvent.animationName = '';
    AnimationEvent.elapsedTime = 0;
    AnimationEvent.initAnimationEvent = function(typeArg, canBubbleArg, cancelableArg, animationNameArg, elapsedTimeArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='animationNameArg' type='String'/>
        /// <param name='elapsedTimeArg' type='Number'/>
        /// </signature>
    };
    
    /* -- type: ApplicationCache -- */
    
    ApplicationCache.status = 0;
    ApplicationCache.CHECKING = 2;
    ApplicationCache.DOWNLOADING = 3;
    ApplicationCache.IDLE = 1;
    ApplicationCache.OBSOLETE = 5;
    ApplicationCache.UNCACHED = 0;
    ApplicationCache.UPDATEREADY = 4;
    ApplicationCache.abort = function() {
    };
    ApplicationCache.swapCache = function() {
    };
    ApplicationCache.update = function() {
    };
    _events(ApplicationCache, "oncached", "onchecking", "ondownloading", "onerror", "onnoupdate", "onobsolete", "onprogress", "onupdateready");
    
    /* -- type: AriaRequestEvent -- */
    
    AriaRequestEvent.attributeName = '';
    AriaRequestEvent.attributeValue = '';
    
    /* -- type: AudioContext -- */
    
    AudioContext.currentTime = 0;
    AudioContext.destination = AudioDestinationNode;
    AudioContext.listener = AudioListener;
    AudioContext.sampleRate = 0;
    AudioContext.createAnalyser = function() {
        /// <signature>
        /// <returns type='AnalyserNode'/>
        /// </signature>
        return AnalyserNode;
    };
    AudioContext.createBiquadFilter = function() {
        /// <signature>
        /// <returns type='BiquadFilterNode'/>
        /// </signature>
        return BiquadFilterNode;
    };
    AudioContext.createBuffer = function(numberOfChannels, length, sampleRate) {
        /// <signature>
        /// <param name='numberOfChannels' type='Number'/>
        /// <param name='length' type='Number'/>
        /// <param name='sampleRate' type='Number'/>
        /// <returns type='AudioBuffer'/>
        /// </signature>
        return AudioBuffer;
    };
    AudioContext.createBufferSource = function() {
        /// <signature>
        /// <returns type='AudioBufferSourceNode'/>
        /// </signature>
        return AudioBufferSourceNode;
    };
    AudioContext.createChannelMerger = function(numberOfInputs) {
        /// <signature>
        /// <param name='numberOfInputs' type='Number' optional='true' />
        /// <returns type='ChannelMergerNode'/>
        /// </signature>
        return ChannelMergerNode;
    };
    AudioContext.createChannelSplitter = function(numberOfOutputs) {
        /// <signature>
        /// <param name='numberOfOutputs' type='Number' optional='true' />
        /// <returns type='ChannelSplitterNode'/>
        /// </signature>
        return ChannelSplitterNode;
    };
    AudioContext.createConvolver = function() {
        /// <signature>
        /// <returns type='ConvolverNode'/>
        /// </signature>
        return ConvolverNode;
    };
    AudioContext.createDelay = function(maxDelayTime) {
        /// <signature>
        /// <param name='maxDelayTime' type='Number' optional='true' />
        /// <returns type='DelayNode'/>
        /// </signature>
        return DelayNode;
    };
    AudioContext.createDynamicsCompressor = function() {
        /// <signature>
        /// <returns type='DynamicsCompressorNode'/>
        /// </signature>
        return DynamicsCompressorNode;
    };
    AudioContext.createGain = function() {
        /// <signature>
        /// <returns type='GainNode'/>
        /// </signature>
        return GainNode;
    };
    AudioContext.createMediaElementSource = function(mediaElement) {
        /// <signature>
        /// <param name='mediaElement' type='HTMLMediaElement'/>
        /// <returns type='MediaElementAudioSourceNode'/>
        /// </signature>
        return MediaElementAudioSourceNode;
    };
    AudioContext.createOscillator = function() {
        /// <signature>
        /// <returns type='OscillatorNode'/>
        /// </signature>
        return OscillatorNode;
    };
    AudioContext.createPanner = function() {
        /// <signature>
        /// <returns type='PannerNode'/>
        /// </signature>
        return PannerNode;
    };
    AudioContext.createPeriodicWave = function(real, imag) {
        /// <signature>
        /// <param name='real' type='Float32Array'/>
        /// <param name='imag' type='Float32Array'/>
        /// <returns type='PeriodicWave'/>
        /// </signature>
        return PeriodicWave;
    };
    AudioContext.createScriptProcessor = function(bufferSize, numberOfInputChannels, numberOfOutputChannels) {
        /// <signature>
        /// <param name='bufferSize' type='Number' optional='true' />
        /// <param name='numberOfInputChannels' type='Number' optional='true' />
        /// <param name='numberOfOutputChannels' type='Number' optional='true' />
        /// <returns type='ScriptProcessorNode'/>
        /// </signature>
        return ScriptProcessorNode;
    };
    AudioContext.createStereoPanner = function() {
        /// <signature>
        /// <returns type='StereoPannerNode'/>
        /// </signature>
        return StereoPannerNode;
    };
    AudioContext.createWaveShaper = function() {
        /// <signature>
        /// <returns type='WaveShaperNode'/>
        /// </signature>
        return WaveShaperNode;
    };
    AudioContext.decodeAudioData = function(audioData, successCallback, errorCallback) {
        /// <signature>
        /// <param name='audioData' type='ArrayBuffer'/>
        /// <param name='successCallback' type='DecodeSuccessCallback'/>
        /// <param name='errorCallback' type='DecodeErrorCallback' optional='true' />
        /// </signature>
    };
    
    /* -- type: AudioNode -- */
    
    AudioNode.channelCount = 0;
    AudioNode.channelCountMode = '';
    AudioNode.channelInterpretation = '';
    AudioNode.context = AudioContext;
    AudioNode.numberOfInputs = 0;
    AudioNode.numberOfOutputs = 0;
    AudioNode.connect = function(destination, output, input) {
        /// <signature>
        /// <param name='destination' type='AudioNode'/>
        /// <param name='output' type='Number' optional='true' />
        /// <param name='input' type='Number' optional='true' />
        /// </signature>
    };
    AudioNode.disconnect = function(output) {
        /// <signature>
        /// <param name='output' type='Number' optional='true' />
        /// </signature>
    };
    
    /* -- type: AudioProcessingEvent -- */
    
    AudioProcessingEvent.inputBuffer = AudioBuffer;
    AudioProcessingEvent.outputBuffer = AudioBuffer;
    AudioProcessingEvent.playbackTime = 0;
    
    /* -- type: AudioTrackList -- */
    
    AudioTrackList.length = 0;
    AudioTrackList.getTrackById = function(id) {
        /// <signature>
        /// <param name='id' type='String'/>
        /// <returns type='AudioTrack'/>
        /// </signature>
        return AudioTrack;
    };
    AudioTrackList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='AudioTrack'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(AudioTrack));
    };
    _events(AudioTrackList, "onaddtrack", "onchange", "onremovetrack");
    /* Add a single array element */
    AudioTrackList[0] = _$getTrackingNull(Object.create(AudioTrack));
    
    /* -- type: BeforeUnloadEvent -- */
    
    BeforeUnloadEvent.returnValue = '';
    
    /* -- type: CSSFontFaceRule -- */
    
    CSSFontFaceRule.style = CSSStyleDeclaration;
    
    /* -- type: CSSGroupingRule -- */
    
    CSSGroupingRule.cssRules = CSSRuleList;
    CSSGroupingRule.deleteRule = function(index) {
        /// <signature>
        /// <param name='index' type='Number' optional='true' />
        /// </signature>
    };
    CSSGroupingRule.insertRule = function(rule, index) {
        /// <signature>
        /// <param name='rule' type='String'/>
        /// <param name='index' type='Number' optional='true' />
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    
    /* -- type: CSSImportRule -- */
    
    CSSImportRule.href = '';
    CSSImportRule.media = MediaList;
    CSSImportRule.styleSheet = CSSStyleSheet;
    
    /* -- type: CSSKeyframeRule -- */
    
    CSSKeyframeRule.keyText = '';
    CSSKeyframeRule.style = CSSStyleDeclaration;
    
    /* -- type: CSSKeyframesRule -- */
    
    CSSKeyframesRule.cssRules = CSSRuleList;
    CSSKeyframesRule.name = '';
    CSSKeyframesRule.appendRule = function(rule) {
        /// <signature>
        /// <param name='rule' type='String'/>
        /// </signature>
    };
    CSSKeyframesRule.deleteRule = function(rule) {
        /// <signature>
        /// <param name='rule' type='String'/>
        /// </signature>
    };
    CSSKeyframesRule.findRule = function(rule) {
        /// <signature>
        /// <param name='rule' type='String'/>
        /// <returns type='CSSKeyframeRule'/>
        /// </signature>
        return CSSKeyframeRule;
    };
    
    /* -- type: CSSNamespaceRule -- */
    
    CSSNamespaceRule.namespaceURI = '';
    CSSNamespaceRule.prefix = '';
    
    /* -- type: CSSPageRule -- */
    
    CSSPageRule.pseudoClass = '';
    CSSPageRule.selector = '';
    CSSPageRule.selectorText = '';
    CSSPageRule.style = CSSStyleDeclaration;
    
    /* -- type: CSSStyleRule -- */
    
    CSSStyleRule.readOnly = false;
    CSSStyleRule.selectorText = '';
    CSSStyleRule.style = CSSStyleDeclaration;
    
    /* -- type: CSSStyleSheet -- */
    
    CSSStyleSheet.cssRules = CSSRuleList;
    CSSStyleSheet.cssText = '';
    CSSStyleSheet.href = '';
    CSSStyleSheet.id = '';
    CSSStyleSheet.imports = StyleSheetList;
    CSSStyleSheet.isAlternate = false;
    CSSStyleSheet.isPrefAlternate = false;
    CSSStyleSheet.ownerRule = CSSRule;
    CSSStyleSheet.owningElement = HTMLElement;
    CSSStyleSheet.pages = StyleSheetPageList;
    CSSStyleSheet.readOnly = false;
    CSSStyleSheet.rules = CSSRuleList;
    CSSStyleSheet.addImport = function(bstrURL, lIndex) {
        /// <signature>
        /// <param name='bstrURL' type='String'/>
        /// <param name='lIndex' type='Number' optional='true' />
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    CSSStyleSheet.addPageRule = function(bstrSelector, bstrStyle, lIndex) {
        /// <signature>
        /// <param name='bstrSelector' type='String'/>
        /// <param name='bstrStyle' type='String'/>
        /// <param name='lIndex' type='Number' optional='true' />
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    CSSStyleSheet.addRule = function(bstrSelector, bstrStyle, lIndex) {
        /// <signature>
        /// <param name='bstrSelector' type='String'/>
        /// <param name='bstrStyle' type='String' optional='true' />
        /// <param name='lIndex' type='Number' optional='true' />
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    CSSStyleSheet.deleteRule = function(index) {
        /// <signature>
        /// <param name='index' type='Number' optional='true' />
        /// </signature>
    };
    CSSStyleSheet.insertRule = function(rule, index) {
        /// <signature>
        /// <param name='rule' type='String'/>
        /// <param name='index' type='Number' optional='true' />
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    CSSStyleSheet.removeImport = function(lIndex) {
        /// <signature>
        /// <param name='lIndex' type='Number'/>
        /// </signature>
    };
    CSSStyleSheet.removeRule = function(lIndex) {
        /// <signature>
        /// <param name='lIndex' type='Number'/>
        /// </signature>
    };
    
    /* -- type: ClipboardEvent -- */
    
    ClipboardEvent.clipboardData = DataTransfer;
    
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
    
    /* -- type: CommandEvent -- */
    
    CommandEvent.commandName = '';
    CommandEvent.detail = '';
    
    /* -- type: Crypto -- */
    
    _$implement(Crypto, RandomSource);
    Crypto.subtle = SubtleCrypto;
    
    /* -- type: CustomEvent -- */
    
    CustomEvent.detail = {};
    CustomEvent.initCustomEvent = function(typeArg, canBubbleArg, cancelableArg, detailArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='detailArg' type='Object'/>
        /// </signature>
    };
    
    /* -- type: DOMSettableTokenList -- */
    
    DOMSettableTokenList.value = '';
    
    /* -- type: DeviceMotionEvent -- */
    
    DeviceMotionEvent.acceleration = DeviceAcceleration;
    DeviceMotionEvent.accelerationIncludingGravity = DeviceAcceleration;
    DeviceMotionEvent.interval = 0;
    DeviceMotionEvent.rotationRate = DeviceRotationRate;
    DeviceMotionEvent.initDeviceMotionEvent = function(type, bubbles, cancelable, acceleration, accelerationIncludingGravity, rotationRate, interval) {
        /// <signature>
        /// <param name='type' type='String'/>
        /// <param name='bubbles' type='Boolean'/>
        /// <param name='cancelable' type='Boolean'/>
        /// <param name='acceleration' type='DeviceAccelerationDict'/>
        /// <param name='accelerationIncludingGravity' type='DeviceAccelerationDict'/>
        /// <param name='rotationRate' type='DeviceRotationRateDict'/>
        /// <param name='interval' type='Number'/>
        /// </signature>
    };
    
    /* -- type: DeviceOrientationEvent -- */
    
    DeviceOrientationEvent.absolute = false;
    DeviceOrientationEvent.alpha = 0;
    DeviceOrientationEvent.beta = 0;
    DeviceOrientationEvent.gamma = 0;
    DeviceOrientationEvent.initDeviceOrientationEvent = function(type, bubbles, cancelable, alpha, beta, gamma, absolute) {
        /// <signature>
        /// <param name='type' type='String'/>
        /// <param name='bubbles' type='Boolean'/>
        /// <param name='cancelable' type='Boolean'/>
        /// <param name='alpha' type='Number'/>
        /// <param name='beta' type='Number'/>
        /// <param name='gamma' type='Number'/>
        /// <param name='absolute' type='Boolean'/>
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
    
    /* -- type: GamepadEvent -- */
    
    GamepadEvent.gamepad = Gamepad;
    
    /* -- type: HTMLAllCollection -- */
    
    HTMLAllCollection.namedItem = function(name) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <returns type='Element'/>
        /// </signature>
        return HTMLElement;
    };
    
    /* -- type: HTMLAreasCollection -- */
    
    HTMLAreasCollection.add = function(element, before) {
        /// <signature>
        /// <param name='element' type='HTMLElement'/>
        /// <param name='before' type='HTMLElement' optional='true' />
        /// </signature>
        /// <signature>
        /// <param name='element' type='HTMLElement'/>
        /// <param name='before' type='Number' optional='true' />
        /// </signature>
    };
    HTMLAreasCollection.remove = function(index) {
        /// <signature>
        /// <param name='index' type='Number' optional='true' />
        /// </signature>
    };
    
    /* -- type: HashChangeEvent -- */
    
    HashChangeEvent.newURL = '';
    HashChangeEvent.oldURL = '';
    
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
    
    /* -- type: LongRunningScriptDetectedEvent -- */
    
    LongRunningScriptDetectedEvent.executionTime = 0;
    LongRunningScriptDetectedEvent.stopPageScriptExecution = false;
    
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
    
    /* -- type: MSInputMethodContext -- */
    
    MSInputMethodContext.compositionEndOffset = 0;
    MSInputMethodContext.compositionStartOffset = 0;
    MSInputMethodContext.target = HTMLElement;
    MSInputMethodContext.getCandidateWindowClientRect = function() {
        /// <signature>
        /// <returns type='ClientRect'/>
        /// </signature>
        return ClientRect;
    };
    MSInputMethodContext.getCompositionAlternatives = function() {
        /// <signature>
        /// <returns type='Array' elementType='String'/>
        /// </signature>
        return [];
    };
    MSInputMethodContext.hasComposition = function() {
        /// <signature>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    MSInputMethodContext.isCandidateWindowVisible = function() {
        /// <signature>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    _events(MSInputMethodContext, "oncandidatewindowhide", "oncandidatewindowshow", "oncandidatewindowupdate");
    
    /* -- type: MSMediaKeyMessageEvent -- */
    
    MSMediaKeyMessageEvent.destinationURL = '';
    MSMediaKeyMessageEvent.message = new Uint8Array();
    
    /* -- type: MSMediaKeyNeededEvent -- */
    
    MSMediaKeyNeededEvent.initData = new Uint8Array();
    
    /* -- type: MSMediaKeySession -- */
    
    MSMediaKeySession.error = MSMediaKeyError;
    MSMediaKeySession.keySystem = '';
    MSMediaKeySession.sessionId = '';
    MSMediaKeySession.close = function() {
    };
    MSMediaKeySession.update = function(key) {
        /// <signature>
        /// <param name='key' type='Uint8Array'/>
        /// </signature>
    };
    
    /* -- type: MSSiteModeEvent -- */
    
    MSSiteModeEvent.actionURL = '';
    MSSiteModeEvent.buttonID = 0;
    
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
    
    /* -- type: MSWebViewAsyncOperation -- */
    
    MSWebViewAsyncOperation.error = DOMError;
    MSWebViewAsyncOperation.readyState = 0;
    MSWebViewAsyncOperation.result = {};
    MSWebViewAsyncOperation.target = MSHTMLWebViewElement;
    MSWebViewAsyncOperation.type = 0;
    MSWebViewAsyncOperation.COMPLETED = 1;
    MSWebViewAsyncOperation.ERROR = 2;
    MSWebViewAsyncOperation.STARTED = 0;
    MSWebViewAsyncOperation.TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM = 0;
    MSWebViewAsyncOperation.TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION = 2;
    MSWebViewAsyncOperation.TYPE_INVOKE_SCRIPT = 1;
    MSWebViewAsyncOperation.start = function() {
    };
    _events(MSWebViewAsyncOperation, "oncomplete", "onerror");
    
    /* -- type: MediaSource -- */
    
    MediaSource.activeSourceBuffers = SourceBufferList;
    MediaSource.duration = 0;
    MediaSource.readyState = 0;
    MediaSource.sourceBuffers = SourceBufferList;
    MediaSource.addSourceBuffer = function(type) {
        /// <signature>
        /// <param name='type' type='String'/>
        /// <returns type='SourceBuffer'/>
        /// </signature>
        return SourceBuffer;
    };
    MediaSource.endOfStream = function(error) {
        /// <signature>
        /// <param name='error' type='Number' optional='true' />
        /// </signature>
    };
    MediaSource.isTypeSupported = function(type) {
        /// <signature>
        /// <param name='type' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    MediaSource.removeSourceBuffer = function(sourceBuffer) {
        /// <signature>
        /// <param name='sourceBuffer' type='SourceBuffer'/>
        /// </signature>
    };
    
    /* -- type: MessageEvent -- */
    
    MessageEvent.data = {};
    MessageEvent.origin = '';
    MessageEvent.ports = {};
    MessageEvent.source = Window;
    MessageEvent.initMessageEvent = function(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='dataArg' type='Object'/>
        /// <param name='originArg' type='String'/>
        /// <param name='lastEventIdArg' type='String'/>
        /// <param name='sourceArg' type='Window'/>
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
    
    /* -- type: MutationEvent -- */
    
    MutationEvent.attrChange = 0;
    MutationEvent.attrName = '';
    MutationEvent.newValue = '';
    MutationEvent.prevValue = '';
    MutationEvent.relatedNode = Node;
    MutationEvent.ADDITION = 2;
    MutationEvent.MODIFICATION = 1;
    MutationEvent.REMOVAL = 3;
    MutationEvent.initMutationEvent = function(typeArg, canBubbleArg, cancelableArg, relatedNodeArg, prevValueArg, newValueArg, attrNameArg, attrChangeArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='relatedNodeArg' type='Node'/>
        /// <param name='prevValueArg' type='String'/>
        /// <param name='newValueArg' type='String'/>
        /// <param name='attrNameArg' type='String'/>
        /// <param name='attrChangeArg' type='Number'/>
        /// </signature>
    };
    
    /* -- type: NavigationEvent -- */
    
    NavigationEvent.uri = '';
    
    /* -- type: Navigator -- */
    
    _$implement(Navigator, NavigatorID);
    _$implement(Navigator, NavigatorOnLine);
    _$implement(Navigator, NavigatorContentUtils);
    _$implement(Navigator, NavigatorStorageUtils);
    _$implement(Navigator, NavigatorGeolocation);
    _$implement(Navigator, MSNavigatorDoNotTrack);
    _$implement(Navigator, MSFileSaver);
    Navigator.appCodeName = '';
    Navigator.appMinorVersion = '';
    Navigator.browserLanguage = '';
    Navigator.connectionSpeed = 0;
    Navigator.cookieEnabled = false;
    Navigator.cpuClass = '';
    Navigator.language = '';
    Navigator.maxTouchPoints = 0;
    Navigator.mimeTypes = MSMimeTypesCollection;
    Navigator.msManipulationViewsEnabled = false;
    Navigator.msMaxTouchPoints = 0;
    Navigator.msPointerEnabled = false;
    Navigator.plugins = MSPluginsCollection;
    Navigator.pointerEnabled = false;
    Navigator.systemLanguage = '';
    Navigator.userLanguage = '';
    Navigator.webdriver = false;
    Navigator.getGamepads = function() {
        /// <signature>
        /// <returns type='Array' elementType='Gamepad'/>
        /// </signature>
        return [];
    };
    Navigator.javaEnabled = function() {
        /// <signature>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Navigator.msLaunchUri = function(uri, successCallback, noHandlerCallback) {
        /// <signature>
        /// <param name='uri' type='String'/>
        /// <param name='successCallback' type='MSLaunchUriCallback' optional='true' />
        /// <param name='noHandlerCallback' type='MSLaunchUriCallback' optional='true' />
        /// </signature>
    };
    
    /* -- type: Node -- */
    
    Node.attributes = NamedNodeMap;
    Node.baseURI = '';
    Object.defineProperty(Node,"childNodes", { get: function () { return _childNodes(this, NodeList); } });
    Object.defineProperty(Node,"firstChild", { get: function () { return _firstChild(this, Node); } });
    Object.defineProperty(Node,"lastChild", { get: function () { return _lastChild(this, Node); } });
    Node.localName = '';
    Node.namespaceURI = '';
    Node.nextSibling = _$getTrackingNull(Object.create(Node));
    Node.nodeName = '';
    Node.nodeType = 1;
    Node.nodeValue = '';
    Node.ownerDocument = document;
    Object.defineProperty(Node,"parentElement", { get: function () { return _parentElement(this, HTMLElement); } });
    Node.parentNode = _$getTrackingNull(Object.create(Node));
    Node.prefix = '';
    Node.previousSibling = _$getTrackingNull(Object.create(Node));
    Node.textContent = '';
    Node.ATTRIBUTE_NODE = 2;
    Node.CDATA_SECTION_NODE = 4;
    Node.COMMENT_NODE = 8;
    Node.DOCUMENT_FRAGMENT_NODE = 11;
    Node.DOCUMENT_NODE = 9;
    Node.DOCUMENT_POSITION_CONTAINED_BY = 0x10;
    Node.DOCUMENT_POSITION_CONTAINS = 0x08;
    Node.DOCUMENT_POSITION_DISCONNECTED = 0x01;
    Node.DOCUMENT_POSITION_FOLLOWING = 0x04;
    Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;
    Node.DOCUMENT_POSITION_PRECEDING = 0x02;
    Node.DOCUMENT_TYPE_NODE = 10;
    Node.ELEMENT_NODE = 1;
    Node.ENTITY_NODE = 6;
    Node.ENTITY_REFERENCE_NODE = 5;
    Node.NOTATION_NODE = 12;
    Node.PROCESSING_INSTRUCTION_NODE = 7;
    Node.TEXT_NODE = 3;
    Node.appendChild = function(newChild) {
        /// <signature>
        /// <param name='newChild' type='Node'/>
        /// <returns type='Node'/>
        /// </signature>
        return _appendChild(this, newChild);
    };
    Node.cloneNode = function(deep) {
        /// <signature>
        /// <param name='deep' type='Boolean' optional='true' />
        /// <returns type='Node'/>
        /// </signature>
        return Node;
    };
    Node.compareDocumentPosition = function(other) {
        /// <signature>
        /// <param name='other' type='Node'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    Node.hasAttributes = function() {
        /// <signature>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Node.hasChildNodes = function() {
        /// <signature>
        /// <returns type='Boolean'/>
        /// </signature>
        return _hasChildNodes(this);
    };
    Node.insertBefore = function(newChild, refChild) {
        /// <signature>
        /// <param name='newChild' type='Node'/>
        /// <param name='refChild' type='Node' optional='true' />
        /// <returns type='Node'/>
        /// </signature>
        return _insertBefore(this, newChild, refChild);
    };
    Node.isDefaultNamespace = function(namespaceURI) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Node.isEqualNode = function(arg) {
        /// <signature>
        /// <param name='arg' type='Node'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Node.isSameNode = function(other) {
        /// <signature>
        /// <param name='other' type='Node'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Node.lookupNamespaceURI = function(prefix) {
        /// <signature>
        /// <param name='prefix' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    Node.lookupPrefix = function(namespaceURI) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    Node.normalize = function() {
    };
    Node.removeChild = function(oldChild) {
        /// <signature>
        /// <param name='oldChild' type='Node'/>
        /// <returns type='Node'/>
        /// </signature>
        return _removeChild(this, oldChild);
    };
    Node.replaceChild = function(newChild, oldChild) {
        /// <signature>
        /// <param name='newChild' type='Node'/>
        /// <param name='oldChild' type='Node'/>
        /// <returns type='Node'/>
        /// </signature>
        return _replaceChild(this, newChild, oldChild);
    };
    
    /* -- type: OfflineAudioCompletionEvent -- */
    
    OfflineAudioCompletionEvent.renderedBuffer = AudioBuffer;
    
    /* -- type: PageTransitionEvent -- */
    
    PageTransitionEvent.persisted = false;
    
    /* -- type: PerformanceMark -- */
    
    
    /* -- type: PerformanceMeasure -- */
    
    
    /* -- type: PerformanceNavigationTiming -- */
    
    PerformanceNavigationTiming.connectEnd = 0;
    PerformanceNavigationTiming.connectStart = 0;
    PerformanceNavigationTiming.domComplete = 0;
    PerformanceNavigationTiming.domContentLoadedEventEnd = 0;
    PerformanceNavigationTiming.domContentLoadedEventStart = 0;
    PerformanceNavigationTiming.domInteractive = 0;
    PerformanceNavigationTiming.domLoading = 0;
    PerformanceNavigationTiming.domainLookupEnd = 0;
    PerformanceNavigationTiming.domainLookupStart = 0;
    PerformanceNavigationTiming.fetchStart = 0;
    PerformanceNavigationTiming.loadEventEnd = 0;
    PerformanceNavigationTiming.loadEventStart = 0;
    PerformanceNavigationTiming.navigationStart = 0;
    PerformanceNavigationTiming.redirectCount = 0;
    PerformanceNavigationTiming.redirectEnd = 0;
    PerformanceNavigationTiming.redirectStart = 0;
    PerformanceNavigationTiming.requestStart = 0;
    PerformanceNavigationTiming.responseEnd = 0;
    PerformanceNavigationTiming.responseStart = 0;
    PerformanceNavigationTiming.type = '';
    PerformanceNavigationTiming.unloadEventEnd = 0;
    PerformanceNavigationTiming.unloadEventStart = 0;
    
    /* -- type: PerformanceResourceTiming -- */
    
    PerformanceResourceTiming.connectEnd = 0;
    PerformanceResourceTiming.connectStart = 0;
    PerformanceResourceTiming.domainLookupEnd = 0;
    PerformanceResourceTiming.domainLookupStart = 0;
    PerformanceResourceTiming.fetchStart = 0;
    PerformanceResourceTiming.initiatorType = '';
    PerformanceResourceTiming.redirectEnd = 0;
    PerformanceResourceTiming.redirectStart = 0;
    PerformanceResourceTiming.requestStart = 0;
    PerformanceResourceTiming.responseEnd = 0;
    PerformanceResourceTiming.responseStart = 0;
    
    /* -- type: PermissionRequest -- */
    
    PermissionRequest.state = '';
    PermissionRequest.defer = function() {
    };
    
    /* -- type: PermissionRequestedEvent -- */
    
    PermissionRequestedEvent.permissionRequest = PermissionRequest;
    
    /* -- type: PopStateEvent -- */
    
    PopStateEvent.state = {};
    PopStateEvent.initPopStateEvent = function(typeArg, canBubbleArg, cancelableArg, stateArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='stateArg' type='Object'/>
        /// </signature>
    };
    
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
    
    /* -- type: SVGElementInstance -- */
    
    Object.defineProperty(SVGElementInstance,"childNodes", { get: function () { return _childNodes(this, SVGElementInstanceList); } });
    SVGElementInstance.correspondingElement = SVGElement;
    SVGElementInstance.correspondingUseElement = SVGUseElement;
    Object.defineProperty(SVGElementInstance,"firstChild", { get: function () { return _firstChild(this, SVGElementInstance); } });
    Object.defineProperty(SVGElementInstance,"lastChild", { get: function () { return _lastChild(this, SVGElementInstance); } });
    SVGElementInstance.nextSibling = _$getTrackingNull(Object.create(SVGElementInstance));
    SVGElementInstance.parentNode = _$getTrackingNull(Object.create(SVGElementInstance));
    SVGElementInstance.previousSibling = _$getTrackingNull(Object.create(SVGElementInstance));
    
    /* -- type: SVGPathSegArcAbs -- */
    
    SVGPathSegArcAbs.angle = 0;
    SVGPathSegArcAbs.largeArcFlag = false;
    SVGPathSegArcAbs.r1 = 0;
    SVGPathSegArcAbs.r2 = 0;
    SVGPathSegArcAbs.sweepFlag = false;
    SVGPathSegArcAbs.x = 0;
    SVGPathSegArcAbs.y = 0;
    
    /* -- type: SVGPathSegArcRel -- */
    
    SVGPathSegArcRel.angle = 0;
    SVGPathSegArcRel.largeArcFlag = false;
    SVGPathSegArcRel.r1 = 0;
    SVGPathSegArcRel.r2 = 0;
    SVGPathSegArcRel.sweepFlag = false;
    SVGPathSegArcRel.x = 0;
    SVGPathSegArcRel.y = 0;
    
    /* -- type: SVGPathSegClosePath -- */
    
    
    /* -- type: SVGPathSegCurvetoCubicAbs -- */
    
    SVGPathSegCurvetoCubicAbs.x = 0;
    SVGPathSegCurvetoCubicAbs.x1 = 0;
    SVGPathSegCurvetoCubicAbs.x2 = 0;
    SVGPathSegCurvetoCubicAbs.y = 0;
    SVGPathSegCurvetoCubicAbs.y1 = 0;
    SVGPathSegCurvetoCubicAbs.y2 = 0;
    
    /* -- type: SVGPathSegCurvetoCubicRel -- */
    
    SVGPathSegCurvetoCubicRel.x = 0;
    SVGPathSegCurvetoCubicRel.x1 = 0;
    SVGPathSegCurvetoCubicRel.x2 = 0;
    SVGPathSegCurvetoCubicRel.y = 0;
    SVGPathSegCurvetoCubicRel.y1 = 0;
    SVGPathSegCurvetoCubicRel.y2 = 0;
    
    /* -- type: SVGPathSegCurvetoCubicSmoothAbs -- */
    
    SVGPathSegCurvetoCubicSmoothAbs.x = 0;
    SVGPathSegCurvetoCubicSmoothAbs.x2 = 0;
    SVGPathSegCurvetoCubicSmoothAbs.y = 0;
    SVGPathSegCurvetoCubicSmoothAbs.y2 = 0;
    
    /* -- type: SVGPathSegCurvetoCubicSmoothRel -- */
    
    SVGPathSegCurvetoCubicSmoothRel.x = 0;
    SVGPathSegCurvetoCubicSmoothRel.x2 = 0;
    SVGPathSegCurvetoCubicSmoothRel.y = 0;
    SVGPathSegCurvetoCubicSmoothRel.y2 = 0;
    
    /* -- type: SVGPathSegCurvetoQuadraticAbs -- */
    
    SVGPathSegCurvetoQuadraticAbs.x = 0;
    SVGPathSegCurvetoQuadraticAbs.x1 = 0;
    SVGPathSegCurvetoQuadraticAbs.y = 0;
    SVGPathSegCurvetoQuadraticAbs.y1 = 0;
    
    /* -- type: SVGPathSegCurvetoQuadraticRel -- */
    
    SVGPathSegCurvetoQuadraticRel.x = 0;
    SVGPathSegCurvetoQuadraticRel.x1 = 0;
    SVGPathSegCurvetoQuadraticRel.y = 0;
    SVGPathSegCurvetoQuadraticRel.y1 = 0;
    
    /* -- type: SVGPathSegCurvetoQuadraticSmoothAbs -- */
    
    SVGPathSegCurvetoQuadraticSmoothAbs.x = 0;
    SVGPathSegCurvetoQuadraticSmoothAbs.y = 0;
    
    /* -- type: SVGPathSegCurvetoQuadraticSmoothRel -- */
    
    SVGPathSegCurvetoQuadraticSmoothRel.x = 0;
    SVGPathSegCurvetoQuadraticSmoothRel.y = 0;
    
    /* -- type: SVGPathSegLinetoAbs -- */
    
    SVGPathSegLinetoAbs.x = 0;
    SVGPathSegLinetoAbs.y = 0;
    
    /* -- type: SVGPathSegLinetoHorizontalAbs -- */
    
    SVGPathSegLinetoHorizontalAbs.x = 0;
    
    /* -- type: SVGPathSegLinetoHorizontalRel -- */
    
    SVGPathSegLinetoHorizontalRel.x = 0;
    
    /* -- type: SVGPathSegLinetoRel -- */
    
    SVGPathSegLinetoRel.x = 0;
    SVGPathSegLinetoRel.y = 0;
    
    /* -- type: SVGPathSegLinetoVerticalAbs -- */
    
    SVGPathSegLinetoVerticalAbs.y = 0;
    
    /* -- type: SVGPathSegLinetoVerticalRel -- */
    
    SVGPathSegLinetoVerticalRel.y = 0;
    
    /* -- type: SVGPathSegMovetoAbs -- */
    
    SVGPathSegMovetoAbs.x = 0;
    SVGPathSegMovetoAbs.y = 0;
    
    /* -- type: SVGPathSegMovetoRel -- */
    
    SVGPathSegMovetoRel.x = 0;
    SVGPathSegMovetoRel.y = 0;
    
    /* -- type: Screen -- */
    
    Screen.availHeight = 0;
    Screen.availWidth = 0;
    Screen.bufferDepth = 0;
    Screen.colorDepth = 0;
    Screen.deviceXDPI = 0;
    Screen.deviceYDPI = 0;
    Screen.fontSmoothingEnabled = false;
    Screen.height = 0;
    Screen.logicalXDPI = 0;
    Screen.logicalYDPI = 0;
    Screen.msOrientation = '';
    Screen.pixelDepth = 0;
    Screen.systemXDPI = 0;
    Screen.systemYDPI = 0;
    Screen.width = 0;
    Screen.msLockOrientation = function(orientations) {
        /// <signature>
        /// <param name='orientations' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        /// <signature>
        /// <param name='orientations' type='Array' elementType='String' />
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Screen.msUnlockOrientation = function() {
    };
    _events(Screen, "onmsorientationchange");
    
    /* -- type: ScriptNotifyEvent -- */
    
    ScriptNotifyEvent.callingUri = '';
    ScriptNotifyEvent.value = '';
    
    /* -- type: SourceBuffer -- */
    
    SourceBuffer.appendWindowEnd = 0;
    SourceBuffer.appendWindowStart = 0;
    SourceBuffer.audioTracks = AudioTrackList;
    SourceBuffer.buffered = TimeRanges;
    SourceBuffer.mode = '';
    SourceBuffer.timestampOffset = 0;
    SourceBuffer.updating = false;
    SourceBuffer.videoTracks = VideoTrackList;
    SourceBuffer.abort = function() {
    };
    SourceBuffer.appendBuffer = function(data) {
        /// <signature>
        /// <param name='data' type='ArrayBuffer'/>
        /// </signature>
        /// <signature>
        /// <param name='data' type='Uint8Array'/>
        /// </signature>
    };
    SourceBuffer.appendStream = function(stream, maxSize) {
        /// <signature>
        /// <param name='stream' type='MSStream'/>
        /// <param name='maxSize' type='Number' optional='true' />
        /// </signature>
    };
    SourceBuffer.remove = function(start, end) {
        /// <signature>
        /// <param name='start' type='Number'/>
        /// <param name='end' type='Number'/>
        /// </signature>
    };
    
    /* -- type: SourceBufferList -- */
    
    SourceBufferList.length = 0;
    SourceBufferList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='SourceBuffer'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(SourceBuffer));
    };
    /* Add a single array element */
    SourceBufferList[0] = _$getTrackingNull(Object.create(SourceBuffer));
    
    /* -- type: StorageEvent -- */
    
    StorageEvent.key = '';
    StorageEvent.newValue = {};
    StorageEvent.oldValue = {};
    StorageEvent.storageArea = Storage;
    StorageEvent.url = '';
    StorageEvent.initStorageEvent = function(typeArg, canBubbleArg, cancelableArg, keyArg, oldValueArg, newValueArg, urlArg, storageAreaArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='keyArg' type='String'/>
        /// <param name='oldValueArg' type='Object'/>
        /// <param name='newValueArg' type='Object'/>
        /// <param name='urlArg' type='String'/>
        /// <param name='storageAreaArg' type='Storage'/>
        /// </signature>
    };
    
    /* -- type: TextTrack -- */
    
    TextTrack.activeCues = TextTrackCueList;
    TextTrack.cues = TextTrackCueList;
    TextTrack.inBandMetadataTrackDispatchType = '';
    TextTrack.kind = '';
    TextTrack.label = '';
    TextTrack.language = '';
    TextTrack.mode = {};
    TextTrack.readyState = 0;
    TextTrack.DISABLED = 0;
    TextTrack.ERROR = 3;
    TextTrack.HIDDEN = 1;
    TextTrack.LOADED = 2;
    TextTrack.LOADING = 1;
    TextTrack.NONE = 0;
    TextTrack.SHOWING = 2;
    TextTrack.addCue = function(cue) {
        /// <signature>
        /// <param name='cue' type='TextTrackCue'/>
        /// </signature>
    };
    TextTrack.removeCue = function(cue) {
        /// <signature>
        /// <param name='cue' type='TextTrackCue'/>
        /// </signature>
    };
    _events(TextTrack, "oncuechange", "onerror", "onload");
    
    /* -- type: TextTrackCue -- */
    
    TextTrackCue.endTime = 0;
    TextTrackCue.id = '';
    TextTrackCue.pauseOnExit = false;
    TextTrackCue.startTime = 0;
    TextTrackCue.text = '';
    TextTrackCue.track = TextTrack;
    TextTrackCue.getCueAsHTML = function() {
        /// <signature>
        /// <returns type='DocumentFragment'/>
        /// </signature>
        return DocumentFragment;
    };
    _events(TextTrackCue, "onenter", "onexit");
    
    /* -- type: TextTrackList -- */
    
    TextTrackList.length = 0;
    TextTrackList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='TextTrack'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(TextTrack));
    };
    _events(TextTrackList, "onaddtrack");
    /* Add a single array element */
    TextTrackList[0] = _$getTrackingNull(Object.create(TextTrack));
    
    /* -- type: TrackEvent -- */
    
    TrackEvent.track = {};
    
    /* -- type: TransitionEvent -- */
    
    TransitionEvent.elapsedTime = 0;
    TransitionEvent.propertyName = '';
    TransitionEvent.initTransitionEvent = function(typeArg, canBubbleArg, cancelableArg, propertyNameArg, elapsedTimeArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='propertyNameArg' type='String'/>
        /// <param name='elapsedTimeArg' type='Number'/>
        /// </signature>
    };
    
    /* -- type: UIEvent -- */
    
    UIEvent.detail = 0;
    UIEvent.view = Window;
    UIEvent.initUIEvent = function(typeArg, canBubbleArg, cancelableArg, viewArg, detailArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='viewArg' type='Window'/>
        /// <param name='detailArg' type='Number'/>
        /// </signature>
    };
    
    /* -- type: VideoTrackList -- */
    
    VideoTrackList.length = 0;
    VideoTrackList.selectedIndex = 0;
    VideoTrackList.getTrackById = function(id) {
        /// <signature>
        /// <param name='id' type='String'/>
        /// <returns type='VideoTrack'/>
        /// </signature>
        return VideoTrack;
    };
    VideoTrackList.item = function(index) {
        /// <signature>
        /// <param name='index' type='Number'/>
        /// <returns type='VideoTrack'/>
        /// </signature>
        return this[index] || _$getTrackingNull(Object.create(VideoTrack));
    };
    _events(VideoTrackList, "onaddtrack", "onchange", "onremovetrack");
    /* Add a single array element */
    VideoTrackList[0] = _$getTrackingNull(Object.create(VideoTrack));
    
    /* -- type: WebGLBuffer -- */
    
    
    /* -- type: WebGLContextEvent -- */
    
    WebGLContextEvent.statusMessage = '';
    
    /* -- type: WebGLFramebuffer -- */
    
    
    /* -- type: WebGLProgram -- */
    
    
    /* -- type: WebGLRenderbuffer -- */
    
    
    /* -- type: WebGLShader -- */
    
    
    /* -- type: WebGLTexture -- */
    
    
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
        /// <param name='data' type='Document' optional='true' />
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
    
    /* -- type: SVGFilterPrimitiveStandardAttributes -- */
    
    SVGFilterPrimitiveStandardAttributes.height = SVGAnimatedLength;
    SVGFilterPrimitiveStandardAttributes.result = SVGAnimatedString;
    SVGFilterPrimitiveStandardAttributes.width = SVGAnimatedLength;
    SVGFilterPrimitiveStandardAttributes.x = SVGAnimatedLength;
    SVGFilterPrimitiveStandardAttributes.y = SVGAnimatedLength;
    
    /* -- type: SVGTransformable -- */
    
    SVGTransformable.transform = SVGAnimatedTransformList;
    
    /* -- type: WindowTimers -- */
    
    _$implement(WindowTimers, WindowTimersExtension);
    WindowTimers.clearInterval = function(handle) {
        /// <signature>
        /// <param name='handle' type='Number'/>
        /// </signature>
        _$clearTimeout(handle);
    };
    WindowTimers.clearTimeout = function(handle) {
        /// <signature>
        /// <param name='handle' type='Number'/>
        /// </signature>
        _$clearTimeout(handle);
    };
    WindowTimers.setInterval = function(handler, timeout, args) {
        /// <signature>
        /// <param name='handler' type='Object'/>
        /// <param name='timeout' type='Object' optional='true' />
        /// <param name='args' type='Object'/>
        /// <returns type='Number'/>
        /// </signature>
        return _$setTimeout(handler, timeout, args);
    };
    WindowTimers.setTimeout = function(handler, timeout, args) {
        /// <signature>
        /// <param name='handler' type='Object'/>
        /// <param name='timeout' type='Object' optional='true' />
        /// <param name='args' type='Object'/>
        /// <returns type='Number'/>
        /// </signature>
        return _$setTimeout(handler, timeout, args);
    };
    
    /* -- type: AnalyserNode -- */
    
    AnalyserNode.fftSize = 0;
    AnalyserNode.frequencyBinCount = 0;
    AnalyserNode.maxDecibels = 0;
    AnalyserNode.minDecibels = 0;
    AnalyserNode.smoothingTimeConstant = 0;
    AnalyserNode.getByteFrequencyData = function(array) {
        /// <signature>
        /// <param name='array' type='Uint8Array'/>
        /// </signature>
    };
    AnalyserNode.getByteTimeDomainData = function(array) {
        /// <signature>
        /// <param name='array' type='Uint8Array'/>
        /// </signature>
    };
    AnalyserNode.getFloatFrequencyData = function(array) {
        /// <signature>
        /// <param name='array' type='Float32Array'/>
        /// </signature>
    };
    AnalyserNode.getFloatTimeDomainData = function(array) {
        /// <signature>
        /// <param name='array' type='Float32Array'/>
        /// </signature>
    };
    
    /* -- type: Attr -- */
    
    Attr.name = '';
    Attr.ownerElement = HTMLElement;
    Attr.specified = false;
    Attr.value = '';
    
    /* -- type: AudioBufferSourceNode -- */
    
    AudioBufferSourceNode.buffer = AudioBuffer;
    AudioBufferSourceNode.loop = false;
    AudioBufferSourceNode.loopEnd = 0;
    AudioBufferSourceNode.loopStart = 0;
    AudioBufferSourceNode.playbackRate = AudioParam;
    AudioBufferSourceNode.start = function(when, offset, duration) {
        /// <signature>
        /// <param name='when' type='Number' optional='true' />
        /// <param name='offset' type='Number' optional='true' />
        /// <param name='duration' type='Number' optional='true' />
        /// </signature>
    };
    AudioBufferSourceNode.stop = function(when) {
        /// <signature>
        /// <param name='when' type='Number' optional='true' />
        /// </signature>
    };
    _events(AudioBufferSourceNode, "onended");
    
    /* -- type: AudioDestinationNode -- */
    
    AudioDestinationNode.maxChannelCount = 0;
    
    /* -- type: BiquadFilterNode -- */
    
    BiquadFilterNode.Q = AudioParam;
    BiquadFilterNode.detune = AudioParam;
    BiquadFilterNode.frequency = AudioParam;
    BiquadFilterNode.gain = AudioParam;
    BiquadFilterNode.type = '';
    BiquadFilterNode.getFrequencyResponse = function(frequencyHz, magResponse, phaseResponse) {
        /// <signature>
        /// <param name='frequencyHz' type='Float32Array'/>
        /// <param name='magResponse' type='Float32Array'/>
        /// <param name='phaseResponse' type='Float32Array'/>
        /// </signature>
    };
    
    /* -- type: CSSConditionRule -- */
    
    CSSConditionRule.conditionText = '';
    
    /* -- type: ChannelMergerNode -- */
    
    
    /* -- type: ChannelSplitterNode -- */
    
    
    /* -- type: CharacterData -- */
    
    _$implement(CharacterData, ChildNode);
    CharacterData.data = '';
    CharacterData.length = 0;
    CharacterData.appendData = function(arg) {
        /// <signature>
        /// <param name='arg' type='String'/>
        /// </signature>
    };
    CharacterData.deleteData = function(offset, count) {
        /// <signature>
        /// <param name='offset' type='Number'/>
        /// <param name='count' type='Number'/>
        /// </signature>
    };
    CharacterData.insertData = function(offset, arg) {
        /// <signature>
        /// <param name='offset' type='Number'/>
        /// <param name='arg' type='String'/>
        /// </signature>
    };
    CharacterData.replaceData = function(offset, count, arg) {
        /// <signature>
        /// <param name='offset' type='Number'/>
        /// <param name='count' type='Number'/>
        /// <param name='arg' type='String'/>
        /// </signature>
    };
    CharacterData.substringData = function(offset, count) {
        /// <signature>
        /// <param name='offset' type='Number'/>
        /// <param name='count' type='Number'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    
    /* -- type: CompositionEvent -- */
    
    CompositionEvent.data = '';
    CompositionEvent.locale = '';
    CompositionEvent.initCompositionEvent = function(typeArg, canBubbleArg, cancelableArg, viewArg, dataArg, locale) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='viewArg' type='Window'/>
        /// <param name='dataArg' type='String'/>
        /// <param name='locale' type='String'/>
        /// </signature>
    };
    
    /* -- type: ConvolverNode -- */
    
    ConvolverNode.buffer = AudioBuffer;
    ConvolverNode.normalize = false;
    
    /* -- type: DataCue -- */
    
    DataCue.data = new ArrayBuffer();
    
    /* -- type: DelayNode -- */
    
    DelayNode.delayTime = AudioParam;
    
    /* -- type: Document -- */
    
    _$implement(Document, GlobalEventHandlers);
    _$implement(Document, NodeSelector);
    _$implement(Document, DocumentEvent);
    Document.URL = '';
    Document.URLUnencoded = '';
    Document.activeElement = HTMLElement;
    Document.alinkColor = '';
    Document.all = HTMLCollection;
    Document.anchors = _createHTMLCollection('a');
    Document.applets = _createHTMLCollection('applet');
    Document.bgColor = '';
    Document.body = HTMLElement;
    Document.characterSet = '';
    Document.charset = '';
    Document.compatMode = '';
    Document.cookie = '';
    Document.defaultCharset = '';
    Document.defaultView = Window;
    Document.designMode = '';
    Document.dir = '';
    Document.doctype = DocumentType;
    Document.documentElement = HTMLElement;
    Document.domain = '';
    Document.embeds = _createHTMLCollection('embed');
    Document.fgColor = '';
    Document.forms = _createHTMLCollection('form');
    Document.fullscreenElement = HTMLElement;
    Document.fullscreenEnabled = false;
    Document.head = HTMLHeadElement;
    Document.hidden = false;
    Document.images = _createHTMLCollection('img');
    Document.implementation = DOMImplementation;
    Document.inputEncoding = '';
    Document.lastModified = '';
    Document.linkColor = '';
    Document.links = _createHTMLCollection('a');
    Document.location = Location;
    Document.media = '';
    Document.msCSSOMElementFloatMetrics = false;
    Document.msCapsLockWarningOff = false;
    Document.msHidden = false;
    Document.msVisibilityState = '';
    Document.plugins = HTMLCollection;
    Document.pointerLockElement = HTMLElement;
    Document.readyState = '';
    Document.referrer = '';
    Document.rootElement = SVGSVGElement;
    Document.scripts = _createHTMLCollection('script');
    Document.security = '';
    Document.styleSheets = StyleSheetList;
    Document.title = '';
    Document.visibilityState = '';
    Document.vlinkColor = '';
    Document.webkitCurrentFullScreenElement = HTMLElement;
    Document.webkitFullscreenElement = HTMLElement;
    Document.webkitFullscreenEnabled = false;
    Document.webkitIsFullScreen = false;
    Document.xmlEncoding = '';
    Document.xmlStandalone = false;
    Document.xmlVersion = '';
    Document.adoptNode = function(source) {
        /// <signature>
        /// <param name='source' type='Node'/>
        /// <returns type='Node'/>
        /// </signature>
        return Node;
    };
    Document.captureEvents = function() {
    };
    Document.clear = function() {
    };
    Document.close = function() {
    };
    Document.createAttribute = function(name) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <returns type='Attr'/>
        /// </signature>
        return Attr;
    };
    Document.createAttributeNS = function(namespaceURI, qualifiedName) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <param name='qualifiedName' type='String'/>
        /// <returns type='Attr'/>
        /// </signature>
        return Attr;
    };
    Document.createCDATASection = function(data) {
        /// <signature>
        /// <param name='data' type='String'/>
        /// <returns type='CDATASection'/>
        /// </signature>
        return CDATASection;
    };
    Document.createComment = function(data) {
        /// <signature>
        /// <param name='data' type='String'/>
        /// <returns type='Comment'/>
        /// </signature>
        return Comment;
    };
    Document.createDocumentFragment = function() {
        /// <signature>
        /// <returns type='DocumentFragment'/>
        /// </signature>
        return DocumentFragment;
    };
    Document.createElement = function(tagName) {
        /// <signature>
        /// <param name='tagName' type='String'/>
        /// <returns type='Element'/>
        /// </signature>
        return _createElementByTagName(tagName);
    };
    Document.createElementNS = function(namespaceURI, qualifiedName) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <param name='qualifiedName' type='String'/>
        /// <returns type='Element'/>
        /// </signature>
        return HTMLElement;
    };
    Document.createExpression = function(expression, resolver) {
        /// <signature>
        /// <param name='expression' type='String'/>
        /// <param name='resolver' type='XPathNSResolver'/>
        /// <returns type='XPathExpression'/>
        /// </signature>
        return XPathExpression;
    };
    Document.createNSResolver = function(nodeResolver) {
        /// <signature>
        /// <param name='nodeResolver' type='Node'/>
        /// <returns type='XPathNSResolver'/>
        /// </signature>
        return XPathNSResolver;
    };
    Document.createNodeIterator = function(root, whatToShow, filter, entityReferenceExpansion) {
        /// <signature>
        /// <param name='root' type='Node'/>
        /// <param name='whatToShow' type='Number' optional='true' />
        /// <param name='filter' type='NodeFilter' optional='true' />
        /// <param name='entityReferenceExpansion' type='Boolean' optional='true' />
        /// <returns type='NodeIterator'/>
        /// </signature>
        return NodeIterator;
    };
    Document.createProcessingInstruction = function(target, data) {
        /// <signature>
        /// <param name='target' type='String'/>
        /// <param name='data' type='String'/>
        /// <returns type='ProcessingInstruction'/>
        /// </signature>
        return ProcessingInstruction;
    };
    Document.createRange = function() {
        /// <signature>
        /// <returns type='Range'/>
        /// </signature>
        return Range;
    };
    Document.createTextNode = function(data) {
        /// <signature>
        /// <param name='data' type='String'/>
        /// <returns type='Text'/>
        /// </signature>
        return Text;
    };
    Document.createTouch = function(view, target, identifier, pageX, pageY, screenX, screenY) {
        /// <signature>
        /// <param name='view' type='Window'/>
        /// <param name='target' type='EventTarget'/>
        /// <param name='identifier' type='Number'/>
        /// <param name='pageX' type='Number'/>
        /// <param name='pageY' type='Number'/>
        /// <param name='screenX' type='Number'/>
        /// <param name='screenY' type='Number'/>
        /// <returns type='Touch'/>
        /// </signature>
        return Touch;
    };
    Document.createTouchList = function(touches) {
        /// <signature>
        /// <param name='touches' type='Touch'/>
        /// <returns type='TouchList'/>
        /// </signature>
        return TouchList;
    };
    Document.createTreeWalker = function(root, whatToShow, filter, entityReferenceExpansion) {
        /// <signature>
        /// <param name='root' type='Node'/>
        /// <param name='whatToShow' type='Number' optional='true' />
        /// <param name='filter' type='NodeFilter' optional='true' />
        /// <param name='entityReferenceExpansion' type='Boolean' optional='true' />
        /// <returns type='TreeWalker'/>
        /// </signature>
        return TreeWalker;
    };
    Document.elementFromPoint = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <returns type='Element'/>
        /// </signature>
        return HTMLElement;
    };
    Document.evaluate = function(expression, contextNode, resolver, type, result) {
        /// <signature>
        /// <param name='expression' type='String'/>
        /// <param name='contextNode' type='Node'/>
        /// <param name='resolver' type='XPathNSResolver'/>
        /// <param name='type' type='Number'/>
        /// <param name='result' type='XPathResult'/>
        /// <returns type='XPathResult'/>
        /// </signature>
        return XPathResult;
    };
    Document.execCommand = function(commandId, showUI, value) {
        /// <signature>
        /// <param name='commandId' type='String'/>
        /// <param name='showUI' type='Boolean' optional='true' />
        /// <param name='value' type='Object' optional='true' />
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Document.execCommandShowHelp = function(commandId) {
        /// <signature>
        /// <param name='commandId' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Document.exitFullscreen = function() {
    };
    Document.exitPointerLock = function() {
    };
    Document.focus = function() {
    };
    Document.getElementById = function(elementId) {
        /// <signature>
        /// <param name='elementId' type='String'/>
        /// <returns type='Element'/>
        /// </signature>
        return _getElementById(elementId);
    };
    Document.getElementsByClassName = function(classNames) {
        /// <signature>
        /// <param name='classNames' type='String'/>
        /// <returns type='NodeList'/>
        /// </signature>
        return NodeList;
    };
    Document.getElementsByName = function(elementName) {
        /// <signature>
        /// <param name='elementName' type='String'/>
        /// <returns type='NodeList'/>
        /// </signature>
        return NodeList;
    };
    Document.getElementsByTagName = function(tagname) {
        /// <signature>
        /// <param name='tagname' type='String'/>
        /// <returns type='NodeList'/>
        /// </signature>
        return _getElementsByTagName(this, tagname);
    };
    Document.getElementsByTagNameNS = function(namespaceURI, localName) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <param name='localName' type='String'/>
        /// <returns type='NodeList'/>
        /// </signature>
        return NodeList;
    };
    Document.getSelection = function() {
        /// <signature>
        /// <returns type='Selection'/>
        /// </signature>
        return Selection;
    };
    Document.hasFocus = function() {
        /// <signature>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Document.importNode = function(importedNode, deep) {
        /// <signature>
        /// <param name='importedNode' type='Node'/>
        /// <param name='deep' type='Boolean'/>
        /// <returns type='Node'/>
        /// </signature>
        return Node;
    };
    Document.msElementsFromPoint = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <returns type='NodeList'/>
        /// </signature>
        return _wrapInList([Object.create(HTMLElement)], NodeList);
    };
    Document.msElementsFromRect = function(left, top, width, height) {
        /// <signature>
        /// <param name='left' type='Number'/>
        /// <param name='top' type='Number'/>
        /// <param name='width' type='Number'/>
        /// <param name='height' type='Number'/>
        /// <returns type='NodeList'/>
        /// </signature>
        return _wrapInList([Object.create(HTMLElement)], NodeList);
    };
    Document.open = function(url, name, features, replace) {
        /// <signature>
        /// <param name='url' type='String' optional='true' />
        /// <param name='name' type='String' optional='true' />
        /// <param name='features' type='String' optional='true' />
        /// <param name='replace' type='Boolean' optional='true' />
        /// <returns type='Document'/>
        /// </signature>
        /// <signature>
        /// <param name='url' type='String' optional='true' />
        /// <param name='name' type='String' optional='true' />
        /// <param name='features' type='String' optional='true' />
        /// <param name='replace' type='Boolean' optional='true' />
        /// <returns type='Window'/>
        /// </signature>
        return {};
    };
    Document.queryCommandEnabled = function(commandId) {
        /// <signature>
        /// <param name='commandId' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Document.queryCommandIndeterm = function(commandId) {
        /// <signature>
        /// <param name='commandId' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Document.queryCommandState = function(commandId) {
        /// <signature>
        /// <param name='commandId' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Document.queryCommandSupported = function(commandId) {
        /// <signature>
        /// <param name='commandId' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Document.queryCommandText = function(commandId) {
        /// <signature>
        /// <param name='commandId' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    Document.queryCommandValue = function(commandId) {
        /// <signature>
        /// <param name='commandId' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    Document.releaseEvents = function() {
    };
    Document.updateSettings = function() {
    };
    Document.webkitCancelFullScreen = function() {
    };
    Document.webkitExitFullscreen = function() {
    };
    Document.write = function(content) {
        /// <signature>
        /// <param name='content' type='String'/>
        /// </signature>
        _setInnerHTML(this, content);
    };
    Document.writeln = function(content) {
        /// <signature>
        /// <param name='content' type='String'/>
        /// </signature>
        _setInnerHTML(this, content);
    };
    _events(Document, "onabort", "onactivate", "onbeforeactivate", "onbeforedeactivate", "onblur", "oncanplay", "oncanplaythrough", "onchange", "onclick", "oncontextmenu", "ondblclick", "ondeactivate", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onfullscreenchange", "onfullscreenerror", "oninput", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onmscontentzoom", "onmsgesturechange", "onmsgesturedoubletap", "onmsgestureend", "onmsgesturehold", "onmsgesturestart", "onmsgesturetap", "onmsinertiastart", "onmsmanipulationstatechanged", "onmspointercancel", "onmspointerdown", "onmspointerenter", "onmspointerleave", "onmspointermove", "onmspointerout", "onmspointerover", "onmspointerup", "onmssitemodejumplistitemremoved", "onmsthumbnailclick", "onpause", "onplay", "onplaying", "onpointerlockchange", "onpointerlockerror", "onprogress", "onratechange", "onreadystatechange", "onreset", "onscroll", "onseeked", "onseeking", "onselect", "onselectstart", "onstalled", "onstop", "onsubmit", "onsuspend", "ontimeupdate", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "onvolumechange", "onwaiting", "onwebkitfullscreenchange", "onwebkitfullscreenerror", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onwheel");
    
    /* -- type: DocumentFragment -- */
    
    _$implement(DocumentFragment, NodeSelector);
    DocumentFragment.nodeType = Node.DOCUMENT_FRAGMENT_NODE;
    DocumentFragment.nodeName = '#document-fragment';
    
    /* -- type: DocumentType -- */
    
    _$implement(DocumentType, ChildNode);
    DocumentType.entities = NamedNodeMap;
    DocumentType.internalSubset = '';
    DocumentType.name = '';
    DocumentType.notations = NamedNodeMap;
    DocumentType.publicId = '';
    DocumentType.systemId = '';
    DocumentType.nodeType = Node.DOCUMENT_TYPE_NODE;
    DocumentType.nodeName = 'html';
    
    /* -- type: DynamicsCompressorNode -- */
    
    DynamicsCompressorNode.attack = AudioParam;
    DynamicsCompressorNode.knee = AudioParam;
    DynamicsCompressorNode.ratio = AudioParam;
    DynamicsCompressorNode.reduction = AudioParam;
    DynamicsCompressorNode.release = AudioParam;
    DynamicsCompressorNode.threshold = AudioParam;
    
    /* -- type: Element -- */
    
    _$implement(Element, GlobalEventHandlers);
    _$implement(Element, ElementTraversal);
    _$implement(Element, NodeSelector);
    _$implement(Element, ChildNode);
    Element.classList = DOMTokenList;
    Element.clientHeight = 0;
    Element.clientLeft = 0;
    Element.clientTop = 0;
    Element.clientWidth = 0;
    Element.msContentZoomFactor = 0;
    Element.msRegionOverflow = '';
    Element.scrollHeight = 0;
    Element.scrollLeft = 0;
    Element.scrollTop = 0;
    Element.scrollWidth = 0;
    Element.tagName = '';
    Element.getAttribute = function(name) {
        /// <signature>
        /// <param name='name' type='String' optional='true' />
        /// <returns type='String'/>
        /// </signature>
        return _getAttribute(this, name);
    };
    Element.getAttributeNS = function(namespaceURI, localName) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <param name='localName' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    Element.getAttributeNode = function(name) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <returns type='Attr'/>
        /// </signature>
        return Attr;
    };
    Element.getAttributeNodeNS = function(namespaceURI, localName) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <param name='localName' type='String'/>
        /// <returns type='Attr'/>
        /// </signature>
        return Attr;
    };
    Element.getBoundingClientRect = function() {
        /// <signature>
        /// <returns type='ClientRect'/>
        /// </signature>
        return ClientRect;
    };
    Element.getClientRects = function() {
        /// <signature>
        /// <returns type='ClientRectList'/>
        /// </signature>
        return ClientRectList;
    };
    Element.getElementsByTagName = function(name) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <returns type='NodeList'/>
        /// </signature>
        return _getElementsByTagName(this, name);
    };
    Element.getElementsByTagNameNS = function(namespaceURI, localName) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <param name='localName' type='String'/>
        /// <returns type='NodeList'/>
        /// </signature>
        return NodeList;
    };
    Element.hasAttribute = function(name) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return _hasAttribute(this, name);
    };
    Element.hasAttributeNS = function(namespaceURI, localName) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <param name='localName' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Element.msGetRegionContent = function() {
        /// <signature>
        /// <returns type='MSRangeCollection'/>
        /// </signature>
        return MSRangeCollection;
    };
    Element.msGetUntransformedBounds = function() {
        /// <signature>
        /// <returns type='ClientRect'/>
        /// </signature>
        return ClientRect;
    };
    Element.msMatchesSelector = function(selectors) {
        /// <signature>
        /// <param name='selectors' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Element.msReleasePointerCapture = function(pointerId) {
        /// <signature>
        /// <param name='pointerId' type='Number'/>
        /// </signature>
    };
    Element.msSetPointerCapture = function(pointerId) {
        /// <signature>
        /// <param name='pointerId' type='Number'/>
        /// </signature>
    };
    Element.msZoomTo = function(args) {
        /// <signature>
        /// <param name='args' type='MsZoomToOptions'/>
        /// </signature>
    };
    Element.releasePointerCapture = function(pointerId) {
        /// <signature>
        /// <param name='pointerId' type='Number'/>
        /// </signature>
    };
    Element.removeAttribute = function(name) {
        /// <signature>
        /// <param name='name' type='String' optional='true' />
        /// </signature>
    };
    Element.removeAttributeNS = function(namespaceURI, localName) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <param name='localName' type='String'/>
        /// </signature>
    };
    Element.removeAttributeNode = function(oldAttr) {
        /// <signature>
        /// <param name='oldAttr' type='Attr'/>
        /// <returns type='Attr'/>
        /// </signature>
        return Attr;
    };
    Element.requestFullscreen = function() {
    };
    Element.requestPointerLock = function() {
    };
    Element.setAttribute = function(name, value) {
        /// <signature>
        /// <param name='name' type='String' optional='true' />
        /// <param name='value' type='String' optional='true' />
        /// </signature>
        _setAttribute(this, name, value);
    };
    Element.setAttributeNS = function(namespaceURI, qualifiedName, value) {
        /// <signature>
        /// <param name='namespaceURI' type='String'/>
        /// <param name='qualifiedName' type='String'/>
        /// <param name='value' type='String'/>
        /// </signature>
    };
    Element.setAttributeNode = function(newAttr) {
        /// <signature>
        /// <param name='newAttr' type='Attr'/>
        /// <returns type='Attr'/>
        /// </signature>
        return Attr;
    };
    Element.setAttributeNodeNS = function(newAttr) {
        /// <signature>
        /// <param name='newAttr' type='Attr'/>
        /// <returns type='Attr'/>
        /// </signature>
        return Attr;
    };
    Element.setPointerCapture = function(pointerId) {
        /// <signature>
        /// <param name='pointerId' type='Number'/>
        /// </signature>
    };
    Element.webkitMatchesSelector = function(selectors) {
        /// <signature>
        /// <param name='selectors' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Element.webkitRequestFullScreen = function() {
    };
    Element.webkitRequestFullscreen = function() {
    };
    _events(Element, "onariarequest", "oncommand", "ongotpointercapture", "onlostpointercapture", "onmsgesturechange", "onmsgesturedoubletap", "onmsgestureend", "onmsgesturehold", "onmsgesturestart", "onmsgesturetap", "onmsgotpointercapture", "onmsinertiastart", "onmslostpointercapture", "onmspointercancel", "onmspointerdown", "onmspointerenter", "onmspointerleave", "onmspointermove", "onmspointerout", "onmspointerover", "onmspointerup", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "onwebkitfullscreenchange", "onwebkitfullscreenerror", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onwheel");
    
    /* -- type: FocusEvent -- */
    
    FocusEvent.relatedTarget = EventTarget;
    FocusEvent.initFocusEvent = function(typeArg, canBubbleArg, cancelableArg, viewArg, detailArg, relatedTargetArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='viewArg' type='Window'/>
        /// <param name='detailArg' type='Number'/>
        /// <param name='relatedTargetArg' type='EventTarget'/>
        /// </signature>
    };
    
    /* -- type: GainNode -- */
    
    GainNode.gain = AudioParam;
    
    /* -- type: IDBOpenDBRequest -- */
    
    _events(IDBOpenDBRequest, "onblocked", "onupgradeneeded", "onerror", "onsuccess");
    
    /* -- type: KeyboardEvent -- */
    
    KeyboardEventCtor.DOM_KEY_LOCATION_JOYSTICK = 0x05;
    KeyboardEventCtor.DOM_KEY_LOCATION_LEFT = 0x01;
    KeyboardEventCtor.DOM_KEY_LOCATION_MOBILE = 0x04;
    KeyboardEventCtor.DOM_KEY_LOCATION_NUMPAD = 0x03;
    KeyboardEventCtor.DOM_KEY_LOCATION_RIGHT = 0x02;
    KeyboardEventCtor.DOM_KEY_LOCATION_STANDARD = 0x00;
    KeyboardEvent.altKey = false;
    KeyboardEvent.char = '';
    KeyboardEvent.charCode = 0;
    KeyboardEvent.ctrlKey = false;
    KeyboardEvent.key = '';
    KeyboardEvent.keyCode = 0;
    KeyboardEvent.locale = '';
    KeyboardEvent.location = 0;
    KeyboardEvent.metaKey = false;
    KeyboardEvent.repeat = false;
    KeyboardEvent.shiftKey = false;
    KeyboardEvent.which = 0;
    KeyboardEvent.DOM_KEY_LOCATION_JOYSTICK = 0x05;
    KeyboardEvent.DOM_KEY_LOCATION_LEFT = 0x01;
    KeyboardEvent.DOM_KEY_LOCATION_MOBILE = 0x04;
    KeyboardEvent.DOM_KEY_LOCATION_NUMPAD = 0x03;
    KeyboardEvent.DOM_KEY_LOCATION_RIGHT = 0x02;
    KeyboardEvent.DOM_KEY_LOCATION_STANDARD = 0x00;
    KeyboardEvent.getModifierState = function(keyArg) {
        /// <signature>
        /// <param name='keyArg' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    KeyboardEvent.initKeyboardEvent = function(typeArg, canBubbleArg, cancelableArg, viewArg, keyArg, locationArg, modifiersListArg, repeat, locale) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='viewArg' type='Window'/>
        /// <param name='keyArg' type='String'/>
        /// <param name='locationArg' type='Number'/>
        /// <param name='modifiersListArg' type='String'/>
        /// <param name='repeat' type='Boolean'/>
        /// <param name='locale' type='String'/>
        /// </signature>
    };
    
    /* -- type: MSGestureEvent -- */
    
    MSGestureEvent.clientX = 0;
    MSGestureEvent.clientY = 0;
    MSGestureEvent.expansion = 0;
    MSGestureEvent.gestureObject = {};
    MSGestureEvent.hwTimestamp = 0;
    MSGestureEvent.offsetX = 0;
    MSGestureEvent.offsetY = 0;
    MSGestureEvent.rotation = 0;
    MSGestureEvent.scale = 0;
    MSGestureEvent.screenX = 0;
    MSGestureEvent.screenY = 0;
    MSGestureEvent.translationX = 0;
    MSGestureEvent.translationY = 0;
    MSGestureEvent.velocityAngular = 0;
    MSGestureEvent.velocityExpansion = 0;
    MSGestureEvent.velocityX = 0;
    MSGestureEvent.velocityY = 0;
    MSGestureEvent.MSGESTURE_FLAG_BEGIN = 0x00000001;
    MSGestureEvent.MSGESTURE_FLAG_CANCEL = 0x00000004;
    MSGestureEvent.MSGESTURE_FLAG_END = 0x00000002;
    MSGestureEvent.MSGESTURE_FLAG_INERTIA = 0x00000008;
    MSGestureEvent.MSGESTURE_FLAG_NONE = 0x00000000;
    MSGestureEvent.initGestureEvent = function(typeArg, canBubbleArg, cancelableArg, viewArg, detailArg, screenXArg, screenYArg, clientXArg, clientYArg, offsetXArg, offsetYArg, translationXArg, translationYArg, scaleArg, expansionArg, rotationArg, velocityXArg, velocityYArg, velocityExpansionArg, velocityAngularArg, hwTimestampArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='viewArg' type='Window'/>
        /// <param name='detailArg' type='Number'/>
        /// <param name='screenXArg' type='Number'/>
        /// <param name='screenYArg' type='Number'/>
        /// <param name='clientXArg' type='Number'/>
        /// <param name='clientYArg' type='Number'/>
        /// <param name='offsetXArg' type='Number'/>
        /// <param name='offsetYArg' type='Number'/>
        /// <param name='translationXArg' type='Number'/>
        /// <param name='translationYArg' type='Number'/>
        /// <param name='scaleArg' type='Number'/>
        /// <param name='expansionArg' type='Number'/>
        /// <param name='rotationArg' type='Number'/>
        /// <param name='velocityXArg' type='Number'/>
        /// <param name='velocityYArg' type='Number'/>
        /// <param name='velocityExpansionArg' type='Number'/>
        /// <param name='velocityAngularArg' type='Number'/>
        /// <param name='hwTimestampArg' type='Number'/>
        /// </signature>
    };
    
    /* -- type: MSManipulationEvent -- */
    
    MSManipulationEvent.currentState = 0;
    MSManipulationEvent.inertiaDestinationX = 0;
    MSManipulationEvent.inertiaDestinationY = 0;
    MSManipulationEvent.lastState = 0;
    MSManipulationEvent.MS_MANIPULATION_STATE_ACTIVE = 1;
    MSManipulationEvent.MS_MANIPULATION_STATE_CANCELLED = 6;
    MSManipulationEvent.MS_MANIPULATION_STATE_COMMITTED = 7;
    MSManipulationEvent.MS_MANIPULATION_STATE_DRAGGING = 5;
    MSManipulationEvent.MS_MANIPULATION_STATE_INERTIA = 2;
    MSManipulationEvent.MS_MANIPULATION_STATE_PRESELECT = 3;
    MSManipulationEvent.MS_MANIPULATION_STATE_SELECTING = 4;
    MSManipulationEvent.MS_MANIPULATION_STATE_STOPPED = 0;
    MSManipulationEvent.initMSManipulationEvent = function(typeArg, canBubbleArg, cancelableArg, viewArg, detailArg, lastState, currentState) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='viewArg' type='Window'/>
        /// <param name='detailArg' type='Number'/>
        /// <param name='lastState' type='Number'/>
        /// <param name='currentState' type='Number'/>
        /// </signature>
    };
    
    /* -- type: MediaElementAudioSourceNode -- */
    
    
    /* -- type: MouseEvent -- */
    
    MouseEvent.altKey = false;
    MouseEvent.button = 0;
    MouseEvent.buttons = 0;
    MouseEvent.clientX = 0;
    MouseEvent.clientY = 0;
    MouseEvent.ctrlKey = false;
    MouseEvent.fromElement = HTMLElement;
    MouseEvent.layerX = 0;
    MouseEvent.layerY = 0;
    MouseEvent.metaKey = false;
    MouseEvent.movementX = 0;
    MouseEvent.movementY = 0;
    MouseEvent.offsetX = 0;
    MouseEvent.offsetY = 0;
    MouseEvent.pageX = 0;
    MouseEvent.pageY = 0;
    MouseEvent.relatedTarget = EventTarget;
    MouseEvent.screenX = 0;
    MouseEvent.screenY = 0;
    MouseEvent.shiftKey = false;
    MouseEvent.toElement = HTMLElement;
    MouseEvent.which = 0;
    MouseEvent.x = 0;
    MouseEvent.y = 0;
    MouseEvent.getModifierState = function(keyArg) {
        /// <signature>
        /// <param name='keyArg' type='String'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    MouseEvent.initMouseEvent = function(typeArg, canBubbleArg, cancelableArg, viewArg, detailArg, screenXArg, screenYArg, clientXArg, clientYArg, ctrlKeyArg, altKeyArg, shiftKeyArg, metaKeyArg, buttonArg, relatedTargetArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='viewArg' type='Window'/>
        /// <param name='detailArg' type='Number'/>
        /// <param name='screenXArg' type='Number'/>
        /// <param name='screenYArg' type='Number'/>
        /// <param name='clientXArg' type='Number'/>
        /// <param name='clientYArg' type='Number'/>
        /// <param name='ctrlKeyArg' type='Boolean'/>
        /// <param name='altKeyArg' type='Boolean'/>
        /// <param name='shiftKeyArg' type='Boolean'/>
        /// <param name='metaKeyArg' type='Boolean'/>
        /// <param name='buttonArg' type='Number'/>
        /// <param name='relatedTargetArg' type='EventTarget'/>
        /// </signature>
    };
    
    /* -- type: NavigationCompletedEvent -- */
    
    NavigationCompletedEvent.isSuccess = false;
    NavigationCompletedEvent.webErrorStatus = 0;
    
    /* -- type: NavigationEventWithReferrer -- */
    
    NavigationEventWithReferrer.referer = '';
    
    /* -- type: OfflineAudioContext -- */
    
    OfflineAudioContext.startRendering = function() {
    };
    _events(OfflineAudioContext, "oncomplete");
    
    /* -- type: OscillatorNode -- */
    
    OscillatorNode.detune = AudioParam;
    OscillatorNode.frequency = AudioParam;
    OscillatorNode.type = '';
    OscillatorNode.setPeriodicWave = function(periodicWave) {
        /// <signature>
        /// <param name='periodicWave' type='PeriodicWave'/>
        /// </signature>
    };
    OscillatorNode.start = function(when) {
        /// <signature>
        /// <param name='when' type='Number' optional='true' />
        /// </signature>
    };
    OscillatorNode.stop = function(when) {
        /// <signature>
        /// <param name='when' type='Number' optional='true' />
        /// </signature>
    };
    _events(OscillatorNode, "onended");
    
    /* -- type: PannerNode -- */
    
    PannerNode.coneInnerAngle = 0;
    PannerNode.coneOuterAngle = 0;
    PannerNode.coneOuterGain = 0;
    PannerNode.distanceModel = '';
    PannerNode.maxDistance = 0;
    PannerNode.panningModel = '';
    PannerNode.refDistance = 0;
    PannerNode.rolloffFactor = 0;
    PannerNode.setOrientation = function(x, y, z) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='z' type='Number'/>
        /// </signature>
    };
    PannerNode.setPosition = function(x, y, z) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='z' type='Number'/>
        /// </signature>
    };
    PannerNode.setVelocity = function(x, y, z) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='z' type='Number'/>
        /// </signature>
    };
    
    /* -- type: SVGZoomEvent -- */
    
    SVGZoomEvent.newScale = 0;
    SVGZoomEvent.newTranslate = SVGPoint;
    SVGZoomEvent.previousScale = 0;
    SVGZoomEvent.previousTranslate = SVGPoint;
    SVGZoomEvent.zoomRectScreen = SVGRect;
    
    /* -- type: ScriptProcessorNode -- */
    
    ScriptProcessorNode.bufferSize = 0;
    _events(ScriptProcessorNode, "onaudioprocess");
    
    /* -- type: StereoPannerNode -- */
    
    StereoPannerNode.pan = AudioParam;
    
    /* -- type: TextEvent -- */
    
    TextEvent.data = '';
    TextEvent.inputMethod = 0;
    TextEvent.locale = '';
    TextEvent.DOM_INPUT_METHOD_DROP = 0x03;
    TextEvent.DOM_INPUT_METHOD_HANDWRITING = 0x06;
    TextEvent.DOM_INPUT_METHOD_IME = 0x04;
    TextEvent.DOM_INPUT_METHOD_KEYBOARD = 0x01;
    TextEvent.DOM_INPUT_METHOD_MULTIMODAL = 0x08;
    TextEvent.DOM_INPUT_METHOD_OPTION = 0x05;
    TextEvent.DOM_INPUT_METHOD_PASTE = 0x02;
    TextEvent.DOM_INPUT_METHOD_SCRIPT = 0x09;
    TextEvent.DOM_INPUT_METHOD_UNKNOWN = 0x00;
    TextEvent.DOM_INPUT_METHOD_VOICE = 0x07;
    TextEvent.initTextEvent = function(typeArg, canBubbleArg, cancelableArg, viewArg, dataArg, inputMethod, locale) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='viewArg' type='Window'/>
        /// <param name='dataArg' type='String'/>
        /// <param name='inputMethod' type='Number'/>
        /// <param name='locale' type='String'/>
        /// </signature>
    };
    
    /* -- type: TouchEvent -- */
    
    TouchEvent.altKey = false;
    TouchEvent.changedTouches = TouchList;
    TouchEvent.ctrlKey = false;
    TouchEvent.metaKey = false;
    TouchEvent.shiftKey = false;
    TouchEvent.targetTouches = TouchList;
    TouchEvent.touches = TouchList;
    
    /* -- type: WaveShaperNode -- */
    
    WaveShaperNode.curve = new Float32Array();
    WaveShaperNode.oversample = '';
    
    /* -- type: Window -- */
    
    _$implement(Window, WindowTimers);
    _$implement(Window, WindowSessionStorage);
    _$implement(Window, WindowLocalStorage);
    _$implement(Window, WindowConsole);
    _$implement(Window, GlobalEventHandlers);
    _$implement(Window, IDBEnvironment);
    _$implement(Window, WindowBase64);
    _$implement(Window, EventTarget);
    Window.animationStartTime = 0;
    Window.applicationCache = ApplicationCache;
    Window.clientInformation = Navigator;
    Window.closed = false;
    Window.crypto = Crypto;
    Window.defaultStatus = '';
    Window.devicePixelRatio = 0;
    Window.doNotTrack = '';
    Window.document = Document;
    Window.event = Event;
    Window.external = External;
    Window.frameElement = HTMLElement;
    Window.frames = _$getTrackingNull(Object.create(Window));
    Window.history = History;
    Window.innerHeight = 0;
    Window.innerWidth = 0;
    Window.length = 0;
    Window.location = Location;
    Window.locationbar = BarProp;
    Window.menubar = BarProp;
    Window.msAnimationStartTime = 0;
    Window.name = '';
    Window.navigator = Navigator;
    Window.offscreenBuffering = {};
    Window.onerror = new ErrorEventHandler();
    Window.ontouchcancel = {};
    Window.ontouchend = {};
    Window.ontouchmove = {};
    Window.ontouchstart = {};
    Window.opener = _$getTrackingNull(Object.create(Window));
    Window.orientation = '';
    Window.outerHeight = 0;
    Window.outerWidth = 0;
    Window.pageXOffset = 0;
    Window.pageYOffset = 0;
    Window.parent = _$getTrackingNull(Object.create(Window));
    Window.performance = Performance;
    Window.personalbar = BarProp;
    Window.screen = Screen;
    Window.screenLeft = 0;
    Window.screenTop = 0;
    Window.screenX = 0;
    Window.screenY = 0;
    Window.scrollX = 0;
    Window.scrollY = 0;
    Window.scrollbars = BarProp;
    Window.self = _$getTrackingNull(Object.create(Window));
    Window.status = '';
    Window.statusbar = BarProp;
    Window.styleMedia = StyleMedia;
    Window.toolbar = BarProp;
    Window.top = _$getTrackingNull(Object.create(Window));
    Window.window = _$getTrackingNull(Object.create(Window));
    Window.alert = function(message) {
        /// <signature>
        /// <param name='message' type='String' optional='true' />
        /// </signature>
    };
    Window.blur = function() {
    };
    Window.cancelAnimationFrame = function(handle) {
        /// <signature>
        /// <param name='handle' type='Number'/>
        /// </signature>
    };
    Window.captureEvents = function() {
    };
    Window.close = function() {
    };
    Window.confirm = function(message) {
        /// <signature>
        /// <param name='message' type='String' optional='true' />
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    Window.focus = function() {
    };
    Window.getComputedStyle = function(elt, pseudoElt) {
        /// <signature>
        /// <param name='elt' type='Element'/>
        /// <param name='pseudoElt' type='String' optional='true' />
        /// <returns type='CSSStyleDeclaration'/>
        /// </signature>
        return CSSStyleDeclaration;
    };
    Window.getMatchedCSSRules = function(elt, pseudoElt) {
        /// <signature>
        /// <param name='elt' type='Element'/>
        /// <param name='pseudoElt' type='String' optional='true' />
        /// <returns type='CSSRuleList'/>
        /// </signature>
        return CSSRuleList;
    };
    Window.getSelection = function() {
        /// <signature>
        /// <returns type='Selection'/>
        /// </signature>
        return Selection;
    };
    Window.matchMedia = function(mediaQuery) {
        /// <signature>
        /// <param name='mediaQuery' type='String'/>
        /// <returns type='MediaQueryList'/>
        /// </signature>
        return MediaQueryList;
    };
    Window.moveBy = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number' optional='true' />
        /// <param name='y' type='Number' optional='true' />
        /// </signature>
    };
    Window.moveTo = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number' optional='true' />
        /// <param name='y' type='Number' optional='true' />
        /// </signature>
    };
    Window.msCancelRequestAnimationFrame = function(handle) {
        /// <signature>
        /// <param name='handle' type='Number'/>
        /// </signature>
    };
    Window.msMatchMedia = function(mediaQuery) {
        /// <signature>
        /// <param name='mediaQuery' type='String'/>
        /// <returns type='MediaQueryList'/>
        /// </signature>
        return MediaQueryList;
    };
    Window.msRequestAnimationFrame = function(callback) {
        /// <signature>
        /// <param name='callback' type='FrameRequestCallback'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    Window.msWriteProfilerMark = function(profilerMarkName) {
        /// <signature>
        /// <param name='profilerMarkName' type='String'/>
        /// </signature>
    };
    Window.open = function(url, target, features, replace) {
        /// <signature>
        /// <param name='url' type='String' optional='true' />
        /// <param name='target' type='String' optional='true' />
        /// <param name='features' type='String' optional='true' />
        /// <param name='replace' type='Boolean' optional='true' />
        /// <returns type='Window'/>
        /// </signature>
        return Window;
    };
    Window.postMessage = function(message, targetOrigin, ports) {
        /// <signature>
        /// <param name='message' type='Object'/>
        /// <param name='targetOrigin' type='String'/>
        /// <param name='ports' type='Object' optional='true' />
        /// </signature>
    };
    Window.print = function() {
    };
    Window.prompt = function(message, _default) {
        /// <signature>
        /// <param name='message' type='String' optional='true' />
        /// <param name='default' type='String' optional='true' />
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    Window.releaseEvents = function() {
    };
    Window.requestAnimationFrame = function(callback) {
        /// <signature>
        /// <param name='callback' type='FrameRequestCallback'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    Window.resizeBy = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number' optional='true' />
        /// <param name='y' type='Number' optional='true' />
        /// </signature>
    };
    Window.resizeTo = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number' optional='true' />
        /// <param name='y' type='Number' optional='true' />
        /// </signature>
    };
    Window.scroll = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number' optional='true' />
        /// <param name='y' type='Number' optional='true' />
        /// </signature>
    };
    Window.scrollBy = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number' optional='true' />
        /// <param name='y' type='Number' optional='true' />
        /// </signature>
    };
    Window.scrollTo = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number' optional='true' />
        /// <param name='y' type='Number' optional='true' />
        /// </signature>
    };
    Window.webkitConvertPointFromNodeToPage = function(node, pt) {
        /// <signature>
        /// <param name='node' type='Node'/>
        /// <param name='pt' type='WebKitPoint'/>
        /// <returns type='WebKitPoint'/>
        /// </signature>
        return WebKitPoint;
    };
    Window.webkitConvertPointFromPageToNode = function(node, pt) {
        /// <signature>
        /// <param name='node' type='Node'/>
        /// <param name='pt' type='WebKitPoint'/>
        /// <returns type='WebKitPoint'/>
        /// </signature>
        return WebKitPoint;
    };
    Window.toString = function() { 
	    /// <signature>
	    /// <returns type='String'/>
	    /// </signature>
	    return ''; 
    };
    _events(Window, "onabort", "onafterprint", "onbeforeprint", "onbeforeunload", "onblur", "oncanplay", "oncanplaythrough", "onchange", "onclick", "oncompassneedscalibration", "oncontextmenu", "ondblclick", "ondevicemotion", "ondeviceorientation", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onfocus", "onhashchange", "oninput", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmessage", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onmsgesturechange", "onmsgesturedoubletap", "onmsgestureend", "onmsgesturehold", "onmsgesturestart", "onmsgesturetap", "onmsinertiastart", "onmspointercancel", "onmspointerdown", "onmspointerenter", "onmspointerleave", "onmspointermove", "onmspointerout", "onmspointerover", "onmspointerup", "onoffline", "ononline", "onorientationchange", "onpagehide", "onpageshow", "onpause", "onplay", "onplaying", "onpopstate", "onprogress", "onratechange", "onreadystatechange", "onreset", "onresize", "onscroll", "onseeked", "onseeking", "onselect", "onstalled", "onstorage", "onsubmit", "onsuspend", "ontimeupdate", "onunload", "onvolumechange", "onwaiting", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onwheel");
    
    /* -- type: CSSMediaRule -- */
    
    CSSMediaRule.media = MediaList;
    
    /* -- type: CSSSupportsRule -- */
    
    
    /* -- type: Comment -- */
    
    Comment.text = '';
    Comment.nodeType = Node.COMMENT_NODE;
    Comment.nodeName = '#comment';
    
    /* -- type: DragEvent -- */
    
    DragEvent.dataTransfer = DataTransfer;
    DragEvent.initDragEvent = function(typeArg, canBubbleArg, cancelableArg, viewArg, detailArg, screenXArg, screenYArg, clientXArg, clientYArg, ctrlKeyArg, altKeyArg, shiftKeyArg, metaKeyArg, buttonArg, relatedTargetArg, dataTransferArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='viewArg' type='Window'/>
        /// <param name='detailArg' type='Number'/>
        /// <param name='screenXArg' type='Number'/>
        /// <param name='screenYArg' type='Number'/>
        /// <param name='clientXArg' type='Number'/>
        /// <param name='clientYArg' type='Number'/>
        /// <param name='ctrlKeyArg' type='Boolean'/>
        /// <param name='altKeyArg' type='Boolean'/>
        /// <param name='shiftKeyArg' type='Boolean'/>
        /// <param name='metaKeyArg' type='Boolean'/>
        /// <param name='buttonArg' type='Number'/>
        /// <param name='relatedTargetArg' type='EventTarget'/>
        /// <param name='dataTransferArg' type='DataTransfer'/>
        /// </signature>
    };
    DragEvent.msConvertURL = function(file, targetType, targetURL) {
        /// <signature>
        /// <param name='file' type='File'/>
        /// <param name='targetType' type='String'/>
        /// <param name='targetURL' type='String' optional='true' />
        /// </signature>
    };
    
    /* -- type: HTMLDocument -- */
    
    
    /* -- type: HTMLElement -- */
    
    HTMLElement.accessKey = '';
    HTMLElement.children = HTMLCollection;
    HTMLElement.className = '';
    HTMLElement.contentEditable = '';
    HTMLElement.dataset = DOMStringMap;
    HTMLElement.dir = '';
    HTMLElement.draggable = false;
    HTMLElement.hidden = false;
    HTMLElement.hideFocus = false;
    HTMLElement.id = '';
    Object.defineProperty(HTMLElement,"innerHTML", { get: function () { return ''; }, set: function (v) { _setInnerHTML(this, v); } });
    HTMLElement.innerText = '';
    HTMLElement.isContentEditable = false;
    HTMLElement.lang = '';
    HTMLElement.offsetHeight = 0;
    HTMLElement.offsetLeft = 0;
    HTMLElement.offsetParent = _$getTrackingNull(Object.create(HTMLElement));
    HTMLElement.offsetTop = 0;
    HTMLElement.offsetWidth = 0;
    HTMLElement.outerHTML = '';
    HTMLElement.outerText = '';
    HTMLElement.spellcheck = false;
    HTMLElement.style = CSSStyleDeclaration;
    HTMLElement.tabIndex = 0;
    HTMLElement.title = '';
    HTMLElement.blur = function() {
    };
    HTMLElement.click = function() {
    };
    HTMLElement.contains = function(child) {
        /// <signature>
        /// <param name='child' type='HTMLElement'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    HTMLElement.dragDrop = function() {
        /// <signature>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    HTMLElement.focus = function() {
    };
    HTMLElement.getElementsByClassName = function(classNames) {
        /// <signature>
        /// <param name='classNames' type='String'/>
        /// <returns type='NodeList'/>
        /// </signature>
        return NodeList;
    };
    HTMLElement.insertAdjacentElement = function(position, insertedElement) {
        /// <signature>
        /// <param name='position' type='String'/>
        /// <param name='insertedElement' type='Element'/>
        /// <returns type='Element'/>
        /// </signature>
        return HTMLElement;
    };
    HTMLElement.insertAdjacentHTML = function(where, html) {
        /// <signature>
        /// <param name='where' type='String'/>
        /// <param name='html' type='String'/>
        /// </signature>
        _setInnerHTML(this, html);
    };
    HTMLElement.insertAdjacentText = function(where, text) {
        /// <signature>
        /// <param name='where' type='String'/>
        /// <param name='text' type='String'/>
        /// </signature>
    };
    HTMLElement.msGetInputContext = function() {
        /// <signature>
        /// <returns type='MSInputMethodContext'/>
        /// </signature>
        return MSInputMethodContext;
    };
    HTMLElement.scrollIntoView = function(top) {
        /// <signature>
        /// <param name='top' type='Boolean' optional='true' />
        /// </signature>
    };
    HTMLElement.setActive = function() {
    };
    HTMLElement.nodeName = HTMLElement.tagName = 'NOFRAMES';
    HTMLElement.localName = 'noframes';
    _events(HTMLElement, "onabort", "onactivate", "onbeforeactivate", "onbeforecopy", "onbeforecut", "onbeforedeactivate", "onbeforepaste", "onblur", "oncanplay", "oncanplaythrough", "onchange", "onclick", "oncontextmenu", "oncopy", "oncuechange", "oncut", "ondblclick", "ondeactivate", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onmscontentzoom", "onmsmanipulationstatechanged", "onpaste", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onscroll", "onseeked", "onseeking", "onselect", "onselectstart", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting", "onariarequest", "oncommand", "ongotpointercapture", "onlostpointercapture", "onmsgesturechange", "onmsgesturedoubletap", "onmsgestureend", "onmsgesturehold", "onmsgesturestart", "onmsgesturetap", "onmsgotpointercapture", "onmsinertiastart", "onmslostpointercapture", "onmspointercancel", "onmspointerdown", "onmspointerenter", "onmspointerleave", "onmspointermove", "onmspointerout", "onmspointerover", "onmspointerup", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "onwebkitfullscreenchange", "onwebkitfullscreenerror", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onwheel");
    
    /* -- type: MSPointerEvent -- */
    
    MSPointerEvent.currentPoint = {};
    MSPointerEvent.height = 0;
    MSPointerEvent.hwTimestamp = 0;
    MSPointerEvent.intermediatePoints = {};
    MSPointerEvent.isPrimary = false;
    MSPointerEvent.pointerId = 0;
    MSPointerEvent.pointerType = {};
    MSPointerEvent.pressure = 0;
    MSPointerEvent.rotation = 0;
    MSPointerEvent.tiltX = 0;
    MSPointerEvent.tiltY = 0;
    MSPointerEvent.width = 0;
    MSPointerEvent.getCurrentPoint = function(element) {
        /// <signature>
        /// <param name='element' type='Element'/>
        /// </signature>
    };
    MSPointerEvent.getIntermediatePoints = function(element) {
        /// <signature>
        /// <param name='element' type='Element'/>
        /// </signature>
    };
    MSPointerEvent.initPointerEvent = function(typeArg, canBubbleArg, cancelableArg, viewArg, detailArg, screenXArg, screenYArg, clientXArg, clientYArg, ctrlKeyArg, altKeyArg, shiftKeyArg, metaKeyArg, buttonArg, relatedTargetArg, offsetXArg, offsetYArg, widthArg, heightArg, pressure, rotation, tiltX, tiltY, pointerIdArg, pointerType, hwTimestampArg, isPrimary) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='viewArg' type='Window'/>
        /// <param name='detailArg' type='Number'/>
        /// <param name='screenXArg' type='Number'/>
        /// <param name='screenYArg' type='Number'/>
        /// <param name='clientXArg' type='Number'/>
        /// <param name='clientYArg' type='Number'/>
        /// <param name='ctrlKeyArg' type='Boolean'/>
        /// <param name='altKeyArg' type='Boolean'/>
        /// <param name='shiftKeyArg' type='Boolean'/>
        /// <param name='metaKeyArg' type='Boolean'/>
        /// <param name='buttonArg' type='Number'/>
        /// <param name='relatedTargetArg' type='EventTarget'/>
        /// <param name='offsetXArg' type='Number'/>
        /// <param name='offsetYArg' type='Number'/>
        /// <param name='widthArg' type='Number'/>
        /// <param name='heightArg' type='Number'/>
        /// <param name='pressure' type='Number'/>
        /// <param name='rotation' type='Number'/>
        /// <param name='tiltX' type='Number'/>
        /// <param name='tiltY' type='Number'/>
        /// <param name='pointerIdArg' type='Number'/>
        /// <param name='pointerType' type='Object'/>
        /// <param name='hwTimestampArg' type='Number'/>
        /// <param name='isPrimary' type='Boolean'/>
        /// </signature>
    };
    
    /* -- type: MouseWheelEvent -- */
    
    MouseWheelEvent.wheelDelta = 0;
    MouseWheelEvent.wheelDeltaX = 0;
    MouseWheelEvent.wheelDeltaY = 0;
    MouseWheelEvent.initMouseWheelEvent = function(typeArg, canBubbleArg, cancelableArg, viewArg, detailArg, screenXArg, screenYArg, clientXArg, clientYArg, buttonArg, relatedTargetArg, modifiersListArg, wheelDeltaArg) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='viewArg' type='Window'/>
        /// <param name='detailArg' type='Number'/>
        /// <param name='screenXArg' type='Number'/>
        /// <param name='screenYArg' type='Number'/>
        /// <param name='clientXArg' type='Number'/>
        /// <param name='clientYArg' type='Number'/>
        /// <param name='buttonArg' type='Number'/>
        /// <param name='relatedTargetArg' type='EventTarget'/>
        /// <param name='modifiersListArg' type='String'/>
        /// <param name='wheelDeltaArg' type='Number'/>
        /// </signature>
    };
    
    /* -- type: PointerEvent -- */
    
    PointerEvent.currentPoint = {};
    PointerEvent.height = 0;
    PointerEvent.hwTimestamp = 0;
    PointerEvent.intermediatePoints = {};
    PointerEvent.isPrimary = false;
    PointerEvent.pointerId = 0;
    PointerEvent.pointerType = {};
    PointerEvent.pressure = 0;
    PointerEvent.rotation = 0;
    PointerEvent.tiltX = 0;
    PointerEvent.tiltY = 0;
    PointerEvent.width = 0;
    PointerEvent.getCurrentPoint = function(element) {
        /// <signature>
        /// <param name='element' type='Element'/>
        /// </signature>
    };
    PointerEvent.getIntermediatePoints = function(element) {
        /// <signature>
        /// <param name='element' type='Element'/>
        /// </signature>
    };
    PointerEvent.initPointerEvent = function(typeArg, canBubbleArg, cancelableArg, viewArg, detailArg, screenXArg, screenYArg, clientXArg, clientYArg, ctrlKeyArg, altKeyArg, shiftKeyArg, metaKeyArg, buttonArg, relatedTargetArg, offsetXArg, offsetYArg, widthArg, heightArg, pressure, rotation, tiltX, tiltY, pointerIdArg, pointerType, hwTimestampArg, isPrimary) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='viewArg' type='Window'/>
        /// <param name='detailArg' type='Number'/>
        /// <param name='screenXArg' type='Number'/>
        /// <param name='screenYArg' type='Number'/>
        /// <param name='clientXArg' type='Number'/>
        /// <param name='clientYArg' type='Number'/>
        /// <param name='ctrlKeyArg' type='Boolean'/>
        /// <param name='altKeyArg' type='Boolean'/>
        /// <param name='shiftKeyArg' type='Boolean'/>
        /// <param name='metaKeyArg' type='Boolean'/>
        /// <param name='buttonArg' type='Number'/>
        /// <param name='relatedTargetArg' type='EventTarget'/>
        /// <param name='offsetXArg' type='Number'/>
        /// <param name='offsetYArg' type='Number'/>
        /// <param name='widthArg' type='Number'/>
        /// <param name='heightArg' type='Number'/>
        /// <param name='pressure' type='Number'/>
        /// <param name='rotation' type='Number'/>
        /// <param name='tiltX' type='Number'/>
        /// <param name='tiltY' type='Number'/>
        /// <param name='pointerIdArg' type='Number'/>
        /// <param name='pointerType' type='Object'/>
        /// <param name='hwTimestampArg' type='Number'/>
        /// <param name='isPrimary' type='Boolean'/>
        /// </signature>
    };
    
    /* -- type: ProcessingInstruction -- */
    
    ProcessingInstruction.target = '';
    ProcessingInstruction.nodeType = Node.PROCESSING_INSTRUCTION_NODE;
    
    /* -- type: SVGElement -- */
    
    SVGElement.id = '';
    SVGElement.ownerSVGElement = _$getTrackingNull(Object.create(SVGSVGElement));
    SVGElement.viewportElement = _$getTrackingNull(Object.create(SVGElement));
    SVGElement.xmlbase = '';
    _events(SVGElement, "onclick", "ondblclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onariarequest", "oncommand", "ongotpointercapture", "onlostpointercapture", "onmsgesturechange", "onmsgesturedoubletap", "onmsgestureend", "onmsgesturehold", "onmsgesturestart", "onmsgesturetap", "onmsgotpointercapture", "onmsinertiastart", "onmslostpointercapture", "onmspointercancel", "onmspointerdown", "onmspointerenter", "onmspointerleave", "onmspointermove", "onmspointerout", "onmspointerover", "onmspointerup", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "onwebkitfullscreenchange", "onwebkitfullscreenerror", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onwheel");
    
    /* -- type: Text -- */
    
    Text.wholeText = '';
    Text.replaceWholeText = function(content) {
        /// <signature>
        /// <param name='content' type='String'/>
        /// <returns type='Text'/>
        /// </signature>
        return Text;
    };
    Text.splitText = function(offset) {
        /// <signature>
        /// <param name='offset' type='Number'/>
        /// <returns type='Text'/>
        /// </signature>
        return Text;
    };
    Text.nodeType = Node.TEXT_NODE;
    Text.nodeName = '#text';
    
    /* -- type: UnviewableContentIdentifiedEvent -- */
    
    UnviewableContentIdentifiedEvent.mediaType = '';
    
    /* -- type: WheelEvent -- */
    
    WheelEventCtor.DOM_DELTA_LINE = 0x01;
    WheelEventCtor.DOM_DELTA_PAGE = 0x02;
    WheelEventCtor.DOM_DELTA_PIXEL = 0x00;
    WheelEvent.deltaMode = 0;
    WheelEvent.deltaX = 0;
    WheelEvent.deltaY = 0;
    WheelEvent.deltaZ = 0;
    WheelEvent.DOM_DELTA_LINE = 0x01;
    WheelEvent.DOM_DELTA_PAGE = 0x02;
    WheelEvent.DOM_DELTA_PIXEL = 0x00;
    WheelEvent.getCurrentPoint = function(element) {
        /// <signature>
        /// <param name='element' type='Element'/>
        /// </signature>
    };
    WheelEvent.initWheelEvent = function(typeArg, canBubbleArg, cancelableArg, viewArg, detailArg, screenXArg, screenYArg, clientXArg, clientYArg, buttonArg, relatedTargetArg, modifiersListArg, deltaXArg, deltaYArg, deltaZArg, deltaMode) {
        /// <signature>
        /// <param name='typeArg' type='String'/>
        /// <param name='canBubbleArg' type='Boolean'/>
        /// <param name='cancelableArg' type='Boolean'/>
        /// <param name='viewArg' type='Window'/>
        /// <param name='detailArg' type='Number'/>
        /// <param name='screenXArg' type='Number'/>
        /// <param name='screenYArg' type='Number'/>
        /// <param name='clientXArg' type='Number'/>
        /// <param name='clientYArg' type='Number'/>
        /// <param name='buttonArg' type='Number'/>
        /// <param name='relatedTargetArg' type='EventTarget'/>
        /// <param name='modifiersListArg' type='String'/>
        /// <param name='deltaXArg' type='Number'/>
        /// <param name='deltaYArg' type='Number'/>
        /// <param name='deltaZArg' type='Number'/>
        /// <param name='deltaMode' type='Number'/>
        /// </signature>
    };
    
    /* -- type: XMLDocument -- */
    
    
    /* -- type: CDATASection -- */
    
    CDATASection.nodeType = Node.CDATA_SECTION_NODE;
    CDATASection.nodeName = '#cdata-section';
    
    /* -- type: HTMLAnchorElement -- */
    
    HTMLAnchorElement.Methods = '';
    HTMLAnchorElement.charset = '';
    HTMLAnchorElement.coords = '';
    HTMLAnchorElement.hash = '';
    HTMLAnchorElement.host = '';
    HTMLAnchorElement.hostname = '';
    HTMLAnchorElement.href = '';
    HTMLAnchorElement.hreflang = '';
    HTMLAnchorElement.mimeType = '';
    HTMLAnchorElement.name = '';
    HTMLAnchorElement.nameProp = '';
    HTMLAnchorElement.pathname = '';
    HTMLAnchorElement.port = '';
    HTMLAnchorElement.protocol = '';
    HTMLAnchorElement.protocolLong = '';
    HTMLAnchorElement.rel = '';
    HTMLAnchorElement.rev = '';
    HTMLAnchorElement.search = '';
    HTMLAnchorElement.shape = '';
    HTMLAnchorElement.target = '';
    HTMLAnchorElement.text = '';
    HTMLAnchorElement.type = '';
    HTMLAnchorElement.urn = '';
    HTMLAnchorElement.toString = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    HTMLAnchorElement.nodeName = HTMLAnchorElement.tagName = 'A';
    HTMLAnchorElement.localName = 'a';
    
    /* -- type: HTMLAppletElement -- */
    
    HTMLAppletElement.BaseHref = '';
    HTMLAppletElement.align = '';
    HTMLAppletElement.alt = '';
    HTMLAppletElement.altHtml = '';
    HTMLAppletElement.archive = '';
    HTMLAppletElement.border = '';
    HTMLAppletElement.code = '';
    HTMLAppletElement.codeBase = '';
    HTMLAppletElement.codeType = '';
    HTMLAppletElement.contentDocument = document;
    HTMLAppletElement.data = '';
    HTMLAppletElement.declare = false;
    HTMLAppletElement.form = HTMLFormElement;
    HTMLAppletElement.height = '';
    HTMLAppletElement.hspace = 0;
    HTMLAppletElement.name = '';
    HTMLAppletElement.object = '';
    HTMLAppletElement.standby = '';
    HTMLAppletElement.type = '';
    HTMLAppletElement.useMap = '';
    HTMLAppletElement.vspace = 0;
    HTMLAppletElement.width = 0;
    HTMLAppletElement.nodeName = HTMLAppletElement.tagName = 'APPLET';
    HTMLAppletElement.localName = 'applet';
    
    /* -- type: HTMLAreaElement -- */
    
    HTMLAreaElement.alt = '';
    HTMLAreaElement.coords = '';
    HTMLAreaElement.hash = '';
    HTMLAreaElement.host = '';
    HTMLAreaElement.hostname = '';
    HTMLAreaElement.href = '';
    HTMLAreaElement.noHref = false;
    HTMLAreaElement.pathname = '';
    HTMLAreaElement.port = '';
    HTMLAreaElement.protocol = '';
    HTMLAreaElement.rel = '';
    HTMLAreaElement.search = '';
    HTMLAreaElement.shape = '';
    HTMLAreaElement.target = '';
    HTMLAreaElement.toString = function() {
        /// <signature>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    HTMLAreaElement.nodeName = HTMLAreaElement.tagName = 'AREA';
    HTMLAreaElement.localName = 'area';
    
    /* -- type: HTMLBRElement -- */
    
    HTMLBRElement.clear = '';
    HTMLBRElement.nodeName = HTMLBRElement.tagName = 'BR';
    HTMLBRElement.localName = 'br';
    
    /* -- type: HTMLBaseElement -- */
    
    HTMLBaseElement.href = '';
    HTMLBaseElement.target = '';
    HTMLBaseElement.nodeName = HTMLBaseElement.tagName = 'BASE';
    HTMLBaseElement.localName = 'base';
    
    /* -- type: HTMLBaseFontElement -- */
    
    _$implement(HTMLBaseFontElement, DOML2DeprecatedColorProperty);
    HTMLBaseFontElement.face = '';
    HTMLBaseFontElement.size = 0;
    HTMLBaseFontElement.nodeName = HTMLBaseFontElement.tagName = 'BASEFONT';
    HTMLBaseFontElement.localName = 'basefont';
    
    /* -- type: HTMLBlockElement -- */
    
    HTMLBlockElement.cite = '';
    HTMLBlockElement.clear = '';
    HTMLBlockElement.width = 0;
    HTMLBlockElement.nodeName = HTMLBlockElement.tagName = 'ADDRESS';
    HTMLBlockElement.localName = 'address';
    
    /* -- type: HTMLBodyElement -- */
    
    HTMLBodyElement.aLink = {};
    HTMLBodyElement.background = '';
    HTMLBodyElement.bgColor = {};
    HTMLBodyElement.bgProperties = '';
    HTMLBodyElement.link = {};
    HTMLBodyElement.noWrap = false;
    HTMLBodyElement.text = {};
    HTMLBodyElement.vLink = {};
    HTMLBodyElement.createTextRange = function() {
        /// <signature>
        /// <returns type='TextRange'/>
        /// </signature>
        return TextRange;
    };
    HTMLBodyElement.nodeName = HTMLBodyElement.tagName = 'BODY';
    HTMLBodyElement.localName = 'body';
    _events(HTMLBodyElement, "onafterprint", "onbeforeprint", "onbeforeunload", "onblur", "onerror", "onfocus", "onhashchange", "onload", "onmessage", "onoffline", "ononline", "onorientationchange", "onpagehide", "onpageshow", "onpopstate", "onresize", "onstorage", "onunload", "onabort", "onactivate", "onbeforeactivate", "onbeforecopy", "onbeforecut", "onbeforedeactivate", "onbeforepaste", "onblur", "oncanplay", "oncanplaythrough", "onchange", "onclick", "oncontextmenu", "oncopy", "oncuechange", "oncut", "ondblclick", "ondeactivate", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onmscontentzoom", "onmsmanipulationstatechanged", "onpaste", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onscroll", "onseeked", "onseeking", "onselect", "onselectstart", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting", "onariarequest", "oncommand", "ongotpointercapture", "onlostpointercapture", "onmsgesturechange", "onmsgesturedoubletap", "onmsgestureend", "onmsgesturehold", "onmsgesturestart", "onmsgesturetap", "onmsgotpointercapture", "onmsinertiastart", "onmslostpointercapture", "onmspointercancel", "onmspointerdown", "onmspointerenter", "onmspointerleave", "onmspointermove", "onmspointerout", "onmspointerover", "onmspointerup", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "onwebkitfullscreenchange", "onwebkitfullscreenerror", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onwheel");
    
    /* -- type: HTMLButtonElement -- */
    
    HTMLButtonElement.autofocus = false;
    HTMLButtonElement.disabled = false;
    HTMLButtonElement.form = HTMLFormElement;
    HTMLButtonElement.formAction = '';
    HTMLButtonElement.formEnctype = '';
    HTMLButtonElement.formMethod = '';
    HTMLButtonElement.formNoValidate = '';
    HTMLButtonElement.formTarget = '';
    HTMLButtonElement.name = '';
    HTMLButtonElement.status = {};
    HTMLButtonElement.type = '';
    HTMLButtonElement.validationMessage = '';
    HTMLButtonElement.validity = ValidityState;
    HTMLButtonElement.value = '';
    HTMLButtonElement.willValidate = false;
    HTMLButtonElement.checkValidity = function() {
        /// <signature>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    HTMLButtonElement.createTextRange = function() {
        /// <signature>
        /// <returns type='TextRange'/>
        /// </signature>
        return TextRange;
    };
    HTMLButtonElement.setCustomValidity = function(error) {
        /// <signature>
        /// <param name='error' type='String'/>
        /// </signature>
    };
    HTMLButtonElement.nodeName = HTMLButtonElement.tagName = 'BUTTON';
    HTMLButtonElement.localName = 'button';
    
    /* -- type: HTMLCanvasElement -- */
    
    HTMLCanvasElement.height = 0;
    HTMLCanvasElement.width = 0;
    HTMLCanvasElement.getContext = function(contextId, args) {
        /// <signature>
        /// <param name='contextId' type='String'/>
        /// <param name='args' type='Object'/>
        /// <returns type='CanvasRenderingContext2D'/>
        /// </signature>
        /// <signature>
        /// <param name='contextId' type='String'/>
        /// <param name='args' type='Object'/>
        /// <returns type='WebGLRenderingContext'/>
        /// </signature>
        switch (contextId) { case '2d': return CanvasRenderingContext2D; case 'experimental-webgl': return WebGLRenderingContext; default: return {}; }
    };
    HTMLCanvasElement.msToBlob = function() {
        /// <signature>
        /// <returns type='Blob'/>
        /// </signature>
        return Blob;
    };
    HTMLCanvasElement.toDataURL = function(type, args) {
        /// <signature>
        /// <param name='type' type='String' optional='true' />
        /// <param name='args' type='Object'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    HTMLCanvasElement.nodeName = HTMLCanvasElement.tagName = 'CANVAS';
    HTMLCanvasElement.localName = 'canvas';
    
    /* -- type: HTMLDDElement -- */
    
    HTMLDDElement.noWrap = false;
    HTMLDDElement.nodeName = HTMLDDElement.tagName = 'DD';
    HTMLDDElement.localName = 'dd';
    
    /* -- type: HTMLDListElement -- */
    
    HTMLDListElement.compact = false;
    HTMLDListElement.nodeName = HTMLDListElement.tagName = 'DL';
    HTMLDListElement.localName = 'dl';
    
    /* -- type: HTMLDTElement -- */
    
    HTMLDTElement.noWrap = false;
    HTMLDTElement.nodeName = HTMLDTElement.tagName = 'DT';
    HTMLDTElement.localName = 'dt';
    
    /* -- type: HTMLDataListElement -- */
    
    HTMLDataListElement.options = _createHTMLCollection('option');
    HTMLDataListElement.nodeName = HTMLDataListElement.tagName = 'DATALIST';
    HTMLDataListElement.localName = 'datalist';
    
    /* -- type: HTMLDirectoryElement -- */
    
    HTMLDirectoryElement.compact = false;
    HTMLDirectoryElement.nodeName = HTMLDirectoryElement.tagName = 'DIR';
    HTMLDirectoryElement.localName = 'dir';
    
    /* -- type: HTMLDivElement -- */
    
    HTMLDivElement.align = '';
    HTMLDivElement.noWrap = false;
    HTMLDivElement.nodeName = HTMLDivElement.tagName = 'DIV';
    HTMLDivElement.localName = 'div';
    
    /* -- type: HTMLEmbedElement -- */
    
    _$implement(HTMLEmbedElement, GetSVGDocument);
    HTMLEmbedElement.height = '';
    HTMLEmbedElement.hidden = '';
    HTMLEmbedElement.msPlayToDisabled = false;
    HTMLEmbedElement.msPlayToPreferredSourceUri = '';
    HTMLEmbedElement.msPlayToPrimary = false;
    HTMLEmbedElement.msPlayToSource = {};
    HTMLEmbedElement.name = '';
    HTMLEmbedElement.palette = '';
    HTMLEmbedElement.pluginspage = '';
    HTMLEmbedElement.readyState = '';
    HTMLEmbedElement.src = '';
    HTMLEmbedElement.units = '';
    HTMLEmbedElement.width = '';
    HTMLEmbedElement.nodeName = HTMLEmbedElement.tagName = 'EMBED';
    HTMLEmbedElement.localName = 'embed';
    
    /* -- type: HTMLFieldSetElement -- */
    
    HTMLFieldSetElement.align = '';
    HTMLFieldSetElement.disabled = false;
    HTMLFieldSetElement.form = HTMLFormElement;
    HTMLFieldSetElement.validationMessage = '';
    HTMLFieldSetElement.validity = ValidityState;
    HTMLFieldSetElement.willValidate = false;
    HTMLFieldSetElement.checkValidity = function() {
        /// <signature>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    HTMLFieldSetElement.setCustomValidity = function(error) {
        /// <signature>
        /// <param name='error' type='String'/>
        /// </signature>
    };
    HTMLFieldSetElement.nodeName = HTMLFieldSetElement.tagName = 'FIELDSET';
    HTMLFieldSetElement.localName = 'fieldset';
    
    /* -- type: HTMLFontElement -- */
    
    _$implement(HTMLFontElement, DOML2DeprecatedColorProperty);
    _$implement(HTMLFontElement, DOML2DeprecatedSizeProperty);
    HTMLFontElement.face = '';
    HTMLFontElement.nodeName = HTMLFontElement.tagName = 'FONT';
    HTMLFontElement.localName = 'font';
    
    /* -- type: HTMLFormElement -- */
    
    HTMLFormElement.acceptCharset = '';
    HTMLFormElement.action = '';
    HTMLFormElement.autocomplete = '';
    Object.defineProperty(HTMLFormElement,"elements", { get: function () { return _formElements(this); } });
    HTMLFormElement.encoding = '';
    HTMLFormElement.enctype = '';
    HTMLFormElement.length = 0;
    HTMLFormElement.method = '';
    HTMLFormElement.name = '';
    HTMLFormElement.noValidate = false;
    HTMLFormElement.target = '';
    HTMLFormElement.checkValidity = function() {
        /// <signature>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    HTMLFormElement.item = function(name, index) {
        /// <signature>
        /// <param name='name' type='Object' optional='true' />
        /// <param name='index' type='Object' optional='true' />
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    HTMLFormElement.namedItem = function(name) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    HTMLFormElement.reset = function() {
    };
    HTMLFormElement.submit = function() {
    };
    HTMLFormElement.nodeName = HTMLFormElement.tagName = 'FORM';
    HTMLFormElement.localName = 'form';
    
    /* -- type: HTMLFrameElement -- */
    
    _$implement(HTMLFrameElement, GetSVGDocument);
    HTMLFrameElement.border = '';
    HTMLFrameElement.borderColor = {};
    HTMLFrameElement.contentDocument = document;
    HTMLFrameElement.contentWindow = Window;
    HTMLFrameElement.frameBorder = '';
    HTMLFrameElement.frameSpacing = {};
    HTMLFrameElement.height = {};
    HTMLFrameElement.longDesc = '';
    HTMLFrameElement.marginHeight = '';
    HTMLFrameElement.marginWidth = '';
    HTMLFrameElement.name = '';
    HTMLFrameElement.noResize = false;
    HTMLFrameElement.scrolling = '';
    HTMLFrameElement.security = {};
    HTMLFrameElement.src = '';
    HTMLFrameElement.width = {};
    HTMLFrameElement.nodeName = HTMLFrameElement.tagName = 'FRAME';
    HTMLFrameElement.localName = 'frame';
    _events(HTMLFrameElement, "onload", "onabort", "onactivate", "onbeforeactivate", "onbeforecopy", "onbeforecut", "onbeforedeactivate", "onbeforepaste", "onblur", "oncanplay", "oncanplaythrough", "onchange", "onclick", "oncontextmenu", "oncopy", "oncuechange", "oncut", "ondblclick", "ondeactivate", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onmscontentzoom", "onmsmanipulationstatechanged", "onpaste", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onscroll", "onseeked", "onseeking", "onselect", "onselectstart", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting", "onariarequest", "oncommand", "ongotpointercapture", "onlostpointercapture", "onmsgesturechange", "onmsgesturedoubletap", "onmsgestureend", "onmsgesturehold", "onmsgesturestart", "onmsgesturetap", "onmsgotpointercapture", "onmsinertiastart", "onmslostpointercapture", "onmspointercancel", "onmspointerdown", "onmspointerenter", "onmspointerleave", "onmspointermove", "onmspointerout", "onmspointerover", "onmspointerup", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "onwebkitfullscreenchange", "onwebkitfullscreenerror", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onwheel");
    
    /* -- type: HTMLFrameSetElement -- */
    
    HTMLFrameSetElement.border = '';
    HTMLFrameSetElement.borderColor = {};
    HTMLFrameSetElement.cols = '';
    HTMLFrameSetElement.frameBorder = '';
    HTMLFrameSetElement.frameSpacing = {};
    HTMLFrameSetElement.name = '';
    HTMLFrameSetElement.rows = '';
    HTMLFrameSetElement.nodeName = HTMLFrameSetElement.tagName = 'FRAMESET';
    HTMLFrameSetElement.localName = 'frameset';
    _events(HTMLFrameSetElement, "onbeforeprint", "onbeforeunload", "onblur", "onerror", "onfocus", "onhashchange", "onload", "onmessage", "onoffline", "ononline", "onorientationchange", "onpagehide", "onpageshow", "onresize", "onstorage", "onunload", "onabort", "onactivate", "onbeforeactivate", "onbeforecopy", "onbeforecut", "onbeforedeactivate", "onbeforepaste", "onblur", "oncanplay", "oncanplaythrough", "onchange", "onclick", "oncontextmenu", "oncopy", "oncuechange", "oncut", "ondblclick", "ondeactivate", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onmscontentzoom", "onmsmanipulationstatechanged", "onpaste", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onscroll", "onseeked", "onseeking", "onselect", "onselectstart", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting", "onariarequest", "oncommand", "ongotpointercapture", "onlostpointercapture", "onmsgesturechange", "onmsgesturedoubletap", "onmsgestureend", "onmsgesturehold", "onmsgesturestart", "onmsgesturetap", "onmsgotpointercapture", "onmsinertiastart", "onmslostpointercapture", "onmspointercancel", "onmspointerdown", "onmspointerenter", "onmspointerleave", "onmspointermove", "onmspointerout", "onmspointerover", "onmspointerup", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "onwebkitfullscreenchange", "onwebkitfullscreenerror", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onwheel");
    
    /* -- type: HTMLHRElement -- */
    
    _$implement(HTMLHRElement, DOML2DeprecatedColorProperty);
    _$implement(HTMLHRElement, DOML2DeprecatedSizeProperty);
    HTMLHRElement.align = '';
    HTMLHRElement.noShade = false;
    HTMLHRElement.width = 0;
    HTMLHRElement.nodeName = HTMLHRElement.tagName = 'HR';
    HTMLHRElement.localName = 'hr';
    
    /* -- type: HTMLHeadElement -- */
    
    HTMLHeadElement.profile = '';
    HTMLHeadElement.nodeName = HTMLHeadElement.tagName = 'HEAD';
    HTMLHeadElement.localName = 'head';
    
    /* -- type: HTMLHeadingElement -- */
    
    HTMLHeadingElement.align = '';
    HTMLHeadingElement.clear = '';
    HTMLHeadingElement.nodeName = HTMLHeadingElement.tagName = 'H1';
    HTMLHeadingElement.localName = 'h1';
    
    /* -- type: HTMLHtmlElement -- */
    
    HTMLHtmlElement.version = '';
    HTMLHtmlElement.nodeName = HTMLHtmlElement.tagName = 'HTML';
    HTMLHtmlElement.localName = 'html';
    
    /* -- type: HTMLIFrameElement -- */
    
    _$implement(HTMLIFrameElement, GetSVGDocument);
    HTMLIFrameElement.align = '';
    HTMLIFrameElement.allowFullscreen = false;
    HTMLIFrameElement.border = '';
    HTMLIFrameElement.contentDocument = document;
    HTMLIFrameElement.contentWindow = Window;
    HTMLIFrameElement.frameBorder = '';
    HTMLIFrameElement.frameSpacing = {};
    HTMLIFrameElement.height = '';
    HTMLIFrameElement.hspace = 0;
    HTMLIFrameElement.longDesc = '';
    HTMLIFrameElement.marginHeight = '';
    HTMLIFrameElement.marginWidth = '';
    HTMLIFrameElement.name = '';
    HTMLIFrameElement.noResize = false;
    HTMLIFrameElement.sandbox = DOMSettableTokenList;
    HTMLIFrameElement.scrolling = '';
    HTMLIFrameElement.security = {};
    HTMLIFrameElement.src = '';
    HTMLIFrameElement.vspace = 0;
    HTMLIFrameElement.width = '';
    HTMLIFrameElement.nodeName = HTMLIFrameElement.tagName = 'IFRAME';
    HTMLIFrameElement.localName = 'iframe';
    _events(HTMLIFrameElement, "onload", "onabort", "onactivate", "onbeforeactivate", "onbeforecopy", "onbeforecut", "onbeforedeactivate", "onbeforepaste", "onblur", "oncanplay", "oncanplaythrough", "onchange", "onclick", "oncontextmenu", "oncopy", "oncuechange", "oncut", "ondblclick", "ondeactivate", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onmscontentzoom", "onmsmanipulationstatechanged", "onpaste", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onscroll", "onseeked", "onseeking", "onselect", "onselectstart", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting", "onariarequest", "oncommand", "ongotpointercapture", "onlostpointercapture", "onmsgesturechange", "onmsgesturedoubletap", "onmsgestureend", "onmsgesturehold", "onmsgesturestart", "onmsgesturetap", "onmsgotpointercapture", "onmsinertiastart", "onmslostpointercapture", "onmspointercancel", "onmspointerdown", "onmspointerenter", "onmspointerleave", "onmspointermove", "onmspointerout", "onmspointerover", "onmspointerup", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "onwebkitfullscreenchange", "onwebkitfullscreenerror", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onwheel");
    
    /* -- type: HTMLImageElement -- */
    
    HTMLImageElement.align = '';
    HTMLImageElement.alt = '';
    HTMLImageElement.border = '';
    HTMLImageElement.complete = false;
    HTMLImageElement.crossOrigin = '';
    HTMLImageElement.currentSrc = '';
    HTMLImageElement.height = 0;
    HTMLImageElement.hspace = 0;
    HTMLImageElement.isMap = false;
    HTMLImageElement.longDesc = '';
    HTMLImageElement.msPlayToDisabled = false;
    HTMLImageElement.msPlayToPreferredSourceUri = '';
    HTMLImageElement.msPlayToPrimary = false;
    HTMLImageElement.msPlayToSource = {};
    HTMLImageElement.name = '';
    HTMLImageElement.naturalHeight = 0;
    HTMLImageElement.naturalWidth = 0;
    HTMLImageElement.src = '';
    HTMLImageElement.srcset = '';
    HTMLImageElement.useMap = '';
    HTMLImageElement.vspace = 0;
    HTMLImageElement.width = 0;
    HTMLImageElement.x = 0;
    HTMLImageElement.y = 0;
    HTMLImageElement.create = function() {
        /// <signature>
        /// <returns type='HTMLImageElement'/>
        /// </signature>
        return HTMLImageElement;
    };
    HTMLImageElement.msGetAsCastingSource = function() {
        /// <signature>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    HTMLImageElement.nodeName = HTMLImageElement.tagName = 'IMG';
    HTMLImageElement.localName = 'img';
    
    /* -- type: HTMLInputElement -- */
    
    HTMLInputElement.accept = '';
    HTMLInputElement.align = '';
    HTMLInputElement.alt = '';
    HTMLInputElement.autocomplete = '';
    HTMLInputElement.autofocus = false;
    HTMLInputElement.border = '';
    HTMLInputElement.checked = false;
    HTMLInputElement.complete = false;
    HTMLInputElement.defaultChecked = false;
    HTMLInputElement.defaultValue = '';
    HTMLInputElement.disabled = false;
    HTMLInputElement.files = FileList;
    HTMLInputElement.form = HTMLFormElement;
    HTMLInputElement.formAction = '';
    HTMLInputElement.formEnctype = '';
    HTMLInputElement.formMethod = '';
    HTMLInputElement.formNoValidate = '';
    HTMLInputElement.formTarget = '';
    HTMLInputElement.height = '';
    HTMLInputElement.hspace = 0;
    HTMLInputElement.indeterminate = false;
    HTMLInputElement.list = HTMLElement;
    HTMLInputElement.max = '';
    HTMLInputElement.maxLength = 0;
    HTMLInputElement.min = '';
    HTMLInputElement.multiple = false;
    HTMLInputElement.name = '';
    HTMLInputElement.pattern = '';
    HTMLInputElement.placeholder = '';
    HTMLInputElement.readOnly = false;
    HTMLInputElement.required = false;
    HTMLInputElement.selectionEnd = 0;
    HTMLInputElement.selectionStart = 0;
    HTMLInputElement.size = 0;
    HTMLInputElement.src = '';
    HTMLInputElement.status = false;
    HTMLInputElement.step = '';
    HTMLInputElement.type = '';
    HTMLInputElement.useMap = '';
    HTMLInputElement.validationMessage = '';
    HTMLInputElement.validity = ValidityState;
    HTMLInputElement.value = '';
    HTMLInputElement.valueAsDate = new Date();
    HTMLInputElement.valueAsNumber = 0;
    HTMLInputElement.vspace = 0;
    HTMLInputElement.width = '';
    HTMLInputElement.willValidate = false;
    HTMLInputElement.checkValidity = function() {
        /// <signature>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    HTMLInputElement.createTextRange = function() {
        /// <signature>
        /// <returns type='TextRange'/>
        /// </signature>
        return TextRange;
    };
    HTMLInputElement.select = function() {
    };
    HTMLInputElement.setCustomValidity = function(error) {
        /// <signature>
        /// <param name='error' type='String'/>
        /// </signature>
    };
    HTMLInputElement.setSelectionRange = function(start, end) {
        /// <signature>
        /// <param name='start' type='Number'/>
        /// <param name='end' type='Number'/>
        /// </signature>
    };
    HTMLInputElement.stepDown = function(n) {
        /// <signature>
        /// <param name='n' type='Number' optional='true' />
        /// </signature>
    };
    HTMLInputElement.stepUp = function(n) {
        /// <signature>
        /// <param name='n' type='Number' optional='true' />
        /// </signature>
    };
    HTMLInputElement.nodeName = HTMLInputElement.tagName = 'INPUT';
    HTMLInputElement.localName = 'input';
    
    /* -- type: HTMLIsIndexElement -- */
    
    HTMLIsIndexElement.action = '';
    HTMLIsIndexElement.form = HTMLFormElement;
    HTMLIsIndexElement.prompt = '';
    HTMLIsIndexElement.nodeName = HTMLIsIndexElement.tagName = 'ISINDEX';
    HTMLIsIndexElement.localName = 'isindex';
    
    /* -- type: HTMLLIElement -- */
    
    HTMLLIElement.type = '';
    HTMLLIElement.value = 0;
    HTMLLIElement.nodeName = HTMLLIElement.tagName = 'LI';
    HTMLLIElement.localName = 'li';
    
    /* -- type: HTMLLabelElement -- */
    
    HTMLLabelElement.form = HTMLFormElement;
    HTMLLabelElement.htmlFor = '';
    HTMLLabelElement.nodeName = HTMLLabelElement.tagName = 'LABEL';
    HTMLLabelElement.localName = 'label';
    
    /* -- type: HTMLLegendElement -- */
    
    HTMLLegendElement.align = '';
    HTMLLegendElement.form = HTMLFormElement;
    HTMLLegendElement.nodeName = HTMLLegendElement.tagName = 'LEGEND';
    HTMLLegendElement.localName = 'legend';
    
    /* -- type: HTMLLinkElement -- */
    
    _$implement(HTMLLinkElement, LinkStyle);
    HTMLLinkElement.charset = '';
    HTMLLinkElement.disabled = false;
    HTMLLinkElement.href = '';
    HTMLLinkElement.hreflang = '';
    HTMLLinkElement.media = '';
    HTMLLinkElement.rel = '';
    HTMLLinkElement.rev = '';
    HTMLLinkElement.target = '';
    HTMLLinkElement.type = '';
    HTMLLinkElement.nodeName = HTMLLinkElement.tagName = 'LINK';
    HTMLLinkElement.localName = 'link';
    
    /* -- type: HTMLMapElement -- */
    
    HTMLMapElement.areas = HTMLAreasCollection;
    HTMLMapElement.name = '';
    HTMLMapElement.nodeName = HTMLMapElement.tagName = 'MAP';
    HTMLMapElement.localName = 'map';
    
    /* -- type: HTMLMarqueeElement -- */
    
    HTMLMarqueeElement.behavior = '';
    HTMLMarqueeElement.bgColor = {};
    HTMLMarqueeElement.direction = '';
    HTMLMarqueeElement.height = '';
    HTMLMarqueeElement.hspace = 0;
    HTMLMarqueeElement.loop = 0;
    HTMLMarqueeElement.scrollAmount = 0;
    HTMLMarqueeElement.scrollDelay = 0;
    HTMLMarqueeElement.trueSpeed = false;
    HTMLMarqueeElement.vspace = 0;
    HTMLMarqueeElement.width = '';
    HTMLMarqueeElement.start = function() {
    };
    HTMLMarqueeElement.stop = function() {
    };
    HTMLMarqueeElement.nodeName = HTMLMarqueeElement.tagName = 'MARQUEE';
    HTMLMarqueeElement.localName = 'marquee';
    _events(HTMLMarqueeElement, "onbounce", "onfinish", "onstart", "onabort", "onactivate", "onbeforeactivate", "onbeforecopy", "onbeforecut", "onbeforedeactivate", "onbeforepaste", "onblur", "oncanplay", "oncanplaythrough", "onchange", "onclick", "oncontextmenu", "oncopy", "oncuechange", "oncut", "ondblclick", "ondeactivate", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onmscontentzoom", "onmsmanipulationstatechanged", "onpaste", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onscroll", "onseeked", "onseeking", "onselect", "onselectstart", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting", "onariarequest", "oncommand", "ongotpointercapture", "onlostpointercapture", "onmsgesturechange", "onmsgesturedoubletap", "onmsgestureend", "onmsgesturehold", "onmsgesturestart", "onmsgesturetap", "onmsgotpointercapture", "onmsinertiastart", "onmslostpointercapture", "onmspointercancel", "onmspointerdown", "onmspointerenter", "onmspointerleave", "onmspointermove", "onmspointerout", "onmspointerover", "onmspointerup", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "onwebkitfullscreenchange", "onwebkitfullscreenerror", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onwheel");
    
    /* -- type: HTMLMediaElement -- */
    
    HTMLMediaElement.audioTracks = AudioTrackList;
    HTMLMediaElement.autoplay = false;
    HTMLMediaElement.buffered = TimeRanges;
    HTMLMediaElement.controls = false;
    HTMLMediaElement.currentSrc = '';
    HTMLMediaElement.currentTime = 0;
    HTMLMediaElement.defaultMuted = false;
    HTMLMediaElement.defaultPlaybackRate = 0;
    HTMLMediaElement.duration = 0;
    HTMLMediaElement.ended = false;
    HTMLMediaElement.error = MediaError;
    HTMLMediaElement.loop = false;
    HTMLMediaElement.msAudioCategory = '';
    HTMLMediaElement.msAudioDeviceType = '';
    HTMLMediaElement.msGraphicsTrustStatus = MSGraphicsTrust;
    HTMLMediaElement.msKeys = MSMediaKeys;
    HTMLMediaElement.msPlayToDisabled = false;
    HTMLMediaElement.msPlayToPreferredSourceUri = '';
    HTMLMediaElement.msPlayToPrimary = false;
    HTMLMediaElement.msPlayToSource = {};
    HTMLMediaElement.msRealTime = false;
    HTMLMediaElement.muted = false;
    HTMLMediaElement.networkState = 0;
    HTMLMediaElement.paused = false;
    HTMLMediaElement.playbackRate = 0;
    HTMLMediaElement.played = TimeRanges;
    HTMLMediaElement.preload = '';
    HTMLMediaElement.readyState = {};
    HTMLMediaElement.seekable = TimeRanges;
    HTMLMediaElement.seeking = false;
    HTMLMediaElement.src = '';
    HTMLMediaElement.textTracks = TextTrackList;
    HTMLMediaElement.videoTracks = VideoTrackList;
    HTMLMediaElement.volume = 0;
    HTMLMediaElement.HAVE_CURRENT_DATA = 2;
    HTMLMediaElement.HAVE_ENOUGH_DATA = 4;
    HTMLMediaElement.HAVE_FUTURE_DATA = 3;
    HTMLMediaElement.HAVE_METADATA = 1;
    HTMLMediaElement.HAVE_NOTHING = 0;
    HTMLMediaElement.NETWORK_EMPTY = 0;
    HTMLMediaElement.NETWORK_IDLE = 1;
    HTMLMediaElement.NETWORK_LOADING = 2;
    HTMLMediaElement.NETWORK_NO_SOURCE = 3;
    HTMLMediaElement.addTextTrack = function(kind, label, language) {
        /// <signature>
        /// <param name='kind' type='String'/>
        /// <param name='label' type='String' optional='true' />
        /// <param name='language' type='String' optional='true' />
        /// <returns type='TextTrack'/>
        /// </signature>
        return TextTrack;
    };
    HTMLMediaElement.canPlayType = function(type) {
        /// <signature>
        /// <param name='type' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    HTMLMediaElement.load = function() {
    };
    HTMLMediaElement.msClearEffects = function() {
    };
    HTMLMediaElement.msGetAsCastingSource = function() {
        /// <signature>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    HTMLMediaElement.msInsertAudioEffect = function(activatableClassId, effectRequired, config) {
        /// <signature>
        /// <param name='activatableClassId' type='String'/>
        /// <param name='effectRequired' type='Boolean'/>
        /// <param name='config' type='Object' optional='true' />
        /// </signature>
    };
    HTMLMediaElement.msSetMediaKeys = function(mediaKeys) {
        /// <signature>
        /// <param name='mediaKeys' type='MSMediaKeys'/>
        /// </signature>
    };
    HTMLMediaElement.msSetMediaProtectionManager = function(mediaProtectionManager) {
        /// <signature>
        /// <param name='mediaProtectionManager' type='Object' optional='true' />
        /// </signature>
    };
    HTMLMediaElement.pause = function() {
    };
    HTMLMediaElement.play = function() {
    };
    _events(HTMLMediaElement, "onmsneedkey", "onabort", "onactivate", "onbeforeactivate", "onbeforecopy", "onbeforecut", "onbeforedeactivate", "onbeforepaste", "onblur", "oncanplay", "oncanplaythrough", "onchange", "onclick", "oncontextmenu", "oncopy", "oncuechange", "oncut", "ondblclick", "ondeactivate", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onmscontentzoom", "onmsmanipulationstatechanged", "onpaste", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onscroll", "onseeked", "onseeking", "onselect", "onselectstart", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting", "onariarequest", "oncommand", "ongotpointercapture", "onlostpointercapture", "onmsgesturechange", "onmsgesturedoubletap", "onmsgestureend", "onmsgesturehold", "onmsgesturestart", "onmsgesturetap", "onmsgotpointercapture", "onmsinertiastart", "onmslostpointercapture", "onmspointercancel", "onmspointerdown", "onmspointerenter", "onmspointerleave", "onmspointermove", "onmspointerout", "onmspointerover", "onmspointerup", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "onwebkitfullscreenchange", "onwebkitfullscreenerror", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onwheel");
    
    /* -- type: HTMLMenuElement -- */
    
    HTMLMenuElement.compact = false;
    HTMLMenuElement.type = '';
    HTMLMenuElement.nodeName = HTMLMenuElement.tagName = 'MENU';
    HTMLMenuElement.localName = 'menu';
    
    /* -- type: HTMLMetaElement -- */
    
    HTMLMetaElement.charset = '';
    HTMLMetaElement.content = '';
    HTMLMetaElement.httpEquiv = '';
    HTMLMetaElement.name = '';
    HTMLMetaElement.scheme = '';
    HTMLMetaElement.url = '';
    HTMLMetaElement.nodeName = HTMLMetaElement.tagName = 'META';
    HTMLMetaElement.localName = 'meta';
    
    /* -- type: HTMLModElement -- */
    
    HTMLModElement.cite = '';
    HTMLModElement.dateTime = '';
    HTMLModElement.nodeName = HTMLModElement.tagName = 'INS';
    HTMLModElement.localName = 'ins';
    
    /* -- type: HTMLNextIdElement -- */
    
    HTMLNextIdElement.n = '';
    HTMLNextIdElement.nodeName = HTMLNextIdElement.tagName = 'NEXTID';
    HTMLNextIdElement.localName = 'nextid';
    
    /* -- type: HTMLOListElement -- */
    
    HTMLOListElement.compact = false;
    HTMLOListElement.start = 0;
    HTMLOListElement.type = '';
    HTMLOListElement.nodeName = HTMLOListElement.tagName = 'OL';
    HTMLOListElement.localName = 'ol';
    
    /* -- type: HTMLObjectElement -- */
    
    _$implement(HTMLObjectElement, GetSVGDocument);
    HTMLObjectElement.BaseHref = '';
    HTMLObjectElement.align = '';
    HTMLObjectElement.alt = '';
    HTMLObjectElement.altHtml = '';
    HTMLObjectElement.archive = '';
    HTMLObjectElement.border = '';
    HTMLObjectElement.code = '';
    HTMLObjectElement.codeBase = '';
    HTMLObjectElement.codeType = '';
    HTMLObjectElement.contentDocument = document;
    HTMLObjectElement.data = '';
    HTMLObjectElement.declare = false;
    HTMLObjectElement.form = HTMLFormElement;
    HTMLObjectElement.height = '';
    HTMLObjectElement.hspace = 0;
    HTMLObjectElement.msPlayToDisabled = false;
    HTMLObjectElement.msPlayToPreferredSourceUri = '';
    HTMLObjectElement.msPlayToPrimary = false;
    HTMLObjectElement.msPlayToSource = {};
    HTMLObjectElement.name = '';
    HTMLObjectElement.object = {};
    HTMLObjectElement.readyState = 0;
    HTMLObjectElement.standby = '';
    HTMLObjectElement.type = '';
    HTMLObjectElement.useMap = '';
    HTMLObjectElement.validationMessage = '';
    HTMLObjectElement.validity = ValidityState;
    HTMLObjectElement.vspace = 0;
    HTMLObjectElement.width = '';
    HTMLObjectElement.willValidate = false;
    HTMLObjectElement.checkValidity = function() {
        /// <signature>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    HTMLObjectElement.setCustomValidity = function(error) {
        /// <signature>
        /// <param name='error' type='String'/>
        /// </signature>
    };
    HTMLObjectElement.nodeName = HTMLObjectElement.tagName = 'OBJECT';
    HTMLObjectElement.localName = 'object';
    
    /* -- type: HTMLOptGroupElement -- */
    
    HTMLOptGroupElement.defaultSelected = false;
    HTMLOptGroupElement.disabled = false;
    HTMLOptGroupElement.form = HTMLFormElement;
    HTMLOptGroupElement.index = 0;
    HTMLOptGroupElement.label = '';
    HTMLOptGroupElement.selected = false;
    HTMLOptGroupElement.text = '';
    HTMLOptGroupElement.value = '';
    HTMLOptGroupElement.nodeName = HTMLOptGroupElement.tagName = 'OPTGROUP';
    HTMLOptGroupElement.localName = 'optgroup';
    
    /* -- type: HTMLOptionElement -- */
    
    HTMLOptionElement.defaultSelected = false;
    HTMLOptionElement.disabled = false;
    HTMLOptionElement.form = HTMLFormElement;
    HTMLOptionElement.index = 0;
    HTMLOptionElement.label = '';
    HTMLOptionElement.selected = false;
    HTMLOptionElement.text = '';
    HTMLOptionElement.value = '';
    HTMLOptionElement.create = function() {
        /// <signature>
        /// <returns type='HTMLOptionElement'/>
        /// </signature>
        return HTMLOptionElement;
    };
    HTMLOptionElement.nodeName = HTMLOptionElement.tagName = 'OPTION';
    HTMLOptionElement.localName = 'option';
    
    /* -- type: HTMLParagraphElement -- */
    
    HTMLParagraphElement.align = '';
    HTMLParagraphElement.clear = '';
    HTMLParagraphElement.nodeName = HTMLParagraphElement.tagName = 'P';
    HTMLParagraphElement.localName = 'p';
    
    /* -- type: HTMLParamElement -- */
    
    HTMLParamElement.name = '';
    HTMLParamElement.type = '';
    HTMLParamElement.value = '';
    HTMLParamElement.valueType = '';
    HTMLParamElement.nodeName = HTMLParamElement.tagName = 'PARAM';
    HTMLParamElement.localName = 'param';
    
    /* -- type: HTMLPhraseElement -- */
    
    HTMLPhraseElement.cite = '';
    HTMLPhraseElement.dateTime = '';
    HTMLPhraseElement.nodeName = HTMLPhraseElement.tagName = 'ABBR';
    HTMLPhraseElement.localName = 'abbr';
    
    /* -- type: HTMLPreElement -- */
    
    HTMLPreElement.cite = '';
    HTMLPreElement.clear = '';
    HTMLPreElement.width = 0;
    HTMLPreElement.nodeName = HTMLPreElement.tagName = 'PRE';
    HTMLPreElement.localName = 'pre';
    
    /* -- type: HTMLProgressElement -- */
    
    HTMLProgressElement.form = HTMLFormElement;
    HTMLProgressElement.max = 0;
    HTMLProgressElement.position = 0;
    HTMLProgressElement.value = 0;
    HTMLProgressElement.nodeName = HTMLProgressElement.tagName = 'PROGRESS';
    HTMLProgressElement.localName = 'progress';
    
    /* -- type: HTMLQuoteElement -- */
    
    HTMLQuoteElement.cite = '';
    HTMLQuoteElement.dateTime = '';
    HTMLQuoteElement.nodeName = HTMLQuoteElement.tagName = 'Q';
    HTMLQuoteElement.localName = 'q';
    
    /* -- type: HTMLScriptElement -- */
    
    HTMLScriptElement.async = false;
    HTMLScriptElement.charset = '';
    HTMLScriptElement.defer = false;
    HTMLScriptElement.event = '';
    HTMLScriptElement.htmlFor = '';
    HTMLScriptElement.src = '';
    HTMLScriptElement.text = '';
    HTMLScriptElement.type = '';
    HTMLScriptElement.nodeName = HTMLScriptElement.tagName = 'SCRIPT';
    HTMLScriptElement.localName = 'script';
    
    /* -- type: HTMLSelectElement -- */
    
    HTMLSelectElement.autofocus = false;
    HTMLSelectElement.disabled = false;
    HTMLSelectElement.form = HTMLFormElement;
    HTMLSelectElement.length = 0;
    HTMLSelectElement.multiple = false;
    HTMLSelectElement.name = '';
    Object.defineProperty(HTMLSelectElement,"options", { get: function () { return _selectOptions(this); } });
    HTMLSelectElement.required = false;
    HTMLSelectElement.selectedIndex = 0;
    HTMLSelectElement.size = 0;
    HTMLSelectElement.type = '';
    HTMLSelectElement.validationMessage = '';
    HTMLSelectElement.validity = ValidityState;
    HTMLSelectElement.value = '';
    HTMLSelectElement.willValidate = false;
    HTMLSelectElement.add = function(element, before) {
        /// <signature>
        /// <param name='element' type='HTMLElement'/>
        /// <param name='before' type='HTMLElement' optional='true' />
        /// </signature>
        /// <signature>
        /// <param name='element' type='HTMLElement'/>
        /// <param name='before' type='Number' optional='true' />
        /// </signature>
    };
    HTMLSelectElement.checkValidity = function() {
        /// <signature>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    HTMLSelectElement.item = function(name, index) {
        /// <signature>
        /// <param name='name' type='Object' optional='true' />
        /// <param name='index' type='Object' optional='true' />
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    HTMLSelectElement.namedItem = function(name) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <returns type='Object'/>
        /// </signature>
        return {};
    };
    HTMLSelectElement.remove = function(index) {
        /// <signature>
        /// <param name='index' type='Number' optional='true' />
        /// </signature>
    };
    HTMLSelectElement.setCustomValidity = function(error) {
        /// <signature>
        /// <param name='error' type='String'/>
        /// </signature>
    };
    HTMLSelectElement.nodeName = HTMLSelectElement.tagName = 'SELECT';
    HTMLSelectElement.localName = 'select';
    
    /* -- type: HTMLSourceElement -- */
    
    HTMLSourceElement.media = '';
    HTMLSourceElement.msKeySystem = '';
    HTMLSourceElement.src = '';
    HTMLSourceElement.type = '';
    HTMLSourceElement.nodeName = HTMLSourceElement.tagName = 'SOURCE';
    HTMLSourceElement.localName = 'source';
    
    /* -- type: HTMLSpanElement -- */
    
    HTMLSpanElement.nodeName = HTMLSpanElement.tagName = 'SPAN';
    HTMLSpanElement.localName = 'span';
    
    /* -- type: HTMLStyleElement -- */
    
    _$implement(HTMLStyleElement, LinkStyle);
    HTMLStyleElement.media = '';
    HTMLStyleElement.type = '';
    HTMLStyleElement.nodeName = HTMLStyleElement.tagName = 'STYLE';
    HTMLStyleElement.localName = 'style';
    
    /* -- type: HTMLTableCaptionElement -- */
    
    HTMLTableCaptionElement.align = '';
    HTMLTableCaptionElement.vAlign = '';
    HTMLTableCaptionElement.nodeName = HTMLTableCaptionElement.tagName = 'CAPTION';
    HTMLTableCaptionElement.localName = 'caption';
    
    /* -- type: HTMLTableCellElement -- */
    
    _$implement(HTMLTableCellElement, HTMLTableAlignment);
    HTMLTableCellElement.abbr = '';
    HTMLTableCellElement.align = '';
    HTMLTableCellElement.axis = '';
    HTMLTableCellElement.bgColor = {};
    HTMLTableCellElement.cellIndex = 0;
    HTMLTableCellElement.colSpan = 0;
    HTMLTableCellElement.headers = '';
    HTMLTableCellElement.height = {};
    HTMLTableCellElement.noWrap = false;
    HTMLTableCellElement.rowSpan = 0;
    HTMLTableCellElement.scope = '';
    HTMLTableCellElement.width = '';
    
    /* -- type: HTMLTableColElement -- */
    
    _$implement(HTMLTableColElement, HTMLTableAlignment);
    HTMLTableColElement.align = '';
    HTMLTableColElement.span = 0;
    HTMLTableColElement.width = {};
    HTMLTableColElement.nodeName = HTMLTableColElement.tagName = 'COL';
    HTMLTableColElement.localName = 'col';
    
    /* -- type: HTMLTableElement -- */
    
    HTMLTableElement.align = '';
    HTMLTableElement.bgColor = {};
    HTMLTableElement.border = '';
    HTMLTableElement.borderColor = {};
    HTMLTableElement.caption = HTMLTableCaptionElement;
    HTMLTableElement.cellPadding = '';
    HTMLTableElement.cellSpacing = '';
    HTMLTableElement.cols = 0;
    HTMLTableElement.frame = '';
    HTMLTableElement.height = {};
    HTMLTableElement.rows = _createHTMLCollection('tr');
    HTMLTableElement.rules = '';
    HTMLTableElement.summary = '';
    HTMLTableElement.tBodies = _createHTMLCollection('tbody');
    HTMLTableElement.tFoot = HTMLTableSectionElement;
    HTMLTableElement.tHead = HTMLTableSectionElement;
    HTMLTableElement.width = '';
    HTMLTableElement.createCaption = function() {
        /// <signature>
        /// <returns type='HTMLElement'/>
        /// </signature>
        return HTMLElement;
    };
    HTMLTableElement.createTBody = function() {
        /// <signature>
        /// <returns type='HTMLElement'/>
        /// </signature>
        return HTMLElement;
    };
    HTMLTableElement.createTFoot = function() {
        /// <signature>
        /// <returns type='HTMLElement'/>
        /// </signature>
        return HTMLElement;
    };
    HTMLTableElement.createTHead = function() {
        /// <signature>
        /// <returns type='HTMLElement'/>
        /// </signature>
        return HTMLElement;
    };
    HTMLTableElement.deleteCaption = function() {
    };
    HTMLTableElement.deleteRow = function(index) {
        /// <signature>
        /// <param name='index' type='Number' optional='true' />
        /// </signature>
    };
    HTMLTableElement.deleteTFoot = function() {
    };
    HTMLTableElement.deleteTHead = function() {
    };
    HTMLTableElement.insertRow = function(index) {
        /// <signature>
        /// <param name='index' type='Number' optional='true' />
        /// <returns type='HTMLElement'/>
        /// </signature>
        return HTMLElement;
    };
    HTMLTableElement.nodeName = HTMLTableElement.tagName = 'TABLE';
    HTMLTableElement.localName = 'table';
    
    /* -- type: HTMLTableRowElement -- */
    
    _$implement(HTMLTableRowElement, HTMLTableAlignment);
    HTMLTableRowElement.align = '';
    HTMLTableRowElement.bgColor = {};
    HTMLTableRowElement.cells = _createHTMLCollection('td');
    HTMLTableRowElement.height = {};
    HTMLTableRowElement.rowIndex = 0;
    HTMLTableRowElement.sectionRowIndex = 0;
    HTMLTableRowElement.deleteCell = function(index) {
        /// <signature>
        /// <param name='index' type='Number' optional='true' />
        /// </signature>
    };
    HTMLTableRowElement.insertCell = function(index) {
        /// <signature>
        /// <param name='index' type='Number' optional='true' />
        /// <returns type='HTMLElement'/>
        /// </signature>
        return HTMLElement;
    };
    HTMLTableRowElement.nodeName = HTMLTableRowElement.tagName = 'TR';
    HTMLTableRowElement.localName = 'tr';
    
    /* -- type: HTMLTableSectionElement -- */
    
    _$implement(HTMLTableSectionElement, HTMLTableAlignment);
    HTMLTableSectionElement.align = '';
    HTMLTableSectionElement.rows = _createHTMLCollection('tr');
    HTMLTableSectionElement.deleteRow = function(index) {
        /// <signature>
        /// <param name='index' type='Number' optional='true' />
        /// </signature>
    };
    HTMLTableSectionElement.insertRow = function(index) {
        /// <signature>
        /// <param name='index' type='Number' optional='true' />
        /// <returns type='HTMLElement'/>
        /// </signature>
        return HTMLElement;
    };
    HTMLTableSectionElement.nodeName = HTMLTableSectionElement.tagName = 'THEAD';
    HTMLTableSectionElement.localName = 'thead';
    
    /* -- type: HTMLTextAreaElement -- */
    
    HTMLTextAreaElement.autofocus = false;
    HTMLTextAreaElement.cols = 0;
    HTMLTextAreaElement.defaultValue = '';
    HTMLTextAreaElement.disabled = false;
    HTMLTextAreaElement.form = HTMLFormElement;
    HTMLTextAreaElement.maxLength = 0;
    HTMLTextAreaElement.name = '';
    HTMLTextAreaElement.placeholder = '';
    HTMLTextAreaElement.readOnly = false;
    HTMLTextAreaElement.required = false;
    HTMLTextAreaElement.rows = 0;
    HTMLTextAreaElement.selectionEnd = 0;
    HTMLTextAreaElement.selectionStart = 0;
    HTMLTextAreaElement.status = {};
    HTMLTextAreaElement.type = '';
    HTMLTextAreaElement.validationMessage = '';
    HTMLTextAreaElement.validity = ValidityState;
    HTMLTextAreaElement.value = '';
    HTMLTextAreaElement.willValidate = false;
    HTMLTextAreaElement.wrap = '';
    HTMLTextAreaElement.checkValidity = function() {
        /// <signature>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    HTMLTextAreaElement.createTextRange = function() {
        /// <signature>
        /// <returns type='TextRange'/>
        /// </signature>
        return TextRange;
    };
    HTMLTextAreaElement.select = function() {
    };
    HTMLTextAreaElement.setCustomValidity = function(error) {
        /// <signature>
        /// <param name='error' type='String'/>
        /// </signature>
    };
    HTMLTextAreaElement.setSelectionRange = function(start, end) {
        /// <signature>
        /// <param name='start' type='Number'/>
        /// <param name='end' type='Number'/>
        /// </signature>
    };
    HTMLTextAreaElement.nodeName = HTMLTextAreaElement.tagName = 'TEXTAREA';
    HTMLTextAreaElement.localName = 'textarea';
    
    /* -- type: HTMLTitleElement -- */
    
    HTMLTitleElement.text = '';
    HTMLTitleElement.nodeName = HTMLTitleElement.tagName = 'TITLE';
    HTMLTitleElement.localName = 'title';
    
    /* -- type: HTMLTrackElement -- */
    
    HTMLTrackElement.default = false;
    HTMLTrackElement.kind = '';
    HTMLTrackElement.label = '';
    HTMLTrackElement.readyState = 0;
    HTMLTrackElement.src = '';
    HTMLTrackElement.srclang = '';
    HTMLTrackElement.track = TextTrack;
    HTMLTrackElement.ERROR = 3;
    HTMLTrackElement.LOADED = 2;
    HTMLTrackElement.LOADING = 1;
    HTMLTrackElement.NONE = 0;
    HTMLTrackElement.nodeName = HTMLTrackElement.tagName = 'TRACK';
    HTMLTrackElement.localName = 'track';
    
    /* -- type: HTMLUListElement -- */
    
    HTMLUListElement.compact = false;
    HTMLUListElement.type = '';
    HTMLUListElement.nodeName = HTMLUListElement.tagName = 'UL';
    HTMLUListElement.localName = 'ul';
    
    /* -- type: HTMLUnknownElement -- */
    
    
    /* -- type: MSHTMLWebViewElement -- */
    
    MSHTMLWebViewElement.canGoBack = false;
    MSHTMLWebViewElement.canGoForward = false;
    MSHTMLWebViewElement.containsFullScreenElement = false;
    MSHTMLWebViewElement.documentTitle = '';
    MSHTMLWebViewElement.height = 0;
    MSHTMLWebViewElement.settings = MSWebViewSettings;
    MSHTMLWebViewElement.src = '';
    MSHTMLWebViewElement.width = 0;
    MSHTMLWebViewElement.addWebAllowedObject = function(name, applicationObject) {
        /// <signature>
        /// <param name='name' type='String'/>
        /// <param name='applicationObject' type='Object'/>
        /// </signature>
    };
    MSHTMLWebViewElement.buildLocalStreamUri = function(contentIdentifier, relativePath) {
        /// <signature>
        /// <param name='contentIdentifier' type='String'/>
        /// <param name='relativePath' type='String'/>
        /// <returns type='String'/>
        /// </signature>
        return '';
    };
    MSHTMLWebViewElement.capturePreviewToBlobAsync = function() {
        /// <signature>
        /// <returns type='MSWebViewAsyncOperation'/>
        /// </signature>
        return MSWebViewAsyncOperation;
    };
    MSHTMLWebViewElement.captureSelectedContentToDataPackageAsync = function() {
        /// <signature>
        /// <returns type='MSWebViewAsyncOperation'/>
        /// </signature>
        return MSWebViewAsyncOperation;
    };
    MSHTMLWebViewElement.getDeferredPermissionRequestById = function(id) {
        /// <signature>
        /// <param name='id' type='Number'/>
        /// <returns type='DeferredPermissionRequest'/>
        /// </signature>
        return DeferredPermissionRequest;
    };
    MSHTMLWebViewElement.getDeferredPermissionRequests = function() {
        /// <signature>
        /// <returns type='Array' elementType='DeferredPermissionRequest'/>
        /// </signature>
        return [];
    };
    MSHTMLWebViewElement.goBack = function() {
    };
    MSHTMLWebViewElement.goForward = function() {
    };
    MSHTMLWebViewElement.invokeScriptAsync = function(scriptName, args) {
        /// <signature>
        /// <param name='scriptName' type='String'/>
        /// <param name='args' type='Object'/>
        /// <returns type='MSWebViewAsyncOperation'/>
        /// </signature>
        return MSWebViewAsyncOperation;
    };
    MSHTMLWebViewElement.navigate = function(uri) {
        /// <signature>
        /// <param name='uri' type='String'/>
        /// </signature>
    };
    MSHTMLWebViewElement.navigateToLocalStreamUri = function(source, streamResolver) {
        /// <signature>
        /// <param name='source' type='String'/>
        /// <param name='streamResolver' type='Object'/>
        /// </signature>
    };
    MSHTMLWebViewElement.navigateToString = function(contents) {
        /// <signature>
        /// <param name='contents' type='String'/>
        /// </signature>
    };
    MSHTMLWebViewElement.navigateWithHttpRequestMessage = function(requestMessage) {
        /// <signature>
        /// <param name='requestMessage' type='Object'/>
        /// </signature>
    };
    MSHTMLWebViewElement.refresh = function() {
    };
    MSHTMLWebViewElement.stop = function() {
    };
    MSHTMLWebViewElement.nodeName = MSHTMLWebViewElement.tagName = 'X-MS-WEBVIEW';
    MSHTMLWebViewElement.localName = 'x-ms-webview';
    
    /* -- type: SVGAElement -- */
    
    _$implement(SVGAElement, SVGStylable);
    _$implement(SVGAElement, SVGTransformable);
    _$implement(SVGAElement, SVGTests);
    _$implement(SVGAElement, SVGLangSpace);
    _$implement(SVGAElement, SVGExternalResourcesRequired);
    _$implement(SVGAElement, SVGURIReference);
    SVGAElement.target = SVGAnimatedString;
    SVGAElement.nodeName = SVGAElement.tagName = 'A';
    SVGAElement.localName = 'a';
    
    /* -- type: SVGCircleElement -- */
    
    _$implement(SVGCircleElement, SVGStylable);
    _$implement(SVGCircleElement, SVGTransformable);
    _$implement(SVGCircleElement, SVGTests);
    _$implement(SVGCircleElement, SVGLangSpace);
    _$implement(SVGCircleElement, SVGExternalResourcesRequired);
    SVGCircleElement.cx = SVGAnimatedLength;
    SVGCircleElement.cy = SVGAnimatedLength;
    SVGCircleElement.r = SVGAnimatedLength;
    SVGCircleElement.nodeName = SVGCircleElement.tagName = 'CIRCLE';
    SVGCircleElement.localName = 'circle';
    
    /* -- type: SVGClipPathElement -- */
    
    _$implement(SVGClipPathElement, SVGStylable);
    _$implement(SVGClipPathElement, SVGTransformable);
    _$implement(SVGClipPathElement, SVGTests);
    _$implement(SVGClipPathElement, SVGLangSpace);
    _$implement(SVGClipPathElement, SVGExternalResourcesRequired);
    _$implement(SVGClipPathElement, SVGUnitTypes);
    SVGClipPathElement.clipPathUnits = SVGAnimatedEnumeration;
    SVGClipPathElement.nodeName = SVGClipPathElement.tagName = 'CLIPPATH';
    SVGClipPathElement.localName = 'clippath';
    
    /* -- type: SVGComponentTransferFunctionElement -- */
    
    SVGComponentTransferFunctionElement.amplitude = SVGAnimatedNumber;
    SVGComponentTransferFunctionElement.exponent = SVGAnimatedNumber;
    SVGComponentTransferFunctionElement.intercept = SVGAnimatedNumber;
    SVGComponentTransferFunctionElement.offset = SVGAnimatedNumber;
    SVGComponentTransferFunctionElement.slope = SVGAnimatedNumber;
    SVGComponentTransferFunctionElement.tableValues = SVGAnimatedNumberList;
    SVGComponentTransferFunctionElement.type = SVGAnimatedEnumeration;
    SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE = 3;
    SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_GAMMA = 5;
    SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY = 1;
    SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_LINEAR = 4;
    SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_TABLE = 2;
    SVGComponentTransferFunctionElement.SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN = 0;
    
    /* -- type: SVGDefsElement -- */
    
    _$implement(SVGDefsElement, SVGStylable);
    _$implement(SVGDefsElement, SVGTransformable);
    _$implement(SVGDefsElement, SVGTests);
    _$implement(SVGDefsElement, SVGLangSpace);
    _$implement(SVGDefsElement, SVGExternalResourcesRequired);
    SVGDefsElement.nodeName = SVGDefsElement.tagName = 'DEFS';
    SVGDefsElement.localName = 'defs';
    
    /* -- type: SVGDescElement -- */
    
    _$implement(SVGDescElement, SVGStylable);
    _$implement(SVGDescElement, SVGLangSpace);
    SVGDescElement.nodeName = SVGDescElement.tagName = 'DESC';
    SVGDescElement.localName = 'desc';
    
    /* -- type: SVGEllipseElement -- */
    
    _$implement(SVGEllipseElement, SVGStylable);
    _$implement(SVGEllipseElement, SVGTransformable);
    _$implement(SVGEllipseElement, SVGTests);
    _$implement(SVGEllipseElement, SVGLangSpace);
    _$implement(SVGEllipseElement, SVGExternalResourcesRequired);
    SVGEllipseElement.cx = SVGAnimatedLength;
    SVGEllipseElement.cy = SVGAnimatedLength;
    SVGEllipseElement.rx = SVGAnimatedLength;
    SVGEllipseElement.ry = SVGAnimatedLength;
    SVGEllipseElement.nodeName = SVGEllipseElement.tagName = 'ELLIPSE';
    SVGEllipseElement.localName = 'ellipse';
    
    /* -- type: SVGFEBlendElement -- */
    
    _$implement(SVGFEBlendElement, SVGFilterPrimitiveStandardAttributes);
    SVGFEBlendElement.in1 = SVGAnimatedString;
    SVGFEBlendElement.in2 = SVGAnimatedString;
    SVGFEBlendElement.mode = SVGAnimatedEnumeration;
    SVGFEBlendElement.SVG_FEBLEND_MODE_COLOR = 15;
    SVGFEBlendElement.SVG_FEBLEND_MODE_COLOR_BURN = 8;
    SVGFEBlendElement.SVG_FEBLEND_MODE_COLOR_DODGE = 7;
    SVGFEBlendElement.SVG_FEBLEND_MODE_DARKEN = 4;
    SVGFEBlendElement.SVG_FEBLEND_MODE_DIFFERENCE = 11;
    SVGFEBlendElement.SVG_FEBLEND_MODE_EXCLUSION = 12;
    SVGFEBlendElement.SVG_FEBLEND_MODE_HARD_LIGHT = 9;
    SVGFEBlendElement.SVG_FEBLEND_MODE_HUE = 13;
    SVGFEBlendElement.SVG_FEBLEND_MODE_LIGHTEN = 5;
    SVGFEBlendElement.SVG_FEBLEND_MODE_LUMINOSITY = 16;
    SVGFEBlendElement.SVG_FEBLEND_MODE_MULTIPLY = 2;
    SVGFEBlendElement.SVG_FEBLEND_MODE_NORMAL = 1;
    SVGFEBlendElement.SVG_FEBLEND_MODE_OVERLAY = 6;
    SVGFEBlendElement.SVG_FEBLEND_MODE_SATURATION = 14;
    SVGFEBlendElement.SVG_FEBLEND_MODE_SCREEN = 3;
    SVGFEBlendElement.SVG_FEBLEND_MODE_SOFT_LIGHT = 10;
    SVGFEBlendElement.SVG_FEBLEND_MODE_UNKNOWN = 0;
    SVGFEBlendElement.nodeName = SVGFEBlendElement.tagName = 'FEBLEND';
    SVGFEBlendElement.localName = 'feblend';
    
    /* -- type: SVGFEColorMatrixElement -- */
    
    _$implement(SVGFEColorMatrixElement, SVGFilterPrimitiveStandardAttributes);
    SVGFEColorMatrixElement.in1 = SVGAnimatedString;
    SVGFEColorMatrixElement.type = SVGAnimatedEnumeration;
    SVGFEColorMatrixElement.values = SVGAnimatedNumberList;
    SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_HUEROTATE = 3;
    SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA = 4;
    SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_MATRIX = 1;
    SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE = 2;
    SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_UNKNOWN = 0;
    SVGFEColorMatrixElement.nodeName = SVGFEColorMatrixElement.tagName = 'FECOLORMATRIX';
    SVGFEColorMatrixElement.localName = 'fecolormatrix';
    
    /* -- type: SVGFEComponentTransferElement -- */
    
    _$implement(SVGFEComponentTransferElement, SVGFilterPrimitiveStandardAttributes);
    SVGFEComponentTransferElement.in1 = SVGAnimatedString;
    SVGFEComponentTransferElement.nodeName = SVGFEComponentTransferElement.tagName = 'FECOMPONENTTRANSFER';
    SVGFEComponentTransferElement.localName = 'fecomponenttransfer';
    
    /* -- type: SVGFECompositeElement -- */
    
    _$implement(SVGFECompositeElement, SVGFilterPrimitiveStandardAttributes);
    SVGFECompositeElement.in1 = SVGAnimatedString;
    SVGFECompositeElement.in2 = SVGAnimatedString;
    SVGFECompositeElement.k1 = SVGAnimatedNumber;
    SVGFECompositeElement.k2 = SVGAnimatedNumber;
    SVGFECompositeElement.k3 = SVGAnimatedNumber;
    SVGFECompositeElement.k4 = SVGAnimatedNumber;
    SVGFECompositeElement.operator = SVGAnimatedEnumeration;
    SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_ARITHMETIC = 6;
    SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_ATOP = 4;
    SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_IN = 2;
    SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_OUT = 3;
    SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_OVER = 1;
    SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_UNKNOWN = 0;
    SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_XOR = 5;
    SVGFECompositeElement.nodeName = SVGFECompositeElement.tagName = 'FECOMPOSITE';
    SVGFECompositeElement.localName = 'fecomposite';
    
    /* -- type: SVGFEConvolveMatrixElement -- */
    
    _$implement(SVGFEConvolveMatrixElement, SVGFilterPrimitiveStandardAttributes);
    SVGFEConvolveMatrixElement.bias = SVGAnimatedNumber;
    SVGFEConvolveMatrixElement.divisor = SVGAnimatedNumber;
    SVGFEConvolveMatrixElement.edgeMode = SVGAnimatedEnumeration;
    SVGFEConvolveMatrixElement.in1 = SVGAnimatedString;
    SVGFEConvolveMatrixElement.kernelMatrix = SVGAnimatedNumberList;
    SVGFEConvolveMatrixElement.kernelUnitLengthX = SVGAnimatedNumber;
    SVGFEConvolveMatrixElement.kernelUnitLengthY = SVGAnimatedNumber;
    SVGFEConvolveMatrixElement.orderX = SVGAnimatedInteger;
    SVGFEConvolveMatrixElement.orderY = SVGAnimatedInteger;
    SVGFEConvolveMatrixElement.preserveAlpha = SVGAnimatedBoolean;
    SVGFEConvolveMatrixElement.targetX = SVGAnimatedInteger;
    SVGFEConvolveMatrixElement.targetY = SVGAnimatedInteger;
    SVGFEConvolveMatrixElement.SVG_EDGEMODE_DUPLICATE = 1;
    SVGFEConvolveMatrixElement.SVG_EDGEMODE_NONE = 3;
    SVGFEConvolveMatrixElement.SVG_EDGEMODE_UNKNOWN = 0;
    SVGFEConvolveMatrixElement.SVG_EDGEMODE_WRAP = 2;
    SVGFEConvolveMatrixElement.nodeName = SVGFEConvolveMatrixElement.tagName = 'FECONVOLVEMATRIX';
    SVGFEConvolveMatrixElement.localName = 'feconvolvematrix';
    
    /* -- type: SVGFEDiffuseLightingElement -- */
    
    _$implement(SVGFEDiffuseLightingElement, SVGFilterPrimitiveStandardAttributes);
    SVGFEDiffuseLightingElement.diffuseConstant = SVGAnimatedNumber;
    SVGFEDiffuseLightingElement.in1 = SVGAnimatedString;
    SVGFEDiffuseLightingElement.kernelUnitLengthX = SVGAnimatedNumber;
    SVGFEDiffuseLightingElement.kernelUnitLengthY = SVGAnimatedNumber;
    SVGFEDiffuseLightingElement.surfaceScale = SVGAnimatedNumber;
    SVGFEDiffuseLightingElement.nodeName = SVGFEDiffuseLightingElement.tagName = 'FEDIFFUSELIGHTING';
    SVGFEDiffuseLightingElement.localName = 'fediffuselighting';
    
    /* -- type: SVGFEDisplacementMapElement -- */
    
    _$implement(SVGFEDisplacementMapElement, SVGFilterPrimitiveStandardAttributes);
    SVGFEDisplacementMapElement.in1 = SVGAnimatedString;
    SVGFEDisplacementMapElement.in2 = SVGAnimatedString;
    SVGFEDisplacementMapElement.scale = SVGAnimatedNumber;
    SVGFEDisplacementMapElement.xChannelSelector = SVGAnimatedEnumeration;
    SVGFEDisplacementMapElement.yChannelSelector = SVGAnimatedEnumeration;
    SVGFEDisplacementMapElement.SVG_CHANNEL_A = 4;
    SVGFEDisplacementMapElement.SVG_CHANNEL_B = 3;
    SVGFEDisplacementMapElement.SVG_CHANNEL_G = 2;
    SVGFEDisplacementMapElement.SVG_CHANNEL_R = 1;
    SVGFEDisplacementMapElement.SVG_CHANNEL_UNKNOWN = 0;
    SVGFEDisplacementMapElement.nodeName = SVGFEDisplacementMapElement.tagName = 'FEDISPLACEMENTMAP';
    SVGFEDisplacementMapElement.localName = 'fedisplacementmap';
    
    /* -- type: SVGFEDistantLightElement -- */
    
    SVGFEDistantLightElement.azimuth = SVGAnimatedNumber;
    SVGFEDistantLightElement.elevation = SVGAnimatedNumber;
    SVGFEDistantLightElement.nodeName = SVGFEDistantLightElement.tagName = 'FEDISTANTLIGHT';
    SVGFEDistantLightElement.localName = 'fedistantlight';
    
    /* -- type: SVGFEFloodElement -- */
    
    _$implement(SVGFEFloodElement, SVGFilterPrimitiveStandardAttributes);
    SVGFEFloodElement.nodeName = SVGFEFloodElement.tagName = 'FEFLOOD';
    SVGFEFloodElement.localName = 'feflood';
    
    /* -- type: SVGFEGaussianBlurElement -- */
    
    _$implement(SVGFEGaussianBlurElement, SVGFilterPrimitiveStandardAttributes);
    SVGFEGaussianBlurElement.in1 = SVGAnimatedString;
    SVGFEGaussianBlurElement.stdDeviationX = SVGAnimatedNumber;
    SVGFEGaussianBlurElement.stdDeviationY = SVGAnimatedNumber;
    SVGFEGaussianBlurElement.setStdDeviation = function(stdDeviationX, stdDeviationY) {
        /// <signature>
        /// <param name='stdDeviationX' type='Number'/>
        /// <param name='stdDeviationY' type='Number'/>
        /// </signature>
    };
    SVGFEGaussianBlurElement.nodeName = SVGFEGaussianBlurElement.tagName = 'FEGAUSSIANBLUR';
    SVGFEGaussianBlurElement.localName = 'fegaussianblur';
    
    /* -- type: SVGFEImageElement -- */
    
    _$implement(SVGFEImageElement, SVGFilterPrimitiveStandardAttributes);
    _$implement(SVGFEImageElement, SVGLangSpace);
    _$implement(SVGFEImageElement, SVGURIReference);
    _$implement(SVGFEImageElement, SVGExternalResourcesRequired);
    SVGFEImageElement.preserveAspectRatio = SVGAnimatedPreserveAspectRatio;
    SVGFEImageElement.nodeName = SVGFEImageElement.tagName = 'FEIMAGE';
    SVGFEImageElement.localName = 'feimage';
    
    /* -- type: SVGFEMergeElement -- */
    
    _$implement(SVGFEMergeElement, SVGFilterPrimitiveStandardAttributes);
    SVGFEMergeElement.nodeName = SVGFEMergeElement.tagName = 'FEMERGE';
    SVGFEMergeElement.localName = 'femerge';
    
    /* -- type: SVGFEMergeNodeElement -- */
    
    SVGFEMergeNodeElement.in1 = SVGAnimatedString;
    SVGFEMergeNodeElement.nodeName = SVGFEMergeNodeElement.tagName = 'FEMERGENODE';
    SVGFEMergeNodeElement.localName = 'femergenode';
    
    /* -- type: SVGFEMorphologyElement -- */
    
    _$implement(SVGFEMorphologyElement, SVGFilterPrimitiveStandardAttributes);
    SVGFEMorphologyElement.in1 = SVGAnimatedString;
    SVGFEMorphologyElement.operator = SVGAnimatedEnumeration;
    SVGFEMorphologyElement.radiusX = SVGAnimatedNumber;
    SVGFEMorphologyElement.radiusY = SVGAnimatedNumber;
    SVGFEMorphologyElement.SVG_MORPHOLOGY_OPERATOR_DILATE = 2;
    SVGFEMorphologyElement.SVG_MORPHOLOGY_OPERATOR_ERODE = 1;
    SVGFEMorphologyElement.SVG_MORPHOLOGY_OPERATOR_UNKNOWN = 0;
    SVGFEMorphologyElement.nodeName = SVGFEMorphologyElement.tagName = 'FEMORPHOLOGY';
    SVGFEMorphologyElement.localName = 'femorphology';
    
    /* -- type: SVGFEOffsetElement -- */
    
    _$implement(SVGFEOffsetElement, SVGFilterPrimitiveStandardAttributes);
    SVGFEOffsetElement.dx = SVGAnimatedNumber;
    SVGFEOffsetElement.dy = SVGAnimatedNumber;
    SVGFEOffsetElement.in1 = SVGAnimatedString;
    SVGFEOffsetElement.nodeName = SVGFEOffsetElement.tagName = 'FEOFFSET';
    SVGFEOffsetElement.localName = 'feoffset';
    
    /* -- type: SVGFEPointLightElement -- */
    
    SVGFEPointLightElement.x = SVGAnimatedNumber;
    SVGFEPointLightElement.y = SVGAnimatedNumber;
    SVGFEPointLightElement.z = SVGAnimatedNumber;
    SVGFEPointLightElement.nodeName = SVGFEPointLightElement.tagName = 'FEPOINTLIGHT';
    SVGFEPointLightElement.localName = 'fepointlight';
    
    /* -- type: SVGFESpecularLightingElement -- */
    
    _$implement(SVGFESpecularLightingElement, SVGFilterPrimitiveStandardAttributes);
    SVGFESpecularLightingElement.in1 = SVGAnimatedString;
    SVGFESpecularLightingElement.kernelUnitLengthX = SVGAnimatedNumber;
    SVGFESpecularLightingElement.kernelUnitLengthY = SVGAnimatedNumber;
    SVGFESpecularLightingElement.specularConstant = SVGAnimatedNumber;
    SVGFESpecularLightingElement.specularExponent = SVGAnimatedNumber;
    SVGFESpecularLightingElement.surfaceScale = SVGAnimatedNumber;
    SVGFESpecularLightingElement.nodeName = SVGFESpecularLightingElement.tagName = 'FESPECULARLIGHTING';
    SVGFESpecularLightingElement.localName = 'fespecularlighting';
    
    /* -- type: SVGFESpotLightElement -- */
    
    SVGFESpotLightElement.limitingConeAngle = SVGAnimatedNumber;
    SVGFESpotLightElement.pointsAtX = SVGAnimatedNumber;
    SVGFESpotLightElement.pointsAtY = SVGAnimatedNumber;
    SVGFESpotLightElement.pointsAtZ = SVGAnimatedNumber;
    SVGFESpotLightElement.specularExponent = SVGAnimatedNumber;
    SVGFESpotLightElement.x = SVGAnimatedNumber;
    SVGFESpotLightElement.y = SVGAnimatedNumber;
    SVGFESpotLightElement.z = SVGAnimatedNumber;
    SVGFESpotLightElement.nodeName = SVGFESpotLightElement.tagName = 'FESPOTLIGHT';
    SVGFESpotLightElement.localName = 'fespotlight';
    
    /* -- type: SVGFETileElement -- */
    
    _$implement(SVGFETileElement, SVGFilterPrimitiveStandardAttributes);
    SVGFETileElement.in1 = SVGAnimatedString;
    SVGFETileElement.nodeName = SVGFETileElement.tagName = 'FETILE';
    SVGFETileElement.localName = 'fetile';
    
    /* -- type: SVGFETurbulenceElement -- */
    
    _$implement(SVGFETurbulenceElement, SVGFilterPrimitiveStandardAttributes);
    SVGFETurbulenceElement.baseFrequencyX = SVGAnimatedNumber;
    SVGFETurbulenceElement.baseFrequencyY = SVGAnimatedNumber;
    SVGFETurbulenceElement.numOctaves = SVGAnimatedInteger;
    SVGFETurbulenceElement.seed = SVGAnimatedNumber;
    SVGFETurbulenceElement.stitchTiles = SVGAnimatedEnumeration;
    SVGFETurbulenceElement.type = SVGAnimatedEnumeration;
    SVGFETurbulenceElement.SVG_STITCHTYPE_NOSTITCH = 2;
    SVGFETurbulenceElement.SVG_STITCHTYPE_STITCH = 1;
    SVGFETurbulenceElement.SVG_STITCHTYPE_UNKNOWN = 0;
    SVGFETurbulenceElement.SVG_TURBULENCE_TYPE_FRACTALNOISE = 1;
    SVGFETurbulenceElement.SVG_TURBULENCE_TYPE_TURBULENCE = 2;
    SVGFETurbulenceElement.SVG_TURBULENCE_TYPE_UNKNOWN = 0;
    SVGFETurbulenceElement.nodeName = SVGFETurbulenceElement.tagName = 'FETURBULENCE';
    SVGFETurbulenceElement.localName = 'feturbulence';
    
    /* -- type: SVGFilterElement -- */
    
    _$implement(SVGFilterElement, SVGUnitTypes);
    _$implement(SVGFilterElement, SVGStylable);
    _$implement(SVGFilterElement, SVGLangSpace);
    _$implement(SVGFilterElement, SVGURIReference);
    _$implement(SVGFilterElement, SVGExternalResourcesRequired);
    SVGFilterElement.filterResX = SVGAnimatedInteger;
    SVGFilterElement.filterResY = SVGAnimatedInteger;
    SVGFilterElement.filterUnits = SVGAnimatedEnumeration;
    SVGFilterElement.height = SVGAnimatedLength;
    SVGFilterElement.primitiveUnits = SVGAnimatedEnumeration;
    SVGFilterElement.width = SVGAnimatedLength;
    SVGFilterElement.x = SVGAnimatedLength;
    SVGFilterElement.y = SVGAnimatedLength;
    SVGFilterElement.setFilterRes = function(filterResX, filterResY) {
        /// <signature>
        /// <param name='filterResX' type='Number'/>
        /// <param name='filterResY' type='Number'/>
        /// </signature>
    };
    SVGFilterElement.nodeName = SVGFilterElement.tagName = 'FILTER';
    SVGFilterElement.localName = 'filter';
    
    /* -- type: SVGForeignObjectElement -- */
    
    _$implement(SVGForeignObjectElement, SVGStylable);
    _$implement(SVGForeignObjectElement, SVGTransformable);
    _$implement(SVGForeignObjectElement, SVGTests);
    _$implement(SVGForeignObjectElement, SVGLangSpace);
    _$implement(SVGForeignObjectElement, SVGExternalResourcesRequired);
    SVGForeignObjectElement.height = SVGAnimatedLength;
    SVGForeignObjectElement.width = SVGAnimatedLength;
    SVGForeignObjectElement.x = SVGAnimatedLength;
    SVGForeignObjectElement.y = SVGAnimatedLength;
    SVGForeignObjectElement.nodeName = SVGForeignObjectElement.tagName = 'FOREIGNOBJECT';
    SVGForeignObjectElement.localName = 'foreignobject';
    
    /* -- type: SVGGElement -- */
    
    _$implement(SVGGElement, SVGStylable);
    _$implement(SVGGElement, SVGTransformable);
    _$implement(SVGGElement, SVGTests);
    _$implement(SVGGElement, SVGLangSpace);
    _$implement(SVGGElement, SVGExternalResourcesRequired);
    SVGGElement.nodeName = SVGGElement.tagName = 'G';
    SVGGElement.localName = 'g';
    
    /* -- type: SVGGradientElement -- */
    
    _$implement(SVGGradientElement, SVGStylable);
    _$implement(SVGGradientElement, SVGExternalResourcesRequired);
    _$implement(SVGGradientElement, SVGURIReference);
    _$implement(SVGGradientElement, SVGUnitTypes);
    SVGGradientElement.gradientTransform = SVGAnimatedTransformList;
    SVGGradientElement.gradientUnits = SVGAnimatedEnumeration;
    SVGGradientElement.spreadMethod = SVGAnimatedEnumeration;
    SVGGradientElement.SVG_SPREADMETHOD_PAD = 1;
    SVGGradientElement.SVG_SPREADMETHOD_REFLECT = 2;
    SVGGradientElement.SVG_SPREADMETHOD_REPEAT = 3;
    SVGGradientElement.SVG_SPREADMETHOD_UNKNOWN = 0;
    
    /* -- type: SVGImageElement -- */
    
    _$implement(SVGImageElement, SVGStylable);
    _$implement(SVGImageElement, SVGTransformable);
    _$implement(SVGImageElement, SVGTests);
    _$implement(SVGImageElement, SVGLangSpace);
    _$implement(SVGImageElement, SVGExternalResourcesRequired);
    _$implement(SVGImageElement, SVGURIReference);
    SVGImageElement.height = SVGAnimatedLength;
    SVGImageElement.preserveAspectRatio = SVGAnimatedPreserveAspectRatio;
    SVGImageElement.width = SVGAnimatedLength;
    SVGImageElement.x = SVGAnimatedLength;
    SVGImageElement.y = SVGAnimatedLength;
    SVGImageElement.nodeName = SVGImageElement.tagName = 'IMAGE';
    SVGImageElement.localName = 'image';
    
    /* -- type: SVGLineElement -- */
    
    _$implement(SVGLineElement, SVGStylable);
    _$implement(SVGLineElement, SVGTransformable);
    _$implement(SVGLineElement, SVGTests);
    _$implement(SVGLineElement, SVGLangSpace);
    _$implement(SVGLineElement, SVGExternalResourcesRequired);
    SVGLineElement.x1 = SVGAnimatedLength;
    SVGLineElement.x2 = SVGAnimatedLength;
    SVGLineElement.y1 = SVGAnimatedLength;
    SVGLineElement.y2 = SVGAnimatedLength;
    SVGLineElement.nodeName = SVGLineElement.tagName = 'LINE';
    SVGLineElement.localName = 'line';
    
    /* -- type: SVGMarkerElement -- */
    
    _$implement(SVGMarkerElement, SVGStylable);
    _$implement(SVGMarkerElement, SVGLangSpace);
    _$implement(SVGMarkerElement, SVGExternalResourcesRequired);
    _$implement(SVGMarkerElement, SVGFitToViewBox);
    SVGMarkerElement.markerHeight = SVGAnimatedLength;
    SVGMarkerElement.markerUnits = SVGAnimatedEnumeration;
    SVGMarkerElement.markerWidth = SVGAnimatedLength;
    SVGMarkerElement.orientAngle = SVGAnimatedAngle;
    SVGMarkerElement.orientType = SVGAnimatedEnumeration;
    SVGMarkerElement.refX = SVGAnimatedLength;
    SVGMarkerElement.refY = SVGAnimatedLength;
    SVGMarkerElement.SVG_MARKERUNITS_STROKEWIDTH = 2;
    SVGMarkerElement.SVG_MARKERUNITS_UNKNOWN = 0;
    SVGMarkerElement.SVG_MARKERUNITS_USERSPACEONUSE = 1;
    SVGMarkerElement.SVG_MARKER_ORIENT_ANGLE = 2;
    SVGMarkerElement.SVG_MARKER_ORIENT_AUTO = 1;
    SVGMarkerElement.SVG_MARKER_ORIENT_UNKNOWN = 0;
    SVGMarkerElement.setOrientToAngle = function(angle) {
        /// <signature>
        /// <param name='angle' type='SVGAngle'/>
        /// </signature>
    };
    SVGMarkerElement.setOrientToAuto = function() {
    };
    SVGMarkerElement.nodeName = SVGMarkerElement.tagName = 'MARKER';
    SVGMarkerElement.localName = 'marker';
    
    /* -- type: SVGMaskElement -- */
    
    _$implement(SVGMaskElement, SVGStylable);
    _$implement(SVGMaskElement, SVGTests);
    _$implement(SVGMaskElement, SVGLangSpace);
    _$implement(SVGMaskElement, SVGExternalResourcesRequired);
    _$implement(SVGMaskElement, SVGUnitTypes);
    SVGMaskElement.height = SVGAnimatedLength;
    SVGMaskElement.maskContentUnits = SVGAnimatedEnumeration;
    SVGMaskElement.maskUnits = SVGAnimatedEnumeration;
    SVGMaskElement.width = SVGAnimatedLength;
    SVGMaskElement.x = SVGAnimatedLength;
    SVGMaskElement.y = SVGAnimatedLength;
    SVGMaskElement.nodeName = SVGMaskElement.tagName = 'MASK';
    SVGMaskElement.localName = 'mask';
    
    /* -- type: SVGMetadataElement -- */
    
    SVGMetadataElement.nodeName = SVGMetadataElement.tagName = 'METADATA';
    SVGMetadataElement.localName = 'metadata';
    
    /* -- type: SVGPathElement -- */
    
    _$implement(SVGPathElement, SVGStylable);
    _$implement(SVGPathElement, SVGTransformable);
    _$implement(SVGPathElement, SVGTests);
    _$implement(SVGPathElement, SVGLangSpace);
    _$implement(SVGPathElement, SVGExternalResourcesRequired);
    _$implement(SVGPathElement, SVGAnimatedPathData);
    SVGPathElement.createSVGPathSegArcAbs = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='r1' type='Number'/>
        /// <param name='r2' type='Number'/>
        /// <param name='angle' type='Number'/>
        /// <param name='largeArcFlag' type='Boolean'/>
        /// <param name='sweepFlag' type='Boolean'/>
        /// <returns type='SVGPathSegArcAbs'/>
        /// </signature>
        return SVGPathSegArcAbs;
    };
    SVGPathElement.createSVGPathSegArcRel = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='r1' type='Number'/>
        /// <param name='r2' type='Number'/>
        /// <param name='angle' type='Number'/>
        /// <param name='largeArcFlag' type='Boolean'/>
        /// <param name='sweepFlag' type='Boolean'/>
        /// <returns type='SVGPathSegArcRel'/>
        /// </signature>
        return SVGPathSegArcRel;
    };
    SVGPathElement.createSVGPathSegClosePath = function() {
        /// <signature>
        /// <returns type='SVGPathSegClosePath'/>
        /// </signature>
        return SVGPathSegClosePath;
    };
    SVGPathElement.createSVGPathSegCurvetoCubicAbs = function(x, y, x1, y1, x2, y2) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='x1' type='Number'/>
        /// <param name='y1' type='Number'/>
        /// <param name='x2' type='Number'/>
        /// <param name='y2' type='Number'/>
        /// <returns type='SVGPathSegCurvetoCubicAbs'/>
        /// </signature>
        return SVGPathSegCurvetoCubicAbs;
    };
    SVGPathElement.createSVGPathSegCurvetoCubicRel = function(x, y, x1, y1, x2, y2) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='x1' type='Number'/>
        /// <param name='y1' type='Number'/>
        /// <param name='x2' type='Number'/>
        /// <param name='y2' type='Number'/>
        /// <returns type='SVGPathSegCurvetoCubicRel'/>
        /// </signature>
        return SVGPathSegCurvetoCubicRel;
    };
    SVGPathElement.createSVGPathSegCurvetoCubicSmoothAbs = function(x, y, x2, y2) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='x2' type='Number'/>
        /// <param name='y2' type='Number'/>
        /// <returns type='SVGPathSegCurvetoCubicSmoothAbs'/>
        /// </signature>
        return SVGPathSegCurvetoCubicSmoothAbs;
    };
    SVGPathElement.createSVGPathSegCurvetoCubicSmoothRel = function(x, y, x2, y2) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='x2' type='Number'/>
        /// <param name='y2' type='Number'/>
        /// <returns type='SVGPathSegCurvetoCubicSmoothRel'/>
        /// </signature>
        return SVGPathSegCurvetoCubicSmoothRel;
    };
    SVGPathElement.createSVGPathSegCurvetoQuadraticAbs = function(x, y, x1, y1) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='x1' type='Number'/>
        /// <param name='y1' type='Number'/>
        /// <returns type='SVGPathSegCurvetoQuadraticAbs'/>
        /// </signature>
        return SVGPathSegCurvetoQuadraticAbs;
    };
    SVGPathElement.createSVGPathSegCurvetoQuadraticRel = function(x, y, x1, y1) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <param name='x1' type='Number'/>
        /// <param name='y1' type='Number'/>
        /// <returns type='SVGPathSegCurvetoQuadraticRel'/>
        /// </signature>
        return SVGPathSegCurvetoQuadraticRel;
    };
    SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothAbs = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <returns type='SVGPathSegCurvetoQuadraticSmoothAbs'/>
        /// </signature>
        return SVGPathSegCurvetoQuadraticSmoothAbs;
    };
    SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothRel = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <returns type='SVGPathSegCurvetoQuadraticSmoothRel'/>
        /// </signature>
        return SVGPathSegCurvetoQuadraticSmoothRel;
    };
    SVGPathElement.createSVGPathSegLinetoAbs = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <returns type='SVGPathSegLinetoAbs'/>
        /// </signature>
        return SVGPathSegLinetoAbs;
    };
    SVGPathElement.createSVGPathSegLinetoHorizontalAbs = function(x) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <returns type='SVGPathSegLinetoHorizontalAbs'/>
        /// </signature>
        return SVGPathSegLinetoHorizontalAbs;
    };
    SVGPathElement.createSVGPathSegLinetoHorizontalRel = function(x) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <returns type='SVGPathSegLinetoHorizontalRel'/>
        /// </signature>
        return SVGPathSegLinetoHorizontalRel;
    };
    SVGPathElement.createSVGPathSegLinetoRel = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <returns type='SVGPathSegLinetoRel'/>
        /// </signature>
        return SVGPathSegLinetoRel;
    };
    SVGPathElement.createSVGPathSegLinetoVerticalAbs = function(y) {
        /// <signature>
        /// <param name='y' type='Number'/>
        /// <returns type='SVGPathSegLinetoVerticalAbs'/>
        /// </signature>
        return SVGPathSegLinetoVerticalAbs;
    };
    SVGPathElement.createSVGPathSegLinetoVerticalRel = function(y) {
        /// <signature>
        /// <param name='y' type='Number'/>
        /// <returns type='SVGPathSegLinetoVerticalRel'/>
        /// </signature>
        return SVGPathSegLinetoVerticalRel;
    };
    SVGPathElement.createSVGPathSegMovetoAbs = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <returns type='SVGPathSegMovetoAbs'/>
        /// </signature>
        return SVGPathSegMovetoAbs;
    };
    SVGPathElement.createSVGPathSegMovetoRel = function(x, y) {
        /// <signature>
        /// <param name='x' type='Number'/>
        /// <param name='y' type='Number'/>
        /// <returns type='SVGPathSegMovetoRel'/>
        /// </signature>
        return SVGPathSegMovetoRel;
    };
    SVGPathElement.getPathSegAtLength = function(distance) {
        /// <signature>
        /// <param name='distance' type='Number'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    SVGPathElement.getPointAtLength = function(distance) {
        /// <signature>
        /// <param name='distance' type='Number'/>
        /// <returns type='SVGPoint'/>
        /// </signature>
        return SVGPoint;
    };
    SVGPathElement.getTotalLength = function() {
        /// <signature>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    SVGPathElement.nodeName = SVGPathElement.tagName = 'PATH';
    SVGPathElement.localName = 'path';
    
    /* -- type: SVGPatternElement -- */
    
    _$implement(SVGPatternElement, SVGStylable);
    _$implement(SVGPatternElement, SVGTests);
    _$implement(SVGPatternElement, SVGLangSpace);
    _$implement(SVGPatternElement, SVGExternalResourcesRequired);
    _$implement(SVGPatternElement, SVGFitToViewBox);
    _$implement(SVGPatternElement, SVGURIReference);
    _$implement(SVGPatternElement, SVGUnitTypes);
    SVGPatternElement.height = SVGAnimatedLength;
    SVGPatternElement.patternContentUnits = SVGAnimatedEnumeration;
    SVGPatternElement.patternTransform = SVGAnimatedTransformList;
    SVGPatternElement.patternUnits = SVGAnimatedEnumeration;
    SVGPatternElement.width = SVGAnimatedLength;
    SVGPatternElement.x = SVGAnimatedLength;
    SVGPatternElement.y = SVGAnimatedLength;
    SVGPatternElement.nodeName = SVGPatternElement.tagName = 'PATTERN';
    SVGPatternElement.localName = 'pattern';
    
    /* -- type: SVGPolygonElement -- */
    
    _$implement(SVGPolygonElement, SVGStylable);
    _$implement(SVGPolygonElement, SVGTransformable);
    _$implement(SVGPolygonElement, SVGTests);
    _$implement(SVGPolygonElement, SVGLangSpace);
    _$implement(SVGPolygonElement, SVGExternalResourcesRequired);
    _$implement(SVGPolygonElement, SVGAnimatedPoints);
    SVGPolygonElement.nodeName = SVGPolygonElement.tagName = 'POLYGON';
    SVGPolygonElement.localName = 'polygon';
    
    /* -- type: SVGPolylineElement -- */
    
    _$implement(SVGPolylineElement, SVGStylable);
    _$implement(SVGPolylineElement, SVGTransformable);
    _$implement(SVGPolylineElement, SVGTests);
    _$implement(SVGPolylineElement, SVGLangSpace);
    _$implement(SVGPolylineElement, SVGExternalResourcesRequired);
    _$implement(SVGPolylineElement, SVGAnimatedPoints);
    SVGPolylineElement.nodeName = SVGPolylineElement.tagName = 'POLYLINE';
    SVGPolylineElement.localName = 'polyline';
    
    /* -- type: SVGRectElement -- */
    
    _$implement(SVGRectElement, SVGStylable);
    _$implement(SVGRectElement, SVGTransformable);
    _$implement(SVGRectElement, SVGTests);
    _$implement(SVGRectElement, SVGLangSpace);
    _$implement(SVGRectElement, SVGExternalResourcesRequired);
    SVGRectElement.height = SVGAnimatedLength;
    SVGRectElement.rx = SVGAnimatedLength;
    SVGRectElement.ry = SVGAnimatedLength;
    SVGRectElement.width = SVGAnimatedLength;
    SVGRectElement.x = SVGAnimatedLength;
    SVGRectElement.y = SVGAnimatedLength;
    SVGRectElement.nodeName = SVGRectElement.tagName = 'RECT';
    SVGRectElement.localName = 'rect';
    
    /* -- type: SVGSVGElement -- */
    
    _$implement(SVGSVGElement, DocumentEvent);
    _$implement(SVGSVGElement, SVGLocatable);
    _$implement(SVGSVGElement, SVGTests);
    _$implement(SVGSVGElement, SVGStylable);
    _$implement(SVGSVGElement, SVGLangSpace);
    _$implement(SVGSVGElement, SVGExternalResourcesRequired);
    _$implement(SVGSVGElement, SVGFitToViewBox);
    _$implement(SVGSVGElement, SVGZoomAndPan);
    SVGSVGElement.contentScriptType = '';
    SVGSVGElement.contentStyleType = '';
    SVGSVGElement.currentScale = 0;
    SVGSVGElement.currentTranslate = SVGPoint;
    SVGSVGElement.height = SVGAnimatedLength;
    SVGSVGElement.pixelUnitToMillimeterX = 0;
    SVGSVGElement.pixelUnitToMillimeterY = 0;
    SVGSVGElement.screenPixelToMillimeterX = 0;
    SVGSVGElement.screenPixelToMillimeterY = 0;
    SVGSVGElement.viewport = SVGRect;
    SVGSVGElement.width = SVGAnimatedLength;
    SVGSVGElement.x = SVGAnimatedLength;
    SVGSVGElement.y = SVGAnimatedLength;
    SVGSVGElement.checkEnclosure = function(element, rect) {
        /// <signature>
        /// <param name='element' type='SVGElement'/>
        /// <param name='rect' type='SVGRect'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    SVGSVGElement.checkIntersection = function(element, rect) {
        /// <signature>
        /// <param name='element' type='SVGElement'/>
        /// <param name='rect' type='SVGRect'/>
        /// <returns type='Boolean'/>
        /// </signature>
        return false;
    };
    SVGSVGElement.createSVGAngle = function() {
        /// <signature>
        /// <returns type='SVGAngle'/>
        /// </signature>
        return SVGAngle;
    };
    SVGSVGElement.createSVGLength = function() {
        /// <signature>
        /// <returns type='SVGLength'/>
        /// </signature>
        return SVGLength;
    };
    SVGSVGElement.createSVGMatrix = function() {
        /// <signature>
        /// <returns type='SVGMatrix'/>
        /// </signature>
        return SVGMatrix;
    };
    SVGSVGElement.createSVGNumber = function() {
        /// <signature>
        /// <returns type='SVGNumber'/>
        /// </signature>
        return SVGNumber;
    };
    SVGSVGElement.createSVGPoint = function() {
        /// <signature>
        /// <returns type='SVGPoint'/>
        /// </signature>
        return SVGPoint;
    };
    SVGSVGElement.createSVGRect = function() {
        /// <signature>
        /// <returns type='SVGRect'/>
        /// </signature>
        return SVGRect;
    };
    SVGSVGElement.createSVGTransform = function() {
        /// <signature>
        /// <returns type='SVGTransform'/>
        /// </signature>
        return SVGTransform;
    };
    SVGSVGElement.createSVGTransformFromMatrix = function(matrix) {
        /// <signature>
        /// <param name='matrix' type='SVGMatrix'/>
        /// <returns type='SVGTransform'/>
        /// </signature>
        return SVGTransform;
    };
    SVGSVGElement.deselectAll = function() {
    };
    SVGSVGElement.forceRedraw = function() {
    };
    SVGSVGElement.getComputedStyle = function(elt, pseudoElt) {
        /// <signature>
        /// <param name='elt' type='Element'/>
        /// <param name='pseudoElt' type='String' optional='true' />
        /// <returns type='CSSStyleDeclaration'/>
        /// </signature>
        return CSSStyleDeclaration;
    };
    SVGSVGElement.getCurrentTime = function() {
        /// <signature>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    SVGSVGElement.getElementById = function(elementId) {
        /// <signature>
        /// <param name='elementId' type='String'/>
        /// <returns type='Element'/>
        /// </signature>
        return _getElementById(elementId);
    };
    SVGSVGElement.getEnclosureList = function(rect, referenceElement) {
        /// <signature>
        /// <param name='rect' type='SVGRect'/>
        /// <param name='referenceElement' type='SVGElement'/>
        /// <returns type='NodeList'/>
        /// </signature>
        return NodeList;
    };
    SVGSVGElement.getIntersectionList = function(rect, referenceElement) {
        /// <signature>
        /// <param name='rect' type='SVGRect'/>
        /// <param name='referenceElement' type='SVGElement'/>
        /// <returns type='NodeList'/>
        /// </signature>
        return NodeList;
    };
    SVGSVGElement.pauseAnimations = function() {
    };
    SVGSVGElement.setCurrentTime = function(seconds) {
        /// <signature>
        /// <param name='seconds' type='Number'/>
        /// </signature>
    };
    SVGSVGElement.suspendRedraw = function(maxWaitMilliseconds) {
        /// <signature>
        /// <param name='maxWaitMilliseconds' type='Number'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    SVGSVGElement.unpauseAnimations = function() {
    };
    SVGSVGElement.unsuspendRedraw = function(suspendHandleID) {
        /// <signature>
        /// <param name='suspendHandleID' type='Number'/>
        /// </signature>
    };
    SVGSVGElement.unsuspendRedrawAll = function() {
    };
    SVGSVGElement.nodeName = SVGSVGElement.tagName = 'SVG';
    SVGSVGElement.localName = 'svg';
    _events(SVGSVGElement, "onabort", "onerror", "onresize", "onscroll", "onunload", "onzoom", "onclick", "ondblclick", "onfocusin", "onfocusout", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onariarequest", "oncommand", "ongotpointercapture", "onlostpointercapture", "onmsgesturechange", "onmsgesturedoubletap", "onmsgestureend", "onmsgesturehold", "onmsgesturestart", "onmsgesturetap", "onmsgotpointercapture", "onmsinertiastart", "onmslostpointercapture", "onmspointercancel", "onmspointerdown", "onmspointerenter", "onmspointerleave", "onmspointermove", "onmspointerout", "onmspointerover", "onmspointerup", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "onwebkitfullscreenchange", "onwebkitfullscreenerror", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onwheel");
    
    /* -- type: SVGScriptElement -- */
    
    _$implement(SVGScriptElement, SVGExternalResourcesRequired);
    _$implement(SVGScriptElement, SVGURIReference);
    SVGScriptElement.type = '';
    SVGScriptElement.nodeName = SVGScriptElement.tagName = 'SCRIPT';
    SVGScriptElement.localName = 'script';
    
    /* -- type: SVGStopElement -- */
    
    _$implement(SVGStopElement, SVGStylable);
    SVGStopElement.offset = SVGAnimatedNumber;
    SVGStopElement.nodeName = SVGStopElement.tagName = 'STOP';
    SVGStopElement.localName = 'stop';
    
    /* -- type: SVGStyleElement -- */
    
    _$implement(SVGStyleElement, SVGLangSpace);
    SVGStyleElement.media = '';
    SVGStyleElement.title = '';
    SVGStyleElement.type = '';
    SVGStyleElement.nodeName = SVGStyleElement.tagName = 'STYLE';
    SVGStyleElement.localName = 'style';
    
    /* -- type: SVGSwitchElement -- */
    
    _$implement(SVGSwitchElement, SVGStylable);
    _$implement(SVGSwitchElement, SVGTransformable);
    _$implement(SVGSwitchElement, SVGTests);
    _$implement(SVGSwitchElement, SVGLangSpace);
    _$implement(SVGSwitchElement, SVGExternalResourcesRequired);
    SVGSwitchElement.nodeName = SVGSwitchElement.tagName = 'SWITCH';
    SVGSwitchElement.localName = 'switch';
    
    /* -- type: SVGSymbolElement -- */
    
    _$implement(SVGSymbolElement, SVGStylable);
    _$implement(SVGSymbolElement, SVGLangSpace);
    _$implement(SVGSymbolElement, SVGExternalResourcesRequired);
    _$implement(SVGSymbolElement, SVGFitToViewBox);
    SVGSymbolElement.nodeName = SVGSymbolElement.tagName = 'SYMBOL';
    SVGSymbolElement.localName = 'symbol';
    
    /* -- type: SVGTextContentElement -- */
    
    _$implement(SVGTextContentElement, SVGStylable);
    _$implement(SVGTextContentElement, SVGTests);
    _$implement(SVGTextContentElement, SVGLangSpace);
    _$implement(SVGTextContentElement, SVGExternalResourcesRequired);
    SVGTextContentElement.lengthAdjust = SVGAnimatedEnumeration;
    SVGTextContentElement.textLength = SVGAnimatedLength;
    SVGTextContentElement.LENGTHADJUST_SPACING = 1;
    SVGTextContentElement.LENGTHADJUST_SPACINGANDGLYPHS = 2;
    SVGTextContentElement.LENGTHADJUST_UNKNOWN = 0;
    SVGTextContentElement.getCharNumAtPosition = function(point) {
        /// <signature>
        /// <param name='point' type='SVGPoint'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    SVGTextContentElement.getComputedTextLength = function() {
        /// <signature>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    SVGTextContentElement.getEndPositionOfChar = function(charnum) {
        /// <signature>
        /// <param name='charnum' type='Number'/>
        /// <returns type='SVGPoint'/>
        /// </signature>
        return SVGPoint;
    };
    SVGTextContentElement.getExtentOfChar = function(charnum) {
        /// <signature>
        /// <param name='charnum' type='Number'/>
        /// <returns type='SVGRect'/>
        /// </signature>
        return SVGRect;
    };
    SVGTextContentElement.getNumberOfChars = function() {
        /// <signature>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    SVGTextContentElement.getRotationOfChar = function(charnum) {
        /// <signature>
        /// <param name='charnum' type='Number'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    SVGTextContentElement.getStartPositionOfChar = function(charnum) {
        /// <signature>
        /// <param name='charnum' type='Number'/>
        /// <returns type='SVGPoint'/>
        /// </signature>
        return SVGPoint;
    };
    SVGTextContentElement.getSubStringLength = function(charnum, nchars) {
        /// <signature>
        /// <param name='charnum' type='Number'/>
        /// <param name='nchars' type='Number'/>
        /// <returns type='Number'/>
        /// </signature>
        return 0;
    };
    SVGTextContentElement.selectSubString = function(charnum, nchars) {
        /// <signature>
        /// <param name='charnum' type='Number'/>
        /// <param name='nchars' type='Number'/>
        /// </signature>
    };
    
    /* -- type: SVGTitleElement -- */
    
    _$implement(SVGTitleElement, SVGStylable);
    _$implement(SVGTitleElement, SVGLangSpace);
    SVGTitleElement.nodeName = SVGTitleElement.tagName = 'TITLE';
    SVGTitleElement.localName = 'title';
    
    /* -- type: SVGUseElement -- */
    
    _$implement(SVGUseElement, SVGStylable);
    _$implement(SVGUseElement, SVGTransformable);
    _$implement(SVGUseElement, SVGTests);
    _$implement(SVGUseElement, SVGLangSpace);
    _$implement(SVGUseElement, SVGExternalResourcesRequired);
    _$implement(SVGUseElement, SVGURIReference);
    SVGUseElement.animatedInstanceRoot = SVGElementInstance;
    SVGUseElement.height = SVGAnimatedLength;
    SVGUseElement.instanceRoot = SVGElementInstance;
    SVGUseElement.width = SVGAnimatedLength;
    SVGUseElement.x = SVGAnimatedLength;
    SVGUseElement.y = SVGAnimatedLength;
    SVGUseElement.nodeName = SVGUseElement.tagName = 'USE';
    SVGUseElement.localName = 'use';
    
    /* -- type: SVGViewElement -- */
    
    _$implement(SVGViewElement, SVGExternalResourcesRequired);
    _$implement(SVGViewElement, SVGFitToViewBox);
    _$implement(SVGViewElement, SVGZoomAndPan);
    SVGViewElement.viewTarget = SVGStringList;
    SVGViewElement.nodeName = SVGViewElement.tagName = 'VIEW';
    SVGViewElement.localName = 'view';
    
    /* -- type: HTMLAudioElement -- */
    
    HTMLAudioElement.nodeName = HTMLAudioElement.tagName = 'AUDIO';
    HTMLAudioElement.localName = 'audio';
    
    /* -- type: HTMLTableDataCellElement -- */
    
    HTMLTableDataCellElement.nodeName = HTMLTableDataCellElement.tagName = 'TD';
    HTMLTableDataCellElement.localName = 'td';
    
    /* -- type: HTMLTableHeaderCellElement -- */
    
    HTMLTableHeaderCellElement.scope = '';
    HTMLTableHeaderCellElement.nodeName = HTMLTableHeaderCellElement.tagName = 'TH';
    HTMLTableHeaderCellElement.localName = 'th';
    
    /* -- type: HTMLVideoElement -- */
    
    HTMLVideoElement.height = 0;
    HTMLVideoElement.msHorizontalMirror = false;
    HTMLVideoElement.msIsLayoutOptimalForPlayback = false;
    HTMLVideoElement.msIsStereo3D = false;
    HTMLVideoElement.msStereo3DPackingMode = '';
    HTMLVideoElement.msStereo3DRenderMode = '';
    HTMLVideoElement.msZoom = false;
    HTMLVideoElement.poster = '';
    HTMLVideoElement.videoHeight = 0;
    HTMLVideoElement.videoWidth = 0;
    HTMLVideoElement.webkitDisplayingFullscreen = false;
    HTMLVideoElement.webkitSupportsFullscreen = false;
    HTMLVideoElement.width = 0;
    HTMLVideoElement.getVideoPlaybackQuality = function() {
        /// <signature>
        /// <returns type='VideoPlaybackQuality'/>
        /// </signature>
        return VideoPlaybackQuality;
    };
    HTMLVideoElement.msFrameStep = function(forward) {
        /// <signature>
        /// <param name='forward' type='Boolean'/>
        /// </signature>
    };
    HTMLVideoElement.msInsertVideoEffect = function(activatableClassId, effectRequired, config) {
        /// <signature>
        /// <param name='activatableClassId' type='String'/>
        /// <param name='effectRequired' type='Boolean'/>
        /// <param name='config' type='Object' optional='true' />
        /// </signature>
    };
    HTMLVideoElement.msSetVideoRectangle = function(left, top, right, bottom) {
        /// <signature>
        /// <param name='left' type='Number'/>
        /// <param name='top' type='Number'/>
        /// <param name='right' type='Number'/>
        /// <param name='bottom' type='Number'/>
        /// </signature>
    };
    HTMLVideoElement.webkitEnterFullScreen = function() {
    };
    HTMLVideoElement.webkitEnterFullscreen = function() {
    };
    HTMLVideoElement.webkitExitFullScreen = function() {
    };
    HTMLVideoElement.webkitExitFullscreen = function() {
    };
    HTMLVideoElement.nodeName = HTMLVideoElement.tagName = 'VIDEO';
    HTMLVideoElement.localName = 'video';
    _events(HTMLVideoElement, "onMSVideoFormatChanged", "onMSVideoFrameStepCompleted", "onMSVideoOptimalLayoutChanged", "onmsneedkey", "onabort", "onactivate", "onbeforeactivate", "onbeforecopy", "onbeforecut", "onbeforedeactivate", "onbeforepaste", "onblur", "oncanplay", "oncanplaythrough", "onchange", "onclick", "oncontextmenu", "oncopy", "oncuechange", "oncut", "ondblclick", "ondeactivate", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onmscontentzoom", "onmsmanipulationstatechanged", "onpaste", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onscroll", "onseeked", "onseeking", "onselect", "onselectstart", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting", "onariarequest", "oncommand", "ongotpointercapture", "onlostpointercapture", "onmsgesturechange", "onmsgesturedoubletap", "onmsgestureend", "onmsgesturehold", "onmsgesturestart", "onmsgesturetap", "onmsgotpointercapture", "onmsinertiastart", "onmslostpointercapture", "onmspointercancel", "onmspointerdown", "onmspointerenter", "onmspointerleave", "onmspointermove", "onmspointerout", "onmspointerover", "onmspointerup", "ontouchcancel", "ontouchend", "ontouchmove", "ontouchstart", "onwebkitfullscreenchange", "onwebkitfullscreenerror", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onwheel");
    
    /* -- type: SVGFEFuncAElement -- */
    
    SVGFEFuncAElement.nodeName = SVGFEFuncAElement.tagName = 'FEFUNCA';
    SVGFEFuncAElement.localName = 'fefunca';
    
    /* -- type: SVGFEFuncBElement -- */
    
    SVGFEFuncBElement.nodeName = SVGFEFuncBElement.tagName = 'FEFUNCB';
    SVGFEFuncBElement.localName = 'fefuncb';
    
    /* -- type: SVGFEFuncGElement -- */
    
    SVGFEFuncGElement.nodeName = SVGFEFuncGElement.tagName = 'FEFUNCG';
    SVGFEFuncGElement.localName = 'fefuncg';
    
    /* -- type: SVGFEFuncRElement -- */
    
    SVGFEFuncRElement.nodeName = SVGFEFuncRElement.tagName = 'FEFUNCR';
    SVGFEFuncRElement.localName = 'fefuncr';
    
    /* -- type: SVGLinearGradientElement -- */
    
    SVGLinearGradientElement.x1 = SVGAnimatedLength;
    SVGLinearGradientElement.x2 = SVGAnimatedLength;
    SVGLinearGradientElement.y1 = SVGAnimatedLength;
    SVGLinearGradientElement.y2 = SVGAnimatedLength;
    SVGLinearGradientElement.nodeName = SVGLinearGradientElement.tagName = 'LINEARGRADIENT';
    SVGLinearGradientElement.localName = 'lineargradient';
    
    /* -- type: SVGRadialGradientElement -- */
    
    SVGRadialGradientElement.cx = SVGAnimatedLength;
    SVGRadialGradientElement.cy = SVGAnimatedLength;
    SVGRadialGradientElement.fx = SVGAnimatedLength;
    SVGRadialGradientElement.fy = SVGAnimatedLength;
    SVGRadialGradientElement.r = SVGAnimatedLength;
    SVGRadialGradientElement.nodeName = SVGRadialGradientElement.tagName = 'RADIALGRADIENT';
    SVGRadialGradientElement.localName = 'radialgradient';
    
    /* -- type: SVGTextPathElement -- */
    
    _$implement(SVGTextPathElement, SVGURIReference);
    SVGTextPathElement.method = SVGAnimatedEnumeration;
    SVGTextPathElement.spacing = SVGAnimatedEnumeration;
    SVGTextPathElement.startOffset = SVGAnimatedLength;
    SVGTextPathElement.TEXTPATH_METHODTYPE_ALIGN = 1;
    SVGTextPathElement.TEXTPATH_METHODTYPE_STRETCH = 2;
    SVGTextPathElement.TEXTPATH_METHODTYPE_UNKNOWN = 0;
    SVGTextPathElement.TEXTPATH_SPACINGTYPE_AUTO = 1;
    SVGTextPathElement.TEXTPATH_SPACINGTYPE_EXACT = 2;
    SVGTextPathElement.TEXTPATH_SPACINGTYPE_UNKNOWN = 0;
    SVGTextPathElement.nodeName = SVGTextPathElement.tagName = 'TEXTPATH';
    SVGTextPathElement.localName = 'textpath';
    
    /* -- type: SVGTextPositioningElement -- */
    
    SVGTextPositioningElement.dx = SVGAnimatedLengthList;
    SVGTextPositioningElement.dy = SVGAnimatedLengthList;
    SVGTextPositioningElement.rotate = SVGAnimatedNumberList;
    SVGTextPositioningElement.x = SVGAnimatedLengthList;
    SVGTextPositioningElement.y = SVGAnimatedLengthList;
    
    /* -- type: SVGTSpanElement -- */
    
    SVGTSpanElement.nodeName = SVGTSpanElement.tagName = 'TSPAN';
    SVGTSpanElement.localName = 'tspan';
    
    /* -- type: SVGTextElement -- */
    
    _$implement(SVGTextElement, SVGTransformable);
    SVGTextElement.nodeName = SVGTextElement.tagName = 'TEXT';
    SVGTextElement.localName = 'text';
    
    /* -- type: Algorithm -- */
    
    Algorithm.name = '';
    
    /* -- type: AriaRequestEventInit -- */
    
    AriaRequestEventInit.attributeName = "";
    AriaRequestEventInit.attributeValue = null;
    
    /* -- type: ClipboardEventInit -- */
    
    ClipboardEventInit.data = "";
    ClipboardEventInit.dataType = "";
    
    /* -- type: CommandEventInit -- */
    
    CommandEventInit.commandName = "";
    CommandEventInit.detail = null;
    
    /* -- type: CompositionEventInit -- */
    
    CompositionEventInit.data = "";
    
    /* -- type: ConfirmSiteSpecificExceptionsInformation -- */
    
    ConfirmSiteSpecificExceptionsInformation.arrayOfDomainStrings = [];
    
    /* -- type: CustomEventInit -- */
    
    CustomEventInit.detail = null;
    
    /* -- type: DeviceAccelerationDict -- */
    
    DeviceAccelerationDict.x = null;
    DeviceAccelerationDict.y = null;
    DeviceAccelerationDict.z = null;
    
    /* -- type: DeviceRotationRateDict -- */
    
    DeviceRotationRateDict.alpha = null;
    DeviceRotationRateDict.beta = null;
    DeviceRotationRateDict.gamma = null;
    
    /* -- type: EventInit -- */
    
    EventInit.bubbles = false;
    EventInit.cancelable = false;
    
    /* -- type: ExceptionInformation -- */
    
    ExceptionInformation.domain = '';
    
    /* -- type: FocusEventInit -- */
    
    FocusEventInit.relatedTarget = null;
    
    /* -- type: HashChangeEventInit -- */
    
    HashChangeEventInit.newURL = null;
    HashChangeEventInit.oldURL = null;
    
    /* -- type: KeyAlgorithm -- */
    
    KeyAlgorithm.name = '';
    
    /* -- type: KeyboardEventInit -- */
    
    KeyboardEventInit.key = "";
    KeyboardEventInit.location = 0;
    KeyboardEventInit.repeat = false;
    
    /* -- type: MouseEventInit -- */
    
    MouseEventInit.screenX = 0;
    MouseEventInit.screenY = 0;
    MouseEventInit.clientX = 0;
    MouseEventInit.clientY = 0;
    MouseEventInit.button = 0;
    MouseEventInit.buttons = 0;
    MouseEventInit.relatedTarget = null;
    
    /* -- type: MsZoomToOptions -- */
    
    MsZoomToOptions.contentX = 0;
    MsZoomToOptions.contentY = 0;
    MsZoomToOptions.viewportX = '';
    MsZoomToOptions.viewportY = '';
    MsZoomToOptions.scaleFactor = 0;
    MsZoomToOptions.animate = '';
    
    /* -- type: MutationObserverInit -- */
    
    MutationObserverInit.childList = false;
    MutationObserverInit.attributes = false;
    MutationObserverInit.characterData = false;
    MutationObserverInit.subtree = false;
    MutationObserverInit.attributeOldValue = false;
    MutationObserverInit.characterDataOldValue = false;
    MutationObserverInit.attributeFilter = [];
    
    /* -- type: ObjectURLOptions -- */
    
    ObjectURLOptions.oneTimeOnly = false;
    
    /* -- type: PointerEventInit -- */
    
    PointerEventInit.pointerId = 0;
    PointerEventInit.width = 0;
    PointerEventInit.height = 0;
    PointerEventInit.pressure = 0;
    PointerEventInit.tiltX = 0;
    PointerEventInit.tiltY = 0;
    PointerEventInit.pointerType = "";
    PointerEventInit.isPrimary = false;
    
    /* -- type: PositionOptions -- */
    
    PositionOptions.enableHighAccuracy = false;
    PositionOptions.timeout = 0;
    PositionOptions.maximumAge = 0;
    
    /* -- type: SharedKeyboardAndMouseEventInit -- */
    
    SharedKeyboardAndMouseEventInit.ctrlKey = false;
    SharedKeyboardAndMouseEventInit.shiftKey = false;
    SharedKeyboardAndMouseEventInit.altKey = false;
    SharedKeyboardAndMouseEventInit.metaKey = false;
    SharedKeyboardAndMouseEventInit.keyModifierStateAltGraph = false;
    SharedKeyboardAndMouseEventInit.keyModifierStateCapsLock = false;
    SharedKeyboardAndMouseEventInit.keyModifierStateFn = false;
    SharedKeyboardAndMouseEventInit.keyModifierStateFnLock = false;
    SharedKeyboardAndMouseEventInit.keyModifierStateHyper = false;
    SharedKeyboardAndMouseEventInit.keyModifierStateNumLock = false;
    SharedKeyboardAndMouseEventInit.keyModifierStateOS = false;
    SharedKeyboardAndMouseEventInit.keyModifierStateScrollLock = false;
    SharedKeyboardAndMouseEventInit.keyModifierStateSuper = false;
    SharedKeyboardAndMouseEventInit.keyModifierStateSymbol = false;
    SharedKeyboardAndMouseEventInit.keyModifierStateSymbolLock = false;
    
    /* -- type: StoreExceptionsInformation -- */
    
    StoreExceptionsInformation.siteName = '';
    StoreExceptionsInformation.explanationString = '';
    StoreExceptionsInformation.detailURI = '';
    
    /* -- type: StoreSiteSpecificExceptionsInformation -- */
    
    StoreSiteSpecificExceptionsInformation.arrayOfDomainStrings = [];
    
    /* -- type: UIEventInit -- */
    
    UIEventInit.view = null;
    UIEventInit.detail = 0;
    
    /* -- type: WebGLContextAttributes -- */
    
    WebGLContextAttributes.alpha = true;
    WebGLContextAttributes.depth = true;
    WebGLContextAttributes.stencil = false;
    WebGLContextAttributes.antialias = true;
    WebGLContextAttributes.premultipliedAlpha = true;
    WebGLContextAttributes.preserveDrawingBuffer = false;
    
    /* -- type: WebGLContextEventInit -- */
    
    WebGLContextEventInit.statusMessage = "";
    
    /* -- type: WheelEventInit -- */
    
    WheelEventInit.deltaX = 0.0;
    WheelEventInit.deltaY = 0.0;
    WheelEventInit.deltaZ = 0.0;
    WheelEventInit.deltaMode = 0;

    // Assign variables to emulate browser host
    Document._$createDomObject = _createDomObject;
    Document._$recordDomStructure = _recordDomStructure;
    this.window = Window;
    _$nonRemovable(this.window);
    document = Document;
    _publicObject('document', Document);
    document.nodeName = '#document';
    document.localName = _$getTrackingNull('');
    document.nodeType = Node.DOCUMENT_NODE;
    document.ownerDocument = _$getTrackingNull(document);
    document.parentNode = _$getTrackingNull(document);
    document.previousSibling = _$getTrackingNull(document);
    document.nextSibling = _$getTrackingNull(document);
    document.nodeValue = _$getTrackingNull('');
    document.defaultView = window;

    document.head = _createElementByTagName('head');
    document.body = document.activeElement = _createElementByTagName('body');
    document.documentElement = _createElementByTagName('html');
    _appendChildInternal(document.documentElement, document.head);
    _appendChildInternal(document.documentElement, document.body);
    _appendChildInternal(document, document.documentElement);
    _appendChildInternal(document.head, _createElementByTagName('title'));
    _appendChildInternal(document.head, _createElementByTagName('script'));

    window.navigator.userAgent = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E; MS-RTC LM 8; InfoPath.3; Override:IE9_DEFAULT_20091014';
    window.location.href = 'about:blank';
    window.location.pathname = '/blank';
    window.location.protocol = 'about:';
    window.location.toString = function() { return this.href; };

    /* Wire all elements to have the body as their parent node */
    Node.parentNode = document.body;
    Node.ownerDocument = document;

    function _publicInterface(name, interface, interfacePrototype) {
        _$nonRemovable(interface);
        Window[name] = interface;
        Window[name].prototype = interfacePrototype;
    }

    function _publicObject(name, obj) {
        _$nonRemovable(obj);
        Window[name] = obj;
    }
    
    _publicInterface('SVGTextElement', {}, SVGTextElement);
    _publicInterface('SVGTSpanElement', {}, SVGTSpanElement);
    _publicInterface('SVGTextPositioningElement', {}, SVGTextPositioningElement);
    _publicInterface('SVGTextPathElement', {'TEXTPATH_METHODTYPE_ALIGN' : 1,'TEXTPATH_METHODTYPE_STRETCH' : 2,'TEXTPATH_METHODTYPE_UNKNOWN' : 0,'TEXTPATH_SPACINGTYPE_AUTO' : 1,'TEXTPATH_SPACINGTYPE_EXACT' : 2,'TEXTPATH_SPACINGTYPE_UNKNOWN' : 0}, SVGTextPathElement);
    _publicInterface('SVGRadialGradientElement', {}, SVGRadialGradientElement);
    _publicInterface('SVGLinearGradientElement', {}, SVGLinearGradientElement);
    _publicInterface('SVGFEFuncRElement', {}, SVGFEFuncRElement);
    _publicInterface('SVGFEFuncGElement', {}, SVGFEFuncGElement);
    _publicInterface('SVGFEFuncBElement', {}, SVGFEFuncBElement);
    _publicInterface('SVGFEFuncAElement', {}, SVGFEFuncAElement);
    _publicInterface('HTMLVideoElement', {}, HTMLVideoElement);
    _publicInterface('HTMLTableHeaderCellElement', {}, HTMLTableHeaderCellElement);
    _publicInterface('HTMLTableDataCellElement', {}, HTMLTableDataCellElement);
    _publicInterface('HTMLAudioElement', {}, HTMLAudioElement);
    _publicInterface('SVGViewElement', {}, SVGViewElement);
    _publicInterface('SVGUseElement', {}, SVGUseElement);
    _publicInterface('SVGTitleElement', {}, SVGTitleElement);
    _publicInterface('SVGTextContentElement', {'LENGTHADJUST_SPACING' : 1,'LENGTHADJUST_SPACINGANDGLYPHS' : 2,'LENGTHADJUST_UNKNOWN' : 0}, SVGTextContentElement);
    _publicInterface('SVGSymbolElement', {}, SVGSymbolElement);
    _publicInterface('SVGSwitchElement', {}, SVGSwitchElement);
    _publicInterface('SVGStyleElement', {}, SVGStyleElement);
    _publicInterface('SVGStopElement', {}, SVGStopElement);
    _publicInterface('SVGScriptElement', {}, SVGScriptElement);
    _publicInterface('SVGSVGElement', {}, SVGSVGElement);
    _publicInterface('SVGRectElement', {}, SVGRectElement);
    _publicInterface('SVGPolylineElement', {}, SVGPolylineElement);
    _publicInterface('SVGPolygonElement', {}, SVGPolygonElement);
    _publicInterface('SVGPatternElement', {}, SVGPatternElement);
    _publicInterface('SVGPathElement', {}, SVGPathElement);
    _publicInterface('SVGMetadataElement', {}, SVGMetadataElement);
    _publicInterface('SVGMaskElement', {}, SVGMaskElement);
    _publicInterface('SVGMarkerElement', {'SVG_MARKERUNITS_STROKEWIDTH' : 2,'SVG_MARKERUNITS_UNKNOWN' : 0,'SVG_MARKERUNITS_USERSPACEONUSE' : 1,'SVG_MARKER_ORIENT_ANGLE' : 2,'SVG_MARKER_ORIENT_AUTO' : 1,'SVG_MARKER_ORIENT_UNKNOWN' : 0}, SVGMarkerElement);
    _publicInterface('SVGLineElement', {}, SVGLineElement);
    _publicInterface('SVGImageElement', {}, SVGImageElement);
    _publicInterface('SVGGradientElement', {'SVG_SPREADMETHOD_PAD' : 1,'SVG_SPREADMETHOD_REFLECT' : 2,'SVG_SPREADMETHOD_REPEAT' : 3,'SVG_SPREADMETHOD_UNKNOWN' : 0}, SVGGradientElement);
    _publicInterface('SVGGElement', {}, SVGGElement);
    _publicInterface('SVGForeignObjectElement', {}, SVGForeignObjectElement);
    _publicInterface('SVGFilterElement', {}, SVGFilterElement);
    _publicInterface('SVGFETurbulenceElement', {'SVG_STITCHTYPE_NOSTITCH' : 2,'SVG_STITCHTYPE_STITCH' : 1,'SVG_STITCHTYPE_UNKNOWN' : 0,'SVG_TURBULENCE_TYPE_FRACTALNOISE' : 1,'SVG_TURBULENCE_TYPE_TURBULENCE' : 2,'SVG_TURBULENCE_TYPE_UNKNOWN' : 0}, SVGFETurbulenceElement);
    _publicInterface('SVGFETileElement', {}, SVGFETileElement);
    _publicInterface('SVGFESpotLightElement', {}, SVGFESpotLightElement);
    _publicInterface('SVGFESpecularLightingElement', {}, SVGFESpecularLightingElement);
    _publicInterface('SVGFEPointLightElement', {}, SVGFEPointLightElement);
    _publicInterface('SVGFEOffsetElement', {}, SVGFEOffsetElement);
    _publicInterface('SVGFEMorphologyElement', {'SVG_MORPHOLOGY_OPERATOR_DILATE' : 2,'SVG_MORPHOLOGY_OPERATOR_ERODE' : 1,'SVG_MORPHOLOGY_OPERATOR_UNKNOWN' : 0}, SVGFEMorphologyElement);
    _publicInterface('SVGFEMergeNodeElement', {}, SVGFEMergeNodeElement);
    _publicInterface('SVGFEMergeElement', {}, SVGFEMergeElement);
    _publicInterface('SVGFEImageElement', {}, SVGFEImageElement);
    _publicInterface('SVGFEGaussianBlurElement', {}, SVGFEGaussianBlurElement);
    _publicInterface('SVGFEFloodElement', {}, SVGFEFloodElement);
    _publicInterface('SVGFEDistantLightElement', {}, SVGFEDistantLightElement);
    _publicInterface('SVGFEDisplacementMapElement', {'SVG_CHANNEL_A' : 4,'SVG_CHANNEL_B' : 3,'SVG_CHANNEL_G' : 2,'SVG_CHANNEL_R' : 1,'SVG_CHANNEL_UNKNOWN' : 0}, SVGFEDisplacementMapElement);
    _publicInterface('SVGFEDiffuseLightingElement', {}, SVGFEDiffuseLightingElement);
    _publicInterface('SVGFEConvolveMatrixElement', {'SVG_EDGEMODE_DUPLICATE' : 1,'SVG_EDGEMODE_NONE' : 3,'SVG_EDGEMODE_UNKNOWN' : 0,'SVG_EDGEMODE_WRAP' : 2}, SVGFEConvolveMatrixElement);
    _publicInterface('SVGFECompositeElement', {'SVG_FECOMPOSITE_OPERATOR_ARITHMETIC' : 6,'SVG_FECOMPOSITE_OPERATOR_ATOP' : 4,'SVG_FECOMPOSITE_OPERATOR_IN' : 2,'SVG_FECOMPOSITE_OPERATOR_OUT' : 3,'SVG_FECOMPOSITE_OPERATOR_OVER' : 1,'SVG_FECOMPOSITE_OPERATOR_UNKNOWN' : 0,'SVG_FECOMPOSITE_OPERATOR_XOR' : 5}, SVGFECompositeElement);
    _publicInterface('SVGFEComponentTransferElement', {}, SVGFEComponentTransferElement);
    _publicInterface('SVGFEColorMatrixElement', {'SVG_FECOLORMATRIX_TYPE_HUEROTATE' : 3,'SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA' : 4,'SVG_FECOLORMATRIX_TYPE_MATRIX' : 1,'SVG_FECOLORMATRIX_TYPE_SATURATE' : 2,'SVG_FECOLORMATRIX_TYPE_UNKNOWN' : 0}, SVGFEColorMatrixElement);
    _publicInterface('SVGFEBlendElement', {'SVG_FEBLEND_MODE_COLOR' : 15,'SVG_FEBLEND_MODE_COLOR_BURN' : 8,'SVG_FEBLEND_MODE_COLOR_DODGE' : 7,'SVG_FEBLEND_MODE_DARKEN' : 4,'SVG_FEBLEND_MODE_DIFFERENCE' : 11,'SVG_FEBLEND_MODE_EXCLUSION' : 12,'SVG_FEBLEND_MODE_HARD_LIGHT' : 9,'SVG_FEBLEND_MODE_HUE' : 13,'SVG_FEBLEND_MODE_LIGHTEN' : 5,'SVG_FEBLEND_MODE_LUMINOSITY' : 16,'SVG_FEBLEND_MODE_MULTIPLY' : 2,'SVG_FEBLEND_MODE_NORMAL' : 1,'SVG_FEBLEND_MODE_OVERLAY' : 6,'SVG_FEBLEND_MODE_SATURATION' : 14,'SVG_FEBLEND_MODE_SCREEN' : 3,'SVG_FEBLEND_MODE_SOFT_LIGHT' : 10,'SVG_FEBLEND_MODE_UNKNOWN' : 0}, SVGFEBlendElement);
    _publicInterface('SVGEllipseElement', {}, SVGEllipseElement);
    _publicInterface('SVGDescElement', {}, SVGDescElement);
    _publicInterface('SVGDefsElement', {}, SVGDefsElement);
    _publicInterface('SVGComponentTransferFunctionElement', {'SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE' : 3,'SVG_FECOMPONENTTRANSFER_TYPE_GAMMA' : 5,'SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY' : 1,'SVG_FECOMPONENTTRANSFER_TYPE_LINEAR' : 4,'SVG_FECOMPONENTTRANSFER_TYPE_TABLE' : 2,'SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN' : 0}, SVGComponentTransferFunctionElement);
    _publicInterface('SVGClipPathElement', {}, SVGClipPathElement);
    _publicInterface('SVGCircleElement', {}, SVGCircleElement);
    _publicInterface('SVGAElement', {}, SVGAElement);
    _publicInterface('MSHTMLWebViewElement', {}, MSHTMLWebViewElement);
    _publicInterface('HTMLUnknownElement', {}, HTMLUnknownElement);
    _publicInterface('HTMLUListElement', {}, HTMLUListElement);
    _publicInterface('HTMLTrackElement', {'ERROR' : 3,'LOADED' : 2,'LOADING' : 1,'NONE' : 0}, HTMLTrackElement);
    _publicInterface('HTMLTitleElement', {}, HTMLTitleElement);
    _publicInterface('HTMLTextAreaElement', {}, HTMLTextAreaElement);
    _publicInterface('HTMLTableSectionElement', {}, HTMLTableSectionElement);
    _publicInterface('HTMLTableRowElement', {}, HTMLTableRowElement);
    _publicInterface('HTMLTableElement', {}, HTMLTableElement);
    _publicInterface('HTMLTableColElement', {}, HTMLTableColElement);
    _publicInterface('HTMLTableCellElement', {}, HTMLTableCellElement);
    _publicInterface('HTMLTableCaptionElement', {}, HTMLTableCaptionElement);
    _publicInterface('HTMLStyleElement', {}, HTMLStyleElement);
    _publicInterface('HTMLSpanElement', {}, HTMLSpanElement);
    _publicInterface('HTMLSourceElement', {}, HTMLSourceElement);
    _publicInterface('HTMLSelectElement', {}, HTMLSelectElement);
    _publicInterface('HTMLScriptElement', {}, HTMLScriptElement);
    _publicInterface('HTMLQuoteElement', {}, HTMLQuoteElement);
    _publicInterface('HTMLProgressElement', {}, HTMLProgressElement);
    _publicInterface('HTMLPreElement', {}, HTMLPreElement);
    _publicInterface('HTMLPhraseElement', {}, HTMLPhraseElement);
    _publicInterface('HTMLParamElement', {}, HTMLParamElement);
    _publicInterface('HTMLParagraphElement', {}, HTMLParagraphElement);
    _publicInterface('HTMLOptionElement', {'create' : HTMLOptionElement.create}, HTMLOptionElement);
    _publicInterface('HTMLOptGroupElement', {}, HTMLOptGroupElement);
    _publicInterface('HTMLObjectElement', {}, HTMLObjectElement);
    _publicInterface('HTMLOListElement', {}, HTMLOListElement);
    _publicInterface('HTMLNextIdElement', {}, HTMLNextIdElement);
    _publicInterface('HTMLModElement', {}, HTMLModElement);
    _publicInterface('HTMLMetaElement', {}, HTMLMetaElement);
    _publicInterface('HTMLMenuElement', {}, HTMLMenuElement);
    _publicInterface('HTMLMediaElement', {'HAVE_CURRENT_DATA' : 2,'HAVE_ENOUGH_DATA' : 4,'HAVE_FUTURE_DATA' : 3,'HAVE_METADATA' : 1,'HAVE_NOTHING' : 0,'NETWORK_EMPTY' : 0,'NETWORK_IDLE' : 1,'NETWORK_LOADING' : 2,'NETWORK_NO_SOURCE' : 3}, HTMLMediaElement);
    _publicInterface('HTMLMarqueeElement', {}, HTMLMarqueeElement);
    _publicInterface('HTMLMapElement', {}, HTMLMapElement);
    _publicInterface('HTMLLinkElement', {}, HTMLLinkElement);
    _publicInterface('HTMLLegendElement', {}, HTMLLegendElement);
    _publicInterface('HTMLLabelElement', {}, HTMLLabelElement);
    _publicInterface('HTMLLIElement', {}, HTMLLIElement);
    _publicInterface('HTMLIsIndexElement', {}, HTMLIsIndexElement);
    _publicInterface('HTMLInputElement', {}, HTMLInputElement);
    _publicInterface('HTMLImageElement', {'create' : HTMLImageElement.create}, HTMLImageElement);
    _publicInterface('HTMLIFrameElement', {}, HTMLIFrameElement);
    _publicInterface('HTMLHtmlElement', {}, HTMLHtmlElement);
    _publicInterface('HTMLHeadingElement', {}, HTMLHeadingElement);
    _publicInterface('HTMLHeadElement', {}, HTMLHeadElement);
    _publicInterface('HTMLHRElement', {}, HTMLHRElement);
    _publicInterface('HTMLFrameSetElement', {}, HTMLFrameSetElement);
    _publicInterface('HTMLFrameElement', {}, HTMLFrameElement);
    _publicInterface('HTMLFormElement', {}, HTMLFormElement);
    _publicInterface('HTMLFontElement', {}, HTMLFontElement);
    _publicInterface('HTMLFieldSetElement', {}, HTMLFieldSetElement);
    _publicInterface('HTMLEmbedElement', {}, HTMLEmbedElement);
    _publicInterface('HTMLDivElement', {}, HTMLDivElement);
    _publicInterface('HTMLDirectoryElement', {}, HTMLDirectoryElement);
    _publicInterface('HTMLDataListElement', {}, HTMLDataListElement);
    _publicInterface('HTMLDTElement', {}, HTMLDTElement);
    _publicInterface('HTMLDListElement', {}, HTMLDListElement);
    _publicInterface('HTMLDDElement', {}, HTMLDDElement);
    _publicInterface('HTMLCanvasElement', {}, HTMLCanvasElement);
    _publicInterface('HTMLButtonElement', {}, HTMLButtonElement);
    _publicInterface('HTMLBodyElement', {}, HTMLBodyElement);
    _publicInterface('HTMLBlockElement', {}, HTMLBlockElement);
    _publicInterface('HTMLBaseFontElement', {}, HTMLBaseFontElement);
    _publicInterface('HTMLBaseElement', {}, HTMLBaseElement);
    _publicInterface('HTMLBRElement', {}, HTMLBRElement);
    _publicInterface('HTMLAreaElement', {}, HTMLAreaElement);
    _publicInterface('HTMLAppletElement', {}, HTMLAppletElement);
    _publicInterface('HTMLAnchorElement', {}, HTMLAnchorElement);
    _publicInterface('CDATASection', {}, CDATASection);
    _publicInterface('XMLDocument', {}, XMLDocument);
    _publicInterface('UnviewableContentIdentifiedEvent', {}, UnviewableContentIdentifiedEvent);
    _publicInterface('Text', {}, Text);
    _publicInterface('SVGElement', {}, SVGElement);
    _publicInterface('ProcessingInstruction', {}, ProcessingInstruction);
    _publicInterface('MouseWheelEvent', {}, MouseWheelEvent);
    _publicInterface('HTMLElement', {}, HTMLElement);
    _publicInterface('HTMLDocument', {}, HTMLDocument);
    _publicInterface('DragEvent', {}, DragEvent);
    _publicInterface('Comment', {}, Comment);
    _publicInterface('CSSSupportsRule', {}, CSSSupportsRule);
    _publicInterface('CSSMediaRule', {}, CSSMediaRule);
    _publicInterface('WaveShaperNode', {}, WaveShaperNode);
    _publicInterface('TouchEvent', {}, TouchEvent);
    _publicInterface('TextEvent', {'DOM_INPUT_METHOD_DROP' : 0x03,'DOM_INPUT_METHOD_HANDWRITING' : 0x06,'DOM_INPUT_METHOD_IME' : 0x04,'DOM_INPUT_METHOD_KEYBOARD' : 0x01,'DOM_INPUT_METHOD_MULTIMODAL' : 0x08,'DOM_INPUT_METHOD_OPTION' : 0x05,'DOM_INPUT_METHOD_PASTE' : 0x02,'DOM_INPUT_METHOD_SCRIPT' : 0x09,'DOM_INPUT_METHOD_UNKNOWN' : 0x00,'DOM_INPUT_METHOD_VOICE' : 0x07}, TextEvent);
    _publicInterface('StereoPannerNode', {}, StereoPannerNode);
    _publicInterface('ScriptProcessorNode', {}, ScriptProcessorNode);
    _publicInterface('SVGZoomEvent', {}, SVGZoomEvent);
    _publicInterface('PannerNode', {}, PannerNode);
    _publicInterface('OscillatorNode', {}, OscillatorNode);
    _publicInterface('NavigationEventWithReferrer', {}, NavigationEventWithReferrer);
    _publicInterface('NavigationCompletedEvent', {}, NavigationCompletedEvent);
    _publicInterface('MediaElementAudioSourceNode', {}, MediaElementAudioSourceNode);
    _publicInterface('MSManipulationEvent', {'MS_MANIPULATION_STATE_ACTIVE' : 1,'MS_MANIPULATION_STATE_CANCELLED' : 6,'MS_MANIPULATION_STATE_COMMITTED' : 7,'MS_MANIPULATION_STATE_DRAGGING' : 5,'MS_MANIPULATION_STATE_INERTIA' : 2,'MS_MANIPULATION_STATE_PRESELECT' : 3,'MS_MANIPULATION_STATE_SELECTING' : 4,'MS_MANIPULATION_STATE_STOPPED' : 0}, MSManipulationEvent);
    _publicInterface('MSGestureEvent', {'MSGESTURE_FLAG_BEGIN' : 0x00000001,'MSGESTURE_FLAG_CANCEL' : 0x00000004,'MSGESTURE_FLAG_END' : 0x00000002,'MSGESTURE_FLAG_INERTIA' : 0x00000008,'MSGESTURE_FLAG_NONE' : 0x00000000}, MSGestureEvent);
    _publicInterface('IDBOpenDBRequest', {}, IDBOpenDBRequest);
    _publicInterface('GainNode', {}, GainNode);
    _publicInterface('Element', {}, Element);
    _publicInterface('DynamicsCompressorNode', {}, DynamicsCompressorNode);
    _publicInterface('DocumentType', {}, DocumentType);
    _publicInterface('DocumentFragment', {}, DocumentFragment);
    _publicInterface('Document', {}, Document);
    _publicInterface('DelayNode', {}, DelayNode);
    _publicInterface('DataCue', {}, DataCue);
    _publicInterface('ConvolverNode', {}, ConvolverNode);
    _publicInterface('CharacterData', {}, CharacterData);
    _publicInterface('ChannelSplitterNode', {}, ChannelSplitterNode);
    _publicInterface('ChannelMergerNode', {}, ChannelMergerNode);
    _publicInterface('CSSConditionRule', {}, CSSConditionRule);
    _publicInterface('BiquadFilterNode', {}, BiquadFilterNode);
    _publicInterface('AudioDestinationNode', {}, AudioDestinationNode);
    _publicInterface('AudioBufferSourceNode', {}, AudioBufferSourceNode);
    _publicInterface('Attr', {}, Attr);
    _publicInterface('AnalyserNode', {}, AnalyserNode);
    _publicInterface('XMLHttpRequestUpload', {}, XMLHttpRequestUpload);
    _publicInterface('Window', {}, Window);
    _publicInterface('WebGLTexture', {}, WebGLTexture);
    _publicInterface('WebGLShader', {}, WebGLShader);
    _publicInterface('WebGLRenderbuffer', {}, WebGLRenderbuffer);
    _publicInterface('WebGLProgram', {}, WebGLProgram);
    _publicInterface('WebGLFramebuffer', {}, WebGLFramebuffer);
    _publicInterface('WebGLBuffer', {}, WebGLBuffer);
    _publicInterface('VideoTrackList', {}, VideoTrackList);
    _publicInterface('TransitionEvent', {}, TransitionEvent);
    _publicInterface('TrackEvent', {}, TrackEvent);
    _publicInterface('TextTrackList', {}, TextTrackList);
    _publicInterface('TextTrack', {'DISABLED' : 0,'ERROR' : 3,'HIDDEN' : 1,'LOADED' : 2,'LOADING' : 1,'NONE' : 0,'SHOWING' : 2}, TextTrack);
    _publicInterface('StorageEvent', {}, StorageEvent);
    _publicInterface('SourceBufferList', {}, SourceBufferList);
    _publicInterface('SourceBuffer', {}, SourceBuffer);
    _publicInterface('ScriptNotifyEvent', {}, ScriptNotifyEvent);
    _publicInterface('Screen', {}, Screen);
    _publicInterface('SVGPathSegMovetoRel', {}, SVGPathSegMovetoRel);
    _publicInterface('SVGPathSegMovetoAbs', {}, SVGPathSegMovetoAbs);
    _publicInterface('SVGPathSegLinetoVerticalRel', {}, SVGPathSegLinetoVerticalRel);
    _publicInterface('SVGPathSegLinetoVerticalAbs', {}, SVGPathSegLinetoVerticalAbs);
    _publicInterface('SVGPathSegLinetoRel', {}, SVGPathSegLinetoRel);
    _publicInterface('SVGPathSegLinetoHorizontalRel', {}, SVGPathSegLinetoHorizontalRel);
    _publicInterface('SVGPathSegLinetoHorizontalAbs', {}, SVGPathSegLinetoHorizontalAbs);
    _publicInterface('SVGPathSegLinetoAbs', {}, SVGPathSegLinetoAbs);
    _publicInterface('SVGPathSegCurvetoQuadraticSmoothRel', {}, SVGPathSegCurvetoQuadraticSmoothRel);
    _publicInterface('SVGPathSegCurvetoQuadraticSmoothAbs', {}, SVGPathSegCurvetoQuadraticSmoothAbs);
    _publicInterface('SVGPathSegCurvetoQuadraticRel', {}, SVGPathSegCurvetoQuadraticRel);
    _publicInterface('SVGPathSegCurvetoQuadraticAbs', {}, SVGPathSegCurvetoQuadraticAbs);
    _publicInterface('SVGPathSegCurvetoCubicSmoothRel', {}, SVGPathSegCurvetoCubicSmoothRel);
    _publicInterface('SVGPathSegCurvetoCubicSmoothAbs', {}, SVGPathSegCurvetoCubicSmoothAbs);
    _publicInterface('SVGPathSegCurvetoCubicRel', {}, SVGPathSegCurvetoCubicRel);
    _publicInterface('SVGPathSegCurvetoCubicAbs', {}, SVGPathSegCurvetoCubicAbs);
    _publicInterface('SVGPathSegClosePath', {}, SVGPathSegClosePath);
    _publicInterface('SVGPathSegArcRel', {}, SVGPathSegArcRel);
    _publicInterface('SVGPathSegArcAbs', {}, SVGPathSegArcAbs);
    _publicInterface('SVGElementInstance', {}, SVGElementInstance);
    _publicInterface('ProgressEvent', {}, ProgressEvent);
    _publicInterface('PopStateEvent', {}, PopStateEvent);
    _publicInterface('PermissionRequestedEvent', {}, PermissionRequestedEvent);
    _publicInterface('PermissionRequest', {}, PermissionRequest);
    _publicInterface('PerformanceResourceTiming', {}, PerformanceResourceTiming);
    _publicInterface('PerformanceNavigationTiming', {}, PerformanceNavigationTiming);
    _publicInterface('PerformanceMeasure', {}, PerformanceMeasure);
    _publicInterface('PerformanceMark', {}, PerformanceMark);
    _publicInterface('PageTransitionEvent', {}, PageTransitionEvent);
    _publicInterface('OfflineAudioCompletionEvent', {}, OfflineAudioCompletionEvent);
    _publicInterface('Node', {'ATTRIBUTE_NODE' : 2,'CDATA_SECTION_NODE' : 4,'COMMENT_NODE' : 8,'DOCUMENT_FRAGMENT_NODE' : 11,'DOCUMENT_NODE' : 9,'DOCUMENT_POSITION_CONTAINED_BY' : 0x10,'DOCUMENT_POSITION_CONTAINS' : 0x08,'DOCUMENT_POSITION_DISCONNECTED' : 0x01,'DOCUMENT_POSITION_FOLLOWING' : 0x04,'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC' : 0x20,'DOCUMENT_POSITION_PRECEDING' : 0x02,'DOCUMENT_TYPE_NODE' : 10,'ELEMENT_NODE' : 1,'ENTITY_NODE' : 6,'ENTITY_REFERENCE_NODE' : 5,'NOTATION_NODE' : 12,'PROCESSING_INSTRUCTION_NODE' : 7,'TEXT_NODE' : 3}, Node);
    _publicInterface('NavigationEvent', {}, NavigationEvent);
    _publicInterface('MutationEvent', {'ADDITION' : 2,'MODIFICATION' : 1,'REMOVAL' : 3}, MutationEvent);
    _publicInterface('MessagePort', {}, MessagePort);
    _publicInterface('MessageEvent', {}, MessageEvent);
    _publicInterface('MSWebViewAsyncOperation', {'COMPLETED' : 1,'ERROR' : 2,'STARTED' : 0,'TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM' : 0,'TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION' : 2,'TYPE_INVOKE_SCRIPT' : 1}, MSWebViewAsyncOperation);
    _publicInterface('MSSiteModeEvent', {}, MSSiteModeEvent);
    _publicInterface('MSMediaKeySession', {}, MSMediaKeySession);
    _publicInterface('MSMediaKeyNeededEvent', {}, MSMediaKeyNeededEvent);
    _publicInterface('MSMediaKeyMessageEvent', {}, MSMediaKeyMessageEvent);
    _publicInterface('MSInputMethodContext', {}, MSInputMethodContext);
    _publicInterface('MSAppAsyncOperation', {'COMPLETED' : 1,'ERROR' : 2,'STARTED' : 0}, MSAppAsyncOperation);
    _publicInterface('LongRunningScriptDetectedEvent', {}, LongRunningScriptDetectedEvent);
    _publicInterface('IDBVersionChangeEvent', {}, IDBVersionChangeEvent);
    _publicInterface('IDBTransaction', {'READ_ONLY' : readonly,'READ_WRITE' : readwrite,'VERSION_CHANGE' : versionchange}, IDBTransaction);
    _publicInterface('IDBRequest', {}, IDBRequest);
    _publicInterface('IDBDatabase', {}, IDBDatabase);
    _publicInterface('IDBCursorWithValue', {}, IDBCursorWithValue);
    _publicInterface('HTMLAreasCollection', {}, HTMLAreasCollection);
    _publicInterface('HTMLAllCollection', {}, HTMLAllCollection);
    _publicInterface('GamepadEvent', {}, GamepadEvent);
    _publicInterface('File', {}, File);
    _publicInterface('ErrorEvent', {}, ErrorEvent);
    _publicInterface('DeviceOrientationEvent', {}, DeviceOrientationEvent);
    _publicInterface('DeviceMotionEvent', {}, DeviceMotionEvent);
    _publicInterface('DOMSettableTokenList', {}, DOMSettableTokenList);
    _publicInterface('CloseEvent', {}, CloseEvent);
    _publicInterface('CSSStyleSheet', {}, CSSStyleSheet);
    _publicInterface('CSSStyleRule', {}, CSSStyleRule);
    _publicInterface('CSSPageRule', {}, CSSPageRule);
    _publicInterface('CSSNamespaceRule', {}, CSSNamespaceRule);
    _publicInterface('CSSKeyframesRule', {}, CSSKeyframesRule);
    _publicInterface('CSSKeyframeRule', {}, CSSKeyframeRule);
    _publicInterface('CSSImportRule', {}, CSSImportRule);
    _publicInterface('CSSGroupingRule', {}, CSSGroupingRule);
    _publicInterface('CSSFontFaceRule', {}, CSSFontFaceRule);
    _publicInterface('BeforeUnloadEvent', {}, BeforeUnloadEvent);
    _publicInterface('AudioTrackList', {}, AudioTrackList);
    _publicInterface('AudioProcessingEvent', {}, AudioProcessingEvent);
    _publicInterface('AudioNode', {}, AudioNode);
    _publicInterface('ApplicationCache', {'CHECKING' : 2,'DOWNLOADING' : 3,'IDLE' : 1,'OBSOLETE' : 5,'UNCACHED' : 0,'UPDATEREADY' : 4}, ApplicationCache);
    _publicInterface('AnimationEvent', {}, AnimationEvent);
    _publicInterface('XPathResult', {'ANY_TYPE' : 0,'ANY_UNORDERED_NODE_TYPE' : 8,'BOOLEAN_TYPE' : 3,'FIRST_ORDERED_NODE_TYPE' : 9,'NUMBER_TYPE' : 1,'ORDERED_NODE_ITERATOR_TYPE' : 5,'ORDERED_NODE_SNAPSHOT_TYPE' : 7,'STRING_TYPE' : 2,'UNORDERED_NODE_ITERATOR_TYPE' : 4,'UNORDERED_NODE_SNAPSHOT_TYPE' : 6}, XPathResult);
    _publicInterface('XPathNSResolver', {}, XPathNSResolver);
    _publicInterface('XPathExpression', {}, XPathExpression);
    _publicInterface('WebGLUniformLocation', {}, WebGLUniformLocation);
    _publicInterface('WebGLShaderPrecisionFormat', {}, WebGLShaderPrecisionFormat);
    _publicInterface('WebGLRenderingContext', {'ACTIVE_ATTRIBUTES' : 0x8B89,'ACTIVE_TEXTURE' : 0x84E0,'ACTIVE_UNIFORMS' : 0x8B86,'ALIASED_LINE_WIDTH_RANGE' : 0x846E,'ALIASED_POINT_SIZE_RANGE' : 0x846D,'ALPHA' : 0x1906,'ALPHA_BITS' : 0x0D55,'ALWAYS' : 0x0207,'ARRAY_BUFFER' : 0x8892,'ARRAY_BUFFER_BINDING' : 0x8894,'ATTACHED_SHADERS' : 0x8B85,'BACK' : 0x0405,'BLEND' : 0x0BE2,'BLEND_COLOR' : 0x8005,'BLEND_DST_ALPHA' : 0x80CA,'BLEND_DST_RGB' : 0x80C8,'BLEND_EQUATION' : 0x8009,'BLEND_EQUATION_ALPHA' : 0x883D,'BLEND_EQUATION_RGB' : 0x8009,'BLEND_SRC_ALPHA' : 0x80CB,'BLEND_SRC_RGB' : 0x80C9,'BLUE_BITS' : 0x0D54,'BOOL' : 0x8B56,'BOOL_VEC2' : 0x8B57,'BOOL_VEC3' : 0x8B58,'BOOL_VEC4' : 0x8B59,'BROWSER_DEFAULT_WEBGL' : 0x9244,'BUFFER_SIZE' : 0x8764,'BUFFER_USAGE' : 0x8765,'BYTE' : 0x1400,'CCW' : 0x0901,'CLAMP_TO_EDGE' : 0x812F,'COLOR_ATTACHMENT0' : 0x8CE0,'COLOR_BUFFER_BIT' : 0x00004000,'COLOR_CLEAR_VALUE' : 0x0C22,'COLOR_WRITEMASK' : 0x0C23,'COMPILE_STATUS' : 0x8B81,'COMPRESSED_TEXTURE_FORMATS' : 0x86A3,'CONSTANT_ALPHA' : 0x8003,'CONSTANT_COLOR' : 0x8001,'CONTEXT_LOST_WEBGL' : 0x9242,'CULL_FACE' : 0x0B44,'CULL_FACE_MODE' : 0x0B45,'CURRENT_PROGRAM' : 0x8B8D,'CURRENT_VERTEX_ATTRIB' : 0x8626,'CW' : 0x0900,'DECR' : 0x1E03,'DECR_WRAP' : 0x8508,'DELETE_STATUS' : 0x8B80,'DEPTH_ATTACHMENT' : 0x8D00,'DEPTH_BITS' : 0x0D56,'DEPTH_BUFFER_BIT' : 0x00000100,'DEPTH_CLEAR_VALUE' : 0x0B73,'DEPTH_COMPONENT' : 0x1902,'DEPTH_COMPONENT16' : 0x81A5,'DEPTH_FUNC' : 0x0B74,'DEPTH_RANGE' : 0x0B70,'DEPTH_STENCIL' : 0x84F9,'DEPTH_STENCIL_ATTACHMENT' : 0x821A,'DEPTH_TEST' : 0x0B71,'DEPTH_WRITEMASK' : 0x0B72,'DITHER' : 0x0BD0,'DONT_CARE' : 0x1100,'DST_ALPHA' : 0x0304,'DST_COLOR' : 0x0306,'DYNAMIC_DRAW' : 0x88E8,'ELEMENT_ARRAY_BUFFER' : 0x8893,'ELEMENT_ARRAY_BUFFER_BINDING' : 0x8895,'EQUAL' : 0x0202,'FASTEST' : 0x1101,'FLOAT' : 0x1406,'FLOAT_MAT2' : 0x8B5A,'FLOAT_MAT3' : 0x8B5B,'FLOAT_MAT4' : 0x8B5C,'FLOAT_VEC2' : 0x8B50,'FLOAT_VEC3' : 0x8B51,'FLOAT_VEC4' : 0x8B52,'FRAGMENT_SHADER' : 0x8B30,'FRAMEBUFFER' : 0x8D40,'FRAMEBUFFER_ATTACHMENT_OBJECT_NAME' : 0x8CD1,'FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE' : 0x8CD0,'FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE' : 0x8CD3,'FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL' : 0x8CD2,'FRAMEBUFFER_BINDING' : 0x8CA6,'FRAMEBUFFER_COMPLETE' : 0x8CD5,'FRAMEBUFFER_INCOMPLETE_ATTACHMENT' : 0x8CD6,'FRAMEBUFFER_INCOMPLETE_DIMENSIONS' : 0x8CD9,'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT' : 0x8CD7,'FRAMEBUFFER_UNSUPPORTED' : 0x8CDD,'FRONT' : 0x0404,'FRONT_AND_BACK' : 0x0408,'FRONT_FACE' : 0x0B46,'FUNC_ADD' : 0x8006,'FUNC_REVERSE_SUBTRACT' : 0x800B,'FUNC_SUBTRACT' : 0x800A,'GENERATE_MIPMAP_HINT' : 0x8192,'GEQUAL' : 0x0206,'GREATER' : 0x0204,'GREEN_BITS' : 0x0D53,'HIGH_FLOAT' : 0x8DF2,'HIGH_INT' : 0x8DF5,'IMPLEMENTATION_COLOR_READ_FORMAT' : 0x8B9B,'IMPLEMENTATION_COLOR_READ_TYPE' : 0x8B9A,'INCR' : 0x1E02,'INCR_WRAP' : 0x8507,'INT' : 0x1404,'INT_VEC2' : 0x8B53,'INT_VEC3' : 0x8B54,'INT_VEC4' : 0x8B55,'INVALID_ENUM' : 0x0500,'INVALID_FRAMEBUFFER_OPERATION' : 0x0506,'INVALID_OPERATION' : 0x0502,'INVALID_VALUE' : 0x0501,'INVERT' : 0x150A,'KEEP' : 0x1E00,'LEQUAL' : 0x0203,'LESS' : 0x0201,'LINEAR' : 0x2601,'LINEAR_MIPMAP_LINEAR' : 0x2703,'LINEAR_MIPMAP_NEAREST' : 0x2701,'LINES' : 0x0001,'LINE_LOOP' : 0x0002,'LINE_STRIP' : 0x0003,'LINE_WIDTH' : 0x0B21,'LINK_STATUS' : 0x8B82,'LOW_FLOAT' : 0x8DF0,'LOW_INT' : 0x8DF3,'LUMINANCE' : 0x1909,'LUMINANCE_ALPHA' : 0x190A,'MAX_COMBINED_TEXTURE_IMAGE_UNITS' : 0x8B4D,'MAX_CUBE_MAP_TEXTURE_SIZE' : 0x851C,'MAX_FRAGMENT_UNIFORM_VECTORS' : 0x8DFD,'MAX_RENDERBUFFER_SIZE' : 0x84E8,'MAX_TEXTURE_IMAGE_UNITS' : 0x8872,'MAX_TEXTURE_SIZE' : 0x0D33,'MAX_VARYING_VECTORS' : 0x8DFC,'MAX_VERTEX_ATTRIBS' : 0x8869,'MAX_VERTEX_TEXTURE_IMAGE_UNITS' : 0x8B4C,'MAX_VERTEX_UNIFORM_VECTORS' : 0x8DFB,'MAX_VIEWPORT_DIMS' : 0x0D3A,'MEDIUM_FLOAT' : 0x8DF1,'MEDIUM_INT' : 0x8DF4,'MIRRORED_REPEAT' : 0x8370,'NEAREST' : 0x2600,'NEAREST_MIPMAP_LINEAR' : 0x2702,'NEAREST_MIPMAP_NEAREST' : 0x2700,'NEVER' : 0x0200,'NICEST' : 0x1102,'NONE' : 0,'NOTEQUAL' : 0x0205,'NO_ERROR' : 0,'ONE' : 1,'ONE_MINUS_CONSTANT_ALPHA' : 0x8004,'ONE_MINUS_CONSTANT_COLOR' : 0x8002,'ONE_MINUS_DST_ALPHA' : 0x0305,'ONE_MINUS_DST_COLOR' : 0x0307,'ONE_MINUS_SRC_ALPHA' : 0x0303,'ONE_MINUS_SRC_COLOR' : 0x0301,'OUT_OF_MEMORY' : 0x0505,'PACK_ALIGNMENT' : 0x0D05,'POINTS' : 0x0000,'POLYGON_OFFSET_FACTOR' : 0x8038,'POLYGON_OFFSET_FILL' : 0x8037,'POLYGON_OFFSET_UNITS' : 0x2A00,'RED_BITS' : 0x0D52,'RENDERBUFFER' : 0x8D41,'RENDERBUFFER_ALPHA_SIZE' : 0x8D53,'RENDERBUFFER_BINDING' : 0x8CA7,'RENDERBUFFER_BLUE_SIZE' : 0x8D52,'RENDERBUFFER_DEPTH_SIZE' : 0x8D54,'RENDERBUFFER_GREEN_SIZE' : 0x8D51,'RENDERBUFFER_HEIGHT' : 0x8D43,'RENDERBUFFER_INTERNAL_FORMAT' : 0x8D44,'RENDERBUFFER_RED_SIZE' : 0x8D50,'RENDERBUFFER_STENCIL_SIZE' : 0x8D55,'RENDERBUFFER_WIDTH' : 0x8D42,'RENDERER' : 0x1F01,'REPEAT' : 0x2901,'REPLACE' : 0x1E01,'RGB' : 0x1907,'RGB565' : 0x8D62,'RGB5_A1' : 0x8057,'RGBA' : 0x1908,'RGBA4' : 0x8056,'SAMPLER_2D' : 0x8B5E,'SAMPLER_CUBE' : 0x8B60,'SAMPLES' : 0x80A9,'SAMPLE_ALPHA_TO_COVERAGE' : 0x809E,'SAMPLE_BUFFERS' : 0x80A8,'SAMPLE_COVERAGE' : 0x80A0,'SAMPLE_COVERAGE_INVERT' : 0x80AB,'SAMPLE_COVERAGE_VALUE' : 0x80AA,'SCISSOR_BOX' : 0x0C10,'SCISSOR_TEST' : 0x0C11,'SHADER_TYPE' : 0x8B4F,'SHADING_LANGUAGE_VERSION' : 0x8B8C,'SHORT' : 0x1402,'SRC_ALPHA' : 0x0302,'SRC_ALPHA_SATURATE' : 0x0308,'SRC_COLOR' : 0x0300,'STATIC_DRAW' : 0x88E4,'STENCIL_ATTACHMENT' : 0x8D20,'STENCIL_BACK_FAIL' : 0x8801,'STENCIL_BACK_FUNC' : 0x8800,'STENCIL_BACK_PASS_DEPTH_FAIL' : 0x8802,'STENCIL_BACK_PASS_DEPTH_PASS' : 0x8803,'STENCIL_BACK_REF' : 0x8CA3,'STENCIL_BACK_VALUE_MASK' : 0x8CA4,'STENCIL_BACK_WRITEMASK' : 0x8CA5,'STENCIL_BITS' : 0x0D57,'STENCIL_BUFFER_BIT' : 0x00000400,'STENCIL_CLEAR_VALUE' : 0x0B91,'STENCIL_FAIL' : 0x0B94,'STENCIL_FUNC' : 0x0B92,'STENCIL_INDEX' : 0x1901,'STENCIL_INDEX8' : 0x8D48,'STENCIL_PASS_DEPTH_FAIL' : 0x0B95,'STENCIL_PASS_DEPTH_PASS' : 0x0B96,'STENCIL_REF' : 0x0B97,'STENCIL_TEST' : 0x0B90,'STENCIL_VALUE_MASK' : 0x0B93,'STENCIL_WRITEMASK' : 0x0B98,'STREAM_DRAW' : 0x88E0,'SUBPIXEL_BITS' : 0x0D50,'TEXTURE' : 0x1702,'TEXTURE0' : 0x84C0,'TEXTURE1' : 0x84C1,'TEXTURE10' : 0x84CA,'TEXTURE11' : 0x84CB,'TEXTURE12' : 0x84CC,'TEXTURE13' : 0x84CD,'TEXTURE14' : 0x84CE,'TEXTURE15' : 0x84CF,'TEXTURE16' : 0x84D0,'TEXTURE17' : 0x84D1,'TEXTURE18' : 0x84D2,'TEXTURE19' : 0x84D3,'TEXTURE2' : 0x84C2,'TEXTURE20' : 0x84D4,'TEXTURE21' : 0x84D5,'TEXTURE22' : 0x84D6,'TEXTURE23' : 0x84D7,'TEXTURE24' : 0x84D8,'TEXTURE25' : 0x84D9,'TEXTURE26' : 0x84DA,'TEXTURE27' : 0x84DB,'TEXTURE28' : 0x84DC,'TEXTURE29' : 0x84DD,'TEXTURE3' : 0x84C3,'TEXTURE30' : 0x84DE,'TEXTURE31' : 0x84DF,'TEXTURE4' : 0x84C4,'TEXTURE5' : 0x84C5,'TEXTURE6' : 0x84C6,'TEXTURE7' : 0x84C7,'TEXTURE8' : 0x84C8,'TEXTURE9' : 0x84C9,'TEXTURE_2D' : 0x0DE1,'TEXTURE_BINDING_2D' : 0x8069,'TEXTURE_BINDING_CUBE_MAP' : 0x8514,'TEXTURE_CUBE_MAP' : 0x8513,'TEXTURE_CUBE_MAP_NEGATIVE_X' : 0x8516,'TEXTURE_CUBE_MAP_NEGATIVE_Y' : 0x8518,'TEXTURE_CUBE_MAP_NEGATIVE_Z' : 0x851A,'TEXTURE_CUBE_MAP_POSITIVE_X' : 0x8515,'TEXTURE_CUBE_MAP_POSITIVE_Y' : 0x8517,'TEXTURE_CUBE_MAP_POSITIVE_Z' : 0x8519,'TEXTURE_MAG_FILTER' : 0x2800,'TEXTURE_MIN_FILTER' : 0x2801,'TEXTURE_WRAP_S' : 0x2802,'TEXTURE_WRAP_T' : 0x2803,'TRIANGLES' : 0x0004,'TRIANGLE_FAN' : 0x0006,'TRIANGLE_STRIP' : 0x0005,'UNPACK_ALIGNMENT' : 0x0CF5,'UNPACK_COLORSPACE_CONVERSION_WEBGL' : 0x9243,'UNPACK_FLIP_Y_WEBGL' : 0x9240,'UNPACK_PREMULTIPLY_ALPHA_WEBGL' : 0x9241,'UNSIGNED_BYTE' : 0x1401,'UNSIGNED_INT' : 0x1405,'UNSIGNED_SHORT' : 0x1403,'UNSIGNED_SHORT_4_4_4_4' : 0x8033,'UNSIGNED_SHORT_5_5_5_1' : 0x8034,'UNSIGNED_SHORT_5_6_5' : 0x8363,'VALIDATE_STATUS' : 0x8B83,'VENDOR' : 0x1F00,'VERSION' : 0x1F02,'VERTEX_ATTRIB_ARRAY_BUFFER_BINDING' : 0x889F,'VERTEX_ATTRIB_ARRAY_ENABLED' : 0x8622,'VERTEX_ATTRIB_ARRAY_NORMALIZED' : 0x886A,'VERTEX_ATTRIB_ARRAY_POINTER' : 0x8645,'VERTEX_ATTRIB_ARRAY_SIZE' : 0x8623,'VERTEX_ATTRIB_ARRAY_STRIDE' : 0x8624,'VERTEX_ATTRIB_ARRAY_TYPE' : 0x8625,'VERTEX_SHADER' : 0x8B31,'VIEWPORT' : 0x0BA2,'ZERO' : 0}, WebGLRenderingContext);
    _publicInterface('WebGLObject', {}, WebGLObject);
    _publicInterface('WebGLActiveInfo', {}, WebGLActiveInfo);
    _publicInterface('WEBGL_depth_texture', {'UNSIGNED_INT_24_8_WEBGL' : 0x84FA}, WEBGL_depth_texture);
    _publicInterface('WEBGL_debug_renderer_info', {'UNMASKED_RENDERER_WEBGL' : 0x9246,'UNMASKED_VENDOR_WEBGL' : 0x9245}, WEBGL_debug_renderer_info);
    _publicInterface('WEBGL_compressed_texture_s3tc', {'COMPRESSED_RGBA_S3TC_DXT1_EXT' : 0x83F1,'COMPRESSED_RGBA_S3TC_DXT3_EXT' : 0x83F2,'COMPRESSED_RGBA_S3TC_DXT5_EXT' : 0x83F3,'COMPRESSED_RGB_S3TC_DXT1_EXT' : 0x83F0}, WEBGL_compressed_texture_s3tc);
    _publicInterface('VideoTrack', {}, VideoTrack);
    _publicInterface('VideoPlaybackQuality', {}, VideoPlaybackQuality);
    _publicInterface('ValidityState', {}, ValidityState);
    _publicObject('URL', URL);
    _publicInterface('TreeWalker', {}, TreeWalker);
    _publicInterface('TouchList', {}, TouchList);
    _publicInterface('Touch', {}, Touch);
    _publicInterface('TimeRanges', {}, TimeRanges);
    _publicInterface('TextTrackCueList', {}, TextTrackCueList);
    _publicInterface('TextRangeCollection', {}, TextRangeCollection);
    _publicInterface('TextRange', {}, TextRange);
    _publicInterface('TextMetrics', {}, TextMetrics);
    _publicInterface('SubtleCrypto', {}, SubtleCrypto);
    _publicInterface('StyleSheetPageList', {}, StyleSheetPageList);
    _publicInterface('StyleSheetList', {}, StyleSheetList);
    _publicInterface('StyleSheet', {}, StyleSheet);
    _publicInterface('StyleMedia', {}, StyleMedia);
    _publicInterface('Storage', {}, Storage);
    _publicInterface('Selection', {}, Selection);
    _publicObject('SVGZoomAndPan', SVGZoomAndPan);
    _publicObject('SVGUnitTypes', SVGUnitTypes);
    _publicInterface('SVGTransformList', {}, SVGTransformList);
    _publicInterface('SVGTransform', {'SVG_TRANSFORM_MATRIX' : 1,'SVG_TRANSFORM_ROTATE' : 4,'SVG_TRANSFORM_SCALE' : 3,'SVG_TRANSFORM_SKEWX' : 5,'SVG_TRANSFORM_SKEWY' : 6,'SVG_TRANSFORM_TRANSLATE' : 2,'SVG_TRANSFORM_UNKNOWN' : 0}, SVGTransform);
    _publicInterface('SVGStringList', {}, SVGStringList);
    _publicInterface('SVGRect', {}, SVGRect);
    _publicInterface('SVGPreserveAspectRatio', {'SVG_MEETORSLICE_MEET' : 1,'SVG_MEETORSLICE_SLICE' : 2,'SVG_MEETORSLICE_UNKNOWN' : 0,'SVG_PRESERVEASPECTRATIO_NONE' : 1,'SVG_PRESERVEASPECTRATIO_UNKNOWN' : 0,'SVG_PRESERVEASPECTRATIO_XMAXYMAX' : 10,'SVG_PRESERVEASPECTRATIO_XMAXYMID' : 7,'SVG_PRESERVEASPECTRATIO_XMAXYMIN' : 4,'SVG_PRESERVEASPECTRATIO_XMIDYMAX' : 9,'SVG_PRESERVEASPECTRATIO_XMIDYMID' : 6,'SVG_PRESERVEASPECTRATIO_XMIDYMIN' : 3,'SVG_PRESERVEASPECTRATIO_XMINYMAX' : 8,'SVG_PRESERVEASPECTRATIO_XMINYMID' : 5,'SVG_PRESERVEASPECTRATIO_XMINYMIN' : 2}, SVGPreserveAspectRatio);
    _publicInterface('SVGPointList', {}, SVGPointList);
    _publicInterface('SVGPoint', {}, SVGPoint);
    _publicInterface('SVGPathSegList', {}, SVGPathSegList);
    _publicInterface('SVGPathSeg', {'PATHSEG_ARC_ABS' : 10,'PATHSEG_ARC_REL' : 11,'PATHSEG_CLOSEPATH' : 1,'PATHSEG_CURVETO_CUBIC_ABS' : 6,'PATHSEG_CURVETO_CUBIC_REL' : 7,'PATHSEG_CURVETO_CUBIC_SMOOTH_ABS' : 16,'PATHSEG_CURVETO_CUBIC_SMOOTH_REL' : 17,'PATHSEG_CURVETO_QUADRATIC_ABS' : 8,'PATHSEG_CURVETO_QUADRATIC_REL' : 9,'PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS' : 18,'PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL' : 19,'PATHSEG_LINETO_ABS' : 4,'PATHSEG_LINETO_HORIZONTAL_ABS' : 12,'PATHSEG_LINETO_HORIZONTAL_REL' : 13,'PATHSEG_LINETO_REL' : 5,'PATHSEG_LINETO_VERTICAL_ABS' : 14,'PATHSEG_LINETO_VERTICAL_REL' : 15,'PATHSEG_MOVETO_ABS' : 2,'PATHSEG_MOVETO_REL' : 3,'PATHSEG_UNKNOWN' : 0}, SVGPathSeg);
    _publicInterface('SVGNumberList', {}, SVGNumberList);
    _publicInterface('SVGNumber', {}, SVGNumber);
    _publicInterface('SVGMatrix', {}, SVGMatrix);
    _publicInterface('SVGLengthList', {}, SVGLengthList);
    _publicInterface('SVGLength', {'SVG_LENGTHTYPE_CM' : 6,'SVG_LENGTHTYPE_EMS' : 3,'SVG_LENGTHTYPE_EXS' : 4,'SVG_LENGTHTYPE_IN' : 8,'SVG_LENGTHTYPE_MM' : 7,'SVG_LENGTHTYPE_NUMBER' : 1,'SVG_LENGTHTYPE_PC' : 10,'SVG_LENGTHTYPE_PERCENTAGE' : 2,'SVG_LENGTHTYPE_PT' : 9,'SVG_LENGTHTYPE_PX' : 5,'SVG_LENGTHTYPE_UNKNOWN' : 0}, SVGLength);
    _publicInterface('SVGElementInstanceList', {}, SVGElementInstanceList);
    _publicInterface('SVGAnimatedTransformList', {}, SVGAnimatedTransformList);
    _publicInterface('SVGAnimatedString', {}, SVGAnimatedString);
    _publicInterface('SVGAnimatedRect', {}, SVGAnimatedRect);
    _publicInterface('SVGAnimatedPreserveAspectRatio', {}, SVGAnimatedPreserveAspectRatio);
    _publicInterface('SVGAnimatedNumberList', {}, SVGAnimatedNumberList);
    _publicInterface('SVGAnimatedNumber', {}, SVGAnimatedNumber);
    _publicInterface('SVGAnimatedLengthList', {}, SVGAnimatedLengthList);
    _publicInterface('SVGAnimatedLength', {}, SVGAnimatedLength);
    _publicInterface('SVGAnimatedInteger', {}, SVGAnimatedInteger);
    _publicInterface('SVGAnimatedEnumeration', {}, SVGAnimatedEnumeration);
    _publicInterface('SVGAnimatedBoolean', {}, SVGAnimatedBoolean);
    _publicInterface('SVGAnimatedAngle', {}, SVGAnimatedAngle);
    _publicInterface('SVGAngle', {'SVG_ANGLETYPE_DEG' : 2,'SVG_ANGLETYPE_GRAD' : 4,'SVG_ANGLETYPE_RAD' : 3,'SVG_ANGLETYPE_UNKNOWN' : 0,'SVG_ANGLETYPE_UNSPECIFIED' : 1}, SVGAngle);
    _publicInterface('Range', {'END_TO_END' : 2,'END_TO_START' : 3,'START_TO_END' : 1,'START_TO_START' : 0}, Range);
    _publicInterface('PositionError', {'PERMISSION_DENIED' : 1,'POSITION_UNAVAILABLE' : 2,'TIMEOUT' : 3}, PositionError);
    _publicInterface('Position', {}, Position);
    _publicInterface('PluginArray', {}, PluginArray);
    _publicInterface('Plugin', {}, Plugin);
    _publicInterface('PeriodicWave', {}, PeriodicWave);
    _publicInterface('PerformanceTiming', {}, PerformanceTiming);
    _publicInterface('PerformanceNavigation', {'TYPE_BACK_FORWARD' : 2,'TYPE_NAVIGATE' : 0,'TYPE_RELOAD' : 1,'TYPE_RESERVED' : 255}, PerformanceNavigation);
    _publicInterface('PerformanceEntry', {}, PerformanceEntry);
    _publicInterface('Performance', {}, Performance);
    _publicInterface('PerfWidgetExternal', {}, PerfWidgetExternal);
    _publicInterface('OES_texture_float_linear', {}, OES_texture_float_linear);
    _publicInterface('OES_texture_float', {}, OES_texture_float);
    _publicInterface('OES_standard_derivatives', {'FRAGMENT_SHADER_DERIVATIVE_HINT_OES' : 0x8B8B}, OES_standard_derivatives);
    _publicInterface('OES_element_index_uint', {}, OES_element_index_uint);
    _publicInterface('NodeList', {}, NodeList);
    _publicInterface('NodeIterator', {}, NodeIterator);
    _publicObject('NodeFilter', NodeFilter);
    _publicInterface('Navigator', {}, Navigator);
    _publicInterface('NamedNodeMap', {}, NamedNodeMap);
    _publicInterface('MutationRecord', {}, MutationRecord);
    _publicInterface('MimeTypeArray', {}, MimeTypeArray);
    _publicInterface('MimeType', {}, MimeType);
    _publicInterface('MediaQueryList', {}, MediaQueryList);
    _publicInterface('MediaList', {}, MediaList);
    _publicInterface('MediaError', {'MEDIA_ERR_ABORTED' : 1,'MEDIA_ERR_DECODE' : 3,'MEDIA_ERR_NETWORK' : 2,'MEDIA_ERR_SRC_NOT_SUPPORTED' : 4,'MS_MEDIA_ERR_ENCRYPTED' : 5}, MediaError);
    _publicInterface('MSWebViewSettings', {}, MSWebViewSettings);
    _publicInterface('MSStream', {}, MSStream);
    _publicInterface('MSRangeCollection', {}, MSRangeCollection);
    _publicInterface('MSPluginsCollection', {}, MSPluginsCollection);
    _publicInterface('MSMimeTypesCollection', {}, MSMimeTypesCollection);
    _publicInterface('MSMediaKeyError', {'MS_MEDIA_KEYERR_CLIENT' : 2,'MS_MEDIA_KEYERR_DOMAIN' : 6,'MS_MEDIA_KEYERR_HARDWARECHANGE' : 5,'MS_MEDIA_KEYERR_OUTPUT' : 4,'MS_MEDIA_KEYERR_SERVICE' : 3,'MS_MEDIA_KEYERR_UNKNOWN' : 1}, MSMediaKeyError);
    _publicInterface('MSGraphicsTrust', {}, MSGraphicsTrust);
    _publicObject('MSApp', MSApp);
    _publicInterface('Location', {}, Location);
    _publicInterface('ImageData', {}, ImageData);
    _publicInterface('IDBObjectStore', {}, IDBObjectStore);
    _publicInterface('IDBKeyRange', {'bound' : IDBKeyRange.bound,'lowerBound' : IDBKeyRange.lowerBound,'only' : IDBKeyRange.only,'upperBound' : IDBKeyRange.upperBound}, IDBKeyRange);
    _publicInterface('IDBIndex', {}, IDBIndex);
    _publicInterface('IDBFactory', {}, IDBFactory);
    _publicInterface('IDBCursor', {'NEXT' : next,'NEXT_NO_DUPLICATE' : nextunique,'PREV' : prev,'PREV_NO_DUPLICATE' : prevunique}, IDBCursor);
    _publicInterface('History', {}, History);
    _publicInterface('HTMLCollection', {}, HTMLCollection);
    _publicInterface('Geolocation', {}, Geolocation);
    _publicInterface('GamepadButton', {}, GamepadButton);
    _publicInterface('Gamepad', {}, Gamepad);
    _publicInterface('FileList', {}, FileList);
    _publicInterface('External', {}, External);
    _publicInterface('EventTarget', {}, EventTarget);
    _publicInterface('EXT_texture_filter_anisotropic', {'MAX_TEXTURE_MAX_ANISOTROPY_EXT' : 0x84FF,'TEXTURE_MAX_ANISOTROPY_EXT' : 0x84FE}, EXT_texture_filter_anisotropic);
    _publicInterface('DeviceRotationRate', {}, DeviceRotationRate);
    _publicInterface('DeviceAcceleration', {}, DeviceAcceleration);
    _publicInterface('DeferredPermissionRequest', {}, DeferredPermissionRequest);
    _publicInterface('DataTransferItemList', {}, DataTransferItemList);
    _publicInterface('DataTransferItem', {}, DataTransferItem);
    _publicInterface('DataTransfer', {}, DataTransfer);
    _publicInterface('DOMTokenList', {}, DOMTokenList);
    _publicInterface('DOMStringMap', {}, DOMStringMap);
    _publicInterface('DOMStringList', {}, DOMStringList);
    _publicInterface('DOMImplementation', {}, DOMImplementation);
    _publicInterface('DOMException', {'ABORT_ERR' : 20,'DATA_CLONE_ERR' : 25,'DOMSTRING_SIZE_ERR' : 2,'HIERARCHY_REQUEST_ERR' : 3,'INDEX_SIZE_ERR' : 1,'INUSE_ATTRIBUTE_ERR' : 10,'INVALID_ACCESS_ERR' : 15,'INVALID_CHARACTER_ERR' : 5,'INVALID_MODIFICATION_ERR' : 13,'INVALID_NODE_TYPE_ERR' : 24,'INVALID_STATE_ERR' : 11,'NAMESPACE_ERR' : 14,'NETWORK_ERR' : 19,'NOT_FOUND_ERR' : 8,'NOT_SUPPORTED_ERR' : 9,'NO_DATA_ALLOWED_ERR' : 6,'NO_MODIFICATION_ALLOWED_ERR' : 7,'PARSE_ERR' : 81,'QUOTA_EXCEEDED_ERR' : 22,'SECURITY_ERR' : 18,'SERIALIZE_ERR' : 82,'SYNTAX_ERR' : 12,'TIMEOUT_ERR' : 23,'TYPE_MISMATCH_ERR' : 17,'URL_MISMATCH_ERR' : 21,'VALIDATION_ERR' : 16,'WRONG_DOCUMENT_ERR' : 4}, DOMException);
    _publicInterface('DOMError', {}, DOMError);
    _publicInterface('CryptoKeyPair', {}, CryptoKeyPair);
    _publicInterface('CryptoKey', {}, CryptoKey);
    _publicInterface('Crypto', {}, Crypto);
    _publicInterface('Coordinates', {}, Coordinates);
    _publicInterface('Console', {}, Console);
    _publicInterface('ClientRectList', {}, ClientRectList);
    _publicInterface('ClientRect', {}, ClientRect);
    _publicInterface('CanvasRenderingContext2D', {}, CanvasRenderingContext2D);
    _publicInterface('CanvasPattern', {}, CanvasPattern);
    _publicInterface('CanvasGradient', {}, CanvasGradient);
    _publicInterface('CSSStyleDeclaration', {}, CSSStyleDeclaration);
    _publicInterface('CSSRuleList', {}, CSSRuleList);
    _publicInterface('CSSRule', {'CHARSET_RULE' : 2,'FONT_FACE_RULE' : 5,'IMPORT_RULE' : 3,'KEYFRAMES_RULE' : 7,'KEYFRAME_RULE' : 8,'MEDIA_RULE' : 4,'NAMESPACE_RULE' : 10,'PAGE_RULE' : 6,'STYLE_RULE' : 1,'SUPPORTS_RULE' : 12,'UNKNOWN_RULE' : 0,'VIEWPORT_RULE' : 15}, CSSRule);
    _publicObject('CSS', CSS);
    _publicInterface('BarProp', {}, BarProp);
    _publicInterface('AudioTrack', {}, AudioTrack);
    _publicInterface('AudioParam', {}, AudioParam);
    _publicInterface('AudioListener', {}, AudioListener);
    _publicInterface('AudioBuffer', {}, AudioBuffer);
    _publicInterface('ANGLE_instanced_arrays', {'VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE' : 0x88FE}, ANGLE_instanced_arrays);
    _publicInterface('WheelEvent', WheelEventCtor , WheelEvent);
    _publicInterface('PointerEvent', PointerEventCtor , PointerEvent);
    _publicInterface('MSPointerEvent', MSPointerEventCtor , MSPointerEvent);
    _publicInterface('OfflineAudioContext', OfflineAudioContextCtor , OfflineAudioContext);
    _publicInterface('MouseEvent', MouseEventCtor , MouseEvent);
    _publicInterface('KeyboardEvent', KeyboardEventCtor , KeyboardEvent);
    _publicInterface('FocusEvent', FocusEventCtor , FocusEvent);
    _publicInterface('CompositionEvent', CompositionEventCtor , CompositionEvent);
    _publicInterface('XMLHttpRequest', XMLHttpRequestCtor , XMLHttpRequest);
    _publicInterface('Worker', WorkerCtor , Worker);
    _publicInterface('WebSocket', WebSocketCtor , WebSocket);
    _publicInterface('WebGLContextEvent', WebGLContextEventCtor , WebGLContextEvent);
    _publicInterface('UIEvent', UIEventCtor , UIEvent);
    _publicInterface('TextTrackCue', TextTrackCueCtor , TextTrackCue);
    _publicInterface('MediaSource', MediaSourceCtor , MediaSource);
    _publicInterface('MSStreamReader', MSStreamReaderCtor , MSStreamReader);
    _publicInterface('HashChangeEvent', HashChangeEventCtor , HashChangeEvent);
    _publicInterface('FileReader', FileReaderCtor , FileReader);
    _publicInterface('CustomEvent', CustomEventCtor , CustomEvent);
    _publicInterface('CommandEvent', CommandEventCtor , CommandEvent);
    _publicInterface('ClipboardEvent', ClipboardEventCtor , ClipboardEvent);
    _publicInterface('AudioContext', AudioContextCtor , AudioContext);
    _publicInterface('AriaRequestEvent', AriaRequestEventCtor , AriaRequestEvent);
    _publicInterface('XSLTProcessor', XSLTProcessorCtor , XSLTProcessor);
    _publicInterface('XPathEvaluator', XPathEvaluatorCtor , XPathEvaluator);
    _publicInterface('XMLSerializer', XMLSerializerCtor , XMLSerializer);
    _publicInterface('WebKitPoint', WebKitPointCtor , WebKitPoint);
    _publicInterface('WebKitCSSMatrix', WebKitCSSMatrixCtor , WebKitCSSMatrix);
    _publicInterface('MutationObserver', MutationObserverCtor , MutationObserver);
    _publicInterface('MessageChannel', MessageChannelCtor , MessageChannel);
    _publicInterface('MSMediaKeys', MSMediaKeysCtor , MSMediaKeys);
    _publicInterface('MSGesture', MSGestureCtor , MSGesture);
    _publicInterface('MSCSSMatrix', MSCSSMatrixCtor , MSCSSMatrix);
    _publicInterface('MSBlobBuilder', MSBlobBuilderCtor , MSBlobBuilder);
    _publicInterface('FormData', FormDataCtor , FormData);
    _publicInterface('Event', EventCtor , Event);
    _publicInterface('DOMParser', DOMParserCtor , DOMParser);
    _publicInterface('Blob', BlobCtor , Blob);


    function HTMLOptionElementFactory (text, value, defaultSelected, selected) {
        /// <signature>
        /// <param name='text' type='String' optional='true' />
        /// <param name='value' type='String' optional='true' />
        /// <param name='defaultSelected' type='Boolean' optional='true' />
        /// <param name='selected' type='Boolean' optional='true' />
        /// </signature>
        return Object.create(HTMLOptionElement);
    }

    function HTMLImageElementFactory(width, height) {
        /// <signature>
        /// <param name='width' type='Number' optional='true' />
        /// <param name='height' type='Number' optional='true' />
        /// </signature>
        return Object.create(HTMLImageElement);
    }

    function HTMLAudioElementFactory(src) {
        /// <signature>
        /// <param name='src' type='String' optional='true' />
        /// </signature>
        return Object.create(HTMLAudioElement);
    }
    
    _publicInterface('Option', HTMLOptionElementFactory, HTMLOptionElement);
    _publicInterface('Image', HTMLImageElementFactory, HTMLImageElement);
    _publicInterface('Audio', HTMLAudioElementFactory, HTMLAudioElement);
    
    intellisense.annotate(window, {
        Worker: function() {
            /// <signature>
            /// <param name='stringUrl' type='String' />
            /// </signature>
        },
        MSCSSMatrix: function () {
            /// <signature>
            /// <param name='text' type='String' optional='true' />
            /// </signature>
        },
        WebSocket: function() {
            /// <signature>
            /// <param name='url' type='String' />
            /// <param name='protocols' type='String' optional='true' />
            /// </signature>
            /// <signature>
            /// <param name='url' type='String' />
            /// <param name='protocols' type='Array' elementType='String' optional='true' />
            /// </signature>
        }
    });    

    window.Option.create = window.Option;
    window.Image.create = window.Image;
    window.XDomainRequest.create = window.XDomainRequest;
    window.XMLHttpRequest.create = window.XMLHttpRequest;

})();

function _$getActiveXObject(className, location) {
    if ((/XMLHTTP/i).test(className))
        return new window.XMLHttpRequest();
}
