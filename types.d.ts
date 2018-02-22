export type Param = {
    "name": string;
    "type": string;
    "optional"?: string;
    "variadic"?: string;
    "nullable"?: string;
};
export type Member = {
    "name": string;
    "type": string;
    "default"?: string;
    "nullable"?: string;
    "type-original"?: string;
    "required"?: string;
};

export type Property = {
    "name": string;
    "event-handler"?: string;
    "type": string;
    "read-only"?: string;
    "nullable"?: string;
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
};

export type Event = {
    "name": string;
    "dispatch"?: string;
    "skips-window"?: string;
    "type": string;
    "bubbles"?: string;
    "cancelable"?: string;
    "follows"?: string;
    "precedes"?: string;
    "tags"?: string;
    "aliases"?: string;
};

export type Method = {
    "name": string;
    "type": string;
    "tags"?: string;
    "getter"?: string;
    "static"?: string;
    "stringifier"?: string;
    "nullable"?: string;
    "serializer"?: string;
    "serializer-info"?: string;
    "param"?: Param[];
    "comment"?: string;
    "override-signatures"?: string[];
    "additional-signatures"?: string[];
};

export type CallbackFunction = {
    "name": string;
    "callback": string;
    "type": string;
    "param"?: Param[];
    "tags"?: string;
};

export type Constructor = {
    "param"?: Param[];
};

export type NamedConstructor = {
    "name": string;
    "param": Param[];
};

export type Constant = {
    "name": string;
    "type": string;
    "type-original"?: string;
    "value": string;
    "tags"?: string
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
}

export type Interface = {
    "name": string;
    "extends": string;
    "constants"?: {
        "constant": Constant[];
    };
    "methods": {
        "method": Method[];
    };
    "events"?: {
        "event": Event[];
    };
    "properties"?: {
        "property": Property[]
    };
    "constructor"?: Constructor;
    "secure-context"?: string;
    "implements"?: string[];
    "static"?: undefined;
    "anonymous-methods"?: {
        "method": Method[];
    };
    "anonymous-content-attributes"?: {
        "parsedattribute": ParsedAttribute[]
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
};

export type Enum = {
    "name": string;
    "value": string[];
};

export type TypeDef = {
    "new-type": string;
    "type": string;
};

export type Dictionary = {
    "name": string;
    "extends": string;
    "members": {
        "member": Member[];
    };
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
    "mixin-interfaces"?: {
        "interface": Record<string, Interface>
    };
    "typedefs"?: {
        "typedef": TypeDef[];
    };
};
