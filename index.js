var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_styled_components = require("styled-components"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let sheet = new import_styled_components.ServerStyleSheet(), markup = (0, import_server.renderToString)(sheet.collectStyles(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }))), styles = sheet.getStyleTags();
  return markup = markup.replace("__STYLES__", styles), responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => Root,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  themeColor: "#091B43",
  description: "Julekalender for stillesittende kontor-nisser",
  title: "Julekalder'n"
});
function Root() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "no",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
            rel: "icon",
            href: "/favicon.ico"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
            rel: "apple-touch-icon",
            href: "/logo192.png"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
            rel: "manifest",
            href: "/manifest.json"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
            rel: "preconnect",
            href: "https://fonts.gstatic.com"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
            href: "https://fonts.googleapis.com/css2?family=Baloo+Da+2&display=swap",
            rel: "stylesheet"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
            href: "https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap",
            rel: "stylesheet"
          }),
          typeof document > "u" ? "__STYLES__" : null
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("body", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          id: "root",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Outlet, {})
        })
      })
    ]
  });
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
          children: "Oh no!"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("body", {})
    ]
  });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/src/Components/Luke.tsx
var import_react_router_dom2 = require("react-router-dom"), import_styled_components13 = __toESM(require("styled-components")), import_react5 = require("react");

// app/src/Components/Julekule.tsx
var import_styled_components3 = __toESM(require("styled-components"));

// app/src/theme.ts
var import_styled_components2 = require("styled-components"), theme = {
  background: "#091B43",
  lukeSize: "12rem"
}, GlobalStyles = import_styled_components2.createGlobalStyle`
  body, html {
    background-color: ${theme.background};
    color: white;
    font-family: 'Baloo Da 2', cursive;
  }
  
  *:focus {
    outline: none;
    filter: drop-shadow(0 0 1rem goldenrod);
  }
  
  h1 {
    font-family: 'Lobster Two', cursive;
    letter-spacing: .1em;
  }
`;

// app/src/utils.ts
var getRandomFromArray = (arrayLength) => Math.floor(Math.random() * arrayLength);
function isOdd(num) {
  return num % 2;
}
var straffer = ["kneb\xF8y", "pushups", "situps", "utfall", "burpees", "spensthopp"], getStraffe = (nummer) => `10 straffe-${straffer[getRandomFromArray(straffer.length)]} mens du venter til 
  ${nummer}. desember`;

// app/src/Components/Julekule.tsx
var import_jsx_runtime = require("react/jsx-runtime"), farger = ["#FF0700", "#FFAB00", "#123EAB", "#00C90D"], JulekuleStyle = import_styled_components3.default.div`
  background-color: ${() => farger[getRandomFromArray(farger.length)]};
  background-image: radial-gradient(circle at right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  border-radius: 50%;
  box-shadow: inset 0.3em 0.3em 1em rgba(255, 255, 255, 0.5);
  height: ${theme.lukeSize};
  width: ${theme.lukeSize};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) => isOdd(props.nummer) ? "rotate( -5deg )" : "rotate( 5deg )"};
`, Base = import_styled_components3.default.span`
  position: absolute;
  content: "";
  display: block;
  width: 1rem;
  height: 0.5rem;
  top: -0.46rem;
  background-color: white;
  left: 50%;
  margin-left: -0.5rem;
  border-radius: 2px 2px 0 0;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
`, Snor = import_styled_components3.default.span`
  position: absolute;
  border-color: white;
  height: 1.25rem;
  width: 0.75rem;
  border-width: 2px 2px 0 2px;
  top: -1.75rem;
  border-style: solid;
  border-radius: 50% 50% 0 0;
  left: calc(${theme.lukeSize} / 2);

  &::before {
    content: "";
    display: block;
    height: 50%;
    background-color: ${theme.background};
    position: absolute;
    bottom: 0;
    width: 0.1875rem;
    right: -0.125rem;
  }
`, Julekule = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(JulekuleStyle, {
  nummer: props.nummer,
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Snor, {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Base, {}),
    props.children
  ]
}), Julekule_default = Julekule;

// app/src/Components/LukeWrapper.tsx
var import_react_router_dom = require("react-router-dom");

// app/src/Components/LukeInnhold.tsx
var import_styled_components4 = __toESM(require("styled-components")), import_jsx_runtime = require("react/jsx-runtime"), Wrapper = import_styled_components4.default.div`
  padding: 0 1rem 1rem;
  h1 {
    font-size: 4rem;
    text-align: center;
    margin: 3rem auto 2.5rem;

    @media (max-width: 40rem) {
      margin: 2.5rem auto 1.5rem;
    }
  }
`, InnholdStyle = import_styled_components4.default.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`, Tekst = import_styled_components4.default.div`
  max-width: 45rem;
  font-size: 1.25rem;
