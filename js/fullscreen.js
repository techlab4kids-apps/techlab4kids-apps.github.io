var GUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"fullscreen": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"addons":"addons","iframe-extension-worker":"iframe-extension-worker","library-backdrops":"library-backdrops","library-costumes":"library-costumes","library-sounds":"library-sounds","library-sprites":"library-sprites","sb":"sb","addon-default-entry":"addon-default-entry","addon-entry-2d-color-picker":"addon-entry-2d-color-picker","addon-entry-better-img-uploads":"addon-entry-better-img-uploads","addon-entry-block-count":"addon-entry-block-count","addon-entry-block-palette-icons":"addon-entry-block-palette-icons","addon-entry-blocks2image":"addon-entry-blocks2image","addon-entry-cat-blocks":"addon-entry-cat-blocks","addon-entry-clones":"addon-entry-clones","addon-entry-columns":"addon-entry-columns","addon-entry-custom-block-shape":"addon-entry-custom-block-shape","addon-entry-custom-block-text":"addon-entry-custom-block-text","addon-entry-custom-zoom":"addon-entry-custom-zoom","addon-entry-data-category-tweaks-v2":"addon-entry-data-category-tweaks-v2","addon-entry-debugger":"addon-entry-debugger","addon-entry-default-costume-editor-color":"addon-entry-default-costume-editor-color","addon-entry-disable-paste-offset":"addon-entry-disable-paste-offset","addon-entry-disable-stage-drag-select":"addon-entry-disable-stage-drag-select","addon-entry-editor-buttons-reverse-order":"addon-entry-editor-buttons-reverse-order","addon-entry-editor-colored-context-menus":"addon-entry-editor-colored-context-menus","addon-entry-editor-extra-keys":"addon-entry-editor-extra-keys","addon-entry-editor-sounds":"addon-entry-editor-sounds","addon-entry-editor-stage-left":"addon-entry-editor-stage-left","addon-entry-editor-stepping":"addon-entry-editor-stepping","addon-entry-editor-theme3":"addon-entry-editor-theme3","addon-entry-fullscreen":"addon-entry-fullscreen","addon-entry-gamepad":"addon-entry-gamepad","addon-entry-hide-delete-button":"addon-entry-hide-delete-button","addon-entry-hide-flyout":"addon-entry-hide-flyout","addon-entry-hide-new-variables":"addon-entry-hide-new-variables","addon-entry-hide-stage":"addon-entry-hide-stage","addon-entry-initialise-sprite-position":"addon-entry-initialise-sprite-position","addon-entry-load-extensions":"addon-entry-load-extensions","addon-entry-mediarecorder":"addon-entry-mediarecorder","addon-entry-mouse-pos":"addon-entry-mouse-pos","addon-entry-no-script-bumping":"addon-entry-no-script-bumping","addon-entry-number-pad":"addon-entry-number-pad","addon-entry-paint-by-default":"addon-entry-paint-by-default","addon-entry-paint-skew":"addon-entry-paint-skew","addon-entry-paint-snap":"addon-entry-paint-snap","addon-entry-remove-curved-stage-border":"addon-entry-remove-curved-stage-border","addon-entry-remove-sprite-confirm":"addon-entry-remove-sprite-confirm","addon-entry-script-snap":"addon-entry-script-snap","addon-entry-search-sprites":"addon-entry-search-sprites","addon-entry-sprite-properties":"addon-entry-sprite-properties","addon-entry-swap-local-global":"addon-entry-swap-local-global","addon-entry-transparent-orphans":"addon-entry-transparent-orphans","addon-entry-tw-disable-cloud-variables":"addon-entry-tw-disable-cloud-variables","addon-entry-tw-disable-restore-points":"addon-entry-tw-disable-restore-points","addon-entry-tw-remove-backpack":"addon-entry-tw-remove-backpack","addon-entry-tw-remove-feedback":"addon-entry-tw-remove-feedback","addon-entry-tw-straighten-comments":"addon-entry-tw-straighten-comments","addon-entry-variable-manager":"addon-entry-variable-manager","addon-entry-vol-slider":"addon-entry-vol-slider","addon-entry-zebra-striping":"addon-entry-zebra-striping","addon-l10n-de":"addon-l10n-de","addon-l10n-es":"addon-l10n-es","addon-l10n-fr":"addon-l10n-fr","addon-l10n-hu":"addon-l10n-hu","addon-l10n-it":"addon-l10n-it","addon-l10n-ja":"addon-l10n-ja","addon-l10n-ko":"addon-l10n-ko","addon-l10n-nl":"addon-l10n-nl","addon-l10n-pl":"addon-l10n-pl","addon-l10n-pt":"addon-l10n-pt","addon-l10n-ro":"addon-l10n-ro","addon-l10n-ru":"addon-l10n-ru","addon-l10n-sl":"addon-l10n-sl","addon-l10n-tr":"addon-l10n-tr"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/playground/fullscreen.jsx","vendors~addon-settings~credits~editor~embed~fullscreen~player~playground","vendors~editor~embed~fullscreen~player~playground","addon-settings~addons~editor~fullscreen~player~playground","editor~embed~fullscreen~player~playground"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/PenguinMod-MarkDown/src/block-rules.js":
/*!*************************************************************!*\
  !*** ./node_modules/PenguinMod-MarkDown/src/block-rules.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/PenguinMod-MarkDown/src/utils.js");


const block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: _utils__WEBPACK_IMPORTED_MODULE_0__["noop"],
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: _utils__WEBPACK_IMPORTED_MODULE_0__["noop"],
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: _utils__WEBPACK_IMPORTED_MODULE_0__["noop"],
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
}

block.bullet = /(?:[*+-]|\d+\.)/
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/
block.item = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["replace"])(block.item, 'gm')(/bull/g, block.bullet)()

block.list = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["replace"])(block.list)(/bull/g, block.bullet)(
  'hr',
  '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))'
)('def', '\\n+(?=' + block.def.source + ')')()

block.blockquote = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["replace"])(block.blockquote)('def', block.def)()

block._tag =
  '(?!(?:' +
  'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code' +
  '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo' +
  '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b'

block.html = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["replace"])(block.html)('comment', /<!--[\s\S]*?-->/)(
  'closed',
  /<(tag)[\s\S]+?<\/\1>/
)('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, block._tag)()

block.paragraph = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["replace"])(block.paragraph)('hr', block.hr)(
  'heading',
  block.heading
)('lheading', block.lheading)('blockquote', block.blockquote)(
  'tag',
  '<' + block._tag
)('def', block.def)()

/**
 * Normal Block Grammar
 */

block.normal = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, block)

/**
 * GFM Block Grammar
 */

block.gfm = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/,
  checkbox: /^\[([ x])\] +/
})

block.gfm.paragraph = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["replace"])(block.paragraph)(
  '(?!',
  '(?!' +
    block.gfm.fences.source.replace('\\1', '\\2') +
    '|' +
    block.list.source.replace('\\1', '\\3') +
    '|'
)()

/**
 * GFM + Tables Block Grammar
 */

block.tables = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
})

/* harmony default export */ __webpack_exports__["default"] = (block);


/***/ }),

/***/ "./node_modules/PenguinMod-MarkDown/src/defaults.js":
/*!**********************************************************!*\
  !*** ./node_modules/PenguinMod-MarkDown/src/defaults.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ "./node_modules/PenguinMod-MarkDown/src/renderer.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  gfm: true,
  tables: true,
  taskLists: true,
  dataLine: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new _renderer__WEBPACK_IMPORTED_MODULE_0__["default"](),
  xhtml: false
});


/***/ }),

/***/ "./node_modules/PenguinMod-MarkDown/src/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/PenguinMod-MarkDown/src/index.js ***!
  \*******************************************************/
/*! exports provided: Parser, Lexer, Renderer, InlineLexer, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/PenguinMod-MarkDown/src/utils.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaults */ "./node_modules/PenguinMod-MarkDown/src/defaults.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser */ "./node_modules/PenguinMod-MarkDown/src/parser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lexer */ "./node_modules/PenguinMod-MarkDown/src/lexer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lexer", function() { return _lexer__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderer */ "./node_modules/PenguinMod-MarkDown/src/renderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return _renderer__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _inline_lexer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inline-lexer */ "./node_modules/PenguinMod-MarkDown/src/inline-lexer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineLexer", function() { return _inline_lexer__WEBPACK_IMPORTED_MODULE_5__["default"]; });









function render(src, opt) {
  if (opt) opt = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, _defaults__WEBPACK_IMPORTED_MODULE_1__["default"], opt)
  return _parser__WEBPACK_IMPORTED_MODULE_2__["default"].parse(_lexer__WEBPACK_IMPORTED_MODULE_3__["default"].lex(src, opt), opt)
}


/***/ }),

/***/ "./node_modules/PenguinMod-MarkDown/src/inline-lexer.js":
/*!**************************************************************!*\
  !*** ./node_modules/PenguinMod-MarkDown/src/inline-lexer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults */ "./node_modules/PenguinMod-MarkDown/src/defaults.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./node_modules/PenguinMod-MarkDown/src/renderer.js");
/* harmony import */ var _inline_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-rules */ "./node_modules/PenguinMod-MarkDown/src/inline-rules.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/PenguinMod-MarkDown/src/utils.js");





class InlineLexer {
  constructor(links, options = _defaults__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    this.options = options
    this.links = links
    this.renderer = this.options.renderer || new _renderer__WEBPACK_IMPORTED_MODULE_1__["default"]()
    this.renderer.options = this.options

    if (!this.links) {
      throw new Error('Tokens array requires a `links` property.')
    }

    if (this.options.gfm) {
      if (this.options.breaks) {
        this.rules = _inline_rules__WEBPACK_IMPORTED_MODULE_2__["default"].breaks
      } else {
        this.rules = _inline_rules__WEBPACK_IMPORTED_MODULE_2__["default"].gfm
      }
    } else if (this.options.pedantic) {
      this.rules = _inline_rules__WEBPACK_IMPORTED_MODULE_2__["default"].pedantic
    } else {
      this.rules = _inline_rules__WEBPACK_IMPORTED_MODULE_2__["default"].normal
    }
  }

  static output(src, links, options) {
    return new InlineLexer(links, options).output(src)
  }

  output(src) {
    let out = []
    let link
    let text
    let href
    let cap

    while (src) {
      // escape
      if ((cap = this.rules.escape.exec(src))) {
        src = src.substring(cap[0].length)
        out.push(cap[1])
        continue
      }

      // timestamp
      if ((cap = this.rules.timestamp.exec(src))) timestamp: {
        src = src.substring(cap[0].length)
        const date = Date.parse(cap[1])
        if (isNaN(date)) break timestamp;
        out.push(this.renderer.timestamp(date, cap[3], cap[5]))
        continue
      }

      // autolink
      if ((cap = this.rules.autolink.exec(src))) {
        src = src.substring(cap[0].length)
        if (cap[2] === '@') {
          text =
            cap[1].charAt(6) === ':'
              ? this.mangle(cap[1].substring(7))
              : this.mangle(cap[1])
          href = this.mangle('mailto:') + text
        } else {
          text = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["escape"])(cap[1])
          href = text
        }
        out.push(this.renderer.link(href, null, text))
        continue
      }

      // url (gfm)
      if (!this.inLink && (cap = this.rules.url.exec(src))) {
        src = src.substring(cap[0].length)
        text = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["escape"])(cap[1])
        href = text
        out.push(this.renderer.link(href, null, text))
        continue
      }

      // tag
      if ((cap = this.rules.tag.exec(src))) {
        if (!this.inLink && /^<a /i.test(cap[0])) {
          this.inLink = true
        } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
          this.inLink = false
        }
        src = src.substring(cap[0].length)
        out.push(this.options.sanitize
          ? this.options.sanitizer
            ? this.options.sanitizer(cap[0])
            : Object(_utils__WEBPACK_IMPORTED_MODULE_3__["escape"])(cap[0])
          : cap[0])
        continue
      }

      // link
      if ((cap = this.rules.link.exec(src))) {
        src = src.substring(cap[0].length)
        this.inLink = true
        out.push(this.outputLink(cap, {
          href: cap[2],
          title: cap[3]
        }))
        this.inLink = false
        continue
      }

      // reflink, nolink
      if (
        (cap = this.rules.reflink.exec(src)) ||
        (cap = this.rules.nolink.exec(src))
      ) {
        src = src.substring(cap[0].length)
        link = (cap[2] || cap[1]).replace(/\s+/g, ' ')
        link = this.links[link.toLowerCase()]
        if (!link || !link.href) {
          out.push(cap[0].charAt(0))
          src = cap[0].substring(1) + src
          continue
        }
        this.inLink = true
        out.push(this.outputLink(cap, link))
        this.inLink = false
        continue
      }

      // strong
      if ((cap = this.rules.strong.exec(src))) {
        src = src.substring(cap[0].length)
        out.push(this.renderer.strong(this.output(cap[2] || cap[1])))
        continue
      }

      // em
      if ((cap = this.rules.em.exec(src))) {
        src = src.substring(cap[0].length)
        out.push(this.renderer.em(this.output(cap[2] || cap[1])))
        continue
      }

      // code
      if ((cap = this.rules.code.exec(src))) {
        src = src.substring(cap[0].length)
        out.push(this.renderer.codespan(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["escape"])(cap[2], true)))
        continue
      }

      // br
      if ((cap = this.rules.br.exec(src))) {
        src = src.substring(cap[0].length)
        out.push(this.renderer.br())
        continue
      }

      // del (gfm)
      if ((cap = this.rules.del.exec(src))) {
        src = src.substring(cap[0].length)
        out.push(this.renderer.del(this.output(cap[1])))
        continue
      }

      // project mention
      if ((cap = this.rules.project.exec(src))) {
        // Top-level should never reach here.
        src = src.substring(cap[0].length)
        out.push(this.renderer.project(cap[1]))
        continue
      }

      // user mention
      if ((cap = this.rules.user.exec(src))) {
        // Top-level should never reach here.
        src = src.substring(cap[0].length)
        out.push(this.renderer.mention(cap[1]))
        continue
      }

      // emoji
      if ((cap = this.rules.emoji.exec(src))) {
        // Top-level should never reach here.
        src = src.substring(cap[0].length)
        out.push(this.renderer.emoji(cap[1]))
        continue
      }

      // text
      if ((cap = this.rules.text.exec(src))) {
        src = src.substring(cap[0].length)
        out.push(this.renderer.text(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["escape"])(this.smartypants(cap[0]))))
        continue
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0))
      }
    }

    return out
  }

  outputLink(cap, link) {
    const href = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["escape"])(link.href)
    const title = link.title ? Object(_utils__WEBPACK_IMPORTED_MODULE_3__["escape"])(link.title) : null

    return cap[0].charAt(0) === '!'
      ? this.renderer.image(href, title, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["escape"])(cap[1]))
      : this.renderer.link(href, title, this.output(cap[1]))
  }

  smartypants(text) {
    if (!this.options.smartypants) return text
    return (
      text
        // em-dashes
        .replace(/---/g, '\u2014')
        // en-dashes
        .replace(/--/g, '\u2013')
        // opening singles
        .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
        // closing singles & apostrophes
        .replace(/'/g, '\u2019')
        // opening doubles
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
        // closing doubles
        .replace(/"/g, '\u201d')
        // ellipses
        .replace(/\.{3}/g, '\u2026')
    )
  }

  mangle(text) {
    if (!this.options.mangle) return text
    let out = ''
    let i = 0
    let ch

    for (; i < text.length; i++) {
      ch = text.charCodeAt(i)
      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16)
      }
      out += '&#' + ch + ';'
    }

    return out
  }
}

InlineLexer.rules = _inline_rules__WEBPACK_IMPORTED_MODULE_2__["default"]

/* harmony default export */ __webpack_exports__["default"] = (InlineLexer);


/***/ }),

/***/ "./node_modules/PenguinMod-MarkDown/src/inline-rules.js":
/*!**************************************************************!*\
  !*** ./node_modules/PenguinMod-MarkDown/src/inline-rules.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/PenguinMod-MarkDown/src/utils.js");


/**
 * Inline-Level Grammar
 */

