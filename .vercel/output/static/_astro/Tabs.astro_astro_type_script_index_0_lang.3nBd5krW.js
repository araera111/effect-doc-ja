class r extends HTMLElement {
  static #e = new Map();
  #t;
  #n = "starlight-synced-tabs__";
  constructor() {
    super();
    const t = this.querySelector('[role="tablist"]');
    if (
      ((this.tabs = [...t.querySelectorAll('[role="tab"]')]),
      (this.panels = [...this.querySelectorAll(':scope > [role="tabpanel"]')]),
      (this.#t = this.dataset.syncKey),
      this.#t)
    ) {
      const i = r.#e.get(this.#t) ?? [];
      i.push(this), r.#e.set(this.#t, i);
    }
    this.tabs.forEach((i, c) => {
      i.addEventListener("click", (e) => {
        e.preventDefault();
        const n = t.querySelector('[aria-selected="true"]');
        e.currentTarget !== n && this.switchTab(e.currentTarget, c);
      }),
        i.addEventListener("keydown", (e) => {
          const n = this.tabs.indexOf(e.currentTarget),
            s =
              e.key === "ArrowLeft"
                ? n - 1
                : e.key === "ArrowRight"
                  ? n + 1
                  : e.key === "Home"
                    ? 0
                    : e.key === "End"
                      ? this.tabs.length - 1
                      : null;
          s !== null &&
            this.tabs[s] &&
            (e.preventDefault(), this.switchTab(this.tabs[s], s));
        });
    });
  }
  switchTab(t, i, c = !0) {
    if (!t) return;
    const e = c ? this.getBoundingClientRect().top : 0;
    this.tabs.forEach((s) => {
      s.setAttribute("aria-selected", "false"),
        s.setAttribute("tabindex", "-1");
    }),
      this.panels.forEach((s) => {
        s.hidden = !0;
      });
    const n = this.panels[i];
    n && (n.hidden = !1),
      t.removeAttribute("tabindex"),
      t.setAttribute("aria-selected", "true"),
      c &&
        (t.focus(),
        r.#r(this, t),
        window.scrollTo({
          top: window.scrollY + (this.getBoundingClientRect().top - e),
        }));
  }
  #i(t) {
    !this.#t ||
      typeof localStorage > "u" ||
      localStorage.setItem(this.#n + this.#t, t);
  }
  static #r(t, i) {
    const c = t.#t,
      e = r.#s(i);
    if (!c || !e) return;
    const n = r.#e.get(c);
    if (n) {
      for (const s of n) {
        if (s === t) continue;
        const a = s.tabs.findIndex((o) => r.#s(o) === e);
        a !== -1 && s.switchTab(s.tabs[a], a, !1);
      }
      t.#i(e);
    }
  }
  static #s(t) {
    return t.textContent?.trim();
  }
}
customElements.define("starlight-tabs", r);