`, EmojiStyle = import_styled_components4.default.span`
  font-size: 3rem;
  text-align: center;
  display: block;
`, StyledEmoji = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmojiStyle, {
  role: "img",
  "aria-label": props.ariaLabel,
  children: props.content
}), Emoji = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
  role: "img",
  "aria-label": props.ariaLabel,
  children: props.content
}), LukeInnhold = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrapper, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
      children: [
        "Luke ",
        props.nummer
      ]
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InnholdStyle, {
      children: props.children
    })
  ]
}), LukeInnhold_default = LukeInnhold;

// app/src/Innhold/Luke1.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke1 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 1,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
            ariaLabel: "party-emoji",
            content: "\u{1F389}"
          }),
          " F\xF8rste luke! ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
            ariaLabel: "party-emoji",
            content: "\u{1F389}"
          }),
          " "
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "Realistisk som jeg er, innser jeg at det kanskje ogs\xE5 blir din siste..",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
            ariaLabel: "crying-emoji",
            content: "\u{1F622}"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "Derfor skal du f\xE5 en oppgave som sikrer litt ekstra aktivitet resten av adventstida!"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
            children: [
              "Finn det mest kronglete stedet i boligen din. Det kan v\xE6re p\xE5 loftet, i kjellern, \xF8verst i det h\xF8yeste skapet, lengst under senga eller lignende",
              " "
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
            children: "Ta din favoritt-julekalender (eller g\xE5 \xE5 kj\xF8p en hvis du ikke har) og legg den der"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
            children: "\xC5pne dagens luke og la kalenderen ligge, slik at den blir like vanskelig \xE5 komme til resten av dagene"
          })
        ]
      })
    ]
  })
}), Luke1_default = Luke1;

// app/src/Innhold/Luke2.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke2 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 2,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        children: "Dorull-kneb\xF8y!"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "Lag et dorullt\xE5rn av tre ruller. ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
            ariaLabel: "toiletpaper-emoji",
            content: "\u{1F9FB} \u{1F9FB} \u{1F9FB}"
          }),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          "Glemt \xE5 hamstre doruller sier du? Da blir bare \xF8velsen tyngere og du blir sterkere!",
          " "
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "St\xE5 med en hoftebredde avstand mellom bena og ta en dyp kneb\xF8y helt til rumpa treffer rullene. Gjenta s\xE5 mange repetisjoner du rekker p\xE5 45 sekunder."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "Antall: ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          " 3 sett \xE1 45 sekunder",
          " "
        ]
      })
    ]
  })
}), Luke2_default = Luke2;

// app/src/Innhold/Lordag.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Lordag = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
      children: "Helg!"
    }),
    "G\xE5 en tur i nabolaget mens du \xF8ver p\xE5 \xE5 presentere en vits til teamet p\xE5 mandag. Feks denne:",
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
          children: "H\xF8rt om utvikleren som ville teste ut en ny rett? Han serverte beta-suppe."
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledEmoji, {
          ariaLabel: "suppe-emoji",
          content: "\u{1F963}"
        })
      ]
    })
  ]
}), Lordag_default = Lordag;

// app/src/Innhold/Luke3.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke3 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 3,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lordag_default, {})
}), Luke3_default = Luke3;

// app/src/Innhold/Sondag2.tsx
var import_styled_components5 = __toESM(require("styled-components")), import_jsx_runtime = require("react/jsx-runtime"), StyledEmoji2 = import_styled_components5.default.div`
  margin: 1rem 0 3rem;
  text-align: center;