const inline = {
  escape: /^\\([\\`*{}[\]()#+\-.!_@>w<:])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: _utils__WEBPACK_IMPORTED_MODULE_0__["noop"],
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: _utils__WEBPACK_IMPORTED_MODULE_0__["noop"],
  text: /^[\s\S]+?(?=[\\<![_*`:#@]| {2,}\n|$)/,
  project: /^#([\w-]+)/,
  user: /^@([\w-]+)/,
  emoji: /^:([a-z]+):/,
  timestamp: /^<([^>]*?)(:(\w{3})?(:([^>]*))?)?>/
}

inline._inside = /(?:\[[^\]]*\]|[^[\]]|\](?=[^[]*\]))*/
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/

inline.link = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["replace"])(inline.link)('inside', inline._inside)(
  'href',
  inline._href
)()

inline.reflink = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["replace"])(inline.reflink)('inside', inline._inside)()

/**
 * Normal Inline Grammar
 */

inline.normal = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, inline)

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
})

/**
 * GFM Inline Grammar
 */

inline.gfm = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, inline.normal, {
  escape: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["replace"])(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["replace"])(inline.text)(']|', '~]|')('|', '|https?://|')()
})

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["merge"])({}, inline.gfm, {
  br: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["replace"])(inline.br)('{2,}', '*')(),
  text: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["replace"])(inline.gfm.text)('{2,}', '*')()
})

/* harmony default export */ __webpack_exports__["default"] = (inline);


/***/ }),

/***/ "./node_modules/PenguinMod-MarkDown/src/lexer.js":
/*!*******************************************************!*\
  !*** ./node_modules/PenguinMod-MarkDown/src/lexer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-rules */ "./node_modules/PenguinMod-MarkDown/src/block-rules.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaults */ "./node_modules/PenguinMod-MarkDown/src/defaults.js");



class Lexer {
  constructor(options = _defaults__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    this.tokens = []
    this.tokens.links = {}
    this.options = options

    if (this.options.gfm) {
      if (this.options.tables) {
        this.rules = _block_rules__WEBPACK_IMPORTED_MODULE_0__["default"].tables
      } else {
        this.rules = _block_rules__WEBPACK_IMPORTED_MODULE_0__["default"].gfm
      }
    } else {
      this.rules = _block_rules__WEBPACK_IMPORTED_MODULE_0__["default"].normal
    }
  }

  static lex(src, options) {
    return new Lexer(options).lex(src)
  }

  lex(src) {
    src = src
      .replace(/\r\n|\r/g, '\n')
      .replace(/\t/g, '    ')
      .replace(/\u00a0/g, ' ')
      .replace(/\u2424/g, '\n')

    return this.token(src, true)
  }

  token(src, top, bq) {
    src = src.replace(/^ +$/gm, '')

    let next
    let loose
    let cap
    let bull
    let b
    let item
    let space
    let i
    let l
    let checked

    while (src) {
      // newline
      if ((cap = this.rules.newline.exec(src))) {
        src = src.substring(cap[0].length)
        if (cap[0].length > 1) {
          this.tokens.push({
            type: 'space'
          })
        }
      }

      // code
      if ((cap = this.rules.code.exec(src))) {
        src = src.substring(cap[0].length)
        cap = cap[0].replace(/^ {4}/gm, '')
        this.tokens.push({
          type: 'code',
          text: this.options.pedantic ? cap : cap.replace(/\n+$/, '')
        })
        continue
      }

      // fences (gfm)
      if ((cap = this.rules.fences.exec(src))) {
        src = src.substring(cap[0].length)
        this.tokens.push({
          type: 'code',
          lang: cap[2],
          text: cap[3] || ''
        })
        continue
      }

      // heading
      if ((cap = this.rules.heading.exec(src))) {
        src = src.substring(cap[0].length)
        this.tokens.push({
          type: 'heading',
          depth: cap[1].length,
          text: cap[2]
        })
        continue
      }

      // table no leading pipe (gfm)
      if (top && (cap = this.rules.nptable.exec(src))) {
        src = src.substring(cap[0].length)

        item = {
          type: 'table',
          header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3].replace(/\n$/, '').split('\n')
        }

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right'
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center'
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left'
          } else {
            item.align[i] = null
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = item.cells[i].split(/ *\| */)
        }

        this.tokens.push(item)

        continue
      }

      // lheading
      if ((cap = this.rules.lheading.exec(src))) {
        src = src.substring(cap[0].length)
        this.tokens.push({
          type: 'heading',
          depth: cap[2] === '=' ? 1 : 2,
          text: cap[1]
        })
        continue
      }

      // hr
      if ((cap = this.rules.hr.exec(src))) {
        src = src.substring(cap[0].length)
        this.tokens.push({
          type: 'hr'
        })
        continue
      }

      // blockquote
      if ((cap = this.rules.blockquote.exec(src))) {
        src = src.substring(cap[0].length)

        this.tokens.push({
          type: 'blockquote_start'
        })

        cap = cap[0].replace(/^ *> ?/gm, '')

        // Pass `top` to keep the current
        // "toplevel" state. This is exactly
        // how markdown.pl works.
        this.token(cap, top, true)

        this.tokens.push({
          type: 'blockquote_end'
        })

        continue
      }

      // list
      if ((cap = this.rules.list.exec(src))) {
        src = src.substring(cap[0].length)
        bull = cap[2]

        this.tokens.push({
          type: 'list_start',
          ordered: bull.length > 1
        })

        // Get each top-level item.
        cap = cap[0].match(this.rules.item)

        next = false
        l = cap.length
        i = 0

        for (; i < l; i++) {
          item = cap[i]

          // Remove the list item's bullet
          // so it is seen as the next token.
          space = item.length
          item = item.replace(/^ *([*+-]|\d+\.) +/, '')

          if (this.options.gfm && this.options.taskLists) {
            checked = this.rules.checkbox.exec(item)

            if (checked) {
              checked = checked[1] === 'x'
              item = item.replace(this.rules.checkbox, '')
            } else {
              checked = undefined
            }
          }

          // Outdent whatever the
          // list item contains. Hacky.
          if (item.indexOf('\n ') !== -1) {
            space -= item.length
            item = this.options.pedantic
              ? item.replace(/^ {1,4}/gm, '')
              : item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
          }

          // Determine whether the next list item belongs here.
          // Backpedal if it does not belong in this list.
          if (this.options.smartLists && i !== l - 1) {
            b = this.rules.bullet.exec(cap[i + 1])[0]
            if (bull !== b && !(bull.length > 1 && b.length > 1)) {
              src = cap.slice(i + 1).join('\n') + src
              i = l - 1
            }
          }

          // Determine whether item is loose or not.
          // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
          // for discount behavior.
          loose = next || /\n\n(?!\s*$)/.test(item)
          if (i !== l - 1) {
            next = item.charAt(item.length - 1) === '\n'
            if (!loose) loose = next
          }

          this.tokens.push({
            checked,
            type: loose ? 'loose_item_start' : 'list_item_start'
          })

          // Recurse.
          this.token(item, false, bq)

          this.tokens.push({
            type: 'list_item_end'
          })
        }

        this.tokens.push({
          type: 'list_end'
        })

        continue
      }

      // html
      if ((cap = this.rules.html.exec(src))) {
        src = src.substring(cap[0].length)
        this.tokens.push({
          type: this.options.sanitize ? 'paragraph' : 'html',
          pre:
            !this.options.sanitizer &&
            (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: cap[0]
        })
        continue
      }

      // def
      if (!bq && top && (cap = this.rules.def.exec(src))) {
        src = src.substring(cap[0].length)
        this.tokens.links[cap[1].toLowerCase()] = {
          href: cap[2],
          title: cap[3]
        }
        continue
      }

      // table (gfm)
      if (top && (cap = this.rules.table.exec(src))) {
        src = src.substring(cap[0].length)

        item = {
          type: 'table',
          header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
        }

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right'
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center'
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left'
          } else {
            item.align[i] = null
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = item.cells[i]
            .replace(/^ *\| *| *\| *$/g, '')
            .split(/ *\| */)
        }

        this.tokens.push(item)

        continue
      }

      // top-level paragraph
      if (top && (cap = this.rules.paragraph.exec(src))) {
        src = src.substring(cap[0].length)
        this.tokens.push({
          type: 'paragraph',
          text:
            cap[1].charAt(cap[1].length - 1) === '\n'
              ? cap[1].slice(0, -1)
              : cap[1]
        })
        continue
      }

      // text
      if ((cap = this.rules.text.exec(src))) {
        // Top-level should never reach here.
        src = src.substring(cap[0].length)
        this.tokens.push({
          type: 'text',
          text: cap[0]
        })
        continue
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0))
      }
    }

    return this.tokens
  }
}

Lexer.rules = _block_rules__WEBPACK_IMPORTED_MODULE_0__["default"]

/* harmony default export */ __webpack_exports__["default"] = (Lexer);


/***/ }),

/***/ "./node_modules/PenguinMod-MarkDown/src/parser.js":
/*!********************************************************!*\
  !*** ./node_modules/PenguinMod-MarkDown/src/parser.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Parser; });
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults */ "./node_modules/PenguinMod-MarkDown/src/defaults.js");
/* harmony import */ var _inline_lexer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline-lexer */ "./node_modules/PenguinMod-MarkDown/src/inline-lexer.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer */ "./node_modules/PenguinMod-MarkDown/src/renderer.js");




/**
 * Parsing & Compiling
 */

class Parser {
  constructor(options = _defaults__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    this.tokens = []
    this.token = null
    this.options = options
    this.options.renderer = this.options.renderer || new _renderer__WEBPACK_IMPORTED_MODULE_2__["default"]()
    this.renderer = this.options.renderer
    this.renderer.options = this.options
  }

  static parse(src, options, renderer) {
    return new Parser(options, renderer).parse(src)
  }

  /**
   * Parse Loop
   */

  parse(src) {
    this.inline = new _inline_lexer__WEBPACK_IMPORTED_MODULE_1__["default"](src.links, this.options, this.renderer)
    this.tokens = src.reverse()

    let out = []
    while (this.next()) {
      out.push(this.tok())
    }

    // Remove cached headings
    this.renderer._headings = []
    return out
  }

  /**
   * Next Token
   */

  next() {
    this.token = this.tokens.pop()
    return this.token
  }

  /**
   * Preview Next Token
   */

  peek() {
    return this.tokens[this.tokens.length - 1] || 0
  }

  /**
   * Parse Text Tokens
   */

  parseText() {
    let body = this.token.text

    while (this.peek().type === 'text') {
      body += `\n${this.next().text}`
    }

    return this.inline.output(body)
  }

  /**
   * Parse Current Token
   */

  tok() {
    switch (this.token.type) {
      case 'space': {
        return ''
      }
      case 'hr': {
        return this.renderer.hr()
      }
      case 'heading': {
        return this.renderer.heading(
          this.inline.output(this.token.text),
          this.token.depth,
          this.token.text
        )
      }
      case 'code': {
        return this.renderer.code(
          this.token.text,
          this.token.lang,
          this.token.escaped
        )
      }
      case 'table': {
        let header = ''
        let body = ''
        let i
        let row
        let cell
        let j

        // header
        cell = ''
        for (i = 0; i < this.token.header.length; i++) {
          cell += this.renderer.tablecell(
            this.inline.output(this.token.header[i]),
            { header: true, align: this.token.align[i] }
          )
        }
        header += this.renderer.tablerow(cell)

        for (i = 0; i < this.token.cells.length; i++) {
          row = this.token.cells[i]

          cell = ''
          for (j = 0; j < row.length; j++) {
            cell += this.renderer.tablecell(this.inline.output(row[j]), {
              header: false,
              align: this.token.align[j]
            })
          }

          body += this.renderer.tablerow(cell)
        }
        return this.renderer.table(header, body)
      }
      case 'blockquote_start': {
        let body = ''

        while (this.next().type !== 'blockquote_end') {
          body += this.tok()
        }

        return this.renderer.blockquote(body)
      }
      case 'list_start': {
        let body = []
        let taskList = false
        const ordered = this.token.ordered

        while (this.next().type !== 'list_end') {
          if (this.token.checked !== undefined) {
            taskList = true
          }
          body.push(this.tok())
        }

        return this.renderer.list(body, ordered, taskList)
      }
      case 'list_item_start': {
        let body = []
        const checked = this.token.checked

        while (this.next().type !== 'list_item_end') {
          body.push(this.token.type === 'text' ? this.parseText() : this.tok())
        }

        return this.renderer.listitem(body, checked)
      }
      case 'loose_item_start': {
        let body = []
        const checked = this.token.checked

        while (this.next().type !== 'list_item_end') {
          body.push(this.tok())
        }

        return this.renderer.listitem(body, checked)
      }
      case 'html': {
        const html =
          !this.token.pre && !this.options.pedantic
            ? this.inline.output(this.token.text)
            : this.token.text
        return this.renderer.html(html)
      }
      case 'paragraph': {
        return this.renderer.paragraph(this.inline.output(this.token.text))
      }
      case 'text': {
        return this.renderer.paragraph(this.parseText())
      }
      default: {
        throw new Error('Unknow type')
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/PenguinMod-MarkDown/src/renderer.js":
/*!**********************************************************!*\
  !*** ./node_modules/PenguinMod-MarkDown/src/renderer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var slugo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slugo */ "./node_modules/slugo/dist/slugo.es.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/PenguinMod-MarkDown/src/utils.js");



const highlightLinesRe = /{([\d,-]+)}/

class Renderer {
  constructor(options) {
    this.options = options || {}
    this._headings = []
  }

  code(code, lang, escaped) {
    let dataLine = ''
    if (this.options.dataLine && lang && highlightLinesRe.test(lang)) {
      dataLine = ` data-line="${highlightLinesRe.exec(lang)[1]}"`
      lang = lang.substr(0, lang.indexOf('{'))
    }

    if (this.options.highlight) {
      const out = this.options.highlight(code, lang)
      if (out !== null && out !== code) {
        escaped = true
        code = out
      }
    }

    if (!lang) {
      return `<pre${dataLine}><code>${escaped
        ? code
        : Object(_utils__WEBPACK_IMPORTED_MODULE_1__["escape"])(code, true)}\n</code></pre>`
    }

    return `<pre${dataLine}><code class="${this.options.langPrefix}${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["escape"])(
      lang,
      true
    )}">${escaped ? code : Object(_utils__WEBPACK_IMPORTED_MODULE_1__["escape"])(code, true)}\n</code></pre>\n`
  }

  blockquote(quote) {
    return `<blockquote>\n${quote}</blockquote>\n`
  }

  html(html) {
    return html
  }

  heading(text, level, raw) {
    let slug = Object(slugo__WEBPACK_IMPORTED_MODULE_0__["default"])(raw)
    const count = this._headings.filter(h => h === raw).length
    if (count > 0) {
      slug += `-${count}`
    }
    this._headings.push(raw)
    return `<h${level} id="${this.options
      .headerPrefix}${slug}">${text}</h${level}>\n`
  }

  hr() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n'
  }

  list(body, ordered, taskList) {
    const type = ordered ? 'ol' : 'ul'
    const classNames = taskList ? ' class="task-list"' : ''
    return `<${type}${classNames}>\n${body}</${type}>\n`
  }

  listitem(text, checked) {
    if (checked === undefined) {
      return `<li>${text}</li>\n`
    }

    return (
      '<li class="task-list-item">' +
      '<input type="checkbox" class="task-list-item-checkbox"' +
      (checked ? ' checked' : '') +
      '> ' +
      text +
      '</li>\n'
    )
  }

  paragraph(text) {
    return `<p>${text}</p>\n`
  }

  table(header, body) {
    return `<table>\n<thead>\n${header}</thead>\n<tbody>\n${body}</tbody>\n</table>\n`
  }

  tablerow(content) {
    return `<tr>\n${content}</tr>\n`
  }

  tablecell(content, flags) {
    const type = flags.header ? 'th' : 'td'
    const tag = flags.align
      ? `<${type} style="text-align:${flags.align}">`
      : `<${type}>`
    return `${tag + content}</${type}>\n`
  }

  // span level renderer
  strong(text) {
    return `<strong>${text}</strong>`
  }

  em(text) {
    return `<em>${text}</em>`
  }

  codespan(text) {
    return `<code>${text}</code>`
  }

  br() {
    return this.options.xhtml ? '<br/>' : '<br>'
  }

  del(text) {
    return `<del>${text}</del>`
  }

  link(href, title, text) {
    if (this.options.sanitize) {
      let prot
      try {
        prot = decodeURIComponent(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["unescape"])(href))
          .replace(/[^\w:]/g, '')
          .toLowerCase()
      } catch (err) {
        return ''
      }
      if (
        // eslint-disable-next-line no-script-url
        prot.indexOf('javascript:') === 0 ||
        prot.indexOf('vbscript:') === 0 ||
        prot.indexOf('data:') === 0
      ) {
        // eslint-disable-line no-script-url
        return ''
      }
    }
    let out = `<a href="${href}"`
    if (title) {
      out += ` title="${title}"`
    }
    const { linksInNewTab } = this.options
    const targetBlank =
      linksInNewTab === true ||
      (typeof linksInNewTab === 'function' && linksInNewTab(href))
    if (targetBlank) {
      out += ` target="_blank"`
    }
    out += `>${text}</a>`
    return out
  }

  image(href, title, text) {
    let out = `<img src="${href}" alt="${text}"`
    if (title) {
      out += ` title="${title}"`
    }
    out += this.options.xhtml ? '/>' : '>'
    return out
  }

  text(text) {
    return text
  }
}


/***/ }),

