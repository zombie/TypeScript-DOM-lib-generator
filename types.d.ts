export type Param = {
    "name": string;
    "type": string;
    "type-original": string;
    "optional"?: 1;
    "variadic"?: string;
    "nullable"?: 1;
    "treat-null-as"?: string;
};

export type Signature = {
    "type": string,
    "param"?: Param[];
    "type-original": "any";
    "param-min-required"?: number,
    "nullable"?: 1;
};

export type Member = {
    "name": string;
    "type": string;
    "type-original": string;
    "default"?: string;
    "nullable"?: 1;
    "required"?: 1;
    "override-type"?: string;
    "specs"?: string;
};

export type Property = {
    "name": string;
    "event-handler"?: string;
    "type": string;
    "read-only"?: 1;
    "nullable"?: 1;
    "replaceable"?: string;
    "put-forwards"?: string;
    "stringifier"?: string;
    "tags"?: string;
    "type-original"?: string;
    "property-descriptor-not-enumerable"?: string;
    "content-attribute"?: string;
    "content-attribute-reflects"?: string;
    "content-attribute-value-syntax"?: string;
    "content-attribute-enum-values"?: string;
    "content-attribute-aliases"?: string;
    "content-attribute-boolean"?: string;
    "css-property"?: string;
    "css-property-enum-values"?: string;
    "css-property-initial"?: string;
    "css-property-value-syntax"?: string;
    "css-property-shorthand"?: string;
    "css-property-subproperties"?: string;
    "css-property-animatable"?: string;
    "css-property-aliases"?: string;
    "lenient-this"?: string;
    "treat-null-as"?: string;
    "event-handler-map-to-window"?: string;
    "static"?: string;
    "comment"?: string;
    "override-type"?: string;
    "required"?: string;
    "specs"?: string;
    "deprecated"?: 1;
    "interop"?: 1;
    "exposed"?: string;
    "constant"?: 1;
};

export type Event = {
    "name": string;
    "dispatch"?: string;
    "skips-window"?: string;
    "type": string;
    "bubbles"?: 1;
    "cancelable"?: 1;
    "follows"?: string;
    "precedes"?: string;
    "tags"?: string;
    "aliases"?: string;
    "specs"?: string;
};

export type Method = {
    "name": string;
    "tags"?: string;
    "getter"?: string;
    "static"?: string;
    "stringifier"?: string;
    "nullable"?: 1;
    "serializer"?: string;
    "serializer-info"?: string;
    "comment"?: string;
    "override-signatures"?: string[];
    "additional-signatures"?: string[];
    "specs"?: string;
    "exposed"?: string;
    "deprecated"?: 1;
    "signature": Signature[];
};

export type CallbackFunction = {
    "name": string;
    "callback": 1;
    "type": string;
    "type-original"?: string;
    "signature": Signature[];
    "tags"?: string;
    "override-signatures"?: string[];
    "specs"?: string;
};

export type Constructor = {
    "signature": Signature[];
    "comment"?: string;
    "specs"?: string;
};

export type NamedConstructor = {
    "name": string;
    "signature": Signature[];
    "specs"?: string;
};

export type Constant = {
    "name": string;
    "type": string;
    "type-original"?: string;
    "value": string;
    "tags"?: string
    "exposed"?: string;
    "specs"?: string;
};

export type ParsedAttribute ={
    "enum-values"?: string;
    "name": string;
    "value-syntax"?: string;
};

export type Element = {
    "name": string;
    "namespace"?: string;
    "html-self-closing"?: string;
    "specs"?: string;
};

export type Interface = {
    "name": string;
    "extends": string;
    "constants"?: {
        "constant": Record<string, Constant>;
    };
    "methods": {
        "method": Record<string, Method>;
    };
    "events"?: {
        "event": Event[];
    };
    "properties"?: {
        "property": Record<string, Property>;
    };
    "constructor"?: Constructor;
    "secure-context"?: string;
    "implements"?: string[];
    "static"?: undefined;
    "anonymous-methods"?: {
        "method": Method[];
    };
    "anonymous-content-attributes"?: {
        "parsedattribute": ParsedAttribute[];
    };
    "element"?: Element[];
    "named-constructor"?: NamedConstructor;
    "override-builtins"?: string;
    "exposed"?: string;
    "tags"?: string;
    "implicit-this"?: string;
    "primary-global"?: string;
    "no-interface-object"?: string;
    "global"?: string;
    "type-parameters"?: string[];
    "override-constructor-signatures"?: string[];
    "overide-index-signatures"?: string[];
    "specs"?: string;
};

export type Enum = {
    "name": string;
    "value": string[];
    "specs"?: string;
};

export type TypeDef = {
    "new-type": string;
    "type": string;
    "override-type"?: string;
};

export type Dictionary = {
    "name": string;
    "extends": string;
    "members": {
        "member": Record<string, Member>;
    };
    "specs"?: string;
    "type-parameters"?: string[];
};

export type WebIdl = {
    "callback-functions"?: {
        "callback-function": Record<string, CallbackFunction>;
    },
    "callback-interfaces"?: {
        "interface": Record<string, Interface>;
    };
    "dictionaries"?: {
        "dictionary": Record<string, Dictionary>;
    };
    "enums"?: {
        "enum": Record<string, Enum>;
    };
    "interfaces"?: {
        "interface": Record<string, Interface>;
    };
    "mixins"?: {
        "mixin": Record<string, Interface>;
    };
    "typedefs"?: {
        "typedef": TypeDef[];
    };
};