`, Sondag2 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
      children: "Andre s\xF8ndag i advent! "
    }),
    "G\xE5 til ditt ",
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
      children: "nest"
    }),
    " n\xE6rmeste bakeri \xE5 kj\xF8p deg en kaffe og bolle!",
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledEmoji2, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
        ariaLabel: "emoji-kafevare",
        content: "\u2615 \u{1F950}"
      })
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
      children: "- Det m\xE5 jo v\xE6re lov \xE5 kose seg litt!"
    })
  ]
}), Sondag2_default = Sondag2;

// app/src/Innhold/Luke4.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke4 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 4,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sondag2_default, {})
}), Luke4_default = Luke4;

// app/src/Innhold/Yoga.tsx
var import_react3 = require("react"), import_styled_components6 = __toESM(require("styled-components")), import_jsx_runtime = require("react/jsx-runtime"), Kriger = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
      children: "Din yoga\xF8velse: Kriger III "
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      children: "Fra st\xE5ende, la det ene beinet l\xF8ftes opp bak, samtidig som overkroppen strekkes ut framover. Armene kan v\xE6re utstrakt fram eller bakover, eller b\xF8yd med hendene i midja."
    })
  ]
}), D\u00F8dmann = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
      children: [
        "Din yoga\xF8velse: D\xF8dmannstilling ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
          ariaLabel: "zombie-emoji",
          content: "\u{1F9DF}"
        })
      ]
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
      children: [
        "Denne stillingen er ypperlig for \xE5 finne roen og bekjempe stress. Du b\xF8r ligge i d\xF8dmannsstillingen minimum 5 minutter for \xE5 f\xE5 tilstrekkelig effekt. ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
        "Legg deg forsiktig ned p\xE5 ryggen p\xE5 en matte med f\xF8ttene spredd. La armene ligge langs gulvet, litt ut fra kroppen og med h\xE5ndflatene pekende opp. Pust dypt og rolig. Kjenn at hele kroppen n\xE6rmest synker ned i bakken. Vend oppmerksomheten mot kroppsdeler som f\xF8les anspente, og konsentrer deg om \xE5 f\xE5 dem til slappe av."
      ]
    })
  ]
}), Barn = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
      children: [
        "Din yoga\xF8velse: Barnet ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
          ariaLabel: "baby-emoji",
          content: "\u{1F476}"
        })
      ]
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
      children: [
        "Sitt p\xE5 h\xE6lene dine. Nn\xE6rne skal v\xE6re omtrent like bredt plassert som hoftebredden din. F\xF8ttene skal v\xE6re samlet, slik at storet\xE6rne ber\xF8rer hverandre. ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
        "B\xF8y deg fremover til overkroppen hviler p\xE5 l\xE5rene og hodet ber\xF8rer gulvet.",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
        "Pust ut mens du presser halebenet ned mot h\xE6lene.",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
        "Legg armene mot underlaget p\xE5 utsiden av l\xE5rene med h\xE5ndflatene opp.",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
        "Hvil i denne posisjonen i noen minutter mens du puster inn og ut.",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {})
      ]
    })
  ]
}), YogaPositions = {
  Kriger: { label: "En kriger", komponent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kriger, {}) },
  D\u00F8dMann: { label: "En d\xF8d mann", komponent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(D\u00F8dmann, {}) },
  Barn: { label: "Et barn", komponent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Barn, {}) }
}, StyledSelect = import_styled_components6.default.select`
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  border-radius: 0.2rem;
  font-size: 1.25rem;
  margin-bottom: 2rem;
`, Yoga = () => {
  let [yogaPosition, setYogaPosition] = (0, import_react3.useState)("");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
        children: [
          "Finn din yoga-posisjon! ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
            ariaLabel: "lotus-emoji",
            content: "\u{1F9D8}"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "Hva identifiserer du deg mest med?"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledSelect, {
        onChange: (e) => {
          let target = e.currentTarget;
          setYogaPosition(target.value);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
            value: "",
            children: "Velg..."
          }),
          Object.keys(YogaPositions).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
            value: key,
            children: YogaPositions[key].label
          }, key))
        ]
      }),
      (yogaPosition == null ? void 0 : yogaPosition.length) > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
        children: YogaPositions[yogaPosition].komponent
      })
    ]
  });
}, Yoga_default = Yoga;

// app/src/Innhold/Luke5.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke5 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 5,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Yoga_default, {})
}), Luke5_default = Luke5;

// app/src/Innhold/Luke6.tsx
var import_styled_components7 = __toESM(require("styled-components")), import_jsx_runtime = require("react/jsx-runtime"), StyledIframe = import_styled_components7.default.iframe`
  margin-top: 1rem;
  width: 50rem;
  max-width: 95vw;
  height: 27rem;
  max-height: 80vh;
  border: 0px;