/***/ "./node_modules/PenguinMod-MarkDown/src/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/PenguinMod-MarkDown/src/utils.js ***!
  \*******************************************************/
/*! exports provided: merge, noop, escape, unescape, replace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return unescape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
function merge(obj) {
  let i = 1
  let target
  let key

  for (; i < arguments.length; i++) {
    target = arguments[i]
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key]
      }
    }
  }

  return obj
}

function noop() {}
noop.exec = noop

function escape(html, encode) {
  return html
    /*
    .replace(encode ? /&/g : /&(?!#?\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    */
}

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, (_, n) => {
    n = n.toLowerCase()
    if (n === 'colon') return ':'
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(Number(n.substring(1)))
    }
    return ''
  })
}

function replace(regex, opt) {
  regex = regex.source
  opt = opt || ''
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt)
    val = val.source || val
    val = val.replace(/(^|[^\[])\^/g, '$1')
    regex = regex.replace(name, val)
    return self
  }
}




/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-cloud-variable-badge/cloud-variable-badge.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??postcss!./src/components/tw-cloud-variable-badge/cloud-variable-badge.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #E5F0FF */ /* #E9F1FC */ /* #D9E3F2 */ /* 90% transparent version of motion-primary */ /* #FFFFFF */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 15% transparent version of black */ /* #575E75 */ /* #00c3ff */ /* #007bc7 */ /* 35% transparent version of motion-primary */ /* 15% transparent version of motion-primary */ /* opt-in theme overrides */ /*top bar color when in dark mode #009CCC*/ /* #00c3ff */ /* #007bc7 */ /* #CF63CF */ /* #BD42BD */ /* #FFAB19 */ /* #FF8C1A */ /* #0FBD8C */ /* #0FBD8C */ /* #FF8C1A */ /* #FFB366 */ /* #FF8C1A */ /* 35% transparent version of extensions-primary */ /* opaque version of extensions-transparent, on white bg */ /* lighter than motion-primary */ .cloud-variable-badge_badge_2kZVK {\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border: 1px solid #b9d6ff;\n    background-color: #dbebff;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    border-radius: 0.5rem;\n} [theme=\"dark\"] .cloud-variable-badge_badge_2kZVK {\n    border-color: #203652;\n    background-color: #16202c;\n} .cloud-variable-badge_title_2xJoL {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    font-weight: bold;\n} [theme=\"dark\"] .cloud-variable-badge_cloud-icon_1JP1e {\n    filter: invert(100%);\n} .cloud-variable-badge_servers_1fLAL {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n} .cloud-variable-badge_server_3s9y9 {\n    border: 1px solid var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15));\n    padding: 0.25rem 0.5rem;\n    margin: 0;\n    background: none;\n    border-radius: 1rem;\n} .cloud-variable-badge_server_3s9y9.cloud-variable-badge_selected_3ZyWW {\n    background-color: hsla(40, 100%, 58%, 1);\n    color: hsla(0, 100%, 100%, 1);\n}", ""]);

// exports
exports.locals = {
	"badge": "cloud-variable-badge_badge_2kZVK",
	"title": "cloud-variable-badge_title_2xJoL",
	"cloud-icon": "cloud-variable-badge_cloud-icon_1JP1e",
	"cloudIcon": "cloud-variable-badge_cloud-icon_1JP1e",
	"servers": "cloud-variable-badge_servers_1fLAL",
	"server": "cloud-variable-badge_server_3s9y9",
	"selected": "cloud-variable-badge_selected_3ZyWW"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-description/description.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??postcss!./src/components/tw-description/description.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".description_description_1iyDJ {\n    max-height: 250px;\n    overflow: auto;\n    white-space: pre-line;\n    overflow-wrap: break-word;\n    line-height: 1.5em;\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border: 1px solid #b9d6ff;\n    background-color: #dbebff;\n    border-radius: 0.5rem;\n}\n\n.description_description_1iyDJ a {\n    font-weight: bold;\n    text-decoration: none;\n}\n\n[theme=\"dark\"] .description_description_1iyDJ {\n    border-color: #203652;\n    background-color: #16202c;\n}\n\n.description_header_27V8b {\n    font-weight: bold;\n    font-size: 1em;\n    margin: 0;\n    padding: 0;\n}\n\n.description_divider_3z5W7 {\n    margin-top: 8px;\n}\n\n.description_project-link_2-Z1r {\n    margin-bottom: 2px;\n}\n\n.description_emoji_2CB1r {\n    width: 1.5rem;\n    height: 1.5rem;\n    object-fit: contain;\n}\n\nh1 .description_emoji_2CB1r {\n    width: 1.8rem;\n    height: 1.8rem;\n}\n\nem .description_emoji_2CB1r {\n    transform: skew(-12deg, 0deg);\n}\n\nstrong .description_emoji_2CB1r {\n    filter: contrast(2);\n}\n\ndel .description_emoji_2CB1r {\n    filter: blur(2px);\n}", ""]);

// exports
exports.locals = {
	"description": "description_description_1iyDJ",
	"header": "description_header_27V8b",
	"divider": "description_divider_3z5W7",
	"project-link": "description_project-link_2-Z1r",
	"projectLink": "description_project-link_2-Z1r",
	"emoji": "description_emoji_2CB1r"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-featured-projects/featured-projects.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??postcss!./src/components/tw-featured-projects/featured-projects.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".featured-projects_container_1--ew {\n    margin-bottom: 8px;\n}\n\n.featured-projects_opener-container_1c9_H {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    opacity: 0.8;\n    color: #222;\n}\n\n.featured-projects_opener-container_1c9_H:hover {\n    opacity: 1;\n}\n\n.featured-projects_opener-content_1kqev {\n    background-color: white;\n    padding: 4px;\n    border: 1px solid black;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);\n}\n\n.featured-projects_projects_1piAv {\n    position: relative;\n    height: 155px;\n}\n\n.featured-projects_projects_1piAv.featured-projects_transition_3TsdC {\n    transition: .2s height;\n}\n\n.featured-projects_projects_1piAv.featured-projects_opened_eLMQu {\n    height: 426px;\n}\n\n.featured-projects_footer_2fw_5 {\n    \n}\n", ""]);

