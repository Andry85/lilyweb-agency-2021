module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "1ccW":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("GVkX");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "5D8r":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"socialMedia": "SocialMedia_socialMedia__ELdNp"
};


/***/ }),

/***/ "5M6V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Layout; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/layout.module.scss
var layout_module = __webpack_require__("Ruk8");
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__("aYjl");
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./components/HeaderLogo/HeaderLogo.module.scss
var HeaderLogo_module = __webpack_require__("kGkn");
var HeaderLogo_module_default = /*#__PURE__*/__webpack_require__.n(HeaderLogo_module);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/HeaderLogo/HeaderLogo.tsx






function HeaderLogo({
  name,
  ishome
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `${HeaderLogo_module_default.a.logo} ${ishome ? `${HeaderLogo_module_default.a.logoHome}` : ""}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
      src: "/images/lily.svg",
      alt: "",
      width: 44,
      height: 44
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: "/",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: name
      })
    })]
  });
}

/* harmony default export */ var HeaderLogo_HeaderLogo = (HeaderLogo);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/actions/actions.ts
var actions = __webpack_require__("KJcM");

// EXTERNAL MODULE: ./components/HeaderBurger/HeaderBurger.module.scss
var HeaderBurger_module = __webpack_require__("CJkq");
var HeaderBurger_module_default = /*#__PURE__*/__webpack_require__.n(HeaderBurger_module);

// CONCATENATED MODULE: ./components/HeaderBurger/HeaderBurger.tsx







function HeaderBurger({
  ishome
}) {
  const menuStatus = Object(external_react_redux_["useSelector"])(state => state.mainMenuReducer.ismenuOpened);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: `${HeaderBurger_module_default.a.burger} ${ishome ? `${HeaderBurger_module_default.a.ishome}` : ""}`,
    onClick: () => dispatch(Object(actions["b" /* changeMenuVisibility */])()),
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${menuStatus ? `${HeaderBurger_module_default.a.burger__isOpened}` : ""}`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
    })
  });
}

/* harmony default export */ var HeaderBurger_HeaderBurger = (HeaderBurger);
// EXTERNAL MODULE: ./components/MainMenu/MainMenu.module.scss
var MainMenu_module = __webpack_require__("a0NF");
var MainMenu_module_default = /*#__PURE__*/__webpack_require__.n(MainMenu_module);

// CONCATENATED MODULE: ./components/MainMenu/MainMenu.tsx






function MainMenu({
  ishome,
  pagesList
}) {
  const menuStatus = Object(external_react_redux_["useSelector"])(state => state.mainMenuReducer.ismenuOpened);

  if (menuStatus) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
      className: `${MainMenu_module_default.a.mainMenu} ${ishome ? `${MainMenu_module_default.a.mainMenuHome}` : ""}`,
      children: pagesList.map(item => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: item.path,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            children: item.name
          })
        })
      }, item.id))
    });
  } else {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {});
  }
}

/* harmony default export */ var MainMenu_MainMenu = (MainMenu);
// EXTERNAL MODULE: ./components/Button/Button.tsx
var Button = __webpack_require__("89Ff");

// EXTERNAL MODULE: ./components/SocialMedia/SocialMedia.module.scss
var SocialMedia_module = __webpack_require__("5D8r");
var SocialMedia_module_default = /*#__PURE__*/__webpack_require__.n(SocialMedia_module);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// CONCATENATED MODULE: ./components/SocialMedia/SocialMedia.tsx







function SocialMedia() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
    className: SocialMedia_module_default.a.socialMedia,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            icon: free_brands_svg_icons_["faFacebookF"]
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            icon: free_brands_svg_icons_["faLinkedinIn"]
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            icon: free_brands_svg_icons_["faInstagram"]
          })
        })
      })
    })]
  });
}

/* harmony default export */ var SocialMedia_SocialMedia = (SocialMedia);
// EXTERNAL MODULE: ./components/Social/Social.module.scss
var Social_module = __webpack_require__("Shpp");
var Social_module_default = /*#__PURE__*/__webpack_require__.n(Social_module);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__("sLJp");

// CONCATENATED MODULE: ./components/Social/Social.tsx






fontawesome_svg_core_["library"].add(free_brands_svg_icons_["fab"]);

function Social({
  dataItems
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
    className: Social_module_default.a.social,
    children: dataItems.map(element => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: element.url,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            icon: ["fab", `${element.icon}`]
          })
        })
      })
    }, element.id))
  });
}

/* harmony default export */ var Social_Social = (Social);
// EXTERNAL MODULE: ./components/Search/Search.module.scss
var Search_module = __webpack_require__("YeKD");
var Search_module_default = /*#__PURE__*/__webpack_require__.n(Search_module);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// CONCATENATED MODULE: ./components/Search/Search.tsx








function Search() {
  const initialValues = {
    searchText: ''
  };
  const {
    0: isActiveHolder,
    1: setisActiveHolder
  } = Object(external_react_["useState"])(false);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Search_module_default.a.searchWrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Search_module_default.a.searchWrapper__icon,
      onClick: () => setisActiveHolder(!isActiveHolder),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faSearch"]
      })
    }), isActiveHolder && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Search_module_default.a.searchWrapper__holder,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Search_module_default.a.searchWrapper__form,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Formik"], {
          initialValues: initialValues,
          onSubmit: (values, actions) => {
            console.log({
              values,
              actions
            });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            setisActiveHolder(!isActiveHolder);
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_formik_["Form"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
              name: "searchText",
              placeholder: "Enter a world"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              type: "submit",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                icon: free_solid_svg_icons_["faSearch"]
              })
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Search_module_default.a.searchWrapper__close,
        onClick: () => setisActiveHolder(!isActiveHolder),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          icon: free_solid_svg_icons_["faTimes"]
        })
      })]
    })]
  });
}

/* harmony default export */ var Search_Search = (Search);
// CONCATENATED MODULE: ./components/layout.tsx















const fetcher = url => external_axios_default.a.get(url).then(res => res.data);

function Layout({
  children,
  home
}) {
  const {
    data,
    error
  } = external_swr_default()('/api/data', fetcher);
  if (error) return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: "failed to load"
  });
  if (!data) return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: "loading..."
  });
  let logo = data.header.logo;
  let title = data.header.title;
  let social = data.indexPage.social;
  let copyrightText = data.copyrightText;
  let paesList = data.pages;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: layout_module_default.a.wrapper,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: ""
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "og:title"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
        src: "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
        async: true,
        src: "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-4fa50fc57dde6683"
      })]
    }), home ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
        className: [layout_module_default.a.header, layout_module_default.a.headerHome].join(' '),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: layout_module_default.a.container,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: layout_module_default.a.header__top,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderLogo_HeaderLogo, {
              name: logo,
              ishome: true
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MainMenu_MainMenu, {
              ishome: true,
              pagesList: paesList
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderBurger_HeaderBurger, {
              ishome: true
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: layout_module_default.a.header__middle,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
              className: layout_module_default.a.header__titleHome,
              children: title
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              href: "/contact",
              title: "Contact now",
              color: "#2341dd",
              background: "transparent",
              border: "2px solid #2341dd",
              borderRadius: "30px",
              textTransform: "uppercase",
              colorHover: "#fff",
              backgroundHover: "#2341dd",
              paddings: "10px 20px",
              margings: "0 auto",
              mobilePaddings: "5px",
              mobileMargings: "0 auto"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: layout_module_default.a.animationIconOne
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: layout_module_default.a.animationIconTwo
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: layout_module_default.a.animationIconThree
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: layout_module_default.a.animationIconFour
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: layout_module_default.a.animationIconFive
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: layout_module_default.a.animationIconSix
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: layout_module_default.a.animationIconSeven
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: layout_module_default.a.animationIconEight
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: layout_module_default.a.animationIconNine
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: layout_module_default.a.animationIconTen
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: layout_module_default.a.animationIconEleven
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: layout_module_default.a.animationIconTwelve
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: layout_module_default.a.animationIconThirteen
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: layout_module_default.a.animationIconFourteen
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SocialMedia_SocialMedia, {})]
      })
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
        className: [layout_module_default.a.header, layout_module_default.a.headerInnerPage].join(' '),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: layout_module_default.a.container,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: layout_module_default.a.header__top,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderLogo_HeaderLogo, {
              name: logo
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MainMenu_MainMenu, {
              pagesList: paesList
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
              href: "/",
              title: "get a quote",
              color: "#b988f8",
              background: "transparent",
              border: "2px solid #b988f8",
              borderRadius: "0px",
              textTransform: "uppercase",
              colorHover: "#fff",
              backgroundHover: "#4923b7",
              paddings: "5px 10px",
              margings: "0 0 0 auto",
              mobilePaddings: "5px",
              mobileMargings: "0 auto",
              width: "160px",
              fontSizeMobile: "1.2rem"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: layout_module_default.a.header__search,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Search_Search, {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderBurger_HeaderBurger, {})]
          })
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
      className: layout_module_default.a.main,
      children: children
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
      className: `${layout_module_default.a.footerIndex} ${home ? "" : `${layout_module_default.a.footerIndexInnarPages}`}`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: layout_module_default.a.footerIndex__inner,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderLogo_HeaderLogo, {
          name: logo,
          ishome: true
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Social_Social, {
          dataItems: social
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: layout_module_default.a.footerIndex__copy,
          children: copyrightText
        })]
      })
    })]
  });
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "73Hj":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"btn": "Button_btn__3A27M"
};