`, Luke6 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LukeInnhold_default, {
  nummer: 6,
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
          children: "L\xF8s opp i stive kontormuskler"
        }),
        "Her f\xE5r du en yoga-\xF8kt fra Sats. S\xE5 kort at du rekker det i lunsjen!"
      ]
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledIframe, {
      title: "Video fra sats",
      src: "https://www.youtube.com/embed/xPvQgXFjNAg",
      frameBorder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: !0
    })
  ]
}), Luke6_default = Luke6;

// app/src/Innhold/Luke7.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke7 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 7,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
        children: [
          "Forebygging av musearm ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
            ariaLabel: "mouse-emoji",
            content: "\u{1F42D}"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "Sett deg inntil et bord og legg underarmen din p\xE5 bordet. H\xE5nden og h\xE5ndleddet skal ligge rett utenfor bordkanten. Hold en vannflaske eller manual i h\xE5nden. Strekk kjapt opp i h\xE5ndleddet og senk rolig ned igjen."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "Antall: ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          "2 ganger om av dagen",
          " "
        ]
      })
    ]
  })
}), Luke7_default = Luke7;

// app/src/Innhold/Luke8.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke8 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 8,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
        children: [
          "T\xF8ye p\xE5 overkropp ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
            ariaLabel: "gesturing-emoji",
            content: "\u{1F646}"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "L\xF8ft begge armene over hodet og senk overkroppen langsomt til den ene siden. Kjenn at det strekker p\xE5 utsiden av overkroppen. Hold i 5 sekunder f\xF8r du gjentar \xF8velsen p\xE5 den andre siden. Strekk totalt 3 ganger p\xE5 hver side."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "N\xE5r: ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          " En gang f\xF8r lunsj, og en etter."
        ]
      })
    ]
  })
}), Luke8_default = Luke8;

// app/src/Innhold/Luke9.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke9 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 9,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
        children: [
          "Nakke ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
            ariaLabel: "giraffe-emoji",
            content: "\u{1F992}"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "Plass\xE9r den ene h\xE5nda p\xE5 hodet og trekk forsiktig ned mot skulderen. Senk motsatt skulder og kjenn at det strekker p\xE5 utsiden av nakken. Hold i cirka 5 pust og gjenta \xF8velsen p\xE5 motsatt side."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "Antall: ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          " Sp\xF8r din identansvarlig"
        ]
      })
    ]
  })
}), Luke9_default = Luke9;

// app/src/Innhold/Lordag2.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Lordag2 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
      children: "Helg igjen jo!"
    }),
    "Og til uka er sj\xF8lveste luciadagen. Det krever forberedelse: ",
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
    "G\xE5 (type kappgang) til n\xE6rmeste apotek og kj\xF8p safran. ",
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
      children: [
        "St\xE5 p\xE5 h\xF8yre ben mens du venter p\xE5 din tur .",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledEmoji, {
          ariaLabel: "emoji-leg",
          content: "\u{1F9B5}"
        }),
        "St\xE5 p\xE5 venstre ben mens du blir ekspedert."
      ]
    })
  ]
}), Lordag2_default = Lordag2;

// app/src/Innhold/Luke10.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke10 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 10,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lordag2_default, {})
}), Luke10_default = Luke10;

// app/src/Innhold/Sondag3.tsx
var import_styled_components8 = __toESM(require("styled-components")), import_jsx_runtime = require("react/jsx-runtime"), StyledEmoji3 = import_styled_components8.default.div`
  margin: 1rem 0 3rem;
  text-align: center;
`, Sondag3 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
      children: "Tredje s\xF8ndag i advent! "
    }),
    "G\xE5 til ",
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
      children: "tredje"
    }),
    " n\xE6rmeste bakeri \xE5 kj\xF8p deg en kaffe og bolle!",
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledEmoji3, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
        ariaLabel: "emoji-kafevare",
        content: "\u2615 \u{1F950}"
      })
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
      children: "- Det m\xE5 jo v\xE6re lov \xE5 kose seg litt"
    })
  ]
}), Sondag3_default = Sondag3;

// app/src/Innhold/Luke11.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke11 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 11,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sondag3_default, {})
}), Luke11_default = Luke11;

// app/src/Innhold/Luke12.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke12 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 12,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        children: "Korsrygg"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "St\xE5 oppreist med svak b\xF8y i kn\xE6rne. B\xF8y deg sakte fremover virvel for virvel. Hold vekten p\xE5 h\xE6lene. Pust rolig og slapp av i magen og nakken. Rull sakte opp igjen virvel for virvel, hodet til slutt. Bruk 30-60 sekunder per runde."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledEmoji, {
        ariaLabel: "kamel-emoji",
        content: "\u{1F42B}"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "N\xE5r: ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          " Gj\xF8r \xF8velsen hver gang du g\xE5r gjennom en d\xF8r"
        ]
      })
    ]
  })
}), Luke12_default = Luke12;

// app/src/Innhold/Luke13.tsx
var import_styled_components9 = __toESM(require("styled-components")), import_jsx_runtime = require("react/jsx-runtime"), StyledEmoji4 = import_styled_components9.default.div`
  font-size: 3rem;
  margin: 1rem 0;
  text-align: center;