// exports
exports.locals = {
	"container": "featured-projects_container_1--ew",
	"opener-container": "featured-projects_opener-container_1c9_H",
	"openerContainer": "featured-projects_opener-container_1c9_H",
	"opener-content": "featured-projects_opener-content_1kqev",
	"openerContent": "featured-projects_opener-content_1kqev",
	"projects": "featured-projects_projects_1piAv",
	"transition": "featured-projects_transition_3TsdC",
	"opened": "featured-projects_opened_eLMQu",
	"footer": "featured-projects_footer_2fw_5"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-project-input/project-input.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??postcss!./src/components/tw-project-input/project-input.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #E5F0FF */ /* #E9F1FC */ /* #D9E3F2 */ /* 90% transparent version of motion-primary */ /* #FFFFFF */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 15% transparent version of black */ /* #575E75 */ /* #00c3ff */ /* #007bc7 */ /* 35% transparent version of motion-primary */ /* 15% transparent version of motion-primary */ /* opt-in theme overrides */ /*top bar color when in dark mode #009CCC*/ /* #00c3ff */ /* #007bc7 */ /* #CF63CF */ /* #BD42BD */ /* #FFAB19 */ /* #FF8C1A */ /* #0FBD8C */ /* #0FBD8C */ /* #FF8C1A */ /* #FFB366 */ /* #FF8C1A */ /* 35% transparent version of extensions-primary */ /* opaque version of extensions-transparent, on white bg */ /* lighter than motion-primary */ /*\n    Contains constants for the z-index values of elements that are part of the global stack context.\n    In other words, z-index values that are \"inside\" a component are not added here.\n    This prevents conflicts between identical z-index values in different components.\n*/ /* Toolbox z-index: 40; set in scratch-blocks */ /* tooltips should go over add buttons if they overlap */ /* monitors go over add buttons */ /* \"ask\" block text input goes above monitors */ /* menu-bar should go over monitors, alerts and tutorials */ /* tw: show below menu bar normally */ /* Block drag z-index: 1000; default 50 is overriden in blocks.css */ /* so it is draggable into other panes */ /* in most interfaces, the context menu is always on top */ .project-input_input_1E6Af {\n    border: none;\n    width: 100%;\n    font-size: 23px;\n    line-height: 32px;\n    opacity: 0.5;\n    background-color: transparent;\n    color: inherit;\n} .project-input_input_1E6Af:focus {\n    opacity: 1;\n} .project-input_input_1E6Af:disabled {\n    opacity: 0.8;\n} .project-input_tooltip_3_EoA {\n    opacity: 1 !important;\n    background-color: hsla(289, 100%, 50%, 1) !important;\n    border: 1px solid hsla(0, 0%, 0%, .1) !important;\n    box-shadow: 0 0 .5rem hsla(0, 0%, 0%, .25) !important;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\n    border: 1px solid hsla(0, 0%, 0%, .1) !important;\n    z-index: 491 !important;\n} .project-input_tooltip_3_EoA:after {\n    border-top-color: hsla(289, 100%, 50%, 1) !important;\n}\n", ""]);

// exports
exports.locals = {
	"input": "project-input_input_1E6Af",
	"tooltip": "project-input_tooltip_3_EoA"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-studioview/studioview.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??postcss!./src/components/tw-studioview/studioview.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nImported from:\nhttps://github.com/forkphorus/forkphorus/tree/master/studioview\nWith changes to make it work properly in the scratch-gui environment.\n*/\n\n/* we wrap it in a <div> */\n\n.studioview_wrapper_1SFBd {\n  height: 100%;\n}\n\n/* fix some styles that can be messed up by scratch-gui */\n\n.studioview_studioview-root_1OP-i * {\n  box-sizing: content-box !important;\n}\n\n.studioview_studioview-root_1OP-i {\n  height: 100%;\n}\n\n.studioview_studioview-list_2hIxk {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  overflow-anchor: none;\n}\n\n.studioview_studioview-project_IDotv, .studioview_studioview-placeholder_KKHo9 {\n  display: inline-block;\n  width: 144px;\n  padding: 3px;\n  margin-bottom: 1px;\n  margin-right: 1px;\n}\n\n.studioview_featured-studioview-project_2AmL1 {\n  border-radius: 4px;\n  background: rgb(255, 213, 55);\n  background: linear-gradient(151deg, rgba(255, 213, 55, 1) 4%, rgba(254, 255, 191, 1) 12%, rgba(255, 213, 55, 1) 21%);\n}\n\n[theme=\"dark\"] .studioview_featured-studioview-project_2AmL1 > div {\n  color: black;\n}\n\n.studioview_studioview-root_1OP-i .studioview_studioview-project_IDotv {\n  color: inherit;\n  position: relative;\n  text-decoration: none;\n}\n\n.studioview_studioview-loaded_3UCil:hover::before, .studioview_studioview-loaded_3UCil:active::before {\n  content: '';\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview_studioview-root_1OP-i .studioview_studioview-loaded_3UCil:active::before {\n  opacity: 0.2;\n}\n\n.studioview_studioview-root_1OP-i .studioview_studioview-title_2ROWB,\n.studioview_studioview-root_1OP-i .studioview_studioview-author_2P0Hj {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: inherit;\n  text-decoration: none;\n}\n\n.studioview_studioview-title_2ROWB {\n  font-size: 0.8em;\n  font-weight: bold;\n}\n\n.studioview_studioview-author_2P0Hj {\n  font-size: 0.75em;\n}\n\n.studioview_studioview-error_3XWai {\n  width: 100%;\n}\n\n.studioview_studioview-thumbnail_1HYJO, .studioview_studioview-placeholder-thumbnail_TUdop {\n  position: relative;\n  width: 144px;\n  height: 108px;\n}\n\n.studioview_studioview-thumbnail_1HYJO::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview_studioview-thumbnail_1HYJO img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  z-index: 1;\n  position: relative;\n}\n\n.studioview_studioview-placeholder_KKHo9 .studioview_studioview-thumbnail_1HYJO,\n.studioview_studioview-placeholder_KKHo9 .studioview_studioview-title_2ROWB,\n.studioview_studioview-placeholder_KKHo9 .studioview_studioview-author_2P0Hj {\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview_studioview-title_2ROWB {\n  height: 20px;\n  margin-top: 2px;\n}\n\n.studioview_studioview-author_2P0Hj {\n  height: 18px;\n}\n\n.studioview_studioview-placeholder_KKHo9 .studioview_studioview-title_2ROWB {\n  border-radius: 2px 2px 2px 0;\n  width: 100%;\n}\n\n.studioview_studioview-placeholder_KKHo9 .studioview_studioview-author_2P0Hj {\n  border-radius: 0 0 2px 2px;\n  width: 50%;\n}\n", ""]);

// exports
exports.locals = {
	"wrapper": "studioview_wrapper_1SFBd",
	"studioview-root": "studioview_studioview-root_1OP-i",
	"studioviewRoot": "studioview_studioview-root_1OP-i",
	"studioview-list": "studioview_studioview-list_2hIxk",
	"studioviewList": "studioview_studioview-list_2hIxk",
	"studioview-project": "studioview_studioview-project_IDotv",
	"studioviewProject": "studioview_studioview-project_IDotv",
	"studioview-placeholder": "studioview_studioview-placeholder_KKHo9",
	"studioviewPlaceholder": "studioview_studioview-placeholder_KKHo9",
	"featured-studioview-project": "studioview_featured-studioview-project_2AmL1",
	"featuredStudioviewProject": "studioview_featured-studioview-project_2AmL1",
	"studioview-loaded": "studioview_studioview-loaded_3UCil",
	"studioviewLoaded": "studioview_studioview-loaded_3UCil",
	"studioview-title": "studioview_studioview-title_2ROWB",
	"studioviewTitle": "studioview_studioview-title_2ROWB",
	"studioview-author": "studioview_studioview-author_2P0Hj",
	"studioviewAuthor": "studioview_studioview-author_2P0Hj",
	"studioview-error": "studioview_studioview-error_3XWai",
	"studioviewError": "studioview_studioview-error_3XWai",
	"studioview-thumbnail": "studioview_studioview-thumbnail_1HYJO",
	"studioviewThumbnail": "studioview_studioview-thumbnail_1HYJO",
	"studioview-placeholder-thumbnail": "studioview_studioview-placeholder-thumbnail_TUdop",
	"studioviewPlaceholderThumbnail": "studioview_studioview-placeholder-thumbnail_TUdop"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/interface.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??postcss!./src/playground/interface.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Base styles used by Scratch https://github.com/LLK/scratch-www/blob/develop/src/main.scss */\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n    font-weight: bold;\n    line-height: 1.7em;\n}\nh1 {\n    font-weight: 2.5rem;\n}\nh2 {\n    font-weight: 2rem;\n}\nh3 {\n    font-size: 1.4rem;\n}\nh4 {\n    font-size: 1rem;\n}\na {\n    color: rgb(153, 34, 221);\n    cursor: pointer;\n    text-decoration: underline;\n}\n.interface_container_2nBns {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n.interface_editor_3jGyG {\n    min-width: 1024px;\n    min-height: 640px;\n    height: 100%;\n}\n.interface_editor_3jGyG .interface_center_2d9_b {\n    height: 100%;\n}\n.interface_player-only_38SyA .interface_center_2d9_b {\n    margin: auto;\n}\n.interface_menu_3K-Q2 {\n    margin-bottom: 8px;\n}\n.interface_section_3pFkT {\n    margin: 8px 0 8px 0;\n}\n.interface_footer_3JeCN {\n    padding: 10px 0;\n    margin-top: 10px;\n    border-top: 2px solid #ddd;\n}\n.interface_footer_3JeCN a {\n    font-weight: bold;\n    text-decoration: none;\n}\n[theme=\"dark\"] .interface_footer_3JeCN {\n    border-color: #1a1a1a;\n}\n.interface_footer-content_1aIC- {\n    max-width: 600px;\n    margin: auto;\n}\n.interface_footer-text_IgwDU {\n    text-align: center;\n    margin: 5px 0 10px 0;\n}\n.interface_footer-columns_1SUSg {\n    display: flex;\n    justify-content: center;\n    justify-items: center;\n    flex-wrap: wrap;\n}\n.interface_footer-section_11lCO {\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n    margin-bottom: 10px;\n}\n.interface_footer-section_11lCO > * {\n    margin-bottom: 10px;\n}\n[theme=\"dark\"] .interface_container_2nBns {\n    background-color: #111;\n}\n[theme=\"dark\"] .interface_player-only_38SyA {\n    color: #ddd;\n}\n[theme=\"dark\"] a {\n    color: #4af;\n}\n.interface_unshared-update_i7deb {\n    line-height: 1.5em;\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border: 1px solid #b9d6ff;\n    background-color: #dbebff;\n    border-radius: 0.5rem;\n}\n[theme=\"dark\"] .interface_unshared-update_i7deb {\n    border-color: #203652;\n    background-color: #16202c;\n}\n.interface_unshared-update_i7deb p {\n    margin: 4px 0;\n}\n.interface_unshared-update_i7deb a {\n    font-weight: bold;\n    text-decoration: none;\n}\n.interface_remix-warning-box_3ELA7 {\n    line-height: 1.5em;\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border: 1px solid #ffdbb9;\n    background-color: #ffecdb;\n    border-radius: 0.5rem;\n}\n[theme=\"dark\"] .interface_remix-warning-box_3ELA7 {\n    border-color: #523720;\n    background-color: #2c2016;\n}\n.interface_remix-warning-box_3ELA7 p {\n    margin: 4px 0;\n}\n.interface_remix-warning-box_3ELA7 a {\n    font-weight: bold;\n    text-decoration: none;\n}\n.interface_report-link_1GiD4,\n.interface_report-link_1GiD4 > img {\n    height: 16px;\n    margin-right: 4px;\n}\n.interface_report-link_1GiD4 {\n    color: red !important;\n}\n.interface_profilelink_NHj2p,\n.interface_profilelink_NHj2p {\n    color: rgb(14, 141, 20) !important;\n}\n.interface_remixList_2_l80 {\n    overflow-x: auto;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    height: 128px;\n    background-color: rgba(0, 0, 0, 10%);\n}\n.interface_remixProject_3TfIu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: white;\n    margin-left: 3px;\n    margin-right: 3px;\n    text-decoration: none;\n    color: black;\n    font-size: 0.8em;\n}\n[theme=\"dark\"] .interface_remixProject_3TfIu {\n    background-color: #111;\n    color: white;\n}\n.interface_remixProject_3TfIu:hover {\n    background-color: hsl(0, 0%, 95%);\n}\n[theme=\"dark\"] .interface_remixProject_3TfIu:hover {\n    background-color: rgba(0, 0, 0, 5%);\n}", ""]);

// exports
exports.locals = {
	"container": "interface_container_2nBns",
	"editor": "interface_editor_3jGyG",
	"center": "interface_center_2d9_b",
	"player-only": "interface_player-only_38SyA",
	"playerOnly": "interface_player-only_38SyA",
	"menu": "interface_menu_3K-Q2",
	"section": "interface_section_3pFkT",
	"footer": "interface_footer_3JeCN",
	"footer-content": "interface_footer-content_1aIC-",
	"footerContent": "interface_footer-content_1aIC-",
	"footer-text": "interface_footer-text_IgwDU",
	"footerText": "interface_footer-text_IgwDU",
	"footer-columns": "interface_footer-columns_1SUSg",
	"footerColumns": "interface_footer-columns_1SUSg",
	"footer-section": "interface_footer-section_11lCO",
	"footerSection": "interface_footer-section_11lCO",
	"unshared-update": "interface_unshared-update_i7deb",
	"unsharedUpdate": "interface_unshared-update_i7deb",
	"remix-warning-box": "interface_remix-warning-box_3ELA7",
	"remixWarningBox": "interface_remix-warning-box_3ELA7",
	"report-link": "interface_report-link_1GiD4",
	"reportLink": "interface_report-link_1GiD4",
	"profilelink": "interface_profilelink_NHj2p",
	"remixList": "interface_remixList_2_l80",
	"remixProject": "interface_remixProject_3TfIu"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/vote-frame.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??postcss!./src/playground/vote-frame.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vote-frame_frame_2OJUs {\n    width: 100%;\n    height: 128px;\n    border: 0;\n}", ""]);

// exports
exports.locals = {
	"frame": "vote-frame_frame_2OJUs"
};

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=sw.js!./src/playground/service-worker.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=sw.js!./src/playground/service-worker.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sw.js";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/tw-theme-dark.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* GUI */\n:root {\n    background: #111;\n    color: #eee;\n    color-scheme: dark;\n    /* see colors.css */\n    --ui-primary: rgb(17, 17, 17);\n    --ui-secondary: rgb(30, 30, 30);\n    --ui-tertiary: rgb(46, 46, 46);\n    --ui-modal-overlay: #333a;\n    --ui-black-transparent: rgba(255, 255, 255, 0.15);\n    --text-primary: #eee;\n    /* scratch-paint */\n    --paint-ui-pane-border: var(--ui-black-transparent);\n    --paint-text-primary: #eee;\n    --paint-form-border: var(--ui-black-transparent);\n}\n\n/* Blockly */\n.blocklySvg {\n    background-color: var(--ui-secondary) !important;\n    color-scheme: light;\n}\n[id^=\"blocklyGridPattern\"] > line {\n    stroke: #484848;\n}\n.blocklyFlyoutBackground {\n    fill: #111;\n}\n.blocklyFlyoutLabelText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton .blocklyText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton:hover {\n    fill: #111;\n}\n/* blocklyFlyoutCheckboxPath stroke and blocklyFlyoutCheckbox fill must match */\n.blocklyFlyoutCheckboxPath {\n    stroke: #111;\n}\n.blocklyFlyoutCheckbox {\n    fill: #111;\n}\n.checked > .blocklyFlyoutCheckbox {\n    stroke: #a1c6fa;\n}\n.checked > .blocklyFlyoutCheckboxPath {\n    stroke: white;\n}\n.scratchCategoryMenu {\n    color: #ccc;\n}\n.blocklyToolboxDiv,\n.scratchCategoryMenu {\n    background: #111 !important;\n}\n.blocklyScrollbarHandle {\n    fill: #666;\n}\n.blocklyZoom {\n    filter: invert(100%);\n}\n.scratchCategoryMenuItem.categorySelected {\n    background: var(--ui-secondary);\n}\n.valueReportBox {\n    color: black;\n}\n.blocklyWidgetDiv {\n    color-scheme: light;\n}\n.blocklyWidgetDiv .goog-menu {\n    background: var(--ui-primary);\n    border-color: var(--ui-black-transparent);\n}\n.blocklyWidgetDiv .goog-menuitem {\n    color: var(--text-primary);\n}\n.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {\n    color: #666 !important;\n}\n.sa-blockly-menu-item-border {\n    border-top-color: var(--ui-black-transparent) !important;\n}\n.blocklyWidgetDiv .goog-menuitem.goog-menuitem-highlight {\n    background-color: var(--ui-tertiary);\n    border-color: transparent; /* remove border */\n}\n.scratchCommentText {\n    color: black;\n}\n.blocklyInsertionMarker > .blocklyPath {\n    fill: #ccc;\n}\n\n/* Other / Multipurpose */\n.Popover {\n    /* weird Chrome bug displays white bar above popovers with color-scheme: dark */\n    color-scheme: light;\n}\n.Popover-body {\n    background: var(--ui-secondary);\n    border-color: var(--ui-black-transparent);\n    color: var(--text-primary);\n}\n.Popover-tipShape {\n    fill: var(--ui-secondary);\n    stroke: var(--ui-black-transparent);\n}\n"

/***/ }),

/***/ "./node_modules/slugo/dist/slugo.es.js":
/*!*********************************************!*\
  !*** ./node_modules/slugo/dist/slugo.es.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function index (input) {
  return input // Remove html tags
  .replace(/<(?:.|\n)*?>/gm, '') // Remove special characters
  .replace(/[!\"#$%&'\(\)\*\+,\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '') // eslint-disable-line no-useless-escape
  // Replace dots and spaces with a short dash
  .replace(/(\s|\.)/g, '-') // Replace long dash with two short dashes
  .replace(/—/g, '--') // Make the whole thing lowercase
  .toLowerCase();
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./src/addons/channels.js":
/*!********************************!*\
  !*** ./src/addons/channels.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let changeChannel;
let reloadChannel;
if (typeof BroadcastChannel !== 'undefined') {
  changeChannel = new BroadcastChannel('addons-change');
  reloadChannel = new BroadcastChannel('addons-reload');
}
/* harmony default export */ __webpack_exports__["default"] = ({
  changeChannel,
  reloadChannel
});

/***/ }),

/***/ "./src/components/sn-likebtn/LikeButton.jsx":
/*!**************************************************!*\
  !*** ./src/components/sn-likebtn/LikeButton.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LikeButton = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (document.getElementById("likebtn_wjs")) return;
    const script = document.createElement("script");
    script.async = true;
    script.id = "likebtn_wjs";
    script.src = "//w.likebtn.com/js/w/widget.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "likebtn-wrapper",
    "data-theme": "custom",
    "data-vert": "true",
    "data-show_like_label": "false"
  });
};
/* harmony default export */ __webpack_exports__["default"] = (LikeButton);

/***/ }),

/***/ "./src/components/tw-cloud-variable-badge/cloud-server-button.jsx":
/*!************************************************************************!*\
  !*** ./src/components/tw-cloud-variable-badge/cloud-server-button.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cloud-variable-badge.css */ "./src/components/tw-cloud-variable-badge/cloud-variable-badge.css");
/* harmony import */ var _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.bindall */ "./node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





class CloudServerButton extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    lodash_bindall__WEBPACK_IMPORTED_MODULE_3___default()(this, ['handleClick']);
  }
  handleClick() {
    this.props.onClick(this.props.cloudHost);
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_2___default.a.server, {
        [_cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_2___default.a.selected]: this.props.selected
      }),
      onClick: this.handleClick,
      title: this.props.cloudHost
    }, this.props.name);
  }
}
CloudServerButton.propTypes = {
  cloudHost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (CloudServerButton);

/***/ }),

/***/ "./src/components/tw-cloud-variable-badge/cloud-variable-badge.css":
/*!*************************************************************************!*\
  !*** ./src/components/tw-cloud-variable-badge/cloud-variable-badge.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/postcss-loader/src??postcss!./cloud-variable-badge.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-cloud-variable-badge/cloud-variable-badge.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tw-cloud-variable-badge/cloud-variable-badge.jsx":
/*!*************************************************************************!*\
  !*** ./src/components/tw-cloud-variable-badge/cloud-variable-badge.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _clouddata_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clouddata.svg */ "./src/components/tw-cloud-variable-badge/clouddata.svg");
/* harmony import */ var _clouddata_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clouddata_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cloud_server_button_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cloud-server-button.jsx */ "./src/components/tw-cloud-variable-badge/cloud-server-button.jsx");
/* harmony import */ var _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cloud-variable-badge.css */ "./src/components/tw-cloud-variable-badge/cloud-variable-badge.css");
/* harmony import */ var _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/brand */ "./src/lib/brand.js");







const hosts = [{
  name: 'US East',
  cloudHost: 'wss://clouddata.turbowarp.org'
}, {
  name: 'EU',
  cloudHost: 'wss://clouddata-eu.turbowarp.org',
  provider: {
    name: '9gr',
    href: 'https://scratch.mit.edu/users/9gr/'
  }
}];
const CloudVariableBadge = props => {
  const selectedHost = hosts.find(i => i.cloudHost === props.cloudHost);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5___default.a.badge
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5___default.a.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5___default.a.cloudIcon,
    src: _clouddata_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "",
    width: 32,
    height: 32
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"]
  // eslint-disable-next-line max-len
  , {
    defaultMessage: "This project uses cloud variables.",
    id: "tw.usesCloudVariables"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"]
  // eslint-disable-next-line max-len
  , {
    defaultMessage: "{APP_NAME}'s cloud variables are not connected to Scratch's. Anyone can {changeTheirUsername} to anything, so beware of impersonation. We now use Infinity Server created by thepython555, which unlocks a lot of TurboWarp's cloud limiations. Go to the GitHub repo to learn more."
    // eslint-disable-next-line max-len
    ,

    id: "tw.usesCloudVariables2",
    values: {
      APP_NAME: _lib_brand__WEBPACK_IMPORTED_MODULE_6__["APP_NAME"],
      changeTheirUsername: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: props.onOpenChangeUsername
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
        defaultMessage: "change their username"
        // eslint-disable-next-line max-len
        ,

        id: "tw.usesCloudVariables2.change"
      }))
    }
  }), selectedHost ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _cloud_variable_badge_css__WEBPACK_IMPORTED_MODULE_5___default.a.servers
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Pick a server near you:",
    id: "tw.cloudServers"
  }), hosts.map(i => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cloud_server_button_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: i.ws,
    name: i.name,
    cloudHost: i.cloudHost,
    selected: props.cloudHost === i.cloudHost,
    onClick: props.onSetCloudHost
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Using a custom cloud variable server: {server}"
    // eslint-disable-next-line max-len
    ,

    id: "tw.customCloudServer",
    values: {
      server: props.cloudHost
    }
  }), selectedHost && selectedHost.provider && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Server provided by {name}.",
    id: "tw.cloudProvider",
    values: {
      name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: selectedHost.provider.href,
        target: "_blank",
        rel: "noreferrer"
      }, selectedHost.provider.name)
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://docs.turbowarp.org/cloud-variables"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Learn more about cloud variables.",
    id: "tw.moreCloud"
  })));
};
CloudVariableBadge.propTypes = {
  cloudHost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onSetCloudHost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onOpenChangeUsername: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (CloudVariableBadge);

/***/ }),

/***/ "./src/components/tw-cloud-variable-badge/clouddata.svg":
/*!**************************************************************!*\
  !*** ./src/components/tw-cloud-variable-badge/clouddata.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/33b737193edfe1730f38112ad35a84b4.svg";

/***/ }),

/***/ "./src/components/tw-description/description.css":
/*!*******************************************************!*\
  !*** ./src/components/tw-description/description.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/postcss-loader/src??postcss!./description.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-description/description.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tw-description/description.jsx":
/*!*******************************************************!*\
  !*** ./src/components/tw-description/description.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _description_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./description.css */ "./src/components/tw-description/description.css");
