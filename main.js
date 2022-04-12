import m from "https://cdn.skypack.dev/mithril";

// Structure: Hero, Title, Author, Date then
// main section with cards (titles + link + tags?)

console.log(m);

let color = (() => {
  normal: "black";
})();

let typography = (() => {
  let base = 24;
  let ratio = Math.sqrt(2.0);
  return {
    size: {
      XS: base / ratio / ratio + "px",
      S: base / ratio + "px",
      M: base + "px",
      L: base * ratio + "px",
      XL: base * ratio * ratio + "px",
      XXL: base * ratio * ratio * ratio + "px",
    },
    family: {
      normal: "Alegreya",
      smallCaps: "Alegreya SC",
    },
  };
})();

let Space = " ";

let icons = {
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
};

class Icon {
  view(vnode) {
    let name = vnode.attrs.name;
    let svg = icons[name];
    return m(
      "div",
      {
        class: "svg-icon",
        style: {
          display: "inline-flex",
          alignSelf: "center",
          position: "relative",
        },
      },
      m(
        "div",
        { style: { position: "relative", top: "0.125em" } },
        m.trust(svg)
      )
    );
  }
}

class Link {
  view(vnode) {
    let attrs = vnode.attrs;
    let style = attrs.style || {};
    style.color = "inherit";
    style.textDecoration = "inherit";
    return m("a", { href: vnode.attrs.href, style }, vnode.children);
  }
}

class Hero {
  view() {
    return m(
      "header",
      {
        style: {
          padding: "1.5em",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        },
      },
      [
        m(
          "h1",
          {
            style: {
              fontSize: typography.size.XL,
              lineHeight: "1.5em",
            },
          },
          "Eul.Ink"
        ),
        m(
          "h1",
          {
            style: {
              fontSize: typography.size.M,
              fontWeight: "normal",
              lineHeight: "1.5em",
            },
          },
          [
            m(Icon, { name: "users" }),
            Space,
            m(
              Link,
              { href: "mailto:Sebastien.Boisgerault@mines-paristech.fr" },
              "Sébastien Boisgérault"
            ),
            ", MINES Paris, PSL University",
          ]
        ),
        m(
          "h2",
          {
            style: {
              fontSize: typography.size.M,
              fontFamily: typography.family.smallCaps,
              fontWeight: "normal",
              lineHeight: "1.5em",
            },
          },
          [m(Icon, { name: "calendar" }), Space, "April 12, 2022"]
        ),
      ]
    );
  }
}

class Card {
  view(vnode) {
    return m(
      "div",
      {
        style: {
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          minWidth: "10em",
          minHeight: "10em",
        },
      },
      [vnode.children]
    );
  }
}

class Gallery {
  view(vnode) {
    let style = {
      display: "flex",
      flexWrap: "wrap",
      gap: "1.5em",
      padding: "1.5rem",
    };
    return m("main", { style }, vnode.children);
  }
}

m.mount(document.body, {
  view: () => [
    m(Hero),
    m(Gallery, [
      m(Card, ["tagada"]),
      m(Card, ["tsoin tsoin"]),
      m(Card, ["tsoin tsoin"]),
      m(Card, ["tagada"]),
      m(Card, ["tsoin tsoin"]),
      m(Card, ["tsoin tsoin"]),
    ]),
  ],
});