`, Luke13 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 13,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        children: "Lucia!"
      }),
      "Lag en lussekatt-deig som du elter for h\xE5nd.",
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledEmoji4, {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
          ariaLabel: "cat-emoji",
          content: "\u{1F408}"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
        children: "- Det m\xE5 jo v\xE6re lov \xE5 kose seg litt"
      })
    ]
  })
}), Luke13_default = Luke13;

// app/src/Innhold/Luke14.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke14 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 14,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
            ariaLabel: "tromme-emoji",
            content: "\u{1F941}"
          }),
          "The World\u2019s Greatest Stretch",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
            ariaLabel: "tromme-emoji",
            content: "\u{1F941}"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "Start i h\xF8y plankeposisjon. Plasser det ene beinet rett utenfor h\xE5nden p\xE5 samme side og senk setet forsiktig ned. F\xF8r armen opp, mens du f\xF8lger armen med blikket. Gjenta p\xE5 motsatt side."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "Antall: ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          " 10 repetisjoner"
        ]
      })
    ]
  })
}), Luke14_default = Luke14;

// app/src/Innhold/Luke15.tsx
var import_react4 = require("react"), import_styled_components10 = __toESM(require("styled-components")), import_jsx_runtime = require("react/jsx-runtime"), Kobra = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
      children: [
        "Din yoga\xF8velse: Kobra ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
          ariaLabel: "snake-emoji",
          content: "\u{1F40D}"
        })
      ]
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      children: "Ligg p\xE5 magen med strake, samlede bein og med hendene foran brystet. Pust inn, mens du langsomt l\xF8fter hodet og skyter fram brystet. Det er ryggen som skal b\xE6re kroppen. Bli i stillingen i 4\u20138 pust."
    })
  ]
}), Hund = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
      children: [
        "Din yoga\xF8velse: Hunden som ser ned ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
          ariaLabel: "dog-emoji",
          content: "\u{1F436}"
        }),
        " "
      ]
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      children: "Ligg p\xE5 kn\xE6rne med hendene i gulvet i en skulderbreddes avstand. Hold t\xE6rne i gulvet, mens du strekker ut beina slik at kroppen danner en omvendt V med baken \xF8verst. F\xF8ttene skal v\xE6re parallelle, med en halv fotlengde mellom dem, mens h\xE6lene presses ned mot gulvet. Sug inn navlen, strekk ryggen og senk skuldrene. Trekk pusten dypt inn og ut gjennom nesen. Hold stillingen i 4\u20138 pust."
    })
  ]
}), Kamel = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
      children: [
        "Din yoga\xF8velse: Kamelen ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
          ariaLabel: "kamel-emoji",
          content: "\u{1F42B}"
        })
      ]
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      children: "St\xE5 med f\xF8ttene i hoftebreddeavstand. Knytt hendene sammen, og bruk dem som st\xF8tte i korsryggen. Press albuene bakover, pust inn, og t\xF8y framsiden av kroppen. Pust ut, og len deg forsiktig bakover. Press hoftene framover, og vend ansiktet oppover. Hold stillingen i 4\u20138 pust f\xF8r du g\xE5r forsiktig tilbake til utgangspunktet."
    })
  ]
}), Gresshoppe = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
      children: [
        "Din yoga\xF8velse: Gresshoppa ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
          ariaLabel: "cricket-emoji",
          content: "\u{1F997}"
        })
      ]
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      children: "Ligg p\xE5 magen med ansiktet ned. L\xF8ft beina og brystet slik at de ikke ber\xF8rer bakken. Hold armene dine ved sidene med fingrene pekende mot t\xE6rne. Hold denne posisjonen i 20 til 30 sekunder mens du puster normalt."
    })
  ]
}), YogaPositions2 = {
  Kobra: { label: "En kobra", komponent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kobra, {}) },
  Hund: { label: "En hund (som ser ned)", komponent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hund, {}) },
  Kamel: { label: "En kamel", komponent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kamel, {}) },
  Gresshoppe: { label: "En gresshoppe", komponent: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gresshoppe, {}) }
}, StyledSelect2 = import_styled_components10.default.select`
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  border-radius: 0.2rem;
  font-size: 1.25rem;
  margin-bottom: 2rem;