/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "89Ff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("73Hj");
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




const BtnLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a`
    cursor: pointer;
    background: transparent;
    color: #2341dd;
    border: 2px solid #2341dd;
    border-radius: 30px;
    text-transform: uppercase;
    padding: 10px 20px;
    margin: 0 auto;
    width: 200px;
    &:hover {
      background: #2341dd;
      color: #fff;
    }

  }

  @media (max-width: 767px) {
    padding: 5px;
    margin: 0 auto;
  }

  ${props => styled_components__WEBPACK_IMPORTED_MODULE_3__["css"]`
      background: ${props.background};
      color: ${props.color};
      border: ${props.border};
      border-radius: ${props.borderRadius};
      text-transform: ${props.textTransform};
      padding: ${props.paddings};
      margin: ${props.margings};
      width: ${props.width};
      font-size: ${props.fontSize};
      font-weight: ${props.fontWeight};
      &:hover {
        background: ${props.backgroundHover};
        color: ${props.colorHover};
      }

      @media (max-width: 767px) {
        padding: ${props.mobilePaddings};
        margin: ${props.mobileMargings};
        font-size: ${props.fontSizeMobile};
        width: ${props.widthMobile};
      }

    `};

`;

function Button({
  href,
  title,
  color,
  background,
  border,
  borderRadius,
  textTransform,
  colorHover,
  backgroundHover,
  paddings,
  margings,
  mobilePaddings,
  mobileMargings,
  width,
  fontSize,
  fontSizeMobile,
  fontWeight,
  widthMobile
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    passHref: true,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(BtnLink, {
      className: _Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btn,
      color: color,
      background: background,
      border: border,
      borderRadius: borderRadius,
      textTransform: textTransform,
      colorHover: colorHover,
      backgroundHover: backgroundHover,
      paddings: paddings,
      margings: margings,
      mobilePaddings: mobilePaddings,
      mobileMargings: mobileMargings,
      width: width,
      fontSize: fontSize,
      fontWeight: fontWeight,
      fontSizeMobile: fontSizeMobile,
      widthMobile: widthMobile,
      children: title
    })
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "98FW":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "CJkq":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"burger": "HeaderBurger_burger__3TMeT",
	"burger__isOpened": "HeaderBurger_burger__isOpened__3zj7M",
	"ishome": "HeaderBurger_ishome__1HtkO"
};


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GVkX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Work; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./styles/Blog.module.scss
var Blog_module = __webpack_require__("tKtg");
var Blog_module_default = /*#__PURE__*/__webpack_require__.n(Blog_module);

// EXTERNAL MODULE: ./components/layout.tsx + 6 modules
var layout = __webpack_require__("5M6V");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: ./components/BlogSlider/BlogSlider.module.scss
var BlogSlider_module = __webpack_require__("nKT3");
var BlogSlider_module_default = /*#__PURE__*/__webpack_require__.n(BlogSlider_module);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// CONCATENATED MODULE: ./components/BlogSlider/BlogSlider.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function NextArrow(props) {
  const {
    onClick
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: BlogSlider_module_default.a.blogSlider__nextArrow,
    onClick: onClick
  });
}

function PrevArrow(props) {
  const {
    onClick
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: BlogSlider_module_default.a.blogSlider__prevArrow,
    onClick: onClick
  });
}

class BlogSlider_BlogSlider extends external_react_["Component"] {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: /*#__PURE__*/Object(jsx_runtime_["jsx"])(NextArrow, {}),
      prevArrow: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PrevArrow, {})
    };
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: BlogSlider_module_default.a.blogSlider,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_slick_default.a, _objectSpread(_objectSpread({}, settings), {}, {
        children: this.props.dataSlider.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: BlogSlider_module_default.a.blogSlider__item,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
            src: item,
            alt: "",
            width: 1067,
            height: 700,
            layout: "responsive"
          })
        }, index))
      }))
    });
  }

}
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: ./pages/api/dataSource.json
var dataSource = __webpack_require__("KDyy");

// CONCATENATED MODULE: ./pages/blog/[id].js








 // This function gets called at build time

async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // Get the paths we want to pre-render based on posts
  const resultList = dataSource.blogPage.blogList;
  const innerLink = resultList.map(function (element) {
    return element.id.toString();
  });
  const paths = innerLink.map(function (element) {
    return {
      params: {
        id: element
      }
    };
  }); // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.

  return {
    paths,
    fallback: false
  };
} // This also gets called at build time