/* harmony import */ var _description_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_description_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var PenguinMod_MarkDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! PenguinMod-MarkDown */ "./node_modules/PenguinMod-MarkDown/src/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun'];
const numberSuffixes = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'];
const addNumberSuffix = num => {
  if (!num) return "".concat(num);
  if (num < 20 && num > 10) return "".concat(num, "th");
  return num + numberSuffixes[(num - 1) % 10];
};
const defaultCustoms = {
  'clock': '$hour:$minute',
  '12clock': '$hour12:$minute',
  'date': '$day/$month/$year',
  'longDate': '$day $monthName $year',
  'dateClock': '$day/$month/$year $hour:$minute',
  'longDateClock': '$day $monthName $year $hour:$minute'
};
class Renderer {
  constructor(options) {
    this.options = options || {};
  }
  code(code) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, code));
  }
  blockquote(quote) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote", null, quote);
  }
  html(html) {
    return html;
  }
  heading(text, level) {
    switch (level) {
      case 1:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, text);
      case 2:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, text);
      case 3:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, text);
      case 4:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, text);
      case 5:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, text);
      case 6:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, text);
    }
  }
  hr() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null);
  }
  list(body, ordered, taskList) {
    const css = taskList ? _description_css__WEBPACK_IMPORTED_MODULE_3___default.a.taskList : null;
    return ordered ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
      className: css
    }, body) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: css
    }, body);
  }
  listitem(text, checked) {
    if (typeof checked === 'undefined') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, text);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: _description_css__WEBPACK_IMPORTED_MODULE_3___default.a.taskListItem
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      className: _description_css__WEBPACK_IMPORTED_MODULE_3___default.a.taskListItemCheckbox,
      checked: checked
    }), text);
  }
  paragraph(text) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text);
  }
  table(header, body) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, body));
  }
  tablerow(content) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, content);
  }
  tablecell(content, flags) {
    const alignment = flags.align ? "text-align:".concat(flags.align) : null;
    return flags.header ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      style: alignment
    }, content) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      style: alignment
    }, content);
  }

  // span level renderer
  strong(text) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, text);
  }
  em(text) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, text);
  }
  codespan(text) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, text);
  }
  br() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null);
  }
  del(text) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", null, text);
  }
  link(href, title, text) {
    if (this.options.sanitize) {
      let prot;
      try {
        prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
      } catch (err) {
        return '';
      }
      if (
      // eslint-disable-next-line no-script-url
      prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
        // eslint-disable-line no-script-url
        return '';
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: href,
      title: title,
      target: "_blank",
      rel: "noreferrer"
    }, text);
  }
  image(href, title, text) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: href,
      alt: text,
      title: title
    });
  }
  text(text) {
    return text;
  }
  project(id) {
    if (/^\d{6,}$/.test(id)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://editor.snail-ide.com/#".concat(id)
      }, "#".concat(id));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://snail-ide.com/search?q=%23".concat(id),
      target: "_blank",
      rel: "noreferrer"
    }, "#".concat(id));
  }
  mention(name) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://snail-ide.com/profile?user=".concat(name),
      target: "_blank",
      rel: "noreferrer"
    }, "@".concat(name));
  }
  emoji(name) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "https://snail-ide-object-libraries.vercel.app/files/emojis/".concat(name, ".png"),
      alt: ":".concat(name, ":"),
      title: ":".concat(name, ":"),
      className: _description_css__WEBPACK_IMPORTED_MODULE_3___default.a.emoji
    });
  }
  timestamp(time, locale, custom) {
    var _defaultCustoms$custo;
    time = new Date(time);
    if (!custom) return time.toLocaleString();
    const timeParts = {
      year: time.getFullYear(),
      month: time.getMonth(),
      date: time.getDate(),
      day: days[time.getDay()],
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds(),
      millisecond: time.getMilliseconds()
    };
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const millisecond = currentDate.getMilliseconds();
    const timeVars = _objectSpread(_objectSpread({}, timeParts), {}, {
      monthName: monthNames[timeParts.month],
      shortMonthName: monthNames[timeParts.month].slice(0, 3),
      month: timeParts.month + 1,
      hour: timeParts.hour >= 10 ? timeParts.hour : "0".concat(timeParts.hour),
      ampm: timeParts.hour >= 11 ? 'pm' : 'am',
      hour12: (12 + (timeParts.hour - 1)) % 12 + 1,
      dateSuffixed: addNumberSuffix(timeParts.date),
      hoursTo: timeParts.hour - hour,
      minutesTo: timeParts.minute - minute,
      secondsTo: timeParts.second - second,
      millisecondsTo: timeParts.millisecond - millisecond,
      daysTo: timeParts.date - date,
      monthTo: timeParts.month - month,
      yearsTo: timeParts.year - year,
      hoursSince: hour - hour,
      minutesSince: minute - timeParts.minute,
      secondsSince: second - timeParts.second,
      millisecondsSince: millisecond - timeParts.millisecond,
      daysSince: date - timeParts.date,
      monthsSince: month - timeParts.month,
      yearsSince: year - timeParts.year
    });
    custom = (_defaultCustoms$custo = defaultCustoms[custom]) !== null && _defaultCustoms$custo !== void 0 ? _defaultCustoms$custo : custom;
    for (const [_, variable] of custom.matchAll(/\$(\w+)/g)) {
      const val = timeVars[variable];
      console.log(variable, val);
      custom = custom.replace(/\$\w+/, val);
    }
    return custom;
  }
}
const decorate = text => Object(PenguinMod_MarkDown__WEBPACK_IMPORTED_MODULE_4__["render"])(text, {
  renderer: new Renderer()
});
const Description = _ref => {
  let {
    instructions,
    credits
  } = _ref;
  return instructions !== 'unshared' && credits !== 'unshared' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _description_css__WEBPACK_IMPORTED_MODULE_3___default.a.description
  }, instructions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: _description_css__WEBPACK_IMPORTED_MODULE_3___default.a.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Instructions",
    id: "tw.home.instructions"
  })), decorate(instructions)) : null, instructions && credits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _description_css__WEBPACK_IMPORTED_MODULE_3___default.a.divider
  }) : null, credits && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: _description_css__WEBPACK_IMPORTED_MODULE_3___default.a.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    defaultMessage: "Notes and Credits",
    id: "tw.home.credit"
  })), decorate(credits)));
};
Description.propTypes = {
  instructions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  credits: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./src/components/tw-featured-projects/featured-projects.css":
/*!*******************************************************************!*\
  !*** ./src/components/tw-featured-projects/featured-projects.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/postcss-loader/src??postcss!./featured-projects.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-featured-projects/featured-projects.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tw-featured-projects/featured-projects.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/tw-featured-projects/featured-projects.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.bindall */ "./node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _tw_studioview_studioview_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tw-studioview/studioview.jsx */ "./src/components/tw-studioview/studioview.jsx");
/* harmony import */ var _featured_projects_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./featured-projects.css */ "./src/components/tw-featured-projects/featured-projects.css");
/* harmony import */ var _featured_projects_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_featured_projects_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_tw_navigation_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/tw-navigation-utils.js */ "./src/lib/tw-navigation-utils.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);









class FeaturedProjects extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    lodash_bindall__WEBPACK_IMPORTED_MODULE_0___default()(this, ['handleSelect', 'handleOpenProjects']);
    this.state = {
      opened: false,
      transition: true
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.projectId === '0' && prevProps.projectId === null) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        opened: true,
        transition: false
      });
    }
  }
  handleSelect(id) {
    this.props.setProjectId(id);
  }
  handleOpenProjects() {
    this.setState({
      opened: true
    });
  }
  render() {
    const opened = this.state.opened;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _featured_projects_css__WEBPACK_IMPORTED_MODULE_6___default.a.container
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_featured_projects_css__WEBPACK_IMPORTED_MODULE_6___default.a.projects, {
        [_featured_projects_css__WEBPACK_IMPORTED_MODULE_6___default.a.opened]: opened,
        [_featured_projects_css__WEBPACK_IMPORTED_MODULE_6___default.a.transition]: this.state.transition
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tw_studioview_studioview_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: this.props.studio,
      onSelect: this.handleSelect,
      placeholder: !opened
    }), opened ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _featured_projects_css__WEBPACK_IMPORTED_MODULE_6___default.a.openerContainer,
      onClick: this.handleOpenProjects
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _featured_projects_css__WEBPACK_IMPORTED_MODULE_6___default.a.openerContent
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      defaultMessage: "Click to view uploaded projects.",
      id: "tw.viewFeaturedProjects"
    })))));
  }
}
FeaturedProjects.propTypes = {
  setProjectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  projectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  studio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
const mapStateToProps = state => ({
  projectId: state.scratchGui.projectState.projectId
});
const mapDispatchToProps = dispatch => ({
  setProjectId: projectId => Object(_lib_tw_navigation_utils_js__WEBPACK_IMPORTED_MODULE_7__["setProjectId"])(dispatch, projectId)
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(FeaturedProjects));

/***/ }),

/***/ "./src/components/tw-project-input/project-input.css":
/*!***********************************************************!*\
  !*** ./src/components/tw-project-input/project-input.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/postcss-loader/src??postcss!./project-input.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-project-input/project-input.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tw-project-input/project-input.jsx":
/*!***********************************************************!*\
  !*** ./src/components/tw-project-input/project-input.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.bindall */ "./node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/project-state */ "./src/reducers/project-state.js");
/* harmony import */ var _project_input_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-input.css */ "./src/components/tw-project-input/project-input.css");
/* harmony import */ var _project_input_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_project_input_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_tw_navigation_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/tw-navigation-utils */ "./src/lib/tw-navigation-utils.js");









const PROJECT_BASE = 'https://scratch.mit.edu/projects/';
const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["defineMessages"])({
  tooltip: {
    "id": "tw.input.tooltip",
    "defaultMessage": "Copy and paste a Scratch project link here!"
  }
});
class ProjectInput extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    lodash_bindall__WEBPACK_IMPORTED_MODULE_3___default()(this, ['handleKeyDown', 'handleChange', 'handleBlur', 'handleFocus', 'inputRef', 'tooltipRef']);
    this.state = {
      projectId: this.props.projectId
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.projectId !== prevProps.projectId) {
      if (this.props.projectId === _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__["defaultProjectId"]) {
        this.input.focus();
        this.input.selectionStart = this.input.value.length;
      } else {
        this.input.blur();
      }
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        projectId: this.props.projectId
      });
    }
  }
  extractProjectId(text) {
    const numberMatch = text.match(/\d+/);
    return numberMatch ? numberMatch[0] : null;
  }
  readProjectId(e) {
    const id = this.extractProjectId(e.target.value);
    return id || _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__["defaultProjectId"];
  }
  handleKeyDown(e) {
    if (e.key === 'Enter' && this.state.projectId) {
      this.input.blur();
    }
  }
  handleChange(e) {
    this.setState({
      projectId: this.readProjectId(e) || _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__["defaultProjectId"]
    });
  }
  handleBlur() {
    if (this.state.projectId && this.state.projectId !== this.props.projectId) {
      this.props.setProjectId(this.state.projectId);
    }
    react_tooltip__WEBPACK_IMPORTED_MODULE_4___default.a.hide(this.tooltip);
  }
  handleFocus(e) {
    if (this.extractProjectId(e.target.value)) {
      e.target.select();
    }
    react_tooltip__WEBPACK_IMPORTED_MODULE_4___default.a.show(this.tooltip);
  }
  inputRef(el) {
    this.input = el;
  }
  tooltipRef(el) {
    this.tooltip = el;
  }
  render() {
    const projectId = this.state.projectId === _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__["defaultProjectId"] ? '' : this.state.projectId || '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      ref: this.tooltipRef,
      "data-tip": this.props.intl.formatMessage(messages.tooltip)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: _project_input_css__WEBPACK_IMPORTED_MODULE_7___default.a.tooltip,
      effect: "solid"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      ref: this.inputRef,
      spellCheck: "false",
      type: "text",
      value: "".concat(PROJECT_BASE).concat(projectId),
      className: _project_input_css__WEBPACK_IMPORTED_MODULE_7___default.a.input,
      onKeyDown: this.handleKeyDown,
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus
    }));
  }
}
ProjectInput.propTypes = {
  intl: react_intl__WEBPACK_IMPORTED_MODULE_5__["intlShape"],
  projectId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  setProjectId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
const mapStateToProps = state => ({
  projectId: state.scratchGui.projectState.projectId
});
const mapDispatchToProps = dispatch => ({
  setProjectId: projectId => Object(_lib_tw_navigation_utils__WEBPACK_IMPORTED_MODULE_8__["setProjectId"])(dispatch, projectId)
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ProjectInput)));

/***/ }),

/***/ "./src/components/tw-studioview/studioview.css":
/*!*****************************************************!*\
  !*** ./src/components/tw-studioview/studioview.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/postcss-loader/src??postcss!./studioview.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tw-studioview/studioview.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/tw-studioview/studioview.js":
/*!****************************************************!*\
  !*** ./src/components/tw-studioview/studioview.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _studioview_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./studioview.css */ "./src/components/tw-studioview/studioview.css");
/* harmony import */ var _studioview_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_studioview_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable */
// Imported from:
// https://github.com/forkphorus/forkphorus/tree/master/studioview
// With changes to make it work properly in the scratch-gui environment.
// todo: we have to see if we are leaking memory when this is mounted and unmounted, esp. because of event listeners
// todo: use react-intl for translations




/**
 * @class
 */
var StudioView = function StudioView(studioId) {
  this.studioId = studioId;
  this.offset = 0;
  this.ended = false;
  this.loadingPage = false;
  this.unusedPlaceholders = [];
  this.root = document.createElement('div');
  this.root.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewRoot;
  this.projectList = document.createElement('div');
  this.projectList.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewList;
  this.root.appendChild(this.projectList);
  if ('IntersectionObserver' in window) {
    this.intersectionObserver = new IntersectionObserver(this.handleIntersection.bind(this), {
      root: this.projectList
    });
    this.loadNextPageObserver = new IntersectionObserver(this.handleLoadNextPageIntersection.bind(this), {
      root: this.projectList
    });
  } else {
    this.intersectionObserver = null;
    this.loadNextPageObserver = null;
  }

  // will be filled in by studioview.jsx
  this.messages = {
    AUTHOR_ATTRIBUTION: '',
    PROJECT_HOVER_TEXT: '',
    LOAD_ERROR: ''
  };
};

/**
 * Add a project to the view.
 * An unused placeholder element may be used, or it may be created.
 */
StudioView.prototype.addProject = function (details) {
  var el;
  if (this.unusedPlaceholders.length) {
    el = this.unusedPlaceholders.shift();
  } else {
    el = this.createPlaceholder();
    this.projectList.appendChild(el);
  }
  this.placeholderToProject(el, details.id, details.title, details.author, details.featured);
};

/**
 * Create an <img> element that will load only when it becomes visible.
 */
StudioView.prototype.createLazyImage = function (src) {
  var el = document.createElement('img');
  if (this.intersectionObserver) {
    this.intersectionObserver.observe(el);
    el.dataset.src = src;
  } else {
    // then we just won't lazy load it
    el.src = src;
  }
  return el;
};

/**
 * Create a placeholder or placeholder element.
 */
StudioView.prototype.createPlaceholder = function () {
  var el = document.createElement('a');
  el.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewProject, _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewPlaceholder);
  var thumbnail = document.createElement('div');
  thumbnail.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewThumbnail;
  var title = document.createElement('div');
  title.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewTitle;
  var author = document.createElement('div');
  author.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewAuthor;
  el.thumbnailEl = thumbnail;
  el.titleEl = title;
  el.authorEl = author;
  el.appendChild(thumbnail);
  el.appendChild(title);
  el.appendChild(author);
  return el;
};

/**
 * Convert a placeholder element made by createPlaceholder to a project element.
 */