`, Luke15 = () => {
  let [yogaPosition, setYogaPosition] = (0, import_react4.useState)("");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
    nummer: 15,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
          children: [
            "Finn din yoga-posisjon - del 2! ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
              ariaLabel: "lotus-emoji",
              content: "\u{1F9D8}"
            }),
            " "
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          children: "Hvilket dyr identifiserer du deg mest med?"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledSelect2, {
          onChange: (e) => {
            let target = e.currentTarget;
            setYogaPosition(target.value);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
              value: "",
              children: "Velg..."
            }),
            Object.keys(YogaPositions2).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
              value: key,
              children: YogaPositions2[key].label
            }, key))
          ]
        }),
        (yogaPosition == null ? void 0 : yogaPosition.length) > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children: YogaPositions2[yogaPosition].komponent
        })
      ]
    })
  });
}, Luke15_default = Luke15;

// app/src/Innhold/Luke16.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke16 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 16,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
        children: [
          "Fleksjon ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
            ariaLabel: "old-emoji",
            content: "\u{1F9D3}"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "Sitt p\xE5 en stol med bena langt fra hverandre. B\xF8y rygg og nakke fremover, slik at armer og hode henger avslappet mellom l\xE5rene. Kjenn at det strekker i korsrygg. Hold i 5-10 pust."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "N\xE5r: ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          " Hver gang du mister fokus fra noe du har fokus p\xE5.",
          " "
        ]
      })
    ]
  })
}), Luke16_default = Luke16;

// app/src/Innhold/Lordag3.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Lordag3 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
      children: "Helg!"
    }),
    "Anta at du er med i Tour de France - p\xE5 tide med en hviledag!",
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
    "Legg deg i sofaen og se litt netflix.",
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledEmoji, {
      ariaLabel: "tv-emoji",
      content: "\u{1F4FA}"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      children: "NB! 5 straffe-pushup hver gang du gj\xF8r noe jobb-relatert i l\xF8pet av dagen."
    })
  ]
}), Lordag3_default = Lordag3;

// app/src/Innhold/Luke17.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke17 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 17,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lordag3_default, {})
}), Luke17_default = Luke17;

// app/src/Innhold/Sondag4.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Sondag4 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
      children: "Fjerde s\xF8ndag i advent! "
    }),
    "Du venter p\xE5 en skikkelig kul julegave i posten. ",
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
    "Sjekk postkassa minst 4 ganger f\xF8r lunsj.",
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledEmoji, {
      ariaLabel: "gift-emoji",
      content: "\u{1F381}"
    }),
    "Har du trapper til post-kassa? Hopp/hink opp trappene.",
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
    "Har du vei? Jogg fram, spurt tilbake."
  ]
}), Sondag4_default = Sondag4;

// app/src/Innhold/Luke18.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke18 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 18,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sondag4_default, {})
}), Luke18_default = Luke18;

// app/src/Innhold/Luke19.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke19 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 19,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
        children: [
          "Skulderrulle ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
            ariaLabel: "circle-emoji",
            content: "\u{1F503}"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "Rull begge skuldrene i store sirkler, mens armene henger ned langs siden.",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          "Gj\xF8r \xF8velsen i begge retninger."
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "Antall: ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          " 10 ruller hver vei",
          " "
        ]
      })
    ]
  })
}), Luke19_default = Luke19;

// app/src/Innhold/Luke20.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke20 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 20,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
        children: [
          "Dagens \xF8velse: Bryst ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
            ariaLabel: "duck-emoji",
            content: "\u{1F986}"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "Sitt p\xE5 en stol med god holdning i ryggen. Strekk armene bakover, samle hendene bak ryggen og press dem litt bakover og oppover. Hold stillingen i 5-10 pust."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "N\xE5r: ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          " Hver gang du har et videom\xF8te",
          " "
        ]
      })
    ]
  })
}), Luke20_default = Luke20;

// app/src/assets/absurdgalleriet.jpg
var absurdgalleriet_default = "/build/_assets/absurdgalleriet-7YG2J6PP.jpg";

// app/src/Innhold/Luke21.tsx
var import_styled_components11 = __toESM(require("styled-components")), import_jsx_runtime = require("react/jsx-runtime"), StyledFigure = import_styled_components11.default.figure`
  margin: 0;
  max-width: 35rem;
  img {
    width: 100%;
  }

  figcaption {
    font-style: italic;
    text-align: center;
    font-size: 1.1rem;
  }
