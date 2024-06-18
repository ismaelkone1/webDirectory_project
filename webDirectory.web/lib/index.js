(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/handlebars/dist/cjs/handlebars/utils.js
  var require_utils = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/utils.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.extend = extend;
      exports.indexOf = indexOf;
      exports.escapeExpression = escapeExpression;
      exports.isEmpty = isEmpty;
      exports.createFrame = createFrame;
      exports.blockParams = blockParams;
      exports.appendContextPath = appendContextPath;
      var escape = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
        "=": "&#x3D;"
      };
      var badChars = /[&<>"'`=]/g;
      var possible = /[&<>"'`=]/;
      function escapeChar(chr) {
        return escape[chr];
      }
      function extend(obj) {
        for (var i = 1; i < arguments.length; i++) {
          for (var key in arguments[i]) {
            if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
              obj[key] = arguments[i][key];
            }
          }
        }
        return obj;
      }
      var toString = Object.prototype.toString;
      exports.toString = toString;
      var isFunction = function isFunction2(value) {
        return typeof value === "function";
      };
      if (isFunction(/x/)) {
        exports.isFunction = isFunction = function(value) {
          return typeof value === "function" && toString.call(value) === "[object Function]";
        };
      }
      exports.isFunction = isFunction;
      var isArray = Array.isArray || function(value) {
        return value && typeof value === "object" ? toString.call(value) === "[object Array]" : false;
      };
      exports.isArray = isArray;
      function indexOf(array, value) {
        for (var i = 0, len = array.length; i < len; i++) {
          if (array[i] === value) {
            return i;
          }
        }
        return -1;
      }
      function escapeExpression(string) {
        if (typeof string !== "string") {
          if (string && string.toHTML) {
            return string.toHTML();
          } else if (string == null) {
            return "";
          } else if (!string) {
            return string + "";
          }
          string = "" + string;
        }
        if (!possible.test(string)) {
          return string;
        }
        return string.replace(badChars, escapeChar);
      }
      function isEmpty(value) {
        if (!value && value !== 0) {
          return true;
        } else if (isArray(value) && value.length === 0) {
          return true;
        } else {
          return false;
        }
      }
      function createFrame(object) {
        var frame = extend({}, object);
        frame._parent = object;
        return frame;
      }
      function blockParams(params, ids) {
        params.path = ids;
        return params;
      }
      function appendContextPath(contextPath, id) {
        return (contextPath ? contextPath + "." : "") + id;
      }
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/exception.js
  var require_exception = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/exception.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      var errorProps = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
      function Exception(message, node) {
        var loc = node && node.loc, line = void 0, endLineNumber = void 0, column = void 0, endColumn = void 0;
        if (loc) {
          line = loc.start.line;
          endLineNumber = loc.end.line;
          column = loc.start.column;
          endColumn = loc.end.column;
          message += " - " + line + ":" + column;
        }
        var tmp = Error.prototype.constructor.call(this, message);
        for (var idx = 0; idx < errorProps.length; idx++) {
          this[errorProps[idx]] = tmp[errorProps[idx]];
        }
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, Exception);
        }
        try {
          if (loc) {
            this.lineNumber = line;
            this.endLineNumber = endLineNumber;
            if (Object.defineProperty) {
              Object.defineProperty(this, "column", {
                value: column,
                enumerable: true
              });
              Object.defineProperty(this, "endColumn", {
                value: endColumn,
                enumerable: true
              });
            } else {
              this.column = column;
              this.endColumn = endColumn;
            }
          }
        } catch (nop) {
        }
      }
      Exception.prototype = new Error();
      exports["default"] = Exception;
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js
  var require_block_helper_missing = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      var _utils = require_utils();
      exports["default"] = function(instance) {
        instance.registerHelper("blockHelperMissing", function(context, options) {
          var inverse = options.inverse, fn = options.fn;
          if (context === true) {
            return fn(this);
          } else if (context === false || context == null) {
            return inverse(this);
          } else if (_utils.isArray(context)) {
            if (context.length > 0) {
              if (options.ids) {
                options.ids = [options.name];
              }
              return instance.helpers.each(context, options);
            } else {
              return inverse(this);
            }
          } else {
            if (options.data && options.ids) {
              var data = _utils.createFrame(options.data);
              data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
              options = { data };
            }
            return fn(context, options);
          }
        });
      };
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/helpers/each.js
  var require_each = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/helpers/each.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _utils = require_utils();
      var _exception = require_exception();
      var _exception2 = _interopRequireDefault(_exception);
      exports["default"] = function(instance) {
        instance.registerHelper("each", function(context, options) {
          if (!options) {
            throw new _exception2["default"]("Must pass iterator to #each");
          }
          var fn = options.fn, inverse = options.inverse, i = 0, ret = "", data = void 0, contextPath = void 0;
          if (options.data && options.ids) {
            contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + ".";
          }
          if (_utils.isFunction(context)) {
            context = context.call(this);
          }
          if (options.data) {
            data = _utils.createFrame(options.data);
          }
          function execIteration(field, index, last) {
            if (data) {
              data.key = field;
              data.index = index;
              data.first = index === 0;
              data.last = !!last;
              if (contextPath) {
                data.contextPath = contextPath + field;
              }
            }
            ret = ret + fn(context[field], {
              data,
              blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
            });
          }
          if (context && typeof context === "object") {
            if (_utils.isArray(context)) {
              for (var j = context.length; i < j; i++) {
                if (i in context) {
                  execIteration(i, i, i === context.length - 1);
                }
              }
            } else if (typeof Symbol === "function" && context[Symbol.iterator]) {
              var newContext = [];
              var iterator = context[Symbol.iterator]();
              for (var it = iterator.next(); !it.done; it = iterator.next()) {
                newContext.push(it.value);
              }
              context = newContext;
              for (var j = context.length; i < j; i++) {
                execIteration(i, i, i === context.length - 1);
              }
            } else {
              (function() {
                var priorKey = void 0;
                Object.keys(context).forEach(function(key) {
                  if (priorKey !== void 0) {
                    execIteration(priorKey, i - 1);
                  }
                  priorKey = key;
                  i++;
                });
                if (priorKey !== void 0) {
                  execIteration(priorKey, i - 1, true);
                }
              })();
            }
          }
          if (i === 0) {
            ret = inverse(this);
          }
          return ret;
        });
      };
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js
  var require_helper_missing = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _exception = require_exception();
      var _exception2 = _interopRequireDefault(_exception);
      exports["default"] = function(instance) {
        instance.registerHelper("helperMissing", function() {
          if (arguments.length === 1) {
            return void 0;
          } else {
            throw new _exception2["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
          }
        });
      };
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/helpers/if.js
  var require_if = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/helpers/if.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _utils = require_utils();
      var _exception = require_exception();
      var _exception2 = _interopRequireDefault(_exception);
      exports["default"] = function(instance) {
        instance.registerHelper("if", function(conditional, options) {
          if (arguments.length != 2) {
            throw new _exception2["default"]("#if requires exactly one argument");
          }
          if (_utils.isFunction(conditional)) {
            conditional = conditional.call(this);
          }
          if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
            return options.inverse(this);
          } else {
            return options.fn(this);
          }
        });
        instance.registerHelper("unless", function(conditional, options) {
          if (arguments.length != 2) {
            throw new _exception2["default"]("#unless requires exactly one argument");
          }
          return instance.helpers["if"].call(this, conditional, {
            fn: options.inverse,
            inverse: options.fn,
            hash: options.hash
          });
        });
      };
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/helpers/log.js
  var require_log = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/helpers/log.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = function(instance) {
        instance.registerHelper("log", function() {
          var args = [void 0], options = arguments[arguments.length - 1];
          for (var i = 0; i < arguments.length - 1; i++) {
            args.push(arguments[i]);
          }
          var level = 1;
          if (options.hash.level != null) {
            level = options.hash.level;
          } else if (options.data && options.data.level != null) {
            level = options.data.level;
          }
          args[0] = level;
          instance.log.apply(instance, args);
        });
      };
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js
  var require_lookup = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = function(instance) {
        instance.registerHelper("lookup", function(obj, field, options) {
          if (!obj) {
            return obj;
          }
          return options.lookupProperty(obj, field);
        });
      };
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/helpers/with.js
  var require_with = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/helpers/with.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _utils = require_utils();
      var _exception = require_exception();
      var _exception2 = _interopRequireDefault(_exception);
      exports["default"] = function(instance) {
        instance.registerHelper("with", function(context, options) {
          if (arguments.length != 2) {
            throw new _exception2["default"]("#with requires exactly one argument");
          }
          if (_utils.isFunction(context)) {
            context = context.call(this);
          }
          var fn = options.fn;
          if (!_utils.isEmpty(context)) {
            var data = options.data;
            if (options.data && options.ids) {
              data = _utils.createFrame(options.data);
              data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
            }
            return fn(context, {
              data,
              blockParams: _utils.blockParams([context], [data && data.contextPath])
            });
          } else {
            return options.inverse(this);
          }
        });
      };
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/helpers.js
  var require_helpers = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/helpers.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.registerDefaultHelpers = registerDefaultHelpers;
      exports.moveHelperToHooks = moveHelperToHooks;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _helpersBlockHelperMissing = require_block_helper_missing();
      var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
      var _helpersEach = require_each();
      var _helpersEach2 = _interopRequireDefault(_helpersEach);
      var _helpersHelperMissing = require_helper_missing();
      var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
      var _helpersIf = require_if();
      var _helpersIf2 = _interopRequireDefault(_helpersIf);
      var _helpersLog = require_log();
      var _helpersLog2 = _interopRequireDefault(_helpersLog);
      var _helpersLookup = require_lookup();
      var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
      var _helpersWith = require_with();
      var _helpersWith2 = _interopRequireDefault(_helpersWith);
      function registerDefaultHelpers(instance) {
        _helpersBlockHelperMissing2["default"](instance);
        _helpersEach2["default"](instance);
        _helpersHelperMissing2["default"](instance);
        _helpersIf2["default"](instance);
        _helpersLog2["default"](instance);
        _helpersLookup2["default"](instance);
        _helpersWith2["default"](instance);
      }
      function moveHelperToHooks(instance, helperName, keepHelper) {
        if (instance.helpers[helperName]) {
          instance.hooks[helperName] = instance.helpers[helperName];
          if (!keepHelper) {
            delete instance.helpers[helperName];
          }
        }
      }
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js
  var require_inline = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      var _utils = require_utils();
      exports["default"] = function(instance) {
        instance.registerDecorator("inline", function(fn, props, container, options) {
          var ret = fn;
          if (!props.partials) {
            props.partials = {};
            ret = function(context, options2) {
              var original = container.partials;
              container.partials = _utils.extend({}, original, props.partials);
              var ret2 = fn(context, options2);
              container.partials = original;
              return ret2;
            };
          }
          props.partials[options.args[0]] = options.fn;
          return ret;
        });
      };
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/decorators.js
  var require_decorators = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/decorators.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.registerDefaultDecorators = registerDefaultDecorators;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _decoratorsInline = require_inline();
      var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
      function registerDefaultDecorators(instance) {
        _decoratorsInline2["default"](instance);
      }
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/logger.js
  var require_logger = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/logger.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      var _utils = require_utils();
      var logger = {
        methodMap: ["debug", "info", "warn", "error"],
        level: "info",
        // Maps a given level value to the `methodMap` indexes above.
        lookupLevel: function lookupLevel(level) {
          if (typeof level === "string") {
            var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
            if (levelMap >= 0) {
              level = levelMap;
            } else {
              level = parseInt(level, 10);
            }
          }
          return level;
        },
        // Can be overridden in the host environment
        log: function log(level) {
          level = logger.lookupLevel(level);
          if (typeof console !== "undefined" && logger.lookupLevel(logger.level) <= level) {
            var method = logger.methodMap[level];
            if (!console[method]) {
              method = "log";
            }
            for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              message[_key - 1] = arguments[_key];
            }
            console[method].apply(console, message);
          }
        }
      };
      exports["default"] = logger;
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js
  var require_create_new_lookup_object = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/internal/create-new-lookup-object.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.createNewLookupObject = createNewLookupObject;
      var _utils = require_utils();
      function createNewLookupObject() {
        for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
          sources[_key] = arguments[_key];
        }
        return _utils.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(sources));
      }
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js
  var require_proto_access = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/internal/proto-access.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.createProtoAccessControl = createProtoAccessControl;
      exports.resultIsAllowed = resultIsAllowed;
      exports.resetLoggedProperties = resetLoggedProperties;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _createNewLookupObject = require_create_new_lookup_object();
      var _logger = require_logger();
      var _logger2 = _interopRequireDefault(_logger);
      var loggedProperties = /* @__PURE__ */ Object.create(null);
      function createProtoAccessControl(runtimeOptions) {
        var defaultMethodWhiteList = /* @__PURE__ */ Object.create(null);
        defaultMethodWhiteList["constructor"] = false;
        defaultMethodWhiteList["__defineGetter__"] = false;
        defaultMethodWhiteList["__defineSetter__"] = false;
        defaultMethodWhiteList["__lookupGetter__"] = false;
        var defaultPropertyWhiteList = /* @__PURE__ */ Object.create(null);
        defaultPropertyWhiteList["__proto__"] = false;
        return {
          properties: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
            defaultValue: runtimeOptions.allowProtoPropertiesByDefault
          },
          methods: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
            defaultValue: runtimeOptions.allowProtoMethodsByDefault
          }
        };
      }
      function resultIsAllowed(result, protoAccessControl, propertyName) {
        if (typeof result === "function") {
          return checkWhiteList(protoAccessControl.methods, propertyName);
        } else {
          return checkWhiteList(protoAccessControl.properties, propertyName);
        }
      }
      function checkWhiteList(protoAccessControlForType, propertyName) {
        if (protoAccessControlForType.whitelist[propertyName] !== void 0) {
          return protoAccessControlForType.whitelist[propertyName] === true;
        }
        if (protoAccessControlForType.defaultValue !== void 0) {
          return protoAccessControlForType.defaultValue;
        }
        logUnexpecedPropertyAccessOnce(propertyName);
        return false;
      }
      function logUnexpecedPropertyAccessOnce(propertyName) {
        if (loggedProperties[propertyName] !== true) {
          loggedProperties[propertyName] = true;
          _logger2["default"].log("error", 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
        }
      }
      function resetLoggedProperties() {
        Object.keys(loggedProperties).forEach(function(propertyName) {
          delete loggedProperties[propertyName];
        });
      }
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/base.js
  var require_base = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/base.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.HandlebarsEnvironment = HandlebarsEnvironment;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _utils = require_utils();
      var _exception = require_exception();
      var _exception2 = _interopRequireDefault(_exception);
      var _helpers = require_helpers();
      var _decorators = require_decorators();
      var _logger = require_logger();
      var _logger2 = _interopRequireDefault(_logger);
      var _internalProtoAccess = require_proto_access();
      var VERSION = "4.7.8";
      exports.VERSION = VERSION;
      var COMPILER_REVISION = 8;
      exports.COMPILER_REVISION = COMPILER_REVISION;
      var LAST_COMPATIBLE_COMPILER_REVISION = 7;
      exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
      var REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        // 1.0.rc.2 is actually rev2 but doesn't report it
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: "== 1.x.x",
        5: "== 2.0.0-alpha.x",
        6: ">= 2.0.0-beta.1",
        7: ">= 4.0.0 <4.3.0",
        8: ">= 4.3.0"
      };
      exports.REVISION_CHANGES = REVISION_CHANGES;
      var objectType = "[object Object]";
      function HandlebarsEnvironment(helpers, partials, decorators) {
        this.helpers = helpers || {};
        this.partials = partials || {};
        this.decorators = decorators || {};
        _helpers.registerDefaultHelpers(this);
        _decorators.registerDefaultDecorators(this);
      }
      HandlebarsEnvironment.prototype = {
        constructor: HandlebarsEnvironment,
        logger: _logger2["default"],
        log: _logger2["default"].log,
        registerHelper: function registerHelper(name, fn) {
          if (_utils.toString.call(name) === objectType) {
            if (fn) {
              throw new _exception2["default"]("Arg not supported with multiple helpers");
            }
            _utils.extend(this.helpers, name);
          } else {
            this.helpers[name] = fn;
          }
        },
        unregisterHelper: function unregisterHelper(name) {
          delete this.helpers[name];
        },
        registerPartial: function registerPartial(name, partial) {
          if (_utils.toString.call(name) === objectType) {
            _utils.extend(this.partials, name);
          } else {
            if (typeof partial === "undefined") {
              throw new _exception2["default"]('Attempting to register a partial called "' + name + '" as undefined');
            }
            this.partials[name] = partial;
          }
        },
        unregisterPartial: function unregisterPartial(name) {
          delete this.partials[name];
        },
        registerDecorator: function registerDecorator(name, fn) {
          if (_utils.toString.call(name) === objectType) {
            if (fn) {
              throw new _exception2["default"]("Arg not supported with multiple decorators");
            }
            _utils.extend(this.decorators, name);
          } else {
            this.decorators[name] = fn;
          }
        },
        unregisterDecorator: function unregisterDecorator(name) {
          delete this.decorators[name];
        },
        /**
         * Reset the memory of illegal property accesses that have already been logged.
         * @deprecated should only be used in handlebars test-cases
         */
        resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
          _internalProtoAccess.resetLoggedProperties();
        }
      };
      var log = _logger2["default"].log;
      exports.log = log;
      exports.createFrame = _utils.createFrame;
      exports.logger = _logger2["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/safe-string.js
  var require_safe_string = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/safe-string.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      function SafeString(string) {
        this.string = string;
      }
      SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
        return "" + this.string;
      };
      exports["default"] = SafeString;
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js
  var require_wrapHelper = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/internal/wrapHelper.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.wrapHelper = wrapHelper;
      function wrapHelper(helper, transformOptionsFn) {
        if (typeof helper !== "function") {
          return helper;
        }
        var wrapper = function wrapper2() {
          var options = arguments[arguments.length - 1];
          arguments[arguments.length - 1] = transformOptionsFn(options);
          return helper.apply(this, arguments);
        };
        return wrapper;
      }
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/runtime.js
  var require_runtime = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/runtime.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.checkRevision = checkRevision;
      exports.template = template3;
      exports.wrapProgram = wrapProgram;
      exports.resolvePartial = resolvePartial;
      exports.invokePartial = invokePartial;
      exports.noop = noop;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj["default"] = obj;
          return newObj;
        }
      }
      var _utils = require_utils();
      var Utils = _interopRequireWildcard(_utils);
      var _exception = require_exception();
      var _exception2 = _interopRequireDefault(_exception);
      var _base = require_base();
      var _helpers = require_helpers();
      var _internalWrapHelper = require_wrapHelper();
      var _internalProtoAccess = require_proto_access();
      function checkRevision(compilerInfo) {
        var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
        if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
          return;
        }
        if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
          var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
          throw new _exception2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
        } else {
          throw new _exception2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").");
        }
      }
      function template3(templateSpec, env) {
        if (!env) {
          throw new _exception2["default"]("No environment passed to template");
        }
        if (!templateSpec || !templateSpec.main) {
          throw new _exception2["default"]("Unknown template object: " + typeof templateSpec);
        }
        templateSpec.main.decorator = templateSpec.main_d;
        env.VM.checkRevision(templateSpec.compiler);
        var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
        function invokePartialWrapper(partial, context, options) {
          if (options.hash) {
            context = Utils.extend({}, context, options.hash);
            if (options.ids) {
              options.ids[0] = true;
            }
          }
          partial = env.VM.resolvePartial.call(this, partial, context, options);
          var extendedOptions = Utils.extend({}, options, {
            hooks: this.hooks,
            protoAccessControl: this.protoAccessControl
          });
          var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
          if (result == null && env.compile) {
            options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
            result = options.partials[options.name](context, extendedOptions);
          }
          if (result != null) {
            if (options.indent) {
              var lines = result.split("\n");
              for (var i = 0, l = lines.length; i < l; i++) {
                if (!lines[i] && i + 1 === l) {
                  break;
                }
                lines[i] = options.indent + lines[i];
              }
              result = lines.join("\n");
            }
            return result;
          } else {
            throw new _exception2["default"]("The partial " + options.name + " could not be compiled when running in runtime-only mode");
          }
        }
        var container = {
          strict: function strict(obj, name, loc) {
            if (!obj || !(name in obj)) {
              throw new _exception2["default"]('"' + name + '" not defined in ' + obj, {
                loc
              });
            }
            return container.lookupProperty(obj, name);
          },
          lookupProperty: function lookupProperty(parent, propertyName) {
            var result = parent[propertyName];
            if (result == null) {
              return result;
            }
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return result;
            }
            if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
              return result;
            }
            return void 0;
          },
          lookup: function lookup(depths, name) {
            var len = depths.length;
            for (var i = 0; i < len; i++) {
              var result = depths[i] && container.lookupProperty(depths[i], name);
              if (result != null) {
                return depths[i][name];
              }
            }
          },
          lambda: function lambda(current, context) {
            return typeof current === "function" ? current.call(context) : current;
          },
          escapeExpression: Utils.escapeExpression,
          invokePartial: invokePartialWrapper,
          fn: function fn(i) {
            var ret2 = templateSpec[i];
            ret2.decorator = templateSpec[i + "_d"];
            return ret2;
          },
          programs: [],
          program: function program(i, data, declaredBlockParams, blockParams, depths) {
            var programWrapper = this.programs[i], fn = this.fn(i);
            if (data || depths || blockParams || declaredBlockParams) {
              programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
            } else if (!programWrapper) {
              programWrapper = this.programs[i] = wrapProgram(this, i, fn);
            }
            return programWrapper;
          },
          data: function data(value, depth) {
            while (value && depth--) {
              value = value._parent;
            }
            return value;
          },
          mergeIfNeeded: function mergeIfNeeded(param, common) {
            var obj = param || common;
            if (param && common && param !== common) {
              obj = Utils.extend({}, common, param);
            }
            return obj;
          },
          // An empty object to use as replacement for null-contexts
          nullContext: Object.seal({}),
          noop: env.VM.noop,
          compilerInfo: templateSpec.compiler
        };
        function ret(context) {
          var options = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
          var data = options.data;
          ret._setup(options);
          if (!options.partial && templateSpec.useData) {
            data = initData(context, data);
          }
          var depths = void 0, blockParams = templateSpec.useBlockParams ? [] : void 0;
          if (templateSpec.useDepths) {
            if (options.depths) {
              depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
            } else {
              depths = [context];
            }
          }
          function main(context2) {
            return "" + templateSpec.main(container, context2, container.helpers, container.partials, data, blockParams, depths);
          }
          main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
          return main(context, options);
        }
        ret.isTop = true;
        ret._setup = function(options) {
          if (!options.partial) {
            var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
            wrapHelpersToPassLookupProperty(mergedHelpers, container);
            container.helpers = mergedHelpers;
            if (templateSpec.usePartial) {
              container.partials = container.mergeIfNeeded(options.partials, env.partials);
            }
            if (templateSpec.usePartial || templateSpec.useDecorators) {
              container.decorators = Utils.extend({}, env.decorators, options.decorators);
            }
            container.hooks = {};
            container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
            var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
            _helpers.moveHelperToHooks(container, "helperMissing", keepHelperInHelpers);
            _helpers.moveHelperToHooks(container, "blockHelperMissing", keepHelperInHelpers);
          } else {
            container.protoAccessControl = options.protoAccessControl;
            container.helpers = options.helpers;
            container.partials = options.partials;
            container.decorators = options.decorators;
            container.hooks = options.hooks;
          }
        };
        ret._child = function(i, data, blockParams, depths) {
          if (templateSpec.useBlockParams && !blockParams) {
            throw new _exception2["default"]("must pass block params");
          }
          if (templateSpec.useDepths && !depths) {
            throw new _exception2["default"]("must pass parent depths");
          }
          return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
        };
        return ret;
      }
      function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
        function prog(context) {
          var options = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
          var currentDepths = depths;
          if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
            currentDepths = [context].concat(depths);
          }
          return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
        }
        prog = executeDecorators(fn, prog, container, depths, data, blockParams);
        prog.program = i;
        prog.depth = depths ? depths.length : 0;
        prog.blockParams = declaredBlockParams || 0;
        return prog;
      }
      function resolvePartial(partial, context, options) {
        if (!partial) {
          if (options.name === "@partial-block") {
            partial = options.data["partial-block"];
          } else {
            partial = options.partials[options.name];
          }
        } else if (!partial.call && !options.name) {
          options.name = partial;
          partial = options.partials[partial];
        }
        return partial;
      }
      function invokePartial(partial, context, options) {
        var currentPartialBlock = options.data && options.data["partial-block"];
        options.partial = true;
        if (options.ids) {
          options.data.contextPath = options.ids[0] || options.data.contextPath;
        }
        var partialBlock = void 0;
        if (options.fn && options.fn !== noop) {
          (function() {
            options.data = _base.createFrame(options.data);
            var fn = options.fn;
            partialBlock = options.data["partial-block"] = function partialBlockWrapper(context2) {
              var options2 = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
              options2.data = _base.createFrame(options2.data);
              options2.data["partial-block"] = currentPartialBlock;
              return fn(context2, options2);
            };
            if (fn.partials) {
              options.partials = Utils.extend({}, options.partials, fn.partials);
            }
          })();
        }
        if (partial === void 0 && partialBlock) {
          partial = partialBlock;
        }
        if (partial === void 0) {
          throw new _exception2["default"]("The partial " + options.name + " could not be found");
        } else if (partial instanceof Function) {
          return partial(context, options);
        }
      }
      function noop() {
        return "";
      }
      function initData(context, data) {
        if (!data || !("root" in data)) {
          data = data ? _base.createFrame(data) : {};
          data.root = context;
        }
        return data;
      }
      function executeDecorators(fn, prog, container, depths, data, blockParams) {
        if (fn.decorator) {
          var props = {};
          prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
          Utils.extend(prog, props);
        }
        return prog;
      }
      function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
        Object.keys(mergedHelpers).forEach(function(helperName) {
          var helper = mergedHelpers[helperName];
          mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
        });
      }
      function passLookupPropertyOption(helper, container) {
        var lookupProperty = container.lookupProperty;
        return _internalWrapHelper.wrapHelper(helper, function(options) {
          return Utils.extend({ lookupProperty }, options);
        });
      }
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/no-conflict.js
  var require_no_conflict = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/no-conflict.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      exports["default"] = function(Handlebars2) {
        (function() {
          if (typeof globalThis === "object")
            return;
          Object.prototype.__defineGetter__("__magic__", function() {
            return this;
          });
          __magic__.globalThis = __magic__;
          delete Object.prototype.__magic__;
        })();
        var $Handlebars = globalThis.Handlebars;
        Handlebars2.noConflict = function() {
          if (globalThis.Handlebars === Handlebars2) {
            globalThis.Handlebars = $Handlebars;
          }
          return Handlebars2;
        };
      };
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars.runtime.js
  var require_handlebars_runtime = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars.runtime.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj["default"] = obj;
          return newObj;
        }
      }
      var _handlebarsBase = require_base();
      var base = _interopRequireWildcard(_handlebarsBase);
      var _handlebarsSafeString = require_safe_string();
      var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
      var _handlebarsException = require_exception();
      var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
      var _handlebarsUtils = require_utils();
      var Utils = _interopRequireWildcard(_handlebarsUtils);
      var _handlebarsRuntime = require_runtime();
      var runtime = _interopRequireWildcard(_handlebarsRuntime);
      var _handlebarsNoConflict = require_no_conflict();
      var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
      function create() {
        var hb = new base.HandlebarsEnvironment();
        Utils.extend(hb, base);
        hb.SafeString = _handlebarsSafeString2["default"];
        hb.Exception = _handlebarsException2["default"];
        hb.Utils = Utils;
        hb.escapeExpression = Utils.escapeExpression;
        hb.VM = runtime;
        hb.template = function(spec) {
          return runtime.template(spec, hb);
        };
        return hb;
      }
      var inst = create();
      inst.create = create;
      _handlebarsNoConflict2["default"](inst);
      inst["default"] = inst;
      exports["default"] = inst;
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/compiler/ast.js
  var require_ast = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/compiler/ast.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      var AST = {
        // Public API used to evaluate derived attributes regarding AST nodes
        helpers: {
          // a mustache is definitely a helper if:
          // * it is an eligible helper, and
          // * it has at least one parameter or hash segment
          helperExpression: function helperExpression(node) {
            return node.type === "SubExpression" || (node.type === "MustacheStatement" || node.type === "BlockStatement") && !!(node.params && node.params.length || node.hash);
          },
          scopedId: function scopedId(path) {
            return /^\.|this\b/.test(path.original);
          },
          // an ID is simple if it only has one part, and that part is not
          // `..` or `this`.
          simpleId: function simpleId(path) {
            return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
          }
        }
      };
      exports["default"] = AST;
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/compiler/parser.js
  var require_parser = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/compiler/parser.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      var handlebars = function() {
        var parser = {
          trace: function trace() {
          },
          yy: {},
          symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
          terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
          productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
          performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
            var $0 = $$.length - 1;
            switch (yystate) {
              case 1:
                return $$[$0 - 1];
                break;
              case 2:
                this.$ = yy.prepareProgram($$[$0]);
                break;
              case 3:
                this.$ = $$[$0];
                break;
              case 4:
                this.$ = $$[$0];
                break;
              case 5:
                this.$ = $$[$0];
                break;
              case 6:
                this.$ = $$[$0];
                break;
              case 7:
                this.$ = $$[$0];
                break;
              case 8:
                this.$ = $$[$0];
                break;
              case 9:
                this.$ = {
                  type: "CommentStatement",
                  value: yy.stripComment($$[$0]),
                  strip: yy.stripFlags($$[$0], $$[$0]),
                  loc: yy.locInfo(this._$)
                };
                break;
              case 10:
                this.$ = {
                  type: "ContentStatement",
                  original: $$[$0],
                  value: $$[$0],
                  loc: yy.locInfo(this._$)
                };
                break;
              case 11:
                this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                break;
              case 12:
                this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
                break;
              case 13:
                this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
                break;
              case 14:
                this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
                break;
              case 15:
                this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
                break;
              case 16:
                this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
                break;
              case 17:
                this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
                break;
              case 18:
                this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
                break;
              case 19:
                var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$), program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
                program.chained = true;
                this.$ = { strip: $$[$0 - 2].strip, program, chain: true };
                break;
              case 20:
                this.$ = $$[$0];
                break;
              case 21:
                this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
                break;
              case 22:
                this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                break;
              case 23:
                this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                break;
              case 24:
                this.$ = {
                  type: "PartialStatement",
                  name: $$[$0 - 3],
                  params: $$[$0 - 2],
                  hash: $$[$0 - 1],
                  indent: "",
                  strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                  loc: yy.locInfo(this._$)
                };
                break;
              case 25:
                this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                break;
              case 26:
                this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
                break;
              case 27:
                this.$ = $$[$0];
                break;
              case 28:
                this.$ = $$[$0];
                break;
              case 29:
                this.$ = {
                  type: "SubExpression",
                  path: $$[$0 - 3],
                  params: $$[$0 - 2],
                  hash: $$[$0 - 1],
                  loc: yy.locInfo(this._$)
                };
                break;
              case 30:
                this.$ = { type: "Hash", pairs: $$[$0], loc: yy.locInfo(this._$) };
                break;
              case 31:
                this.$ = { type: "HashPair", key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
                break;
              case 32:
                this.$ = yy.id($$[$0 - 1]);
                break;
              case 33:
                this.$ = $$[$0];
                break;
              case 34:
                this.$ = $$[$0];
                break;
              case 35:
                this.$ = { type: "StringLiteral", value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
                break;
              case 36:
                this.$ = { type: "NumberLiteral", value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
                break;
              case 37:
                this.$ = { type: "BooleanLiteral", value: $$[$0] === "true", original: $$[$0] === "true", loc: yy.locInfo(this._$) };
                break;
              case 38:
                this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: yy.locInfo(this._$) };
                break;
              case 39:
                this.$ = { type: "NullLiteral", original: null, value: null, loc: yy.locInfo(this._$) };
                break;
              case 40:
                this.$ = $$[$0];
                break;
              case 41:
                this.$ = $$[$0];
                break;
              case 42:
                this.$ = yy.preparePath(true, $$[$0], this._$);
                break;
              case 43:
                this.$ = yy.preparePath(false, $$[$0], this._$);
                break;
              case 44:
                $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });
                this.$ = $$[$0 - 2];
                break;
              case 45:
                this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
                break;
              case 46:
                this.$ = [];
                break;
              case 47:
                $$[$0 - 1].push($$[$0]);
                break;
              case 48:
                this.$ = [];
                break;
              case 49:
                $$[$0 - 1].push($$[$0]);
                break;
              case 50:
                this.$ = [];
                break;
              case 51:
                $$[$0 - 1].push($$[$0]);
                break;
              case 58:
                this.$ = [];
                break;
              case 59:
                $$[$0 - 1].push($$[$0]);
                break;
              case 64:
                this.$ = [];
                break;
              case 65:
                $$[$0 - 1].push($$[$0]);
                break;
              case 70:
                this.$ = [];
                break;
              case 71:
                $$[$0 - 1].push($$[$0]);
                break;
              case 78:
                this.$ = [];
                break;
              case 79:
                $$[$0 - 1].push($$[$0]);
                break;
              case 82:
                this.$ = [];
                break;
              case 83:
                $$[$0 - 1].push($$[$0]);
                break;
              case 86:
                this.$ = [];
                break;
              case 87:
                $$[$0 - 1].push($$[$0]);
                break;
              case 90:
                this.$ = [];
                break;
              case 91:
                $$[$0 - 1].push($$[$0]);
                break;
              case 94:
                this.$ = [];
                break;
              case 95:
                $$[$0 - 1].push($$[$0]);
                break;
              case 98:
                this.$ = [$$[$0]];
                break;
              case 99:
                $$[$0 - 1].push($$[$0]);
                break;
              case 100:
                this.$ = [$$[$0]];
                break;
              case 101:
                $$[$0 - 1].push($$[$0]);
                break;
            }
          },
          table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
          defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
          parseError: function parseError(str, hash) {
            throw new Error(str);
          },
          parse: function parse(input) {
            var self2 = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
            this.lexer.setInput(input);
            this.lexer.yy = this.yy;
            this.yy.lexer = this.lexer;
            this.yy.parser = this;
            if (typeof this.lexer.yylloc == "undefined")
              this.lexer.yylloc = {};
            var yyloc = this.lexer.yylloc;
            lstack.push(yyloc);
            var ranges = this.lexer.options && this.lexer.options.ranges;
            if (typeof this.yy.parseError === "function")
              this.parseError = this.yy.parseError;
            function popStack(n) {
              stack.length = stack.length - 2 * n;
              vstack.length = vstack.length - n;
              lstack.length = lstack.length - n;
            }
            function lex() {
              var token;
              token = self2.lexer.lex() || 1;
              if (typeof token !== "number") {
                token = self2.symbols_[token] || token;
              }
              return token;
            }
            var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
            while (true) {
              state = stack[stack.length - 1];
              if (this.defaultActions[state]) {
                action = this.defaultActions[state];
              } else {
                if (symbol === null || typeof symbol == "undefined") {
                  symbol = lex();
                }
                action = table[state] && table[state][symbol];
              }
              if (typeof action === "undefined" || !action.length || !action[0]) {
                var errStr = "";
                if (!recovering) {
                  expected = [];
                  for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                      expected.push("'" + this.terminals_[p] + "'");
                    }
                  if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                  } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                  }
                  this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected });
                }
              }
              if (action[0] instanceof Array && action.length > 1) {
                throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
              }
              switch (action[0]) {
                case 1:
                  stack.push(symbol);
                  vstack.push(this.lexer.yytext);
                  lstack.push(this.lexer.yylloc);
                  stack.push(action[1]);
                  symbol = null;
                  if (!preErrorSymbol) {
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                      recovering--;
                  } else {
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                  }
                  break;
                case 2:
                  len = this.productions_[action[1]][1];
                  yyval.$ = vstack[vstack.length - len];
                  yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
                  if (ranges) {
                    yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                  }
                  r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                  if (typeof r !== "undefined") {
                    return r;
                  }
                  if (len) {
                    stack = stack.slice(0, -1 * len * 2);
                    vstack = vstack.slice(0, -1 * len);
                    lstack = lstack.slice(0, -1 * len);
                  }
                  stack.push(this.productions_[action[1]][0]);
                  vstack.push(yyval.$);
                  lstack.push(yyval._$);
                  newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                  stack.push(newState);
                  break;
                case 3:
                  return true;
              }
            }
            return true;
          }
        };
        var lexer = function() {
          var lexer2 = {
            EOF: 1,
            parseError: function parseError(str, hash) {
              if (this.yy.parser) {
                this.yy.parser.parseError(str, hash);
              } else {
                throw new Error(str);
              }
            },
            setInput: function setInput(input) {
              this._input = input;
              this._more = this._less = this.done = false;
              this.yylineno = this.yyleng = 0;
              this.yytext = this.matched = this.match = "";
              this.conditionStack = ["INITIAL"];
              this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
              if (this.options.ranges)
                this.yylloc.range = [0, 0];
              this.offset = 0;
              return this;
            },
            input: function input() {
              var ch = this._input[0];
              this.yytext += ch;
              this.yyleng++;
              this.offset++;
              this.match += ch;
              this.matched += ch;
              var lines = ch.match(/(?:\r\n?|\n).*/g);
              if (lines) {
                this.yylineno++;
                this.yylloc.last_line++;
              } else {
                this.yylloc.last_column++;
              }
              if (this.options.ranges)
                this.yylloc.range[1]++;
              this._input = this._input.slice(1);
              return ch;
            },
            unput: function unput(ch) {
              var len = ch.length;
              var lines = ch.split(/(?:\r\n?|\n)/g);
              this._input = ch + this._input;
              this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
              this.offset -= len;
              var oldLines = this.match.split(/(?:\r\n?|\n)/g);
              this.match = this.match.substr(0, this.match.length - 1);
              this.matched = this.matched.substr(0, this.matched.length - 1);
              if (lines.length - 1)
                this.yylineno -= lines.length - 1;
              var r = this.yylloc.range;
              this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
              };
              if (this.options.ranges) {
                this.yylloc.range = [r[0], r[0] + this.yyleng - len];
              }
              return this;
            },
            more: function more() {
              this._more = true;
              return this;
            },
            less: function less(n) {
              this.unput(this.match.slice(n));
            },
            pastInput: function pastInput() {
              var past = this.matched.substr(0, this.matched.length - this.match.length);
              return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function upcomingInput() {
              var next = this.match;
              if (next.length < 20) {
                next += this._input.substr(0, 20 - next.length);
              }
              return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
            },
            showPosition: function showPosition() {
              var pre = this.pastInput();
              var c = new Array(pre.length + 1).join("-");
              return pre + this.upcomingInput() + "\n" + c + "^";
            },
            next: function next() {
              if (this.done) {
                return this.EOF;
              }
              if (!this._input)
                this.done = true;
              var token, match, tempMatch, index, col, lines;
              if (!this._more) {
                this.yytext = "";
                this.match = "";
              }
              var rules = this._currentRules();
              for (var i = 0; i < rules.length; i++) {
                tempMatch = this._input.match(this.rules[rules[i]]);
                if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                  match = tempMatch;
                  index = i;
                  if (!this.options.flex)
                    break;
                }
              }
              if (match) {
                lines = match[0].match(/(?:\r\n?|\n).*/g);
                if (lines)
                  this.yylineno += lines.length;
                this.yylloc = {
                  first_line: this.yylloc.last_line,
                  last_line: this.yylineno + 1,
                  first_column: this.yylloc.last_column,
                  last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                };
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                  this.yylloc.range = [this.offset, this.offset += this.yyleng];
                }
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input)
                  this.done = false;
                if (token)
                  return token;
                else
                  return;
              }
              if (this._input === "") {
                return this.EOF;
              } else {
                return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), { text: "", token: null, line: this.yylineno });
              }
            },
            lex: function lex() {
              var r = this.next();
              if (typeof r !== "undefined") {
                return r;
              } else {
                return this.lex();
              }
            },
            begin: function begin(condition) {
              this.conditionStack.push(condition);
            },
            popState: function popState() {
              return this.conditionStack.pop();
            },
            _currentRules: function _currentRules() {
              return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
            },
            topState: function topState() {
              return this.conditionStack[this.conditionStack.length - 2];
            },
            pushState: function begin(condition) {
              this.begin(condition);
            }
          };
          lexer2.options = {};
          lexer2.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
            function strip(start, end) {
              return yy_.yytext = yy_.yytext.substring(start, yy_.yyleng - end + start);
            }
            var YYSTATE = YY_START;
            switch ($avoiding_name_collisions) {
              case 0:
                if (yy_.yytext.slice(-2) === "\\\\") {
                  strip(0, 1);
                  this.begin("mu");
                } else if (yy_.yytext.slice(-1) === "\\") {
                  strip(0, 1);
                  this.begin("emu");
                } else {
                  this.begin("mu");
                }
                if (yy_.yytext)
                  return 15;
                break;
              case 1:
                return 15;
                break;
              case 2:
                this.popState();
                return 15;
                break;
              case 3:
                this.begin("raw");
                return 15;
                break;
              case 4:
                this.popState();
                if (this.conditionStack[this.conditionStack.length - 1] === "raw") {
                  return 15;
                } else {
                  strip(5, 9);
                  return "END_RAW_BLOCK";
                }
                break;
              case 5:
                return 15;
                break;
              case 6:
                this.popState();
                return 14;
                break;
              case 7:
                return 65;
                break;
              case 8:
                return 68;
                break;
              case 9:
                return 19;
                break;
              case 10:
                this.popState();
                this.begin("raw");
                return 23;
                break;
              case 11:
                return 55;
                break;
              case 12:
                return 60;
                break;
              case 13:
                return 29;
                break;
              case 14:
                return 47;
                break;
              case 15:
                this.popState();
                return 44;
                break;
              case 16:
                this.popState();
                return 44;
                break;
              case 17:
                return 34;
                break;
              case 18:
                return 39;
                break;
              case 19:
                return 51;
                break;
              case 20:
                return 48;
                break;
              case 21:
                this.unput(yy_.yytext);
                this.popState();
                this.begin("com");
                break;
              case 22:
                this.popState();
                return 14;
                break;
              case 23:
                return 48;
                break;
              case 24:
                return 73;
                break;
              case 25:
                return 72;
                break;
              case 26:
                return 72;
                break;
              case 27:
                return 87;
                break;
              case 28:
                break;
              case 29:
                this.popState();
                return 54;
                break;
              case 30:
                this.popState();
                return 33;
                break;
              case 31:
                yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                return 80;
                break;
              case 32:
                yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
                return 80;
                break;
              case 33:
                return 85;
                break;
              case 34:
                return 82;
                break;
              case 35:
                return 82;
                break;
              case 36:
                return 83;
                break;
              case 37:
                return 84;
                break;
              case 38:
                return 81;
                break;
              case 39:
                return 75;
                break;
              case 40:
                return 77;
                break;
              case 41:
                return 72;
                break;
              case 42:
                yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, "$1");
                return 72;
                break;
              case 43:
                return "INVALID";
                break;
              case 44:
                return 5;
                break;
            }
          };
          lexer2.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
          lexer2.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
          return lexer2;
        }();
        parser.lexer = lexer;
        function Parser() {
          this.yy = {};
        }
        Parser.prototype = parser;
        parser.Parser = Parser;
        return new Parser();
      }();
      exports["default"] = handlebars;
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/compiler/visitor.js
  var require_visitor = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/compiler/visitor.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _exception = require_exception();
      var _exception2 = _interopRequireDefault(_exception);
      function Visitor() {
        this.parents = [];
      }
      Visitor.prototype = {
        constructor: Visitor,
        mutating: false,
        // Visits a given value. If mutating, will replace the value if necessary.
        acceptKey: function acceptKey(node, name) {
          var value = this.accept(node[name]);
          if (this.mutating) {
            if (value && !Visitor.prototype[value.type]) {
              throw new _exception2["default"]('Unexpected node type "' + value.type + '" found when accepting ' + name + " on " + node.type);
            }
            node[name] = value;
          }
        },
        // Performs an accept operation with added sanity check to ensure
        // required keys are not removed.
        acceptRequired: function acceptRequired(node, name) {
          this.acceptKey(node, name);
          if (!node[name]) {
            throw new _exception2["default"](node.type + " requires " + name);
          }
        },
        // Traverses a given array. If mutating, empty respnses will be removed
        // for child elements.
        acceptArray: function acceptArray(array) {
          for (var i = 0, l = array.length; i < l; i++) {
            this.acceptKey(array, i);
            if (!array[i]) {
              array.splice(i, 1);
              i--;
              l--;
            }
          }
        },
        accept: function accept(object) {
          if (!object) {
            return;
          }
          if (!this[object.type]) {
            throw new _exception2["default"]("Unknown type: " + object.type, object);
          }
          if (this.current) {
            this.parents.unshift(this.current);
          }
          this.current = object;
          var ret = this[object.type](object);
          this.current = this.parents.shift();
          if (!this.mutating || ret) {
            return ret;
          } else if (ret !== false) {
            return object;
          }
        },
        Program: function Program(program) {
          this.acceptArray(program.body);
        },
        MustacheStatement: visitSubExpression,
        Decorator: visitSubExpression,
        BlockStatement: visitBlock,
        DecoratorBlock: visitBlock,
        PartialStatement: visitPartial,
        PartialBlockStatement: function PartialBlockStatement(partial) {
          visitPartial.call(this, partial);
          this.acceptKey(partial, "program");
        },
        ContentStatement: function ContentStatement() {
        },
        CommentStatement: function CommentStatement() {
        },
        SubExpression: visitSubExpression,
        PathExpression: function PathExpression() {
        },
        StringLiteral: function StringLiteral() {
        },
        NumberLiteral: function NumberLiteral() {
        },
        BooleanLiteral: function BooleanLiteral() {
        },
        UndefinedLiteral: function UndefinedLiteral() {
        },
        NullLiteral: function NullLiteral() {
        },
        Hash: function Hash(hash) {
          this.acceptArray(hash.pairs);
        },
        HashPair: function HashPair(pair) {
          this.acceptRequired(pair, "value");
        }
      };
      function visitSubExpression(mustache) {
        this.acceptRequired(mustache, "path");
        this.acceptArray(mustache.params);
        this.acceptKey(mustache, "hash");
      }
      function visitBlock(block) {
        visitSubExpression.call(this, block);
        this.acceptKey(block, "program");
        this.acceptKey(block, "inverse");
      }
      function visitPartial(partial) {
        this.acceptRequired(partial, "name");
        this.acceptArray(partial.params);
        this.acceptKey(partial, "hash");
      }
      exports["default"] = Visitor;
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/compiler/whitespace-control.js
  var require_whitespace_control = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/compiler/whitespace-control.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _visitor = require_visitor();
      var _visitor2 = _interopRequireDefault(_visitor);
      function WhitespaceControl() {
        var options = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
        this.options = options;
      }
      WhitespaceControl.prototype = new _visitor2["default"]();
      WhitespaceControl.prototype.Program = function(program) {
        var doStandalone = !this.options.ignoreStandalone;
        var isRoot = !this.isRootSeen;
        this.isRootSeen = true;
        var body = program.body;
        for (var i = 0, l = body.length; i < l; i++) {
          var current = body[i], strip = this.accept(current);
          if (!strip) {
            continue;
          }
          var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot), _isNextWhitespace = isNextWhitespace(body, i, isRoot), openStandalone = strip.openStandalone && _isPrevWhitespace, closeStandalone = strip.closeStandalone && _isNextWhitespace, inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
          if (strip.close) {
            omitRight(body, i, true);
          }
          if (strip.open) {
            omitLeft(body, i, true);
          }
          if (doStandalone && inlineStandalone) {
            omitRight(body, i);
            if (omitLeft(body, i)) {
              if (current.type === "PartialStatement") {
                current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
              }
            }
          }
          if (doStandalone && openStandalone) {
            omitRight((current.program || current.inverse).body);
            omitLeft(body, i);
          }
          if (doStandalone && closeStandalone) {
            omitRight(body, i);
            omitLeft((current.inverse || current.program).body);
          }
        }
        return program;
      };
      WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function(block) {
        this.accept(block.program);
        this.accept(block.inverse);
        var program = block.program || block.inverse, inverse = block.program && block.inverse, firstInverse = inverse, lastInverse = inverse;
        if (inverse && inverse.chained) {
          firstInverse = inverse.body[0].program;
          while (lastInverse.chained) {
            lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
          }
        }
        var strip = {
          open: block.openStrip.open,
          close: block.closeStrip.close,
          // Determine the standalone candiacy. Basically flag our content as being possibly standalone
          // so our parent can determine if we actually are standalone
          openStandalone: isNextWhitespace(program.body),
          closeStandalone: isPrevWhitespace((firstInverse || program).body)
        };
        if (block.openStrip.close) {
          omitRight(program.body, null, true);
        }
        if (inverse) {
          var inverseStrip = block.inverseStrip;
          if (inverseStrip.open) {
            omitLeft(program.body, null, true);
          }
          if (inverseStrip.close) {
            omitRight(firstInverse.body, null, true);
          }
          if (block.closeStrip.open) {
            omitLeft(lastInverse.body, null, true);
          }
          if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
            omitLeft(program.body);
            omitRight(firstInverse.body);
          }
        } else if (block.closeStrip.open) {
          omitLeft(program.body, null, true);
        }
        return strip;
      };
      WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function(mustache) {
        return mustache.strip;
      };
      WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function(node) {
        var strip = node.strip || {};
        return {
          inlineStandalone: true,
          open: strip.open,
          close: strip.close
        };
      };
      function isPrevWhitespace(body, i, isRoot) {
        if (i === void 0) {
          i = body.length;
        }
        var prev = body[i - 1], sibling = body[i - 2];
        if (!prev) {
          return isRoot;
        }
        if (prev.type === "ContentStatement") {
          return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
        }
      }
      function isNextWhitespace(body, i, isRoot) {
        if (i === void 0) {
          i = -1;
        }
        var next = body[i + 1], sibling = body[i + 2];
        if (!next) {
          return isRoot;
        }
        if (next.type === "ContentStatement") {
          return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
        }
      }
      function omitRight(body, i, multiple) {
        var current = body[i == null ? 0 : i + 1];
        if (!current || current.type !== "ContentStatement" || !multiple && current.rightStripped) {
          return;
        }
        var original = current.value;
        current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, "");
        current.rightStripped = current.value !== original;
      }
      function omitLeft(body, i, multiple) {
        var current = body[i == null ? body.length - 1 : i - 1];
        if (!current || current.type !== "ContentStatement" || !multiple && current.leftStripped) {
          return;
        }
        var original = current.value;
        current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, "");
        current.leftStripped = current.value !== original;
        return current.leftStripped;
      }
      exports["default"] = WhitespaceControl;
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/compiler/helpers.js
  var require_helpers2 = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/compiler/helpers.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.SourceLocation = SourceLocation;
      exports.id = id;
      exports.stripFlags = stripFlags;
      exports.stripComment = stripComment;
      exports.preparePath = preparePath;
      exports.prepareMustache = prepareMustache;
      exports.prepareRawBlock = prepareRawBlock;
      exports.prepareBlock = prepareBlock;
      exports.prepareProgram = prepareProgram;
      exports.preparePartialBlock = preparePartialBlock;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _exception = require_exception();
      var _exception2 = _interopRequireDefault(_exception);
      function validateClose(open, close) {
        close = close.path ? close.path.original : close;
        if (open.path.original !== close) {
          var errorNode = { loc: open.path.loc };
          throw new _exception2["default"](open.path.original + " doesn't match " + close, errorNode);
        }
      }
      function SourceLocation(source3, locInfo) {
        this.source = source3;
        this.start = {
          line: locInfo.first_line,
          column: locInfo.first_column
        };
        this.end = {
          line: locInfo.last_line,
          column: locInfo.last_column
        };
      }
      function id(token) {
        if (/^\[.*\]$/.test(token)) {
          return token.substring(1, token.length - 1);
        } else {
          return token;
        }
      }
      function stripFlags(open, close) {
        return {
          open: open.charAt(2) === "~",
          close: close.charAt(close.length - 3) === "~"
        };
      }
      function stripComment(comment) {
        return comment.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
      }
      function preparePath(data, parts, loc) {
        loc = this.locInfo(loc);
        var original = data ? "@" : "", dig = [], depth = 0;
        for (var i = 0, l = parts.length; i < l; i++) {
          var part = parts[i].part, isLiteral = parts[i].original !== part;
          original += (parts[i].separator || "") + part;
          if (!isLiteral && (part === ".." || part === "." || part === "this")) {
            if (dig.length > 0) {
              throw new _exception2["default"]("Invalid path: " + original, { loc });
            } else if (part === "..") {
              depth++;
            }
          } else {
            dig.push(part);
          }
        }
        return {
          type: "PathExpression",
          data,
          depth,
          parts: dig,
          original,
          loc
        };
      }
      function prepareMustache(path, params, hash, open, strip, locInfo) {
        var escapeFlag = open.charAt(3) || open.charAt(2), escaped = escapeFlag !== "{" && escapeFlag !== "&";
        var decorator = /\*/.test(open);
        return {
          type: decorator ? "Decorator" : "MustacheStatement",
          path,
          params,
          hash,
          escaped,
          strip,
          loc: this.locInfo(locInfo)
        };
      }
      function prepareRawBlock(openRawBlock, contents, close, locInfo) {
        validateClose(openRawBlock, close);
        locInfo = this.locInfo(locInfo);
        var program = {
          type: "Program",
          body: contents,
          strip: {},
          loc: locInfo
        };
        return {
          type: "BlockStatement",
          path: openRawBlock.path,
          params: openRawBlock.params,
          hash: openRawBlock.hash,
          program,
          openStrip: {},
          inverseStrip: {},
          closeStrip: {},
          loc: locInfo
        };
      }
      function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
        if (close && close.path) {
          validateClose(openBlock, close);
        }
        var decorator = /\*/.test(openBlock.open);
        program.blockParams = openBlock.blockParams;
        var inverse = void 0, inverseStrip = void 0;
        if (inverseAndProgram) {
          if (decorator) {
            throw new _exception2["default"]("Unexpected inverse block on decorator", inverseAndProgram);
          }
          if (inverseAndProgram.chain) {
            inverseAndProgram.program.body[0].closeStrip = close.strip;
          }
          inverseStrip = inverseAndProgram.strip;
          inverse = inverseAndProgram.program;
        }
        if (inverted) {
          inverted = inverse;
          inverse = program;
          program = inverted;
        }
        return {
          type: decorator ? "DecoratorBlock" : "BlockStatement",
          path: openBlock.path,
          params: openBlock.params,
          hash: openBlock.hash,
          program,
          inverse,
          openStrip: openBlock.strip,
          inverseStrip,
          closeStrip: close && close.strip,
          loc: this.locInfo(locInfo)
        };
      }
      function prepareProgram(statements, loc) {
        if (!loc && statements.length) {
          var firstLoc = statements[0].loc, lastLoc = statements[statements.length - 1].loc;
          if (firstLoc && lastLoc) {
            loc = {
              source: firstLoc.source,
              start: {
                line: firstLoc.start.line,
                column: firstLoc.start.column
              },
              end: {
                line: lastLoc.end.line,
                column: lastLoc.end.column
              }
            };
          }
        }
        return {
          type: "Program",
          body: statements,
          strip: {},
          loc
        };
      }
      function preparePartialBlock(open, program, close, locInfo) {
        validateClose(open, close);
        return {
          type: "PartialBlockStatement",
          name: open.path,
          params: open.params,
          hash: open.hash,
          program,
          openStrip: open.strip,
          closeStrip: close && close.strip,
          loc: this.locInfo(locInfo)
        };
      }
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/compiler/base.js
  var require_base2 = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/compiler/base.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.parseWithoutProcessing = parseWithoutProcessing;
      exports.parse = parse;
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj["default"] = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _parser = require_parser();
      var _parser2 = _interopRequireDefault(_parser);
      var _whitespaceControl = require_whitespace_control();
      var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);
      var _helpers = require_helpers2();
      var Helpers = _interopRequireWildcard(_helpers);
      var _utils = require_utils();
      exports.parser = _parser2["default"];
      var yy = {};
      _utils.extend(yy, Helpers);
      function parseWithoutProcessing(input, options) {
        if (input.type === "Program") {
          return input;
        }
        _parser2["default"].yy = yy;
        yy.locInfo = function(locInfo) {
          return new yy.SourceLocation(options && options.srcName, locInfo);
        };
        var ast = _parser2["default"].parse(input);
        return ast;
      }
      function parse(input, options) {
        var ast = parseWithoutProcessing(input, options);
        var strip = new _whitespaceControl2["default"](options);
        return strip.accept(ast);
      }
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/compiler/compiler.js
  var require_compiler = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/compiler/compiler.js"(exports) {
      "use strict";
      exports.__esModule = true;
      exports.Compiler = Compiler;
      exports.precompile = precompile;
      exports.compile = compile;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _exception = require_exception();
      var _exception2 = _interopRequireDefault(_exception);
      var _utils = require_utils();
      var _ast = require_ast();
      var _ast2 = _interopRequireDefault(_ast);
      var slice = [].slice;
      function Compiler() {
      }
      Compiler.prototype = {
        compiler: Compiler,
        equals: function equals(other) {
          var len = this.opcodes.length;
          if (other.opcodes.length !== len) {
            return false;
          }
          for (var i = 0; i < len; i++) {
            var opcode = this.opcodes[i], otherOpcode = other.opcodes[i];
            if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
              return false;
            }
          }
          len = this.children.length;
          for (var i = 0; i < len; i++) {
            if (!this.children[i].equals(other.children[i])) {
              return false;
            }
          }
          return true;
        },
        guid: 0,
        compile: function compile2(program, options) {
          this.sourceNode = [];
          this.opcodes = [];
          this.children = [];
          this.options = options;
          this.stringParams = options.stringParams;
          this.trackIds = options.trackIds;
          options.blockParams = options.blockParams || [];
          options.knownHelpers = _utils.extend(/* @__PURE__ */ Object.create(null), {
            helperMissing: true,
            blockHelperMissing: true,
            each: true,
            "if": true,
            unless: true,
            "with": true,
            log: true,
            lookup: true
          }, options.knownHelpers);
          return this.accept(program);
        },
        compileProgram: function compileProgram(program) {
          var childCompiler = new this.compiler(), result = childCompiler.compile(program, this.options), guid = this.guid++;
          this.usePartial = this.usePartial || result.usePartial;
          this.children[guid] = result;
          this.useDepths = this.useDepths || result.useDepths;
          return guid;
        },
        accept: function accept(node) {
          if (!this[node.type]) {
            throw new _exception2["default"]("Unknown type: " + node.type, node);
          }
          this.sourceNode.unshift(node);
          var ret = this[node.type](node);
          this.sourceNode.shift();
          return ret;
        },
        Program: function Program(program) {
          this.options.blockParams.unshift(program.blockParams);
          var body = program.body, bodyLength = body.length;
          for (var i = 0; i < bodyLength; i++) {
            this.accept(body[i]);
          }
          this.options.blockParams.shift();
          this.isSimple = bodyLength === 1;
          this.blockParams = program.blockParams ? program.blockParams.length : 0;
          return this;
        },
        BlockStatement: function BlockStatement(block) {
          transformLiteralToPath(block);
          var program = block.program, inverse = block.inverse;
          program = program && this.compileProgram(program);
          inverse = inverse && this.compileProgram(inverse);
          var type = this.classifySexpr(block);
          if (type === "helper") {
            this.helperSexpr(block, program, inverse);
          } else if (type === "simple") {
            this.simpleSexpr(block);
            this.opcode("pushProgram", program);
            this.opcode("pushProgram", inverse);
            this.opcode("emptyHash");
            this.opcode("blockValue", block.path.original);
          } else {
            this.ambiguousSexpr(block, program, inverse);
            this.opcode("pushProgram", program);
            this.opcode("pushProgram", inverse);
            this.opcode("emptyHash");
            this.opcode("ambiguousBlockValue");
          }
          this.opcode("append");
        },
        DecoratorBlock: function DecoratorBlock(decorator) {
          var program = decorator.program && this.compileProgram(decorator.program);
          var params = this.setupFullMustacheParams(decorator, program, void 0), path = decorator.path;
          this.useDecorators = true;
          this.opcode("registerDecorator", params.length, path.original);
        },
        PartialStatement: function PartialStatement(partial) {
          this.usePartial = true;
          var program = partial.program;
          if (program) {
            program = this.compileProgram(partial.program);
          }
          var params = partial.params;
          if (params.length > 1) {
            throw new _exception2["default"]("Unsupported number of partial arguments: " + params.length, partial);
          } else if (!params.length) {
            if (this.options.explicitPartialContext) {
              this.opcode("pushLiteral", "undefined");
            } else {
              params.push({ type: "PathExpression", parts: [], depth: 0 });
            }
          }
          var partialName = partial.name.original, isDynamic = partial.name.type === "SubExpression";
          if (isDynamic) {
            this.accept(partial.name);
          }
          this.setupFullMustacheParams(partial, program, void 0, true);
          var indent = partial.indent || "";
          if (this.options.preventIndent && indent) {
            this.opcode("appendContent", indent);
            indent = "";
          }
          this.opcode("invokePartial", isDynamic, partialName, indent);
          this.opcode("append");
        },
        PartialBlockStatement: function PartialBlockStatement(partialBlock) {
          this.PartialStatement(partialBlock);
        },
        MustacheStatement: function MustacheStatement(mustache) {
          this.SubExpression(mustache);
          if (mustache.escaped && !this.options.noEscape) {
            this.opcode("appendEscaped");
          } else {
            this.opcode("append");
          }
        },
        Decorator: function Decorator(decorator) {
          this.DecoratorBlock(decorator);
        },
        ContentStatement: function ContentStatement(content) {
          if (content.value) {
            this.opcode("appendContent", content.value);
          }
        },
        CommentStatement: function CommentStatement() {
        },
        SubExpression: function SubExpression(sexpr) {
          transformLiteralToPath(sexpr);
          var type = this.classifySexpr(sexpr);
          if (type === "simple") {
            this.simpleSexpr(sexpr);
          } else if (type === "helper") {
            this.helperSexpr(sexpr);
          } else {
            this.ambiguousSexpr(sexpr);
          }
        },
        ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
          var path = sexpr.path, name = path.parts[0], isBlock = program != null || inverse != null;
          this.opcode("getContext", path.depth);
          this.opcode("pushProgram", program);
          this.opcode("pushProgram", inverse);
          path.strict = true;
          this.accept(path);
          this.opcode("invokeAmbiguous", name, isBlock);
        },
        simpleSexpr: function simpleSexpr(sexpr) {
          var path = sexpr.path;
          path.strict = true;
          this.accept(path);
          this.opcode("resolvePossibleLambda");
        },
        helperSexpr: function helperSexpr(sexpr, program, inverse) {
          var params = this.setupFullMustacheParams(sexpr, program, inverse), path = sexpr.path, name = path.parts[0];
          if (this.options.knownHelpers[name]) {
            this.opcode("invokeKnownHelper", params.length, name);
          } else if (this.options.knownHelpersOnly) {
            throw new _exception2["default"]("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
          } else {
            path.strict = true;
            path.falsy = true;
            this.accept(path);
            this.opcode("invokeHelper", params.length, path.original, _ast2["default"].helpers.simpleId(path));
          }
        },
        PathExpression: function PathExpression(path) {
          this.addDepth(path.depth);
          this.opcode("getContext", path.depth);
          var name = path.parts[0], scoped = _ast2["default"].helpers.scopedId(path), blockParamId = !path.depth && !scoped && this.blockParamIndex(name);
          if (blockParamId) {
            this.opcode("lookupBlockParam", blockParamId, path.parts);
          } else if (!name) {
            this.opcode("pushContext");
          } else if (path.data) {
            this.options.data = true;
            this.opcode("lookupData", path.depth, path.parts, path.strict);
          } else {
            this.opcode("lookupOnContext", path.parts, path.falsy, path.strict, scoped);
          }
        },
        StringLiteral: function StringLiteral(string) {
          this.opcode("pushString", string.value);
        },
        NumberLiteral: function NumberLiteral(number) {
          this.opcode("pushLiteral", number.value);
        },
        BooleanLiteral: function BooleanLiteral(bool) {
          this.opcode("pushLiteral", bool.value);
        },
        UndefinedLiteral: function UndefinedLiteral() {
          this.opcode("pushLiteral", "undefined");
        },
        NullLiteral: function NullLiteral() {
          this.opcode("pushLiteral", "null");
        },
        Hash: function Hash(hash) {
          var pairs = hash.pairs, i = 0, l = pairs.length;
          this.opcode("pushHash");
          for (; i < l; i++) {
            this.pushParam(pairs[i].value);
          }
          while (i--) {
            this.opcode("assignToHash", pairs[i].key);
          }
          this.opcode("popHash");
        },
        // HELPERS
        opcode: function opcode(name) {
          this.opcodes.push({
            opcode: name,
            args: slice.call(arguments, 1),
            loc: this.sourceNode[0].loc
          });
        },
        addDepth: function addDepth(depth) {
          if (!depth) {
            return;
          }
          this.useDepths = true;
        },
        classifySexpr: function classifySexpr(sexpr) {
          var isSimple = _ast2["default"].helpers.simpleId(sexpr.path);
          var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);
          var isHelper = !isBlockParam && _ast2["default"].helpers.helperExpression(sexpr);
          var isEligible = !isBlockParam && (isHelper || isSimple);
          if (isEligible && !isHelper) {
            var _name = sexpr.path.parts[0], options = this.options;
            if (options.knownHelpers[_name]) {
              isHelper = true;
            } else if (options.knownHelpersOnly) {
              isEligible = false;
            }
          }
          if (isHelper) {
            return "helper";
          } else if (isEligible) {
            return "ambiguous";
          } else {
            return "simple";
          }
        },
        pushParams: function pushParams(params) {
          for (var i = 0, l = params.length; i < l; i++) {
            this.pushParam(params[i]);
          }
        },
        pushParam: function pushParam(val) {
          var value = val.value != null ? val.value : val.original || "";
          if (this.stringParams) {
            if (value.replace) {
              value = value.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".");
            }
            if (val.depth) {
              this.addDepth(val.depth);
            }
            this.opcode("getContext", val.depth || 0);
            this.opcode("pushStringParam", value, val.type);
            if (val.type === "SubExpression") {
              this.accept(val);
            }
          } else {
            if (this.trackIds) {
              var blockParamIndex = void 0;
              if (val.parts && !_ast2["default"].helpers.scopedId(val) && !val.depth) {
                blockParamIndex = this.blockParamIndex(val.parts[0]);
              }
              if (blockParamIndex) {
                var blockParamChild = val.parts.slice(1).join(".");
                this.opcode("pushId", "BlockParam", blockParamIndex, blockParamChild);
              } else {
                value = val.original || value;
                if (value.replace) {
                  value = value.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "");
                }
                this.opcode("pushId", val.type, value);
              }
            }
            this.accept(val);
          }
        },
        setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
          var params = sexpr.params;
          this.pushParams(params);
          this.opcode("pushProgram", program);
          this.opcode("pushProgram", inverse);
          if (sexpr.hash) {
            this.accept(sexpr.hash);
          } else {
            this.opcode("emptyHash", omitEmpty);
          }
          return params;
        },
        blockParamIndex: function blockParamIndex(name) {
          for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
            var blockParams = this.options.blockParams[depth], param = blockParams && _utils.indexOf(blockParams, name);
            if (blockParams && param >= 0) {
              return [depth, param];
            }
          }
        }
      };
      function precompile(input, options, env) {
        if (input == null || typeof input !== "string" && input.type !== "Program") {
          throw new _exception2["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
        }
        options = options || {};
        if (!("data" in options)) {
          options.data = true;
        }
        if (options.compat) {
          options.useDepths = true;
        }
        var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options);
        return new env.JavaScriptCompiler().compile(environment, options);
      }
      function compile(input, options, env) {
        if (options === void 0)
          options = {};
        if (input == null || typeof input !== "string" && input.type !== "Program") {
          throw new _exception2["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
        }
        options = _utils.extend({}, options);
        if (!("data" in options)) {
          options.data = true;
        }
        if (options.compat) {
          options.useDepths = true;
        }
        var compiled = void 0;
        function compileInput() {
          var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options), templateSpec = new env.JavaScriptCompiler().compile(environment, options, void 0, true);
          return env.template(templateSpec);
        }
        function ret(context, execOptions) {
          if (!compiled) {
            compiled = compileInput();
          }
          return compiled.call(this, context, execOptions);
        }
        ret._setup = function(setupOptions) {
          if (!compiled) {
            compiled = compileInput();
          }
          return compiled._setup(setupOptions);
        };
        ret._child = function(i, data, blockParams, depths) {
          if (!compiled) {
            compiled = compileInput();
          }
          return compiled._child(i, data, blockParams, depths);
        };
        return ret;
      }
      function argEquals(a, b) {
        if (a === b) {
          return true;
        }
        if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
          for (var i = 0; i < a.length; i++) {
            if (!argEquals(a[i], b[i])) {
              return false;
            }
          }
          return true;
        }
      }
      function transformLiteralToPath(sexpr) {
        if (!sexpr.path.parts) {
          var literal = sexpr.path;
          sexpr.path = {
            type: "PathExpression",
            data: false,
            depth: 0,
            parts: [literal.original + ""],
            original: literal.original + "",
            loc: literal.loc
          };
        }
      }
    }
  });

  // node_modules/source-map/lib/base64.js
  var require_base64 = __commonJS({
    "node_modules/source-map/lib/base64.js"(exports) {
      var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      exports.encode = function(number) {
        if (0 <= number && number < intToCharMap.length) {
          return intToCharMap[number];
        }
        throw new TypeError("Must be between 0 and 63: " + number);
      };
      exports.decode = function(charCode) {
        var bigA = 65;
        var bigZ = 90;
        var littleA = 97;
        var littleZ = 122;
        var zero = 48;
        var nine = 57;
        var plus = 43;
        var slash = 47;
        var littleOffset = 26;
        var numberOffset = 52;
        if (bigA <= charCode && charCode <= bigZ) {
          return charCode - bigA;
        }
        if (littleA <= charCode && charCode <= littleZ) {
          return charCode - littleA + littleOffset;
        }
        if (zero <= charCode && charCode <= nine) {
          return charCode - zero + numberOffset;
        }
        if (charCode == plus) {
          return 62;
        }
        if (charCode == slash) {
          return 63;
        }
        return -1;
      };
    }
  });

  // node_modules/source-map/lib/base64-vlq.js
  var require_base64_vlq = __commonJS({
    "node_modules/source-map/lib/base64-vlq.js"(exports) {
      var base64 = require_base64();
      var VLQ_BASE_SHIFT = 5;
      var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
      var VLQ_BASE_MASK = VLQ_BASE - 1;
      var VLQ_CONTINUATION_BIT = VLQ_BASE;
      function toVLQSigned(aValue) {
        return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
      }
      function fromVLQSigned(aValue) {
        var isNegative = (aValue & 1) === 1;
        var shifted = aValue >> 1;
        return isNegative ? -shifted : shifted;
      }
      exports.encode = function base64VLQ_encode(aValue) {
        var encoded = "";
        var digit;
        var vlq = toVLQSigned(aValue);
        do {
          digit = vlq & VLQ_BASE_MASK;
          vlq >>>= VLQ_BASE_SHIFT;
          if (vlq > 0) {
            digit |= VLQ_CONTINUATION_BIT;
          }
          encoded += base64.encode(digit);
        } while (vlq > 0);
        return encoded;
      };
      exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
        var strLen = aStr.length;
        var result = 0;
        var shift = 0;
        var continuation, digit;
        do {
          if (aIndex >= strLen) {
            throw new Error("Expected more digits in base 64 VLQ value.");
          }
          digit = base64.decode(aStr.charCodeAt(aIndex++));
          if (digit === -1) {
            throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
          }
          continuation = !!(digit & VLQ_CONTINUATION_BIT);
          digit &= VLQ_BASE_MASK;
          result = result + (digit << shift);
          shift += VLQ_BASE_SHIFT;
        } while (continuation);
        aOutParam.value = fromVLQSigned(result);
        aOutParam.rest = aIndex;
      };
    }
  });

  // node_modules/source-map/lib/util.js
  var require_util = __commonJS({
    "node_modules/source-map/lib/util.js"(exports) {
      function getArg(aArgs, aName, aDefaultValue) {
        if (aName in aArgs) {
          return aArgs[aName];
        } else if (arguments.length === 3) {
          return aDefaultValue;
        } else {
          throw new Error('"' + aName + '" is a required argument.');
        }
      }
      exports.getArg = getArg;
      var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
      var dataUrlRegexp = /^data:.+\,.+$/;
      function urlParse(aUrl) {
        var match = aUrl.match(urlRegexp);
        if (!match) {
          return null;
        }
        return {
          scheme: match[1],
          auth: match[2],
          host: match[3],
          port: match[4],
          path: match[5]
        };
      }
      exports.urlParse = urlParse;
      function urlGenerate(aParsedUrl) {
        var url = "";
        if (aParsedUrl.scheme) {
          url += aParsedUrl.scheme + ":";
        }
        url += "//";
        if (aParsedUrl.auth) {
          url += aParsedUrl.auth + "@";
        }
        if (aParsedUrl.host) {
          url += aParsedUrl.host;
        }
        if (aParsedUrl.port) {
          url += ":" + aParsedUrl.port;
        }
        if (aParsedUrl.path) {
          url += aParsedUrl.path;
        }
        return url;
      }
      exports.urlGenerate = urlGenerate;
      function normalize(aPath) {
        var path = aPath;
        var url = urlParse(aPath);
        if (url) {
          if (!url.path) {
            return aPath;
          }
          path = url.path;
        }
        var isAbsolute = exports.isAbsolute(path);
        var parts = path.split(/\/+/);
        for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
          part = parts[i];
          if (part === ".") {
            parts.splice(i, 1);
          } else if (part === "..") {
            up++;
          } else if (up > 0) {
            if (part === "") {
              parts.splice(i + 1, up);
              up = 0;
            } else {
              parts.splice(i, 2);
              up--;
            }
          }
        }
        path = parts.join("/");
        if (path === "") {
          path = isAbsolute ? "/" : ".";
        }
        if (url) {
          url.path = path;
          return urlGenerate(url);
        }
        return path;
      }
      exports.normalize = normalize;
      function join(aRoot, aPath) {
        if (aRoot === "") {
          aRoot = ".";
        }
        if (aPath === "") {
          aPath = ".";
        }
        var aPathUrl = urlParse(aPath);
        var aRootUrl = urlParse(aRoot);
        if (aRootUrl) {
          aRoot = aRootUrl.path || "/";
        }
        if (aPathUrl && !aPathUrl.scheme) {
          if (aRootUrl) {
            aPathUrl.scheme = aRootUrl.scheme;
          }
          return urlGenerate(aPathUrl);
        }
        if (aPathUrl || aPath.match(dataUrlRegexp)) {
          return aPath;
        }
        if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
          aRootUrl.host = aPath;
          return urlGenerate(aRootUrl);
        }
        var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
        if (aRootUrl) {
          aRootUrl.path = joined;
          return urlGenerate(aRootUrl);
        }
        return joined;
      }
      exports.join = join;
      exports.isAbsolute = function(aPath) {
        return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
      };
      function relative(aRoot, aPath) {
        if (aRoot === "") {
          aRoot = ".";
        }
        aRoot = aRoot.replace(/\/$/, "");
        var level = 0;
        while (aPath.indexOf(aRoot + "/") !== 0) {
          var index = aRoot.lastIndexOf("/");
          if (index < 0) {
            return aPath;
          }
          aRoot = aRoot.slice(0, index);
          if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
            return aPath;
          }
          ++level;
        }
        return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
      }
      exports.relative = relative;
      var supportsNullProto = function() {
        var obj = /* @__PURE__ */ Object.create(null);
        return !("__proto__" in obj);
      }();
      function identity(s) {
        return s;
      }
      function toSetString(aStr) {
        if (isProtoString(aStr)) {
          return "$" + aStr;
        }
        return aStr;
      }
      exports.toSetString = supportsNullProto ? identity : toSetString;
      function fromSetString(aStr) {
        if (isProtoString(aStr)) {
          return aStr.slice(1);
        }
        return aStr;
      }
      exports.fromSetString = supportsNullProto ? identity : fromSetString;
      function isProtoString(s) {
        if (!s) {
          return false;
        }
        var length = s.length;
        if (length < 9) {
          return false;
        }
        if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
          return false;
        }
        for (var i = length - 10; i >= 0; i--) {
          if (s.charCodeAt(i) !== 36) {
            return false;
          }
        }
        return true;
      }
      function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
        var cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0 || onlyCompareOriginal) {
          return cmp;
        }
        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
          return cmp;
        }
        return strcmp(mappingA.name, mappingB.name);
      }
      exports.compareByOriginalPositions = compareByOriginalPositions;
      function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
        var cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0 || onlyCompareGenerated) {
          return cmp;
        }
        cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0) {
          return cmp;
        }
        return strcmp(mappingA.name, mappingB.name);
      }
      exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
      function strcmp(aStr1, aStr2) {
        if (aStr1 === aStr2) {
          return 0;
        }
        if (aStr1 === null) {
          return 1;
        }
        if (aStr2 === null) {
          return -1;
        }
        if (aStr1 > aStr2) {
          return 1;
        }
        return -1;
      }
      function compareByGeneratedPositionsInflated(mappingA, mappingB) {
        var cmp = mappingA.generatedLine - mappingB.generatedLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.generatedColumn - mappingB.generatedColumn;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = strcmp(mappingA.source, mappingB.source);
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalLine - mappingB.originalLine;
        if (cmp !== 0) {
          return cmp;
        }
        cmp = mappingA.originalColumn - mappingB.originalColumn;
        if (cmp !== 0) {
          return cmp;
        }
        return strcmp(mappingA.name, mappingB.name);
      }
      exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
      function parseSourceMapInput(str) {
        return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
      }
      exports.parseSourceMapInput = parseSourceMapInput;
      function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
        sourceURL = sourceURL || "";
        if (sourceRoot) {
          if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
            sourceRoot += "/";
          }
          sourceURL = sourceRoot + sourceURL;
        }
        if (sourceMapURL) {
          var parsed = urlParse(sourceMapURL);
          if (!parsed) {
            throw new Error("sourceMapURL could not be parsed");
          }
          if (parsed.path) {
            var index = parsed.path.lastIndexOf("/");
            if (index >= 0) {
              parsed.path = parsed.path.substring(0, index + 1);
            }
          }
          sourceURL = join(urlGenerate(parsed), sourceURL);
        }
        return normalize(sourceURL);
      }
      exports.computeSourceURL = computeSourceURL;
    }
  });

  // node_modules/source-map/lib/array-set.js
  var require_array_set = __commonJS({
    "node_modules/source-map/lib/array-set.js"(exports) {
      var util = require_util();
      var has = Object.prototype.hasOwnProperty;
      var hasNativeMap = typeof Map !== "undefined";
      function ArraySet() {
        this._array = [];
        this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
      }
      ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
        var set = new ArraySet();
        for (var i = 0, len = aArray.length; i < len; i++) {
          set.add(aArray[i], aAllowDuplicates);
        }
        return set;
      };
      ArraySet.prototype.size = function ArraySet_size() {
        return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
      };
      ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
        var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
        var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
        var idx = this._array.length;
        if (!isDuplicate || aAllowDuplicates) {
          this._array.push(aStr);
        }
        if (!isDuplicate) {
          if (hasNativeMap) {
            this._set.set(aStr, idx);
          } else {
            this._set[sStr] = idx;
          }
        }
      };
      ArraySet.prototype.has = function ArraySet_has(aStr) {
        if (hasNativeMap) {
          return this._set.has(aStr);
        } else {
          var sStr = util.toSetString(aStr);
          return has.call(this._set, sStr);
        }
      };
      ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
        if (hasNativeMap) {
          var idx = this._set.get(aStr);
          if (idx >= 0) {
            return idx;
          }
        } else {
          var sStr = util.toSetString(aStr);
          if (has.call(this._set, sStr)) {
            return this._set[sStr];
          }
        }
        throw new Error('"' + aStr + '" is not in the set.');
      };
      ArraySet.prototype.at = function ArraySet_at(aIdx) {
        if (aIdx >= 0 && aIdx < this._array.length) {
          return this._array[aIdx];
        }
        throw new Error("No element indexed by " + aIdx);
      };
      ArraySet.prototype.toArray = function ArraySet_toArray() {
        return this._array.slice();
      };
      exports.ArraySet = ArraySet;
    }
  });

  // node_modules/source-map/lib/mapping-list.js
  var require_mapping_list = __commonJS({
    "node_modules/source-map/lib/mapping-list.js"(exports) {
      var util = require_util();
      function generatedPositionAfter(mappingA, mappingB) {
        var lineA = mappingA.generatedLine;
        var lineB = mappingB.generatedLine;
        var columnA = mappingA.generatedColumn;
        var columnB = mappingB.generatedColumn;
        return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
      }
      function MappingList() {
        this._array = [];
        this._sorted = true;
        this._last = { generatedLine: -1, generatedColumn: 0 };
      }
      MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
        this._array.forEach(aCallback, aThisArg);
      };
      MappingList.prototype.add = function MappingList_add(aMapping) {
        if (generatedPositionAfter(this._last, aMapping)) {
          this._last = aMapping;
          this._array.push(aMapping);
        } else {
          this._sorted = false;
          this._array.push(aMapping);
        }
      };
      MappingList.prototype.toArray = function MappingList_toArray() {
        if (!this._sorted) {
          this._array.sort(util.compareByGeneratedPositionsInflated);
          this._sorted = true;
        }
        return this._array;
      };
      exports.MappingList = MappingList;
    }
  });

  // node_modules/source-map/lib/source-map-generator.js
  var require_source_map_generator = __commonJS({
    "node_modules/source-map/lib/source-map-generator.js"(exports) {
      var base64VLQ = require_base64_vlq();
      var util = require_util();
      var ArraySet = require_array_set().ArraySet;
      var MappingList = require_mapping_list().MappingList;
      function SourceMapGenerator(aArgs) {
        if (!aArgs) {
          aArgs = {};
        }
        this._file = util.getArg(aArgs, "file", null);
        this._sourceRoot = util.getArg(aArgs, "sourceRoot", null);
        this._skipValidation = util.getArg(aArgs, "skipValidation", false);
        this._sources = new ArraySet();
        this._names = new ArraySet();
        this._mappings = new MappingList();
        this._sourcesContents = null;
      }
      SourceMapGenerator.prototype._version = 3;
      SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
        var sourceRoot = aSourceMapConsumer.sourceRoot;
        var generator = new SourceMapGenerator({
          file: aSourceMapConsumer.file,
          sourceRoot
        });
        aSourceMapConsumer.eachMapping(function(mapping) {
          var newMapping = {
            generated: {
              line: mapping.generatedLine,
              column: mapping.generatedColumn
            }
          };
          if (mapping.source != null) {
            newMapping.source = mapping.source;
            if (sourceRoot != null) {
              newMapping.source = util.relative(sourceRoot, newMapping.source);
            }
            newMapping.original = {
              line: mapping.originalLine,
              column: mapping.originalColumn
            };
            if (mapping.name != null) {
              newMapping.name = mapping.name;
            }
          }
          generator.addMapping(newMapping);
        });
        aSourceMapConsumer.sources.forEach(function(sourceFile) {
          var sourceRelative = sourceFile;
          if (sourceRoot !== null) {
            sourceRelative = util.relative(sourceRoot, sourceFile);
          }
          if (!generator._sources.has(sourceRelative)) {
            generator._sources.add(sourceRelative);
          }
          var content = aSourceMapConsumer.sourceContentFor(sourceFile);
          if (content != null) {
            generator.setSourceContent(sourceFile, content);
          }
        });
        return generator;
      };
      SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
        var generated = util.getArg(aArgs, "generated");
        var original = util.getArg(aArgs, "original", null);
        var source3 = util.getArg(aArgs, "source", null);
        var name = util.getArg(aArgs, "name", null);
        if (!this._skipValidation) {
          this._validateMapping(generated, original, source3, name);
        }
        if (source3 != null) {
          source3 = String(source3);
          if (!this._sources.has(source3)) {
            this._sources.add(source3);
          }
        }
        if (name != null) {
          name = String(name);
          if (!this._names.has(name)) {
            this._names.add(name);
          }
        }
        this._mappings.add({
          generatedLine: generated.line,
          generatedColumn: generated.column,
          originalLine: original != null && original.line,
          originalColumn: original != null && original.column,
          source: source3,
          name
        });
      };
      SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
        var source3 = aSourceFile;
        if (this._sourceRoot != null) {
          source3 = util.relative(this._sourceRoot, source3);
        }
        if (aSourceContent != null) {
          if (!this._sourcesContents) {
            this._sourcesContents = /* @__PURE__ */ Object.create(null);
          }
          this._sourcesContents[util.toSetString(source3)] = aSourceContent;
        } else if (this._sourcesContents) {
          delete this._sourcesContents[util.toSetString(source3)];
          if (Object.keys(this._sourcesContents).length === 0) {
            this._sourcesContents = null;
          }
        }
      };
      SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
        var sourceFile = aSourceFile;
        if (aSourceFile == null) {
          if (aSourceMapConsumer.file == null) {
            throw new Error(
              `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
            );
          }
          sourceFile = aSourceMapConsumer.file;
        }
        var sourceRoot = this._sourceRoot;
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        var newSources = new ArraySet();
        var newNames = new ArraySet();
        this._mappings.unsortedForEach(function(mapping) {
          if (mapping.source === sourceFile && mapping.originalLine != null) {
            var original = aSourceMapConsumer.originalPositionFor({
              line: mapping.originalLine,
              column: mapping.originalColumn
            });
            if (original.source != null) {
              mapping.source = original.source;
              if (aSourceMapPath != null) {
                mapping.source = util.join(aSourceMapPath, mapping.source);
              }
              if (sourceRoot != null) {
                mapping.source = util.relative(sourceRoot, mapping.source);
              }
              mapping.originalLine = original.line;
              mapping.originalColumn = original.column;
              if (original.name != null) {
                mapping.name = original.name;
              }
            }
          }
          var source3 = mapping.source;
          if (source3 != null && !newSources.has(source3)) {
            newSources.add(source3);
          }
          var name = mapping.name;
          if (name != null && !newNames.has(name)) {
            newNames.add(name);
          }
        }, this);
        this._sources = newSources;
        this._names = newNames;
        aSourceMapConsumer.sources.forEach(function(sourceFile2) {
          var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
          if (content != null) {
            if (aSourceMapPath != null) {
              sourceFile2 = util.join(aSourceMapPath, sourceFile2);
            }
            if (sourceRoot != null) {
              sourceFile2 = util.relative(sourceRoot, sourceFile2);
            }
            this.setSourceContent(sourceFile2, content);
          }
        }, this);
      };
      SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
        if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
          throw new Error(
            "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
          );
        }
        if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
          return;
        } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
          return;
        } else {
          throw new Error("Invalid mapping: " + JSON.stringify({
            generated: aGenerated,
            source: aSource,
            original: aOriginal,
            name: aName
          }));
        }
      };
      SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
        var previousGeneratedColumn = 0;
        var previousGeneratedLine = 1;
        var previousOriginalColumn = 0;
        var previousOriginalLine = 0;
        var previousName = 0;
        var previousSource = 0;
        var result = "";
        var next;
        var mapping;
        var nameIdx;
        var sourceIdx;
        var mappings = this._mappings.toArray();
        for (var i = 0, len = mappings.length; i < len; i++) {
          mapping = mappings[i];
          next = "";
          if (mapping.generatedLine !== previousGeneratedLine) {
            previousGeneratedColumn = 0;
            while (mapping.generatedLine !== previousGeneratedLine) {
              next += ";";
              previousGeneratedLine++;
            }
          } else {
            if (i > 0) {
              if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
                continue;
              }
              next += ",";
            }
          }
          next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
          previousGeneratedColumn = mapping.generatedColumn;
          if (mapping.source != null) {
            sourceIdx = this._sources.indexOf(mapping.source);
            next += base64VLQ.encode(sourceIdx - previousSource);
            previousSource = sourceIdx;
            next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
            previousOriginalLine = mapping.originalLine - 1;
            next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
            previousOriginalColumn = mapping.originalColumn;
            if (mapping.name != null) {
              nameIdx = this._names.indexOf(mapping.name);
              next += base64VLQ.encode(nameIdx - previousName);
              previousName = nameIdx;
            }
          }
          result += next;
        }
        return result;
      };
      SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
        return aSources.map(function(source3) {
          if (!this._sourcesContents) {
            return null;
          }
          if (aSourceRoot != null) {
            source3 = util.relative(aSourceRoot, source3);
          }
          var key = util.toSetString(source3);
          return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
        }, this);
      };
      SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
        var map = {
          version: this._version,
          sources: this._sources.toArray(),
          names: this._names.toArray(),
          mappings: this._serializeMappings()
        };
        if (this._file != null) {
          map.file = this._file;
        }
        if (this._sourceRoot != null) {
          map.sourceRoot = this._sourceRoot;
        }
        if (this._sourcesContents) {
          map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
        }
        return map;
      };
      SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
        return JSON.stringify(this.toJSON());
      };
      exports.SourceMapGenerator = SourceMapGenerator;
    }
  });

  // node_modules/source-map/lib/binary-search.js
  var require_binary_search = __commonJS({
    "node_modules/source-map/lib/binary-search.js"(exports) {
      exports.GREATEST_LOWER_BOUND = 1;
      exports.LEAST_UPPER_BOUND = 2;
      function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
        var mid = Math.floor((aHigh - aLow) / 2) + aLow;
        var cmp = aCompare(aNeedle, aHaystack[mid], true);
        if (cmp === 0) {
          return mid;
        } else if (cmp > 0) {
          if (aHigh - mid > 1) {
            return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
          }
          if (aBias == exports.LEAST_UPPER_BOUND) {
            return aHigh < aHaystack.length ? aHigh : -1;
          } else {
            return mid;
          }
        } else {
          if (mid - aLow > 1) {
            return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
          }
          if (aBias == exports.LEAST_UPPER_BOUND) {
            return mid;
          } else {
            return aLow < 0 ? -1 : aLow;
          }
        }
      }
      exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
        if (aHaystack.length === 0) {
          return -1;
        }
        var index = recursiveSearch(
          -1,
          aHaystack.length,
          aNeedle,
          aHaystack,
          aCompare,
          aBias || exports.GREATEST_LOWER_BOUND
        );
        if (index < 0) {
          return -1;
        }
        while (index - 1 >= 0) {
          if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
            break;
          }
          --index;
        }
        return index;
      };
    }
  });

  // node_modules/source-map/lib/quick-sort.js
  var require_quick_sort = __commonJS({
    "node_modules/source-map/lib/quick-sort.js"(exports) {
      function swap(ary, x, y) {
        var temp = ary[x];
        ary[x] = ary[y];
        ary[y] = temp;
      }
      function randomIntInRange(low, high) {
        return Math.round(low + Math.random() * (high - low));
      }
      function doQuickSort(ary, comparator, p, r) {
        if (p < r) {
          var pivotIndex = randomIntInRange(p, r);
          var i = p - 1;
          swap(ary, pivotIndex, r);
          var pivot = ary[r];
          for (var j = p; j < r; j++) {
            if (comparator(ary[j], pivot) <= 0) {
              i += 1;
              swap(ary, i, j);
            }
          }
          swap(ary, i + 1, j);
          var q = i + 1;
          doQuickSort(ary, comparator, p, q - 1);
          doQuickSort(ary, comparator, q + 1, r);
        }
      }
      exports.quickSort = function(ary, comparator) {
        doQuickSort(ary, comparator, 0, ary.length - 1);
      };
    }
  });

  // node_modules/source-map/lib/source-map-consumer.js
  var require_source_map_consumer = __commonJS({
    "node_modules/source-map/lib/source-map-consumer.js"(exports) {
      var util = require_util();
      var binarySearch = require_binary_search();
      var ArraySet = require_array_set().ArraySet;
      var base64VLQ = require_base64_vlq();
      var quickSort = require_quick_sort().quickSort;
      function SourceMapConsumer(aSourceMap, aSourceMapURL) {
        var sourceMap = aSourceMap;
        if (typeof aSourceMap === "string") {
          sourceMap = util.parseSourceMapInput(aSourceMap);
        }
        return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
      }
      SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
        return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
      };
      SourceMapConsumer.prototype._version = 3;
      SourceMapConsumer.prototype.__generatedMappings = null;
      Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
        configurable: true,
        enumerable: true,
        get: function() {
          if (!this.__generatedMappings) {
            this._parseMappings(this._mappings, this.sourceRoot);
          }
          return this.__generatedMappings;
        }
      });
      SourceMapConsumer.prototype.__originalMappings = null;
      Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
        configurable: true,
        enumerable: true,
        get: function() {
          if (!this.__originalMappings) {
            this._parseMappings(this._mappings, this.sourceRoot);
          }
          return this.__originalMappings;
        }
      });
      SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
        var c = aStr.charAt(index);
        return c === ";" || c === ",";
      };
      SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
        throw new Error("Subclasses must implement _parseMappings");
      };
      SourceMapConsumer.GENERATED_ORDER = 1;
      SourceMapConsumer.ORIGINAL_ORDER = 2;
      SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
      SourceMapConsumer.LEAST_UPPER_BOUND = 2;
      SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
        var context = aContext || null;
        var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
        var mappings;
        switch (order) {
          case SourceMapConsumer.GENERATED_ORDER:
            mappings = this._generatedMappings;
            break;
          case SourceMapConsumer.ORIGINAL_ORDER:
            mappings = this._originalMappings;
            break;
          default:
            throw new Error("Unknown order of iteration.");
        }
        var sourceRoot = this.sourceRoot;
        mappings.map(function(mapping) {
          var source3 = mapping.source === null ? null : this._sources.at(mapping.source);
          source3 = util.computeSourceURL(sourceRoot, source3, this._sourceMapURL);
          return {
            source: source3,
            generatedLine: mapping.generatedLine,
            generatedColumn: mapping.generatedColumn,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: mapping.name === null ? null : this._names.at(mapping.name)
          };
        }, this).forEach(aCallback, context);
      };
      SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
        var line = util.getArg(aArgs, "line");
        var needle = {
          source: util.getArg(aArgs, "source"),
          originalLine: line,
          originalColumn: util.getArg(aArgs, "column", 0)
        };
        needle.source = this._findSourceIndex(needle.source);
        if (needle.source < 0) {
          return [];
        }
        var mappings = [];
        var index = this._findMapping(
          needle,
          this._originalMappings,
          "originalLine",
          "originalColumn",
          util.compareByOriginalPositions,
          binarySearch.LEAST_UPPER_BOUND
        );
        if (index >= 0) {
          var mapping = this._originalMappings[index];
          if (aArgs.column === void 0) {
            var originalLine = mapping.originalLine;
            while (mapping && mapping.originalLine === originalLine) {
              mappings.push({
                line: util.getArg(mapping, "generatedLine", null),
                column: util.getArg(mapping, "generatedColumn", null),
                lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
              });
              mapping = this._originalMappings[++index];
            }
          } else {
            var originalColumn = mapping.originalColumn;
            while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
              mappings.push({
                line: util.getArg(mapping, "generatedLine", null),
                column: util.getArg(mapping, "generatedColumn", null),
                lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
              });
              mapping = this._originalMappings[++index];
            }
          }
        }
        return mappings;
      };
      exports.SourceMapConsumer = SourceMapConsumer;
      function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
        var sourceMap = aSourceMap;
        if (typeof aSourceMap === "string") {
          sourceMap = util.parseSourceMapInput(aSourceMap);
        }
        var version = util.getArg(sourceMap, "version");
        var sources = util.getArg(sourceMap, "sources");
        var names = util.getArg(sourceMap, "names", []);
        var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
        var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
        var mappings = util.getArg(sourceMap, "mappings");
        var file = util.getArg(sourceMap, "file", null);
        if (version != this._version) {
          throw new Error("Unsupported version: " + version);
        }
        if (sourceRoot) {
          sourceRoot = util.normalize(sourceRoot);
        }
        sources = sources.map(String).map(util.normalize).map(function(source3) {
          return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source3) ? util.relative(sourceRoot, source3) : source3;
        });
        this._names = ArraySet.fromArray(names.map(String), true);
        this._sources = ArraySet.fromArray(sources, true);
        this._absoluteSources = this._sources.toArray().map(function(s) {
          return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
        });
        this.sourceRoot = sourceRoot;
        this.sourcesContent = sourcesContent;
        this._mappings = mappings;
        this._sourceMapURL = aSourceMapURL;
        this.file = file;
      }
      BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
      BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
      BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
        var relativeSource = aSource;
        if (this.sourceRoot != null) {
          relativeSource = util.relative(this.sourceRoot, relativeSource);
        }
        if (this._sources.has(relativeSource)) {
          return this._sources.indexOf(relativeSource);
        }
        var i;
        for (i = 0; i < this._absoluteSources.length; ++i) {
          if (this._absoluteSources[i] == aSource) {
            return i;
          }
        }
        return -1;
      };
      BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
        var smc = Object.create(BasicSourceMapConsumer.prototype);
        var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
        var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
        smc.sourceRoot = aSourceMap._sourceRoot;
        smc.sourcesContent = aSourceMap._generateSourcesContent(
          smc._sources.toArray(),
          smc.sourceRoot
        );
        smc.file = aSourceMap._file;
        smc._sourceMapURL = aSourceMapURL;
        smc._absoluteSources = smc._sources.toArray().map(function(s) {
          return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
        });
        var generatedMappings = aSourceMap._mappings.toArray().slice();
        var destGeneratedMappings = smc.__generatedMappings = [];
        var destOriginalMappings = smc.__originalMappings = [];
        for (var i = 0, length = generatedMappings.length; i < length; i++) {
          var srcMapping = generatedMappings[i];
          var destMapping = new Mapping();
          destMapping.generatedLine = srcMapping.generatedLine;
          destMapping.generatedColumn = srcMapping.generatedColumn;
          if (srcMapping.source) {
            destMapping.source = sources.indexOf(srcMapping.source);
            destMapping.originalLine = srcMapping.originalLine;
            destMapping.originalColumn = srcMapping.originalColumn;
            if (srcMapping.name) {
              destMapping.name = names.indexOf(srcMapping.name);
            }
            destOriginalMappings.push(destMapping);
          }
          destGeneratedMappings.push(destMapping);
        }
        quickSort(smc.__originalMappings, util.compareByOriginalPositions);
        return smc;
      };
      BasicSourceMapConsumer.prototype._version = 3;
      Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
        get: function() {
          return this._absoluteSources.slice();
        }
      });
      function Mapping() {
        this.generatedLine = 0;
        this.generatedColumn = 0;
        this.source = null;
        this.originalLine = null;
        this.originalColumn = null;
        this.name = null;
      }
      BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
        var generatedLine = 1;
        var previousGeneratedColumn = 0;
        var previousOriginalLine = 0;
        var previousOriginalColumn = 0;
        var previousSource = 0;
        var previousName = 0;
        var length = aStr.length;
        var index = 0;
        var cachedSegments = {};
        var temp = {};
        var originalMappings = [];
        var generatedMappings = [];
        var mapping, str, segment, end, value;
        while (index < length) {
          if (aStr.charAt(index) === ";") {
            generatedLine++;
            index++;
            previousGeneratedColumn = 0;
          } else if (aStr.charAt(index) === ",") {
            index++;
          } else {
            mapping = new Mapping();
            mapping.generatedLine = generatedLine;
            for (end = index; end < length; end++) {
              if (this._charIsMappingSeparator(aStr, end)) {
                break;
              }
            }
            str = aStr.slice(index, end);
            segment = cachedSegments[str];
            if (segment) {
              index += str.length;
            } else {
              segment = [];
              while (index < end) {
                base64VLQ.decode(aStr, index, temp);
                value = temp.value;
                index = temp.rest;
                segment.push(value);
              }
              if (segment.length === 2) {
                throw new Error("Found a source, but no line and column");
              }
              if (segment.length === 3) {
                throw new Error("Found a source and line, but no column");
              }
              cachedSegments[str] = segment;
            }
            mapping.generatedColumn = previousGeneratedColumn + segment[0];
            previousGeneratedColumn = mapping.generatedColumn;
            if (segment.length > 1) {
              mapping.source = previousSource + segment[1];
              previousSource += segment[1];
              mapping.originalLine = previousOriginalLine + segment[2];
              previousOriginalLine = mapping.originalLine;
              mapping.originalLine += 1;
              mapping.originalColumn = previousOriginalColumn + segment[3];
              previousOriginalColumn = mapping.originalColumn;
              if (segment.length > 4) {
                mapping.name = previousName + segment[4];
                previousName += segment[4];
              }
            }
            generatedMappings.push(mapping);
            if (typeof mapping.originalLine === "number") {
              originalMappings.push(mapping);
            }
          }
        }
        quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
        this.__generatedMappings = generatedMappings;
        quickSort(originalMappings, util.compareByOriginalPositions);
        this.__originalMappings = originalMappings;
      };
      BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
        if (aNeedle[aLineName] <= 0) {
          throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
        }
        if (aNeedle[aColumnName] < 0) {
          throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
        }
        return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
      };
      BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
        for (var index = 0; index < this._generatedMappings.length; ++index) {
          var mapping = this._generatedMappings[index];
          if (index + 1 < this._generatedMappings.length) {
            var nextMapping = this._generatedMappings[index + 1];
            if (mapping.generatedLine === nextMapping.generatedLine) {
              mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
              continue;
            }
          }
          mapping.lastGeneratedColumn = Infinity;
        }
      };
      BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
        var needle = {
          generatedLine: util.getArg(aArgs, "line"),
          generatedColumn: util.getArg(aArgs, "column")
        };
        var index = this._findMapping(
          needle,
          this._generatedMappings,
          "generatedLine",
          "generatedColumn",
          util.compareByGeneratedPositionsDeflated,
          util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
        );
        if (index >= 0) {
          var mapping = this._generatedMappings[index];
          if (mapping.generatedLine === needle.generatedLine) {
            var source3 = util.getArg(mapping, "source", null);
            if (source3 !== null) {
              source3 = this._sources.at(source3);
              source3 = util.computeSourceURL(this.sourceRoot, source3, this._sourceMapURL);
            }
            var name = util.getArg(mapping, "name", null);
            if (name !== null) {
              name = this._names.at(name);
            }
            return {
              source: source3,
              line: util.getArg(mapping, "originalLine", null),
              column: util.getArg(mapping, "originalColumn", null),
              name
            };
          }
        }
        return {
          source: null,
          line: null,
          column: null,
          name: null
        };
      };
      BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
        if (!this.sourcesContent) {
          return false;
        }
        return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
          return sc == null;
        });
      };
      BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
        if (!this.sourcesContent) {
          return null;
        }
        var index = this._findSourceIndex(aSource);
        if (index >= 0) {
          return this.sourcesContent[index];
        }
        var relativeSource = aSource;
        if (this.sourceRoot != null) {
          relativeSource = util.relative(this.sourceRoot, relativeSource);
        }
        var url;
        if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
          var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
          if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
            return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
          }
          if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
            return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
          }
        }
        if (nullOnMissing) {
          return null;
        } else {
          throw new Error('"' + relativeSource + '" is not in the SourceMap.');
        }
      };
      BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
        var source3 = util.getArg(aArgs, "source");
        source3 = this._findSourceIndex(source3);
        if (source3 < 0) {
          return {
            line: null,
            column: null,
            lastColumn: null
          };
        }
        var needle = {
          source: source3,
          originalLine: util.getArg(aArgs, "line"),
          originalColumn: util.getArg(aArgs, "column")
        };
        var index = this._findMapping(
          needle,
          this._originalMappings,
          "originalLine",
          "originalColumn",
          util.compareByOriginalPositions,
          util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
        );
        if (index >= 0) {
          var mapping = this._originalMappings[index];
          if (mapping.source === needle.source) {
            return {
              line: util.getArg(mapping, "generatedLine", null),
              column: util.getArg(mapping, "generatedColumn", null),
              lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
            };
          }
        }
        return {
          line: null,
          column: null,
          lastColumn: null
        };
      };
      exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
      function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
        var sourceMap = aSourceMap;
        if (typeof aSourceMap === "string") {
          sourceMap = util.parseSourceMapInput(aSourceMap);
        }
        var version = util.getArg(sourceMap, "version");
        var sections = util.getArg(sourceMap, "sections");
        if (version != this._version) {
          throw new Error("Unsupported version: " + version);
        }
        this._sources = new ArraySet();
        this._names = new ArraySet();
        var lastOffset = {
          line: -1,
          column: 0
        };
        this._sections = sections.map(function(s) {
          if (s.url) {
            throw new Error("Support for url field in sections not implemented.");
          }
          var offset = util.getArg(s, "offset");
          var offsetLine = util.getArg(offset, "line");
          var offsetColumn = util.getArg(offset, "column");
          if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
            throw new Error("Section offsets must be ordered and non-overlapping.");
          }
          lastOffset = offset;
          return {
            generatedOffset: {
              // The offset fields are 0-based, but we use 1-based indices when
              // encoding/decoding from VLQ.
              generatedLine: offsetLine + 1,
              generatedColumn: offsetColumn + 1
            },
            consumer: new SourceMapConsumer(util.getArg(s, "map"), aSourceMapURL)
          };
        });
      }
      IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
      IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
      IndexedSourceMapConsumer.prototype._version = 3;
      Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
        get: function() {
          var sources = [];
          for (var i = 0; i < this._sections.length; i++) {
            for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
              sources.push(this._sections[i].consumer.sources[j]);
            }
          }
          return sources;
        }
      });
      IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
        var needle = {
          generatedLine: util.getArg(aArgs, "line"),
          generatedColumn: util.getArg(aArgs, "column")
        };
        var sectionIndex = binarySearch.search(
          needle,
          this._sections,
          function(needle2, section2) {
            var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
            if (cmp) {
              return cmp;
            }
            return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
          }
        );
        var section = this._sections[sectionIndex];
        if (!section) {
          return {
            source: null,
            line: null,
            column: null,
            name: null
          };
        }
        return section.consumer.originalPositionFor({
          line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
          column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
          bias: aArgs.bias
        });
      };
      IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
        return this._sections.every(function(s) {
          return s.consumer.hasContentsOfAllSources();
        });
      };
      IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
        for (var i = 0; i < this._sections.length; i++) {
          var section = this._sections[i];
          var content = section.consumer.sourceContentFor(aSource, true);
          if (content) {
            return content;
          }
        }
        if (nullOnMissing) {
          return null;
        } else {
          throw new Error('"' + aSource + '" is not in the SourceMap.');
        }
      };
      IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
        for (var i = 0; i < this._sections.length; i++) {
          var section = this._sections[i];
          if (section.consumer._findSourceIndex(util.getArg(aArgs, "source")) === -1) {
            continue;
          }
          var generatedPosition = section.consumer.generatedPositionFor(aArgs);
          if (generatedPosition) {
            var ret = {
              line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
              column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
            };
            return ret;
          }
        }
        return {
          line: null,
          column: null
        };
      };
      IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
        this.__generatedMappings = [];
        this.__originalMappings = [];
        for (var i = 0; i < this._sections.length; i++) {
          var section = this._sections[i];
          var sectionMappings = section.consumer._generatedMappings;
          for (var j = 0; j < sectionMappings.length; j++) {
            var mapping = sectionMappings[j];
            var source3 = section.consumer._sources.at(mapping.source);
            source3 = util.computeSourceURL(section.consumer.sourceRoot, source3, this._sourceMapURL);
            this._sources.add(source3);
            source3 = this._sources.indexOf(source3);
            var name = null;
            if (mapping.name) {
              name = section.consumer._names.at(mapping.name);
              this._names.add(name);
              name = this._names.indexOf(name);
            }
            var adjustedMapping = {
              source: source3,
              generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
              generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
              originalLine: mapping.originalLine,
              originalColumn: mapping.originalColumn,
              name
            };
            this.__generatedMappings.push(adjustedMapping);
            if (typeof adjustedMapping.originalLine === "number") {
              this.__originalMappings.push(adjustedMapping);
            }
          }
        }
        quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
        quickSort(this.__originalMappings, util.compareByOriginalPositions);
      };
      exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
    }
  });

  // node_modules/source-map/lib/source-node.js
  var require_source_node = __commonJS({
    "node_modules/source-map/lib/source-node.js"(exports) {
      var SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
      var util = require_util();
      var REGEX_NEWLINE = /(\r?\n)/;
      var NEWLINE_CODE = 10;
      var isSourceNode = "$$$isSourceNode$$$";
      function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
        this.children = [];
        this.sourceContents = {};
        this.line = aLine == null ? null : aLine;
        this.column = aColumn == null ? null : aColumn;
        this.source = aSource == null ? null : aSource;
        this.name = aName == null ? null : aName;
        this[isSourceNode] = true;
        if (aChunks != null)
          this.add(aChunks);
      }
      SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
        var node = new SourceNode();
        var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
        var remainingLinesIndex = 0;
        var shiftNextLine = function() {
          var lineContents = getNextLine();
          var newLine = getNextLine() || "";
          return lineContents + newLine;
          function getNextLine() {
            return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
          }
        };
        var lastGeneratedLine = 1, lastGeneratedColumn = 0;
        var lastMapping = null;
        aSourceMapConsumer.eachMapping(function(mapping) {
          if (lastMapping !== null) {
            if (lastGeneratedLine < mapping.generatedLine) {
              addMappingWithCode(lastMapping, shiftNextLine());
              lastGeneratedLine++;
              lastGeneratedColumn = 0;
            } else {
              var nextLine = remainingLines[remainingLinesIndex] || "";
              var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
              remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
              lastGeneratedColumn = mapping.generatedColumn;
              addMappingWithCode(lastMapping, code);
              lastMapping = mapping;
              return;
            }
          }
          while (lastGeneratedLine < mapping.generatedLine) {
            node.add(shiftNextLine());
            lastGeneratedLine++;
          }
          if (lastGeneratedColumn < mapping.generatedColumn) {
            var nextLine = remainingLines[remainingLinesIndex] || "";
            node.add(nextLine.substr(0, mapping.generatedColumn));
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
          }
          lastMapping = mapping;
        }, this);
        if (remainingLinesIndex < remainingLines.length) {
          if (lastMapping) {
            addMappingWithCode(lastMapping, shiftNextLine());
          }
          node.add(remainingLines.splice(remainingLinesIndex).join(""));
        }
        aSourceMapConsumer.sources.forEach(function(sourceFile) {
          var content = aSourceMapConsumer.sourceContentFor(sourceFile);
          if (content != null) {
            if (aRelativePath != null) {
              sourceFile = util.join(aRelativePath, sourceFile);
            }
            node.setSourceContent(sourceFile, content);
          }
        });
        return node;
        function addMappingWithCode(mapping, code) {
          if (mapping === null || mapping.source === void 0) {
            node.add(code);
          } else {
            var source3 = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
            node.add(new SourceNode(
              mapping.originalLine,
              mapping.originalColumn,
              source3,
              code,
              mapping.name
            ));
          }
        }
      };
      SourceNode.prototype.add = function SourceNode_add(aChunk) {
        if (Array.isArray(aChunk)) {
          aChunk.forEach(function(chunk) {
            this.add(chunk);
          }, this);
        } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
          if (aChunk) {
            this.children.push(aChunk);
          }
        } else {
          throw new TypeError(
            "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
          );
        }
        return this;
      };
      SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
        if (Array.isArray(aChunk)) {
          for (var i = aChunk.length - 1; i >= 0; i--) {
            this.prepend(aChunk[i]);
          }
        } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
          this.children.unshift(aChunk);
        } else {
          throw new TypeError(
            "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
          );
        }
        return this;
      };
      SourceNode.prototype.walk = function SourceNode_walk(aFn) {
        var chunk;
        for (var i = 0, len = this.children.length; i < len; i++) {
          chunk = this.children[i];
          if (chunk[isSourceNode]) {
            chunk.walk(aFn);
          } else {
            if (chunk !== "") {
              aFn(chunk, {
                source: this.source,
                line: this.line,
                column: this.column,
                name: this.name
              });
            }
          }
        }
      };
      SourceNode.prototype.join = function SourceNode_join(aSep) {
        var newChildren;
        var i;
        var len = this.children.length;
        if (len > 0) {
          newChildren = [];
          for (i = 0; i < len - 1; i++) {
            newChildren.push(this.children[i]);
            newChildren.push(aSep);
          }
          newChildren.push(this.children[i]);
          this.children = newChildren;
        }
        return this;
      };
      SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
        var lastChild = this.children[this.children.length - 1];
        if (lastChild[isSourceNode]) {
          lastChild.replaceRight(aPattern, aReplacement);
        } else if (typeof lastChild === "string") {
          this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
        } else {
          this.children.push("".replace(aPattern, aReplacement));
        }
        return this;
      };
      SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
        this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
      };
      SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
        for (var i = 0, len = this.children.length; i < len; i++) {
          if (this.children[i][isSourceNode]) {
            this.children[i].walkSourceContents(aFn);
          }
        }
        var sources = Object.keys(this.sourceContents);
        for (var i = 0, len = sources.length; i < len; i++) {
          aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
        }
      };
      SourceNode.prototype.toString = function SourceNode_toString() {
        var str = "";
        this.walk(function(chunk) {
          str += chunk;
        });
        return str;
      };
      SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
        var generated = {
          code: "",
          line: 1,
          column: 0
        };
        var map = new SourceMapGenerator(aArgs);
        var sourceMappingActive = false;
        var lastOriginalSource = null;
        var lastOriginalLine = null;
        var lastOriginalColumn = null;
        var lastOriginalName = null;
        this.walk(function(chunk, original) {
          generated.code += chunk;
          if (original.source !== null && original.line !== null && original.column !== null) {
            if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
              map.addMapping({
                source: original.source,
                original: {
                  line: original.line,
                  column: original.column
                },
                generated: {
                  line: generated.line,
                  column: generated.column
                },
                name: original.name
              });
            }
            lastOriginalSource = original.source;
            lastOriginalLine = original.line;
            lastOriginalColumn = original.column;
            lastOriginalName = original.name;
            sourceMappingActive = true;
          } else if (sourceMappingActive) {
            map.addMapping({
              generated: {
                line: generated.line,
                column: generated.column
              }
            });
            lastOriginalSource = null;
            sourceMappingActive = false;
          }
          for (var idx = 0, length = chunk.length; idx < length; idx++) {
            if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
              generated.line++;
              generated.column = 0;
              if (idx + 1 === length) {
                lastOriginalSource = null;
                sourceMappingActive = false;
              } else if (sourceMappingActive) {
                map.addMapping({
                  source: original.source,
                  original: {
                    line: original.line,
                    column: original.column
                  },
                  generated: {
                    line: generated.line,
                    column: generated.column
                  },
                  name: original.name
                });
              }
            } else {
              generated.column++;
            }
          }
        });
        this.walkSourceContents(function(sourceFile, sourceContent) {
          map.setSourceContent(sourceFile, sourceContent);
        });
        return { code: generated.code, map };
      };
      exports.SourceNode = SourceNode;
    }
  });

  // node_modules/source-map/source-map.js
  var require_source_map = __commonJS({
    "node_modules/source-map/source-map.js"(exports) {
      exports.SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
      exports.SourceMapConsumer = require_source_map_consumer().SourceMapConsumer;
      exports.SourceNode = require_source_node().SourceNode;
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/compiler/code-gen.js
  var require_code_gen = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/compiler/code-gen.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      var _utils = require_utils();
      var SourceNode = void 0;
      try {
        if (typeof define !== "function" || !define.amd) {
          SourceMap = require_source_map();
          SourceNode = SourceMap.SourceNode;
        }
      } catch (err) {
      }
      var SourceMap;
      if (!SourceNode) {
        SourceNode = function(line, column, srcFile, chunks) {
          this.src = "";
          if (chunks) {
            this.add(chunks);
          }
        };
        SourceNode.prototype = {
          add: function add(chunks) {
            if (_utils.isArray(chunks)) {
              chunks = chunks.join("");
            }
            this.src += chunks;
          },
          prepend: function prepend(chunks) {
            if (_utils.isArray(chunks)) {
              chunks = chunks.join("");
            }
            this.src = chunks + this.src;
          },
          toStringWithSourceMap: function toStringWithSourceMap() {
            return { code: this.toString() };
          },
          toString: function toString() {
            return this.src;
          }
        };
      }
      function castChunk(chunk, codeGen, loc) {
        if (_utils.isArray(chunk)) {
          var ret = [];
          for (var i = 0, len = chunk.length; i < len; i++) {
            ret.push(codeGen.wrap(chunk[i], loc));
          }
          return ret;
        } else if (typeof chunk === "boolean" || typeof chunk === "number") {
          return chunk + "";
        }
        return chunk;
      }
      function CodeGen(srcFile) {
        this.srcFile = srcFile;
        this.source = [];
      }
      CodeGen.prototype = {
        isEmpty: function isEmpty() {
          return !this.source.length;
        },
        prepend: function prepend(source3, loc) {
          this.source.unshift(this.wrap(source3, loc));
        },
        push: function push(source3, loc) {
          this.source.push(this.wrap(source3, loc));
        },
        merge: function merge() {
          var source3 = this.empty();
          this.each(function(line) {
            source3.add(["  ", line, "\n"]);
          });
          return source3;
        },
        each: function each(iter) {
          for (var i = 0, len = this.source.length; i < len; i++) {
            iter(this.source[i]);
          }
        },
        empty: function empty() {
          var loc = this.currentLocation || { start: {} };
          return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
        },
        wrap: function wrap(chunk) {
          var loc = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
          if (chunk instanceof SourceNode) {
            return chunk;
          }
          chunk = castChunk(chunk, this, loc);
          return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
        },
        functionCall: function functionCall(fn, type, params) {
          params = this.generateList(params);
          return this.wrap([fn, type ? "." + type + "(" : "(", params, ")"]);
        },
        quotedString: function quotedString(str) {
          return '"' + (str + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
        },
        objectLiteral: function objectLiteral(obj) {
          var _this = this;
          var pairs = [];
          Object.keys(obj).forEach(function(key) {
            var value = castChunk(obj[key], _this);
            if (value !== "undefined") {
              pairs.push([_this.quotedString(key), ":", value]);
            }
          });
          var ret = this.generateList(pairs);
          ret.prepend("{");
          ret.add("}");
          return ret;
        },
        generateList: function generateList(entries) {
          var ret = this.empty();
          for (var i = 0, len = entries.length; i < len; i++) {
            if (i) {
              ret.add(",");
            }
            ret.add(castChunk(entries[i], this));
          }
          return ret;
        },
        generateArray: function generateArray(entries) {
          var ret = this.generateList(entries);
          ret.prepend("[");
          ret.add("]");
          return ret;
        }
      };
      exports["default"] = CodeGen;
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars/compiler/javascript-compiler.js
  var require_javascript_compiler = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars/compiler/javascript-compiler.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _base = require_base();
      var _exception = require_exception();
      var _exception2 = _interopRequireDefault(_exception);
      var _utils = require_utils();
      var _codeGen = require_code_gen();
      var _codeGen2 = _interopRequireDefault(_codeGen);
      function Literal(value) {
        this.value = value;
      }
      function JavaScriptCompiler() {
      }
      JavaScriptCompiler.prototype = {
        // PUBLIC API: You can override these methods in a subclass to provide
        // alternative compiled forms for name lookup and buffering semantics
        nameLookup: function nameLookup(parent, name) {
          return this.internalNameLookup(parent, name);
        },
        depthedLookup: function depthedLookup(name) {
          return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(name), ")"];
        },
        compilerInfo: function compilerInfo() {
          var revision = _base.COMPILER_REVISION, versions = _base.REVISION_CHANGES[revision];
          return [revision, versions];
        },
        appendToBuffer: function appendToBuffer(source3, location, explicit) {
          if (!_utils.isArray(source3)) {
            source3 = [source3];
          }
          source3 = this.source.wrap(source3, location);
          if (this.environment.isSimple) {
            return ["return ", source3, ";"];
          } else if (explicit) {
            return ["buffer += ", source3, ";"];
          } else {
            source3.appendToBuffer = true;
            return source3;
          }
        },
        initializeBuffer: function initializeBuffer() {
          return this.quotedString("");
        },
        // END PUBLIC API
        internalNameLookup: function internalNameLookup(parent, name) {
          this.lookupPropertyFunctionIsUsed = true;
          return ["lookupProperty(", parent, ",", JSON.stringify(name), ")"];
        },
        lookupPropertyFunctionIsUsed: false,
        compile: function compile(environment, options, context, asObject) {
          this.environment = environment;
          this.options = options;
          this.stringParams = this.options.stringParams;
          this.trackIds = this.options.trackIds;
          this.precompile = !asObject;
          this.name = this.environment.name;
          this.isChild = !!context;
          this.context = context || {
            decorators: [],
            programs: [],
            environments: []
          };
          this.preamble();
          this.stackSlot = 0;
          this.stackVars = [];
          this.aliases = {};
          this.registers = { list: [] };
          this.hashes = [];
          this.compileStack = [];
          this.inlineStack = [];
          this.blockParams = [];
          this.compileChildren(environment, options);
          this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
          this.useBlockParams = this.useBlockParams || environment.useBlockParams;
          var opcodes = environment.opcodes, opcode = void 0, firstLoc = void 0, i = void 0, l = void 0;
          for (i = 0, l = opcodes.length; i < l; i++) {
            opcode = opcodes[i];
            this.source.currentLocation = opcode.loc;
            firstLoc = firstLoc || opcode.loc;
            this[opcode.opcode].apply(this, opcode.args);
          }
          this.source.currentLocation = firstLoc;
          this.pushSource("");
          if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
            throw new _exception2["default"]("Compile completed with content left on stack");
          }
          if (!this.decorators.isEmpty()) {
            this.useDecorators = true;
            this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), ";\n"]);
            this.decorators.push("return fn;");
            if (asObject) {
              this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]);
            } else {
              this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n");
              this.decorators.push("}\n");
              this.decorators = this.decorators.merge();
            }
          } else {
            this.decorators = void 0;
          }
          var fn = this.createFunctionContext(asObject);
          if (!this.isChild) {
            var ret = {
              compiler: this.compilerInfo(),
              main: fn
            };
            if (this.decorators) {
              ret.main_d = this.decorators;
              ret.useDecorators = true;
            }
            var _context = this.context;
            var programs = _context.programs;
            var decorators = _context.decorators;
            for (i = 0, l = programs.length; i < l; i++) {
              if (programs[i]) {
                ret[i] = programs[i];
                if (decorators[i]) {
                  ret[i + "_d"] = decorators[i];
                  ret.useDecorators = true;
                }
              }
            }
            if (this.environment.usePartial) {
              ret.usePartial = true;
            }
            if (this.options.data) {
              ret.useData = true;
            }
            if (this.useDepths) {
              ret.useDepths = true;
            }
            if (this.useBlockParams) {
              ret.useBlockParams = true;
            }
            if (this.options.compat) {
              ret.compat = true;
            }
            if (!asObject) {
              ret.compiler = JSON.stringify(ret.compiler);
              this.source.currentLocation = { start: { line: 1, column: 0 } };
              ret = this.objectLiteral(ret);
              if (options.srcName) {
                ret = ret.toStringWithSourceMap({ file: options.destName });
                ret.map = ret.map && ret.map.toString();
              } else {
                ret = ret.toString();
              }
            } else {
              ret.compilerOptions = this.options;
            }
            return ret;
          } else {
            return fn;
          }
        },
        preamble: function preamble() {
          this.lastContext = 0;
          this.source = new _codeGen2["default"](this.options.srcName);
          this.decorators = new _codeGen2["default"](this.options.srcName);
        },
        createFunctionContext: function createFunctionContext(asObject) {
          var _this = this;
          var varDeclarations = "";
          var locals = this.stackVars.concat(this.registers.list);
          if (locals.length > 0) {
            varDeclarations += ", " + locals.join(", ");
          }
          var aliasCount = 0;
          Object.keys(this.aliases).forEach(function(alias) {
            var node = _this.aliases[alias];
            if (node.children && node.referenceCount > 1) {
              varDeclarations += ", alias" + ++aliasCount + "=" + alias;
              node.children[0] = "alias" + aliasCount;
            }
          });
          if (this.lookupPropertyFunctionIsUsed) {
            varDeclarations += ", " + this.lookupPropertyFunctionVarDeclaration();
          }
          var params = ["container", "depth0", "helpers", "partials", "data"];
          if (this.useBlockParams || this.useDepths) {
            params.push("blockParams");
          }
          if (this.useDepths) {
            params.push("depths");
          }
          var source3 = this.mergeSource(varDeclarations);
          if (asObject) {
            params.push(source3);
            return Function.apply(this, params);
          } else {
            return this.source.wrap(["function(", params.join(","), ") {\n  ", source3, "}"]);
          }
        },
        mergeSource: function mergeSource(varDeclarations) {
          var isSimple = this.environment.isSimple, appendOnly = !this.forceBuffer, appendFirst = void 0, sourceSeen = void 0, bufferStart = void 0, bufferEnd = void 0;
          this.source.each(function(line) {
            if (line.appendToBuffer) {
              if (bufferStart) {
                line.prepend("  + ");
              } else {
                bufferStart = line;
              }
              bufferEnd = line;
            } else {
              if (bufferStart) {
                if (!sourceSeen) {
                  appendFirst = true;
                } else {
                  bufferStart.prepend("buffer += ");
                }
                bufferEnd.add(";");
                bufferStart = bufferEnd = void 0;
              }
              sourceSeen = true;
              if (!isSimple) {
                appendOnly = false;
              }
            }
          });
          if (appendOnly) {
            if (bufferStart) {
              bufferStart.prepend("return ");
              bufferEnd.add(";");
            } else if (!sourceSeen) {
              this.source.push('return "";');
            }
          } else {
            varDeclarations += ", buffer = " + (appendFirst ? "" : this.initializeBuffer());
            if (bufferStart) {
              bufferStart.prepend("return buffer + ");
              bufferEnd.add(";");
            } else {
              this.source.push("return buffer;");
            }
          }
          if (varDeclarations) {
            this.source.prepend("var " + varDeclarations.substring(2) + (appendFirst ? "" : ";\n"));
          }
          return this.source.merge();
        },
        lookupPropertyFunctionVarDeclaration: function lookupPropertyFunctionVarDeclaration() {
          return "\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim();
        },
        // [blockValue]
        //
        // On stack, before: hash, inverse, program, value
        // On stack, after: return value of blockHelperMissing
        //
        // The purpose of this opcode is to take a block of the form
        // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
        // replace it on the stack with the result of properly
        // invoking blockHelperMissing.
        blockValue: function blockValue(name) {
          var blockHelperMissing = this.aliasable("container.hooks.blockHelperMissing"), params = [this.contextName(0)];
          this.setupHelperArgs(name, 0, params);
          var blockName = this.popStack();
          params.splice(1, 0, blockName);
          this.push(this.source.functionCall(blockHelperMissing, "call", params));
        },
        // [ambiguousBlockValue]
        //
        // On stack, before: hash, inverse, program, value
        // Compiler value, before: lastHelper=value of last found helper, if any
        // On stack, after, if no lastHelper: same as [blockValue]
        // On stack, after, if lastHelper: value
        ambiguousBlockValue: function ambiguousBlockValue() {
          var blockHelperMissing = this.aliasable("container.hooks.blockHelperMissing"), params = [this.contextName(0)];
          this.setupHelperArgs("", 0, params, true);
          this.flushInline();
          var current = this.topStack();
          params.splice(1, 0, current);
          this.pushSource(["if (!", this.lastHelper, ") { ", current, " = ", this.source.functionCall(blockHelperMissing, "call", params), "}"]);
        },
        // [appendContent]
        //
        // On stack, before: ...
        // On stack, after: ...
        //
        // Appends the string value of `content` to the current buffer
        appendContent: function appendContent(content) {
          if (this.pendingContent) {
            content = this.pendingContent + content;
          } else {
            this.pendingLocation = this.source.currentLocation;
          }
          this.pendingContent = content;
        },
        // [append]
        //
        // On stack, before: value, ...
        // On stack, after: ...
        //
        // Coerces `value` to a String and appends it to the current buffer.
        //
        // If `value` is truthy, or 0, it is coerced into a string and appended
        // Otherwise, the empty string is appended
        append: function append() {
          if (this.isInline()) {
            this.replaceStack(function(current) {
              return [" != null ? ", current, ' : ""'];
            });
            this.pushSource(this.appendToBuffer(this.popStack()));
          } else {
            var local = this.popStack();
            this.pushSource(["if (", local, " != null) { ", this.appendToBuffer(local, void 0, true), " }"]);
            if (this.environment.isSimple) {
              this.pushSource(["else { ", this.appendToBuffer("''", void 0, true), " }"]);
            }
          }
        },
        // [appendEscaped]
        //
        // On stack, before: value, ...
        // On stack, after: ...
        //
        // Escape `value` and append it to the buffer
        appendEscaped: function appendEscaped() {
          this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
        },
        // [getContext]
        //
        // On stack, before: ...
        // On stack, after: ...
        // Compiler value, after: lastContext=depth
        //
        // Set the value of the `lastContext` compiler value to the depth
        getContext: function getContext(depth) {
          this.lastContext = depth;
        },
        // [pushContext]
        //
        // On stack, before: ...
        // On stack, after: currentContext, ...
        //
        // Pushes the value of the current context onto the stack.
        pushContext: function pushContext() {
          this.pushStackLiteral(this.contextName(this.lastContext));
        },
        // [lookupOnContext]
        //
        // On stack, before: ...
        // On stack, after: currentContext[name], ...
        //
        // Looks up the value of `name` on the current context and pushes
        // it onto the stack.
        lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
          var i = 0;
          if (!scoped && this.options.compat && !this.lastContext) {
            this.push(this.depthedLookup(parts[i++]));
          } else {
            this.pushContext();
          }
          this.resolvePath("context", parts, i, falsy, strict);
        },
        // [lookupBlockParam]
        //
        // On stack, before: ...
        // On stack, after: blockParam[name], ...
        //
        // Looks up the value of `parts` on the given block param and pushes
        // it onto the stack.
        lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
          this.useBlockParams = true;
          this.push(["blockParams[", blockParamId[0], "][", blockParamId[1], "]"]);
          this.resolvePath("context", parts, 1);
        },
        // [lookupData]
        //
        // On stack, before: ...
        // On stack, after: data, ...
        //
        // Push the data lookup operator
        lookupData: function lookupData(depth, parts, strict) {
          if (!depth) {
            this.pushStackLiteral("data");
          } else {
            this.pushStackLiteral("container.data(data, " + depth + ")");
          }
          this.resolvePath("data", parts, 0, true, strict);
        },
        resolvePath: function resolvePath(type, parts, i, falsy, strict) {
          var _this2 = this;
          if (this.options.strict || this.options.assumeObjects) {
            this.push(strictLookup(this.options.strict && strict, this, parts, i, type));
            return;
          }
          var len = parts.length;
          for (; i < len; i++) {
            this.replaceStack(function(current) {
              var lookup = _this2.nameLookup(current, parts[i], type);
              if (!falsy) {
                return [" != null ? ", lookup, " : ", current];
              } else {
                return [" && ", lookup];
              }
            });
          }
        },
        // [resolvePossibleLambda]
        //
        // On stack, before: value, ...
        // On stack, after: resolved value, ...
        //
        // If the `value` is a lambda, replace it on the stack by
        // the return value of the lambda
        resolvePossibleLambda: function resolvePossibleLambda() {
          this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
        },
        // [pushStringParam]
        //
        // On stack, before: ...
        // On stack, after: string, currentContext, ...
        //
        // This opcode is designed for use in string mode, which
        // provides the string value of a parameter along with its
        // depth rather than resolving it immediately.
        pushStringParam: function pushStringParam(string, type) {
          this.pushContext();
          this.pushString(type);
          if (type !== "SubExpression") {
            if (typeof string === "string") {
              this.pushString(string);
            } else {
              this.pushStackLiteral(string);
            }
          }
        },
        emptyHash: function emptyHash(omitEmpty) {
          if (this.trackIds) {
            this.push("{}");
          }
          if (this.stringParams) {
            this.push("{}");
            this.push("{}");
          }
          this.pushStackLiteral(omitEmpty ? "undefined" : "{}");
        },
        pushHash: function pushHash() {
          if (this.hash) {
            this.hashes.push(this.hash);
          }
          this.hash = { values: {}, types: [], contexts: [], ids: [] };
        },
        popHash: function popHash() {
          var hash = this.hash;
          this.hash = this.hashes.pop();
          if (this.trackIds) {
            this.push(this.objectLiteral(hash.ids));
          }
          if (this.stringParams) {
            this.push(this.objectLiteral(hash.contexts));
            this.push(this.objectLiteral(hash.types));
          }
          this.push(this.objectLiteral(hash.values));
        },
        // [pushString]
        //
        // On stack, before: ...
        // On stack, after: quotedString(string), ...
        //
        // Push a quoted version of `string` onto the stack
        pushString: function pushString(string) {
          this.pushStackLiteral(this.quotedString(string));
        },
        // [pushLiteral]
        //
        // On stack, before: ...
        // On stack, after: value, ...
        //
        // Pushes a value onto the stack. This operation prevents
        // the compiler from creating a temporary variable to hold
        // it.
        pushLiteral: function pushLiteral(value) {
          this.pushStackLiteral(value);
        },
        // [pushProgram]
        //
        // On stack, before: ...
        // On stack, after: program(guid), ...
        //
        // Push a program expression onto the stack. This takes
        // a compile-time guid and converts it into a runtime-accessible
        // expression.
        pushProgram: function pushProgram(guid) {
          if (guid != null) {
            this.pushStackLiteral(this.programExpression(guid));
          } else {
            this.pushStackLiteral(null);
          }
        },
        // [registerDecorator]
        //
        // On stack, before: hash, program, params..., ...
        // On stack, after: ...
        //
        // Pops off the decorator's parameters, invokes the decorator,
        // and inserts the decorator into the decorators list.
        registerDecorator: function registerDecorator(paramSize, name) {
          var foundDecorator = this.nameLookup("decorators", name, "decorator"), options = this.setupHelperArgs(name, paramSize);
          this.decorators.push(["fn = ", this.decorators.functionCall(foundDecorator, "", ["fn", "props", "container", options]), " || fn;"]);
        },
        // [invokeHelper]
        //
        // On stack, before: hash, inverse, program, params..., ...
        // On stack, after: result of helper invocation
        //
        // Pops off the helper's parameters, invokes the helper,
        // and pushes the helper's return value onto the stack.
        //
        // If the helper is not found, `helperMissing` is called.
        invokeHelper: function invokeHelper(paramSize, name, isSimple) {
          var nonHelper = this.popStack(), helper = this.setupHelper(paramSize, name);
          var possibleFunctionCalls = [];
          if (isSimple) {
            possibleFunctionCalls.push(helper.name);
          }
          possibleFunctionCalls.push(nonHelper);
          if (!this.options.strict) {
            possibleFunctionCalls.push(this.aliasable("container.hooks.helperMissing"));
          }
          var functionLookupCode = ["(", this.itemsSeparatedBy(possibleFunctionCalls, "||"), ")"];
          var functionCall = this.source.functionCall(functionLookupCode, "call", helper.callParams);
          this.push(functionCall);
        },
        itemsSeparatedBy: function itemsSeparatedBy(items, separator) {
          var result = [];
          result.push(items[0]);
          for (var i = 1; i < items.length; i++) {
            result.push(separator, items[i]);
          }
          return result;
        },
        // [invokeKnownHelper]
        //
        // On stack, before: hash, inverse, program, params..., ...
        // On stack, after: result of helper invocation
        //
        // This operation is used when the helper is known to exist,
        // so a `helperMissing` fallback is not required.
        invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
          var helper = this.setupHelper(paramSize, name);
          this.push(this.source.functionCall(helper.name, "call", helper.callParams));
        },
        // [invokeAmbiguous]
        //
        // On stack, before: hash, inverse, program, params..., ...
        // On stack, after: result of disambiguation
        //
        // This operation is used when an expression like `{{foo}}`
        // is provided, but we don't know at compile-time whether it
        // is a helper or a path.
        //
        // This operation emits more code than the other options,
        // and can be avoided by passing the `knownHelpers` and
        // `knownHelpersOnly` flags at compile-time.
        invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
          this.useRegister("helper");
          var nonHelper = this.popStack();
          this.emptyHash();
          var helper = this.setupHelper(0, name, helperCall);
          var helperName = this.lastHelper = this.nameLookup("helpers", name, "helper");
          var lookup = ["(", "(helper = ", helperName, " || ", nonHelper, ")"];
          if (!this.options.strict) {
            lookup[0] = "(helper = ";
            lookup.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"));
          }
          this.push(["(", lookup, helper.paramsInit ? ["),(", helper.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", helper.callParams), " : helper))"]);
        },
        // [invokePartial]
        //
        // On stack, before: context, ...
        // On stack after: result of partial invocation
        //
        // This operation pops off a context, invokes a partial with that context,
        // and pushes the result of the invocation back.
        invokePartial: function invokePartial(isDynamic, name, indent) {
          var params = [], options = this.setupParams(name, 1, params);
          if (isDynamic) {
            name = this.popStack();
            delete options.name;
          }
          if (indent) {
            options.indent = JSON.stringify(indent);
          }
          options.helpers = "helpers";
          options.partials = "partials";
          options.decorators = "container.decorators";
          if (!isDynamic) {
            params.unshift(this.nameLookup("partials", name, "partial"));
          } else {
            params.unshift(name);
          }
          if (this.options.compat) {
            options.depths = "depths";
          }
          options = this.objectLiteral(options);
          params.push(options);
          this.push(this.source.functionCall("container.invokePartial", "", params));
        },
        // [assignToHash]
        //
        // On stack, before: value, ..., hash, ...
        // On stack, after: ..., hash, ...
        //
        // Pops a value off the stack and assigns it to the current hash
        assignToHash: function assignToHash(key) {
          var value = this.popStack(), context = void 0, type = void 0, id = void 0;
          if (this.trackIds) {
            id = this.popStack();
          }
          if (this.stringParams) {
            type = this.popStack();
            context = this.popStack();
          }
          var hash = this.hash;
          if (context) {
            hash.contexts[key] = context;
          }
          if (type) {
            hash.types[key] = type;
          }
          if (id) {
            hash.ids[key] = id;
          }
          hash.values[key] = value;
        },
        pushId: function pushId(type, name, child) {
          if (type === "BlockParam") {
            this.pushStackLiteral("blockParams[" + name[0] + "].path[" + name[1] + "]" + (child ? " + " + JSON.stringify("." + child) : ""));
          } else if (type === "PathExpression") {
            this.pushString(name);
          } else if (type === "SubExpression") {
            this.pushStackLiteral("true");
          } else {
            this.pushStackLiteral("null");
          }
        },
        // HELPERS
        compiler: JavaScriptCompiler,
        compileChildren: function compileChildren(environment, options) {
          var children = environment.children, child = void 0, compiler = void 0;
          for (var i = 0, l = children.length; i < l; i++) {
            child = children[i];
            compiler = new this.compiler();
            var existing = this.matchExistingProgram(child);
            if (existing == null) {
              this.context.programs.push("");
              var index = this.context.programs.length;
              child.index = index;
              child.name = "program" + index;
              this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
              this.context.decorators[index] = compiler.decorators;
              this.context.environments[index] = child;
              this.useDepths = this.useDepths || compiler.useDepths;
              this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
              child.useDepths = this.useDepths;
              child.useBlockParams = this.useBlockParams;
            } else {
              child.index = existing.index;
              child.name = "program" + existing.index;
              this.useDepths = this.useDepths || existing.useDepths;
              this.useBlockParams = this.useBlockParams || existing.useBlockParams;
            }
          }
        },
        matchExistingProgram: function matchExistingProgram(child) {
          for (var i = 0, len = this.context.environments.length; i < len; i++) {
            var environment = this.context.environments[i];
            if (environment && environment.equals(child)) {
              return environment;
            }
          }
        },
        programExpression: function programExpression(guid) {
          var child = this.environment.children[guid], programParams = [child.index, "data", child.blockParams];
          if (this.useBlockParams || this.useDepths) {
            programParams.push("blockParams");
          }
          if (this.useDepths) {
            programParams.push("depths");
          }
          return "container.program(" + programParams.join(", ") + ")";
        },
        useRegister: function useRegister(name) {
          if (!this.registers[name]) {
            this.registers[name] = true;
            this.registers.list.push(name);
          }
        },
        push: function push(expr) {
          if (!(expr instanceof Literal)) {
            expr = this.source.wrap(expr);
          }
          this.inlineStack.push(expr);
          return expr;
        },
        pushStackLiteral: function pushStackLiteral(item) {
          this.push(new Literal(item));
        },
        pushSource: function pushSource(source3) {
          if (this.pendingContent) {
            this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
            this.pendingContent = void 0;
          }
          if (source3) {
            this.source.push(source3);
          }
        },
        replaceStack: function replaceStack(callback) {
          var prefix = ["("], stack = void 0, createdStack = void 0, usedLiteral = void 0;
          if (!this.isInline()) {
            throw new _exception2["default"]("replaceStack on non-inline");
          }
          var top = this.popStack(true);
          if (top instanceof Literal) {
            stack = [top.value];
            prefix = ["(", stack];
            usedLiteral = true;
          } else {
            createdStack = true;
            var _name = this.incrStack();
            prefix = ["((", this.push(_name), " = ", top, ")"];
            stack = this.topStack();
          }
          var item = callback.call(this, stack);
          if (!usedLiteral) {
            this.popStack();
          }
          if (createdStack) {
            this.stackSlot--;
          }
          this.push(prefix.concat(item, ")"));
        },
        incrStack: function incrStack() {
          this.stackSlot++;
          if (this.stackSlot > this.stackVars.length) {
            this.stackVars.push("stack" + this.stackSlot);
          }
          return this.topStackName();
        },
        topStackName: function topStackName() {
          return "stack" + this.stackSlot;
        },
        flushInline: function flushInline() {
          var inlineStack = this.inlineStack;
          this.inlineStack = [];
          for (var i = 0, len = inlineStack.length; i < len; i++) {
            var entry = inlineStack[i];
            if (entry instanceof Literal) {
              this.compileStack.push(entry);
            } else {
              var stack = this.incrStack();
              this.pushSource([stack, " = ", entry, ";"]);
              this.compileStack.push(stack);
            }
          }
        },
        isInline: function isInline() {
          return this.inlineStack.length;
        },
        popStack: function popStack(wrapped) {
          var inline = this.isInline(), item = (inline ? this.inlineStack : this.compileStack).pop();
          if (!wrapped && item instanceof Literal) {
            return item.value;
          } else {
            if (!inline) {
              if (!this.stackSlot) {
                throw new _exception2["default"]("Invalid stack pop");
              }
              this.stackSlot--;
            }
            return item;
          }
        },
        topStack: function topStack() {
          var stack = this.isInline() ? this.inlineStack : this.compileStack, item = stack[stack.length - 1];
          if (item instanceof Literal) {
            return item.value;
          } else {
            return item;
          }
        },
        contextName: function contextName(context) {
          if (this.useDepths && context) {
            return "depths[" + context + "]";
          } else {
            return "depth" + context;
          }
        },
        quotedString: function quotedString(str) {
          return this.source.quotedString(str);
        },
        objectLiteral: function objectLiteral(obj) {
          return this.source.objectLiteral(obj);
        },
        aliasable: function aliasable(name) {
          var ret = this.aliases[name];
          if (ret) {
            ret.referenceCount++;
            return ret;
          }
          ret = this.aliases[name] = this.source.wrap(name);
          ret.aliasable = true;
          ret.referenceCount = 1;
          return ret;
        },
        setupHelper: function setupHelper(paramSize, name, blockHelper) {
          var params = [], paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
          var foundHelper = this.nameLookup("helpers", name, "helper"), callContext = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
          return {
            params,
            paramsInit,
            name: foundHelper,
            callParams: [callContext].concat(params)
          };
        },
        setupParams: function setupParams(helper, paramSize, params) {
          var options = {}, contexts = [], types = [], ids = [], objectArgs = !params, param = void 0;
          if (objectArgs) {
            params = [];
          }
          options.name = this.quotedString(helper);
          options.hash = this.popStack();
          if (this.trackIds) {
            options.hashIds = this.popStack();
          }
          if (this.stringParams) {
            options.hashTypes = this.popStack();
            options.hashContexts = this.popStack();
          }
          var inverse = this.popStack(), program = this.popStack();
          if (program || inverse) {
            options.fn = program || "container.noop";
            options.inverse = inverse || "container.noop";
          }
          var i = paramSize;
          while (i--) {
            param = this.popStack();
            params[i] = param;
            if (this.trackIds) {
              ids[i] = this.popStack();
            }
            if (this.stringParams) {
              types[i] = this.popStack();
              contexts[i] = this.popStack();
            }
          }
          if (objectArgs) {
            options.args = this.source.generateArray(params);
          }
          if (this.trackIds) {
            options.ids = this.source.generateArray(ids);
          }
          if (this.stringParams) {
            options.types = this.source.generateArray(types);
            options.contexts = this.source.generateArray(contexts);
          }
          if (this.options.data) {
            options.data = "data";
          }
          if (this.useBlockParams) {
            options.blockParams = "blockParams";
          }
          return options;
        },
        setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
          var options = this.setupParams(helper, paramSize, params);
          options.loc = JSON.stringify(this.source.currentLocation);
          options = this.objectLiteral(options);
          if (useRegister) {
            this.useRegister("options");
            params.push("options");
            return ["options=", options];
          } else if (params) {
            params.push(options);
            return "";
          } else {
            return options;
          }
        }
      };
      (function() {
        var reservedWords = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" ");
        var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};
        for (var i = 0, l = reservedWords.length; i < l; i++) {
          compilerWords[reservedWords[i]] = true;
        }
      })();
      JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
        return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
      };
      function strictLookup(requireTerminal, compiler, parts, i, type) {
        var stack = compiler.popStack(), len = parts.length;
        if (requireTerminal) {
          len--;
        }
        for (; i < len; i++) {
          stack = compiler.nameLookup(stack, parts[i], type);
        }
        if (requireTerminal) {
          return [compiler.aliasable("container.strict"), "(", stack, ", ", compiler.quotedString(parts[i]), ", ", JSON.stringify(compiler.source.currentLocation), " )"];
        } else {
          return stack;
        }
      }
      exports["default"] = JavaScriptCompiler;
      module.exports = exports["default"];
    }
  });

  // node_modules/handlebars/dist/cjs/handlebars.js
  var require_handlebars = __commonJS({
    "node_modules/handlebars/dist/cjs/handlebars.js"(exports, module) {
      "use strict";
      exports.__esModule = true;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _handlebarsRuntime = require_handlebars_runtime();
      var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);
      var _handlebarsCompilerAst = require_ast();
      var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);
      var _handlebarsCompilerBase = require_base2();
      var _handlebarsCompilerCompiler = require_compiler();
      var _handlebarsCompilerJavascriptCompiler = require_javascript_compiler();
      var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);
      var _handlebarsCompilerVisitor = require_visitor();
      var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);
      var _handlebarsNoConflict = require_no_conflict();
      var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
      var _create = _handlebarsRuntime2["default"].create;
      function create() {
        var hb = _create();
        hb.compile = function(input, options) {
          return _handlebarsCompilerCompiler.compile(input, options, hb);
        };
        hb.precompile = function(input, options) {
          return _handlebarsCompilerCompiler.precompile(input, options, hb);
        };
        hb.AST = _handlebarsCompilerAst2["default"];
        hb.Compiler = _handlebarsCompilerCompiler.Compiler;
        hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2["default"];
        hb.Parser = _handlebarsCompilerBase.parser;
        hb.parse = _handlebarsCompilerBase.parse;
        hb.parseWithoutProcessing = _handlebarsCompilerBase.parseWithoutProcessing;
        return hb;
      }
      var inst = create();
      inst.create = create;
      _handlebarsNoConflict2["default"](inst);
      inst.Visitor = _handlebarsCompilerVisitor2["default"];
      inst["default"] = inst;
      exports["default"] = inst;
      module.exports = exports["default"];
    }
  });

  // node_modules/tom-select/dist/js/tom-select.complete.js
  var require_tom_select_complete = __commonJS({
    "node_modules/tom-select/dist/js/tom-select.complete.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.TomSelect = factory());
      })(exports, function() {
        "use strict";
        function forEvents(events, callback) {
          events.split(/\s+/).forEach((event) => {
            callback(event);
          });
        }
        class MicroEvent {
          constructor() {
            this._events = void 0;
            this._events = {};
          }
          on(events, fct) {
            forEvents(events, (event) => {
              const event_array = this._events[event] || [];
              event_array.push(fct);
              this._events[event] = event_array;
            });
          }
          off(events, fct) {
            var n = arguments.length;
            if (n === 0) {
              this._events = {};
              return;
            }
            forEvents(events, (event) => {
              if (n === 1) {
                delete this._events[event];
                return;
              }
              const event_array = this._events[event];
              if (event_array === void 0)
                return;
              event_array.splice(event_array.indexOf(fct), 1);
              this._events[event] = event_array;
            });
          }
          trigger(events, ...args) {
            var self2 = this;
            forEvents(events, (event) => {
              const event_array = self2._events[event];
              if (event_array === void 0)
                return;
              event_array.forEach((fct) => {
                fct.apply(self2, args);
              });
            });
          }
        }
        function MicroPlugin(Interface) {
          Interface.plugins = {};
          return class extends Interface {
            constructor(...args) {
              super(...args);
              this.plugins = {
                names: [],
                settings: {},
                requested: {},
                loaded: {}
              };
            }
            /**
             * Registers a plugin.
             *
             * @param {function} fn
             */
            static define(name, fn) {
              Interface.plugins[name] = {
                "name": name,
                "fn": fn
              };
            }
            /**
             * Initializes the listed plugins (with options).
             * Acceptable formats:
             *
             * List (without options):
             *   ['a', 'b', 'c']
             *
             * List (with options):
             *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
             *
             * Hash (with options):
             *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
             *
             * @param {array|object} plugins
             */
            initializePlugins(plugins) {
              var key, name;
              const self2 = this;
              const queue = [];
              if (Array.isArray(plugins)) {
                plugins.forEach((plugin) => {
                  if (typeof plugin === "string") {
                    queue.push(plugin);
                  } else {
                    self2.plugins.settings[plugin.name] = plugin.options;
                    queue.push(plugin.name);
                  }
                });
              } else if (plugins) {
                for (key in plugins) {
                  if (plugins.hasOwnProperty(key)) {
                    self2.plugins.settings[key] = plugins[key];
                    queue.push(key);
                  }
                }
              }
              while (name = queue.shift()) {
                self2.require(name);
              }
            }
            loadPlugin(name) {
              var self2 = this;
              var plugins = self2.plugins;
              var plugin = Interface.plugins[name];
              if (!Interface.plugins.hasOwnProperty(name)) {
                throw new Error('Unable to find "' + name + '" plugin');
              }
              plugins.requested[name] = true;
              plugins.loaded[name] = plugin.fn.apply(self2, [self2.plugins.settings[name] || {}]);
              plugins.names.push(name);
            }
            /**
             * Initializes a plugin.
             *
             */
            require(name) {
              var self2 = this;
              var plugins = self2.plugins;
              if (!self2.plugins.loaded.hasOwnProperty(name)) {
                if (plugins.requested[name]) {
                  throw new Error('Plugin has circular dependency ("' + name + '")');
                }
                self2.loadPlugin(name);
              }
              return plugins.loaded[name];
            }
          };
        }
        const arrayToPattern = (chars) => {
          chars = chars.filter(Boolean);
          if (chars.length < 2) {
            return chars[0] || "";
          }
          return maxValueLength(chars) == 1 ? "[" + chars.join("") + "]" : "(?:" + chars.join("|") + ")";
        };
        const sequencePattern = (array) => {
          if (!hasDuplicates(array)) {
            return array.join("");
          }
          let pattern = "";
          let prev_char_count = 0;
          const prev_pattern = () => {
            if (prev_char_count > 1) {
              pattern += "{" + prev_char_count + "}";
            }
          };
          array.forEach((char, i) => {
            if (char === array[i - 1]) {
              prev_char_count++;
              return;
            }
            prev_pattern();
            pattern += char;
            prev_char_count = 1;
          });
          prev_pattern();
          return pattern;
        };
        const setToPattern = (chars) => {
          let array = toArray(chars);
          return arrayToPattern(array);
        };
        const hasDuplicates = (array) => {
          return new Set(array).size !== array.length;
        };
        const escape_regex = (str) => {
          return (str + "").replace(/([\$\(\)\*\+\.\?\[\]\^\{\|\}\\])/gu, "\\$1");
        };
        const maxValueLength = (array) => {
          return array.reduce((longest, value) => Math.max(longest, unicodeLength(value)), 0);
        };
        const unicodeLength = (str) => {
          return toArray(str).length;
        };
        const toArray = (p) => Array.from(p);
        const allSubstrings = (input) => {
          if (input.length === 1)
            return [[input]];
          let result = [];
          const start = input.substring(1);
          const suba = allSubstrings(start);
          suba.forEach(function(subresult) {
            let tmp = subresult.slice(0);
            tmp[0] = input.charAt(0) + tmp[0];
            result.push(tmp);
            tmp = subresult.slice(0);
            tmp.unshift(input.charAt(0));
            result.push(tmp);
          });
          return result;
        };
        const code_points = [[0, 65535]];
        const accent_pat = "[\u0300-\u036F\xB7\u02BE\u02BC]";
        let unicode_map;
        let multi_char_reg;
        const max_char_length = 3;
        const latin_convert = {};
        const latin_condensed = {
          "/": "\u2044\u2215",
          "0": "\u07C0",
          "a": "\u2C65\u0250\u0251",
          "aa": "\uA733",
          "ae": "\xE6\u01FD\u01E3",
          "ao": "\uA735",
          "au": "\uA737",
          "av": "\uA739\uA73B",
          "ay": "\uA73D",
          "b": "\u0180\u0253\u0183",
          "c": "\uA73F\u0188\u023C\u2184",
          "d": "\u0111\u0257\u0256\u1D05\u018C\uABB7\u0501\u0266",
          "e": "\u025B\u01DD\u1D07\u0247",
          "f": "\uA77C\u0192",
          "g": "\u01E5\u0260\uA7A1\u1D79\uA77F\u0262",
          "h": "\u0127\u2C68\u2C76\u0265",
          "i": "\u0268\u0131",
          "j": "\u0249\u0237",
          "k": "\u0199\u2C6A\uA741\uA743\uA745\uA7A3",
          "l": "\u0142\u019A\u026B\u2C61\uA749\uA747\uA781\u026D",
          "m": "\u0271\u026F\u03FB",
          "n": "\uA7A5\u019E\u0272\uA791\u1D0E\u043B\u0509",
          "o": "\xF8\u01FF\u0254\u0275\uA74B\uA74D\u1D11",
          "oe": "\u0153",
          "oi": "\u01A3",
          "oo": "\uA74F",
          "ou": "\u0223",
          "p": "\u01A5\u1D7D\uA751\uA753\uA755\u03C1",
          "q": "\uA757\uA759\u024B",
          "r": "\u024D\u027D\uA75B\uA7A7\uA783",
          "s": "\xDF\u023F\uA7A9\uA785\u0282",
          "t": "\u0167\u01AD\u0288\u2C66\uA787",
          "th": "\xFE",
          "tz": "\uA729",
          "u": "\u0289",
          "v": "\u028B\uA75F\u028C",
          "vy": "\uA761",
          "w": "\u2C73",
          "y": "\u01B4\u024F\u1EFF",
          "z": "\u01B6\u0225\u0240\u2C6C\uA763",
          "hv": "\u0195"
        };
        for (let latin in latin_condensed) {
          let unicode = latin_condensed[latin] || "";
          for (let i = 0; i < unicode.length; i++) {
            let char = unicode.substring(i, i + 1);
            latin_convert[char] = latin;
          }
        }
        const convert_pat = new RegExp(Object.keys(latin_convert).join("|") + "|" + accent_pat, "gu");
        const initialize = (_code_points) => {
          if (unicode_map !== void 0)
            return;
          unicode_map = generateMap(_code_points || code_points);
        };
        const normalize = (str, form = "NFKD") => str.normalize(form);
        const asciifold = (str) => {
          return toArray(str).reduce(
            /**
             * @param {string} result
             * @param {string} char
             */
            (result, char) => {
              return result + _asciifold(char);
            },
            ""
          );
        };
        const _asciifold = (str) => {
          str = normalize(str).toLowerCase().replace(convert_pat, (char) => {
            return latin_convert[char] || "";
          });
          return normalize(str, "NFC");
        };
        function* generator(code_points2) {
          for (const [code_point_min, code_point_max] of code_points2) {
            for (let i = code_point_min; i <= code_point_max; i++) {
              let composed = String.fromCharCode(i);
              let folded = asciifold(composed);
              if (folded == composed.toLowerCase()) {
                continue;
              }
              if (folded.length > max_char_length) {
                continue;
              }
              if (folded.length == 0) {
                continue;
              }
              yield {
                folded,
                composed,
                code_point: i
              };
            }
          }
        }
        const generateSets = (code_points2) => {
          const unicode_sets = {};
          const addMatching = (folded, to_add) => {
            const folded_set = unicode_sets[folded] || /* @__PURE__ */ new Set();
            const patt = new RegExp("^" + setToPattern(folded_set) + "$", "iu");
            if (to_add.match(patt)) {
              return;
            }
            folded_set.add(escape_regex(to_add));
            unicode_sets[folded] = folded_set;
          };
          for (let value of generator(code_points2)) {
            addMatching(value.folded, value.folded);
            addMatching(value.folded, value.composed);
          }
          return unicode_sets;
        };
        const generateMap = (code_points2) => {
          const unicode_sets = generateSets(code_points2);
          const unicode_map2 = {};
          let multi_char = [];
          for (let folded in unicode_sets) {
            let set = unicode_sets[folded];
            if (set) {
              unicode_map2[folded] = setToPattern(set);
            }
            if (folded.length > 1) {
              multi_char.push(escape_regex(folded));
            }
          }
          multi_char.sort((a, b) => b.length - a.length);
          const multi_char_patt = arrayToPattern(multi_char);
          multi_char_reg = new RegExp("^" + multi_char_patt, "u");
          return unicode_map2;
        };
        const mapSequence = (strings, min_replacement = 1) => {
          let chars_replaced = 0;
          strings = strings.map((str) => {
            if (unicode_map[str]) {
              chars_replaced += str.length;
            }
            return unicode_map[str] || str;
          });
          if (chars_replaced >= min_replacement) {
            return sequencePattern(strings);
          }
          return "";
        };
        const substringsToPattern = (str, min_replacement = 1) => {
          min_replacement = Math.max(min_replacement, str.length - 1);
          return arrayToPattern(allSubstrings(str).map((sub_pat) => {
            return mapSequence(sub_pat, min_replacement);
          }));
        };
        const sequencesToPattern = (sequences, all = true) => {
          let min_replacement = sequences.length > 1 ? 1 : 0;
          return arrayToPattern(sequences.map((sequence) => {
            let seq = [];
            const len = all ? sequence.length() : sequence.length() - 1;
            for (let j = 0; j < len; j++) {
              seq.push(substringsToPattern(sequence.substrs[j] || "", min_replacement));
            }
            return sequencePattern(seq);
          }));
        };
        const inSequences = (needle_seq, sequences) => {
          for (const seq of sequences) {
            if (seq.start != needle_seq.start || seq.end != needle_seq.end) {
              continue;
            }
            if (seq.substrs.join("") !== needle_seq.substrs.join("")) {
              continue;
            }
            let needle_parts = needle_seq.parts;
            const filter = (part) => {
              for (const needle_part of needle_parts) {
                if (needle_part.start === part.start && needle_part.substr === part.substr) {
                  return false;
                }
                if (part.length == 1 || needle_part.length == 1) {
                  continue;
                }
                if (part.start < needle_part.start && part.end > needle_part.start) {
                  return true;
                }
                if (needle_part.start < part.start && needle_part.end > part.start) {
                  return true;
                }
              }
              return false;
            };
            let filtered = seq.parts.filter(filter);
            if (filtered.length > 0) {
              continue;
            }
            return true;
          }
          return false;
        };
        class Sequence {
          constructor() {
            this.parts = [];
            this.substrs = [];
            this.start = 0;
            this.end = 0;
          }
          /**
           * @param {TSequencePart|undefined} part
           */
          add(part) {
            if (part) {
              this.parts.push(part);
              this.substrs.push(part.substr);
              this.start = Math.min(part.start, this.start);
              this.end = Math.max(part.end, this.end);
            }
          }
          last() {
            return this.parts[this.parts.length - 1];
          }
          length() {
            return this.parts.length;
          }
          /**
           * @param {number} position
           * @param {TSequencePart} last_piece
           */
          clone(position, last_piece) {
            let clone = new Sequence();
            let parts = JSON.parse(JSON.stringify(this.parts));
            let last_part = parts.pop();
            for (const part of parts) {
              clone.add(part);
            }
            let last_substr = last_piece.substr.substring(0, position - last_part.start);
            let clone_last_len = last_substr.length;
            clone.add({
              start: last_part.start,
              end: last_part.start + clone_last_len,
              length: clone_last_len,
              substr: last_substr
            });
            return clone;
          }
        }
        const getPattern = (str) => {
          initialize();
          str = asciifold(str);
          let pattern = "";
          let sequences = [new Sequence()];
          for (let i = 0; i < str.length; i++) {
            let substr = str.substring(i);
            let match = substr.match(multi_char_reg);
            const char = str.substring(i, i + 1);
            const match_str = match ? match[0] : null;
            let overlapping = [];
            let added_types = /* @__PURE__ */ new Set();
            for (const sequence of sequences) {
              const last_piece = sequence.last();
              if (!last_piece || last_piece.length == 1 || last_piece.end <= i) {
                if (match_str) {
                  const len = match_str.length;
                  sequence.add({
                    start: i,
                    end: i + len,
                    length: len,
                    substr: match_str
                  });
                  added_types.add("1");
                } else {
                  sequence.add({
                    start: i,
                    end: i + 1,
                    length: 1,
                    substr: char
                  });
                  added_types.add("2");
                }
              } else if (match_str) {
                let clone = sequence.clone(i, last_piece);
                const len = match_str.length;
                clone.add({
                  start: i,
                  end: i + len,
                  length: len,
                  substr: match_str
                });
                overlapping.push(clone);
              } else {
                added_types.add("3");
              }
            }
            if (overlapping.length > 0) {
              overlapping = overlapping.sort((a, b) => {
                return a.length() - b.length();
              });
              for (let clone of overlapping) {
                if (inSequences(clone, sequences)) {
                  continue;
                }
                sequences.push(clone);
              }
              continue;
            }
            if (i > 0 && added_types.size == 1 && !added_types.has("3")) {
              pattern += sequencesToPattern(sequences, false);
              let new_seq = new Sequence();
              const old_seq = sequences[0];
              if (old_seq) {
                new_seq.add(old_seq.last());
              }
              sequences = [new_seq];
            }
          }
          pattern += sequencesToPattern(sequences, true);
          return pattern;
        };
        const getAttr = (obj, name) => {
          if (!obj)
            return;
          return obj[name];
        };
        const getAttrNesting = (obj, name) => {
          if (!obj)
            return;
          var part, names = name.split(".");
          while ((part = names.shift()) && (obj = obj[part]))
            ;
          return obj;
        };
        const scoreValue = (value, token, weight) => {
          var score, pos;
          if (!value)
            return 0;
          value = value + "";
          if (token.regex == null)
            return 0;
          pos = value.search(token.regex);
          if (pos === -1)
            return 0;
          score = token.string.length / value.length;
          if (pos === 0)
            score += 0.5;
          return score * weight;
        };
        const propToArray = (obj, key) => {
          var value = obj[key];
          if (typeof value == "function")
            return value;
          if (value && !Array.isArray(value)) {
            obj[key] = [value];
          }
        };
        const iterate$1 = (object, callback) => {
          if (Array.isArray(object)) {
            object.forEach(callback);
          } else {
            for (var key in object) {
              if (object.hasOwnProperty(key)) {
                callback(object[key], key);
              }
            }
          }
        };
        const cmp = (a, b) => {
          if (typeof a === "number" && typeof b === "number") {
            return a > b ? 1 : a < b ? -1 : 0;
          }
          a = asciifold(a + "").toLowerCase();
          b = asciifold(b + "").toLowerCase();
          if (a > b)
            return 1;
          if (b > a)
            return -1;
          return 0;
        };
        class Sifter {
          // []|{};
          /**
           * Textually searches arrays and hashes of objects
           * by property (or multiple properties). Designed
           * specifically for autocomplete.
           *
           */
          constructor(items, settings) {
            this.items = void 0;
            this.settings = void 0;
            this.items = items;
            this.settings = settings || {
              diacritics: true
            };
          }
          /**
           * Splits a search string into an array of individual
           * regexps to be used to match results.
           *
           */
          tokenize(query, respect_word_boundaries, weights) {
            if (!query || !query.length)
              return [];
            const tokens = [];
            const words = query.split(/\s+/);
            var field_regex;
            if (weights) {
              field_regex = new RegExp("^(" + Object.keys(weights).map(escape_regex).join("|") + "):(.*)$");
            }
            words.forEach((word) => {
              let field_match;
              let field = null;
              let regex = null;
              if (field_regex && (field_match = word.match(field_regex))) {
                field = field_match[1];
                word = field_match[2];
              }
              if (word.length > 0) {
                if (this.settings.diacritics) {
                  regex = getPattern(word) || null;
                } else {
                  regex = escape_regex(word);
                }
                if (regex && respect_word_boundaries)
                  regex = "\\b" + regex;
              }
              tokens.push({
                string: word,
                regex: regex ? new RegExp(regex, "iu") : null,
                field
              });
            });
            return tokens;
          }
          /**
           * Returns a function to be used to score individual results.
           *
           * Good matches will have a higher score than poor matches.
           * If an item is not a match, 0 will be returned by the function.
           *
           * @returns {T.ScoreFn}
           */
          getScoreFunction(query, options) {
            var search = this.prepareSearch(query, options);
            return this._getScoreFunction(search);
          }
          /**
           * @returns {T.ScoreFn}
           *
           */
          _getScoreFunction(search) {
            const tokens = search.tokens, token_count = tokens.length;
            if (!token_count) {
              return function() {
                return 0;
              };
            }
            const fields = search.options.fields, weights = search.weights, field_count = fields.length, getAttrFn = search.getAttrFn;
            if (!field_count) {
              return function() {
                return 1;
              };
            }
            const scoreObject = function() {
              if (field_count === 1) {
                return function(token, data) {
                  const field = fields[0].field;
                  return scoreValue(getAttrFn(data, field), token, weights[field] || 1);
                };
              }
              return function(token, data) {
                var sum = 0;
                if (token.field) {
                  const value = getAttrFn(data, token.field);
                  if (!token.regex && value) {
                    sum += 1 / field_count;
                  } else {
                    sum += scoreValue(value, token, 1);
                  }
                } else {
                  iterate$1(weights, (weight, field) => {
                    sum += scoreValue(getAttrFn(data, field), token, weight);
                  });
                }
                return sum / field_count;
              };
            }();
            if (token_count === 1) {
              return function(data) {
                return scoreObject(tokens[0], data);
              };
            }
            if (search.options.conjunction === "and") {
              return function(data) {
                var score, sum = 0;
                for (let token of tokens) {
                  score = scoreObject(token, data);
                  if (score <= 0)
                    return 0;
                  sum += score;
                }
                return sum / token_count;
              };
            } else {
              return function(data) {
                var sum = 0;
                iterate$1(tokens, (token) => {
                  sum += scoreObject(token, data);
                });
                return sum / token_count;
              };
            }
          }
          /**
           * Returns a function that can be used to compare two
           * results, for sorting purposes. If no sorting should
           * be performed, `null` will be returned.
           *
           * @return function(a,b)
           */
          getSortFunction(query, options) {
            var search = this.prepareSearch(query, options);
            return this._getSortFunction(search);
          }
          _getSortFunction(search) {
            var implicit_score, sort_flds = [];
            const self2 = this, options = search.options, sort = !search.query && options.sort_empty ? options.sort_empty : options.sort;
            if (typeof sort == "function") {
              return sort.bind(this);
            }
            const get_field = function get_field2(name, result) {
              if (name === "$score")
                return result.score;
              return search.getAttrFn(self2.items[result.id], name);
            };
            if (sort) {
              for (let s of sort) {
                if (search.query || s.field !== "$score") {
                  sort_flds.push(s);
                }
              }
            }
            if (search.query) {
              implicit_score = true;
              for (let fld of sort_flds) {
                if (fld.field === "$score") {
                  implicit_score = false;
                  break;
                }
              }
              if (implicit_score) {
                sort_flds.unshift({
                  field: "$score",
                  direction: "desc"
                });
              }
            } else {
              sort_flds = sort_flds.filter((fld) => fld.field !== "$score");
            }
            const sort_flds_count = sort_flds.length;
            if (!sort_flds_count) {
              return null;
            }
            return function(a, b) {
              var result, field;
              for (let sort_fld of sort_flds) {
                field = sort_fld.field;
                let multiplier = sort_fld.direction === "desc" ? -1 : 1;
                result = multiplier * cmp(get_field(field, a), get_field(field, b));
                if (result)
                  return result;
              }
              return 0;
            };
          }
          /**
           * Parses a search query and returns an object
           * with tokens and fields ready to be populated
           * with results.
           *
           */
          prepareSearch(query, optsUser) {
            const weights = {};
            var options = Object.assign({}, optsUser);
            propToArray(options, "sort");
            propToArray(options, "sort_empty");
            if (options.fields) {
              propToArray(options, "fields");
              const fields = [];
              options.fields.forEach((field) => {
                if (typeof field == "string") {
                  field = {
                    field,
                    weight: 1
                  };
                }
                fields.push(field);
                weights[field.field] = "weight" in field ? field.weight : 1;
              });
              options.fields = fields;
            }
            return {
              options,
              query: query.toLowerCase().trim(),
              tokens: this.tokenize(query, options.respect_word_boundaries, weights),
              total: 0,
              items: [],
              weights,
              getAttrFn: options.nesting ? getAttrNesting : getAttr
            };
          }
          /**
           * Searches through all items and returns a sorted array of matches.
           *
           */
          search(query, options) {
            var self2 = this, score, search;
            search = this.prepareSearch(query, options);
            options = search.options;
            query = search.query;
            const fn_score = options.score || self2._getScoreFunction(search);
            if (query.length) {
              iterate$1(self2.items, (item, id) => {
                score = fn_score(item);
                if (options.filter === false || score > 0) {
                  search.items.push({
                    "score": score,
                    "id": id
                  });
                }
              });
            } else {
              iterate$1(self2.items, (_, id) => {
                search.items.push({
                  "score": 1,
                  "id": id
                });
              });
            }
            const fn_sort = self2._getSortFunction(search);
            if (fn_sort)
              search.items.sort(fn_sort);
            search.total = search.items.length;
            if (typeof options.limit === "number") {
              search.items = search.items.slice(0, options.limit);
            }
            return search;
          }
        }
        const iterate = (object, callback) => {
          if (Array.isArray(object)) {
            object.forEach(callback);
          } else {
            for (var key in object) {
              if (object.hasOwnProperty(key)) {
                callback(object[key], key);
              }
            }
          }
        };
        const getDom = (query) => {
          if (query.jquery) {
            return query[0];
          }
          if (query instanceof HTMLElement) {
            return query;
          }
          if (isHtmlString(query)) {
            var tpl = document.createElement("template");
            tpl.innerHTML = query.trim();
            return tpl.content.firstChild;
          }
          return document.querySelector(query);
        };
        const isHtmlString = (arg) => {
          if (typeof arg === "string" && arg.indexOf("<") > -1) {
            return true;
          }
          return false;
        };
        const escapeQuery = (query) => {
          return query.replace(/['"\\]/g, "\\$&");
        };
        const triggerEvent = (dom_el, event_name) => {
          var event = document.createEvent("HTMLEvents");
          event.initEvent(event_name, true, false);
          dom_el.dispatchEvent(event);
        };
        const applyCSS = (dom_el, css) => {
          Object.assign(dom_el.style, css);
        };
        const addClasses = (elmts, ...classes) => {
          var norm_classes = classesArray(classes);
          elmts = castAsArray(elmts);
          elmts.map((el) => {
            norm_classes.map((cls) => {
              el.classList.add(cls);
            });
          });
        };
        const removeClasses = (elmts, ...classes) => {
          var norm_classes = classesArray(classes);
          elmts = castAsArray(elmts);
          elmts.map((el) => {
            norm_classes.map((cls) => {
              el.classList.remove(cls);
            });
          });
        };
        const classesArray = (args) => {
          var classes = [];
          iterate(args, (_classes) => {
            if (typeof _classes === "string") {
              _classes = _classes.trim().split(/[\11\12\14\15\40]/);
            }
            if (Array.isArray(_classes)) {
              classes = classes.concat(_classes);
            }
          });
          return classes.filter(Boolean);
        };
        const castAsArray = (arg) => {
          if (!Array.isArray(arg)) {
            arg = [arg];
          }
          return arg;
        };
        const parentMatch = (target, selector, wrapper) => {
          if (wrapper && !wrapper.contains(target)) {
            return;
          }
          while (target && target.matches) {
            if (target.matches(selector)) {
              return target;
            }
            target = target.parentNode;
          }
        };
        const getTail = (list, direction = 0) => {
          if (direction > 0) {
            return list[list.length - 1];
          }
          return list[0];
        };
        const isEmptyObject = (obj) => {
          return Object.keys(obj).length === 0;
        };
        const nodeIndex = (el, amongst) => {
          if (!el)
            return -1;
          amongst = amongst || el.nodeName;
          var i = 0;
          while (el = el.previousElementSibling) {
            if (el.matches(amongst)) {
              i++;
            }
          }
          return i;
        };
        const setAttr = (el, attrs) => {
          iterate(attrs, (val, attr) => {
            if (val == null) {
              el.removeAttribute(attr);
            } else {
              el.setAttribute(attr, "" + val);
            }
          });
        };
        const replaceNode = (existing, replacement) => {
          if (existing.parentNode)
            existing.parentNode.replaceChild(replacement, existing);
        };
        const highlight = (element, regex) => {
          if (regex === null)
            return;
          if (typeof regex === "string") {
            if (!regex.length)
              return;
            regex = new RegExp(regex, "i");
          }
          const highlightText = (node) => {
            var match = node.data.match(regex);
            if (match && node.data.length > 0) {
              var spannode = document.createElement("span");
              spannode.className = "highlight";
              var middlebit = node.splitText(match.index);
              middlebit.splitText(match[0].length);
              var middleclone = middlebit.cloneNode(true);
              spannode.appendChild(middleclone);
              replaceNode(middlebit, spannode);
              return 1;
            }
            return 0;
          };
          const highlightChildren = (node) => {
            if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName) && (node.className !== "highlight" || node.tagName !== "SPAN")) {
              Array.from(node.childNodes).forEach((element2) => {
                highlightRecursive(element2);
              });
            }
          };
          const highlightRecursive = (node) => {
            if (node.nodeType === 3) {
              return highlightText(node);
            }
            highlightChildren(node);
            return 0;
          };
          highlightRecursive(element);
        };
        const removeHighlight = (el) => {
          var elements = el.querySelectorAll("span.highlight");
          Array.prototype.forEach.call(elements, function(el2) {
            var parent = el2.parentNode;
            parent.replaceChild(el2.firstChild, el2);
            parent.normalize();
          });
        };
        const KEY_A = 65;
        const KEY_RETURN = 13;
        const KEY_ESC = 27;
        const KEY_LEFT = 37;
        const KEY_UP = 38;
        const KEY_RIGHT = 39;
        const KEY_DOWN = 40;
        const KEY_BACKSPACE = 8;
        const KEY_DELETE = 46;
        const KEY_TAB = 9;
        const IS_MAC = typeof navigator === "undefined" ? false : /Mac/.test(navigator.userAgent);
        const KEY_SHORTCUT = IS_MAC ? "metaKey" : "ctrlKey";
        var defaults = {
          options: [],
          optgroups: [],
          plugins: [],
          delimiter: ",",
          splitOn: null,
          // regexp or string for splitting up values from a paste command
          persist: true,
          diacritics: true,
          create: null,
          createOnBlur: false,
          createFilter: null,
          highlight: true,
          openOnFocus: true,
          shouldOpen: null,
          maxOptions: 50,
          maxItems: null,
          hideSelected: null,
          duplicates: false,
          addPrecedence: false,
          selectOnTab: false,
          preload: null,
          allowEmptyOption: false,
          //closeAfterSelect: false,
          refreshThrottle: 300,
          loadThrottle: 300,
          loadingClass: "loading",
          dataAttr: null,
          //'data-data',
          optgroupField: "optgroup",
          valueField: "value",
          labelField: "text",
          disabledField: "disabled",
          optgroupLabelField: "label",
          optgroupValueField: "value",
          lockOptgroupOrder: false,
          sortField: "$order",
          searchField: ["text"],
          searchConjunction: "and",
          mode: null,
          wrapperClass: "ts-wrapper",
          controlClass: "ts-control",
          dropdownClass: "ts-dropdown",
          dropdownContentClass: "ts-dropdown-content",
          itemClass: "item",
          optionClass: "option",
          dropdownParent: null,
          controlInput: '<input type="text" autocomplete="off" size="1" />',
          copyClassesToDropdown: false,
          placeholder: null,
          hidePlaceholder: null,
          shouldLoad: function(query) {
            return query.length > 0;
          },
          /*
          load                 : null, // function(query, callback) { ... }
          score                : null, // function(search) { ... }
          onInitialize         : null, // function() { ... }
          onChange             : null, // function(value) { ... }
          onItemAdd            : null, // function(value, $item) { ... }
          onItemRemove         : null, // function(value) { ... }
          onClear              : null, // function() { ... }
          onOptionAdd          : null, // function(value, data) { ... }
          onOptionRemove       : null, // function(value) { ... }
          onOptionClear        : null, // function() { ... }
          onOptionGroupAdd     : null, // function(id, data) { ... }
          onOptionGroupRemove  : null, // function(id) { ... }
          onOptionGroupClear   : null, // function() { ... }
          onDropdownOpen       : null, // function(dropdown) { ... }
          onDropdownClose      : null, // function(dropdown) { ... }
          onType               : null, // function(str) { ... }
          onDelete             : null, // function(values) { ... }
          */
          render: {
            /*
            item: null,
            optgroup: null,
            optgroup_header: null,
            option: null,
            option_create: null
            */
          }
        };
        const hash_key = (value) => {
          if (typeof value === "undefined" || value === null)
            return null;
          return get_hash(value);
        };
        const get_hash = (value) => {
          if (typeof value === "boolean")
            return value ? "1" : "0";
          return value + "";
        };
        const escape_html = (str) => {
          return (str + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
        };
        const timeout = (fn, timeout2) => {
          if (timeout2 > 0) {
            return setTimeout(fn, timeout2);
          }
          fn.call(null);
          return null;
        };
        const loadDebounce = (fn, delay) => {
          var timeout2;
          return function(value, callback) {
            var self2 = this;
            if (timeout2) {
              self2.loading = Math.max(self2.loading - 1, 0);
              clearTimeout(timeout2);
            }
            timeout2 = setTimeout(function() {
              timeout2 = null;
              self2.loadedSearches[value] = true;
              fn.call(self2, value, callback);
            }, delay);
          };
        };
        const debounce_events = (self2, types, fn) => {
          var type;
          var trigger = self2.trigger;
          var event_args = {};
          self2.trigger = function() {
            var type2 = arguments[0];
            if (types.indexOf(type2) !== -1) {
              event_args[type2] = arguments;
            } else {
              return trigger.apply(self2, arguments);
            }
          };
          fn.apply(self2, []);
          self2.trigger = trigger;
          for (type of types) {
            if (type in event_args) {
              trigger.apply(self2, event_args[type]);
            }
          }
        };
        const getSelection = (input) => {
          return {
            start: input.selectionStart || 0,
            length: (input.selectionEnd || 0) - (input.selectionStart || 0)
          };
        };
        const preventDefault = (evt, stop = false) => {
          if (evt) {
            evt.preventDefault();
            if (stop) {
              evt.stopPropagation();
            }
          }
        };
        const addEvent = (target, type, callback, options) => {
          target.addEventListener(type, callback, options);
        };
        const isKeyDown = (key_name, evt) => {
          if (!evt) {
            return false;
          }
          if (!evt[key_name]) {
            return false;
          }
          var count = (evt.altKey ? 1 : 0) + (evt.ctrlKey ? 1 : 0) + (evt.shiftKey ? 1 : 0) + (evt.metaKey ? 1 : 0);
          if (count === 1) {
            return true;
          }
          return false;
        };
        const getId = (el, id) => {
          const existing_id = el.getAttribute("id");
          if (existing_id) {
            return existing_id;
          }
          el.setAttribute("id", id);
          return id;
        };
        const addSlashes = (str) => {
          return str.replace(/[\\"']/g, "\\$&");
        };
        const append = (parent, node) => {
          if (node)
            parent.append(node);
        };
        function getSettings(input, settings_user) {
          var settings = Object.assign({}, defaults, settings_user);
          var attr_data = settings.dataAttr;
          var field_label = settings.labelField;
          var field_value = settings.valueField;
          var field_disabled = settings.disabledField;
          var field_optgroup = settings.optgroupField;
          var field_optgroup_label = settings.optgroupLabelField;
          var field_optgroup_value = settings.optgroupValueField;
          var tag_name = input.tagName.toLowerCase();
          var placeholder = input.getAttribute("placeholder") || input.getAttribute("data-placeholder");
          if (!placeholder && !settings.allowEmptyOption) {
            let option = input.querySelector('option[value=""]');
            if (option) {
              placeholder = option.textContent;
            }
          }
          var settings_element = {
            placeholder,
            options: [],
            optgroups: [],
            items: [],
            maxItems: null
          };
          var init_select = () => {
            var tagName;
            var options = settings_element.options;
            var optionsMap = {};
            var group_count = 1;
            let $order = 0;
            var readData = (el) => {
              var data = Object.assign({}, el.dataset);
              var json = attr_data && data[attr_data];
              if (typeof json === "string" && json.length) {
                data = Object.assign(data, JSON.parse(json));
              }
              return data;
            };
            var addOption = (option, group) => {
              var value = hash_key(option.value);
              if (value == null)
                return;
              if (!value && !settings.allowEmptyOption)
                return;
              if (optionsMap.hasOwnProperty(value)) {
                if (group) {
                  var arr = optionsMap[value][field_optgroup];
                  if (!arr) {
                    optionsMap[value][field_optgroup] = group;
                  } else if (!Array.isArray(arr)) {
                    optionsMap[value][field_optgroup] = [arr, group];
                  } else {
                    arr.push(group);
                  }
                }
              } else {
                var option_data = readData(option);
                option_data[field_label] = option_data[field_label] || option.textContent;
                option_data[field_value] = option_data[field_value] || value;
                option_data[field_disabled] = option_data[field_disabled] || option.disabled;
                option_data[field_optgroup] = option_data[field_optgroup] || group;
                option_data.$option = option;
                option_data.$order = option_data.$order || ++$order;
                optionsMap[value] = option_data;
                options.push(option_data);
              }
              if (option.selected) {
                settings_element.items.push(value);
              }
            };
            var addGroup = (optgroup) => {
              var id, optgroup_data;
              optgroup_data = readData(optgroup);
              optgroup_data[field_optgroup_label] = optgroup_data[field_optgroup_label] || optgroup.getAttribute("label") || "";
              optgroup_data[field_optgroup_value] = optgroup_data[field_optgroup_value] || group_count++;
              optgroup_data[field_disabled] = optgroup_data[field_disabled] || optgroup.disabled;
              optgroup_data.$order = optgroup_data.$order || ++$order;
              settings_element.optgroups.push(optgroup_data);
              id = optgroup_data[field_optgroup_value];
              iterate(optgroup.children, (option) => {
                addOption(option, id);
              });
            };
            settings_element.maxItems = input.hasAttribute("multiple") ? null : 1;
            iterate(input.children, (child) => {
              tagName = child.tagName.toLowerCase();
              if (tagName === "optgroup") {
                addGroup(child);
              } else if (tagName === "option") {
                addOption(child);
              }
            });
          };
          var init_textbox = () => {
            const data_raw = input.getAttribute(attr_data);
            if (!data_raw) {
              var value = input.value.trim() || "";
              if (!settings.allowEmptyOption && !value.length)
                return;
              const values = value.split(settings.delimiter);
              iterate(values, (value2) => {
                const option = {};
                option[field_label] = value2;
                option[field_value] = value2;
                settings_element.options.push(option);
              });
              settings_element.items = values;
            } else {
              settings_element.options = JSON.parse(data_raw);
              iterate(settings_element.options, (opt) => {
                settings_element.items.push(opt[field_value]);
              });
            }
          };
          if (tag_name === "select") {
            init_select();
          } else {
            init_textbox();
          }
          return Object.assign({}, defaults, settings_element, settings_user);
        }
        var instance_i = 0;
        class TomSelect3 extends MicroPlugin(MicroEvent) {
          constructor(input_arg, user_settings) {
            super();
            this.control_input = void 0;
            this.wrapper = void 0;
            this.dropdown = void 0;
            this.control = void 0;
            this.dropdown_content = void 0;
            this.focus_node = void 0;
            this.order = 0;
            this.settings = void 0;
            this.input = void 0;
            this.tabIndex = void 0;
            this.is_select_tag = void 0;
            this.rtl = void 0;
            this.inputId = void 0;
            this._destroy = void 0;
            this.sifter = void 0;
            this.isOpen = false;
            this.isDisabled = false;
            this.isReadOnly = false;
            this.isRequired = void 0;
            this.isInvalid = false;
            this.isValid = true;
            this.isLocked = false;
            this.isFocused = false;
            this.isInputHidden = false;
            this.isSetup = false;
            this.ignoreFocus = false;
            this.ignoreHover = false;
            this.hasOptions = false;
            this.currentResults = void 0;
            this.lastValue = "";
            this.caretPos = 0;
            this.loading = 0;
            this.loadedSearches = {};
            this.activeOption = null;
            this.activeItems = [];
            this.optgroups = {};
            this.options = {};
            this.userOptions = {};
            this.items = [];
            this.refreshTimeout = null;
            instance_i++;
            var dir;
            var input = getDom(input_arg);
            if (input.tomselect) {
              throw new Error("Tom Select already initialized on this element");
            }
            input.tomselect = this;
            var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
            dir = computedStyle.getPropertyValue("direction");
            const settings = getSettings(input, user_settings);
            this.settings = settings;
            this.input = input;
            this.tabIndex = input.tabIndex || 0;
            this.is_select_tag = input.tagName.toLowerCase() === "select";
            this.rtl = /rtl/i.test(dir);
            this.inputId = getId(input, "tomselect-" + instance_i);
            this.isRequired = input.required;
            this.sifter = new Sifter(this.options, {
              diacritics: settings.diacritics
            });
            settings.mode = settings.mode || (settings.maxItems === 1 ? "single" : "multi");
            if (typeof settings.hideSelected !== "boolean") {
              settings.hideSelected = settings.mode === "multi";
            }
            if (typeof settings.hidePlaceholder !== "boolean") {
              settings.hidePlaceholder = settings.mode !== "multi";
            }
            var filter = settings.createFilter;
            if (typeof filter !== "function") {
              if (typeof filter === "string") {
                filter = new RegExp(filter);
              }
              if (filter instanceof RegExp) {
                settings.createFilter = (input2) => filter.test(input2);
              } else {
                settings.createFilter = (value) => {
                  return this.settings.duplicates || !this.options[value];
                };
              }
            }
            this.initializePlugins(settings.plugins);
            this.setupCallbacks();
            this.setupTemplates();
            const wrapper = getDom("<div>");
            const control = getDom("<div>");
            const dropdown = this._render("dropdown");
            const dropdown_content = getDom(`<div role="listbox" tabindex="-1">`);
            const classes = this.input.getAttribute("class") || "";
            const inputMode = settings.mode;
            var control_input;
            addClasses(wrapper, settings.wrapperClass, classes, inputMode);
            addClasses(control, settings.controlClass);
            append(wrapper, control);
            addClasses(dropdown, settings.dropdownClass, inputMode);
            if (settings.copyClassesToDropdown) {
              addClasses(dropdown, classes);
            }
            addClasses(dropdown_content, settings.dropdownContentClass);
            append(dropdown, dropdown_content);
            getDom(settings.dropdownParent || wrapper).appendChild(dropdown);
            if (isHtmlString(settings.controlInput)) {
              control_input = getDom(settings.controlInput);
              var attrs = ["autocorrect", "autocapitalize", "autocomplete", "spellcheck"];
              iterate$1(attrs, (attr) => {
                if (input.getAttribute(attr)) {
                  setAttr(control_input, {
                    [attr]: input.getAttribute(attr)
                  });
                }
              });
              control_input.tabIndex = -1;
              control.appendChild(control_input);
              this.focus_node = control_input;
            } else if (settings.controlInput) {
              control_input = getDom(settings.controlInput);
              this.focus_node = control_input;
            } else {
              control_input = getDom("<input/>");
              this.focus_node = control;
            }
            this.wrapper = wrapper;
            this.dropdown = dropdown;
            this.dropdown_content = dropdown_content;
            this.control = control;
            this.control_input = control_input;
            this.setup();
          }
          /**
           * set up event bindings.
           *
           */
          setup() {
            const self2 = this;
            const settings = self2.settings;
            const control_input = self2.control_input;
            const dropdown = self2.dropdown;
            const dropdown_content = self2.dropdown_content;
            const wrapper = self2.wrapper;
            const control = self2.control;
            const input = self2.input;
            const focus_node = self2.focus_node;
            const passive_event = {
              passive: true
            };
            const listboxId = self2.inputId + "-ts-dropdown";
            setAttr(dropdown_content, {
              id: listboxId
            });
            setAttr(focus_node, {
              role: "combobox",
              "aria-haspopup": "listbox",
              "aria-expanded": "false",
              "aria-controls": listboxId
            });
            const control_id = getId(focus_node, self2.inputId + "-ts-control");
            const query = "label[for='" + escapeQuery(self2.inputId) + "']";
            const label = document.querySelector(query);
            const label_click = self2.focus.bind(self2);
            if (label) {
              addEvent(label, "click", label_click);
              setAttr(label, {
                for: control_id
              });
              const label_id = getId(label, self2.inputId + "-ts-label");
              setAttr(focus_node, {
                "aria-labelledby": label_id
              });
              setAttr(dropdown_content, {
                "aria-labelledby": label_id
              });
            }
            wrapper.style.width = input.style.width;
            if (self2.plugins.names.length) {
              const classes_plugins = "plugin-" + self2.plugins.names.join(" plugin-");
              addClasses([wrapper, dropdown], classes_plugins);
            }
            if ((settings.maxItems === null || settings.maxItems > 1) && self2.is_select_tag) {
              setAttr(input, {
                multiple: "multiple"
              });
            }
            if (settings.placeholder) {
              setAttr(control_input, {
                placeholder: settings.placeholder
              });
            }
            if (!settings.splitOn && settings.delimiter) {
              settings.splitOn = new RegExp("\\s*" + escape_regex(settings.delimiter) + "+\\s*");
            }
            if (settings.load && settings.loadThrottle) {
              settings.load = loadDebounce(settings.load, settings.loadThrottle);
            }
            addEvent(dropdown, "mousemove", () => {
              self2.ignoreHover = false;
            });
            addEvent(dropdown, "mouseenter", (e) => {
              var target_match = parentMatch(e.target, "[data-selectable]", dropdown);
              if (target_match)
                self2.onOptionHover(e, target_match);
            }, {
              capture: true
            });
            addEvent(dropdown, "click", (evt) => {
              const option = parentMatch(evt.target, "[data-selectable]");
              if (option) {
                self2.onOptionSelect(evt, option);
                preventDefault(evt, true);
              }
            });
            addEvent(control, "click", (evt) => {
              var target_match = parentMatch(evt.target, "[data-ts-item]", control);
              if (target_match && self2.onItemSelect(evt, target_match)) {
                preventDefault(evt, true);
                return;
              }
              if (control_input.value != "") {
                return;
              }
              self2.onClick();
              preventDefault(evt, true);
            });
            addEvent(focus_node, "keydown", (e) => self2.onKeyDown(e));
            addEvent(control_input, "keypress", (e) => self2.onKeyPress(e));
            addEvent(control_input, "input", (e) => self2.onInput(e));
            addEvent(focus_node, "blur", (e) => self2.onBlur(e));
            addEvent(focus_node, "focus", (e) => self2.onFocus(e));
            addEvent(control_input, "paste", (e) => self2.onPaste(e));
            const doc_mousedown = (evt) => {
              const target = evt.composedPath()[0];
              if (!wrapper.contains(target) && !dropdown.contains(target)) {
                if (self2.isFocused) {
                  self2.blur();
                }
                self2.inputState();
                return;
              }
              if (target == control_input && self2.isOpen) {
                evt.stopPropagation();
              } else {
                preventDefault(evt, true);
              }
            };
            const win_scroll = () => {
              if (self2.isOpen) {
                self2.positionDropdown();
              }
            };
            addEvent(document, "mousedown", doc_mousedown);
            addEvent(window, "scroll", win_scroll, passive_event);
            addEvent(window, "resize", win_scroll, passive_event);
            this._destroy = () => {
              document.removeEventListener("mousedown", doc_mousedown);
              window.removeEventListener("scroll", win_scroll);
              window.removeEventListener("resize", win_scroll);
              if (label)
                label.removeEventListener("click", label_click);
            };
            this.revertSettings = {
              innerHTML: input.innerHTML,
              tabIndex: input.tabIndex
            };
            input.tabIndex = -1;
            input.insertAdjacentElement("afterend", self2.wrapper);
            self2.sync(false);
            settings.items = [];
            delete settings.optgroups;
            delete settings.options;
            addEvent(input, "invalid", () => {
              if (self2.isValid) {
                self2.isValid = false;
                self2.isInvalid = true;
                self2.refreshState();
              }
            });
            self2.updateOriginalInput();
            self2.refreshItems();
            self2.close(false);
            self2.inputState();
            self2.isSetup = true;
            if (input.disabled) {
              self2.disable();
            } else if (input.readOnly) {
              self2.setReadOnly(true);
            } else {
              self2.enable();
            }
            self2.on("change", this.onChange);
            addClasses(input, "tomselected", "ts-hidden-accessible");
            self2.trigger("initialize");
            if (settings.preload === true) {
              self2.preload();
            }
          }
          /**
           * Register options and optgroups
           *
           */
          setupOptions(options = [], optgroups = []) {
            this.addOptions(options);
            iterate$1(optgroups, (optgroup) => {
              this.registerOptionGroup(optgroup);
            });
          }
          /**
           * Sets up default rendering functions.
           */
          setupTemplates() {
            var self2 = this;
            var field_label = self2.settings.labelField;
            var field_optgroup = self2.settings.optgroupLabelField;
            var templates = {
              "optgroup": (data) => {
                let optgroup = document.createElement("div");
                optgroup.className = "optgroup";
                optgroup.appendChild(data.options);
                return optgroup;
              },
              "optgroup_header": (data, escape) => {
                return '<div class="optgroup-header">' + escape(data[field_optgroup]) + "</div>";
              },
              "option": (data, escape) => {
                return "<div>" + escape(data[field_label]) + "</div>";
              },
              "item": (data, escape) => {
                return "<div>" + escape(data[field_label]) + "</div>";
              },
              "option_create": (data, escape) => {
                return '<div class="create">Add <strong>' + escape(data.input) + "</strong>&hellip;</div>";
              },
              "no_results": () => {
                return '<div class="no-results">No results found</div>';
              },
              "loading": () => {
                return '<div class="spinner"></div>';
              },
              "not_loading": () => {
              },
              "dropdown": () => {
                return "<div></div>";
              }
            };
            self2.settings.render = Object.assign({}, templates, self2.settings.render);
          }
          /**
           * Maps fired events to callbacks provided
           * in the settings used when creating the control.
           */
          setupCallbacks() {
            var key, fn;
            var callbacks = {
              "initialize": "onInitialize",
              "change": "onChange",
              "item_add": "onItemAdd",
              "item_remove": "onItemRemove",
              "item_select": "onItemSelect",
              "clear": "onClear",
              "option_add": "onOptionAdd",
              "option_remove": "onOptionRemove",
              "option_clear": "onOptionClear",
              "optgroup_add": "onOptionGroupAdd",
              "optgroup_remove": "onOptionGroupRemove",
              "optgroup_clear": "onOptionGroupClear",
              "dropdown_open": "onDropdownOpen",
              "dropdown_close": "onDropdownClose",
              "type": "onType",
              "load": "onLoad",
              "focus": "onFocus",
              "blur": "onBlur"
            };
            for (key in callbacks) {
              fn = this.settings[callbacks[key]];
              if (fn)
                this.on(key, fn);
            }
          }
          /**
           * Sync the Tom Select instance with the original input or select
           *
           */
          sync(get_settings = true) {
            const self2 = this;
            const settings = get_settings ? getSettings(self2.input, {
              delimiter: self2.settings.delimiter
            }) : self2.settings;
            self2.setupOptions(settings.options, settings.optgroups);
            self2.setValue(settings.items || [], true);
            self2.lastQuery = null;
          }
          /**
           * Triggered when the main control element
           * has a click event.
           *
           */
          onClick() {
            var self2 = this;
            if (self2.activeItems.length > 0) {
              self2.clearActiveItems();
              self2.focus();
              return;
            }
            if (self2.isFocused && self2.isOpen) {
              self2.blur();
            } else {
              self2.focus();
            }
          }
          /**
           * @deprecated v1.7
           *
           */
          onMouseDown() {
          }
          /**
           * Triggered when the value of the control has been changed.
           * This should propagate the event to the original DOM
           * input / select element.
           */
          onChange() {
            triggerEvent(this.input, "input");
            triggerEvent(this.input, "change");
          }
          /**
           * Triggered on <input> paste.
           *
           */
          onPaste(e) {
            var self2 = this;
            if (self2.isInputHidden || self2.isLocked) {
              preventDefault(e);
              return;
            }
            if (!self2.settings.splitOn) {
              return;
            }
            setTimeout(() => {
              var pastedText = self2.inputValue();
              if (!pastedText.match(self2.settings.splitOn)) {
                return;
              }
              var splitInput = pastedText.trim().split(self2.settings.splitOn);
              iterate$1(splitInput, (piece) => {
                const hash = hash_key(piece);
                if (hash) {
                  if (this.options[piece]) {
                    self2.addItem(piece);
                  } else {
                    self2.createItem(piece);
                  }
                }
              });
            }, 0);
          }
          /**
           * Triggered on <input> keypress.
           *
           */
          onKeyPress(e) {
            var self2 = this;
            if (self2.isLocked) {
              preventDefault(e);
              return;
            }
            var character = String.fromCharCode(e.keyCode || e.which);
            if (self2.settings.create && self2.settings.mode === "multi" && character === self2.settings.delimiter) {
              self2.createItem();
              preventDefault(e);
              return;
            }
          }
          /**
           * Triggered on <input> keydown.
           *
           */
          onKeyDown(e) {
            var self2 = this;
            self2.ignoreHover = true;
            if (self2.isLocked) {
              if (e.keyCode !== KEY_TAB) {
                preventDefault(e);
              }
              return;
            }
            switch (e.keyCode) {
              case KEY_A:
                if (isKeyDown(KEY_SHORTCUT, e)) {
                  if (self2.control_input.value == "") {
                    preventDefault(e);
                    self2.selectAll();
                    return;
                  }
                }
                break;
              case KEY_ESC:
                if (self2.isOpen) {
                  preventDefault(e, true);
                  self2.close();
                }
                self2.clearActiveItems();
                return;
              case KEY_DOWN:
                if (!self2.isOpen && self2.hasOptions) {
                  self2.open();
                } else if (self2.activeOption) {
                  let next = self2.getAdjacent(self2.activeOption, 1);
                  if (next)
                    self2.setActiveOption(next);
                }
                preventDefault(e);
                return;
              case KEY_UP:
                if (self2.activeOption) {
                  let prev = self2.getAdjacent(self2.activeOption, -1);
                  if (prev)
                    self2.setActiveOption(prev);
                }
                preventDefault(e);
                return;
              case KEY_RETURN:
                if (self2.canSelect(self2.activeOption)) {
                  self2.onOptionSelect(e, self2.activeOption);
                  preventDefault(e);
                } else if (self2.settings.create && self2.createItem()) {
                  preventDefault(e);
                } else if (document.activeElement == self2.control_input && self2.isOpen) {
                  preventDefault(e);
                }
                return;
              case KEY_LEFT:
                self2.advanceSelection(-1, e);
                return;
              case KEY_RIGHT:
                self2.advanceSelection(1, e);
                return;
              case KEY_TAB:
                if (self2.settings.selectOnTab) {
                  if (self2.canSelect(self2.activeOption)) {
                    self2.onOptionSelect(e, self2.activeOption);
                    preventDefault(e);
                  }
                  if (self2.settings.create && self2.createItem()) {
                    preventDefault(e);
                  }
                }
                return;
              case KEY_BACKSPACE:
              case KEY_DELETE:
                self2.deleteSelection(e);
                return;
            }
            if (self2.isInputHidden && !isKeyDown(KEY_SHORTCUT, e)) {
              preventDefault(e);
            }
          }
          /**
           * Triggered on <input> keyup.
           *
           */
          onInput(e) {
            if (this.isLocked) {
              return;
            }
            const value = this.inputValue();
            if (this.lastValue === value)
              return;
            this.lastValue = value;
            if (value == "") {
              this._onInput();
              return;
            }
            if (this.refreshTimeout) {
              clearTimeout(this.refreshTimeout);
            }
            this.refreshTimeout = timeout(() => {
              this.refreshTimeout = null;
              this._onInput();
            }, this.settings.refreshThrottle);
          }
          _onInput() {
            const value = this.lastValue;
            if (this.settings.shouldLoad.call(this, value)) {
              this.load(value);
            }
            this.refreshOptions();
            this.trigger("type", value);
          }
          /**
           * Triggered when the user rolls over
           * an option in the autocomplete dropdown menu.
           *
           */
          onOptionHover(evt, option) {
            if (this.ignoreHover)
              return;
            this.setActiveOption(option, false);
          }
          /**
           * Triggered on <input> focus.
           *
           */
          onFocus(e) {
            var self2 = this;
            var wasFocused = self2.isFocused;
            if (self2.isDisabled || self2.isReadOnly) {
              self2.blur();
              preventDefault(e);
              return;
            }
            if (self2.ignoreFocus)
              return;
            self2.isFocused = true;
            if (self2.settings.preload === "focus")
              self2.preload();
            if (!wasFocused)
              self2.trigger("focus");
            if (!self2.activeItems.length) {
              self2.inputState();
              self2.refreshOptions(!!self2.settings.openOnFocus);
            }
            self2.refreshState();
          }
          /**
           * Triggered on <input> blur.
           *
           */
          onBlur(e) {
            if (document.hasFocus() === false)
              return;
            var self2 = this;
            if (!self2.isFocused)
              return;
            self2.isFocused = false;
            self2.ignoreFocus = false;
            var deactivate = () => {
              self2.close();
              self2.setActiveItem();
              self2.setCaret(self2.items.length);
              self2.trigger("blur");
            };
            if (self2.settings.create && self2.settings.createOnBlur) {
              self2.createItem(null, deactivate);
            } else {
              deactivate();
            }
          }
          /**
           * Triggered when the user clicks on an option
           * in the autocomplete dropdown menu.
           *
           */
          onOptionSelect(evt, option) {
            var value, self2 = this;
            if (option.parentElement && option.parentElement.matches("[data-disabled]")) {
              return;
            }
            if (option.classList.contains("create")) {
              self2.createItem(null, () => {
                if (self2.settings.closeAfterSelect) {
                  self2.close();
                }
              });
            } else {
              value = option.dataset.value;
              if (typeof value !== "undefined") {
                self2.lastQuery = null;
                self2.addItem(value);
                if (self2.settings.closeAfterSelect) {
                  self2.close();
                }
                if (!self2.settings.hideSelected && evt.type && /click/.test(evt.type)) {
                  self2.setActiveOption(option);
                }
              }
            }
          }
          /**
           * Return true if the given option can be selected
           *
           */
          canSelect(option) {
            if (this.isOpen && option && this.dropdown_content.contains(option)) {
              return true;
            }
            return false;
          }
          /**
           * Triggered when the user clicks on an item
           * that has been selected.
           *
           */
          onItemSelect(evt, item) {
            var self2 = this;
            if (!self2.isLocked && self2.settings.mode === "multi") {
              preventDefault(evt);
              self2.setActiveItem(item, evt);
              return true;
            }
            return false;
          }
          /**
           * Determines whether or not to invoke
           * the user-provided option provider / loader
           *
           * Note, there is a subtle difference between
           * this.canLoad() and this.settings.shouldLoad();
           *
           *	- settings.shouldLoad() is a user-input validator.
           *	When false is returned, the not_loading template
           *	will be added to the dropdown
           *
           *	- canLoad() is lower level validator that checks
           * 	the Tom Select instance. There is no inherent user
           *	feedback when canLoad returns false
           *
           */
          canLoad(value) {
            if (!this.settings.load)
              return false;
            if (this.loadedSearches.hasOwnProperty(value))
              return false;
            return true;
          }
          /**
           * Invokes the user-provided option provider / loader.
           *
           */
          load(value) {
            const self2 = this;
            if (!self2.canLoad(value))
              return;
            addClasses(self2.wrapper, self2.settings.loadingClass);
            self2.loading++;
            const callback = self2.loadCallback.bind(self2);
            self2.settings.load.call(self2, value, callback);
          }
          /**
           * Invoked by the user-provided option provider
           *
           */
          loadCallback(options, optgroups) {
            const self2 = this;
            self2.loading = Math.max(self2.loading - 1, 0);
            self2.lastQuery = null;
            self2.clearActiveOption();
            self2.setupOptions(options, optgroups);
            self2.refreshOptions(self2.isFocused && !self2.isInputHidden);
            if (!self2.loading) {
              removeClasses(self2.wrapper, self2.settings.loadingClass);
            }
            self2.trigger("load", options, optgroups);
          }
          preload() {
            var classList = this.wrapper.classList;
            if (classList.contains("preloaded"))
              return;
            classList.add("preloaded");
            this.load("");
          }
          /**
           * Sets the input field of the control to the specified value.
           *
           */
          setTextboxValue(value = "") {
            var input = this.control_input;
            var changed = input.value !== value;
            if (changed) {
              input.value = value;
              triggerEvent(input, "update");
              this.lastValue = value;
            }
          }
          /**
           * Returns the value of the control. If multiple items
           * can be selected (e.g. <select multiple>), this returns
           * an array. If only one item can be selected, this
           * returns a string.
           *
           */
          getValue() {
            if (this.is_select_tag && this.input.hasAttribute("multiple")) {
              return this.items;
            }
            return this.items.join(this.settings.delimiter);
          }
          /**
           * Resets the selected items to the given value.
           *
           */
          setValue(value, silent) {
            var events = silent ? [] : ["change"];
            debounce_events(this, events, () => {
              this.clear(silent);
              this.addItems(value, silent);
            });
          }
          /**
           * Resets the number of max items to the given value
           *
           */
          setMaxItems(value) {
            if (value === 0)
              value = null;
            this.settings.maxItems = value;
            this.refreshState();
          }
          /**
           * Sets the selected item.
           *
           */
          setActiveItem(item, e) {
            var self2 = this;
            var eventName;
            var i, begin, end, swap;
            var last;
            if (self2.settings.mode === "single")
              return;
            if (!item) {
              self2.clearActiveItems();
              if (self2.isFocused) {
                self2.inputState();
              }
              return;
            }
            eventName = e && e.type.toLowerCase();
            if (eventName === "click" && isKeyDown("shiftKey", e) && self2.activeItems.length) {
              last = self2.getLastActive();
              begin = Array.prototype.indexOf.call(self2.control.children, last);
              end = Array.prototype.indexOf.call(self2.control.children, item);
              if (begin > end) {
                swap = begin;
                begin = end;
                end = swap;
              }
              for (i = begin; i <= end; i++) {
                item = self2.control.children[i];
                if (self2.activeItems.indexOf(item) === -1) {
                  self2.setActiveItemClass(item);
                }
              }
              preventDefault(e);
            } else if (eventName === "click" && isKeyDown(KEY_SHORTCUT, e) || eventName === "keydown" && isKeyDown("shiftKey", e)) {
              if (item.classList.contains("active")) {
                self2.removeActiveItem(item);
              } else {
                self2.setActiveItemClass(item);
              }
            } else {
              self2.clearActiveItems();
              self2.setActiveItemClass(item);
            }
            self2.inputState();
            if (!self2.isFocused) {
              self2.focus();
            }
          }
          /**
           * Set the active and last-active classes
           *
           */
          setActiveItemClass(item) {
            const self2 = this;
            const last_active = self2.control.querySelector(".last-active");
            if (last_active)
              removeClasses(last_active, "last-active");
            addClasses(item, "active last-active");
            self2.trigger("item_select", item);
            if (self2.activeItems.indexOf(item) == -1) {
              self2.activeItems.push(item);
            }
          }
          /**
           * Remove active item
           *
           */
          removeActiveItem(item) {
            var idx = this.activeItems.indexOf(item);
            this.activeItems.splice(idx, 1);
            removeClasses(item, "active");
          }
          /**
           * Clears all the active items
           *
           */
          clearActiveItems() {
            removeClasses(this.activeItems, "active");
            this.activeItems = [];
          }
          /**
           * Sets the selected item in the dropdown menu
           * of available options.
           *
           */
          setActiveOption(option, scroll = true) {
            if (option === this.activeOption) {
              return;
            }
            this.clearActiveOption();
            if (!option)
              return;
            this.activeOption = option;
            setAttr(this.focus_node, {
              "aria-activedescendant": option.getAttribute("id")
            });
            setAttr(option, {
              "aria-selected": "true"
            });
            addClasses(option, "active");
            if (scroll)
              this.scrollToOption(option);
          }
          /**
           * Sets the dropdown_content scrollTop to display the option
           *
           */
          scrollToOption(option, behavior) {
            if (!option)
              return;
            const content = this.dropdown_content;
            const height_menu = content.clientHeight;
            const scrollTop = content.scrollTop || 0;
            const height_item = option.offsetHeight;
            const y = option.getBoundingClientRect().top - content.getBoundingClientRect().top + scrollTop;
            if (y + height_item > height_menu + scrollTop) {
              this.scroll(y - height_menu + height_item, behavior);
            } else if (y < scrollTop) {
              this.scroll(y, behavior);
            }
          }
          /**
           * Scroll the dropdown to the given position
           *
           */
          scroll(scrollTop, behavior) {
            const content = this.dropdown_content;
            if (behavior) {
              content.style.scrollBehavior = behavior;
            }
            content.scrollTop = scrollTop;
            content.style.scrollBehavior = "";
          }
          /**
           * Clears the active option
           *
           */
          clearActiveOption() {
            if (this.activeOption) {
              removeClasses(this.activeOption, "active");
              setAttr(this.activeOption, {
                "aria-selected": null
              });
            }
            this.activeOption = null;
            setAttr(this.focus_node, {
              "aria-activedescendant": null
            });
          }
          /**
           * Selects all items (CTRL + A).
           */
          selectAll() {
            const self2 = this;
            if (self2.settings.mode === "single")
              return;
            const activeItems = self2.controlChildren();
            if (!activeItems.length)
              return;
            self2.inputState();
            self2.close();
            self2.activeItems = activeItems;
            iterate$1(activeItems, (item) => {
              self2.setActiveItemClass(item);
            });
          }
          /**
           * Determines if the control_input should be in a hidden or visible state
           *
           */
          inputState() {
            var self2 = this;
            if (!self2.control.contains(self2.control_input))
              return;
            setAttr(self2.control_input, {
              placeholder: self2.settings.placeholder
            });
            if (self2.activeItems.length > 0 || !self2.isFocused && self2.settings.hidePlaceholder && self2.items.length > 0) {
              self2.setTextboxValue();
              self2.isInputHidden = true;
            } else {
              if (self2.settings.hidePlaceholder && self2.items.length > 0) {
                setAttr(self2.control_input, {
                  placeholder: ""
                });
              }
              self2.isInputHidden = false;
            }
            self2.wrapper.classList.toggle("input-hidden", self2.isInputHidden);
          }
          /**
           * Get the input value
           */
          inputValue() {
            return this.control_input.value.trim();
          }
          /**
           * Gives the control focus.
           */
          focus() {
            var self2 = this;
            if (self2.isDisabled || self2.isReadOnly)
              return;
            self2.ignoreFocus = true;
            if (self2.control_input.offsetWidth) {
              self2.control_input.focus();
            } else {
              self2.focus_node.focus();
            }
            setTimeout(() => {
              self2.ignoreFocus = false;
              self2.onFocus();
            }, 0);
          }
          /**
           * Forces the control out of focus.
           *
           */
          blur() {
            this.focus_node.blur();
            this.onBlur();
          }
          /**
           * Returns a function that scores an object
           * to show how good of a match it is to the
           * provided query.
           *
           * @return {function}
           */
          getScoreFunction(query) {
            return this.sifter.getScoreFunction(query, this.getSearchOptions());
          }
          /**
           * Returns search options for sifter (the system
           * for scoring and sorting results).
           *
           * @see https://github.com/orchidjs/sifter.js
           * @return {object}
           */
          getSearchOptions() {
            var settings = this.settings;
            var sort = settings.sortField;
            if (typeof settings.sortField === "string") {
              sort = [{
                field: settings.sortField
              }];
            }
            return {
              fields: settings.searchField,
              conjunction: settings.searchConjunction,
              sort,
              nesting: settings.nesting
            };
          }
          /**
           * Searches through available options and returns
           * a sorted array of matches.
           *
           */
          search(query) {
            var result, calculateScore;
            var self2 = this;
            var options = this.getSearchOptions();
            if (self2.settings.score) {
              calculateScore = self2.settings.score.call(self2, query);
              if (typeof calculateScore !== "function") {
                throw new Error('Tom Select "score" setting must be a function that returns a function');
              }
            }
            if (query !== self2.lastQuery) {
              self2.lastQuery = query;
              result = self2.sifter.search(query, Object.assign(options, {
                score: calculateScore
              }));
              self2.currentResults = result;
            } else {
              result = Object.assign({}, self2.currentResults);
            }
            if (self2.settings.hideSelected) {
              result.items = result.items.filter((item) => {
                let hashed = hash_key(item.id);
                return !(hashed && self2.items.indexOf(hashed) !== -1);
              });
            }
            return result;
          }
          /**
           * Refreshes the list of available options shown
           * in the autocomplete dropdown menu.
           *
           */
          refreshOptions(triggerDropdown = true) {
            var i, j, k, n, optgroup, optgroups, html, has_create_option, active_group;
            var create;
            const groups = {};
            const groups_order = [];
            var self2 = this;
            var query = self2.inputValue();
            const same_query = query === self2.lastQuery || query == "" && self2.lastQuery == null;
            var results = self2.search(query);
            var active_option = null;
            var show_dropdown = self2.settings.shouldOpen || false;
            var dropdown_content = self2.dropdown_content;
            if (same_query) {
              active_option = self2.activeOption;
              if (active_option) {
                active_group = active_option.closest("[data-group]");
              }
            }
            n = results.items.length;
            if (typeof self2.settings.maxOptions === "number") {
              n = Math.min(n, self2.settings.maxOptions);
            }
            if (n > 0) {
              show_dropdown = true;
            }
            const getGroupFragment = (optgroup2, order) => {
              let group_order_i = groups[optgroup2];
              if (group_order_i !== void 0) {
                let order_group = groups_order[group_order_i];
                if (order_group !== void 0) {
                  return [group_order_i, order_group.fragment];
                }
              }
              let group_fragment = document.createDocumentFragment();
              group_order_i = groups_order.length;
              groups_order.push({
                fragment: group_fragment,
                order,
                optgroup: optgroup2
              });
              return [group_order_i, group_fragment];
            };
            for (i = 0; i < n; i++) {
              let item = results.items[i];
              if (!item)
                continue;
              let opt_value = item.id;
              let option = self2.options[opt_value];
              if (option === void 0)
                continue;
              let opt_hash = get_hash(opt_value);
              let option_el = self2.getOption(opt_hash, true);
              if (!self2.settings.hideSelected) {
                option_el.classList.toggle("selected", self2.items.includes(opt_hash));
              }
              optgroup = option[self2.settings.optgroupField] || "";
              optgroups = Array.isArray(optgroup) ? optgroup : [optgroup];
              for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
                optgroup = optgroups[j];
                let order = option.$order;
                let self_optgroup = self2.optgroups[optgroup];
                if (self_optgroup === void 0) {
                  optgroup = "";
                } else {
                  order = self_optgroup.$order;
                }
                const [group_order_i, group_fragment] = getGroupFragment(optgroup, order);
                if (j > 0) {
                  option_el = option_el.cloneNode(true);
                  setAttr(option_el, {
                    id: option.$id + "-clone-" + j,
                    "aria-selected": null
                  });
                  option_el.classList.add("ts-cloned");
                  removeClasses(option_el, "active");
                  if (self2.activeOption && self2.activeOption.dataset.value == opt_value) {
                    if (active_group && active_group.dataset.group === optgroup.toString()) {
                      active_option = option_el;
                    }
                  }
                }
                group_fragment.appendChild(option_el);
                if (optgroup != "") {
                  groups[optgroup] = group_order_i;
                }
              }
            }
            if (self2.settings.lockOptgroupOrder) {
              groups_order.sort((a, b) => {
                return a.order - b.order;
              });
            }
            html = document.createDocumentFragment();
            iterate$1(groups_order, (group_order) => {
              let group_fragment = group_order.fragment;
              let optgroup2 = group_order.optgroup;
              if (!group_fragment || !group_fragment.children.length)
                return;
              let group_heading = self2.optgroups[optgroup2];
              if (group_heading !== void 0) {
                let group_options = document.createDocumentFragment();
                let header = self2.render("optgroup_header", group_heading);
                append(group_options, header);
                append(group_options, group_fragment);
                let group_html = self2.render("optgroup", {
                  group: group_heading,
                  options: group_options
                });
                append(html, group_html);
              } else {
                append(html, group_fragment);
              }
            });
            dropdown_content.innerHTML = "";
            append(dropdown_content, html);
            if (self2.settings.highlight) {
              removeHighlight(dropdown_content);
              if (results.query.length && results.tokens.length) {
                iterate$1(results.tokens, (tok) => {
                  highlight(dropdown_content, tok.regex);
                });
              }
            }
            var add_template = (template3) => {
              let content = self2.render(template3, {
                input: query
              });
              if (content) {
                show_dropdown = true;
                dropdown_content.insertBefore(content, dropdown_content.firstChild);
              }
              return content;
            };
            if (self2.loading) {
              add_template("loading");
            } else if (!self2.settings.shouldLoad.call(self2, query)) {
              add_template("not_loading");
            } else if (results.items.length === 0) {
              add_template("no_results");
            }
            has_create_option = self2.canCreate(query);
            if (has_create_option) {
              create = add_template("option_create");
            }
            self2.hasOptions = results.items.length > 0 || has_create_option;
            if (show_dropdown) {
              if (results.items.length > 0) {
                if (!active_option && self2.settings.mode === "single" && self2.items[0] != void 0) {
                  active_option = self2.getOption(self2.items[0]);
                }
                if (!dropdown_content.contains(active_option)) {
                  let active_index = 0;
                  if (create && !self2.settings.addPrecedence) {
                    active_index = 1;
                  }
                  active_option = self2.selectable()[active_index];
                }
              } else if (create) {
                active_option = create;
              }
              if (triggerDropdown && !self2.isOpen) {
                self2.open();
                self2.scrollToOption(active_option, "auto");
              }
              self2.setActiveOption(active_option);
            } else {
              self2.clearActiveOption();
              if (triggerDropdown && self2.isOpen) {
                self2.close(false);
              }
            }
          }
          /**
           * Return list of selectable options
           *
           */
          selectable() {
            return this.dropdown_content.querySelectorAll("[data-selectable]");
          }
          /**
           * Adds an available option. If it already exists,
           * nothing will happen. Note: this does not refresh
           * the options list dropdown (use `refreshOptions`
           * for that).
           *
           * Usage:
           *
           *   this.addOption(data)
           *
           */
          addOption(data, user_created = false) {
            const self2 = this;
            if (Array.isArray(data)) {
              self2.addOptions(data, user_created);
              return false;
            }
            const key = hash_key(data[self2.settings.valueField]);
            if (key === null || self2.options.hasOwnProperty(key)) {
              return false;
            }
            data.$order = data.$order || ++self2.order;
            data.$id = self2.inputId + "-opt-" + data.$order;
            self2.options[key] = data;
            self2.lastQuery = null;
            if (user_created) {
              self2.userOptions[key] = user_created;
              self2.trigger("option_add", key, data);
            }
            return key;
          }
          /**
           * Add multiple options
           *
           */
          addOptions(data, user_created = false) {
            iterate$1(data, (dat) => {
              this.addOption(dat, user_created);
            });
          }
          /**
           * @deprecated 1.7.7
           */
          registerOption(data) {
            return this.addOption(data);
          }
          /**
           * Registers an option group to the pool of option groups.
           *
           * @return {boolean|string}
           */
          registerOptionGroup(data) {
            var key = hash_key(data[this.settings.optgroupValueField]);
            if (key === null)
              return false;
            data.$order = data.$order || ++this.order;
            this.optgroups[key] = data;
            return key;
          }
          /**
           * Registers a new optgroup for options
           * to be bucketed into.
           *
           */
          addOptionGroup(id, data) {
            var hashed_id;
            data[this.settings.optgroupValueField] = id;
            if (hashed_id = this.registerOptionGroup(data)) {
              this.trigger("optgroup_add", hashed_id, data);
            }
          }
          /**
           * Removes an existing option group.
           *
           */
          removeOptionGroup(id) {
            if (this.optgroups.hasOwnProperty(id)) {
              delete this.optgroups[id];
              this.clearCache();
              this.trigger("optgroup_remove", id);
            }
          }
          /**
           * Clears all existing option groups.
           */
          clearOptionGroups() {
            this.optgroups = {};
            this.clearCache();
            this.trigger("optgroup_clear");
          }
          /**
           * Updates an option available for selection. If
           * it is visible in the selected items or options
           * dropdown, it will be re-rendered automatically.
           *
           */
          updateOption(value, data) {
            const self2 = this;
            var item_new;
            var index_item;
            const value_old = hash_key(value);
            const value_new = hash_key(data[self2.settings.valueField]);
            if (value_old === null)
              return;
            const data_old = self2.options[value_old];
            if (data_old == void 0)
              return;
            if (typeof value_new !== "string")
              throw new Error("Value must be set in option data");
            const option = self2.getOption(value_old);
            const item = self2.getItem(value_old);
            data.$order = data.$order || data_old.$order;
            delete self2.options[value_old];
            self2.uncacheValue(value_new);
            self2.options[value_new] = data;
            if (option) {
              if (self2.dropdown_content.contains(option)) {
                const option_new = self2._render("option", data);
                replaceNode(option, option_new);
                if (self2.activeOption === option) {
                  self2.setActiveOption(option_new);
                }
              }
              option.remove();
            }
            if (item) {
              index_item = self2.items.indexOf(value_old);
              if (index_item !== -1) {
                self2.items.splice(index_item, 1, value_new);
              }
              item_new = self2._render("item", data);
              if (item.classList.contains("active"))
                addClasses(item_new, "active");
              replaceNode(item, item_new);
            }
            self2.lastQuery = null;
          }
          /**
           * Removes a single option.
           *
           */
          removeOption(value, silent) {
            const self2 = this;
            value = get_hash(value);
            self2.uncacheValue(value);
            delete self2.userOptions[value];
            delete self2.options[value];
            self2.lastQuery = null;
            self2.trigger("option_remove", value);
            self2.removeItem(value, silent);
          }
          /**
           * Clears all options.
           */
          clearOptions(filter) {
            const boundFilter = (filter || this.clearFilter).bind(this);
            this.loadedSearches = {};
            this.userOptions = {};
            this.clearCache();
            const selected = {};
            iterate$1(this.options, (option, key) => {
              if (boundFilter(option, key)) {
                selected[key] = option;
              }
            });
            this.options = this.sifter.items = selected;
            this.lastQuery = null;
            this.trigger("option_clear");
          }
          /**
           * Used by clearOptions() to decide whether or not an option should be removed
           * Return true to keep an option, false to remove
           *
           */
          clearFilter(option, value) {
            if (this.items.indexOf(value) >= 0) {
              return true;
            }
            return false;
          }
          /**
           * Returns the dom element of the option
           * matching the given value.
           *
           */
          getOption(value, create = false) {
            const hashed = hash_key(value);
            if (hashed === null)
              return null;
            const option = this.options[hashed];
            if (option != void 0) {
              if (option.$div) {
                return option.$div;
              }
              if (create) {
                return this._render("option", option);
              }
            }
            return null;
          }
          /**
           * Returns the dom element of the next or previous dom element of the same type
           * Note: adjacent options may not be adjacent DOM elements (optgroups)
           *
           */
          getAdjacent(option, direction, type = "option") {
            var self2 = this, all;
            if (!option) {
              return null;
            }
            if (type == "item") {
              all = self2.controlChildren();
            } else {
              all = self2.dropdown_content.querySelectorAll("[data-selectable]");
            }
            for (let i = 0; i < all.length; i++) {
              if (all[i] != option) {
                continue;
              }
              if (direction > 0) {
                return all[i + 1];
              }
              return all[i - 1];
            }
            return null;
          }
          /**
           * Returns the dom element of the item
           * matching the given value.
           *
           */
          getItem(item) {
            if (typeof item == "object") {
              return item;
            }
            var value = hash_key(item);
            return value !== null ? this.control.querySelector(`[data-value="${addSlashes(value)}"]`) : null;
          }
          /**
           * "Selects" multiple items at once. Adds them to the list
           * at the current caret position.
           *
           */
          addItems(values, silent) {
            var self2 = this;
            var items = Array.isArray(values) ? values : [values];
            items = items.filter((x) => self2.items.indexOf(x) === -1);
            const last_item = items[items.length - 1];
            items.forEach((item) => {
              self2.isPending = item !== last_item;
              self2.addItem(item, silent);
            });
          }
          /**
           * "Selects" an item. Adds it to the list
           * at the current caret position.
           *
           */
          addItem(value, silent) {
            var events = silent ? [] : ["change", "dropdown_close"];
            debounce_events(this, events, () => {
              var item, wasFull;
              const self2 = this;
              const inputMode = self2.settings.mode;
              const hashed = hash_key(value);
              if (hashed && self2.items.indexOf(hashed) !== -1) {
                if (inputMode === "single") {
                  self2.close();
                }
                if (inputMode === "single" || !self2.settings.duplicates) {
                  return;
                }
              }
              if (hashed === null || !self2.options.hasOwnProperty(hashed))
                return;
              if (inputMode === "single")
                self2.clear(silent);
              if (inputMode === "multi" && self2.isFull())
                return;
              item = self2._render("item", self2.options[hashed]);
              if (self2.control.contains(item)) {
                item = item.cloneNode(true);
              }
              wasFull = self2.isFull();
              self2.items.splice(self2.caretPos, 0, hashed);
              self2.insertAtCaret(item);
              if (self2.isSetup) {
                if (!self2.isPending && self2.settings.hideSelected) {
                  let option = self2.getOption(hashed);
                  let next = self2.getAdjacent(option, 1);
                  if (next) {
                    self2.setActiveOption(next);
                  }
                }
                if (!self2.isPending && !self2.settings.closeAfterSelect) {
                  self2.refreshOptions(self2.isFocused && inputMode !== "single");
                }
                if (self2.settings.closeAfterSelect != false && self2.isFull()) {
                  self2.close();
                } else if (!self2.isPending) {
                  self2.positionDropdown();
                }
                self2.trigger("item_add", hashed, item);
                if (!self2.isPending) {
                  self2.updateOriginalInput({
                    silent
                  });
                }
              }
              if (!self2.isPending || !wasFull && self2.isFull()) {
                self2.inputState();
                self2.refreshState();
              }
            });
          }
          /**
           * Removes the selected item matching
           * the provided value.
           *
           */
          removeItem(item = null, silent) {
            const self2 = this;
            item = self2.getItem(item);
            if (!item)
              return;
            var i, idx;
            const value = item.dataset.value;
            i = nodeIndex(item);
            item.remove();
            if (item.classList.contains("active")) {
              idx = self2.activeItems.indexOf(item);
              self2.activeItems.splice(idx, 1);
              removeClasses(item, "active");
            }
            self2.items.splice(i, 1);
            self2.lastQuery = null;
            if (!self2.settings.persist && self2.userOptions.hasOwnProperty(value)) {
              self2.removeOption(value, silent);
            }
            if (i < self2.caretPos) {
              self2.setCaret(self2.caretPos - 1);
            }
            self2.updateOriginalInput({
              silent
            });
            self2.refreshState();
            self2.positionDropdown();
            self2.trigger("item_remove", value, item);
          }
          /**
           * Invokes the `create` method provided in the
           * TomSelect options that should provide the data
           * for the new item, given the user input.
           *
           * Once this completes, it will be added
           * to the item list.
           *
           */
          createItem(input = null, callback = () => {
          }) {
            if (arguments.length === 3) {
              callback = arguments[2];
            }
            if (typeof callback != "function") {
              callback = () => {
              };
            }
            var self2 = this;
            var caret = self2.caretPos;
            var output;
            input = input || self2.inputValue();
            if (!self2.canCreate(input)) {
              callback();
              return false;
            }
            self2.lock();
            var created = false;
            var create = (data) => {
              self2.unlock();
              if (!data || typeof data !== "object")
                return callback();
              var value = hash_key(data[self2.settings.valueField]);
              if (typeof value !== "string") {
                return callback();
              }
              self2.setTextboxValue();
              self2.addOption(data, true);
              self2.setCaret(caret);
              self2.addItem(value);
              callback(data);
              created = true;
            };
            if (typeof self2.settings.create === "function") {
              output = self2.settings.create.call(this, input, create);
            } else {
              output = {
                [self2.settings.labelField]: input,
                [self2.settings.valueField]: input
              };
            }
            if (!created) {
              create(output);
            }
            return true;
          }
          /**
           * Re-renders the selected item lists.
           */
          refreshItems() {
            var self2 = this;
            self2.lastQuery = null;
            if (self2.isSetup) {
              self2.addItems(self2.items);
            }
            self2.updateOriginalInput();
            self2.refreshState();
          }
          /**
           * Updates all state-dependent attributes
           * and CSS classes.
           */
          refreshState() {
            const self2 = this;
            self2.refreshValidityState();
            const isFull = self2.isFull();
            const isLocked = self2.isLocked;
            self2.wrapper.classList.toggle("rtl", self2.rtl);
            const wrap_classList = self2.wrapper.classList;
            wrap_classList.toggle("focus", self2.isFocused);
            wrap_classList.toggle("disabled", self2.isDisabled);
            wrap_classList.toggle("readonly", self2.isReadOnly);
            wrap_classList.toggle("required", self2.isRequired);
            wrap_classList.toggle("invalid", !self2.isValid);
            wrap_classList.toggle("locked", isLocked);
            wrap_classList.toggle("full", isFull);
            wrap_classList.toggle("input-active", self2.isFocused && !self2.isInputHidden);
            wrap_classList.toggle("dropdown-active", self2.isOpen);
            wrap_classList.toggle("has-options", isEmptyObject(self2.options));
            wrap_classList.toggle("has-items", self2.items.length > 0);
          }
          /**
           * Update the `required` attribute of both input and control input.
           *
           * The `required` property needs to be activated on the control input
           * for the error to be displayed at the right place. `required` also
           * needs to be temporarily deactivated on the input since the input is
           * hidden and can't show errors.
           */
          refreshValidityState() {
            var self2 = this;
            if (!self2.input.validity) {
              return;
            }
            self2.isValid = self2.input.validity.valid;
            self2.isInvalid = !self2.isValid;
          }
          /**
           * Determines whether or not more items can be added
           * to the control without exceeding the user-defined maximum.
           *
           * @returns {boolean}
           */
          isFull() {
            return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
          }
          /**
           * Refreshes the original <select> or <input>
           * element to reflect the current state.
           *
           */
          updateOriginalInput(opts = {}) {
            const self2 = this;
            var option, label;
            const empty_option = self2.input.querySelector('option[value=""]');
            if (self2.is_select_tag) {
              let AddSelected = function(option_el, value, label2) {
                if (!option_el) {
                  option_el = getDom('<option value="' + escape_html(value) + '">' + escape_html(label2) + "</option>");
                }
                if (option_el != empty_option) {
                  self2.input.append(option_el);
                }
                selected.push(option_el);
                if (option_el != empty_option || has_selected > 0) {
                  option_el.selected = true;
                }
                return option_el;
              };
              const selected = [];
              const has_selected = self2.input.querySelectorAll("option:checked").length;
              self2.input.querySelectorAll("option:checked").forEach((option_el) => {
                option_el.selected = false;
              });
              if (self2.items.length == 0 && self2.settings.mode == "single") {
                AddSelected(empty_option, "", "");
              } else {
                self2.items.forEach((value) => {
                  option = self2.options[value];
                  label = option[self2.settings.labelField] || "";
                  if (selected.includes(option.$option)) {
                    const reuse_opt = self2.input.querySelector(`option[value="${addSlashes(value)}"]:not(:checked)`);
                    AddSelected(reuse_opt, value, label);
                  } else {
                    option.$option = AddSelected(option.$option, value, label);
                  }
                });
              }
            } else {
              self2.input.value = self2.getValue();
            }
            if (self2.isSetup) {
              if (!opts.silent) {
                self2.trigger("change", self2.getValue());
              }
            }
          }
          /**
           * Shows the autocomplete dropdown containing
           * the available options.
           */
          open() {
            var self2 = this;
            if (self2.isLocked || self2.isOpen || self2.settings.mode === "multi" && self2.isFull())
              return;
            self2.isOpen = true;
            setAttr(self2.focus_node, {
              "aria-expanded": "true"
            });
            self2.refreshState();
            applyCSS(self2.dropdown, {
              visibility: "hidden",
              display: "block"
            });
            self2.positionDropdown();
            applyCSS(self2.dropdown, {
              visibility: "visible",
              display: "block"
            });
            self2.focus();
            self2.trigger("dropdown_open", self2.dropdown);
          }
          /**
           * Closes the autocomplete dropdown menu.
           */
          close(setTextboxValue = true) {
            var self2 = this;
            var trigger = self2.isOpen;
            if (setTextboxValue) {
              self2.setTextboxValue();
              if (self2.settings.mode === "single" && self2.items.length) {
                self2.inputState();
              }
            }
            self2.isOpen = false;
            setAttr(self2.focus_node, {
              "aria-expanded": "false"
            });
            applyCSS(self2.dropdown, {
              display: "none"
            });
            if (self2.settings.hideSelected) {
              self2.clearActiveOption();
            }
            self2.refreshState();
            if (trigger)
              self2.trigger("dropdown_close", self2.dropdown);
          }
          /**
           * Calculates and applies the appropriate
           * position of the dropdown if dropdownParent = 'body'.
           * Otherwise, position is determined by css
           */
          positionDropdown() {
            if (this.settings.dropdownParent !== "body") {
              return;
            }
            var context = this.control;
            var rect = context.getBoundingClientRect();
            var top = context.offsetHeight + rect.top + window.scrollY;
            var left = rect.left + window.scrollX;
            applyCSS(this.dropdown, {
              width: rect.width + "px",
              top: top + "px",
              left: left + "px"
            });
          }
          /**
           * Resets / clears all selected items
           * from the control.
           *
           */
          clear(silent) {
            var self2 = this;
            if (!self2.items.length)
              return;
            var items = self2.controlChildren();
            iterate$1(items, (item) => {
              self2.removeItem(item, true);
            });
            self2.inputState();
            if (!silent)
              self2.updateOriginalInput();
            self2.trigger("clear");
          }
          /**
           * A helper method for inserting an element
           * at the current caret position.
           *
           */
          insertAtCaret(el) {
            const self2 = this;
            const caret = self2.caretPos;
            const target = self2.control;
            target.insertBefore(el, target.children[caret] || null);
            self2.setCaret(caret + 1);
          }
          /**
           * Removes the current selected item(s).
           *
           */
          deleteSelection(e) {
            var direction, selection, caret, tail;
            var self2 = this;
            direction = e && e.keyCode === KEY_BACKSPACE ? -1 : 1;
            selection = getSelection(self2.control_input);
            const rm_items = [];
            if (self2.activeItems.length) {
              tail = getTail(self2.activeItems, direction);
              caret = nodeIndex(tail);
              if (direction > 0) {
                caret++;
              }
              iterate$1(self2.activeItems, (item) => rm_items.push(item));
            } else if ((self2.isFocused || self2.settings.mode === "single") && self2.items.length) {
              const items = self2.controlChildren();
              let rm_item;
              if (direction < 0 && selection.start === 0 && selection.length === 0) {
                rm_item = items[self2.caretPos - 1];
              } else if (direction > 0 && selection.start === self2.inputValue().length) {
                rm_item = items[self2.caretPos];
              }
              if (rm_item !== void 0) {
                rm_items.push(rm_item);
              }
            }
            if (!self2.shouldDelete(rm_items, e)) {
              return false;
            }
            preventDefault(e, true);
            if (typeof caret !== "undefined") {
              self2.setCaret(caret);
            }
            while (rm_items.length) {
              self2.removeItem(rm_items.pop());
            }
            self2.inputState();
            self2.positionDropdown();
            self2.refreshOptions(false);
            return true;
          }
          /**
           * Return true if the items should be deleted
           */
          shouldDelete(items, evt) {
            const values = items.map((item) => item.dataset.value);
            if (!values.length || typeof this.settings.onDelete === "function" && this.settings.onDelete(values, evt) === false) {
              return false;
            }
            return true;
          }
          /**
           * Selects the previous / next item (depending on the `direction` argument).
           *
           * > 0 - right
           * < 0 - left
           *
           */
          advanceSelection(direction, e) {
            var last_active, adjacent, self2 = this;
            if (self2.rtl)
              direction *= -1;
            if (self2.inputValue().length)
              return;
            if (isKeyDown(KEY_SHORTCUT, e) || isKeyDown("shiftKey", e)) {
              last_active = self2.getLastActive(direction);
              if (last_active) {
                if (!last_active.classList.contains("active")) {
                  adjacent = last_active;
                } else {
                  adjacent = self2.getAdjacent(last_active, direction, "item");
                }
              } else if (direction > 0) {
                adjacent = self2.control_input.nextElementSibling;
              } else {
                adjacent = self2.control_input.previousElementSibling;
              }
              if (adjacent) {
                if (adjacent.classList.contains("active")) {
                  self2.removeActiveItem(last_active);
                }
                self2.setActiveItemClass(adjacent);
              }
            } else {
              self2.moveCaret(direction);
            }
          }
          moveCaret(direction) {
          }
          /**
           * Get the last active item
           *
           */
          getLastActive(direction) {
            let last_active = this.control.querySelector(".last-active");
            if (last_active) {
              return last_active;
            }
            var result = this.control.querySelectorAll(".active");
            if (result) {
              return getTail(result, direction);
            }
          }
          /**
           * Moves the caret to the specified index.
           *
           * The input must be moved by leaving it in place and moving the
           * siblings, due to the fact that focus cannot be restored once lost
           * on mobile webkit devices
           *
           */
          setCaret(new_pos) {
            this.caretPos = this.items.length;
          }
          /**
           * Return list of item dom elements
           *
           */
          controlChildren() {
            return Array.from(this.control.querySelectorAll("[data-ts-item]"));
          }
          /**
           * Disables user input on the control. Used while
           * items are being asynchronously created.
           */
          lock() {
            this.setLocked(true);
          }
          /**
           * Re-enables user input on the control.
           */
          unlock() {
            this.setLocked(false);
          }
          /**
           * Disable or enable user input on the control
           */
          setLocked(lock = this.isReadOnly || this.isDisabled) {
            this.isLocked = lock;
            this.refreshState();
          }
          /**
           * Disables user input on the control completely.
           * While disabled, it cannot receive focus.
           */
          disable() {
            this.setDisabled(true);
            this.close();
          }
          /**
           * Enables the control so that it can respond
           * to focus and user input.
           */
          enable() {
            this.setDisabled(false);
          }
          setDisabled(disabled) {
            this.focus_node.tabIndex = disabled ? -1 : this.tabIndex;
            this.isDisabled = disabled;
            this.input.disabled = disabled;
            this.control_input.disabled = disabled;
            this.setLocked();
          }
          setReadOnly(isReadOnly) {
            this.isReadOnly = isReadOnly;
            this.input.readOnly = isReadOnly;
            this.control_input.readOnly = isReadOnly;
            this.setLocked();
          }
          /**
           * Completely destroys the control and
           * unbinds all event listeners so that it can
           * be garbage collected.
           */
          destroy() {
            var self2 = this;
            var revertSettings = self2.revertSettings;
            self2.trigger("destroy");
            self2.off();
            self2.wrapper.remove();
            self2.dropdown.remove();
            self2.input.innerHTML = revertSettings.innerHTML;
            self2.input.tabIndex = revertSettings.tabIndex;
            removeClasses(self2.input, "tomselected", "ts-hidden-accessible");
            self2._destroy();
            delete self2.input.tomselect;
          }
          /**
           * A helper method for rendering "item" and
           * "option" templates, given the data.
           *
           */
          render(templateName, data) {
            var id, html;
            const self2 = this;
            if (typeof this.settings.render[templateName] !== "function") {
              return null;
            }
            html = self2.settings.render[templateName].call(this, data, escape_html);
            if (!html) {
              return null;
            }
            html = getDom(html);
            if (templateName === "option" || templateName === "option_create") {
              if (data[self2.settings.disabledField]) {
                setAttr(html, {
                  "aria-disabled": "true"
                });
              } else {
                setAttr(html, {
                  "data-selectable": ""
                });
              }
            } else if (templateName === "optgroup") {
              id = data.group[self2.settings.optgroupValueField];
              setAttr(html, {
                "data-group": id
              });
              if (data.group[self2.settings.disabledField]) {
                setAttr(html, {
                  "data-disabled": ""
                });
              }
            }
            if (templateName === "option" || templateName === "item") {
              const value = get_hash(data[self2.settings.valueField]);
              setAttr(html, {
                "data-value": value
              });
              if (templateName === "item") {
                addClasses(html, self2.settings.itemClass);
                setAttr(html, {
                  "data-ts-item": ""
                });
              } else {
                addClasses(html, self2.settings.optionClass);
                setAttr(html, {
                  role: "option",
                  id: data.$id
                });
                data.$div = html;
                self2.options[value] = data;
              }
            }
            return html;
          }
          /**
           * Type guarded rendering
           *
           */
          _render(templateName, data) {
            const html = this.render(templateName, data);
            if (html == null) {
              throw "HTMLElement expected";
            }
            return html;
          }
          /**
           * Clears the render cache for a template. If
           * no template is given, clears all render
           * caches.
           *
           */
          clearCache() {
            iterate$1(this.options, (option) => {
              if (option.$div) {
                option.$div.remove();
                delete option.$div;
              }
            });
          }
          /**
           * Removes a value from item and option caches
           *
           */
          uncacheValue(value) {
            const option_el = this.getOption(value);
            if (option_el)
              option_el.remove();
          }
          /**
           * Determines whether or not to display the
           * create item prompt, given a user input.
           *
           */
          canCreate(input) {
            return this.settings.create && input.length > 0 && this.settings.createFilter.call(this, input);
          }
          /**
           * Wraps this.`method` so that `new_fn` can be invoked 'before', 'after', or 'instead' of the original method
           *
           * this.hook('instead','onKeyDown',function( arg1, arg2 ...){
           *
           * });
           */
          hook(when, method, new_fn) {
            var self2 = this;
            var orig_method = self2[method];
            self2[method] = function() {
              var result, result_new;
              if (when === "after") {
                result = orig_method.apply(self2, arguments);
              }
              result_new = new_fn.apply(self2, arguments);
              if (when === "instead") {
                return result_new;
              }
              if (when === "before") {
                result = orig_method.apply(self2, arguments);
              }
              return result;
            };
          }
        }
        function change_listener() {
          addEvent(this.input, "change", () => {
            this.sync();
          });
        }
        function checkbox_options(userOptions) {
          var self2 = this;
          var orig_onOptionSelect = self2.onOptionSelect;
          self2.settings.hideSelected = false;
          const cbOptions = Object.assign({
            // so that the user may add different ones as well
            className: "tomselect-checkbox",
            // the following default to the historic plugin's values
            checkedClassNames: void 0,
            uncheckedClassNames: void 0
          }, userOptions);
          var UpdateChecked = function UpdateChecked2(checkbox, toCheck) {
            if (toCheck) {
              checkbox.checked = true;
              if (cbOptions.uncheckedClassNames) {
                checkbox.classList.remove(...cbOptions.uncheckedClassNames);
              }
              if (cbOptions.checkedClassNames) {
                checkbox.classList.add(...cbOptions.checkedClassNames);
              }
            } else {
              checkbox.checked = false;
              if (cbOptions.checkedClassNames) {
                checkbox.classList.remove(...cbOptions.checkedClassNames);
              }
              if (cbOptions.uncheckedClassNames) {
                checkbox.classList.add(...cbOptions.uncheckedClassNames);
              }
            }
          };
          var UpdateCheckbox = function UpdateCheckbox2(option) {
            setTimeout(() => {
              var checkbox = option.querySelector("input." + cbOptions.className);
              if (checkbox instanceof HTMLInputElement) {
                UpdateChecked(checkbox, option.classList.contains("selected"));
              }
            }, 1);
          };
          self2.hook("after", "setupTemplates", () => {
            var orig_render_option = self2.settings.render.option;
            self2.settings.render.option = (data, escape_html2) => {
              var rendered = getDom(orig_render_option.call(self2, data, escape_html2));
              var checkbox = document.createElement("input");
              if (cbOptions.className) {
                checkbox.classList.add(cbOptions.className);
              }
              checkbox.addEventListener("click", function(evt) {
                preventDefault(evt);
              });
              checkbox.type = "checkbox";
              const hashed = hash_key(data[self2.settings.valueField]);
              UpdateChecked(checkbox, !!(hashed && self2.items.indexOf(hashed) > -1));
              rendered.prepend(checkbox);
              return rendered;
            };
          });
          self2.on("item_remove", (value) => {
            var option = self2.getOption(value);
            if (option) {
              option.classList.remove("selected");
              UpdateCheckbox(option);
            }
          });
          self2.on("item_add", (value) => {
            var option = self2.getOption(value);
            if (option) {
              UpdateCheckbox(option);
            }
          });
          self2.hook("instead", "onOptionSelect", (evt, option) => {
            if (option.classList.contains("selected")) {
              option.classList.remove("selected");
              self2.removeItem(option.dataset.value);
              self2.refreshOptions();
              preventDefault(evt, true);
              return;
            }
            orig_onOptionSelect.call(self2, evt, option);
            UpdateCheckbox(option);
          });
        }
        function clear_button(userOptions) {
          const self2 = this;
          const options = Object.assign({
            className: "clear-button",
            title: "Clear All",
            html: (data) => {
              return `<div class="${data.className}" title="${data.title}">&#10799;</div>`;
            }
          }, userOptions);
          self2.on("initialize", () => {
            var button = getDom(options.html(options));
            button.addEventListener("click", (evt) => {
              if (self2.isLocked)
                return;
              self2.clear();
              if (self2.settings.mode === "single" && self2.settings.allowEmptyOption) {
                self2.addItem("");
              }
              evt.preventDefault();
              evt.stopPropagation();
            });
            self2.control.appendChild(button);
          });
        }
        const insertAfter = (referenceNode, newNode) => {
          var _referenceNode$parent;
          (_referenceNode$parent = referenceNode.parentNode) == null || _referenceNode$parent.insertBefore(newNode, referenceNode.nextSibling);
        };
        const insertBefore = (referenceNode, newNode) => {
          var _referenceNode$parent2;
          (_referenceNode$parent2 = referenceNode.parentNode) == null || _referenceNode$parent2.insertBefore(newNode, referenceNode);
        };
        const isBefore = (referenceNode, newNode) => {
          do {
            var _newNode;
            newNode = (_newNode = newNode) == null ? void 0 : _newNode.previousElementSibling;
            if (referenceNode == newNode) {
              return true;
            }
          } while (newNode && newNode.previousElementSibling);
          return false;
        };
        function drag_drop() {
          var self2 = this;
          if (self2.settings.mode !== "multi")
            return;
          var orig_lock = self2.lock;
          var orig_unlock = self2.unlock;
          let sortable = true;
          let drag_item;
          self2.hook("after", "setupTemplates", () => {
            var orig_render_item = self2.settings.render.item;
            self2.settings.render.item = (data, escape) => {
              const item = getDom(orig_render_item.call(self2, data, escape));
              setAttr(item, {
                "draggable": "true"
              });
              const mousedown = (evt) => {
                if (!sortable)
                  preventDefault(evt);
                evt.stopPropagation();
              };
              const dragStart = (evt) => {
                drag_item = item;
                setTimeout(() => {
                  item.classList.add("ts-dragging");
                }, 0);
              };
              const dragOver = (evt) => {
                evt.preventDefault();
                item.classList.add("ts-drag-over");
                moveitem(item, drag_item);
              };
              const dragLeave = () => {
                item.classList.remove("ts-drag-over");
              };
              const moveitem = (targetitem, dragitem) => {
                if (dragitem === void 0)
                  return;
                if (isBefore(dragitem, item)) {
                  insertAfter(targetitem, dragitem);
                } else {
                  insertBefore(targetitem, dragitem);
                }
              };
              const dragend = () => {
                var _drag_item;
                document.querySelectorAll(".ts-drag-over").forEach((el) => el.classList.remove("ts-drag-over"));
                (_drag_item = drag_item) == null || _drag_item.classList.remove("ts-dragging");
                drag_item = void 0;
                var values = [];
                self2.control.querySelectorAll(`[data-value]`).forEach((el) => {
                  if (el.dataset.value) {
                    let value = el.dataset.value;
                    if (value) {
                      values.push(value);
                    }
                  }
                });
                self2.setValue(values);
              };
              addEvent(item, "mousedown", mousedown);
              addEvent(item, "dragstart", dragStart);
              addEvent(item, "dragenter", dragOver);
              addEvent(item, "dragover", dragOver);
              addEvent(item, "dragleave", dragLeave);
              addEvent(item, "dragend", dragend);
              return item;
            };
          });
          self2.hook("instead", "lock", () => {
            sortable = false;
            return orig_lock.call(self2);
          });
          self2.hook("instead", "unlock", () => {
            sortable = true;
            return orig_unlock.call(self2);
          });
        }
        function dropdown_header(userOptions) {
          const self2 = this;
          const options = Object.assign({
            title: "Untitled",
            headerClass: "dropdown-header",
            titleRowClass: "dropdown-header-title",
            labelClass: "dropdown-header-label",
            closeClass: "dropdown-header-close",
            html: (data) => {
              return '<div class="' + data.headerClass + '"><div class="' + data.titleRowClass + '"><span class="' + data.labelClass + '">' + data.title + '</span><a class="' + data.closeClass + '">&times;</a></div></div>';
            }
          }, userOptions);
          self2.on("initialize", () => {
            var header = getDom(options.html(options));
            var close_link = header.querySelector("." + options.closeClass);
            if (close_link) {
              close_link.addEventListener("click", (evt) => {
                preventDefault(evt, true);
                self2.close();
              });
            }
            self2.dropdown.insertBefore(header, self2.dropdown.firstChild);
          });
        }
        function caret_position() {
          var self2 = this;
          self2.hook("instead", "setCaret", (new_pos) => {
            if (self2.settings.mode === "single" || !self2.control.contains(self2.control_input)) {
              new_pos = self2.items.length;
            } else {
              new_pos = Math.max(0, Math.min(self2.items.length, new_pos));
              if (new_pos != self2.caretPos && !self2.isPending) {
                self2.controlChildren().forEach((child, j) => {
                  if (j < new_pos) {
                    self2.control_input.insertAdjacentElement("beforebegin", child);
                  } else {
                    self2.control.appendChild(child);
                  }
                });
              }
            }
            self2.caretPos = new_pos;
          });
          self2.hook("instead", "moveCaret", (direction) => {
            if (!self2.isFocused)
              return;
            const last_active = self2.getLastActive(direction);
            if (last_active) {
              const idx = nodeIndex(last_active);
              self2.setCaret(direction > 0 ? idx + 1 : idx);
              self2.setActiveItem();
              removeClasses(last_active, "last-active");
            } else {
              self2.setCaret(self2.caretPos + direction);
            }
          });
        }
        function dropdown_input() {
          const self2 = this;
          self2.settings.shouldOpen = true;
          self2.hook("before", "setup", () => {
            self2.focus_node = self2.control;
            addClasses(self2.control_input, "dropdown-input");
            const div = getDom('<div class="dropdown-input-wrap">');
            div.append(self2.control_input);
            self2.dropdown.insertBefore(div, self2.dropdown.firstChild);
            const placeholder = getDom('<input class="items-placeholder" tabindex="-1" />');
            placeholder.placeholder = self2.settings.placeholder || "";
            self2.control.append(placeholder);
          });
          self2.on("initialize", () => {
            self2.control_input.addEventListener("keydown", (evt) => {
              switch (evt.keyCode) {
                case KEY_ESC:
                  if (self2.isOpen) {
                    preventDefault(evt, true);
                    self2.close();
                  }
                  self2.clearActiveItems();
                  return;
                case KEY_TAB:
                  self2.focus_node.tabIndex = -1;
                  break;
              }
              return self2.onKeyDown.call(self2, evt);
            });
            self2.on("blur", () => {
              self2.focus_node.tabIndex = self2.isDisabled ? -1 : self2.tabIndex;
            });
            self2.on("dropdown_open", () => {
              self2.control_input.focus();
            });
            const orig_onBlur = self2.onBlur;
            self2.hook("instead", "onBlur", (evt) => {
              if (evt && evt.relatedTarget == self2.control_input)
                return;
              return orig_onBlur.call(self2);
            });
            addEvent(self2.control_input, "blur", () => self2.onBlur());
            self2.hook("before", "close", () => {
              if (!self2.isOpen)
                return;
              self2.focus_node.focus({
                preventScroll: true
              });
            });
          });
        }
        function input_autogrow() {
          var self2 = this;
          self2.on("initialize", () => {
            var test_input = document.createElement("span");
            var control = self2.control_input;
            test_input.style.cssText = "position:absolute; top:-99999px; left:-99999px; width:auto; padding:0; white-space:pre; ";
            self2.wrapper.appendChild(test_input);
            var transfer_styles = ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"];
            for (const style_name of transfer_styles) {
              test_input.style[style_name] = control.style[style_name];
            }
            var resize = () => {
              test_input.textContent = control.value;
              control.style.width = test_input.clientWidth + "px";
            };
            resize();
            self2.on("update item_add item_remove", resize);
            addEvent(control, "input", resize);
            addEvent(control, "keyup", resize);
            addEvent(control, "blur", resize);
            addEvent(control, "update", resize);
          });
        }
        function no_backspace_delete() {
          var self2 = this;
          var orig_deleteSelection = self2.deleteSelection;
          this.hook("instead", "deleteSelection", (evt) => {
            if (self2.activeItems.length) {
              return orig_deleteSelection.call(self2, evt);
            }
            return false;
          });
        }
        function no_active_items() {
          this.hook("instead", "setActiveItem", () => {
          });
          this.hook("instead", "selectAll", () => {
          });
        }
        function optgroup_columns() {
          var self2 = this;
          var orig_keydown = self2.onKeyDown;
          self2.hook("instead", "onKeyDown", (evt) => {
            var index, option, options, optgroup;
            if (!self2.isOpen || !(evt.keyCode === KEY_LEFT || evt.keyCode === KEY_RIGHT)) {
              return orig_keydown.call(self2, evt);
            }
            self2.ignoreHover = true;
            optgroup = parentMatch(self2.activeOption, "[data-group]");
            index = nodeIndex(self2.activeOption, "[data-selectable]");
            if (!optgroup) {
              return;
            }
            if (evt.keyCode === KEY_LEFT) {
              optgroup = optgroup.previousSibling;
            } else {
              optgroup = optgroup.nextSibling;
            }
            if (!optgroup) {
              return;
            }
            options = optgroup.querySelectorAll("[data-selectable]");
            option = options[Math.min(options.length - 1, index)];
            if (option) {
              self2.setActiveOption(option);
            }
          });
        }
        function remove_button(userOptions) {
          const options = Object.assign({
            label: "&times;",
            title: "Remove",
            className: "remove",
            append: true
          }, userOptions);
          var self2 = this;
          if (!options.append) {
            return;
          }
          var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + "</a>";
          self2.hook("after", "setupTemplates", () => {
            var orig_render_item = self2.settings.render.item;
            self2.settings.render.item = (data, escape) => {
              var item = getDom(orig_render_item.call(self2, data, escape));
              var close_button = getDom(html);
              item.appendChild(close_button);
              addEvent(close_button, "mousedown", (evt) => {
                preventDefault(evt, true);
              });
              addEvent(close_button, "click", (evt) => {
                if (self2.isLocked)
                  return;
                preventDefault(evt, true);
                if (self2.isLocked)
                  return;
                if (!self2.shouldDelete([item], evt))
                  return;
                self2.removeItem(item);
                self2.refreshOptions(false);
                self2.inputState();
              });
              return item;
            };
          });
        }
        function restore_on_backspace(userOptions) {
          const self2 = this;
          const options = Object.assign({
            text: (option) => {
              return option[self2.settings.labelField];
            }
          }, userOptions);
          self2.on("item_remove", function(value) {
            if (!self2.isFocused) {
              return;
            }
            if (self2.control_input.value.trim() === "") {
              var option = self2.options[value];
              if (option) {
                self2.setTextboxValue(options.text.call(self2, option));
              }
            }
          });
        }
        function virtual_scroll() {
          const self2 = this;
          const orig_canLoad = self2.canLoad;
          const orig_clearActiveOption = self2.clearActiveOption;
          const orig_loadCallback = self2.loadCallback;
          var pagination = {};
          var dropdown_content;
          var loading_more = false;
          var load_more_opt;
          var default_values = [];
          if (!self2.settings.shouldLoadMore) {
            self2.settings.shouldLoadMore = () => {
              const scroll_percent = dropdown_content.clientHeight / (dropdown_content.scrollHeight - dropdown_content.scrollTop);
              if (scroll_percent > 0.9) {
                return true;
              }
              if (self2.activeOption) {
                var selectable = self2.selectable();
                var index = Array.from(selectable).indexOf(self2.activeOption);
                if (index >= selectable.length - 2) {
                  return true;
                }
              }
              return false;
            };
          }
          if (!self2.settings.firstUrl) {
            throw "virtual_scroll plugin requires a firstUrl() method";
          }
          self2.settings.sortField = [{
            field: "$order"
          }, {
            field: "$score"
          }];
          const canLoadMore = (query) => {
            if (typeof self2.settings.maxOptions === "number" && dropdown_content.children.length >= self2.settings.maxOptions) {
              return false;
            }
            if (query in pagination && pagination[query]) {
              return true;
            }
            return false;
          };
          const clearFilter = (option, value) => {
            if (self2.items.indexOf(value) >= 0 || default_values.indexOf(value) >= 0) {
              return true;
            }
            return false;
          };
          self2.setNextUrl = (value, next_url) => {
            pagination[value] = next_url;
          };
          self2.getUrl = (query) => {
            if (query in pagination) {
              const next_url = pagination[query];
              pagination[query] = false;
              return next_url;
            }
            self2.clearPagination();
            return self2.settings.firstUrl.call(self2, query);
          };
          self2.clearPagination = () => {
            pagination = {};
          };
          self2.hook("instead", "clearActiveOption", () => {
            if (loading_more) {
              return;
            }
            return orig_clearActiveOption.call(self2);
          });
          self2.hook("instead", "canLoad", (query) => {
            if (!(query in pagination)) {
              return orig_canLoad.call(self2, query);
            }
            return canLoadMore(query);
          });
          self2.hook("instead", "loadCallback", (options, optgroups) => {
            if (!loading_more) {
              self2.clearOptions(clearFilter);
            } else if (load_more_opt) {
              const first_option = options[0];
              if (first_option !== void 0) {
                load_more_opt.dataset.value = first_option[self2.settings.valueField];
              }
            }
            orig_loadCallback.call(self2, options, optgroups);
            loading_more = false;
          });
          self2.hook("after", "refreshOptions", () => {
            const query = self2.lastValue;
            var option;
            if (canLoadMore(query)) {
              option = self2.render("loading_more", {
                query
              });
              if (option) {
                option.setAttribute("data-selectable", "");
                load_more_opt = option;
              }
            } else if (query in pagination && !dropdown_content.querySelector(".no-results")) {
              option = self2.render("no_more_results", {
                query
              });
            }
            if (option) {
              addClasses(option, self2.settings.optionClass);
              dropdown_content.append(option);
            }
          });
          self2.on("initialize", () => {
            default_values = Object.keys(self2.options);
            dropdown_content = self2.dropdown_content;
            self2.settings.render = Object.assign({}, {
              loading_more: () => {
                return `<div class="loading-more-results">Loading more results ... </div>`;
              },
              no_more_results: () => {
                return `<div class="no-more-results">No more results</div>`;
              }
            }, self2.settings.render);
            dropdown_content.addEventListener("scroll", () => {
              if (!self2.settings.shouldLoadMore.call(self2)) {
                return;
              }
              if (!canLoadMore(self2.lastValue)) {
                return;
              }
              if (loading_more)
                return;
              loading_more = true;
              self2.load.call(self2, self2.lastValue);
            });
          });
        }
        TomSelect3.define("change_listener", change_listener);
        TomSelect3.define("checkbox_options", checkbox_options);
        TomSelect3.define("clear_button", clear_button);
        TomSelect3.define("drag_drop", drag_drop);
        TomSelect3.define("dropdown_header", dropdown_header);
        TomSelect3.define("caret_position", caret_position);
        TomSelect3.define("dropdown_input", dropdown_input);
        TomSelect3.define("input_autogrow", input_autogrow);
        TomSelect3.define("no_backspace_delete", no_backspace_delete);
        TomSelect3.define("no_active_items", no_active_items);
        TomSelect3.define("optgroup_columns", optgroup_columns);
        TomSelect3.define("remove_button", remove_button);
        TomSelect3.define("restore_on_backspace", restore_on_backspace);
        TomSelect3.define("virtual_scroll", virtual_scroll);
        return TomSelect3;
      });
    }
  });

  // js/config.js
  var pointEntree = "http://localhost:20003/api";

  // js/loader.js
  function load(url) {
    return fetch(`${pointEntree}${url}`).then((response) => response.json()).catch((error) => console.error("Erreur lors du chargement de la ressource", error));
  }
  function loadSansPointEntree(url) {
    return fetch(url).then((response) => response.json()).catch((error) => console.error("Erreur lors du chargement de la ressource", error));
  }

  // js/entreeLoader.js
  function loadEntrees() {
    return __async(this, null, function* () {
      return yield load("/entrees");
    });
  }
  function loadEntreeRecherche(recherche) {
    return __async(this, null, function* () {
      return yield load(`/entrees/search?q=${recherche}`);
    });
  }

  // js/entree_ui.js
  var import_handlebars = __toESM(require_handlebars());
  var source = document.getElementById("entreesTemplate").innerHTML;
  var template = import_handlebars.default.compile(source);
  function sortEntrees(entrees2) {
    entrees2.sort((a, b) => {
      if (a.nom === b.nom) {
        return a.prenom.localeCompare(b.prenom);
      }
      return a.nom.localeCompare(b.nom);
    });
  }
  function display_entrees(entrees2) {
    sortEntrees(entrees2.entrees);
    document.getElementById("template").innerHTML = template(entrees2);
    document.querySelectorAll(".entree").forEach((entree) => {
      entree.addEventListener("click", () => __async(this, null, function* () {
        const url = entree.dataset.url;
        entree = yield loadSansPointEntree(url);
        display_entree(entree);
      }));
    });
  }
  var source2 = document.getElementById("entreeTemplate").innerHTML;
  var template2 = import_handlebars.default.compile(source2);
  function display_entree(entree) {
    document.getElementById("template").innerHTML = template2(entree.entree);
  }

  // js/search.js
  var entrees;
  function searchServices(recherche) {
    return __async(this, null, function* () {
      if (entrees === void 0)
        entrees = yield loadEntrees();
      let result = {
        "type": "ressource",
        "entrees": []
      };
      for (let entree of entrees.entrees) {
        entree.services.forEach((service) => {
          if (service.libelle.toLowerCase().includes(recherche.toLowerCase())) {
            result.entrees.push(entree);
          }
        });
      }
      return result;
    });
  }

  // js/index.js
  var import_tom_select = __toESM(require_tom_select_complete());

  // js/servicesLoader.js
  function loadServices() {
    return __async(this, null, function* () {
      return yield load("/services");
    });
  }

  // js/index.js
  function showEntrees() {
    return __async(this, null, function* () {
      let entrees2 = yield loadEntrees();
      display_entrees(entrees2);
    });
  }
  function showSearchedEntreesByServices(recherche) {
    return __async(this, null, function* () {
      let entrees2 = yield searchServices(recherche);
      display_entrees(entrees2);
    });
  }
  var buttonListeEntrees = document.getElementById("listeEntrees");
  buttonListeEntrees.addEventListener("click", showEntrees);
  function services() {
    return __async(this, null, function* () {
      let services2 = yield loadServices();
      new import_tom_select.default("#searchService", {
        options: services2,
        valueField: "libelle",
        labelField: "libelle",
        searchField: "libelle",
        create: false,
        maxItems: 1,
        persist: false,
        onChange: function(value) {
          return __async(this, null, function* () {
            showSearchedEntreesByServices(value);
          });
        }
      });
    });
  }
  services();
  function showSearchedEntreesByNom(recherche) {
    return __async(this, null, function* () {
      let entrees2 = yield loadEntreeRecherche(recherche);
      display_entrees(entrees2);
    });
  }
  var buttonSearch = document.getElementById("searchNom");
  buttonSearch.addEventListener("input", function() {
    showSearchedEntreesByNom(buttonSearch.value);
  });
  function showSearchedEntreesByNomService(recherche) {
    return __async(this, null, function* () {
      let entrees2 = yield searchServices(recherche);
      let entrees22 = yield loadEntreeRecherche(recherche);
      let result = {
        "type": "ressource",
        "entrees": []
      };
      for (let entree of entrees2.entrees) {
        if (!result.entrees.includes(entree)) {
          result.entrees.push(entree);
        }
      }
      for (let entree of entrees22.entrees) {
        if (!result.entrees.includes(entree)) {
          result.entrees.push(entree);
        }
      }
      display_entrees(result);
    });
  }
  var buttonSearch2 = document.getElementById("searchNomService");
  buttonSearch2.addEventListener("input", function() {
    showSearchedEntreesByNomService(buttonSearch2.value);
  });
})();
/*! Bundled license information:

tom-select/dist/js/tom-select.complete.js:
  (*! @orchidjs/unicode-variants | https://github.com/orchidjs/unicode-variants | Apache License (v2) *)
  (*! sifter.js | https://github.com/orchidjs/sifter.js | Apache License (v2) *)
*/
//# sourceMappingURL=index.js.map