StudioView.prototype.placeholderToProject = function (el, id, title, author, featured) {
  el.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewProject, _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewLoaded);
  if (featured == true) {
    el.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewProject, _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewLoaded, _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.featuredStudioviewProject);
  }
  el.dataset.id = id;
  el.dataset.title = title;
  el.dataset.author = author;
  el.title = this.messages.PROJECT_HOVER_TEXT.replace('$author', author).replace('$title', title);
  el.href = StudioView.PROJECT_PAGE.replace('$id', id);
  var thumbnailSrc = StudioView.THUMBNAIL_SRC.replace('$id', id);
  var thumbnailImg = this.createLazyImage(thumbnailSrc);
  el.thumbnailEl.appendChild(thumbnailImg);
  el.titleEl.innerText = title;
  el.authorEl.innerText = this.messages.AUTHOR_ATTRIBUTION.replace('$author', author);
  el.addEventListener('click', this.handleClick.bind(this), true);
  el.addEventListener('keydown', this.handleKeyDown.bind(this), true);
  return el;
};

/**
 * Adds an error message to the list.
 */
StudioView.prototype.addErrorElement = function () {
  var el = document.createElement('div');
  el.innerText = this.messages.LOAD_ERROR;
  el.className = _studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewError;
  this.projectList.appendChild(el);
};
StudioView.prototype.handleLoadNextPageIntersection = function (e) {
  for (var i = 0; i < e.length; i++) {
    var intersection = e[i];
    if (intersection.isIntersecting && this.canLoadNext()) {
      this.loadNextPage();
    }
  }
};

// Click a project element or a child of a project element
StudioView.prototype.clickProject = function (el) {
  while (!el.classList.contains(_studioview_css__WEBPACK_IMPORTED_MODULE_0___default.a.studioviewProject)) {
    el = el.parentNode;
  }
  var id = el.dataset.id;
  this.onselect(id, el);
};

// Called when click is fired on a project element
StudioView.prototype.handleClick = function (e) {
  e.preventDefault();
  this.clickProject(e.target);
};

// Called when keydown is fired on a project element
StudioView.prototype.handleKeyDown = function (e) {
  if (e.keyCode === 13) {
    // treat enter (13) as click
    e.preventDefault();
    this.clickProject(e.target);
  }
};

// Called by the IntersectionObserver when it sees an intersection
StudioView.prototype.handleIntersection = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var target = entry.target;
      target.src = target.dataset.src;
      target.dataset.src = '';
      target.className = '';
      observer.unobserve(target);
    }
  });
};

/**
 * Determines whether it is safe to attempt to load the next page.
 */
StudioView.prototype.canLoadNext = function () {
  return !this.loadingPage && !this.ended;
};

/**
 * Remove all unused placeholder elements.
 */
StudioView.prototype.cleanupPlaceholders = function () {
  while (this.unusedPlaceholders.length) {
    var el = this.unusedPlaceholders.pop();
    this.projectList.removeChild(el);
  }
};

/**
 * Add placeholder placeholder elements.
 */
StudioView.prototype.addPlaceholders = function () {
  for (var i = 0; i < StudioView.PLACEHOLDER_COUNT; i++) {
    var el = this.createPlaceholder();
    this.unusedPlaceholders.push(el);
    this.projectList.appendChild(el);
  }
};

/**
 * Make changes to the order of projects.
 * Default shuffler does nothing.
 */
StudioView.prototype.shuffler = function (projects) {
  return projects;
};

/**
 * Begins loading the next page.
 */
StudioView.prototype.loadNextPage = function () {
  if (this.loadingPage) {
    throw new Error('Already loading the next page');
  }
  if (this.ended) {
    throw new Error('There are no more pages to load');
  }
  if (this.unusedPlaceholders.length === 0) {
    this.addPlaceholders();
  }
  if (this.loadNextPageObserver) {
    this.loadNextPageObserver.disconnect();
  }
  this.root.setAttribute('loading', '');
  this.loadingPage = true;
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onload = function () {
    var rawProjects = xhr.response.projects;
    if (!Array.isArray(rawProjects)) {
      xhr.onerror();
      return;
    }
    var projects = [];
    for (var i = 0; i < rawProjects.length; i++) {
      var p = rawProjects[i];
      projects.push({
        id: p.id,
        title: p.name,
        author: p.author.username,
        featured: p.featured
      });
    }
    projects = this.shuffler(projects);
    for (var i = 0; i < projects.length; i++) {
      this.addProject(projects[i]);
    }
    this.cleanupPlaceholders();
    if (rawProjects.length === 40) {
      if (this.loadNextPageObserver) {
        this.loadNextPageObserver.observe(this.projectList.lastChild);
      }
    } else {
      this.ended = true;
      this.onend();
    }
    this.offset += projects.length;
    this.loadingPage = false;
    this.root.removeAttribute('loading');
    this.onpageload();
  }.bind(this);
  xhr.onerror = function () {
    this.root.setAttribute('error', '');
    this.cleanupPlaceholders();
    this.addErrorElement();
    this.ended = true;
  }.bind(this);
  var url = StudioView.STUDIO_API + "/pmWrapper/projects";
  xhr.open('GET', url);
  xhr.send();
};
StudioView.prototype.getURL = function () {
  return 'no studio';
};
StudioView.prototype.onselect = function (id, el) {};
StudioView.prototype.onpageload = function () {};
StudioView.prototype.onend = function () {};
StudioView.STUDIO_API = 'https://snailshare.xyz/api';

// The URL to download thumbnails from.
// $id is replaced with the project's ID.
StudioView.THUMBNAIL_SRC = 'https://snailshare.xyz/api/pmWrapper/iconUrl?id=$id';

// The URL for project pages.
// $id is replaced with the project ID.
StudioView.PROJECT_PAGE = 'https://editor.snail-ide.com/#$id';

// The amount of "placeholders" to insert before the next page loads.
StudioView.PLACEHOLDER_COUNT = 9;
/* harmony default export */ __webpack_exports__["default"] = (StudioView);

/***/ }),

/***/ "./src/components/tw-studioview/studioview.jsx":
/*!*****************************************************!*\
  !*** ./src/components/tw-studioview/studioview.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.bindall */ "./node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _studioview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./studioview */ "./src/components/tw-studioview/studioview.js");
/* harmony import */ var _studioview_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./studioview.css */ "./src/components/tw-studioview/studioview.css");
/* harmony import */ var _studioview_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_studioview_css__WEBPACK_IMPORTED_MODULE_6__);







const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["defineMessages"])({
  authorAttribution: {
    "id": "tw.studioview.authorAttribution",
    "defaultMessage": "by {author}"
  },
  hoverText: {
    "id": "tw.studioview.hoverText",
    "defaultMessage": "{title} by {author}"
  },
  error: {
    "id": "tw.studioview.error",
    "defaultMessage": "There was an error loading the next page of projects."
  }
});
class StudioViewComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    lodash_bindall__WEBPACK_IMPORTED_MODULE_2___default()(this, ['handleSelect', 'ref']);
  }
  componentDidMount() {
    this.studioView = new _studioview__WEBPACK_IMPORTED_MODULE_5__["default"](this.props.id);
    this.studioView.messages.AUTHOR_ATTRIBUTION = this.props.intl.formatMessage(messages.authorAttribution, {
      // studioview uses $-based variables
      author: '$author'
    });
    this.studioView.messages.PROJECT_HOVER_TEXT = this.props.intl.formatMessage(messages.hoverText, {
      // studioview uses $-based variables
      author: '$author',
      title: '$title'
    });
    this.studioView.messages.LOAD_ERROR = this.props.intl.formatMessage(messages.error);
    if (this.props.placeholder) {
      this.studioView.addPlaceholders();
    } else {
      this.studioView.loadNextPage();
    }
    this.studioView.onselect = this.handleSelect;
    this.el.appendChild(this.studioView.root);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.placeholder && !this.props.placeholder) {
      this.studioView.loadNextPage();
    }
  }
  handleSelect(id) {
    this.props.onSelect(id);
  }
  ref(el) {
    this.el = el;
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_studioview_css__WEBPACK_IMPORTED_MODULE_6___default.a.wrapper),
      ref: this.ref
    });
  }
}
StudioViewComponent.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  intl: react_intl__WEBPACK_IMPORTED_MODULE_4__["intlShape"].isRequired,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["injectIntl"])(StudioViewComponent));

/***/ }),

/***/ "./src/lib/tw-fix-history-api.js":
/*!***************************************!*\
  !*** ./src/lib/tw-fix-history-api.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./src/lib/log.js");

const originalReplaceState = history.replaceState;
history.replaceState = function () {
  try {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return originalReplaceState.call(this, ...args);
  } catch (e) {
    _log__WEBPACK_IMPORTED_MODULE_0__["default"].error(e);
  }
};
const originalPushState = history.pushState;
history.pushState = function () {
  try {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return originalPushState.call(this, ...args);
  } catch (e) {
    _log__WEBPACK_IMPORTED_MODULE_0__["default"].error(e);
  }
};

/***/ }),

/***/ "./src/lib/tw-packager-integration-hoc.jsx":
/*!*************************************************!*\
  !*** ./src/lib/tw-packager-integration-hoc.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PackagerIntegrationHOC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./src/lib/log.js");
/* harmony import */ var _reducers_project_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/project-state */ "./src/reducers/project-state.js");
const _excluded = ["canOpenPackager"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const PACKAGER_URL = 'https://snail-ide.js.org/Snail-IDE-Packager';
const PACKAGER_ORIGIN = "https://snail-ide.js.org";
const readBlobAsArrayBuffer = blob => new Promise((resolve, reject) => {
  const fr = new FileReader();
  fr.onload = () => resolve(fr.result);
  fr.onerror = () => reject(new Error('Cannot read blob as array buffer'));
  fr.readAsArrayBuffer(blob);
});
const PackagerIntegrationHOC = function PackagerIntegrationHOC(WrappedComponent) {
  class PackagerIntegrationComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.handleClickPackager = this.handleClickPackager.bind(this);
      this.handleMessage = this.handleMessage.bind(this);
    }
    componentDidMount() {
      window.addEventListener('message', this.handleMessage);
    }
    componentWillUnmount() {
      window.removeEventListener('message', this.handleMessage);
    }
    handleClickPackager() {
      if (this.props.canOpenPackager) {
        window.open("".concat(PACKAGER_URL, "/?import_from=").concat(location.origin));
        window.open("".concat(PACKAGER_URL, "/?import_from=").concat(location.origin));
      }
    }
    handleMessage(e) {
      if (e.origin !== PACKAGER_ORIGIN) {
        return;
      }
      if (!this.props.canOpenPackager) {
        return;
      }
      if (!e.data.p4) {
        return;
      }
      const packagerData = e.data.p4;
      if (packagerData.type !== 'ready-for-import') {
        return;
      }

      // The packager needs to know that we will be importing something so it can display a loading screen
      e.source.postMessage({
        p4: {
          type: 'start-import'
        }
      }, e.origin);
      this.props.vm.saveProjectSb3().then(readBlobAsArrayBuffer).then(buffer => {
        const name = "".concat(this.props.reduxProjectTitle, ".snail");
        e.source.postMessage({
          p4: {
            type: 'finish-import',
            data: buffer,
            name
          }
        }, e.origin, [buffer]);
      }).catch(err => {
        _log__WEBPACK_IMPORTED_MODULE_3__["default"].error(err);
        e.source.postMessage({
          p4: {
            type: 'cancel-import'
          }
        }, e.origin);
      });
    }
    render() {
      const _this$props = this.props,
        {
          /* eslint-disable no-unused-vars */
          canOpenPackager
          /* eslint-enable no-unused-vars */
        } = _this$props,
        props = _objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
        onClickPackager: this.handleClickPackager
      }, props));
    }
  }
  PackagerIntegrationComponent.propTypes = {
    canOpenPackager: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    reduxProjectTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    vm: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      saveProjectSb3: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
    })
  };
  const mapStateToProps = state => ({
    canOpenPackager: Object(_reducers_project_state__WEBPACK_IMPORTED_MODULE_4__["getIsShowingProject"])(state.scratchGui.projectState.loadingState),
    reduxProjectTitle: state.scratchGui.projectTitle,
    vm: state.scratchGui.vm
  });
  const mapDispatchToProps = () => ({});
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(PackagerIntegrationComponent);
};


/***/ }),

/***/ "./src/lib/tw-project-meta-fetcher-hoc.jsx":
/*!*************************************************!*\
  !*** ./src/lib/tw-project-meta-fetcher-hoc.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TWProjectMetaFetcherHOC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./src/lib/log.js");
/* harmony import */ var _reducers_project_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/project-title */ "./src/reducers/project-title.js");
/* harmony import */ var _reducers_tw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/tw */ "./src/reducers/tw.js");
const _excluded = ["projectId", "onSetAuthor", "onSetDescription", "onSetProjectTitle", "vm"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const API_URL = 'https://snailshare.xyz/api/projects/getPublished?id=$id';
const API_REMIX_URL = 'https://snailshare.xyz/api/pmWrapper/remixes?id=$id';
function APIProjectToReadableProject(apiProject) {
  return {
    id: apiProject.id,
    name: apiProject.name,
    desc: apiProject.instructions,
    notes: apiProject.notes,
    author: {
      id: -1,
      username: apiProject.owner
    }
  };
}
const fetchProjectMeta = projectId => fetch(API_URL.replace('$id', projectId)).then(r => {
  if (r.status === 404) {
    throw new Error('Probably unshared (API returned 404)');
  }
  if (r.status !== 200) {
    throw new Error("Unexpected status code: ".concat(r.status));
  }
  return r.json();
});
const fetchProjectRemixes = projectId => fetch(API_REMIX_URL.replace('$id', projectId)).then(r => {
  if (r.status !== 200) {
    throw new Error("Unexpected status code: ".concat(r.status));
  }
  return r.json();
});
const getNoIndexTag = () => document.querySelector('meta[name="robots"][content="noindex"]');
const setIndexable = indexable => {
  if (indexable) {
    const tag = getNoIndexTag();
    if (tag) {
      tag.remove();
    }
  } else if (!getNoIndexTag()) {
    const tag = document.createElement('meta');
    tag.name = 'robots';
    tag.content = 'noindex';
    document.head.appendChild(tag);
  }
};
const TWProjectMetaFetcherHOC = function TWProjectMetaFetcherHOC(WrappedComponent) {
  class ProjectMetaFetcherComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    shouldComponentUpdate(nextProps) {
      return this.props.projectId !== nextProps.projectId;
    }
    componentDidUpdate() {
      // project title resetting is handled in titled-hoc.jsx
      this.props.vm.runtime.renderer.setPrivateSkinAccess(true);
      this.props.onSetAuthor('', '');
      this.props.onSetDescription('', '');
      this.props.onSetRemixedProjectInfo(false, '', '');
      const projectId = this.props.projectId;
      // Don't try to load metadata for empty projects.
      if (projectId === '0') {
        return;
      }
      fetchProjectMeta(projectId).then(data => {
        /* todo: fix this and make it work properly */
        // window.LastFetchedProject = data
        // window.FetchedProjectRemixes = null
        // window.CurrentRemixFetchRequestId += 1
        // let currentReq = window.CurrentRemixFetchRequestId
        // fetchProjectRemixes(projectId).then(remixes => {
        //     if (!currentReq == window.CurrentRemixFetchRequestId) return console.log("abandoned request");
        //     if (remixes.length <= 0) {
        //         window.FetchedProjectRemixes = null;
        //         return;
        //     }
        //     window.FetchedProjectRemixes = remixes
        //     window.ForceProjectRemixListUpdate += 1
        // })
        const rawData = data;
        data = APIProjectToReadableProject(data);
        // If project ID changed, ignore the results.
        if (this.props.projectId !== projectId) {
          return;
        }
        const title = data.name;
        if (title) {
          this.props.onSetProjectTitle(title);
        }
        const authorName = data.author.username;
        const authorThumbnail = "https://trampoline.turbowarp.org/avatars/by-username/".concat(data.author.username);
        this.props.onSetAuthor(authorName, authorThumbnail);
        const instructions = data.desc || '';
        const credits = data.notes || '';
        if (instructions || credits) {
          this.props.onSetDescription(instructions, credits);
        }
        if (typeof rawData.accepted === 'boolean' || rawData.remix > 0 // checks isRemix and remixId existing at the same time
        || typeof rawData.tooLarge === 'boolean' || authorName) {
          this.props.onSetExtraProjectInfo(rawData.accepted === true, rawData.remix > 0, Number(rawData.remix), rawData.tooLarge === true, authorName, new Date(rawData.date), rawData.updating === true);
        }
        if (rawData.remix > 0) {
          // this is a remix, find the original project
          fetchProjectMeta(rawData.remix).then(remixProject => {
            // If project ID changed, ignore the results.
            if (this.props.projectId !== projectId) {
              return;
            }
            // If this project is hidden or not approved, ignore the results.
            if (typeof remixProject.name === 'string' || typeof remixProject.owner === 'string') {
              this.props.onSetRemixedProjectInfo(true,
              // loaded
              remixProject.name, remixProject.owner);
            }
          }).catch(err => {
            // this isnt fatal, just log
            _log__WEBPACK_IMPORTED_MODULE_3__["default"].warn('cannot fetch remixed project meta for this project;', err);
          });
        }
        setIndexable(true);
      }).catch(err => {
        this.props.vm.runtime.renderer.setPrivateSkinAccess(false);
        setIndexable(false);
        if ("".concat(err).includes('unshared')) {
          this.props.onSetDescription('unshared', 'unshared');
        }
        _log__WEBPACK_IMPORTED_MODULE_3__["default"].warn('cannot fetch project meta', err);
      });
    }
    render() {
      const _this$props = this.props,
        {
          /* eslint-disable no-unused-vars */
          projectId,
          onSetAuthor,
          onSetDescription,
          onSetProjectTitle,
          vm
          /* eslint-enable no-unused-vars */
        } = _this$props,
        props = _objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, props);
    }
  }
  ProjectMetaFetcherComponent.propTypes = {
    projectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    onSetAuthor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onSetDescription: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onSetProjectTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    vm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      runtime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
        renderer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
          setPrivateSkinAccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
        })
      })
    })
  };
  const mapStateToProps = state => ({
    projectId: state.scratchGui.projectState.projectId,
    vm: state.scratchGui.vm
  });
  const mapDispatchToProps = dispatch => ({
    onSetAuthor: (username, thumbnail) => dispatch(Object(_reducers_tw__WEBPACK_IMPORTED_MODULE_5__["setAuthor"])({
      username,
      thumbnail
    })),
    onSetDescription: (instructions, credits) => dispatch(Object(_reducers_tw__WEBPACK_IMPORTED_MODULE_5__["setDescription"])({
      instructions,
      credits
    })),
    onSetExtraProjectInfo: (accepted, isRemix, remixId, tooLarge, author, releaseDate, isUpdated) => dispatch(Object(_reducers_tw__WEBPACK_IMPORTED_MODULE_5__["setExtraProjectInfo"])({
      accepted,
      isRemix,
      remixId,
      tooLarge,
      author,
      releaseDate,
      isUpdated
    })),
    onSetRemixedProjectInfo: (loaded, name, author) => dispatch(Object(_reducers_tw__WEBPACK_IMPORTED_MODULE_5__["setRemixedProjectInfo"])({
      loaded,
      name,
      author
    })),
    onSetProjectTitle: title => dispatch(Object(_reducers_project_title__WEBPACK_IMPORTED_MODULE_4__["setProjectTitle"])(title))
  });
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ProjectMetaFetcherComponent);
};