`, Luke21 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 21,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        children: "Spiderman pushups"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "Du trener: ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          " Brystmuskler og mage."
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "Ligg p\xE5 gulvet som om du skal til \xE5 ta armhevinger. Hold kroppen helt stiv og rett. B\xF8y albuene, og senk deg ned mot gulvet. Samtidig f\xF8rer du venstre kne opp til venstre albue. Strekk armene ut igjen til du er i startposisjonen. Under neste armheving f\xF8rer du h\xF8yre kne opp til h\xF8yre albue."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "Antall: ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          " 10 repetisjoner"
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledFigure, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
            src: absurdgalleriet_default,
            alt: "Tegning fra absurdgalleriet"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
            className: "decorated",
            children: "Fra absurdgalleriet"
          })
        ]
      })
    ]
  })
}), Luke21_default = Luke21;

// app/src/Innhold/Luke22.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke22 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 22,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
        children: [
          "Kattestrekk ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
            ariaLabel: "cat-emoji",
            content: "\u{1F408}"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: "St\xE5 p\xE5 alle fire med kn\xE6rne rett under hoftene og h\xE5ndbakene rett under skuldrene. P\xE5 innpust svaier du ryggen, samtidig som du ser opp i taket. P\xE5 utpust skyt rygg som en katt. Gjenta 10 ganger."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "N\xE5r: ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          " Hver gang noen @channel'er deg p\xE5 slack",
          " "
        ]
      })
    ]
  })
}), Luke22_default = Luke22;

// app/src/Innhold/Luke23.tsx
var import_jsx_runtime = require("react/jsx-runtime"), Luke23 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeInnhold_default, {
  nummer: 23,
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tekst, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        children: "Lille julaften! "
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "Dagen f\xF8r dagen - n\xE5 m\xE5 du \xF8ve:",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
          "Still deg i kneb\xF8y position og hold stillingen mens du g\xE5r rundt juletreet (eventuelt kontorstolen).",
          " "
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        children: [
          "Syng ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
            ariaLabel: "note-emoji",
            content: "\u{1F3B5}"
          }),
          " S\xE5 g\xE5r vi rundt om en eneb\xE6rbusk",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
            ariaLabel: "note-emoji",
            content: "\u{1F3B5}"
          }),
          ', og ta et spensthopp hver gang du sier "busk".'
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledEmoji, {
        ariaLabel: "tree-emoji",
        content: "\u{1F384}"
      })
    ]
  })
}), Luke23_default = Luke23;

// app/src/Innhold/Luke24.tsx
var import_styled_components12 = __toESM(require("styled-components")), import_jsx_runtime = require("react/jsx-runtime"), StyledIframe2 = import_styled_components12.default.iframe`
  height: 75vh;
  max-height: 80vmin;

  width: 55vw;
  width: max(60vw, 20rem);
  border: none;
`, StyledLink = import_styled_components12.default.a`
  color: lightgoldenrodyellow;
`, Luke24 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LukeInnhold_default, {
  nummer: 24,
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
      children: "Fordi det er g\xF8y: sliding puzzle!"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledIframe2, {
      src: "https://idaons.github.io/css-puzzle/"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
      children: [
        "PS: fungerer uten javascript",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledLink, {
          href: "https://idaons.github.io/css-puzzle/",
          children: "p\xE5 denne siden"
        }),
        ".",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
          ariaLabel: "nerd-emoji",
          content: " \u{1F913} "
        }),
        " "
      ]
    })
  ]
}), Luke24_default = Luke24;

// app/src/Components/LukeWrapper.tsx
var import_jsx_runtime = require("react/jsx-runtime"), isLukeAvailible = (nummer) => {
  let currentDate = new Date();
  return !(new Date(currentDate.getFullYear() - 1, 11, nummer) > currentDate);
}, LukeWrapper = () => {
  let { lukeNummer } = (0, import_react_router_dom.useParams)(), lukeNummerAsInt = parseInt(lukeNummer ?? "");
  if (lukeNummerAsInt > 24 || lukeNummerAsInt < 1 || isNaN(lukeNummerAsInt))
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LukeInnhold_default, {
      nummer: 404,
      children: [
        "Ingen luke her..",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledEmoji, {
          ariaLabel: "emoji-sad",
          content: "\u{1F622}"
        })
      ]
    });
  if (!isLukeAvailible(lukeNummerAsInt))
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LukeInnhold_default, {
      nummer: lukeNummerAsInt,
      children: [
        "Nice try! ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledEmoji, {
          ariaLabel: "chicken-emoji",
          content: "\u{1F423}"
        }),
        getStraffe(lukeNummerAsInt)
      ]
    });
  switch (lukeNummer) {
    case "1":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke1_default, {});
    case "2":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke2_default, {});
    case "3":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke3_default, {});
    case "4":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke4_default, {});
    case "5":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke5_default, {});
    case "6":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke6_default, {});
    case "7":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke7_default, {});
    case "8":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke8_default, {});
    case "9":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke9_default, {});
    case "10":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke10_default, {});
    case "11":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke11_default, {});
    case "12":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke12_default, {});
    case "13":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke13_default, {});
    case "14":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke14_default, {});
    case "15":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke15_default, {});
    case "16":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke16_default, {});
    case "17":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke17_default, {});
    case "18":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke18_default, {});
    case "19":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke19_default, {});
    case "20":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke20_default, {});
    case "21":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke21_default, {});
    case "22":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke22_default, {});
    case "23":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke23_default, {});
    case "24":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke24_default, {});
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LukeInnhold_default, {
        nummer: 404,
        children: [
          "Ingen luke her..",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledEmoji, {
            ariaLabel: "emoji-sad",
            content: "\u{1F622}"
          })
        ]
      });
  }
}, LukeWrapper_default = LukeWrapper;

// app/src/Components/Luke.tsx
var import_jsx_runtime = require("react/jsx-runtime"), \u00C5penLuketekst = import_styled_components13.default.span`
  color: white;
  font-size: 1.25rem;
