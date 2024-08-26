import { _ as xs } from "./hoisted.FicniJ2Z.js";
import "./Tabs.astro_astro_type_script_index_0_lang.3nBd5krW.js";
var qs = Object.defineProperty,
  F = (e, t) => {
    for (var u in t) qs(e, u, { get: t[u], enumerable: !0 });
  };
function L() {}
function hu(e) {
  return e();
}
function ye() {
  return Object.create(null);
}
function J(e) {
  e.forEach(hu);
}
function mu(e) {
  return typeof e == "function";
}
function fe(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == "object") || typeof e == "function";
}
var oe;
function ce(e, t) {
  return oe || (oe = document.createElement("a")), (oe.href = t), e === oe.href;
}
function Vs(e) {
  return Object.keys(e).length === 0;
}
function A(e, t) {
  e.appendChild(t);
}
function T(e, t, u) {
  e.insertBefore(t, u || null);
}
function v(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function ie(e, t) {
  for (let u = 0; u < e.length; u += 1) e[u] && e[u].d(t);
}
function p(e) {
  return document.createElement(e);
}
function Ks(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function S(e) {
  return document.createTextNode(e);
}
function M() {
  return S(" ");
}
function ee() {
  return S("");
}
function G(e, t, u, r) {
  return e.addEventListener(t, u, r), () => e.removeEventListener(t, u, r);
}
function g(e, t, u) {
  u == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== u && e.setAttribute(t, u);
}
function Gs(e) {
  return Array.from(e.childNodes);
}
function j(e, t) {
  (t = "" + t), e.data !== t && (e.data = t);
}
function ze(e, t) {
  e.value = t ?? "";
}
function K(e, t, u) {
  e.classList[u ? "add" : "remove"](t);
}
var Ws = class {
    constructor(e = !1) {
      (this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
    }
    c(e) {
      this.h(e);
    }
    m(e, t, u = null) {
      this.e ||
        (this.is_svg
          ? (this.e = Ks(t.nodeName))
          : (this.e = p(t.nodeType === 11 ? "TEMPLATE" : t.nodeName)),
        (this.t = t.tagName !== "TEMPLATE" ? t : t.content),
        this.c(e)),
        this.i(u);
    }
    h(e) {
      (this.e.innerHTML = e),
        (this.n = Array.from(
          this.e.nodeName === "TEMPLATE"
            ? this.e.content.childNodes
            : this.e.childNodes,
        ));
    }
    i(e) {
      for (let t = 0; t < this.n.length; t += 1) T(this.t, this.n[t], e);
    }
    p(e) {
      this.d(), this.h(e), this.i(this.a);
    }
    d() {
      this.n.forEach(v);
    }
  },
  se;
function re(e) {
  se = e;
}
function Cu() {
  if (!se) throw new Error("Function called outside component initialization");
  return se;
}
function Js(e) {
  Cu().$$.on_mount.push(e);
}
function Zs(e) {
  Cu().$$.on_destroy.push(e);
}
var X = [],
  le = [],
  $ = [],
  pe = [],
  Ys = Promise.resolve(),
  ve = !1;
function Xs() {
  ve || ((ve = !0), Ys.then(gu));
}
function Te(e) {
  $.push(e);
}
function Qs(e) {
  pe.push(e);
}
var Ae = new Set(),
  Y = 0;
function gu() {
  if (Y !== 0) return;
  const e = se;
  do {
    try {
      for (; Y < X.length; ) {
        const t = X[Y];
        Y++, re(t), $s(t.$$);
      }
    } catch (t) {
      throw ((X.length = 0), (Y = 0), t);
    }
    for (re(null), X.length = 0, Y = 0; le.length; ) le.pop()();
    for (let t = 0; t < $.length; t += 1) {
      const u = $[t];
      Ae.has(u) || (Ae.add(u), u());
    }
    $.length = 0;
  } while (X.length);
  for (; pe.length; ) pe.pop()();
  (ve = !1), Ae.clear(), re(e);
}
function $s(e) {
  if (e.fragment !== null) {
    e.update(), J(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(Te);
  }
}
function el(e) {
  const t = [],
    u = [];
  $.forEach((r) => (e.indexOf(r) === -1 ? t.push(r) : u.push(r))),
    u.forEach((r) => r()),
    ($ = t);
}
var _e = new Set(),
  W;
function ae() {
  W = { r: 0, c: [], p: W };
}
function ne() {
  W.r || J(W.c), (W = W.p);
}
function z(e, t) {
  e && e.i && (_e.delete(e), e.i(t));
}
function U(e, t, u, r) {
  if (e && e.o) {
    if (_e.has(e)) return;
    _e.add(e),
      W.c.push(() => {
        _e.delete(e), r && (u && e.d(1), r());
      }),
      e.o(t);
  } else r && r();
}
function ul(e, t) {
  U(e, 1, 1, () => {
    t.delete(e.key);
  });
}
function tl(e, t, u, r, s, l, a, n, i, d, _, h) {
  let m = e.length,
    f = l.length,
    c = m;
  const o = {};
  for (; c--; ) o[e[c].key] = c;
  const E = [],
    B = new Map(),
    R = new Map(),
    k = [];
  for (c = f; c--; ) {
    const b = h(s, l, c),
      D = u(b);
    let w = a.get(D);
    w ? k.push(() => w.p(b, t)) : ((w = d(D, b)), w.c()),
      B.set(D, (E[c] = w)),
      D in o && R.set(D, Math.abs(c - o[D]));
  }
  const y = new Set(),
    q = new Set();
  function P(b) {
    z(b, 1), b.m(n, _), a.set(b.key, b), (_ = b.first), f--;
  }
  for (; m && f; ) {
    const b = E[f - 1],
      D = e[m - 1],
      w = b.key,
      x = D.key;
    b === D
      ? ((_ = b.first), m--, f--)
      : B.has(x)
        ? !a.has(w) || y.has(w)
          ? P(b)
          : q.has(x)
            ? m--
            : R.get(w) > R.get(x)
              ? (q.add(w), P(b))
              : (y.add(x), m--)
        : (i(D, a), m--);
  }
  for (; m--; ) {
    const b = e[m];
    B.has(b.key) || i(b, a);
  }
  for (; f; ) P(E[f - 1]);
  return J(k), E;
}
function rl(e, t, u) {
  const r = e.$$.props[t];
  r !== void 0 && ((e.$$.bound[r] = u), u(e.$$.ctx[r]));
}
function ke(e) {
  e && e.c();
}
function Ee(e, t, u, r) {
  const { fragment: s, after_update: l } = e.$$;
  s && s.m(t, u),
    r ||
      Te(() => {
        const a = e.$$.on_mount.map(hu).filter(mu);
        e.$$.on_destroy ? e.$$.on_destroy.push(...a) : J(a),
          (e.$$.on_mount = []);
      }),
    l.forEach(Te);
}
function de(e, t) {
  const u = e.$$;
  u.fragment !== null &&
    (el(u.after_update),
    J(u.on_destroy),
    u.fragment && u.fragment.d(t),
    (u.on_destroy = u.fragment = null),
    (u.ctx = []));
}
function sl(e, t) {
  e.$$.dirty[0] === -1 && (X.push(e), Xs(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function he(e, t, u, r, s, l, a, n = [-1]) {
  const i = se;
  re(e);
  const d = (e.$$ = {
    fragment: null,
    ctx: [],
    props: l,
    update: L,
    not_equal: s,
    bound: ye(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (i ? i.$$.context : [])),
    callbacks: ye(),
    dirty: n,
    skip_bound: !1,
    root: t.target || i.$$.root,
  });
  a && a(d.root);
  let _ = !1;
  if (
    ((d.ctx = u
      ? u(e, t.props || {}, (h, m, ...f) => {
          const c = f.length ? f[0] : m;
          return (
            d.ctx &&
              s(d.ctx[h], (d.ctx[h] = c)) &&
              (!d.skip_bound && d.bound[h] && d.bound[h](c), _ && sl(e, h)),
            m
          );
        })
      : []),
    d.update(),
    (_ = !0),
    J(d.before_update),
    (d.fragment = r ? r(d.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const h = Gs(t.target);
      d.fragment && d.fragment.l(h), h.forEach(v);
    } else d.fragment && d.fragment.c();
    t.intro && z(e.$$.fragment),
      Ee(e, t.target, t.anchor, t.customElement),
      gu();
  }
  re(i);
}
var me = class {
  $destroy() {
    de(this, 1), (this.$destroy = L);
  }
  $on(e, t) {
    if (!mu(t)) return L;
    const u = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      u.push(t),
      () => {
        const r = u.indexOf(t);
        r !== -1 && u.splice(r, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !Vs(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
};
function O(e) {
  const t = typeof e == "string" ? e.charCodeAt(0) : e;
  return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
}
function Q(e) {
  const t = typeof e == "string" ? e.charCodeAt(0) : e;
  return t >= 48 && t <= 57;
}
function V(e) {
  return O(e) || Q(e);
}
var ll = [
    "art-lojban",
    "cel-gaulish",
    "no-bok",
    "no-nyn",
    "zh-guoyu",
    "zh-hakka",
    "zh-min",
    "zh-min-nan",
    "zh-xiang",
  ],
  je = {
    "en-gb-oed": "en-GB-oxendict",
    "i-ami": "ami",
    "i-bnn": "bnn",
    "i-default": null,
    "i-enochian": null,
    "i-hak": "hak",
    "i-klingon": "tlh",
    "i-lux": "lb",
    "i-mingo": null,
    "i-navajo": "nv",
    "i-pwn": "pwn",
    "i-tao": "tao",
    "i-tay": "tay",
    "i-tsu": "tsu",
    "sgn-be-fr": "sfb",
    "sgn-be-nl": "vgt",
    "sgn-ch-de": "sgg",
    "art-lojban": "jbo",
    "cel-gaulish": null,
    "no-bok": "nb",
    "no-nyn": "nn",
    "zh-guoyu": "cmn",
    "zh-hakka": "hak",
    "zh-min": null,
    "zh-min-nan": "nan",
    "zh-xiang": "hsn",
  },
  al = {}.hasOwnProperty;
function Ru(e, t = {}) {
  const u = Oe(),
    r = String(e),
    s = r.toLowerCase();
  let l = 0;
  if (e == null) throw new Error("Expected string, got `" + e + "`");
  if (al.call(je, s)) {
    const n = je[s];
    return (t.normalize === void 0 || t.normalize === null || t.normalize) &&
      typeof n == "string"
      ? Ru(n)
      : ((u[ll.includes(s) ? "regular" : "irregular"] = r), u);
  }
  for (; O(s.charCodeAt(l)) && l < 9; ) l++;
  if (l > 1 && l < 9) {
    if (((u.language = r.slice(0, l)), l < 4)) {
      let n = 0;
      for (
        ;
        s.charCodeAt(l) === 45 &&
        O(s.charCodeAt(l + 1)) &&
        O(s.charCodeAt(l + 2)) &&
        O(s.charCodeAt(l + 3)) &&
        !O(s.charCodeAt(l + 4));

      ) {
        if (n > 2)
          return a(
            l,
            3,
            "Too many extended language subtags, expected at most 3 subtags",
          );
        u.extendedLanguageSubtags.push(r.slice(l + 1, l + 4)), (l += 4), n++;
      }
    }
    for (
      s.charCodeAt(l) === 45 &&
        O(s.charCodeAt(l + 1)) &&
        O(s.charCodeAt(l + 2)) &&
        O(s.charCodeAt(l + 3)) &&
        O(s.charCodeAt(l + 4)) &&
        !O(s.charCodeAt(l + 5)) &&
        ((u.script = r.slice(l + 1, l + 5)), (l += 5)),
        s.charCodeAt(l) === 45 &&
          (O(s.charCodeAt(l + 1)) &&
          O(s.charCodeAt(l + 2)) &&
          !O(s.charCodeAt(l + 3))
            ? ((u.region = r.slice(l + 1, l + 3)), (l += 3))
            : Q(s.charCodeAt(l + 1)) &&
              Q(s.charCodeAt(l + 2)) &&
              Q(s.charCodeAt(l + 3)) &&
              !Q(s.charCodeAt(l + 4)) &&
              ((u.region = r.slice(l + 1, l + 4)), (l += 4)));
      s.charCodeAt(l) === 45;

    ) {
      const n = l + 1;
      let i = n;
      for (; V(s.charCodeAt(i)); ) {
        if (i - n > 7)
          return a(i, 1, "Too long variant, expected at most 8 characters");
        i++;
      }
      if (i - n > 4 || (i - n > 3 && Q(s.charCodeAt(n))))
        u.variants.push(r.slice(n, i)), (l = i);
      else break;
    }
    for (
      ;
      s.charCodeAt(l) === 45 &&
      !(
        s.charCodeAt(l + 1) === 120 ||
        !V(s.charCodeAt(l + 1)) ||
        s.charCodeAt(l + 2) !== 45 ||
        !V(s.charCodeAt(l + 3))
      );

    ) {
      let n = l + 2,
        i = 0;
      for (
        ;
        s.charCodeAt(n) === 45 &&
        V(s.charCodeAt(n + 1)) &&
        V(s.charCodeAt(n + 2));

      ) {
        const d = n + 1;
        for (n = d + 2, i++; V(s.charCodeAt(n)); ) {
          if (n - d > 7)
            return a(n, 2, "Too long extension, expected at most 8 characters");
          n++;
        }
      }
      if (!i)
        return a(
          n,
          4,
          "Empty extension, extensions must have at least 2 characters of content",
        );
      u.extensions.push({
        singleton: r.charAt(l + 1),
        extensions: r.slice(l + 3, n).split("-"),
      }),
        (l = n);
    }
  } else l = 0;
  if (
    (l === 0 && s.charCodeAt(l) === 120) ||
    (s.charCodeAt(l) === 45 && s.charCodeAt(l + 1) === 120)
  ) {
    l = l ? l + 2 : 1;
    let n = l;
    for (; s.charCodeAt(n) === 45 && V(s.charCodeAt(n + 1)); ) {
      const i = l + 1;
      for (n = i; V(s.charCodeAt(n)); ) {
        if (n - i > 7)
          return a(
            n,
            5,
            "Too long private-use area, expected at most 8 characters",
          );
        n++;
      }
      u.privateuse.push(r.slice(l + 1, n)), (l = n);
    }
  }
  if (l !== r.length) return a(l, 6, "Found superfluous content after tag");
  return u;
  function a(n, i, d) {
    return t.warning && t.warning(d, i, n), t.forgiving ? u : Oe();
  }
}
function Oe() {
  return {
    language: null,
    extendedLanguageSubtags: [],
    script: null,
    region: null,
    variants: [],
    extensions: [],
    privateuse: [],
    irregular: null,
    regular: null,
  };
}
function Ue(e, t, u) {
  const r = e.slice();
  return (r[8] = t[u][0]), (r[9] = t[u][1]), r;
}
function nl(e) {
  let t,
    u,
    r,
    s,
    l,
    a = e[0] && Ie();
  return {
    c() {
      a && a.c(),
        (t = M()),
        (u = p("div")),
        (r = p("p")),
        (r.textContent = `${e[3](30)}`),
        (s = M()),
        (l = p("p")),
        (l.textContent = `${e[3](40)}`),
        g(
          r,
          "class",
          "pagefind-ui__result-title pagefind-ui__loading svelte-j9e30",
        ),
        g(
          l,
          "class",
          "pagefind-ui__result-excerpt pagefind-ui__loading svelte-j9e30",
        ),
        g(u, "class", "pagefind-ui__result-inner svelte-j9e30");
    },
    m(n, i) {
      a && a.m(n, i), T(n, t, i), T(n, u, i), A(u, r), A(u, s), A(u, l);
    },
    p(n, i) {
      n[0]
        ? a || ((a = Ie()), a.c(), a.m(t.parentNode, t))
        : a && (a.d(1), (a = null));
    },
    d(n) {
      a && a.d(n), n && v(t), n && v(u);
    },
  };
}
function il(e) {
  let t,
    u,
    r,
    s,
    l = e[1].meta?.title + "",
    a,
    n,
    i,
    d,
    _ = e[1].excerpt + "",
    h,
    m = e[0] && Le(e),
    f = e[2].length && xe(e);
  return {
    c() {
      m && m.c(),
        (t = M()),
        (u = p("div")),
        (r = p("p")),
        (s = p("a")),
        (a = S(l)),
        (i = M()),
        (d = p("p")),
        (h = M()),
        f && f.c(),
        g(s, "class", "pagefind-ui__result-link svelte-j9e30"),
        g(s, "href", (n = e[1].meta?.url || e[1].url)),
        g(r, "class", "pagefind-ui__result-title svelte-j9e30"),
        g(d, "class", "pagefind-ui__result-excerpt svelte-j9e30"),
        g(u, "class", "pagefind-ui__result-inner svelte-j9e30");
    },
    m(c, o) {
      m && m.m(c, o),
        T(c, t, o),
        T(c, u, o),
        A(u, r),
        A(r, s),
        A(s, a),
        A(u, i),
        A(u, d),
        (d.innerHTML = _),
        A(u, h),
        f && f.m(u, null);
    },
    p(c, o) {
      c[0]
        ? m
          ? m.p(c, o)
          : ((m = Le(c)), m.c(), m.m(t.parentNode, t))
        : m && (m.d(1), (m = null)),
        o & 2 && l !== (l = c[1].meta?.title + "") && j(a, l),
        o & 2 && n !== (n = c[1].meta?.url || c[1].url) && g(s, "href", n),
        o & 2 && _ !== (_ = c[1].excerpt + "") && (d.innerHTML = _),
        c[2].length
          ? f
            ? f.p(c, o)
            : ((f = xe(c)), f.c(), f.m(u, null))
          : f && (f.d(1), (f = null));
    },
    d(c) {
      m && m.d(c), c && v(t), c && v(u), f && f.d();
    },
  };
}
function Ie(e) {
  let t;
  return {
    c() {
      (t = p("div")),
        g(
          t,
          "class",
          "pagefind-ui__result-thumb pagefind-ui__loading svelte-j9e30",
        );
    },
    m(u, r) {
      T(u, t, r);
    },
    d(u) {
      u && v(t);
    },
  };
}
function Le(e) {
  let t,
    u = e[1].meta.image && Pe(e);
  return {
    c() {
      (t = p("div")),
        u && u.c(),
        g(t, "class", "pagefind-ui__result-thumb svelte-j9e30");
    },
    m(r, s) {
      T(r, t, s), u && u.m(t, null);
    },
    p(r, s) {
      r[1].meta.image
        ? u
          ? u.p(r, s)
          : ((u = Pe(r)), u.c(), u.m(t, null))
        : u && (u.d(1), (u = null));
    },
    d(r) {
      r && v(t), u && u.d();
    },
  };
}
function Pe(e) {
  let t, u, r;
  return {
    c() {
      (t = p("img")),
        g(t, "class", "pagefind-ui__result-image svelte-j9e30"),
        ce(t.src, (u = e[1].meta?.image)) || g(t, "src", u),
        g(t, "alt", (r = e[1].meta?.image_alt || e[1].meta?.title));
    },
    m(s, l) {
      T(s, t, l);
    },
    p(s, l) {
      l & 2 && !ce(t.src, (u = s[1].meta?.image)) && g(t, "src", u),
        l & 2 &&
          r !== (r = s[1].meta?.image_alt || s[1].meta?.title) &&
          g(t, "alt", r);
    },
    d(s) {
      s && v(t);
    },
  };
}
function xe(e) {
  let t,
    u = e[2],
    r = [];
  for (let s = 0; s < u.length; s += 1) r[s] = qe(Ue(e, u, s));
  return {
    c() {
      t = p("ul");
      for (let s = 0; s < r.length; s += 1) r[s].c();
      g(t, "class", "pagefind-ui__result-tags svelte-j9e30");
    },
    m(s, l) {
      T(s, t, l);
      for (let a = 0; a < r.length; a += 1) r[a] && r[a].m(t, null);
    },
    p(s, l) {
      if (l & 4) {
        u = s[2];
        let a;
        for (a = 0; a < u.length; a += 1) {
          const n = Ue(s, u, a);
          r[a] ? r[a].p(n, l) : ((r[a] = qe(n)), r[a].c(), r[a].m(t, null));
        }
        for (; a < r.length; a += 1) r[a].d(1);
        r.length = u.length;
      }
    },
    d(s) {
      s && v(t), ie(r, s);
    },
  };
}
function qe(e) {
  let t,
    u = e[8].replace(/^(\w)/, Ve) + "",
    r,
    s,
    l = e[9] + "",
    a,
    n;
  return {
    c() {
      (t = p("li")),
        (r = S(u)),
        (s = S(": ")),
        (a = S(l)),
        (n = M()),
        g(t, "class", "pagefind-ui__result-tag svelte-j9e30");
    },
    m(i, d) {
      T(i, t, d), A(t, r), A(t, s), A(t, a), A(t, n);
    },
    p(i, d) {
      d & 4 && u !== (u = i[8].replace(/^(\w)/, Ve) + "") && j(r, u),
        d & 4 && l !== (l = i[9] + "") && j(a, l);
    },
    d(i) {
      i && v(t);
    },
  };
}
function ol(e) {
  let t;
  function u(l, a) {
    return l[1] ? il : nl;
  }
  let r = u(e),
    s = r(e);
  return {
    c() {
      (t = p("li")), s.c(), g(t, "class", "pagefind-ui__result svelte-j9e30");
    },
    m(l, a) {
      T(l, t, a), s.m(t, null);
    },
    p(l, [a]) {
      r === (r = u(l)) && s
        ? s.p(l, a)
        : (s.d(1), (s = r(l)), s && (s.c(), s.m(t, null)));
    },
    i: L,
    o: L,
    d(l) {
      l && v(t), s.d();
    },
  };
}
var Ve = (e) => e.toLocaleUpperCase();
function _l(e, t, u) {
  let { show_images: r = !0 } = t,
    { process_result: s = null } = t,
    { result: l = { data: async () => {} } } = t;
  const a = ["title", "image", "image_alt", "url"];
  let n,
    i = [];
  const d = async (h) => {
      u(1, (n = await h.data())),
        u(1, (n = s?.(n) ?? n)),
        u(2, (i = Object.entries(n.meta).filter(([m]) => !a.includes(m))));
    },
    _ = (h = 30) => ". ".repeat(Math.floor(10 + Math.random() * h));
  return (
    (e.$$set = (h) => {
      "show_images" in h && u(0, (r = h.show_images)),
        "process_result" in h && u(4, (s = h.process_result)),
        "result" in h && u(5, (l = h.result));
    }),
    (e.$$.update = () => {
      e.$$.dirty & 32 && d(l);
    }),
    [r, n, i, _, s, l]
  );
}
var cl = class extends me {
    constructor(e) {
      super(),
        he(this, e, _l, ol, fe, {
          show_images: 0,
          process_result: 4,
          result: 5,
        });
    }
  },
  fl = cl;
function Ke(e, t, u) {
  const r = e.slice();
  return (r[11] = t[u][0]), (r[12] = t[u][1]), r;
}
function Ge(e, t, u) {
  const r = e.slice();
  return (r[15] = t[u]), r;
}
function El(e) {
  let t,
    u,
    r,
    s,
    l,
    a = e[0] && We();
  return {
    c() {
      a && a.c(),
        (t = M()),
        (u = p("div")),
        (r = p("p")),
        (r.textContent = `${e[5](30)}`),
        (s = M()),
        (l = p("p")),
        (l.textContent = `${e[5](40)}`),
        g(
          r,
          "class",
          "pagefind-ui__result-title pagefind-ui__loading svelte-4xnkmf",
        ),
        g(
          l,
          "class",
          "pagefind-ui__result-excerpt pagefind-ui__loading svelte-4xnkmf",
        ),
        g(u, "class", "pagefind-ui__result-inner svelte-4xnkmf");
    },
    m(n, i) {
      a && a.m(n, i), T(n, t, i), T(n, u, i), A(u, r), A(u, s), A(u, l);
    },
    p(n, i) {
      n[0]
        ? a || ((a = We()), a.c(), a.m(t.parentNode, t))
        : a && (a.d(1), (a = null));
    },
    d(n) {
      a && a.d(n), n && v(t), n && v(u);
    },
  };
}
function dl(e) {
  let t,
    u,
    r,
    s,
    l = e[1].meta?.title + "",
    a,
    n,
    i,
    d,
    _,
    h = e[0] && Je(e),
    m = e[4] && Ye(e),
    f = e[3],
    c = [];
  for (let E = 0; E < f.length; E += 1) c[E] = Xe(Ge(e, f, E));
  let o = e[2].length && Qe(e);
  return {
    c() {
      h && h.c(),
        (t = M()),
        (u = p("div")),
        (r = p("p")),
        (s = p("a")),
        (a = S(l)),
        (i = M()),
        m && m.c(),
        (d = M());
      for (let E = 0; E < c.length; E += 1) c[E].c();
      (_ = M()),
        o && o.c(),
        g(s, "class", "pagefind-ui__result-link svelte-4xnkmf"),
        g(s, "href", (n = e[1].meta?.url || e[1].url)),
        g(r, "class", "pagefind-ui__result-title svelte-4xnkmf"),
        g(u, "class", "pagefind-ui__result-inner svelte-4xnkmf");
    },
    m(E, B) {
      h && h.m(E, B),
        T(E, t, B),
        T(E, u, B),
        A(u, r),
        A(r, s),
        A(s, a),
        A(u, i),
        m && m.m(u, null),
        A(u, d);
      for (let R = 0; R < c.length; R += 1) c[R] && c[R].m(u, null);
      A(u, _), o && o.m(u, null);
    },
    p(E, B) {
      if (
        (E[0]
          ? h
            ? h.p(E, B)
            : ((h = Je(E)), h.c(), h.m(t.parentNode, t))
          : h && (h.d(1), (h = null)),
        B & 2 && l !== (l = E[1].meta?.title + "") && j(a, l),
        B & 2 && n !== (n = E[1].meta?.url || E[1].url) && g(s, "href", n),
        E[4]
          ? m
            ? m.p(E, B)
            : ((m = Ye(E)), m.c(), m.m(u, d))
          : m && (m.d(1), (m = null)),
        B & 8)
      ) {
        f = E[3];
        let R;
        for (R = 0; R < f.length; R += 1) {
          const k = Ge(E, f, R);
          c[R] ? c[R].p(k, B) : ((c[R] = Xe(k)), c[R].c(), c[R].m(u, _));
        }
        for (; R < c.length; R += 1) c[R].d(1);
        c.length = f.length;
      }
      E[2].length
        ? o
          ? o.p(E, B)
          : ((o = Qe(E)), o.c(), o.m(u, null))
        : o && (o.d(1), (o = null));
    },
    d(E) {
      h && h.d(E), E && v(t), E && v(u), m && m.d(), ie(c, E), o && o.d();
    },
  };
}
function We(e) {
  let t;
  return {
    c() {
      (t = p("div")),
        g(
          t,
          "class",
          "pagefind-ui__result-thumb pagefind-ui__loading svelte-4xnkmf",
        );
    },
    m(u, r) {
      T(u, t, r);
    },
    d(u) {
      u && v(t);
    },
  };
}
function Je(e) {
  let t,
    u = e[1].meta.image && Ze(e);
  return {
    c() {
      (t = p("div")),
        u && u.c(),
        g(t, "class", "pagefind-ui__result-thumb svelte-4xnkmf");
    },
    m(r, s) {
      T(r, t, s), u && u.m(t, null);
    },
    p(r, s) {
      r[1].meta.image
        ? u
          ? u.p(r, s)
          : ((u = Ze(r)), u.c(), u.m(t, null))
        : u && (u.d(1), (u = null));
    },
    d(r) {
      r && v(t), u && u.d();
    },
  };
}
function Ze(e) {
  let t, u, r;
  return {
    c() {
      (t = p("img")),
        g(t, "class", "pagefind-ui__result-image svelte-4xnkmf"),
        ce(t.src, (u = e[1].meta?.image)) || g(t, "src", u),
        g(t, "alt", (r = e[1].meta?.image_alt || e[1].meta?.title));
    },
    m(s, l) {
      T(s, t, l);
    },
    p(s, l) {
      l & 2 && !ce(t.src, (u = s[1].meta?.image)) && g(t, "src", u),
        l & 2 &&
          r !== (r = s[1].meta?.image_alt || s[1].meta?.title) &&
          g(t, "alt", r);
    },
    d(s) {
      s && v(t);
    },
  };
}
function Ye(e) {
  let t,
    u = e[1].excerpt + "";
  return {
    c() {
      (t = p("p")), g(t, "class", "pagefind-ui__result-excerpt svelte-4xnkmf");
    },
    m(r, s) {
      T(r, t, s), (t.innerHTML = u);
    },
    p(r, s) {
      s & 2 && u !== (u = r[1].excerpt + "") && (t.innerHTML = u);
    },
    d(r) {
      r && v(t);
    },
  };
}
function Xe(e) {
  let t,
    u,
    r,
    s = e[15].title + "",
    l,
    a,
    n,
    i,
    d = e[15].excerpt + "";
  return {
    c() {
      (t = p("div")),
        (u = p("p")),
        (r = p("a")),
        (l = S(s)),
        (n = M()),
        (i = p("p")),
        g(r, "class", "pagefind-ui__result-link svelte-4xnkmf"),
        g(r, "href", (a = e[15].url)),
        g(u, "class", "pagefind-ui__result-title svelte-4xnkmf"),
        g(i, "class", "pagefind-ui__result-excerpt svelte-4xnkmf"),
        g(t, "class", "pagefind-ui__result-nested svelte-4xnkmf");
    },
    m(_, h) {
      T(_, t, h),
        A(t, u),
        A(u, r),
        A(r, l),
        A(t, n),
        A(t, i),
        (i.innerHTML = d);
    },
    p(_, h) {
      h & 8 && s !== (s = _[15].title + "") && j(l, s),
        h & 8 && a !== (a = _[15].url) && g(r, "href", a),
        h & 8 && d !== (d = _[15].excerpt + "") && (i.innerHTML = d);
    },
    d(_) {
      _ && v(t);
    },
  };
}
function Qe(e) {
  let t,
    u = e[2],
    r = [];
  for (let s = 0; s < u.length; s += 1) r[s] = $e(Ke(e, u, s));
  return {
    c() {
      t = p("ul");
      for (let s = 0; s < r.length; s += 1) r[s].c();
      g(t, "class", "pagefind-ui__result-tags svelte-4xnkmf");
    },
    m(s, l) {
      T(s, t, l);
      for (let a = 0; a < r.length; a += 1) r[a] && r[a].m(t, null);
    },
    p(s, l) {
      if (l & 4) {
        u = s[2];
        let a;
        for (a = 0; a < u.length; a += 1) {
          const n = Ke(s, u, a);
          r[a] ? r[a].p(n, l) : ((r[a] = $e(n)), r[a].c(), r[a].m(t, null));
        }
        for (; a < r.length; a += 1) r[a].d(1);
        r.length = u.length;
      }
    },
    d(s) {
      s && v(t), ie(r, s);
    },
  };
}
function $e(e) {
  let t,
    u = e[11].replace(/^(\w)/, eu) + "",
    r,
    s,
    l = e[12] + "",
    a,
    n;
  return {
    c() {
      (t = p("li")),
        (r = S(u)),
        (s = S(": ")),
        (a = S(l)),
        (n = M()),
        g(t, "class", "pagefind-ui__result-tag svelte-4xnkmf");
    },
    m(i, d) {
      T(i, t, d), A(t, r), A(t, s), A(t, a), A(t, n);
    },
    p(i, d) {
      d & 4 && u !== (u = i[11].replace(/^(\w)/, eu) + "") && j(r, u),
        d & 4 && l !== (l = i[12] + "") && j(a, l);
    },
    d(i) {
      i && v(t);
    },
  };
}
function hl(e) {
  let t;
  function u(l, a) {
    return l[1] ? dl : El;
  }
  let r = u(e),
    s = r(e);
  return {
    c() {
      (t = p("li")), s.c(), g(t, "class", "pagefind-ui__result svelte-4xnkmf");
    },
    m(l, a) {
      T(l, t, a), s.m(t, null);
    },
    p(l, [a]) {
      r === (r = u(l)) && s
        ? s.p(l, a)
        : (s.d(1), (s = r(l)), s && (s.c(), s.m(t, null)));
    },
    i: L,
    o: L,
    d(l) {
      l && v(t), s.d();
    },
  };
}
var eu = (e) => e.toLocaleUpperCase();
function ml(e, t, u) {
  let { show_images: r = !0 } = t,
    { process_result: s = null } = t,
    { result: l = { data: async () => {} } } = t;
  const a = ["title", "image", "image_alt", "url"];
  let n,
    i = [],
    d = [],
    _ = !1;
  const h = (c, o) => {
      if (c.length <= o) return c;
      const E = [...c]
        .sort((B, R) => R.locations.length - B.locations.length)
        .slice(0, 3)
        .map((B) => B.url);
      return c.filter((B) => E.includes(B.url));
    },
    m = async (c) => {
      u(1, (n = await c.data())),
        u(1, (n = s?.(n) ?? n)),
        u(2, (i = Object.entries(n.meta).filter(([o]) => !a.includes(o)))),
        Array.isArray(n.sub_results) &&
          (u(4, (_ = n.sub_results?.[0]?.url === (n.meta?.url || n.url))),
          _
            ? u(3, (d = h(n.sub_results.slice(1), 3)))
            : u(3, (d = h([...n.sub_results], 3))));
    },
    f = (c = 30) => ". ".repeat(Math.floor(10 + Math.random() * c));
  return (
    (e.$$set = (c) => {
      "show_images" in c && u(0, (r = c.show_images)),
        "process_result" in c && u(6, (s = c.process_result)),
        "result" in c && u(7, (l = c.result));
    }),
    (e.$$.update = () => {
      e.$$.dirty & 128 && m(l);
    }),
    [r, n, i, d, _, f, s, l]
  );
}
var Cl = class extends me {
    constructor(e) {
      super(),
        he(this, e, ml, hl, fe, {
          show_images: 0,
          process_result: 6,
          result: 7,
        });
    }
  },
  gl = Cl;
function uu(e, t, u) {
  const r = e.slice();
  return (r[10] = t[u][0]), (r[11] = t[u][1]), (r[12] = t), (r[13] = u), r;
}
function tu(e, t, u) {
  const r = e.slice();
  return (r[14] = t[u][0]), (r[15] = t[u][1]), (r[16] = t), (r[17] = u), r;
}
function ru(e) {
  let t,
    u,
    r = e[4]("filters_label", e[5], e[6]) + "",
    s,
    l,
    a = Object.entries(e[1]),
    n = [];
  for (let i = 0; i < a.length; i += 1) n[i] = au(uu(e, a, i));
  return {
    c() {
      (t = p("fieldset")), (u = p("legend")), (s = S(r)), (l = M());
      for (let i = 0; i < n.length; i += 1) n[i].c();
      g(u, "class", "pagefind-ui__filter-panel-label svelte-1v2r7ls"),
        g(t, "class", "pagefind-ui__filter-panel svelte-1v2r7ls");
    },
    m(i, d) {
      T(i, t, d), A(t, u), A(u, s), A(t, l);
      for (let _ = 0; _ < n.length; _ += 1) n[_] && n[_].m(t, null);
    },
    p(i, d) {
      if (
        (d & 112 &&
          r !== (r = i[4]("filters_label", i[5], i[6]) + "") &&
          j(s, r),
        d & 143)
      ) {
        a = Object.entries(i[1]);
        let _;
        for (_ = 0; _ < a.length; _ += 1) {
          const h = uu(i, a, _);
          n[_] ? n[_].p(h, d) : ((n[_] = au(h)), n[_].c(), n[_].m(t, null));
        }
        for (; _ < n.length; _ += 1) n[_].d(1);
        n.length = a.length;
      }
    },
    d(i) {
      i && v(t), ie(n, i);
    },
  };
}
function su(e) {
  let t,
    u,
    r,
    s,
    l,
    a,
    n,
    i,
    d = e[14] + "",
    _,
    h = e[15] + "",
    m,
    f,
    c,
    o,
    E,
    B;
  function R() {
    e[9].call(u, e[10], e[14]);
  }
  return {
    c() {
      (t = p("div")),
        (u = p("input")),
        (a = M()),
        (n = p("label")),
        (i = new Ws(!1)),
        (_ = S(" (")),
        (m = S(h)),
        (f = S(")")),
        (o = M()),
        g(u, "class", "pagefind-ui__filter-checkbox svelte-1v2r7ls"),
        g(u, "type", "checkbox"),
        g(u, "id", (r = e[10] + "-" + e[14])),
        g(u, "name", (s = e[10])),
        (u.__value = l = e[14]),
        (u.value = u.__value),
        (i.a = _),
        g(n, "class", "pagefind-ui__filter-label svelte-1v2r7ls"),
        g(n, "for", (c = e[10] + "-" + e[14])),
        g(t, "class", "pagefind-ui__filter-value svelte-1v2r7ls"),
        K(t, "pagefind-ui__filter-value--checked", e[0][`${e[10]}:${e[14]}`]);
    },
    m(k, y) {
      T(k, t, y),
        A(t, u),
        (u.checked = e[0][`${e[10]}:${e[14]}`]),
        A(t, a),
        A(t, n),
        i.m(d, n),
        A(n, _),
        A(n, m),
        A(n, f),
        A(t, o),
        E || ((B = G(u, "change", R)), (E = !0));
    },
    p(k, y) {
      (e = k),
        y & 2 && r !== (r = e[10] + "-" + e[14]) && g(u, "id", r),
        y & 2 && s !== (s = e[10]) && g(u, "name", s),
        y & 2 && l !== (l = e[14]) && ((u.__value = l), (u.value = u.__value)),
        y & 3 && (u.checked = e[0][`${e[10]}:${e[14]}`]),
        y & 2 && d !== (d = e[14] + "") && i.p(d),
        y & 2 && h !== (h = e[15] + "") && j(m, h),
        y & 2 && c !== (c = e[10] + "-" + e[14]) && g(n, "for", c),
        y & 3 &&
          K(t, "pagefind-ui__filter-value--checked", e[0][`${e[10]}:${e[14]}`]);
    },
    d(k) {
      k && v(t), (E = !1), B();
    },
  };
}
function lu(e) {
  let t,
    u = (e[2] || e[15] || e[0][`${e[10]}:${e[14]}`]) && su(e);
  return {
    c() {
      u && u.c(), (t = ee());
    },
    m(r, s) {
      u && u.m(r, s), T(r, t, s);
    },
    p(r, s) {
      r[2] || r[15] || r[0][`${r[10]}:${r[14]}`]
        ? u
          ? u.p(r, s)
          : ((u = su(r)), u.c(), u.m(t.parentNode, t))
        : u && (u.d(1), (u = null));
    },
    d(r) {
      u && u.d(r), r && v(t);
    },
  };
}
function au(e) {
  let t,
    u,
    r = e[10].replace(/^(\w)/, nu) + "",
    s,
    l,
    a,
    n = e[10] + "",
    i,
    d,
    _,
    h = Object.entries(e[11] || {}),
    m = [];
  for (let f = 0; f < h.length; f += 1) m[f] = lu(tu(e, h, f));
  return {
    c() {
      (t = p("details")),
        (u = p("summary")),
        (s = M()),
        (l = p("fieldset")),
        (a = p("legend")),
        (i = M());
      for (let f = 0; f < m.length; f += 1) m[f].c();
      (d = M()),
        g(u, "class", "pagefind-ui__filter-name svelte-1v2r7ls"),
        g(a, "class", "pagefind-ui__filter-group-label svelte-1v2r7ls"),
        g(l, "class", "pagefind-ui__filter-group svelte-1v2r7ls"),
        g(t, "class", "pagefind-ui__filter-block svelte-1v2r7ls"),
        (t.open = _ = e[7] || e[3].map(iu).includes(e[10].toLowerCase()));
    },
    m(f, c) {
      T(f, t, c),
        A(t, u),
        (u.innerHTML = r),
        A(t, s),
        A(t, l),
        A(l, a),
        (a.innerHTML = n),
        A(l, i);
      for (let o = 0; o < m.length; o += 1) m[o] && m[o].m(l, null);
      A(t, d);
    },
    p(f, c) {
      if (
        (c & 2 &&
          r !== (r = f[10].replace(/^(\w)/, nu) + "") &&
          (u.innerHTML = r),
        c & 2 && n !== (n = f[10] + "") && (a.innerHTML = n),
        c & 7)
      ) {
        h = Object.entries(f[11] || {});
        let o;
        for (o = 0; o < h.length; o += 1) {
          const E = tu(f, h, o);
          m[o] ? m[o].p(E, c) : ((m[o] = lu(E)), m[o].c(), m[o].m(l, null));
        }
        for (; o < m.length; o += 1) m[o].d(1);
        m.length = h.length;
      }
      c & 138 &&
        _ !== (_ = f[7] || f[3].map(iu).includes(f[10].toLowerCase())) &&
        (t.open = _);
    },
    d(f) {
      f && v(t), ie(m, f);
    },
  };
}
function Rl(e) {
  let t = e[1] && Object.entries(e[1]).length,
    u,
    r = t && ru(e);
  return {
    c() {
      r && r.c(), (u = ee());
    },
    m(s, l) {
      r && r.m(s, l), T(s, u, l);
    },
    p(s, [l]) {
      l & 2 && (t = s[1] && Object.entries(s[1]).length),
        t
          ? r
            ? r.p(s, l)
            : ((r = ru(s)), r.c(), r.m(u.parentNode, u))
          : r && (r.d(1), (r = null));
    },
    i: L,
    o: L,
    d(s) {
      r && r.d(s), s && v(u);
    },
  };
}
var nu = (e) => e.toLocaleUpperCase(),
  iu = (e) => e.toLowerCase();
function Bl(e, t, u) {
  let { available_filters: r = null } = t,
    { show_empty_filters: s = !0 } = t,
    { open_filters: l = [] } = t,
    { translate: a = () => "" } = t,
    { automatic_translations: n = {} } = t,
    { translations: i = {} } = t,
    { selected_filters: d = {} } = t,
    _ = !1,
    h = !1;
  function m(f, c) {
    (d[`${f}:${c}`] = this.checked), u(0, d);
  }
  return (
    (e.$$set = (f) => {
      "available_filters" in f && u(1, (r = f.available_filters)),
        "show_empty_filters" in f && u(2, (s = f.show_empty_filters)),
        "open_filters" in f && u(3, (l = f.open_filters)),
        "translate" in f && u(4, (a = f.translate)),
        "automatic_translations" in f && u(5, (n = f.automatic_translations)),
        "translations" in f && u(6, (i = f.translations)),
        "selected_filters" in f && u(0, (d = f.selected_filters));
    }),
    (e.$$.update = () => {
      if (e.$$.dirty & 258 && r && !_) {
        u(8, (_ = !0));
        let f = Object.entries(r || {});
        f.length === 1 &&
          Object.entries(f[0][1])?.length <= 6 &&
          u(7, (h = !0));
      }
    }),
    [d, r, s, l, a, n, i, h, _, m]
  );
}
var Al = class extends me {
    constructor(e) {
      super(),
        he(this, e, Bl, Rl, fe, {
          available_filters: 1,
          show_empty_filters: 2,
          open_filters: 3,
          translate: 4,
          automatic_translations: 5,
          translations: 6,
          selected_filters: 0,
        });
    }
  },
  pl = Al,
  Bu = {};
F(Bu, {
  comments: () => pu,
  default: () => vl,
  direction: () => vu,
  strings: () => Tu,
  thanks_to: () => Au,
});
var Au = "Jan Claasen <jan@cloudcannon.com>",
  pu = "",
  vu = "ltr",
  Tu = {
    placeholder: "Soek",
    clear_search: "Opruim",
    load_more: "Laai nog resultate",
    search_label: "Soek hierdie webwerf",
    filters_label: "Filters",
    zero_results: "Geen resultate vir [SEARCH_TERM]",
    many_results: "[COUNT] resultate vir [SEARCH_TERM]",
    one_result: "[COUNT] resultate vir [SEARCH_TERM]",
    alt_search:
      "Geen resultate vir [SEARCH_TERM]. Toon resultate vir [DIFFERENT_TERM] in plaas daarvan",
    search_suggestion:
      "Geen resultate vir [SEARCH_TERM]. Probeer eerder een van die volgende terme:",
    searching: "Soek vir [SEARCH_TERM]",
  },
  vl = { thanks_to: Au, comments: pu, direction: vu, strings: Tu },
  Fu = {};
F(Fu, {
  comments: () => bu,
  default: () => Tl,
  direction: () => Mu,
  strings: () => Su,
  thanks_to: () => ku,
});
var ku = "Maruf Alom <mail@marufalom.com>",
  bu = "",
  Mu = "ltr",
  Su = {
    placeholder: "অনুসন্ধান করুন",
    clear_search: "মুছে ফেলুন",
    load_more: "আরো ফলাফল দেখুন",
    search_label: "এই ওয়েবসাইটে অনুসন্ধান করুন",
    filters_label: "ফিল্টার",
    zero_results: "[SEARCH_TERM] এর জন্য কিছু খুঁজে পাওয়া যায়নি",
    many_results: "[COUNT]-টি ফলাফল পাওয়া গিয়েছে [SEARCH_TERM] এর জন্য",
    one_result: "[COUNT]-টি ফলাফল পাওয়া গিয়েছে [SEARCH_TERM] এর জন্য",
    alt_search:
      "কোন কিছু খুঁজে পাওয়া যায়নি [SEARCH_TERM] এর জন্য. পরিবর্তে [DIFFERENT_TERM] এর জন্য দেখানো হচ্ছে",
    search_suggestion:
      "কোন কিছু খুঁজে পাওয়া যায়নি [SEARCH_TERM] এর বিষয়ে. নিন্মের বিষয়বস্তু খুঁজে দেখুন:",
    searching: "অনুসন্ধান চলছে [SEARCH_TERM]...",
  },
  Tl = { thanks_to: ku, comments: bu, direction: Mu, strings: Su },
  Du = {};
F(Du, {
  comments: () => wu,
  default: () => Fl,
  direction: () => Nu,
  strings: () => yu,
  thanks_to: () => Hu,
});
var Hu = "Pablo Villaverde <https://github.com/pvillaverde>",
  wu = "",
  Nu = "ltr",
  yu = {
    placeholder: "Cerca",
    clear_search: "Netejar",
    load_more: "Veure mées resultats",
    search_label: "Cerca en aquest lloc",
    filters_label: "Filtres",
    zero_results: "No es van trobar resultats per [SEARCH_TERM]",
    many_results: "[COUNT] resultats trobats per [SEARCH_TERM]",
    one_result: "[COUNT] resultat trobat per [SEARCH_TERM]",
    alt_search:
      "No es van trobar resultats per [SEARCH_TERM]. Mostrant al seu lloc resultats per [DIFFERENT_TERM]",
    search_suggestion:
      "No es van trobar resultats per [SEARCH_TERM]. Proveu una de les cerques següents:",
    searching: "Cercant [SEARCH_TERM]...",
  },
  Fl = { thanks_to: Hu, comments: wu, direction: Nu, strings: yu },
  zu = {};
F(zu, {
  comments: () => Ou,
  default: () => kl,
  direction: () => Uu,
  strings: () => Iu,
  thanks_to: () => ju,
});
var ju = "Dalibor Hon <https://github.com/dallyh>",
  Ou = "",
  Uu = "ltr",
  Iu = {
    placeholder: "Hledat",
    clear_search: "Smazat",
    load_more: "Načíst další výsledky",
    search_label: "Prohledat tuto stránku",
    filters_label: "Filtry",
    zero_results: "Žádné výsledky pro [SEARCH_TERM]",
    many_results: "[COUNT] výsledků pro [SEARCH_TERM]",
    one_result: "[COUNT] výsledek pro [SEARCH_TERM]",
    alt_search:
      "Žádné výsledky pro [SEARCH_TERM]. Zobrazují se výsledky pro [DIFFERENT_TERM]",
    search_suggestion:
      "Žádné výsledky pro [SEARCH_TERM]. Související výsledky hledání:",
    searching: "Hledám [SEARCH_TERM]...",
  },
  kl = { thanks_to: ju, comments: Ou, direction: Uu, strings: Iu },
  Lu = {};
F(Lu, {
  comments: () => xu,
  default: () => bl,
  direction: () => qu,
  strings: () => Vu,
  thanks_to: () => Pu,
});
var Pu = "Jonas Smedegaard <dr@jones.dk>",
  xu = "",
  qu = "ltr",
  Vu = {
    placeholder: "Søg",
    clear_search: "Nulstil",
    load_more: "Indlæs flere resultater",
    search_label: "Søg på dette website",
    filters_label: "Filtre",
    zero_results: "Ingen resultater for [SEARCH_TERM]",
    many_results: "[COUNT] resultater for [SEARCH_TERM]",
    one_result: "[COUNT] resultat for [SEARCH_TERM]",
    alt_search:
      "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet",
    search_suggestion:
      "Ingen resultater for [SEARCH_TERM]. Prøv et af disse søgeord i stedet:",
    searching: "Søger efter [SEARCH_TERM]...",
  },
  bl = { thanks_to: Pu, comments: xu, direction: qu, strings: Vu },
  Ku = {};
F(Ku, {
  comments: () => Wu,
  default: () => Ml,
  direction: () => Ju,
  strings: () => Zu,
  thanks_to: () => Gu,
});
var Gu = "Jan Claasen <jan@cloudcannon.com>",
  Wu = "",
  Ju = "ltr",
  Zu = {
    placeholder: "Suche",
    clear_search: "Löschen",
    load_more: "Mehr Ergebnisse laden",
    search_label: "Suche diese Seite",
    filters_label: "Filter",
    zero_results: "Keine Ergebnisse für [SEARCH_TERM]",
    many_results: "[COUNT] Ergebnisse für [SEARCH_TERM]",
    one_result: "[COUNT] Ergebnis für [SEARCH_TERM]",
    alt_search:
      "Keine Ergebnisse für [SEARCH_TERM]. Stattdessen werden Ergebnisse für [DIFFERENT_TERM] angezeigt",
    search_suggestion:
      "Keine Ergebnisse für [SEARCH_TERM]. Versuchen Sie eine der folgenden Suchen:",
    searching: "Suche für [SEARCH_TERM]",
  },
  Ml = { thanks_to: Gu, comments: Wu, direction: Ju, strings: Zu },
  Yu = {};
F(Yu, {
  comments: () => Qu,
  default: () => Sl,
  direction: () => $u,
  strings: () => et,
  thanks_to: () => Xu,
});
var Xu = "Liam Bigelow <liam@cloudcannon.com>",
  Qu = "",
  $u = "ltr",
  et = {
    placeholder: "Search",
    clear_search: "Clear",
    load_more: "Load more results",
    search_label: "Search this site",
    filters_label: "Filters",
    zero_results: "No results for [SEARCH_TERM]",
    many_results: "[COUNT] results for [SEARCH_TERM]",
    one_result: "[COUNT] result for [SEARCH_TERM]",
    alt_search:
      "No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead",
    search_suggestion:
      "No results for [SEARCH_TERM]. Try one of the following searches:",
    searching: "Searching for [SEARCH_TERM]...",
  },
  Sl = { thanks_to: Xu, comments: Qu, direction: $u, strings: et },
  ut = {};
F(ut, {
  comments: () => rt,
  default: () => Dl,
  direction: () => st,
  strings: () => lt,
  thanks_to: () => tt,
});
var tt = "Pablo Villaverde <https://github.com/pvillaverde>",
  rt = "",
  st = "ltr",
  lt = {
    placeholder: "Buscar",
    clear_search: "Limpiar",
    load_more: "Ver más resultados",
    search_label: "Buscar en este sitio",
    filters_label: "Filtros",
    zero_results: "No se encontraron resultados para [SEARCH_TERM]",
    many_results: "[COUNT] resultados encontrados para [SEARCH_TERM]",
    one_result: "[COUNT] resultado encontrado para [SEARCH_TERM]",
    alt_search:
      "No se encontraron resultados para [SEARCH_TERM]. Mostrando en su lugar resultados para [DIFFERENT_TERM]",
    search_suggestion:
      "No se encontraron resultados para [SEARCH_TERM]. Prueba una de las siguientes búsquedas:",
    searching: "Buscando [SEARCH_TERM]...",
  },
  Dl = { thanks_to: tt, comments: rt, direction: st, strings: lt },
  at = {};
F(at, {
  comments: () => it,
  default: () => Hl,
  direction: () => ot,
  strings: () => _t,
  thanks_to: () => nt,
});
var nt = "Valtteri Laitinen <dev@valtlai.fi>",
  it = "",
  ot = "ltr",
  _t = {
    placeholder: "Haku",
    clear_search: "Tyhjennä",
    load_more: "Lataa lisää tuloksia",
    search_label: "Hae tältä sivustolta",
    filters_label: "Suodattimet",
    zero_results: "Ei tuloksia haulle [SEARCH_TERM]",
    many_results: "[COUNT] tulosta haulle [SEARCH_TERM]",
    one_result: "[COUNT] tulos haulle [SEARCH_TERM]",
    alt_search:
      "Ei tuloksia haulle [SEARCH_TERM]. Näytetään tulokset sen sijaan haulle [DIFFERENT_TERM]",
    search_suggestion:
      "Ei tuloksia haulle [SEARCH_TERM]. Kokeile jotain seuraavista:",
    searching: "Haetaan [SEARCH_TERM]...",
  },
  Hl = { thanks_to: nt, comments: it, direction: ot, strings: _t },
  ct = {};
F(ct, {
  comments: () => Et,
  default: () => wl,
  direction: () => dt,
  strings: () => ht,
  thanks_to: () => ft,
});
var ft = "Nicolas Friedli <nicolas@theologique.ch>",
  Et = "",
  dt = "ltr",
  ht = {
    placeholder: "Rechercher",
    clear_search: "Nettoyer",
    load_more: "Charger plus de résultats",
    search_label: "Recherche sur ce site",
    filters_label: "Filtres",
    zero_results: "Pas de résultat pour [SEARCH_TERM]",
    many_results: "[COUNT] résultats pour [SEARCH_TERM]",
    one_result: "[COUNT] résultat pour [SEARCH_TERM]",
    alt_search:
      "Pas de résultat pour [SEARCH_TERM]. Montre les résultats pour [DIFFERENT_TERM] à la place",
    search_suggestion:
      "Pas de résultat pour [SEARCH_TERM]. Essayer une des recherches suivantes:",
    searching: "Recherche [SEARCH_TERM]...",
  },
  wl = { thanks_to: ft, comments: Et, direction: dt, strings: ht },
  mt = {};
F(mt, {
  comments: () => gt,
  default: () => Nl,
  direction: () => Rt,
  strings: () => Bt,
  thanks_to: () => Ct,
});
var Ct = "Pablo Villaverde <https://github.com/pvillaverde>",
  gt = "",
  Rt = "ltr",
  Bt = {
    placeholder: "Buscar",
    clear_search: "Limpar",
    load_more: "Ver máis resultados",
    search_label: "Buscar neste sitio",
    filters_label: "Filtros",
    zero_results: "Non se atoparon resultados para [SEARCH_TERM]",
    many_results: "[COUNT] resultados atopados para [SEARCH_TERM]",
    one_result: "[COUNT] resultado atopado para [SEARCH_TERM]",
    alt_search:
      "Non se atoparon resultados para [SEARCH_TERM]. Amosando no seu lugar resultados para [DIFFERENT_TERM]",
    search_suggestion:
      "Non se atoparon resultados para [SEARCH_TERM]. Probe unha das seguintes pesquisas:",
    searching: "Buscando [SEARCH_TERM]...",
  },
  Nl = { thanks_to: Ct, comments: gt, direction: Rt, strings: Bt },
  At = {};
F(At, {
  comments: () => vt,
  default: () => yl,
  direction: () => Tt,
  strings: () => Ft,
  thanks_to: () => pt,
});
var pt = "Amit Yadav <amit@thetechbasket.com>",
  vt = "",
  Tt = "ltr",
  Ft = {
    placeholder: "खोजें",
    clear_search: "साफ करें",
    load_more: "और अधिक परिणाम लोड करें",
    search_label: "इस साइट में खोजें",
    filters_label: "फ़िल्टर",
    zero_results: "कोई परिणाम [SEARCH_TERM] के लिए नहीं मिला",
    many_results: "[COUNT] परिणाम [SEARCH_TERM] के लिए मिले",
    one_result: "[COUNT] परिणाम [SEARCH_TERM] के लिए मिला",
    alt_search:
      "[SEARCH_TERM] के लिए कोई परिणाम नहीं मिला। इसके बजाय [DIFFERENT_TERM] के लिए परिणाम दिखा रहा है",
    search_suggestion:
      "[SEARCH_TERM] के लिए कोई परिणाम नहीं मिला। निम्नलिखित खोजों में से कोई एक आज़माएं:",
    searching: "[SEARCH_TERM] की खोज की जा रही है...",
  },
  yl = { thanks_to: pt, comments: vt, direction: Tt, strings: Ft },
  kt = {};
F(kt, {
  comments: () => Mt,
  default: () => zl,
  direction: () => St,
  strings: () => Dt,
  thanks_to: () => bt,
});
var bt = "Diomed <https://github.com/diomed>",
  Mt = "",
  St = "ltr",
  Dt = {
    placeholder: "Traži",
    clear_search: "Očisti",
    load_more: "Učitaj više rezultata",
    search_label: "Pretraži ovu stranicu",
    filters_label: "Filteri",
    zero_results: "Nema rezultata za [SEARCH_TERM]",
    many_results: "[COUNT] rezultata za [SEARCH_TERM]",
    one_result: "[COUNT] rezultat za [SEARCH_TERM]",
    alt_search:
      "Nema rezultata za [SEARCH_TERM]. Prikazujem rezultate za [DIFFERENT_TERM]",
    search_suggestion:
      "Nema rezultata za [SEARCH_TERM]. Pokušaj s jednom od ovih pretraga:",
    searching: "Pretražujem [SEARCH_TERM]...",
  },
  zl = { thanks_to: bt, comments: Mt, direction: St, strings: Dt },
  Ht = {};
F(Ht, {
  comments: () => Nt,
  default: () => jl,
  direction: () => yt,
  strings: () => zt,
  thanks_to: () => wt,
});
var wt = "Adam Laki <info@adamlaki.com>",
  Nt = "",
  yt = "ltr",
  zt = {
    placeholder: "Keresés",
    clear_search: "Törlés",
    load_more: "További találatok betöltése",
    search_label: "Keresés az oldalon",
    filters_label: "Szűrés",
    zero_results: "Nincs találat a(z) [SEARCH_TERM] kifejezésre",
    many_results: "[COUNT] db találat a(z) [SEARCH_TERM] kifejezésre",
    one_result: "[COUNT] db találat a(z) [SEARCH_TERM] kifejezésre",
    alt_search:
      "Nincs találat a(z) [SEARCH_TERM] kifejezésre. Találatok mutatása inkább a(z) [DIFFERENT_TERM] kifejezésre",
    search_suggestion:
      "Nincs találat a(z) [SEARCH_TERM] kifejezésre. Próbáld meg a következő keresések egyikét:",
    searching: "Keresés a(z) [SEARCH_TERM] kifejezésre...",
  },
  jl = { thanks_to: wt, comments: Nt, direction: yt, strings: zt },
  jt = {};
F(jt, {
  comments: () => Ut,
  default: () => Ol,
  direction: () => It,
  strings: () => Lt,
  thanks_to: () => Ot,
});
var Ot = "Nixentric",
  Ut = "",
  It = "ltr",
  Lt = {
    placeholder: "Cari",
    clear_search: "Bersihkan",
    load_more: "Muat lebih banyak hasil",
    search_label: "Telusuri situs ini",
    filters_label: "Filter",
    zero_results: "[SEARCH_TERM] tidak ditemukan",
    many_results: "Ditemukan [COUNT] hasil untuk [SEARCH_TERM]",
    one_result: "Ditemukan [COUNT] hasil untuk [SEARCH_TERM]",
    alt_search:
      "[SEARCH_TERM] tidak ditemukan. Menampilkan hasil [DIFFERENT_TERM] sebagai gantinya",
    search_suggestion:
      "[SEARCH_TERM] tidak ditemukan. Coba salah satu pencarian berikut ini:",
    searching: "Mencari [SEARCH_TERM]...",
  },
  Ol = { thanks_to: Ot, comments: Ut, direction: It, strings: Lt },
  Pt = {};
F(Pt, {
  comments: () => qt,
  default: () => Ul,
  direction: () => Vt,
  strings: () => Kt,
  thanks_to: () => xt,
});
var xt = "Cosette Bruhns Alonso, Andrew Janco <apjanco@upenn.edu>",
  qt = "",
  Vt = "ltr",
  Kt = {
    placeholder: "Cerca",
    clear_search: "Cancella la cronologia",
    load_more: "Mostra più risultati",
    search_label: "Cerca nel sito",
    filters_label: "Filtri di ricerca",
    zero_results: "Nessun risultato per [SEARCH_TERM]",
    many_results: "[COUNT] risultati per [SEARCH_TERM]",
    one_result: "[COUNT] risultato per [SEARCH_TERM]",
    alt_search:
      "Nessun risultato per [SEARCH_TERM]. Mostrando risultati per [DIFFERENT_TERM] come alternativa.",
    search_suggestion:
      "Nessun risultato per [SEARCH_TERM]. Prova una delle seguenti ricerche:",
    searching: "Cercando [SEARCH_TERM]...",
  },
  Ul = { thanks_to: xt, comments: qt, direction: Vt, strings: Kt },
  Gt = {};
F(Gt, {
  comments: () => Jt,
  default: () => Il,
  direction: () => Zt,
  strings: () => Yt,
  thanks_to: () => Wt,
});
var Wt = "Tate",
  Jt = "",
  Zt = "ltr",
  Yt = {
    placeholder: "検索",
    clear_search: "クリア",
    load_more: "次を読み込む",
    search_label: "このサイトを検索",
    filters_label: "フィルタ",
    zero_results: "[SEARCH_TERM]の検索に一致する情報はありませんでした",
    many_results: "[SEARCH_TERM]の[COUNT]件の検索結果",
    one_result: "[SEARCH_TERM]の[COUNT]件の検索結果",
    alt_search:
      "[SEARCH_TERM]の検索に一致する情報はありませんでした。[DIFFERENT_TERM]の検索結果を表示しています",
    search_suggestion:
      "[SEARCH_TERM]の検索に一致する情報はありませんでした。次のいずれかの検索を試してください",
    searching: "[SEARCH_TERM]を検索しています",
  },
  Il = { thanks_to: Wt, comments: Jt, direction: Zt, strings: Yt },
  Xt = {};
F(Xt, {
  comments: () => $t,
  default: () => Ll,
  direction: () => er,
  strings: () => ur,
  thanks_to: () => Qt,
});
var Qt = "Seokho Son <https://github.com/seokho-son>",
  $t = "",
  er = "ltr",
  ur = {
    placeholder: "검색어",
    clear_search: "비우기",
    load_more: "검색 결과 더 보기",
    search_label: "사이트 검색",
    filters_label: "필터",
    zero_results: "[SEARCH_TERM]에 대한 결과 없음",
    many_results: "[SEARCH_TERM]에 대한 결과 [COUNT]건",
    one_result: "[SEARCH_TERM]에 대한 결과 [COUNT]건",
    alt_search: "[SEARCH_TERM]에 대한 결과 없음. [DIFFERENT_TERM]에 대한 결과",
    search_suggestion: "[SEARCH_TERM]에 대한 결과 없음. 추천 검색어: ",
    searching: "[SEARCH_TERM] 검색 중...",
  },
  Ll = { thanks_to: Qt, comments: $t, direction: er, strings: ur },
  tr = {};
F(tr, {
  comments: () => sr,
  default: () => Pl,
  direction: () => lr,
  strings: () => ar,
  thanks_to: () => rr,
});
var rr = "",
  sr = "",
  lr = "ltr",
  ar = {
    placeholder: "Rapu",
    clear_search: "Whakakore",
    load_more: "Whakauta ētahi otinga kē",
    search_label: "Rapu",
    filters_label: "Tātari",
    zero_results: "Otinga kore ki [SEARCH_TERM]",
    many_results: "[COUNT] otinga ki [SEARCH_TERM]",
    one_result: "[COUNT] otinga ki [SEARCH_TERM]",
    alt_search: "Otinga kore ki [SEARCH_TERM]. Otinga kē ki [DIFFERENT_TERM]",
    search_suggestion:
      "Otinga kore ki [SEARCH_TERM]. whakamātau ki ngā mea atu:",
    searching: "Rapu ki [SEARCH_TERM]...",
  },
  Pl = { thanks_to: rr, comments: sr, direction: lr, strings: ar },
  nr = {};
F(nr, {
  comments: () => or,
  default: () => xl,
  direction: () => _r,
  strings: () => cr,
  thanks_to: () => ir,
});
var ir = "Paul van Brouwershaven",
  or = "",
  _r = "ltr",
  cr = {
    placeholder: "Zoeken",
    clear_search: "Reset",
    load_more: "Meer resultaten laden",
    search_label: "Doorzoek deze site",
    filters_label: "Filters",
    zero_results: "Geen resultaten voor [SEARCH_TERM]",
    many_results: "[COUNT] resultaten voor [SEARCH_TERM]",
    one_result: "[COUNT] resultaat voor [SEARCH_TERM]",
    alt_search:
      "Geen resultaten voor [SEARCH_TERM]. In plaats daarvan worden resultaten voor [DIFFERENT_TERM] weergegeven",
    search_suggestion:
      "Geen resultaten voor [SEARCH_TERM]. Probeer een van de volgende zoekopdrachten:",
    searching: "Zoeken naar [SEARCH_TERM]...",
  },
  xl = { thanks_to: ir, comments: or, direction: _r, strings: cr },
  fr = {};
F(fr, {
  comments: () => dr,
  default: () => ql,
  direction: () => hr,
  strings: () => mr,
  thanks_to: () => Er,
});
var Er = "Christopher Wingate",
  dr = "",
  hr = "ltr",
  mr = {
    placeholder: "Søk",
    clear_search: "Fjern",
    load_more: "Last flere resultater",
    search_label: "Søk på denne siden",
    filters_label: "Filtre",
    zero_results: "Ingen resultater for [SEARCH_TERM]",
    many_results: "[COUNT] resultater for [SEARCH_TERM]",
    one_result: "[COUNT] resultat for [SEARCH_TERM]",
    alt_search:
      "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet",
    search_suggestion:
      "Ingen resultater for [SEARCH_TERM]. Prøv en av disse søkeordene i stedet:",
    searching: "Søker etter [SEARCH_TERM]",
  },
  ql = { thanks_to: Er, comments: dr, direction: hr, strings: mr },
  Cr = {};
F(Cr, {
  comments: () => Rr,
  default: () => Vl,
  direction: () => Br,
  strings: () => Ar,
  thanks_to: () => gr,
});
var gr = "",
  Rr = "",
  Br = "ltr",
  Ar = {
    placeholder: "Szukaj",
    clear_search: "Wyczyść",
    load_more: "Załaduj więcej",
    search_label: "Przeszukaj tę stronę",
    filters_label: "Filtry",
    zero_results: "Brak wyników dla [SEARCH_TERM]",
    many_results: "[COUNT] wyników dla [SEARCH_TERM]",
    one_result: "[COUNT] wynik dla [SEARCH_TERM]",
    alt_search:
      "Brak wyników dla [SEARCH_TERM]. Wyświetlam wyniki dla [DIFFERENT_TERM]",
    search_suggestion:
      "Brak wyników dla [SEARCH_TERM]. Pokrewne wyniki wyszukiwania:",
    searching: "Szukam [SEARCH_TERM]...",
  },
  Vl = { thanks_to: gr, comments: Rr, direction: Br, strings: Ar },
  pr = {};
F(pr, {
  comments: () => Tr,
  default: () => Kl,
  direction: () => Fr,
  strings: () => kr,
  thanks_to: () => vr,
});
var vr = "Jonatah",
  Tr = "",
  Fr = "ltr",
  kr = {
    placeholder: "Pesquisar",
    clear_search: "Limpar",
    load_more: "Ver mais resultados",
    search_label: "Pesquisar",
    filters_label: "Filtros",
    zero_results: "Nenhum resultado encontrado para [SEARCH_TERM]",
    many_results: "[COUNT] resultados encontrados para [SEARCH_TERM]",
    one_result: "[COUNT] resultado encontrado para [SEARCH_TERM]",
    alt_search:
      "Nenhum resultado encontrado para [SEARCH_TERM]. Exibindo resultados para [DIFFERENT_TERM]",
    search_suggestion:
      "Nenhum resultado encontrado para [SEARCH_TERM]. Tente uma das seguintes pesquisas:",
    searching: "Pesquisando por [SEARCH_TERM]...",
  },
  Kl = { thanks_to: vr, comments: Tr, direction: Fr, strings: kr },
  br = {};
F(br, {
  comments: () => Sr,
  default: () => Gl,
  direction: () => Dr,
  strings: () => Hr,
  thanks_to: () => Mr,
});
var Mr = "Bogdan Mateescu <bogdan@surfverse.com>",
  Sr = "",
  Dr = "ltr",
  Hr = {
    placeholder: "Căutare",
    clear_search: "Ştergeţi",
    load_more: "Încărcați mai multe rezultate",
    search_label: "Căutați în acest site",
    filters_label: "Filtre",
    zero_results: "Niciun rezultat pentru [SEARCH_TERM]",
    many_results: "[COUNT] rezultate pentru [SEARCH_TERM]",
    one_result: "[COUNT] rezultat pentru [SEARCH_TERM]",
    alt_search:
      "Niciun rezultat pentru [SEARCH_TERM]. Se afișează în schimb rezultatele pentru [DIFFERENT_TERM]",
    search_suggestion:
      "Niciun rezultat pentru [SEARCH_TERM]. Încercați una dintre următoarele căutări:",
    searching: "Se caută după: [SEARCH_TERM]...",
  },
  Gl = { thanks_to: Mr, comments: Sr, direction: Dr, strings: Hr },
  wr = {};
F(wr, {
  comments: () => yr,
  default: () => Wl,
  direction: () => zr,
  strings: () => jr,
  thanks_to: () => Nr,
});
var Nr = "Aleksandr Gordeev",
  yr = "",
  zr = "ltr",
  jr = {
    placeholder: "Поиск",
    clear_search: "Очистить поле",
    load_more: "Загрузить еще",
    search_label: "Поиск по сайту",
    filters_label: "Фильтры",
    zero_results: "Ничего не найдено по запросу: [SEARCH_TERM]",
    many_results: "[COUNT] результатов по запросу: [SEARCH_TERM]",
    one_result: "[COUNT] результат по запросу: [SEARCH_TERM]",
    alt_search:
      "Ничего не найдено по запросу: [SEARCH_TERM]. Показаны результаты по запросу: [DIFFERENT_TERM]",
    search_suggestion:
      "Ничего не найдено по запросу: [SEARCH_TERM]. Попробуйте один из следующих вариантов",
    searching: "Поиск по запросу: [SEARCH_TERM]",
  },
  Wl = { thanks_to: Nr, comments: yr, direction: zr, strings: jr },
  Or = {};
F(Or, {
  comments: () => Ir,
  default: () => Jl,
  direction: () => Lr,
  strings: () => Pr,
  thanks_to: () => Ur,
});
var Ur = "Andrija Sagicc",
  Ir = "",
  Lr = "ltr",
  Pr = {
    placeholder: "Претрага",
    clear_search: "Брисање",
    load_more: "Приказ више резултата",
    search_label: "Претрага сајта",
    filters_label: "Филтери",
    zero_results: "Нема резултата за [SEARCH_TERM]",
    many_results: "[COUNT] резултата за [SEARCH_TERM]",
    one_result: "[COUNT] резултата за [SEARCH_TERM]",
    alt_search:
      "Нема резултата за [SEARCH_TERM]. Приказ додатник резултата за [DIFFERENT_TERM]",
    search_suggestion:
      "Нема резултата за [SEARCH_TERM]. Покушајте са неком од следећих претрага:",
    searching: "Претрага термина [SEARCH_TERM]...",
  },
  Jl = { thanks_to: Ur, comments: Ir, direction: Lr, strings: Pr },
  xr = {};
F(xr, {
  comments: () => Vr,
  default: () => Zl,
  direction: () => Kr,
  strings: () => Gr,
  thanks_to: () => qr,
});
var qr = "Montazar Al-Jaber <montazar@nanawee.tech>",
  Vr = "",
  Kr = "ltr",
  Gr = {
    placeholder: "Sök",
    clear_search: "Rensa",
    load_more: "Visa fler träffar",
    search_label: "Sök på denna sida",
    filters_label: "Filter",
    zero_results: "[SEARCH_TERM] gav inga träffar",
    many_results: "[SEARCH_TERM] gav [COUNT] träffar",
    one_result: "[SEARCH_TERM] gav [COUNT] träff",
    alt_search:
      "[SEARCH_TERM] gav inga träffar. Visar resultat för [DIFFERENT_TERM] istället",
    search_suggestion:
      "[SEARCH_TERM] gav inga träffar. Försök igen med en av följande sökord:",
    searching: "Söker efter [SEARCH_TERM]...",
  },
  Zl = { thanks_to: qr, comments: Vr, direction: Kr, strings: Gr },
  Wr = {};
F(Wr, {
  comments: () => Zr,
  default: () => Yl,
  direction: () => Yr,
  strings: () => Xr,
  thanks_to: () => Jr,
});
var Jr = "",
  Zr = "",
  Yr = "ltr",
  Xr = {
    placeholder: "தேடுக",
    clear_search: "அழிக்குக",
    load_more: "மேலும் முடிவுகளைக் காட்டுக",
    search_label: "இந்த தளத்தில் தேடுக",
    filters_label: "வடிகட்டல்கள்",
    zero_results: "[SEARCH_TERM] க்கான முடிவுகள் இல்லை",
    many_results: "[SEARCH_TERM] க்கான [COUNT] முடிவுகள்",
    one_result: "[SEARCH_TERM] க்கான முடிவு",
    alt_search:
      "[SEARCH_TERM] இத்தேடலுக்கான முடிவுகள் இல்லை, இந்த தேடல்களுக்கான ஒத்த முடிவுகள் [DIFFERENT_TERM]",
    search_suggestion:
      "[SEARCH_TERM] இத் தேடலுக்கான முடிவுகள் இல்லை.இதற்கு பதிலீடான தேடல்களை தேடுக:",
    searching: "[SEARCH_TERM] தேடப்படுகின்றது",
  },
  Yl = { thanks_to: Jr, comments: Zr, direction: Yr, strings: Xr },
  Qr = {};
F(Qr, {
  comments: () => es,
  default: () => Xl,
  direction: () => us,
  strings: () => ts,
  thanks_to: () => $r,
});
var $r = "Taylan Özgür Bildik",
  es = "",
  us = "ltr",
  ts = {
    placeholder: "Araştır",
    clear_search: "Temizle",
    load_more: "Daha fazla sonuç",
    search_label: "Site genelinde arama",
    filters_label: "Filtreler",
    zero_results: "[SEARCH_TERM] için sonuç yok",
    many_results: "[SEARCH_TERM] için [COUNT] sonuç bulundu",
    one_result: "[SEARCH_TERM] için [COUNT] sonuç bulundu",
    alt_search:
      "[SEARCH_TERM] için sonuç yok. Bunun yerine [DIFFERENT_TERM] için sonuçlar gösteriliyor",
    search_suggestion:
      "[SEARCH_TERM] için sonuç yok. Alternatif olarak aşağıdaki kelimelerden birini deneyebilirsiniz:",
    searching: "[SEARCH_TERM] araştırılıyor...",
  },
  Xl = { thanks_to: $r, comments: es, direction: us, strings: ts },
  rs = {};
F(rs, {
  comments: () => ls,
  default: () => Ql,
  direction: () => as,
  strings: () => ns,
  thanks_to: () => ss,
});
var ss = "Vladyslav Lyshenko <vladdnepr1989@gmail.com>",
  ls = "",
  as = "ltr",
  ns = {
    placeholder: "Пошук",
    clear_search: "Очистити поле",
    load_more: "Завантажити ще",
    search_label: "Пошук по сайту",
    filters_label: "Фільтри",
    zero_results: "Нічого не знайдено за запитом: [SEARCH_TERM]",
    many_results: "[COUNT] результатів на запит: [SEARCH_TERM]",
    one_result: "[COUNT] результат за запитом: [SEARCH_TERM]",
    alt_search:
      "Нічого не знайдено на запит: [SEARCH_TERM]. Показано результати на запит: [DIFFERENT_TERM]",
    search_suggestion:
      "Нічого не знайдено на запит: [SEARCH_TERM]. Спробуйте один із таких варіантів",
    searching: "Пошук за запитом: [SEARCH_TERM]",
  },
  Ql = { thanks_to: ss, comments: ls, direction: as, strings: ns },
  is = {};
F(is, {
  comments: () => _s,
  default: () => $l,
  direction: () => cs,
  strings: () => fs,
  thanks_to: () => os,
});
var os = "Long Nhat Nguyen",
  _s = "",
  cs = "ltr",
  fs = {
    placeholder: "Tìm kiếm",
    clear_search: "Xóa",
    load_more: "Nhiều kết quả hơn",
    search_label: "Tìm kiếm trong trang này",
    filters_label: "Bộ lọc",
    zero_results: "Không tìm thấy kết quả cho [SEARCH_TERM]",
    many_results: "[COUNT] kết quả cho [SEARCH_TERM]",
    one_result: "[COUNT] kết quả cho [SEARCH_TERM]",
    alt_search:
      "Không tìm thấy kết quả cho [SEARCH_TERM]. Kiểm thị kết quả thay thế với [DIFFERENT_TERM]",
    search_suggestion:
      "Không tìm thấy kết quả cho [SEARCH_TERM]. Thử một trong các tìm kiếm:",
    searching: "Đang tìm kiếm cho [SEARCH_TERM]...",
  },
  $l = { thanks_to: os, comments: _s, direction: cs, strings: fs },
  Es = {};
F(Es, {
  comments: () => hs,
  default: () => ea,
  direction: () => ms,
  strings: () => Cs,
  thanks_to: () => ds,
});
var ds = "Amber Song",
  hs = "",
  ms = "ltr",
  Cs = {
    placeholder: "搜索",
    clear_search: "清除",
    load_more: "加载更多结果",
    search_label: "站内搜索",
    filters_label: "筛选",
    zero_results: "未找到 [SEARCH_TERM] 的相关结果",
    many_results: "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果",
    one_result: "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果",
    alt_search:
      "未找到 [SEARCH_TERM] 的相关结果。改为显示 [DIFFERENT_TERM] 的相关结果",
    search_suggestion: "未找到 [SEARCH_TERM] 的相关结果。请尝试以下搜索。",
    searching: "正在搜索 [SEARCH_TERM]...",
  },
  ea = { thanks_to: ds, comments: hs, direction: ms, strings: Cs },
  gs = {};
F(gs, {
  comments: () => Bs,
  default: () => ua,
  direction: () => As,
  strings: () => ps,
  thanks_to: () => Rs,
});
var Rs = "Amber Song",
  Bs = "",
  As = "ltr",
  ps = {
    placeholder: "搜索",
    clear_search: "清除",
    load_more: "加載更多結果",
    search_label: "站內搜索",
    filters_label: "篩選",
    zero_results: "未找到 [SEARCH_TERM] 的相關結果",
    many_results: "找到 [COUNT] 個 [SEARCH_TERM] 的相關結果",
    one_result: "找到 [COUNT] 個 [SEARCH_TERM] 的相關結果",
    alt_search:
      "未找到 [SEARCH_TERM] 的相關結果。改為顯示 [DIFFERENT_TERM] 的相關結果",
    search_suggestion: "未找到 [SEARCH_TERM] 的相關結果。請嘗試以下搜索。",
    searching: "正在搜索 [SEARCH_TERM]...",
  },
  ua = { thanks_to: Rs, comments: Bs, direction: As, strings: ps },
  vs = {};
F(vs, {
  comments: () => Fs,
  default: () => ta,
  direction: () => ks,
  strings: () => bs,
  thanks_to: () => Ts,
});
var Ts = "Amber Song",
  Fs = "",
  ks = "ltr",
  bs = {
    placeholder: "搜索",
    clear_search: "清除",
    load_more: "加载更多结果",
    search_label: "站内搜索",
    filters_label: "筛选",
    zero_results: "未找到 [SEARCH_TERM] 的相关结果",
    many_results: "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果",
    one_result: "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果",
    alt_search:
      "未找到 [SEARCH_TERM] 的相关结果。改为显示 [DIFFERENT_TERM] 的相关结果",
    search_suggestion: "未找到 [SEARCH_TERM] 的相关结果。请尝试以下搜索。",
    searching: "正在搜索 [SEARCH_TERM]...",
  },
  ta = { thanks_to: Ts, comments: Fs, direction: ks, strings: bs },
  ra = [
    Bu,
    Fu,
    Du,
    zu,
    Lu,
    Ku,
    Yu,
    ut,
    at,
    ct,
    mt,
    At,
    kt,
    Ht,
    jt,
    Pt,
    Gt,
    Xt,
    tr,
    nr,
    fr,
    Cr,
    pr,
    br,
    wr,
    Or,
    xr,
    Wr,
    Qr,
    rs,
    is,
    Es,
    gs,
    vs,
  ],
  sa = ra,
  la = [
    "../../translations/af.json",
    "../../translations/bn.json",
    "../../translations/ca.json",
    "../../translations/cs.json",
    "../../translations/da.json",
    "../../translations/de.json",
    "../../translations/en.json",
    "../../translations/es.json",
    "../../translations/fi.json",
    "../../translations/fr.json",
    "../../translations/gl.json",
    "../../translations/hi.json",
    "../../translations/hr.json",
    "../../translations/hu.json",
    "../../translations/id.json",
    "../../translations/it.json",
    "../../translations/ja.json",
    "../../translations/ko.json",
    "../../translations/mi.json",
    "../../translations/nl.json",
    "../../translations/no.json",
    "../../translations/pl.json",
    "../../translations/pt.json",
    "../../translations/ro.json",
    "../../translations/ru.json",
    "../../translations/sr.json",
    "../../translations/sv.json",
    "../../translations/ta.json",
    "../../translations/tr.json",
    "../../translations/uk.json",
    "../../translations/vi.json",
    "../../translations/zh-cn.json",
    "../../translations/zh-tw.json",
    "../../translations/zh.json",
  ];
function ou(e, t, u) {
  const r = e.slice();
  return (r[51] = t[u]), r;
}
function _u(e) {
  let t, u, r;
  function s(a) {
    e[37](a);
  }
  let l = {
    show_empty_filters: e[5],
    open_filters: e[6],
    available_filters: e[18],
    translate: e[20],
    automatic_translations: e[19],
    translations: e[7],
  };
  return (
    e[0] !== void 0 && (l.selected_filters = e[0]),
    (t = new pl({ props: l })),
    le.push(() => rl(t, "selected_filters", s)),
    {
      c() {
        ke(t.$$.fragment);
      },
      m(a, n) {
        Ee(t, a, n), (r = !0);
      },
      p(a, n) {
        const i = {};
        n[0] & 32 && (i.show_empty_filters = a[5]),
          n[0] & 64 && (i.open_filters = a[6]),
          n[0] & 262144 && (i.available_filters = a[18]),
          n[0] & 524288 && (i.automatic_translations = a[19]),
          n[0] & 128 && (i.translations = a[7]),
          !u &&
            n[0] & 1 &&
            ((u = !0), (i.selected_filters = a[0]), Qs(() => (u = !1))),
          t.$set(i);
      },
      i(a) {
        r || (z(t.$$.fragment, a), (r = !0));
      },
      o(a) {
        U(t.$$.fragment, a), (r = !1);
      },
      d(a) {
        de(t, a);
      },
    }
  );
}
function cu(e) {
  let t, u, r, s;
  const l = [na, aa],
    a = [];
  function n(i, d) {
    return i[14] ? 0 : 1;
  }
  return (
    (u = n(e)),
    (r = a[u] = l[u](e)),
    {
      c() {
        (t = p("div")),
          r.c(),
          g(t, "class", "pagefind-ui__results-area svelte-e9gkc3");
      },
      m(i, d) {
        T(i, t, d), a[u].m(t, null), (s = !0);
      },
      p(i, d) {
        let _ = u;
        (u = n(i)),
          u === _
            ? a[u].p(i, d)
            : (ae(),
              U(a[_], 1, 1, () => {
                a[_] = null;
              }),
              ne(),
              (r = a[u]),
              r ? r.p(i, d) : ((r = a[u] = l[u](i)), r.c()),
              z(r, 1),
              r.m(t, null));
      },
      i(i) {
        s || (z(r), (s = !0));
      },
      o(i) {
        U(r), (s = !1);
      },
      d(i) {
        i && v(t), a[u].d();
      },
    }
  );
}
function aa(e) {
  let t,
    u,
    r,
    s = [],
    l = new Map(),
    a,
    n,
    i;
  function d(o, E) {
    return o[13].results.length === 0
      ? _a
      : o[13].results.length === 1
        ? oa
        : ia;
  }
  let _ = d(e),
    h = _(e),
    m = e[13].results.slice(0, e[17]);
  const f = (o) => o[51].id;
  for (let o = 0; o < m.length; o += 1) {
    let E = ou(e, m, o),
      B = f(E);
    l.set(B, (s[o] = fu(B, E)));
  }
  let c = e[13].results.length > e[17] && Eu(e);
  return {
    c() {
      (t = p("p")), h.c(), (u = M()), (r = p("ol"));
      for (let o = 0; o < s.length; o += 1) s[o].c();
      (a = M()),
        c && c.c(),
        (n = ee()),
        g(t, "class", "pagefind-ui__message svelte-e9gkc3"),
        g(r, "class", "pagefind-ui__results svelte-e9gkc3");
    },
    m(o, E) {
      T(o, t, E), h.m(t, null), T(o, u, E), T(o, r, E);
      for (let B = 0; B < s.length; B += 1) s[B] && s[B].m(r, null);
      T(o, a, E), c && c.m(o, E), T(o, n, E), (i = !0);
    },
    p(o, E) {
      _ === (_ = d(o)) && h
        ? h.p(o, E)
        : (h.d(1), (h = _(o)), h && (h.c(), h.m(t, null))),
        E[0] & 139292 &&
          ((m = o[13].results.slice(0, o[17])),
          ae(),
          (s = tl(s, E, f, 1, o, m, l, r, ul, fu, null, ou)),
          ne()),
        o[13].results.length > o[17]
          ? c
            ? c.p(o, E)
            : ((c = Eu(o)), c.c(), c.m(n.parentNode, n))
          : c && (c.d(1), (c = null));
    },
    i(o) {
      if (!i) {
        for (let E = 0; E < m.length; E += 1) z(s[E]);
        i = !0;
      }
    },
    o(o) {
      for (let E = 0; E < s.length; E += 1) U(s[E]);
      i = !1;
    },
    d(o) {
      o && v(t), h.d(), o && v(u), o && v(r);
      for (let E = 0; E < s.length; E += 1) s[E].d();
      o && v(a), c && c.d(o), o && v(n);
    },
  };
}
function na(e) {
  let t,
    u = e[16] && du(e);
  return {
    c() {
      u && u.c(), (t = ee());
    },
    m(r, s) {
      u && u.m(r, s), T(r, t, s);
    },
    p(r, s) {
      r[16]
        ? u
          ? u.p(r, s)
          : ((u = du(r)), u.c(), u.m(t.parentNode, t))
        : u && (u.d(1), (u = null));
    },
    i: L,
    o: L,
    d(r) {
      u && u.d(r), r && v(t);
    },
  };
}
function ia(e) {
  let t =
      e[20]("many_results", e[19], e[7])
        .replace(/\[SEARCH_TERM\]/, e[16])
        .replace(
          /\[COUNT\]/,
          new Intl.NumberFormat(e[7].language).format(e[13].results.length),
        ) + "",
    u;
  return {
    c() {
      u = S(t);
    },
    m(r, s) {
      T(r, u, s);
    },
    p(r, s) {
      s[0] & 598144 &&
        t !==
          (t =
            r[20]("many_results", r[19], r[7])
              .replace(/\[SEARCH_TERM\]/, r[16])
              .replace(
                /\[COUNT\]/,
                new Intl.NumberFormat(r[7].language).format(
                  r[13].results.length,
                ),
              ) + "") &&
        j(u, t);
    },
    d(r) {
      r && v(u);
    },
  };
}
function oa(e) {
  let t =
      e[20]("one_result", e[19], e[7])
        .replace(/\[SEARCH_TERM\]/, e[16])
        .replace(/\[COUNT\]/, new Intl.NumberFormat(e[7].language).format(1)) +
      "",
    u;
  return {
    c() {
      u = S(t);
    },
    m(r, s) {
      T(r, u, s);
    },
    p(r, s) {
      s[0] & 589952 &&
        t !==
          (t =
            r[20]("one_result", r[19], r[7])
              .replace(/\[SEARCH_TERM\]/, r[16])
              .replace(
                /\[COUNT\]/,
                new Intl.NumberFormat(r[7].language).format(1),
              ) + "") &&
        j(u, t);
    },
    d(r) {
      r && v(u);
    },
  };
}
function _a(e) {
  let t =
      e[20]("zero_results", e[19], e[7]).replace(/\[SEARCH_TERM\]/, e[16]) + "",
    u;
  return {
    c() {
      u = S(t);
    },
    m(r, s) {
      T(r, u, s);
    },
    p(r, s) {
      s[0] & 589952 &&
        t !==
          (t =
            r[20]("zero_results", r[19], r[7]).replace(
              /\[SEARCH_TERM\]/,
              r[16],
            ) + "") &&
        j(u, t);
    },
    d(r) {
      r && v(u);
    },
  };
}
function ca(e) {
  let t, u;
  return (
    (t = new fl({
      props: { show_images: e[2], process_result: e[4], result: e[51] },
    })),
    {
      c() {
        ke(t.$$.fragment);
      },
      m(r, s) {
        Ee(t, r, s), (u = !0);
      },
      p(r, s) {
        const l = {};
        s[0] & 4 && (l.show_images = r[2]),
          s[0] & 16 && (l.process_result = r[4]),
          s[0] & 139264 && (l.result = r[51]),
          t.$set(l);
      },
      i(r) {
        u || (z(t.$$.fragment, r), (u = !0));
      },
      o(r) {
        U(t.$$.fragment, r), (u = !1);
      },
      d(r) {
        de(t, r);
      },
    }
  );
}
function fa(e) {
  let t, u;
  return (
    (t = new gl({
      props: { show_images: e[2], process_result: e[4], result: e[51] },
    })),
    {
      c() {
        ke(t.$$.fragment);
      },
      m(r, s) {
        Ee(t, r, s), (u = !0);
      },
      p(r, s) {
        const l = {};
        s[0] & 4 && (l.show_images = r[2]),
          s[0] & 16 && (l.process_result = r[4]),
          s[0] & 139264 && (l.result = r[51]),
          t.$set(l);
      },
      i(r) {
        u || (z(t.$$.fragment, r), (u = !0));
      },
      o(r) {
        U(t.$$.fragment, r), (u = !1);
      },
      d(r) {
        de(t, r);
      },
    }
  );
}
function fu(e, t) {
  let u, r, s, l, a;
  const n = [fa, ca],
    i = [];
  function d(_, h) {
    return _[3] ? 0 : 1;
  }
  return (
    (r = d(t)),
    (s = i[r] = n[r](t)),
    {
      key: e,
      first: null,
      c() {
        (u = ee()), s.c(), (l = ee()), (this.first = u);
      },
      m(_, h) {
        T(_, u, h), i[r].m(_, h), T(_, l, h), (a = !0);
      },
      p(_, h) {
        t = _;
        let m = r;
        (r = d(t)),
          r === m
            ? i[r].p(t, h)
            : (ae(),
              U(i[m], 1, 1, () => {
                i[m] = null;
              }),
              ne(),
              (s = i[r]),
              s ? s.p(t, h) : ((s = i[r] = n[r](t)), s.c()),
              z(s, 1),
              s.m(l.parentNode, l));
      },
      i(_) {
        a || (z(s), (a = !0));
      },
      o(_) {
        U(s), (a = !1);
      },
      d(_) {
        _ && v(u), i[r].d(_), _ && v(l);
      },
    }
  );
}
function Eu(e) {
  let t,
    u = e[20]("load_more", e[19], e[7]) + "",
    r,
    s,
    l;
  return {
    c() {
      (t = p("button")),
        (r = S(u)),
        g(t, "type", "button"),
        g(t, "class", "pagefind-ui__button svelte-e9gkc3");
    },
    m(a, n) {
      T(a, t, n), A(t, r), s || ((l = G(t, "click", e[22])), (s = !0));
    },
    p(a, n) {
      n[0] & 524416 &&
        u !== (u = a[20]("load_more", a[19], a[7]) + "") &&
        j(r, u);
    },
    d(a) {
      a && v(t), (s = !1), l();
    },
  };
}
function du(e) {
  let t,
    u = e[20]("searching", e[19], e[7]).replace(/\[SEARCH_TERM\]/, e[16]) + "",
    r;
  return {
    c() {
      (t = p("p")),
        (r = S(u)),
        g(t, "class", "pagefind-ui__message svelte-e9gkc3");
    },
    m(s, l) {
      T(s, t, l), A(t, r);
    },
    p(s, l) {
      l[0] & 589952 &&
        u !==
          (u =
            s[20]("searching", s[19], s[7]).replace(/\[SEARCH_TERM\]/, s[16]) +
            "") &&
        j(r, u);
    },
    d(s) {
      s && v(t);
    },
  };
}
function Ea(e) {
  let t,
    u,
    r,
    s,
    l,
    a,
    n = e[20]("clear_search", e[19], e[7]) + "",
    i,
    d,
    _,
    h,
    m,
    f,
    c,
    o,
    E = e[12] && _u(e),
    B = e[15] && cu(e);
  return {
    c() {
      (t = p("div")),
        (u = p("form")),
        (r = p("input")),
        (l = M()),
        (a = p("button")),
        (i = S(n)),
        (d = M()),
        (_ = p("div")),
        E && E.c(),
        (h = M()),
        B && B.c(),
        g(r, "class", "pagefind-ui__search-input svelte-e9gkc3"),
        g(r, "type", "text"),
        g(r, "placeholder", (s = e[20]("placeholder", e[19], e[7]))),
        g(r, "autocapitalize", "none"),
        g(r, "enterkeyhint", "search"),
        (r.autofocus = e[8]),
        g(a, "class", "pagefind-ui__search-clear svelte-e9gkc3"),
        K(a, "pagefind-ui__suppressed", !e[9]),
        g(_, "class", "pagefind-ui__drawer svelte-e9gkc3"),
        K(_, "pagefind-ui__hidden", !e[15]),
        g(u, "class", "pagefind-ui__form svelte-e9gkc3"),
        g(u, "role", "search"),
        g(u, "aria-label", (m = e[20]("search_label", e[19], e[7]))),
        g(u, "action", "javascript:void(0);"),
        g(t, "class", "pagefind-ui svelte-e9gkc3"),
        K(t, "pagefind-ui--reset", e[1]);
    },
    m(R, k) {
      T(R, t, k),
        A(t, u),
        A(u, r),
        ze(r, e[9]),
        e[34](r),
        A(u, l),
        A(u, a),
        A(a, i),
        e[35](a),
        A(u, d),
        A(u, _),
        E && E.m(_, null),
        A(_, h),
        B && B.m(_, null),
        (f = !0),
        e[8] && r.focus(),
        c ||
          ((o = [
            G(r, "focus", e[21]),
            G(r, "keydown", e[32]),
            G(r, "input", e[33]),
            G(a, "click", e[36]),
            G(u, "submit", da),
          ]),
          (c = !0));
    },
    p(R, k) {
      (!f ||
        (k[0] & 524416 && s !== (s = R[20]("placeholder", R[19], R[7])))) &&
        g(r, "placeholder", s),
        (!f || k[0] & 256) && (r.autofocus = R[8]),
        k[0] & 512 && r.value !== R[9] && ze(r, R[9]),
        (!f || k[0] & 524416) &&
          n !== (n = R[20]("clear_search", R[19], R[7]) + "") &&
          j(i, n),
        (!f || k[0] & 512) && K(a, "pagefind-ui__suppressed", !R[9]),
        R[12]
          ? E
            ? (E.p(R, k), k[0] & 4096 && z(E, 1))
            : ((E = _u(R)), E.c(), z(E, 1), E.m(_, h))
          : E &&
            (ae(),
            U(E, 1, 1, () => {
              E = null;
            }),
            ne()),
        R[15]
          ? B
            ? (B.p(R, k), k[0] & 32768 && z(B, 1))
            : ((B = cu(R)), B.c(), z(B, 1), B.m(_, null))
          : B &&
            (ae(),
            U(B, 1, 1, () => {
              B = null;
            }),
            ne()),
        (!f || k[0] & 32768) && K(_, "pagefind-ui__hidden", !R[15]),
        (!f ||
          (k[0] & 524416 && m !== (m = R[20]("search_label", R[19], R[7])))) &&
          g(u, "aria-label", m),
        (!f || k[0] & 2) && K(t, "pagefind-ui--reset", R[1]);
    },
    i(R) {
      f || (z(E), z(B), (f = !0));
    },
    o(R) {
      U(E), U(B), (f = !1);
    },
    d(R) {
      R && v(t),
        e[34](null),
        e[35](null),
        E && E.d(),
        B && B.d(),
        (c = !1),
        J(o);
    },
  };
}
var da = (e) => e.preventDefault();
function ha(e, t, u) {
  const r = {},
    s = la.map((C) => C.match(/([^\/]+)\.json$/)[1]);
  for (let C = 0; C < s.length; C++)
    r[s[C]] = { language: s[C], ...sa[C].strings };
  let { base_path: l = "/pagefind/" } = t,
    { page_size: a = 5 } = t,
    { reset_styles: n = !0 } = t,
    { show_images: i = !0 } = t,
    { show_sub_results: d = !1 } = t,
    { excerpt_length: _ } = t,
    { process_result: h = null } = t,
    { process_term: m = null } = t,
    { show_empty_filters: f = !0 } = t,
    { open_filters: c = [] } = t,
    { debounce_timeout_ms: o = 300 } = t,
    { pagefind_options: E = {} } = t,
    { merge_index: B = [] } = t,
    { trigger_search_term: R = "" } = t,
    { translations: k = {} } = t,
    { autofocus: y = !1 } = t,
    { sort: q = null } = t,
    { selected_filters: P = {} } = t,
    b = "",
    D,
    w,
    x,
    Ms = 40,
    Ce = !1,
    be = [],
    ge = !1,
    Re = !1,
    Me = 0,
    Se = "",
    Be = a,
    De = null,
    ue = null,
    He = r.en;
  const Ss = (C, H, N) => N[C] ?? H[C] ?? "";
  Js(() => {
    let C = document?.querySelector?.("html")?.getAttribute?.("lang") || "en",
      H = Ru(C.toLocaleLowerCase());
    u(
      19,
      (He =
        r[`${H.language}-${H.script}-${H.region}`] ||
        r[`${H.language}-${H.region}`] ||
        r[`${H.language}`] ||
        r.en),
    );
  }),
    Zs(() => {
      D?.destroy?.(), (D = null);
    });
  const we = async () => {
      if (!Ce && (u(12, (Ce = !0)), !D)) {
        let C;
        try {
          C = await xs(() => import(`${l}pagefind.js`), []);
        } catch (N) {
          console.error(N),
            console.error(
              [
                `Pagefind couldn't be loaded from ${this.options.bundlePath}pagefind.js`,
                "You can configure this by passing a bundlePath option to PagefindUI",
                `[DEBUG: Loaded from ${document?.currentScript?.src ?? "no known script location"}]`,
              ].join(`
`),
            );
        }
        _ || u(24, (_ = d ? 12 : 30));
        let H = { ...(E || {}), excerptLength: _ };
        await C.options(H);
        for (const N of B) {
          if (!N.bundlePath)
            throw new Error("mergeIndex requires a bundlePath parameter");
          const I = N.bundlePath;
          delete N.bundlePath, await C.mergeIndex(I, N);
        }
        (D = C), Ds();
      }
    },
    Ds = async () => {
      D &&
        ((De = await D.filters()),
        (!ue || !Object.keys(ue).length) && u(18, (ue = De)));
    },
    Hs = (C) => {
      let H = {};
      return (
        Object.entries(C)
          .filter(([, N]) => N)
          .forEach(([N]) => {
            let [I, Z] = N.split(/:(.*)$/);
            (H[I] = H[I] || []), H[I].push(Z);
          }),
        H
      );
    };
  let te;
  const ws = async (C, H) => {
      if (!C) {
        u(15, (Re = !1)), te && clearTimeout(te);
        return;
      }
      const N = Hs(H),
        I = () => Ns(C, N);
      o > 0 && C
        ? (te && clearTimeout(te),
          (te = setTimeout(I, o)),
          await Ne(),
          D.preload(C, { filters: N }))
        : I(),
        ys();
    },
    Ne = async () => {
      for (; !D; ) we(), await new Promise((C) => setTimeout(C, 50));
    },
    Ns = async (C, H) => {
      u(16, (Se = C || "")),
        typeof m == "function" && (C = m(C)),
        u(14, (ge = !0)),
        u(15, (Re = !0)),
        await Ne();
      const N = ++Me,
        I = { filters: H };
      q && typeof q == "object" && (I.sort = q);
      const Z = await D.search(C, I);
      Me === N &&
        (Z.filters && Object.keys(Z.filters)?.length && u(18, (ue = Z.filters)),
        u(13, (be = Z)),
        u(14, (ge = !1)),
        u(17, (Be = a)));
    },
    ys = () => {
      const C = x.offsetWidth;
      C != Ms && u(10, (w.style.paddingRight = `${C + 2}px`), w);
    },
    zs = (C) => {
      C?.preventDefault(), u(17, (Be += a));
    },
    js = (C) => {
      C.key === "Escape" && (u(9, (b = "")), w.blur()),
        C.key === "Enter" && C.preventDefault();
    };
  function Os() {
    (b = this.value), u(9, b), u(23, R);
  }
  function Us(C) {
    le[C ? "unshift" : "push"](() => {
      (w = C), u(10, w);
    });
  }
  function Is(C) {
    le[C ? "unshift" : "push"](() => {
      (x = C), u(11, x);
    });
  }
  const Ls = () => {
    u(9, (b = "")), w.blur();
  };
  function Ps(C) {
    (P = C), u(0, P);
  }
  return (
    (e.$$set = (C) => {
      "base_path" in C && u(25, (l = C.base_path)),
        "page_size" in C && u(26, (a = C.page_size)),
        "reset_styles" in C && u(1, (n = C.reset_styles)),
        "show_images" in C && u(2, (i = C.show_images)),
        "show_sub_results" in C && u(3, (d = C.show_sub_results)),
        "excerpt_length" in C && u(24, (_ = C.excerpt_length)),
        "process_result" in C && u(4, (h = C.process_result)),
        "process_term" in C && u(27, (m = C.process_term)),
        "show_empty_filters" in C && u(5, (f = C.show_empty_filters)),
        "open_filters" in C && u(6, (c = C.open_filters)),
        "debounce_timeout_ms" in C && u(28, (o = C.debounce_timeout_ms)),
        "pagefind_options" in C && u(29, (E = C.pagefind_options)),
        "merge_index" in C && u(30, (B = C.merge_index)),
        "trigger_search_term" in C && u(23, (R = C.trigger_search_term)),
        "translations" in C && u(7, (k = C.translations)),
        "autofocus" in C && u(8, (y = C.autofocus)),
        "sort" in C && u(31, (q = C.sort)),
        "selected_filters" in C && u(0, (P = C.selected_filters));
    }),
    (e.$$.update = () => {
      e.$$.dirty[0] & 8388608 && R && (u(9, (b = R)), u(23, (R = ""))),
        e.$$.dirty[0] & 513 && ws(b, P);
    }),
    [
      P,
      n,
      i,
      d,
      h,
      f,
      c,
      k,
      y,
      b,
      w,
      x,
      Ce,
      be,
      ge,
      Re,
      Se,
      Be,
      ue,
      He,
      Ss,
      we,
      zs,
      R,
      _,
      l,
      a,
      m,
      o,
      E,
      B,
      q,
      js,
      Os,
      Us,
      Is,
      Ls,
      Ps,
    ]
  );
}
var ma = class extends me {
    constructor(e) {
      super(),
        he(
          this,
          e,
          ha,
          Ea,
          fe,
          {
            base_path: 25,
            page_size: 26,
            reset_styles: 1,
            show_images: 2,
            show_sub_results: 3,
            excerpt_length: 24,
            process_result: 4,
            process_term: 27,
            show_empty_filters: 5,
            open_filters: 6,
            debounce_timeout_ms: 28,
            pagefind_options: 29,
            merge_index: 30,
            trigger_search_term: 23,
            translations: 7,
            autofocus: 8,
            sort: 31,
            selected_filters: 0,
          },
          null,
          [-1, -1],
        );
    }
  },
  Ca = ma,
  Fe;
try {
  Fe = new URL(document.currentScript.src).pathname.match(
    /^(.*\/)(?:pagefind-)?ui.js.*$/,
  )[1];
} catch {
  Fe = "/pagefind/";
}
var Ba = class {
  constructor(e) {
    this._pfs = null;
    let t = e.element ?? "[data-pagefind-ui]",
      u = e.bundlePath ?? Fe,
      r = e.pageSize ?? 5,
      s = e.resetStyles ?? !0,
      l = e.showImages ?? !0,
      a = e.showSubResults ?? !1,
      n = e.excerptLength ?? 0,
      i = e.processResult ?? null,
      d = e.processTerm ?? null,
      _ = e.showEmptyFilters ?? !0,
      h = e.openFilters ?? [],
      m = e.debounceTimeoutMs ?? 300,
      f = e.mergeIndex ?? [],
      c = e.translations ?? [],
      o = e.autofocus ?? !1,
      E = e.sort ?? null;
    delete e.element,
      delete e.bundlePath,
      delete e.pageSize,
      delete e.resetStyles,
      delete e.showImages,
      delete e.showSubResults,
      delete e.excerptLength,
      delete e.processResult,
      delete e.processTerm,
      delete e.showEmptyFilters,
      delete e.openFilters,
      delete e.debounceTimeoutMs,
      delete e.mergeIndex,
      delete e.translations,
      delete e.autofocus,
      delete e.sort;
    const B = t instanceof HTMLElement ? t : document.querySelector(t);
    B
      ? (this._pfs = new Ca({
          target: B,
          props: {
            base_path: u,
            page_size: r,
            reset_styles: s,
            show_images: l,
            show_sub_results: a,
            excerpt_length: n,
            process_result: i,
            process_term: d,
            show_empty_filters: _,
            open_filters: h,
            debounce_timeout_ms: m,
            merge_index: f,
            translations: c,
            autofocus: o,
            sort: E,
            pagefind_options: e,
          },
        }))
      : console.error(`Pagefind UI couldn't find the selector ${t}`);
  }
  triggerSearch(e) {
    this._pfs.$$set({ trigger_search_term: e });
  }
  triggerFilters(e) {
    let t = {};
    for (let [u, r] of Object.entries(e))
      if (Array.isArray(r)) for (let s of r) t[`${u}:${s}`] = !0;
      else t[`${u}:${r}`] = !0;
    this._pfs.$$set({ selected_filters: t });
  }
  destroy() {
    this._pfs.$destroy();
  }
};
export { Ba as PagefindUI };