/***/ }),

/***/ "./src/lib/tw-restore-point-hoc.jsx":
/*!******************************************!*\
  !*** ./src/lib/tw-restore-point-hoc.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TWRestorePointHOC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/alerts */ "./src/reducers/alerts.js");
/* harmony import */ var _reducers_project_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/project-state */ "./src/reducers/project-state.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.bindall */ "./node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var scratch_vm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scratch-vm */ "./node_modules/scratch-vm/src/index.js");
/* harmony import */ var scratch_vm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(scratch_vm__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tw_restore_point_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tw-restore-point-api */ "./src/lib/tw-restore-point-api.js");
const _excluded = ["projectChanged", "onAutosavingStart", "onAutosavingFinish", "vm"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









/**
 * @fileoverview
 * HOC responsible for automatically creating restore points.
 */

const INTERVAL = 1000 * 60 * 5;
let bailed = false;
const disabled = () => bailed || window.DISABLE_RESTORE_POINTS;
const TWRestorePointHOC = function TWRestorePointHOC(WrappedComponent) {
  class RestorePointComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      lodash_bindall__WEBPACK_IMPORTED_MODULE_5___default()(this, ['createRestorePoint']);
      this.timeout = null;
    }
    componentDidUpdate(prevProps) {
      if (disabled()) {
        return;
      }
      if (this.props.projectChanged !== prevProps.projectChanged || this.props.isShowingProject !== prevProps.isShowingProject) {
        if (this.props.projectChanged && this.props.isShowingProject) {
          // Project was modified; queue restore point.
          this.timeout = setTimeout(this.createRestorePoint, INTERVAL);
        } else {
          // Project was saved; abort restore point.
          clearTimeout(this.timeout);
          this.timeout = null;
        }
      }
    }
    componentWillUnmount() {
      clearTimeout(this.timeout);
    }
    async createRestorePoint() {
      if (disabled()) {
        return;
      }
      try {
        this.props.onAutosavingStart();
        await _tw_restore_point_api__WEBPACK_IMPORTED_MODULE_7__["default"].save(this.props.vm);
      } catch (error) {
        bailed = true;
      }
      this.timeout = null;
      // Intentional delay.
      setTimeout(() => {
        this.props.onAutosavingFinish();
        if (this.timeout === null && !bailed && this.props.projectChanged && this.props.isShowingProject) {
          this.timeout = setTimeout(this.createRestorePoint, INTERVAL);
        }
      }, 250);
    }
    render() {
      const _this$props = this.props,
        {
          /* eslint-disable no-unused-vars */
          projectChanged,
          onAutosavingStart,
          onAutosavingFinish,
          vm
          /* eslint-enable no-unused-vars */
        } = _this$props,
        props = _objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, props);
    }
  }
  RestorePointComponent.propTypes = {
    isShowingProject: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    projectChanged: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    onAutosavingStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onAutosavingFinish: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    vm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(scratch_vm__WEBPACK_IMPORTED_MODULE_6___default.a)
  };
  const mapStateToProps = state => ({
    isShowingProject: Object(_reducers_project_state__WEBPACK_IMPORTED_MODULE_4__["getIsShowingProject"])(state.scratchGui.projectState.loadingState),
    projectChanged: state.scratchGui.projectChanged,
    vm: state.scratchGui.vm
  });
  const mapDispatchToProps = dispatch => ({
    onAutosavingStart: () => dispatch(Object(_reducers_alerts__WEBPACK_IMPORTED_MODULE_3__["showStandardAlert"])('twAutosaving')),
    onAutosavingFinish: () => dispatch(Object(_reducers_alerts__WEBPACK_IMPORTED_MODULE_3__["closeAlertWithId"])('twAutosaving'))
  });
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(RestorePointComponent);
};


/***/ }),

/***/ "./src/lib/tw-theme-hoc.jsx":
/*!**********************************!*\
  !*** ./src/lib/tw-theme-hoc.jsx ***!
  \**********************************/
/*! exports provided: getInitialDarkMode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialDarkMode", function() { return getInitialDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeHOC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tw-theme-dark.css */ "./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css");
/* harmony import */ var _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const THEME_KEY = 'tw:theme';
const darkMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
const getInitialDarkMode = () => {
  try {
    const item = localStorage.getItem(THEME_KEY);
    if (item !== null) {
      return item === 'dark';
    }
  } catch (e) {
    // ignore
  }
  return darkMediaQuery.matches;
};
const darkModeStylesheet = document.createElement('style');
darkModeStylesheet.textContent = _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1___default.a;
const ThemeHOC = function ThemeHOC(WrappedComponent) {
  class ThemeComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.handleQueryChange = this.handleQueryChange.bind(this);
      this.handleClickTheme = this.handleClickTheme.bind(this);
      this.state = {
        dark: getInitialDarkMode()
      };
    }
    componentDidMount() {
      // media query does not have listeners in legacy edge
      if (darkMediaQuery.addEventListener) {
        darkMediaQuery.addEventListener('change', this.handleQueryChange);
      }
      this.updateDark();
    }
    componentDidUpdate() {
      try {
        localStorage.setItem(THEME_KEY, this.state.dark ? 'dark' : 'light');
      } catch (e) {
        // ignore
      }
      this.updateDark();
    }
    componentWillUnmount() {
      // media query does not have listeners in legacy edge
      if (darkMediaQuery.removeEventListener) {
        darkMediaQuery.removeEventListener('change', this.handleQueryChange);
      }
    }
    updateDark() {
      const dark = this.state.dark;
      document.body.setAttribute('theme', dark ? 'dark' : 'light');
      if (dark && !darkModeStylesheet.parentNode) {
        // Append at the start of <body> we override scratch-gui styles in <head>
        // but are overridden by addon styles at the end of <body>
        document.body.insertBefore(darkModeStylesheet, document.body.firstChild);
        const meta = document.head.querySelector('meta[name="theme-color"]');
        meta.setAttribute('content', '#57039c');
      } else if (!dark && darkModeStylesheet.parentNode) {
        darkModeStylesheet.parentNode.removeChild(darkModeStylesheet);
        const meta = document.head.querySelector('meta[name="theme-color"]');
        meta.setAttribute('content', '#D414FF');
      }
    }
    handleQueryChange() {
      this.setState({
        dark: darkMediaQuery.matches
      });
    }
    handleClickTheme() {
      this.setState(state => ({
        dark: !state.dark
      }));
    }
    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
        onClickTheme: this.handleClickTheme,
        isDark: this.state.dark
      }, this.props));
    }
  }
  return ThemeComponent;
};


/***/ }),

/***/ "./src/playground/fullscreen.jsx":
/*!***************************************!*\
  !*** ./src/playground/fullscreen.jsx ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import-first */ "./src/playground/import-first.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _render_interface_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render-interface.jsx */ "./src/playground/render-interface.jsx");
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-target */ "./src/playground/app-target.js");
/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */







Object(react_modal__WEBPACK_IMPORTED_MODULE_3__["setAppElement"])(_app_target__WEBPACK_IMPORTED_MODULE_5__["default"]);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_render_interface_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
  isPlayerOnly: true,
  isFullScreen: true
}), _app_target__WEBPACK_IMPORTED_MODULE_5__["default"]);

/***/ }),

/***/ "./src/playground/interface.css":
/*!**************************************!*\
  !*** ./src/playground/interface.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/postcss-loader/src??postcss!./interface.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/interface.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/load-service-worker.js":
/*!***********************************************!*\
  !*** ./src/playground/load-service-worker.js ***!
  \***********************************************/
/*! exports provided: loadServiceWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadServiceWorker", function() { return loadServiceWorker; });
/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/log */ "./src/lib/log.js");
/* harmony import */ var _file_loader_name_sw_js_service_worker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !file-loader?name=sw.js!./service-worker.js */ "./node_modules/file-loader/dist/cjs.js?name=sw.js!./src/playground/service-worker.js");
/* harmony import */ var _file_loader_name_sw_js_service_worker_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_sw_js_service_worker_js__WEBPACK_IMPORTED_MODULE_1__);


let loaded = false;
const actuallyLoadServiceWorker = () => {
  navigator.serviceWorker.register(_file_loader_name_sw_js_service_worker_js__WEBPACK_IMPORTED_MODULE_1___default.a).catch(err => {
    _lib_log__WEBPACK_IMPORTED_MODULE_0__["default"].error('sw error', err);
  });
};
const loadServiceWorker = () => {
  if (false) {}
};


/***/ }),

/***/ "./src/playground/render-interface.jsx":
/*!*********************************************!*\
  !*** ./src/playground/render-interface.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _reducers_project_state_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/project-state.js */ "./src/reducers/project-state.js");