`, StengtLuketekst = import_styled_components13.default.span`
  color: white;
  font-size: 1rem;

  padding: 2rem 1rem 1rem;
  text-align: center;
  transform: ${(props) => isOdd(props.nummer) ? "rotate( 5deg )" : "rotate( -5deg )"};
`, StyledLink2 = (0, import_styled_components13.default)(import_react_router_dom2.Link)`
  text-decoration: none;
  transition: 0.3s;
  &:hover,
  &:focus {
    transform: scale(1.1);

    ${\u00C5penLuketekst} {
      transition-duration: 2s;
      transition-property: transform;
      transform: rotate(360deg);
    }
  }
`, Luke = (props) => {
  let [lukeEr\u00C5pen, setLukeEr\u00C5pen] = (0, import_react5.useState)(!0), onLukeClick = (e) => {
    isLukeAvailible(props.nummer) || (setLukeEr\u00C5pen(!1), e.preventDefault());
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledLink2, {
    onClick: (e) => onLukeClick(e),
    to: `/julekalender/${props.nummer}`,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Julekule_default, {
      nummer: props.nummer,
      children: lukeEr\u00C5pen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(\u00C5penLuketekst, {
        children: [
          "Luke ",
          props.nummer
        ]
      }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StengtLuketekst, {
        nummer: props.nummer,
        children: [
          "N\xE5 var du litt tidlig ute! ",
          getStraffe(props.nummer)
        ]
      })
    })
  });
}, Luke_default = Luke;

// app/src/Components/Kalender.tsx
var import_styled_components14 = __toESM(require("styled-components"));
var import_jsx_runtime = require("react/jsx-runtime"), Wrapper2 = import_styled_components14.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${theme.lukeSize}, 1fr));
  grid-row-gap: 3rem;
  grid-column-gap: 1rem;
  justify-items: center;
  padding: 1rem 2rem 10rem;
  max-width: 60rem;
  margin: 0 auto;
`, Header = import_styled_components14.default.header`
  text-align: center;
  margin: 1.5rem auto 4rem;
  h1 {
    font-size: min(5rem, 15vmin);
    margin-bottom: 1rem;
    word-break: break-word;
  }

  span {
    font-size: 1.8rem;
    font-family: "Lobster Two", cursive;
    letter-spacing: 0.15em;
  }
`;
function Kalender() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Header, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
            children: "Julekalender"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
                ariaLabel: "nisse-emoji",
                content: "\u{1F385}"
              }),
              "for stillesittende kontor-nisser",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emoji, {
                ariaLabel: "nisse-emoji",
                content: "\u{1F385}"
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrapper2, {
        children: [...Array(24)].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luke_default, {
          nummer: index + 1
        }, index))
      })
    ]
  });
}
var Kalender_default = Kalender;

// app/routes/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalStyles, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kalender_default, {})
      })
    ]
  });
}

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => App_default
});

// app/src/App.tsx
var import_react_router = require("react-router"), import_jsx_runtime = require("react/jsx-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalStyles, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_router.Routes, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_router.Route, {
            path: "/julekalender/:lukeNummer",
            element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LukeWrapper_default, {})
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_router.Route, {
            path: "/julekalender",
            element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kalender_default, {})
          })
        ]
      })
    ]
  });
}
var App_default = App;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "cd713cf9", entry: { module: "/build/entry.client-UQSGMCSV.js", imports: ["/build/_shared/chunk-RVWXJRYP.js", "/build/_shared/chunk-B4TM2EUL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-I6ASAUIE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-ODT7FLWO.js", imports: ["/build/_shared/chunk-X7IFBEW3.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-LVGZDMMH.js", imports: ["/build/_shared/chunk-X7IFBEW3.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-CD713CF9.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