async function getStaticProps({
  params
}) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const resultList = dataSource.blogPage.blogList;
  const resultBlog = resultList.find(function (element) {
    return element.id == params.id;
  }); // Pass post data to the page via props

  return {
    props: {
      resultBlog
    }
  };
}
function Work({
  resultBlog
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(layout["a" /* default */], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Post"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "headerBottom",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "container__inner",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          className: "headerBottom__title",
          children: dataSource.blogPage.header.title
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: "headerBottom__subtitle",
          children: dataSource.blogPage.header.subtitle
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Blog_module_default.a.blogDeatilPage,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogSlider_BlogSlider, {
        dataSlider: resultBlog.details.gallery
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        className: Blog_module_default.a.blogDeatilPage__title,
        children: resultBlog.details.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Blog_module_default.a.blogDeatilPage__text,
        children: resultBlog.details.text
      }), resultBlog.details.cite && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("blockquote", {
        className: Blog_module_default.a.blogDeatilPage__cite,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          className: Blog_module_default.a.blogDeatilPage__citeText,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: Blog_module_default.a.blogDeatilPage__citeIcon,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
              icon: free_solid_svg_icons_["faQuoteLeft"]
            })
          }), resultBlog.details.cite.text]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: Blog_module_default.a.blogDeatilPage__citeAuth,
          children: resultBlog.details.cite.auth
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Blog_module_default.a.blogDeatilPage__postText,
        children: resultBlog.details.postText
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Blog_module_default.a.blogDeatilPage__info,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Blog_module_default.a.blogDeatilPage__auth,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: resultBlog.author.name
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: "|"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: resultBlog.date
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "addthis_sharing_toolbox"
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "KDyy":
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":{\"logo\":\"Lily web agency\",\"logoHome\":\"#1a1c28\",\"logoInner\":\"#fff\",\"title\":\"We Discover, Design & Build Digital Experiences  to Help Brands\"},\"pages\":[{\"id\":0,\"name\":\"Home\",\"path\":\"/\"},{\"id\":1,\"name\":\"Service\",\"path\":\"/service\"},{\"id\":2,\"name\":\"About Us\",\"path\":\"/about\"},{\"id\":3,\"name\":\"Works\",\"path\":\"/portfolio\"},{\"id\":4,\"name\":\"Blog\",\"path\":\"/blogs\"},{\"id\":5,\"name\":\"Contact\",\"path\":\"/contact\"}],\"indexPage\":{\"preambule\":{\"title\":\"We are helping to grow your business.\",\"text\":\"A digital studio specialising in User Experience & eCommerce, we combine innovation with digital craftsmanship to help brands fulfill their potential.\",\"about\":[{\"title\":\"What we do\",\"text\":\"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con- sequuntur magni dolores \"},{\"title\":\"Meet our team\",\"text\":\"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con- sequuntur magni dolores \"},{\"title\":\"Our Creation\",\"text\":\"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con- sequuntur magni dolores \"}]},\"partners\":{\"title\":\"20 YEARS EXPERIENCE\",\"subtitle\":\"Over the last 20 years, we have helped and guided organisations to achieve outstanding results\"},\"latestProject\":{\"title\":\"Latest Project\",\"text\":\"A digital studio specialising in User Experience & eCommerce, we combine innovation with digital craftsmanship to help brands\"},\"indexSlider\":[{\"id\":0,\"title\":\"The new look Classic Headphone Brand cool and creativity\",\"text\":\"A digital studio specialising in User Experience & eCommerce, we combine innovation with digital craftsmanship to help brands fulfill their potential.\",\"link\":\"https://github.com/\",\"img\":\"/images/indexslider/001.jpg\"},{\"id\":1,\"title\":\"The new look Classic Headphone Brand cool and creativity\",\"text\":\"A digital studio specialising in User Experience & eCommerce, we combine innovation with digital craftsmanship to help brands fulfill their potential.\",\"link\":\"https://github.com/\",\"img\":\"/images/indexslider/002.jpg\"},{\"id\":2,\"title\":\"The new look Classic Headphone Brand cool and creativity\",\"text\":\"A digital studio specialising in User Experience & eCommerce, we combine innovation with digital craftsmanship to help brands fulfill their potential.\",\"link\":\"https://github.com/\",\"img\":\"/images/indexslider/003.jpg\"}],\"brandingServices\":{\"title\":\"Branding services\",\"text\":\"A desire to help and empower others between community contributors in technology began to grow in 2016.\"},\"services\":[{\"id\":0,\"img\":\"/images/services/001.png\",\"title\":\"Strategy & Planning\",\"text\":\"Content Strategy, Research, Opportunity Analysis and Strategic Planning, Branding Strategy, Production Planning.\"},{\"id\":1,\"img\":\"/images/services/002.png\",\"title\":\"Interface systems\",\"text\":\"Interface design, User Flow Mapping, Wireframing and Prototyping, Visual Design, Responsive Design and UI Kits.\"},{\"id\":2,\"img\":\"/images/services/003.png\",\"title\":\"Virtual Reality\",\"text\":\"Content Strategy, Research, Opportunity Analysis and Strategic Planning, Branding Strategy, Production Planning.\"},{\"id\":3,\"img\":\"/images/services/004.png\",\"title\":\"IOS & Android\",\"text\":\"Content Strategy, Research, Opportunity Analysis and Strategic Planning, Branding Strategy, Production Planning.\"},{\"id\":4,\"img\":\"/images/services/005.png\",\"title\":\"Web & App solutions\",\"text\":\"Content Strategy, Research, Opportunity Analysis and Strategic Planning, Branding Strategy, Production Planning.\"},{\"id\":5,\"img\":\"/images/services/006.png\",\"title\":\"Branding & Identity\",\"text\":\"Content Strategy, Research, Opportunity Analysis and Strategic Planning, Branding Strategy, Production Planning.\"}],\"achievement\":{\"achievementHeader\":{\"title\":\"Our achievement\",\"text\":\"A digital studio specialising in User Experience & eCommerce, we combine innovation \"},\"cards\":[{\"id\":0,\"img\":\"/images/card/001.png\",\"title\":\"Happy Clients\",\"count\":1530},{\"id\":1,\"img\":\"/images/card/002.png\",\"title\":\"Employees\",\"count\":60},{\"id\":2,\"img\":\"/images/card/003.png\",\"title\":\"Project Complete\",\"count\":40},{\"id\":3,\"img\":\"/images/card/004.png\",\"title\":\"Love Us\",\"count\":632}],\"experience\":{\"title\":\"We are Delivering Best Services Since 1970\",\"count\":12,\"subtitle\":\"Years of experience\"}},\"video\":{\"src\":\"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4\",\"type\":\"video/mp4\",\"poster\":\"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217\"},\"team\":{\"teamHeader\":{\"title\":\"Meet our team\",\"text\":\"A desire to help and empower others between community contributors in technology began to grow in 2016.\"},\"items\":[{\"id\":0,\"img\":\"/images/social/001.jpg\",\"title\":\"David Smith\",\"position\":\"Software Engineer\",\"phone\":\"+84 846 250 592\",\"socials\":[{\"id\":0,\"icon\":\"facebook\",\"url\":\"https://www.facebook.com/\"},{\"id\":1,\"icon\":\"twitter\",\"url\":\"https://twitter.com/\"},{\"id\":2,\"icon\":\"vimeo\",\"url\":\"https://vimeo.com/\"}]},{\"id\":1,\"img\":\"/images/social/002.jpg\",\"title\":\"Eric Peterson\",\"position\":\"Software Engineer\",\"phone\":\"+84 846 250 592\",\"socials\":[{\"id\":0,\"icon\":\"facebook\",\"url\":\"https://www.facebook.com/\"},{\"id\":1,\"icon\":\"twitter\",\"url\":\"https://twitter.com/\"},{\"id\":2,\"icon\":\"vimeo\",\"url\":\"https://vimeo.com/\"}]},{\"id\":2,\"img\":\"/images/social/003.jpg\",\"title\":\"Durwin Babb\",\"position\":\"Software Engineer\",\"phone\":\"+84 846 250 592\",\"socials\":[{\"id\":0,\"icon\":\"facebook\",\"url\":\"https://www.facebook.com/\"},{\"id\":1,\"icon\":\"twitter\",\"url\":\"https://twitter.com/\"},{\"id\":2,\"icon\":\"vimeo\",\"url\":\"https://vimeo.com/\"}]},{\"id\":3,\"img\":\"/images/social/004.jpg\",\"title\":\"Marijn Otte\",\"position\":\"Software Engineer\",\"phone\":\"+84 846 250 592\",\"socials\":[{\"id\":0,\"icon\":\"facebook\",\"url\":\"https://www.facebook.com/\"},{\"id\":1,\"icon\":\"twitter\",\"url\":\"https://twitter.com/\"},{\"id\":2,\"icon\":\"vimeo\",\"url\":\"https://vimeo.com/\"}]}],\"experience\":{\"title\":\"We are Delivering Best Services Since 1970\",\"count\":12,\"subtitle\":\"Years of experience\"}},\"testimonials\":{\"text\":\"Up to date it has been a pleasure working with Themebeck After 4 problematic years we finally found Stuck template. Up to date it has been a pleasure working with Themebeck. Stuck came up with the design on their first try\",\"author\":\"Kenneth Roman, Author\"},\"latestBlog\":{\"title\":\"Latest blog\",\"text\":\"A desire to help and empower others between community contributors in technology began to grow in 2016.\"},\"contactIndexData\":{\"title\":\"We're a friendly bunch…\",\"text\":\"We create projects for companies and startups with a passion for quality\",\"subtitle\":\"Contact Us\"},\"contactsList\":[{\"id\":0,\"icon\":\"/images/contacts/location.png\",\"text\":\"ADDRESS: 28 Green Tower, Street Name New York City, USA\"},{\"id\":1,\"icon\":\"/images/contacts/phone.png\",\"text\":\"Phone:  +84 846 250 592\"},{\"id\":2,\"icon\":\"/images/contacts/email.png\",\"text\":\"Email:  contact@stuck.com\"}],\"social\":[{\"id\":0,\"icon\":\"facebook\",\"url\":\"https://www.facebook.com/\"},{\"id\":1,\"icon\":\"twitter\",\"url\":\"https://twitter.com/\"},{\"id\":2,\"icon\":\"behance\",\"url\":\"https://www.behance.net/\"},{\"id\":3,\"icon\":\"linkedin\",\"url\":\"https://www.linkedin.com/\"},{\"id\":4,\"icon\":\"twitter\",\"url\":\"https://twitter.com/\"}]},\"posts\":[{\"id\":0,\"img\":\"/images/posts/001.jpg\",\"url\":\"post_1\",\"date\":\"May 03, 2021 11:17:00\",\"title\":\"Suspendisse dictum non velit\",\"text\":\"Nunc in mauris a ante rhoncus tristique vitae et nisl. Quisque ullamcorper rutrum lacinia. Integer varius ornare egestas. \",\"author\":\"by admin\"},{\"id\":2,\"img\":\"/images/posts/002.jpg\",\"url\":\"post_2\",\"date\":\"May 04, 2021 11:17:00\",\"title\":\"Changing the topic scope\",\"text\":\"Nunc in mauris a ante rhoncus tristique vitae et nisl. Quisque ullamcorper rutrum lacinia. Integer varius ornare egestas. \",\"author\":\"by admin\"},{\"id\":3,\"img\":\"/images/posts/001.jpg\",\"url\":\"post_3\",\"date\":\"May 05, 2021 11:17:00\",\"title\":\"Changing the topic scope\",\"text\":\"Nunc in mauris a ante rhoncus tristique vitae et nisl. Quisque ullamcorper rutrum lacinia. Integer varius ornare egestas. \",\"author\":\"by admin\"},{\"id\":4,\"img\":\"/images/posts/002.jpg\",\"url\":\"post_4\",\"date\":\"May 02, 2021 11:17:00\",\"title\":\"Suspendisse dictum non velit\",\"text\":\"Nunc in mauris a ante rhoncus tristique vitae et nisl. Quisque ullamcorper rutrum lacinia. Integer varius ornare egestas. \",\"author\":\"by admin\"}],\"copyrightText\":\"Copyright 2021. Lily Web Agency\",\"aboutUsPage\":{\"header\":{\"title\":\"About us\",\"subtitle\":\"We’re proud not to be a studio that only works in one particular sector, instead we lead by our disruptive digital service offering.\"},\"offer\":{\"title\":\"We are providing best service since 1999 to present\",\"text\":\"We are trying to deliver 100% quality\"},\"work\":{\"title\":\"How we work\",\"text\":\"We bet in individual approach to each customer using frame works to achieve maximum productivity and efficiency.\"},\"offerList\":[{\"id\":0,\"icon\":\"/images/offers/icon-mission.png\",\"title\":\"Our mission\",\"text\":\"Phasellus et elit eget purus efficitur dignissim. Sed eget pretium quam, non rutrum nisi. \"},{\"id\":1,\"icon\":\"/images/offers/icon-support.png\",\"title\":\"Our vision\",\"text\":\"Phasellus et elit eget purus efficitur dignissim. Sed eget pretium quam, non rutrum nisi. \"},{\"id\":2,\"icon\":\"/images/offers/icon-vision.png\",\"title\":\"Dedicated support\",\"text\":\"Phasellus et elit eget purus efficitur dignissim. Sed eget pretium quam, non rutrum nisi. \"}],\"aboutList\":[{\"id\":0,\"title\":\"Strategy & Planning\",\"img\":\"/images/about-list/001.png\",\"list\":[\"We create a detailed work plan and design the best approach to meet the goals.\",\"We colect maximum information before kickoff the project.\",\"For a better understanding of each of our clients \"]},{\"id\":1,\"title\":\"UX Design & Prototyping\",\"img\":\"/images/about-list/002.png\",\"list\":[\"We create a detailed work plan and design the best approach to meet the goals.\",\"we colect maximum information before kickoff the project.\",\"For a better understanding of each of our clients\"]},{\"id\":2,\"title\":\"Project Delivered & Support\",\"img\":\"/images/about-list/003.png\",\"list\":[\"While using wireframes and grid system\",\"we will identify the future looks of the user interface\",\"UX design is important to let clients visualise how the project will look in the future.\",\"clients visualise how the project will look in the future.\"]},{\"id\":3,\"title\":\"Project Delivered & Support\",\"img\":\"/images/about-list/004.png\",\"list\":[\"While using wireframes and grid system\",\"we will identify the future looks of the user interface\",\"UX design is important to let clients visualise how the project will look in the future.\",\"clients visualise how the project will look in the future.\"]}],\"aboutSlider\":[{\"id\":0,\"title\":\"John Doe\",\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra justo quis ligula ullamcorper scelerisque. Quisque tempor nulla quis sapien malesuada ultricies. Nullam sapien elit, laoreet congue sapien eget, suscipit imperdiet nisi. \",\"img\":\"/images/aboutslider/001.jpg\"},{\"id\":1,\"title\":\"John Doe\",\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra justo quis ligula ullamcorper scelerisque. Quisque tempor nulla quis sapien malesuada ultricies. Nullam sapien elit, laoreet congue sapien eget, suscipit imperdiet nisi. \",\"img\":\"/images/aboutslider/002.jpg\"},{\"id\":2,\"title\":\"John Doe\",\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra justo quis ligula ullamcorper scelerisque. Quisque tempor nulla quis sapien malesuada ultricies. Nullam sapien elit, laoreet congue sapien eget, suscipit imperdiet nisi. \",\"img\":\"/images/aboutslider/001.jpg\"}],\"testemonials\":{\"title\":\"Listen from our customers\",\"subtitle\":\"Read what our client saying about us\"}},\"contantPage\":{\"header\":{\"title\":\"Contact us\",\"subtitle\":\"We’re proud not to be a studio that only works in one particular sector, instead we lead by our disruptive digital service offering.\"},\"offer\":{\"title\":\"Get in touch\",\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus dignissim lacus, et rhoncus ex lacinia et. Nunc vel neque sed sem fringilla condimentum.\"},\"form\":{\"title\":\"Contact Information\",\"subtitle\":\"Drop us a Line\",\"adress\":\"28 Green Tower, Street Name New York City,\",\"phone\":\"+84 846 250 592\",\"email\":\"contact@stuck.com\",\"website\":\"demostuck.com\"},\"map\":{\"title\":\"Find us on map\",\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus dignissim lacus, et rhoncus ex lacinia et. Nunc vel neque sed sem fringilla condimentum. \"}},\"servicePage\":{\"header\":{\"title\":\"Services\",\"subtitle\":\"We’re proud not to be a studio that only works in one particular sector, instead we lead by our disruptive digital service offering.\"},\"serviceData\":{\"title\":\"Partner with a Reliable & Experienced Digital Studio\",\"subtitle\":\"Enter your details & we'll be in touch to discuss your project\",\"person\":{\"pic\":\"/images/social/001.jpg\",\"email\":\"davidmiler@gmail.com\",\"phone\":\"44(0) 121 288 1482\"}}},\"worksPage\":{\"header\":{\"title\":\"Our works\",\"subtitle\":\"We’re proud not to be a studio that only works in one particular sector, instead we lead by our disruptive digital service offering.\"},\"body\":{\"title\":\"Our works\",\"subtitle\":\"See our latest works that we have done\"},\"getStarted\":{\"title\":\"Have a project in your mind?\",\"subtitle\":\"It’s simple just contact with us and one of our team member will assist you how to start.\"},\"categories\":[{\"id\":0,\"path\":\"one\",\"title\":\"All Categories\",\"works\":[{\"id\":0,\"cat\":\"Branding Design\",\"title\":\"Design Studio inc\",\"description\":\"Brand Identity & Experience\",\"pic\":\"/images/indexslider/001.jpg\",\"link\":\"https://github.com/\",\"innerLink\":\"works/0\",\"smallDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers\",\"longDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers like the Wall Street Journal, Vulture, MTV, Gretchen Rubin and many more. We are looking for a talented and creative Director of Design. As the Director of Design, you will lead a growing design team at Panoply. This includes overseeing and setting the design vision, strategy, workflow and team structure to achieve world-class\",\"client\":\"The tokemon Company\",\"technology\":\"HTML5, CSS3, Wordpress\",\"createdDate\":\"February  2018\",\"images\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"prew\":{\"title\":\"Design is creativity\",\"desc\":\"There is great satisfaction in knowing you've done your job well and served your clients' interests. It gives us particular satisfaction when our clients take the time to acknowledge their satisfaction by providing Blue Fountain Media with their testimonials.\",\"mobilePic\":\"/images/aboutslider/001.jpg\",\"desktopPic\":\"/images/aboutslider/002.jpg\"},\"testimonial\":{\"authorPic\":\"/images/aboutslider/001.jpg\",\"text\":\"Up to date it has been a pleasure working with Themebeck After 4 problematic years we finally found Stuck template. Up to date it has been a pleasure working with Themebeck. Stuck came up with the design on their first try\",\"author\":\"Kenneth Roman, Author\",\"video\":{\"src\":\"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4\",\"type\":\"video/mp4\",\"poster\":\"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217\"}}},{\"id\":1,\"title\":\"Design Studio inc\",\"description\":\"Brand Identity & Experience\",\"pic\":\"/images/indexslider/001.jpg\",\"link\":\"https://github.com/\",\"innerLink\":\"works/1\",\"smallDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers\",\"longDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers like the Wall Street Journal, Vulture, MTV, Gretchen Rubin and many more. We are looking for a talented and creative Director of Design. As the Director of Design, you will lead a growing design team at Panoply. This includes overseeing and setting the design vision, strategy, workflow and team structure to achieve world-class\",\"client\":\"The tokemon Company\",\"technology\":\"HTML5, CSS3, Wordpress\",\"createdDate\":\"February  2018\",\"images\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"prew\":{\"title\":\"Design is creativity\",\"desc\":\"There is great satisfaction in knowing you've done your job well and served your clients' interests. It gives us particular satisfaction when our clients take the time to acknowledge their satisfaction by providing Blue Fountain Media with their testimonials.\",\"mobilePic\":\"/images/aboutslider/001.jpg\",\"desktopPic\":\"/images/aboutslider/002.jpg\"},\"testimonial\":{\"authorPic\":\"/images/aboutslider/001.jpg\",\"text\":\"Up to date it has been a pleasure working with Themebeck After 4 problematic years we finally found Stuck template. Up to date it has been a pleasure working with Themebeck. Stuck came up with the design on their first try\",\"author\":\"Kenneth Roman, Author\",\"video\":{\"src\":\"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4\",\"type\":\"video/mp4\",\"poster\":\"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217\"}}},{\"id\":2,\"title\":\"Design Studio inc\",\"description\":\"Brand Identity & Experience\",\"pic\":\"/images/indexslider/001.jpg\",\"link\":\"https://github.com/\",\"innerLink\":\"works/2\",\"smallDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers\",\"longDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers like the Wall Street Journal, Vulture, MTV, Gretchen Rubin and many more. We are looking for a talented and creative Director of Design. As the Director of Design, you will lead a growing design team at Panoply. This includes overseeing and setting the design vision, strategy, workflow and team structure to achieve world-class\",\"client\":\"The tokemon Company\",\"technology\":\"HTML5, CSS3, Wordpress\",\"createdDate\":\"February  2018\",\"images\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"prew\":{\"title\":\"Design is creativity\",\"desc\":\"There is great satisfaction in knowing you've done your job well and served your clients' interests. It gives us particular satisfaction when our clients take the time to acknowledge their satisfaction by providing Blue Fountain Media with their testimonials.\",\"mobilePic\":\"/images/aboutslider/001.jpg\",\"desktopPic\":\"/images/aboutslider/002.jpg\"},\"testimonial\":{\"authorPic\":\"/images/aboutslider/001.jpg\",\"text\":\"Up to date it has been a pleasure working with Themebeck After 4 problematic years we finally found Stuck template. Up to date it has been a pleasure working with Themebeck. Stuck came up with the design on their first try\",\"author\":\"Kenneth Roman, Author\",\"video\":{\"src\":\"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4\",\"type\":\"video/mp4\",\"poster\":\"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217\"}}},{\"id\":3,\"title\":\"Design Studio inc\",\"description\":\"Brand Identity & Experience\",\"pic\":\"/images/aboutslider/001.jpg\",\"link\":\"https://github.com/\",\"innerLink\":\"works/3\",\"smallDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers\",\"longDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers like the Wall Street Journal, Vulture, MTV, Gretchen Rubin and many more. We are looking for a talented and creative Director of Design. As the Director of Design, you will lead a growing design team at Panoply. This includes overseeing and setting the design vision, strategy, workflow and team structure to achieve world-class\",\"client\":\"The tokemon Company\",\"technology\":\"HTML5, CSS3, Wordpress\",\"createdDate\":\"February  2018\",\"images\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"prew\":{\"title\":\"Design is creativity\",\"desc\":\"There is great satisfaction in knowing you've done your job well and served your clients' interests. It gives us particular satisfaction when our clients take the time to acknowledge their satisfaction by providing Blue Fountain Media with their testimonials.\",\"mobilePic\":\"/images/aboutslider/001.jpg\",\"desktopPic\":\"/images/aboutslider/002.jpg\"},\"testimonial\":{\"authorPic\":\"/images/aboutslider/001.jpg\",\"text\":\"Up to date it has been a pleasure working with Themebeck After 4 problematic years we finally found Stuck template. Up to date it has been a pleasure working with Themebeck. Stuck came up with the design on their first try\",\"author\":\"Kenneth Roman, Author\",\"video\":{\"src\":\"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4\",\"type\":\"video/mp4\",\"poster\":\"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217\"}}},{\"id\":4,\"title\":\"Design Studio inc\",\"description\":\"Brand Identity & Experience\",\"pic\":\"/images/indexslider/001.jpg\",\"link\":\"https://github.com/\",\"innerLink\":\"works/4\",\"smallDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers\",\"longDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers like the Wall Street Journal, Vulture, MTV, Gretchen Rubin and many more. We are looking for a talented and creative Director of Design. As the Director of Design, you will lead a growing design team at Panoply. This includes overseeing and setting the design vision, strategy, workflow and team structure to achieve world-class\",\"client\":\"The tokemon Company\",\"technology\":\"HTML5, CSS3, Wordpress\",\"createdDate\":\"February  2018\",\"images\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"prew\":{\"title\":\"Design is creativity\",\"desc\":\"There is great satisfaction in knowing you've done your job well and served your clients' interests. It gives us particular satisfaction when our clients take the time to acknowledge their satisfaction by providing Blue Fountain Media with their testimonials.\",\"mobilePic\":\"/images/aboutslider/001.jpg\",\"desktopPic\":\"/images/aboutslider/002.jpg\"},\"testimonial\":{\"authorPic\":\"/images/aboutslider/001.jpg\",\"text\":\"Up to date it has been a pleasure working with Themebeck After 4 problematic years we finally found Stuck template. Up to date it has been a pleasure working with Themebeck. Stuck came up with the design on their first try\",\"author\":\"Kenneth Roman, Author\",\"video\":{\"src\":\"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4\",\"type\":\"video/mp4\",\"poster\":\"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217\"}}},{\"id\":5,\"title\":\"Design Studio inc\",\"description\":\"Brand Identity & Experience\",\"pic\":\"/images/indexslider/001.jpg\",\"link\":\"https://github.com/\",\"innerLink\":\"works/5\",\"smallDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers\",\"longDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers like the Wall Street Journal, Vulture, MTV, Gretchen Rubin and many more. We are looking for a talented and creative Director of Design. As the Director of Design, you will lead a growing design team at Panoply. This includes overseeing and setting the design vision, strategy, workflow and team structure to achieve world-class\",\"client\":\"The tokemon Company\",\"technology\":\"HTML5, CSS3, Wordpress\",\"createdDate\":\"February  2018\",\"images\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"prew\":{\"title\":\"Design is creativity\",\"desc\":\"There is great satisfaction in knowing you've done your job well and served your clients' interests. It gives us particular satisfaction when our clients take the time to acknowledge their satisfaction by providing Blue Fountain Media with their testimonials.\",\"mobilePic\":\"/images/aboutslider/001.jpg\",\"desktopPic\":\"/images/aboutslider/002.jpg\"},\"testimonial\":{\"authorPic\":\"/images/aboutslider/001.jpg\",\"text\":\"Up to date it has been a pleasure working with Themebeck After 4 problematic years we finally found Stuck template. Up to date it has been a pleasure working with Themebeck. Stuck came up with the design on their first try\",\"author\":\"Kenneth Roman, Author\",\"video\":{\"src\":\"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4\",\"type\":\"video/mp4\",\"poster\":\"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217\"}}}]},{\"id\":1,\"path\":\"two\",\"title\":\"Agency\",\"works\":[{\"id\":6,\"title\":\"Design Studio inc\",\"description\":\"Brand Identity & Experience\",\"pic\":\"/images/indexslider/001.jpg\",\"link\":\"https://github.com/\",\"innerLink\":\"works/6\",\"smallDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers\",\"longDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers like the Wall Street Journal, Vulture, MTV, Gretchen Rubin and many more. We are looking for a talented and creative Director of Design. As the Director of Design, you will lead a growing design team at Panoply. This includes overseeing and setting the design vision, strategy, workflow and team structure to achieve world-class\",\"client\":\"The tokemon Company\",\"technology\":\"HTML5, CSS3, Wordpress\",\"createdDate\":\"February  2018\",\"images\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"prew\":{\"title\":\"Design is creativity\",\"desc\":\"There is great satisfaction in knowing you've done your job well and served your clients' interests. It gives us particular satisfaction when our clients take the time to acknowledge their satisfaction by providing Blue Fountain Media with their testimonials.\",\"mobilePic\":\"/images/aboutslider/001.jpg\",\"desktopPic\":\"/images/aboutslider/002.jpg\"},\"testimonial\":{\"authorPic\":\"/images/aboutslider/001.jpg\",\"text\":\"Up to date it has been a pleasure working with Themebeck After 4 problematic years we finally found Stuck template. Up to date it has been a pleasure working with Themebeck. Stuck came up with the design on their first try\",\"author\":\"Kenneth Roman, Author\",\"video\":{\"src\":\"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4\",\"type\":\"video/mp4\",\"poster\":\"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217\"}}},{\"id\":7,\"title\":\"Design Studio inc 007\",\"description\":\"Brand Identity & Experience\",\"pic\":\"/images/indexslider/001.jpg\",\"link\":\"https://github.com/\",\"innerLink\":\"works/7\",\"smallDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers\",\"longDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers like the Wall Street Journal, Vulture, MTV, Gretchen Rubin and many more. We are looking for a talented and creative Director of Design. As the Director of Design, you will lead a growing design team at Panoply. This includes overseeing and setting the design vision, strategy, workflow and team structure to achieve world-class\",\"client\":\"The tokemon Company\",\"technology\":\"HTML5, CSS3, Wordpress\",\"createdDate\":\"February  2018\",\"images\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"prew\":{\"title\":\"Design is creativity\",\"desc\":\"There is great satisfaction in knowing you've done your job well and served your clients' interests. It gives us particular satisfaction when our clients take the time to acknowledge their satisfaction by providing Blue Fountain Media with their testimonials.\",\"mobilePic\":\"/images/aboutslider/001.jpg\",\"desktopPic\":\"/images/aboutslider/002.jpg\"},\"testimonial\":{\"authorPic\":\"/images/aboutslider/001.jpg\",\"text\":\"Up to date it has been a pleasure working with Themebeck After 4 problematic years we finally found Stuck template. Up to date it has been a pleasure working with Themebeck. Stuck came up with the design on their first try\",\"author\":\"Kenneth Roman, Author\",\"video\":{\"src\":\"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4\",\"type\":\"video/mp4\",\"poster\":\"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217\"}}}]},{\"id\":2,\"path\":\"three\",\"title\":\"Advertising\",\"works\":[{\"id\":8,\"title\":\"Design Studio inc\",\"description\":\"Brand Identity & Experience\",\"pic\":\"/images/indexslider/001.jpg\",\"link\":\"https://github.com/\",\"innerLink\":\"works/8\",\"smallDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers\",\"longDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers like the Wall Street Journal, Vulture, MTV, Gretchen Rubin and many more. We are looking for a talented and creative Director of Design. As the Director of Design, you will lead a growing design team at Panoply. This includes overseeing and setting the design vision, strategy, workflow and team structure to achieve world-class\",\"client\":\"The tokemon Company\",\"technology\":\"HTML5, CSS3, Wordpress\",\"createdDate\":\"February  2018\",\"images\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"prew\":{\"title\":\"Design is creativity\",\"desc\":\"There is great satisfaction in knowing you've done your job well and served your clients' interests. It gives us particular satisfaction when our clients take the time to acknowledge their satisfaction by providing Blue Fountain Media with their testimonials.\",\"mobilePic\":\"/images/aboutslider/001.jpg\",\"desktopPic\":\"/images/aboutslider/002.jpg\"},\"testimonial\":{\"authorPic\":\"/images/aboutslider/001.jpg\",\"text\":\"Up to date it has been a pleasure working with Themebeck After 4 problematic years we finally found Stuck template. Up to date it has been a pleasure working with Themebeck. Stuck came up with the design on their first try\",\"author\":\"Kenneth Roman, Author\",\"video\":{\"src\":\"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4\",\"type\":\"video/mp4\",\"poster\":\"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217\"}}},{\"id\":9,\"title\":\"Design Studio inc\",\"description\":\"Brand Identity & Experience\",\"pic\":\"/images/indexslider/001.jpg\",\"link\":\"https://github.com/\",\"innerLink\":\"works/9\",\"smallDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers\",\"longDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers like the Wall Street Journal, Vulture, MTV, Gretchen Rubin and many more. We are looking for a talented and creative Director of Design. As the Director of Design, you will lead a growing design team at Panoply. This includes overseeing and setting the design vision, strategy, workflow and team structure to achieve world-class\",\"client\":\"The tokemon Company\",\"technology\":\"HTML5, CSS3, Wordpress\",\"createdDate\":\"February  2018\",\"images\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"prew\":{\"title\":\"Design is creativity\",\"desc\":\"There is great satisfaction in knowing you've done your job well and served your clients' interests. It gives us particular satisfaction when our clients take the time to acknowledge their satisfaction by providing Blue Fountain Media with their testimonials.\",\"mobilePic\":\"/images/aboutslider/001.jpg\",\"desktopPic\":\"/images/aboutslider/002.jpg\"},\"testimonial\":{\"authorPic\":\"/images/aboutslider/001.jpg\",\"text\":\"Up to date it has been a pleasure working with Themebeck After 4 problematic years we finally found Stuck template. Up to date it has been a pleasure working with Themebeck. Stuck came up with the design on their first try\",\"author\":\"Kenneth Roman, Author\",\"video\":{\"src\":\"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4\",\"type\":\"video/mp4\",\"poster\":\"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217\"}}}]},{\"id\":3,\"path\":\"four\",\"title\":\"Branding\",\"works\":[{\"id\":10,\"title\":\"Design Studio inc\",\"description\":\"Brand Identity & Experience\",\"pic\":\"/images/indexslider/001.jpg\",\"link\":\"https://github.com/\",\"innerLink\":\"works/10\",\"smallDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers\",\"longDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers like the Wall Street Journal, Vulture, MTV, Gretchen Rubin and many more. We are looking for a talented and creative Director of Design. As the Director of Design, you will lead a growing design team at Panoply. This includes overseeing and setting the design vision, strategy, workflow and team structure to achieve world-class\",\"client\":\"The tokemon Company\",\"technology\":\"HTML5, CSS3, Wordpress\",\"createdDate\":\"February  2018\",\"images\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"prew\":{\"title\":\"Design is creativity\",\"desc\":\"There is great satisfaction in knowing you've done your job well and served your clients' interests. It gives us particular satisfaction when our clients take the time to acknowledge their satisfaction by providing Blue Fountain Media with their testimonials.\",\"mobilePic\":\"/images/aboutslider/001.jpg\",\"desktopPic\":\"/images/aboutslider/002.jpg\"},\"testimonial\":{\"authorPic\":\"/images/aboutslider/001.jpg\",\"text\":\"Up to date it has been a pleasure working with Themebeck After 4 problematic years we finally found Stuck template. Up to date it has been a pleasure working with Themebeck. Stuck came up with the design on their first try\",\"author\":\"Kenneth Roman, Author\",\"video\":{\"src\":\"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4\",\"type\":\"video/mp4\",\"poster\":\"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217\"}}},{\"id\":11,\"title\":\"Design Studio inc\",\"description\":\"Brand Identity & Experience\",\"pic\":\"/images/indexslider/001.jpg\",\"link\":\"https://github.com/\",\"innerLink\":\"works/11\",\"smallDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers\",\"longDesc\":\"Stuck is a rapidly growing company with a highly visible brand, bringing millions of listeners the smartest conversations that podcasting has to offer through top tier partnerships with publishers like the Wall Street Journal, Vulture, MTV, Gretchen Rubin and many more. We are looking for a talented and creative Director of Design. As the Director of Design, you will lead a growing design team at Panoply. This includes overseeing and setting the design vision, strategy, workflow and team structure to achieve world-class\",\"client\":\"The tokemon Company\",\"technology\":\"HTML5, CSS3, Wordpress\",\"createdDate\":\"February  2018\",\"images\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"prew\":{\"title\":\"Design is creativity\",\"desc\":\"There is great satisfaction in knowing you've done your job well and served your clients' interests. It gives us particular satisfaction when our clients take the time to acknowledge their satisfaction by providing Blue Fountain Media with their testimonials.\",\"mobilePic\":\"/images/aboutslider/001.jpg\",\"desktopPic\":\"/images/aboutslider/002.jpg\"},\"testimonial\":{\"authorPic\":\"/images/aboutslider/001.jpg\",\"text\":\"Up to date it has been a pleasure working with Themebeck After 4 problematic years we finally found Stuck template. Up to date it has been a pleasure working with Themebeck. Stuck came up with the design on their first try\",\"author\":\"Kenneth Roman, Author\",\"video\":{\"src\":\"https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4\",\"type\":\"video/mp4\",\"poster\":\"https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217\"}}}]}]},\"worksPageDetail\":{\"header\":{\"title\":\"Portfolio details\",\"subtitle\":\"We’re proud not to be a studio that only works in one particular sector, instead we lead by our disruptive digital service offering.\"}},\"blogPage\":{\"header\":{\"title\":\"Blog post\",\"subtitle\":\"We’re proud not to be a studio that only works in one particular sector, instead we lead by our disruptive digital service offering.\"},\"blogList\":[{\"id\":0,\"pic\":\"/images/indexslider/001.jpg\",\"title\":\"Before you start to write, have a clear understanding\",\"date\":\"02 SEPTEMBER 2017\",\"text\":\"Before you even write anything, you need to pick a topic for your blog post. The topic can be pretty general to start with.\",\"author\":{\"avatar\":\"/images/indexslider/001.jpg\",\"name\":\"by admin\"},\"path\":\"blog/0\",\"details\":{\"gallery\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"title\":\"Has your blog focus shifted in recent months?\",\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod risus ligula, id luctus lectus volutpat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id mi sit amet nibh iaculis faucibus vitae et magna. Nulla bibendum, lectus et molestie vestibulum, tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mauris massa, eleifend et purus vel, feugiat rutrum nulla. Cras vitae est vel ipsum faucibus fermentum a ultricies urna. Cum sociis natoque penatibus et magnis dis parturient montes. Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. \",\"cite\":{\"text\":\"It's crazy, but the things you love, prospective buyers might hate—and that means you might have a hard time unloading your home when it comes time to sell. Here's how to choose wisely\",\"auth\":\"David Leo\"},\"postText\":\"Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate,\"}},{\"id\":1,\"pic\":\"/images/indexslider/001.jpg\",\"title\":\"Before you start to write, have a clear understanding\",\"date\":\"02 SEPTEMBER 2017\",\"text\":\"Before you even write anything, you need to pick a topic for your blog post. The topic can be pretty general to start with.\",\"author\":{\"avatar\":\"/images/indexslider/001.jpg\",\"name\":\"by admin\"},\"path\":\"blog/1\",\"details\":{\"gallery\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"title\":\"Has your blog focus shifted in recent months?\",\"text\":\"orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod risus ligula, id luctus lectus volutpat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id mi sit amet nibh iaculis faucibus vitae et magna. Nulla bibendum, lectus et molestie vestibulum, tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mauris massa, eleifend et purus vel, feugiat rutrum nulla. Cras vitae est vel ipsum faucibus fermentum a ultricies urna. Cum sociis natoque penatibus et magnis dis parturient montes. Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. \",\"cite\":{\"text\":\"It's crazy, but the things you love, prospective buyers might hate—and that means you might have a hard time unloading your home when it comes time to sell. Here's how to choose wisely\",\"auth\":\"David Leo\"},\"postText\":\"Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate,\"}},{\"id\":2,\"pic\":\"/images/indexslider/001.jpg\",\"title\":\"Before you start to write, have a clear understanding\",\"date\":\"02 SEPTEMBER 2017\",\"text\":\"Before you even write anything, you need to pick a topic for your blog post. The topic can be pretty general to start with.\",\"author\":{\"avatar\":\"/images/indexslider/001.jpg\",\"name\":\"by admin\"},\"path\":\"blog/2\",\"details\":{\"gallery\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"title\":\"Has your blog focus shifted in recent months?\",\"text\":\"orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod risus ligula, id luctus lectus volutpat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id mi sit amet nibh iaculis faucibus vitae et magna. Nulla bibendum, lectus et molestie vestibulum, tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mauris massa, eleifend et purus vel, feugiat rutrum nulla. Cras vitae est vel ipsum faucibus fermentum a ultricies urna. Cum sociis natoque penatibus et magnis dis parturient montes. Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. \",\"cite\":{\"text\":\"It's crazy, but the things you love, prospective buyers might hate—and that means you might have a hard time unloading your home when it comes time to sell. Here's how to choose wisely\",\"auth\":\"David Leo\"},\"postText\":\"Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate,\"}},{\"id\":3,\"pic\":\"/images/indexslider/001.jpg\",\"title\":\"Before you start to write, have a clear understanding\",\"date\":\"02 SEPTEMBER 2017\",\"text\":\"Before you even write anything, you need to pick a topic for your blog post. The topic can be pretty general to start with.\",\"author\":{\"avatar\":\"/images/indexslider/001.jpg\",\"name\":\"by admin\"},\"path\":\"blog/3\",\"details\":{\"gallery\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"title\":\"Has your blog focus shifted in recent months?\",\"text\":\"orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod risus ligula, id luctus lectus volutpat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id mi sit amet nibh iaculis faucibus vitae et magna. Nulla bibendum, lectus et molestie vestibulum, tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mauris massa, eleifend et purus vel, feugiat rutrum nulla. Cras vitae est vel ipsum faucibus fermentum a ultricies urna. Cum sociis natoque penatibus et magnis dis parturient montes. Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. \",\"cite\":{\"text\":\"It's crazy, but the things you love, prospective buyers might hate—and that means you might have a hard time unloading your home when it comes time to sell. Here's how to choose wisely\",\"auth\":\"David Leo\"},\"postText\":\"Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate,\"}},{\"id\":4,\"pic\":\"/images/indexslider/002.jpg\",\"title\":\"Before you start to write, have a clear understanding\",\"date\":\"02 SEPTEMBER 2017\",\"text\":\"Before you even write anything, you need to pick a topic for your blog post. The topic can be pretty general to start with.\",\"author\":{\"avatar\":\"/images/indexslider/001.jpg\",\"name\":\"by admin\"},\"path\":\"blog/4\",\"details\":{\"gallery\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"title\":\"Has your blog focus shifted in recent months?\",\"text\":\"orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod risus ligula, id luctus lectus volutpat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id mi sit amet nibh iaculis faucibus vitae et magna. Nulla bibendum, lectus et molestie vestibulum, tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mauris massa, eleifend et purus vel, feugiat rutrum nulla. Cras vitae est vel ipsum faucibus fermentum a ultricies urna. Cum sociis natoque penatibus et magnis dis parturient montes. Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. \",\"cite\":{\"text\":\"It's crazy, but the things you love, prospective buyers might hate—and that means you might have a hard time unloading your home when it comes time to sell. Here's how to choose wisely\",\"auth\":\"David Leo\"},\"postText\":\"Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate,\"}},{\"id\":5,\"pic\":\"/images/indexslider/001.jpg\",\"title\":\"Before you start to write, have a clear understanding\",\"date\":\"02 SEPTEMBER 2017\",\"text\":\"Before you even write anything, you need to pick a topic for your blog post. The topic can be pretty general to start with.\",\"author\":{\"avatar\":\"/images/indexslider/001.jpg\",\"name\":\"by admin\"},\"path\":\"blog/5\",\"details\":{\"gallery\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"title\":\"Has your blog focus shifted in recent months?\",\"text\":\"orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod risus ligula, id luctus lectus volutpat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id mi sit amet nibh iaculis faucibus vitae et magna. Nulla bibendum, lectus et molestie vestibulum, tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mauris massa, eleifend et purus vel, feugiat rutrum nulla. Cras vitae est vel ipsum faucibus fermentum a ultricies urna. Cum sociis natoque penatibus et magnis dis parturient montes. Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. \",\"cite\":{\"text\":\"It's crazy, but the things you love, prospective buyers might hate—and that means you might have a hard time unloading your home when it comes time to sell. Here's how to choose wisely\",\"auth\":\"David Leo\"},\"postText\":\"Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate,\"}},{\"id\":6,\"pic\":\"/images/indexslider/001.jpg\",\"title\":\"Before you start to write, have a clear understanding\",\"date\":\"02 SEPTEMBER 2017\",\"text\":\"Before you even write anything, you need to pick a topic for your blog post. The topic can be pretty general to start with.\",\"author\":{\"avatar\":\"/images/indexslider/001.jpg\",\"name\":\"by admin\"},\"path\":\"blog/6\",\"details\":{\"gallery\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"title\":\"Has your blog focus shifted in recent months?\",\"text\":\"orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod risus ligula, id luctus lectus volutpat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id mi sit amet nibh iaculis faucibus vitae et magna. Nulla bibendum, lectus et molestie vestibulum, tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mauris massa, eleifend et purus vel, feugiat rutrum nulla. Cras vitae est vel ipsum faucibus fermentum a ultricies urna. Cum sociis natoque penatibus et magnis dis parturient montes. Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. \",\"cite\":{\"text\":\"It's crazy, but the things you love, prospective buyers might hate—and that means you might have a hard time unloading your home when it comes time to sell. Here's how to choose wisely\",\"auth\":\"David Leo\"},\"postText\":\"Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate,\"}},{\"id\":7,\"pic\":\"/images/indexslider/001.jpg\",\"title\":\"Before you start to write, have a clear understanding\",\"date\":\"02 SEPTEMBER 2017\",\"text\":\"Before you even write anything, you need to pick a topic for your blog post. The topic can be pretty general to start with.\",\"author\":{\"avatar\":\"/images/indexslider/001.jpg\",\"name\":\"by admin\"},\"path\":\"blog/7\",\"details\":{\"gallery\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"title\":\"Has your blog focus shifted in recent months?\",\"text\":\"orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod risus ligula, id luctus lectus volutpat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id mi sit amet nibh iaculis faucibus vitae et magna. Nulla bibendum, lectus et molestie vestibulum, tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mauris massa, eleifend et purus vel, feugiat rutrum nulla. Cras vitae est vel ipsum faucibus fermentum a ultricies urna. Cum sociis natoque penatibus et magnis dis parturient montes. Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. \",\"cite\":{\"text\":\"It's crazy, but the things you love, prospective buyers might hate—and that means you might have a hard time unloading your home when it comes time to sell. Here's how to choose wisely\",\"auth\":\"David Leo\"},\"postText\":\"Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate,\"}},{\"id\":8,\"pic\":\"/images/indexslider/001.jpg\",\"title\":\"Before you start to write, have a clear understanding\",\"date\":\"02 SEPTEMBER 2017\",\"text\":\"Before you even write anything, you need to pick a topic for your blog post. The topic can be pretty general to start with.\",\"author\":{\"avatar\":\"/images/indexslider/001.jpg\",\"name\":\"by admin\"},\"path\":\"blog/8\",\"details\":{\"gallery\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"title\":\"Has your blog focus shifted in recent months?\",\"text\":\"orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod risus ligula, id luctus lectus volutpat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id mi sit amet nibh iaculis faucibus vitae et magna. Nulla bibendum, lectus et molestie vestibulum, tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mauris massa, eleifend et purus vel, feugiat rutrum nulla. Cras vitae est vel ipsum faucibus fermentum a ultricies urna. Cum sociis natoque penatibus et magnis dis parturient montes. Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. \",\"cite\":{\"text\":\"It's crazy, but the things you love, prospective buyers might hate—and that means you might have a hard time unloading your home when it comes time to sell. Here's how to choose wisely\",\"auth\":\"David Leo\"},\"postText\":\"Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate,\"}},{\"id\":9,\"pic\":\"/images/indexslider/001.jpg\",\"title\":\"Before you start to write, have a clear understanding\",\"date\":\"02 SEPTEMBER 2017\",\"text\":\"Before you even write anything, you need to pick a topic for your blog post. The topic can be pretty general to start with.\",\"author\":{\"avatar\":\"/images/indexslider/001.jpg\",\"name\":\"by admin\"},\"path\":\"blog/9\",\"details\":{\"gallery\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"title\":\"Has your blog focus shifted in recent months?\",\"text\":\"orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod risus ligula, id luctus lectus volutpat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id mi sit amet nibh iaculis faucibus vitae et magna. Nulla bibendum, lectus et molestie vestibulum, tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mauris massa, eleifend et purus vel, feugiat rutrum nulla. Cras vitae est vel ipsum faucibus fermentum a ultricies urna. Cum sociis natoque penatibus et magnis dis parturient montes. Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. \",\"cite\":{\"text\":\"It's crazy, but the things you love, prospective buyers might hate—and that means you might have a hard time unloading your home when it comes time to sell. Here's how to choose wisely\",\"auth\":\"David Leo\"},\"postText\":\"Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate,\"}},{\"id\":10,\"pic\":\"/images/indexslider/001.jpg\",\"title\":\"Before you start to write, have a clear understanding\",\"date\":\"02 SEPTEMBER 2017\",\"text\":\"Before you even write anything, you need to pick a topic for your blog post. The topic can be pretty general to start with.\",\"author\":{\"avatar\":\"/images/indexslider/001.jpg\",\"name\":\"by admin\"},\"path\":\"blog/10\",\"details\":{\"gallery\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"title\":\"Has your blog focus shifted in recent months?\",\"text\":\"orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod risus ligula, id luctus lectus volutpat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id mi sit amet nibh iaculis faucibus vitae et magna. Nulla bibendum, lectus et molestie vestibulum, tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mauris massa, eleifend et purus vel, feugiat rutrum nulla. Cras vitae est vel ipsum faucibus fermentum a ultricies urna. Cum sociis natoque penatibus et magnis dis parturient montes. Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. \",\"cite\":{\"text\":\"It's crazy, but the things you love, prospective buyers might hate—and that means you might have a hard time unloading your home when it comes time to sell. Here's how to choose wisely\",\"auth\":\"David Leo\"},\"postText\":\"Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate,\"}},{\"id\":11,\"pic\":\"/images/indexslider/001.jpg\",\"title\":\"Before you start to write, have a clear understanding\",\"date\":\"02 SEPTEMBER 2017\",\"text\":\"Before you even write anything, you need to pick a topic for your blog post. The topic can be pretty general to start with.\",\"author\":{\"avatar\":\"/images/indexslider/001.jpg\",\"name\":\"by admin\"},\"path\":\"blog/11\",\"details\":{\"gallery\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"title\":\"Has your blog focus shifted in recent months?\",\"text\":\"orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod risus ligula, id luctus lectus volutpat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id mi sit amet nibh iaculis faucibus vitae et magna. Nulla bibendum, lectus et molestie vestibulum, tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mauris massa, eleifend et purus vel, feugiat rutrum nulla. Cras vitae est vel ipsum faucibus fermentum a ultricies urna. Cum sociis natoque penatibus et magnis dis parturient montes. Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. \",\"cite\":{\"text\":\"It's crazy, but the things you love, prospective buyers might hate—and that means you might have a hard time unloading your home when it comes time to sell. Here's how to choose wisely\",\"auth\":\"David Leo\"},\"postText\":\"Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate,\"}},{\"id\":12,\"pic\":\"/images/indexslider/001.jpg\",\"title\":\"Before you start to write, have a clear understanding\",\"date\":\"02 SEPTEMBER 2017\",\"text\":\"Before you even write anything, you need to pick a topic for your blog post. The topic can be pretty general to start with.\",\"author\":{\"avatar\":\"/images/indexslider/001.jpg\",\"name\":\"by admin\"},\"path\":\"blog/12\",\"details\":{\"gallery\":[\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\",\"/images/aboutslider/001.jpg\",\"/images/aboutslider/002.jpg\"],\"title\":\"Has your blog focus shifted in recent months?\",\"text\":\"orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod risus ligula, id luctus lectus volutpat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id mi sit amet nibh iaculis faucibus vitae et magna. Nulla bibendum, lectus et molestie vestibulum, tellus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed bibendum leo. Mauris mauris massa, eleifend et purus vel, feugiat rutrum nulla. Cras vitae est vel ipsum faucibus fermentum a ultricies urna. Cum sociis natoque penatibus et magnis dis parturient montes. Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. \",\"cite\":{\"text\":\"It's crazy, but the things you love, prospective buyers might hate—and that means you might have a hard time unloading your home when it comes time to sell. Here's how to choose wisely\",\"auth\":\"David Leo\"},\"postText\":\"Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate, tortor nec commodo ultricies, lectus nisl facilisis enim, vitae viverra urna nulla sed turpis. Nullam lacinia faucibus risus, a euismod lorem tincidunt id. Donec maximus placerat tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere. Proin tincidunt fermentum arcu. Nam ac elementum nibh. Donec facilisis interdum orci sit amet ullamcorper. Donec gravida malesuada lacus, eget tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate,\"}}]}}");