/* harmony import */ var _containers_dom_element_renderer_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/dom-element-renderer.jsx */ "./src/containers/dom-element-renderer.jsx");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _lib_error_boundary_hoc_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/error-boundary-hoc.jsx */ "./src/lib/error-boundary-hoc.jsx");
/* harmony import */ var _lib_tw_project_meta_fetcher_hoc_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/tw-project-meta-fetcher-hoc.jsx */ "./src/lib/tw-project-meta-fetcher-hoc.jsx");
/* harmony import */ var _lib_tw_state_manager_hoc_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/tw-state-manager-hoc.jsx */ "./src/lib/tw-state-manager-hoc.jsx");
/* harmony import */ var _lib_tw_theme_hoc_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/tw-theme-hoc.jsx */ "./src/lib/tw-theme-hoc.jsx");
/* harmony import */ var _lib_sb_file_uploader_hoc_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/sb-file-uploader-hoc.jsx */ "./src/lib/sb-file-uploader-hoc.jsx");
/* harmony import */ var _lib_tw_packager_integration_hoc_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/tw-packager-integration-hoc.jsx */ "./src/lib/tw-packager-integration-hoc.jsx");
/* harmony import */ var _lib_tw_restore_point_hoc_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/tw-restore-point-hoc.jsx */ "./src/lib/tw-restore-point-hoc.jsx");
/* harmony import */ var _addons_settings_store_singleton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../addons/settings-store-singleton */ "./src/addons/settings-store-singleton.js");
/* harmony import */ var _lib_tw_fix_history_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/tw-fix-history-api */ "./src/lib/tw-fix-history-api.js");
/* harmony import */ var _render_gui_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./render-gui.jsx */ "./src/playground/render-gui.jsx");
/* harmony import */ var _vote_frame_jsx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vote-frame.jsx */ "./src/playground/vote-frame.jsx");
/* harmony import */ var _components_menu_bar_menu_bar_jsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/menu-bar/menu-bar.jsx */ "./src/components/menu-bar/menu-bar.jsx");
/* harmony import */ var _components_tw_project_input_project_input_jsx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/tw-project-input/project-input.jsx */ "./src/components/tw-project-input/project-input.jsx");
/* harmony import */ var _components_tw_featured_projects_featured_projects_jsx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/tw-featured-projects/featured-projects.jsx */ "./src/components/tw-featured-projects/featured-projects.jsx");
/* harmony import */ var _components_sn_likebtn_LikeButton_jsx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/sn-likebtn/LikeButton.jsx */ "./src/components/sn-likebtn/LikeButton.jsx");
/* harmony import */ var _components_tw_description_description_jsx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/tw-description/description.jsx */ "./src/components/tw-description/description.jsx");
/* harmony import */ var _containers_webgl_modal_jsx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../containers/webgl-modal.jsx */ "./src/containers/webgl-modal.jsx");
/* harmony import */ var _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/browser-modal/browser-modal.jsx */ "./src/components/browser-modal/browser-modal.jsx");
/* harmony import */ var _components_tw_cloud_variable_badge_cloud_variable_badge_jsx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/tw-cloud-variable-badge/cloud-variable-badge.jsx */ "./src/components/tw-cloud-variable-badge/cloud-variable-badge.jsx");
/* harmony import */ var _lib_tw_environment_support_prober__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../lib/tw-environment-support-prober */ "./src/lib/tw-environment-support-prober.js");
/* harmony import */ var _addons_channels__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../addons/channels */ "./src/addons/channels.js");
/* harmony import */ var _load_service_worker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./load-service-worker */ "./src/playground/load-service-worker.js");
/* harmony import */ var _addons_entry__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../addons/entry */ "./src/addons/entry.js");
/* harmony import */ var _interface_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./interface.css */ "./src/playground/interface.css");
/* harmony import */ var _interface_css__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_interface_css__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _restore_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./restore.js */ "./src/playground/restore.js");
const _excluded = ["intl", "hasCloudVariables", "description", "isFullScreen", "isLoading", "isPlayerOnly", "isRtl", "onClickTheme", "projectId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */



































const urlparams = new URLSearchParams(location.search);
const restoring = urlparams.get("restore");
const restoreHandler = urlparams.get("handler");
if (String(restoring) === "true") {
  console.log(_restore_js__WEBPACK_IMPORTED_MODULE_33__["default"]);
  Object(_restore_js__WEBPACK_IMPORTED_MODULE_33__["default"])(restoreHandler);
}
let announcement = null;
if (false) {}
const handleClickAddonSettings = () => {
  const path =  false ? undefined : 'addons.html';
  window.open("".concat("").concat(path));
};
const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["defineMessages"])({
  defaultTitle: {
    "id": "tw.guiDefaultTitle",
    "defaultMessage": "A mod of PenguinMod"
  }
});
const WrappedMenuBar = Object(redux__WEBPACK_IMPORTED_MODULE_4__["compose"])(_lib_sb_file_uploader_hoc_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], _lib_tw_packager_integration_hoc_jsx__WEBPACK_IMPORTED_MODULE_14__["default"])(_components_menu_bar_menu_bar_jsx__WEBPACK_IMPORTED_MODULE_20__["default"]);
if (_addons_channels__WEBPACK_IMPORTED_MODULE_29__["default"].reloadChannel) {
  _addons_channels__WEBPACK_IMPORTED_MODULE_29__["default"].reloadChannel.addEventListener('message', () => {
    location.reload();
  });
}
if (_addons_channels__WEBPACK_IMPORTED_MODULE_29__["default"].changeChannel) {
  _addons_channels__WEBPACK_IMPORTED_MODULE_29__["default"].changeChannel.addEventListener('message', e => {
    _addons_settings_store_singleton__WEBPACK_IMPORTED_MODULE_16__["default"].setStoreWithVersionCheck(e.data);
  });
}
Object(_addons_entry__WEBPACK_IMPORTED_MODULE_31__["default"])();
const projectDetailCache = {};
const getProjectDetailsById = async id => {
  // if we have already gotten the details of this project, avoid making another request since they likely never changed
  if (projectDetailCache[String(id)] != null) return projectDetailCache[String(id)];
  const response = await fetch("https://snailshare.xyz/api/pmWrapper/getProject?id=".concat(id));
  // Don't continue if the api never returned 200-299 since we would cache an error as project details
  if (!response.ok) return {};
  const project = await response.json();
  projectDetailCache[String(id)] = project;
  return projectDetailCache[String(id)];
};
const Footer = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("footer", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.footer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.footerContent
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.footerText
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"]
// eslint-disable-next-line max-len
, {
  defaultMessage: "PenguinMod, Snail IDE, and TurboWarp are not affiliated with Scratch, the Scratch Team, or the Scratch Foundation.",
  id: "tw.footer.disclaimer"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.footerColumns
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.footerSection
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "credits.html"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Credits",
  id: "tw.footer.credits"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://github.com/sponsors/GarboMuffin"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Donate to TurboWarp Developer",
  id: "tw.footer.donate"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://penguinmod.site/donate"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Donate to PenguinMod Developer",
  id: "tw.footer.penguinmod-donate"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.footerSection
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://studio.penguinmod.site/PenguinMod-Packager"
}, 'PenguinMod Packager'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://desktop.turbowarp.org/"
}, 'TurboWarp Desktop'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://docs.turbowarp.org/docs/embedding"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Embedding",
  id: "tw.footer.embed"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://docs.turbowarp.org/docs/url-parameters"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "URL Parameters",
  id: "tw.footer.parameters"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://docs.snail-ide.com/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Documentation",
  id: "tw.footer.documentation"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
  className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.footerSection
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://scratch.mit.edu/users/Mr_rudy/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Feedback & Bugs",
  id: "tw.feedback"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://github.com/Snail-IDE/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Source Code",
  id: "tw.code"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "privacy.html"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Privacy Policy",
  id: "tw.privacy"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://snail-ide.js.org/examples/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Example Projects",
  id: "tw.examples"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://snail-ide.js.org/editor.html?livetests"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Live Tests",
  id: "tw.livetests"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://scratch.mit.edu/studios/33532977/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Scratch Studio",
  id: "tw.snail-studio"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://scratch.mit.edu/discuss/topic/689165/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Scratch Forum Topic",
  id: "si.scratch-forum-topic"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://www.snail-ide.com/forum"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Unoffical Forum",
  id: "si.unofficial-forum"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
  href: "https://snail-ide.com"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
  defaultMessage: "Homepage",
  id: "tw.beta"
}))))));
class Interface extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.handleUpdateProjectTitle = this.handleUpdateProjectTitle.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isLoading && !this.props.isLoading) {
      Object(_load_service_worker__WEBPACK_IMPORTED_MODULE_30__["loadServiceWorker"])();
    }
  }
  handleUpdateProjectTitle(title, isDefault) {
    if (isDefault || !title) {
      document.title = "TL4K IDE - ".concat(this.props.intl.formatMessage(messages.defaultTitle));
    } else {
      document.title = "".concat(title, " - TL4K IDE");
    }
  }
  render() {
    var _projectDetailCache$S, _projectDetailCache$S2, _projectDetailCache$S3, _projectDetailCache$S4, _projectDetailCache$S5, _projectDetailCache$S6, _projectDetailCache$S7, _projectDetailCache$S8;
    const _this$props = this.props,
      {
        /* eslint-disable no-unused-vars */
        intl,
        hasCloudVariables,
        description,
        isFullScreen,
        isLoading,
        isPlayerOnly,
        isRtl,
        onClickTheme,
        projectId
        /* eslint-enable no-unused-vars */
      } = _this$props,
      props = _objectWithoutProperties(_this$props, _excluded);
    const isHomepage = isPlayerOnly && !isFullScreen;
    const isEditor = !isPlayerOnly;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.container, {
        [_interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.playerOnly]: isHomepage,
        [_interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.editor]: isEditor
      })
    }, isHomepage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.menu
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedMenuBar, {
      canChangeLanguage: true,
      canManageFiles: true,
      enableSeeInside: true,
      onClickAddonSettings: handleClickAddonSettings,
      onClickTheme: onClickTheme
    })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.center,
      style: isPlayerOnly ? {
        // add a couple pixels to account for border (TODO: remove weird hack)
        width: "".concat(Math.max(480, props.customStageSize.width) + 2, "px")
      } : null
    }, isHomepage && announcement ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_dom_element_renderer_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
      domElement: announcement
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_render_gui_jsx__WEBPACK_IMPORTED_MODULE_18__["default"], _extends({
      onClickAddonSettings: handleClickAddonSettings,
      onClickTheme: onClickTheme,
      onUpdateProjectTitle: this.handleUpdateProjectTitle,
      backpackVisible: true,
      backpackHost: "_local_"
    }, props)), isHomepage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, projectId && projectId !== '0' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.remixWarningBox
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.")) : null, window.LastFetchedProject != null && window.LastFetchedProject.accepted == false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.remixWarningBox
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "This project is not approved. Be careful when running this project.")) : null, window.LastFetchedProject != null && window.LastFetchedProject.tooLarge == true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.remixWarningBox
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "This project is too large to be remixed. If you would like to remix this project, please contact someone who can manually upload it for you.")) : null, window.LastFetchedProject != null && window.LastFetchedProject.remix != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.unsharedUpdate
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "row"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      style: {
        height: "32px"
      },
      target: "_blank",
      href: "https://snail-ide.com/profile?user=" + ((_projectDetailCache$S = projectDetailCache[String(window.LastFetchedProject.remix)]) === null || _projectDetailCache$S === void 0 ? void 0 : _projectDetailCache$S.owner)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      style: {
        marginRight: "4px",
        borderRadius: "4px"
      },
      width: "32",
      height: "32",
      title: (_projectDetailCache$S2 = projectDetailCache[String(window.LastFetchedProject.remix)]) === null || _projectDetailCache$S2 === void 0 ? void 0 : _projectDetailCache$S2.owner,
      alt: (_projectDetailCache$S3 = projectDetailCache[String(window.LastFetchedProject.remix)]) === null || _projectDetailCache$S3 === void 0 ? void 0 : _projectDetailCache$S3.owner,
      src: "https://snailshare.xyz/api/pmWrapper/scratchUserImage?username=" + ((_projectDetailCache$S4 = projectDetailCache[String(window.LastFetchedProject.remix)]) === null || _projectDetailCache$S4 === void 0 ? void 0 : _projectDetailCache$S4.owner)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Thanks to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      target: "_blank",
      href: "https://snail-ide.com/profile?user=" + ((_projectDetailCache$S5 = projectDetailCache[String(window.LastFetchedProject.remix)]) === null || _projectDetailCache$S5 === void 0 ? void 0 : _projectDetailCache$S5.owner)
    }, (_projectDetailCache$S6 = projectDetailCache[String(window.LastFetchedProject.remix)]) === null || _projectDetailCache$S6 === void 0 ? void 0 : _projectDetailCache$S6.owner)), " for the original project ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: window.location.origin + "/#" + ((_projectDetailCache$S7 = projectDetailCache[String(window.LastFetchedProject.remix)]) === null || _projectDetailCache$S7 === void 0 ? void 0 : _projectDetailCache$S7.id)
    }, (_projectDetailCache$S8 = projectDetailCache[String(window.LastFetchedProject.remix)]) === null || _projectDetailCache$S8 === void 0 ? void 0 : _projectDetailCache$S8.name)), ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        display: 'none'
      }
    }, getProjectDetailsById(window.LastFetchedProject.remix).yesIDefinetlyKnowHowToUseReactProperlyShutUp)) : null, Object(_lib_tw_environment_support_prober__WEBPACK_IMPORTED_MODULE_28__["isRendererSupported"])() ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_webgl_modal_jsx__WEBPACK_IMPORTED_MODULE_25__["default"], {
      isRtl: isRtl
    }), Object(_lib_tw_environment_support_prober__WEBPACK_IMPORTED_MODULE_28__["isBrowserSupported"])() ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_26__["default"], {
      isRtl: isRtl
    }), hasCloudVariables && projectId !== '0' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_tw_cloud_variable_badge_cloud_variable_badge_jsx__WEBPACK_IMPORTED_MODULE_27__["default"], null)), description.instructions || description.credits ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_tw_description_description_jsx__WEBPACK_IMPORTED_MODULE_24__["default"], {
      instructions: description.instructions,
      credits: description.credits,
      projectId: projectId
    })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_vote_frame_jsx__WEBPACK_IMPORTED_MODULE_19__["default"], {
      id: projectId,
      darkmode: this.props.isDark
    }), isHomepage && window.FetchedProjectRemixes ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        display: "none"
      }
    }, window.ForceProjectRemixListUpdate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Remixes of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, window.LastFetchedProject.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.remixList
    }, window.FetchedProjectRemixes.map(remix => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        key: remix.id,
        href: "#" + remix.id,
        style: {
          textDecoration: "none",
          width: "115%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.remixProject
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        style: {
          height: "72px"
        },
        src: remix.image,
        alt: remix.name
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          width: "100%",
          display: "flex",
          textAlign: "left",
          textDecoration: "none",
          flexDirection: "column",
          alignItems: "flex-start"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        style: {
          fontSize: "1em"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, remix.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        style: {
          fontSize: "1em"
        }
      }, "by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, remix.owner)))));
    }))) : null, window.LastFetchedProject != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      target: "_blank",
      href: "https://snail-ide.com/profile?user=" + window.LastFetchedProject.owner
    }, "View other projects by ", window.LastFetchedProject.owner) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"]
    // eslint-disable-next-line max-len
    , {
      defaultMessage: "Snail IDE is a mod of Penguinmod to add new blocks and features either in extensions or in Snail IDE's main toolbox. PenguinMod is a Scratch mod that compiles projects to JavaScript to make them run really fast. Try it out by choosing an uploaded project below or making your own in the editor.",
      id: "tw.home.description"
    }))), projectId && projectId !== '0' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.centerSector
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      target: "_blank",
      rel: "noreferrer",
      href: "https://snail-ide.com/report?type=project&id=".concat(projectId),
      className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.reportLink
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: "https://studio.penguinmod.com/report_flag.png",
      alt: "!"
    }), 'Report')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.centerSector
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_32___default.a.section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_tw_featured_projects_featured_projects_jsx__WEBPACK_IMPORTED_MODULE_22__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      target: "_blank",
      href: "https://snail-ide.com/search?q=all:projects"
    }, "View projects in new tab")) : null), isHomepage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Footer, null));
  }
}
Interface.propTypes = {
  intl: react_intl__WEBPACK_IMPORTED_MODULE_5__["intlShape"],
  hasCloudVariables: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  customStageSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }),
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    credits: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    instructions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  isFullScreen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isPlayerOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isRtl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClickTheme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  projectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
const mapStateToProps = state => ({
  hasCloudVariables: state.scratchGui.tw.hasCloudVariables,
  customStageSize: state.scratchGui.customStageSize,
  description: state.scratchGui.tw.description,
  isFullScreen: state.scratchGui.mode.isFullScreen,
  isLoading: Object(_reducers_project_state_js__WEBPACK_IMPORTED_MODULE_6__["getIsLoading"])(state.scratchGui.projectState.loadingState),
  isPlayerOnly: state.scratchGui.mode.isPlayerOnly,
  isRtl: state.locales.isRtl,
  projectId: state.scratchGui.projectState.projectId
});
const mapDispatchToProps = () => ({});
const ConnectedInterface = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Interface));
const WrappedInterface = Object(redux__WEBPACK_IMPORTED_MODULE_4__["compose"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_lib_error_boundary_hoc_jsx__WEBPACK_IMPORTED_MODULE_9__["default"])('TW Interface'), _lib_tw_project_meta_fetcher_hoc_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], _lib_tw_state_manager_hoc_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], _lib_tw_theme_hoc_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], _lib_tw_restore_point_hoc_jsx__WEBPACK_IMPORTED_MODULE_15__["default"], _lib_tw_packager_integration_hoc_jsx__WEBPACK_IMPORTED_MODULE_14__["default"])(ConnectedInterface);
/* harmony default export */ __webpack_exports__["default"] = (WrappedInterface);

/***/ }),

/***/ "./src/playground/restore.js":
/*!***********************************!*\
  !*** ./src/playground/restore.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// wrapper to handle errors & be easier
function post(data, reciever, importLocation) {
  try {
    reciever.postMessage({
      p4: data
    }, importLocation);
  } catch (e) {
    console.warn("Cannot post message", e);
  }
}

/**
 * 
 * @param {string} importLocation Tries to listen for messages from this location.
 * Messages with the proper format get saved to local storage.
 * @returns {void}
 */
function restore(importLocation) {
  const opener = window.opener || window.parent;
  if (!opener || opener === window) {
    // exit if not found
    console.warn("External import stopped; parent window not found");
    return;
  }
  // when WE get a post
  window.addEventListener("message", e => {
    if (e.origin !== importLocation) {
      return;
    }
    const data = e.data && e.data.p4;
    if (!data) {
      return;
    }

    // data: key, value
    if (data.type === "data") {
      localStorage.setItem(String(data.key), String(data.value));
    }

    // we done here
    if (data.type === "finished") {
      alert('All local data has been saved again!');
    }
  });
  post({
    type: "validate"
  }, opener, importLocation);
}
/* harmony default export */ __webpack_exports__["default"] = (restore);

/***/ }),

/***/ "./src/playground/vote-frame.css":
/*!***************************************!*\
  !*** ./src/playground/vote-frame.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/postcss-loader/src??postcss!./vote-frame.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/vote-frame.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/vote-frame.jsx":
/*!***************************************!*\
  !*** ./src/playground/vote-frame.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vote_frame_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vote-frame.css */ "./src/playground/vote-frame.css");
/* harmony import */ var _vote_frame_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vote_frame_css__WEBPACK_IMPORTED_MODULE_1__);


const VoteFrame = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
  className: _vote_frame_css__WEBPACK_IMPORTED_MODULE_1___default.a.frame,
  style: props.id != '0' ? {} : {
    display: 'none'
  },
  src: "https://snail-ide.vercel.app/embed/vote?id=".concat(props.id, "#dark=").concat(props.darkmode)
});
/* harmony default export */ __webpack_exports__["default"] = (VoteFrame);

/***/ })

/******/ });
//# sourceMappingURL=fullscreen.js.map