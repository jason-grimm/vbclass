this.VBClass || (function(window){    /*! (C) WebReflection - Mit Style License */    var        Object = window.Object,        hasOwnProperty = {}.hasOwnProperty,        create = Object.create,        freeze = Object.preventExtensions || Object.freeze || Object.seal || function() {}    ;    window.VBClass = function VBClass(name, definition) {        if (hasOwnProperty.call(window, name)) {            throw "Class redefined";        }        var            creator = {},            current, key        ;        for (key in definition) {            if (hasOwnProperty.call(definition, key) && key != "constructor") {                current = definition[key];                creator[key] = {                    enumerable: true,                    configurable: false                };                if (hasOwnProperty.call(current, "value")) {                    if (typeof(creator[key].value = current.value) != "function") {                        creator[key].writable = true;                    }                } else {                    if (hasOwnProperty.call(current, "get")) {                        creator[key].get = current.get;                    }                    if (hasOwnProperty.call(current, "set")) {                        creator[key].set = current.set;                    }                }            }        }        return (window[name] = function(freeze, create, creator, constructor){            return constructor ?                function VBClass() {                    var object = create(null, creator);                    constructor.apply(object, arguments);                    freeze(object);                    return object;                } :                function VBClass() {                    var object = create(null, creator);                    freeze(object);                    return object;                }            ;        }(            freeze, create, creator,            hasOwnProperty.call(definition, "constructor") && definition.constructor.value        ));    };}(this));