/***/ }),

/***/ "KJcM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return changeMenuVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changeCategoryID; });
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xVKS");

const changeMenuVisibility = () => {
  return {
    type: _types_types__WEBPACK_IMPORTED_MODULE_0__[/* ISMENU_OPENED */ "b"]
  };
};
const changeCategoryID = id => {
  return {
    type: _types_types__WEBPACK_IMPORTED_MODULE_0__[/* CHANGE_CATEGORY */ "a"],
    payload: id
  };
};

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "Ruk8":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "layout_main__gDhVY",
	"container": "layout_container__3sC0E",
	"header": "layout_header__3KufH",
	"header__top": "layout_header__top__1Lh3a",
	"header__titleHome": "layout_header__titleHome__3Dx9_",
	"header__search": "layout_header__search__1OaGu",
	"headerHome": "layout_headerHome__2o9N-",
	"headerInnerPage": "layout_headerInnerPage__23ldm",
	"footerIndex__inner": "layout_footerIndex__inner__OKaPX",
	"footerIndex__copy": "layout_footerIndex__copy__3YWz_",
	"footerIndexInnarPages": "layout_footerIndexInnarPages__3Th43",
	"animationIconOne": "layout_animationIconOne__3JYK6",
	"animationIconTwo": "layout_animationIconTwo__2_eAS",
	"animationIconThree": "layout_animationIconThree__31z3N",
	"animationIconFour": "layout_animationIconFour__ImFfO",
	"animationIconFive": "layout_animationIconFive__1mMjM",
	"animationIconSix": "layout_animationIconSix__38LhY",
	"animationIconSeven": "layout_animationIconSeven__2yLR-",
	"animationIconEight": "layout_animationIconEight__3f94j",
	"animationIconNine": "layout_animationIconNine__dAgnH",
	"animationIconTen": "layout_animationIconTen__8UXQE",
	"animationIconEleven": "layout_animationIconEleven__3S8Qc",
	"animationIconTwelve": "layout_animationIconTwelve__217_W",
	"animationIconThirteen": "layout_animationIconThirteen__10G7I",
	"animationIconFourteen": "layout_animationIconFourteen__3ufsD"
};


