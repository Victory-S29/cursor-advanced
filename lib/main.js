"use strict";

require("core-js/modules/es.json.stringify.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.reduce.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
(() => {
  "use strict";

  var e = {
      709: (e, r, t) => {
        t.d(r, {
          Z: () => i
        });
        var n = t(81),
          o = t.n(n),
          s = t(645),
          a = t.n(s)()(o());
        a.push([e.id, "body{\r\n    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qG02mYkva3uFgojQZiWI13EliEdVkvJG2g&usqp=CAU);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.keys {\r\n    display: flex;\r\n    min-height: 100vh;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\nkbd {\r\n    display: block;\r\n    font-size: 4rem;\r\n}\r\n\r\n.key {\r\n    border: 3px solid rgb(17, 0, 0);\r\n    border-radius: 0.5rem;\r\n    margin: 1rem;\r\n    font-size: 1.5rem;\r\n    padding: 1rem 0.5rem;\r\n    text-align: center;\r\n    color: rgb(17, 0, 0);\r\n    background: rgba(46, 0, 0, 0.5);\r\n}\r\n\r\n.sound {\r\n    font-size: 1.2rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: .1rem;\r\n    color: rgb(17, 0, 0);\r\n}\r\n\r\n.chosen{\r\n    transform: scale(1.05);\r\n    border-color: rgb(17, 0, 0);\r\n    box-shadow: 0 0 1rem rgb(17, 0, 0);\r\n}\r\n\r\nh1{\r\n    color: rgb(45, 255, 45);\r\n}", ""]);
        const i = a;
      },
      645: e => {
        e.exports = function (e) {
          var r = [];
          return r.toString = function () {
            return this.map(function (r) {
              var t = "",
                n = void 0 !== r[5];
              return r[4] && (t += "@supports (".concat(r[4], ") {")), r[2] && (t += "@media ".concat(r[2], " {")), n && (t += "@layer".concat(r[5].length > 0 ? " ".concat(r[5]) : "", " {")), t += e(r), n && (t += "}"), r[2] && (t += "}"), r[4] && (t += "}"), t;
            }).join("");
          }, r.i = function (e, t, n, o, s) {
            "string" == typeof e && (e = [[null, e, void 0]]);
            var a = {};
            if (n) for (var i = 0; i < this.length; i++) {
              var c = this[i][0];
              null != c && (a[c] = !0);
            }
            for (var l = 0; l < e.length; l++) {
              var u = [].concat(e[l]);
              n && a[u[0]] || (void 0 !== s && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = s), t && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = t) : u[2] = t), o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = o) : u[4] = "".concat(o)), r.push(u));
            }
          }, r;
        };
      },
      81: e => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: e => {
        var r = [];
        function t(e) {
          for (var t = -1, n = 0; n < r.length; n++) if (r[n].identifier === e) {
            t = n;
            break;
          }
          return t;
        }
        function n(e, n) {
          for (var s = {}, a = [], i = 0; i < e.length; i++) {
            var c = e[i],
              l = n.base ? c[0] + n.base : c[0],
              u = s[l] || 0,
              d = "".concat(l, " ").concat(u);
            s[l] = u + 1;
            var p = t(d),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5]
              };
            if (-1 !== p) r[p].references++, r[p].updater(f);else {
              var h = o(f, n);
              n.byIndex = i, r.splice(i, 0, {
                identifier: d,
                updater: h,
                references: 1
              });
            }
            a.push(d);
          }
          return a;
        }
        function o(e, r) {
          var t = r.domAPI(r);
          return t.update(e), function (r) {
            if (r) {
              if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap && r.supports === e.supports && r.layer === e.layer) return;
              t.update(e = r);
            } else t.remove();
          };
        }
        e.exports = function (e, o) {
          var s = n(e = e || [], o = o || {});
          return function (e) {
            e = e || [];
            for (var a = 0; a < s.length; a++) {
              var i = t(s[a]);
              r[i].references--;
            }
            for (var c = n(e, o), l = 0; l < s.length; l++) {
              var u = t(s[l]);
              0 === r[u].references && (r[u].updater(), r.splice(u, 1));
            }
            s = c;
          };
        };
      },
      569: e => {
        var r = {};
        e.exports = function (e, t) {
          var n = function (e) {
            if (void 0 === r[e]) {
              var t = document.querySelector(e);
              if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                t = t.contentDocument.head;
              } catch (e) {
                t = null;
              }
              r[e] = t;
            }
            return r[e];
          }(e);
          if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          n.appendChild(t);
        };
      },
      216: e => {
        e.exports = function (e) {
          var r = document.createElement("style");
          return e.setAttributes(r, e.attributes), e.insert(r, e.options), r;
        };
      },
      565: (e, r, t) => {
        e.exports = function (e) {
          var r = t.nc;
          r && e.setAttribute("nonce", r);
        };
      },
      795: e => {
        e.exports = function (e) {
          if ("undefined" == typeof document) return {
            update: function update() {},
            remove: function remove() {}
          };
          var r = e.insertStyleElement(e);
          return {
            update: function update(t) {
              !function (e, r, t) {
                var n = "";
                t.supports && (n += "@supports (".concat(t.supports, ") {")), t.media && (n += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o && (n += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), n += t.css, o && (n += "}"), t.media && (n += "}"), t.supports && (n += "}");
                var s = t.sourceMap;
                s && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), r.styleTagTransform(n, e, r.options);
              }(r, e, t);
            },
            remove: function remove() {
              !function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              }(r);
            }
          };
        };
      },
      589: e => {
        e.exports = function (e, r) {
          if (r.styleSheet) r.styleSheet.cssText = e;else {
            for (; r.firstChild;) r.removeChild(r.firstChild);
            r.appendChild(document.createTextNode(e));
          }
        };
      }
    },
    r = {};
  function t(n) {
    var o = r[n];
    if (void 0 !== o) return o.exports;
    var s = r[n] = {
      id: n,
      exports: {}
    };
    return e[n](s, s.exports, t), s.exports;
  }
  t.n = e => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return t.d(r, {
      a: r
    }), r;
  }, t.d = (e, r) => {
    for (var n in r) t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, {
      enumerable: !0,
      get: r[n]
    });
  }, t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), t.nc = void 0, (() => {
    var _e;
    var e = t(379),
      r = t.n(e),
      n = t(795),
      o = t.n(n),
      s = t(569),
      a = t.n(s),
      i = t(565),
      c = t.n(i),
      l = t(216),
      u = t.n(l),
      d = t(589),
      p = t.n(d),
      f = t(709),
      h = {};
    h.styleTagTransform = p(), h.setAttributes = c(), h.insert = a().bind(null, "head"), h.domAPI = o(), h.insertStyleElement = u(), r()(f.Z, h), f.Z && f.Z.locals && f.Z.locals, console.log("hw03", function (e) {
      let r = 0;
      for (; e;) {
        let t = e % 10;
        t > r && (r = t), e = parseInt(e / 10);
      }
      return r;
    }(1234)), console.log("hw04", (e => {
      const r = [];
      return r.push([e[0], e[2]]), r.push([e[1], e[3]]), r.push([e[4], e[5]]), r;
    })(["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"])), console.log("hw05", function (e, r, t) {
      const n = [];
      for (let e = 0; e < 10; e++) n.push(Math.round(10 * Math.random()) + 0);
      return n;
    }()), console.log("hw06", function (e) {
      const r = [];
      for (let e in [{
        name: "Tanya",
        course: 3,
        subjects: {
          math: [4, 4, 3, 4],
          algorithms: [3, 3, 3, 4, 4, 4],
          data_science: [5, 5, 3, 4]
        }
      }, {
        name: "Victor",
        course: 4,
        subjects: {
          physics: [5, 5, 5, 3],
          economics: [2, 3, 3, 3, 3, 5],
          geometry: [5, 5, 2, 3, 5]
        }
      }, {
        name: "Anton",
        course: 2,
        subjects: {
          statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
          english: [5, 3],
          cosmology: [5, 5, 5, 5]
        }
      }].subjects) r.push(e);
      return r.map(e => (e[0].toUpperCase() + e.substring(1)).replace("_", " "));
    }()), console.log("hw07", function () {
      return this.tax * this.middleSalary;
    }.call({
      tax: .195,
      middleSalary: 1789,
      vacancies: 11476
    })), console.log("hw08 - Student"), new (_e = /*#__PURE__*/new WeakMap(), class {
      constructor(e, r, t) {
        _classPrivateFieldInitSpec(this, _e, {
          writable: true,
          value: void 0
        });
        this.university = e, this.course = r, this.fullName = t, _classPrivateFieldSet(this, _e, [5, 4, 4, 5]), this.dismissed = !1, this.averageMark = 0;
      }
      get getMarks() {
        return this.dismissed ? null : _classPrivateFieldGet(this, _e);
      }
      set setMarks(e) {
        if (this.dismissed) return null;
        _classPrivateFieldGet(this, _e).push(e);
      }
      getInfo() {
        console.log("\u0421\u0442\u0443\u0434\u0435\u043D\u0442(\u043A\u0430) ".concat(this.course, "\u0433\u043E \u043A\u0443\u0440\u0441\u0443 ").concat(this.university, ", ").concat(this.fullName));
      }
      getAverageMark() {
        if (this.dismissed) return null;
        {
          const e = _classPrivateFieldGet(this, _e).reduce((e, r) => e + r, 0) / _classPrivateFieldGet(this, _e).length;
          return this.averageMark = e, e;
        }
      }
      dismiss() {
        this.dismissed = !0;
      }
      recover() {
        this.dismissed = !1;
      }
    })("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер").getInfo(), console.log("hw09 - generateBlocks"), function () {
      for (let e = 0; e < 5; e++) {
        let r = document.createElement("div");
        r.style.display = "flex", r.style.justifyContent = "center", document.body.appendChild(r);
        for (let t = 0; t < 5; t++) {
          let n = document.createElement("div");
          n.setAttribute("id", "block".concat(e).concat(t));
          const o = Math.round(255 * Math.random()),
            s = Math.round(255 * Math.random()),
            a = Math.round(255 * Math.random());
          n.style.width = "50px", n.style.height = "50px", n.style.backgroundColor = "red", n.style.display = "block", n.style.backgroundColor = "rgb(".concat(o, ", ").concat(s, ", ").concat(a, ")"), r.append(n);
        }
      }
    }(), console.log("hw13 - infiniteGenerator");
    const m = function* () {
      let e = 0;
      for (let r = 0; r < 1 / 0; r++) e += 1, yield e;
    }();
    console.log(m.next().value), console.log(m.next().value), console.log(m.next().value), console.log(m.next().value);
  })();
})();