/***/ }),

/***/ "Shpp":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"social": "Social_social__1WdXh"
};


/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YeKD":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"searchWrapper__icon": "Search_searchWrapper__icon__31XED",
	"searchWrapper__holder": "Search_searchWrapper__holder__5_GM6",
	"searchWrapper__close": "Search_searchWrapper__close__1RuWD",
	"searchWrapper__form": "Search_searchWrapper__form__3bqoI"
};


/***/ }),

/***/ "a0NF":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainMenu": "MainMenu_mainMenu__2naym",
	"mainMenuHome": "MainMenu_mainMenuHome__1eKia"
};


/***/ }),

/***/ "aYjl":
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("98FW"));

var _extends2 = _interopRequireDefault(__webpack_require__("1ccW"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[320,420,768,1024,1200],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image/","loader":"imgix"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "kGkn":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"logo": "HeaderLogo_logo__1Xraf",
	"logoHome": "HeaderLogo_logoHome__1bHzX"
};


/***/ }),

/***/ "nKT3":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blogSlider": "BlogSlider_blogSlider__2OyxL",
	"blogSlider__nextArrow": "BlogSlider_blogSlider__nextArrow__3aOj2",
	"blogSlider__prevArrow": "BlogSlider_blogSlider__prevArrow__3lHDO"
};


/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "sLJp":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "tKtg":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"blogDeatilPage": "Blog_blogDeatilPage__3WPGS",
	"blogDeatilPage__title": "Blog_blogDeatilPage__title__2o4aV",
	"blogDeatilPage__text": "Blog_blogDeatilPage__text__21W8e",
	"blogDeatilPage__postText": "Blog_blogDeatilPage__postText__2GX0o",
	"blogDeatilPage__cite": "Blog_blogDeatilPage__cite__EYkMj",
	"blogDeatilPage__citeText": "Blog_blogDeatilPage__citeText__1A_fF",
	"blogDeatilPage__citeAuth": "Blog_blogDeatilPage__citeAuth__a0pj_",
	"blogDeatilPage__citeIcon": "Blog_blogDeatilPage__citeIcon__29N_8",
	"blogDeatilPage__info": "Blog_blogDeatilPage__info__23LAg",
	"blogDeatilPage__auth": "Blog_blogDeatilPage__auth__1Zg34"
};


/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xVKS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ISMENU_OPENED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_CATEGORY; });
const ISMENU_OPENED = 'ISMENU_OPENED';
const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });