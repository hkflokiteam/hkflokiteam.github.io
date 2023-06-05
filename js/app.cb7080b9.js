;(function () {
  "use strict"
  var a = {
      1492: function (a, t, e) {
        var i = e(9242),
          c = e(3396)
        function s(a, t, e, i, s, n) {
          const o = (0, c.up)("router-view")
          return (0, c.wg)(), (0, c.j4)(o)
        }
        var n = {},
          o = e(89)
        const r = (0, o.Z)(n, [["render", s]])
        var d = r,
          l = e(9529),
          v = (e(4415), e(5431))
        ;(0, v.z)("/service-worker.js", {
          ready() {
            console.log(
              "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
            )
          },
          registered() {
            console.log("Service worker has been registered.")
          },
          cached() {
            console.log("Content has been cached for offline use.")
          },
          updatefound() {
            console.log("New content is downloading.")
          },
          updated() {
            console.log("New content is available; please refresh.")
          },
          offline() {
            console.log(
              "No internet connection found. App is running in offline mode."
            )
          },
          error(a) {
            console.error("Error during service worker registration:", a)
          },
        })
        var p = e(2483),
          h = e(7139),
          u = e.p + "img/home.483b84c5.png"
        const f = (a) => (
            (0, c.dD)("data-v-0a86b283"), (a = a()), (0, c.Cn)(), a
          ),
          m = { class: "home", id: "home" },
          b = { class: "main mains" },
          g = { class: "text" },
          E = { class: "left" },
          w = f(() => (0, c._)("p", null, "HK FLOKI FINANCE IS BUILDING", -1)),
          y = f(() =>
            (0, c._)(
              "p",
              { style: { color: "rgba(255, 255, 255, .4)" } },
              "MEMEFI FOR MEME TOKENS.",
              -1
            )
          ),
          A = f(() => (0, c._)("p", null, "Trust CODE.", -1)),
          k = f(() =>
            (0, c._)(
              "p",
              null,
              [
                (0, c.Uk)("Trust"),
                (0, c._)("span", { class: "us" }, " humanity "),
                (0, c.Uk)("HK FLOKI."),
              ],
              -1
            )
          ),
          H = f(() =>
            (0, c._)(
              "p",
              { class: "sitext" },
              [
                (0, c.Uk)(
                  "$HK FLOKI is the THE MEME REVOLUTION and meme token that helps "
                ),
                (0, c._)("br"),
                (0, c.Uk)(" bring liquidity and DeFi to all meme tokens."),
              ],
              -1
            )
          ),
          D = { class: "ico_list" },
          K = ["href"],
          C = (0, c.uE)(
            '<div class="btns" data-v-0a86b283><a href="https://github.com/AnalytixAudit/Solidity/blob/main/20230602_AnalytixAudit_HongKong%20Doge_HKDOGE_Audit.pdf" data-v-0a86b283><div class="btn_item audit" data-v-0a86b283><p class="btn_t" data-v-0a86b283>Audit</p></div></a><a href="https://www.pinksale.finance/launchpad/0xEC6A6e69e58e7B73037aEa036b278005DD2F9FeD?chain=BSC&amp;refId=0xcA86b3Ac18627762590ee90139eB67f0135374d5" data-v-0a86b283><div class="btn_item audit" data-v-0a86b283><p class="btn_t" data-v-0a86b283>presale</p></div></a><a href="https://docs.hkdoge.vip/" data-v-0a86b283><div class="btn_item whitepaper" data-v-0a86b283><p class="btn_t" data-v-0a86b283>whitepaper</p></div></a></div>',
            1
          ),
          M = f(() =>
            (0, c._)(
              "div",
              { class: "right" },
              [(0, c._)("img", { src: u, alt: "" })],
              -1
            )
          ),
          S = { class: "containers" }
        function O(a, t, e, i, s, n) {
          const o = (0, c.up)("MyHeader"),
            r = (0, c.up)("MyBanner"),
            d = (0, c.up)("About"),
            l = (0, c.up)("MyHow"),
            v = (0, c.up)("MyToken"),
            p = (0, c.up)("MyPoamap"),
            u = (0, c.up)("MyContact"),
            f = (0, c.up)("Footer")
          return (
            (0, c.wg)(),
            (0, c.iD)(
              c.HY,
              null,
              [
                (0, c._)("div", m, [
                  (0, c.Wm)(o),
                  (0, c._)("div", b, [
                    (0, c._)("div", g, [
                      (0, c._)("div", E, [
                        w,
                        y,
                        A,
                        k,
                        H,
                        (0, c._)("ul", D, [
                          ((0, c.wg)(!0),
                          (0, c.iD)(
                            c.HY,
                            null,
                            (0, c.Ko)(
                              s.ico_list,
                              (a, t) => (
                                (0, c.wg)(),
                                (0, c.iD)("li", { key: t }, [
                                  (0, c._)(
                                    "a",
                                    { href: a.href, style: (0, h.j5)(a.style) },
                                    null,
                                    12,
                                    K
                                  ),
                                ])
                              )
                            ),
                            128
                          )),
                        ]),
                        C,
                      ]),
                      M,
                    ]),
                  ]),
                  (0, c.Wm)(r, { class: "anBanner", speeds: 3e3, ss: 3 }),
                ]),
                (0, c._)("div", S, [
                  (0, c.Wm)(d),
                  (0, c.Wm)(l),
                  (0, c.Wm)(v),
                  (0, c.Wm)(p),
                ]),
                (0, c.Wm)(u),
                (0, c.Wm)(f),
              ],
              64
            )
          )
        }
        e(7658)
        var x = e.p + "img/logo.0716726c.png",
          T =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAPNJREFUeF7tm7ERwkAMBE/N0AQt4DooA+qgDjIiZqAuMaTmnyE1uw4dWadbSS/bFfhV8PijADoAroAIwA1gERQBEYArIAJwA8y7QHcfkixJdhsX6Z7kVlXPURxDBLp7n+Sx8cDXj79U1XV9cybAOcnpzwS4VNVRAVYKiMDM5ugi+Gfsfw3HQYiU7Z/nAJIoIkDKtggMFBABEYArMEUAPQq7D+h2H0BfiLBXYu/GgC6CpM7oJEjKtochD0OfClgDrAFwBUQAbgC/D/Dl6AiBdh/gQsR9gPsASH90EIIkehqmDtABcAVEAG4A/xkSARGAK4BH4AX1WmBB9Mxp4AAAAABJRU5ErkJggg=="
        const j = (a) => (
            (0, c.dD)("data-v-8a23ecea"), (a = a()), (0, c.Cn)(), a
          ),
          G = { class: "main" },
          Z = j(() =>
            (0, c._)(
              "div",
              { class: "logo" },
              [(0, c._)("img", { src: x, alt: "" })],
              -1
            )
          ),
          V = { class: "nav" },
          W = (0, c.uE)(
            '<li data-v-8a23ecea><a href="#about" data-v-8a23ecea>ABOUT</a></li><li data-v-8a23ecea><a href="#HOW" data-v-8a23ecea>HOW TO BUY</a></li><li data-v-8a23ecea><a href="#TOKENOMICS" data-v-8a23ecea>TOKENOMICS</a></li><li data-v-8a23ecea><a href="#ROADMAP" data-v-8a23ecea>ROADMAP</a></li><li data-v-8a23ecea><a class="nav_btn" href="https://pancakeswap.finance/swap?outputCurrency=0xB29fcA944571E857F0DcA789df7c1dF695183B56" data-v-8a23ecea> Buy Now </a></li>',
            5
          ),
          N = [W],
          X = j(() => (0, c._)("img", { src: T, alt: "" }, null, -1)),
          I = [X],
          P = j(() => (0, c._)("div", { class: "h" }, null, -1))
        function q(a, t, e, s, n, o) {
          return (
            (0, c.wg)(),
            (0, c.iD)(
              c.HY,
              null,
              [
                (0, c._)("header", null, [
                  (0, c._)("div", G, [
                    Z,
                    (0, c._)("nav", null, [
                      (0, c.wy)((0, c._)("ul", V, N, 512), [[i.F8, n.show]]),
                      (0, c._)(
                        "div",
                        {
                          class: "menu",
                          onClick: t[0] || (t[0] = (a) => o.menu()),
                        },
                        I
                      ),
                    ]),
                  ]),
                ]),
                P,
              ],
              64
            )
          )
        }
        var U = {
          data() {
            return { show: !1 }
          },
          mounted() {
            ;(this.bodyW = document.body.clientWidth),
              this.bodyW <= 1120 ? (this.show = !1) : (this.show = !0),
              (window.onresize = () => {
                ;(this.bodyW = document.body.clientWidth),
                  this.bodyW <= 1120 ? (this.show = !1) : (this.show = !0)
              })
          },
          methods: {
            menu() {
              this.show = !this.show
            },
          },
        }
        const F = (0, o.Z)(U, [
          ["render", q],
          ["__scopeId", "data-v-8a23ecea"],
        ])
        var R = F,
          z = e.p + "img/avatar.4ed2a052.png",
          B = e.p + "img/about_tit.8887f492.png",
          J = e.p + "img/dia1.2c87d232.png"
        const L = { class: "container main", id: "about" },
          Q = (0, c.uE)(
            '<div class="left" data-v-23ea544b><img src="' +
              z +
              '" alt="" data-v-23ea544b></div><div class="right" data-v-23ea544b><div class="title" data-v-23ea544b><img src="' +
              B +
              '" alt="" data-v-23ea544b></div><div class="box" data-v-23ea544b><p data-v-23ea544b>Welcome to HKFLOKI. We are a unified collective and community <br data-v-23ea544b> that is for protecting the good, privacy, and freedom of humanity <br data-v-23ea544b> HKFLOKI. Each of us is responsible for architecting the future of <br data-v-23ea544b> the world. Through our combined efforts, we can be a harmonious <br data-v-23ea544b> and collaborative community that helps society revert back to a <br data-v-23ea544b> decentralized world that creates freedom, fairness, and equal <br data-v-23ea544b> opportunity for every citizen regardless of race, status, or wealth.</p></div><div class="dia1" data-v-23ea544b><img src="' +
              J +
              '" alt="" data-v-23ea544b></div></div>',
            2
          ),
          Y = [Q]
        function _(a, t, e, i, s, n) {
          return (0, c.wg)(), (0, c.iD)("div", L, Y)
        }
        var $ = {
          data() {
            return {}
          },
        }
        const aa = (0, o.Z)($, [
          ["render", _],
          ["__scopeId", "data-v-23ea544b"],
        ])
        var ta = aa,
          ea = e.p + "img/dia2.2ef75013.png",
          ia = e.p + "img/how.4d194d17.png",
          ca = e.p + "img/pile.22de61ee.png",
          sa = e.p + "img/cap.18d2359d.png"
        const na = (a) => (
            (0, c.dD)("data-v-6d32866d"), (a = a()), (0, c.Cn)(), a
          ),
          oa = { class: "container main", id: "HOW" },
          ra = na(() =>
            (0, c._)(
              "div",
              { class: "dia" },
              [(0, c._)("img", { src: ea, alt: "" })],
              -1
            )
          ),
          da = na(() =>
            (0, c._)(
              "div",
              { class: "title" },
              [(0, c._)("img", { src: ia, alt: "" })],
              -1
            )
          ),
          la = { class: "icon" },
          va = ["src"],
          pa = { class: "text" },
          ha = na(() =>
            (0, c._)(
              "div",
              { class: "pile" },
              [(0, c._)("img", { src: ca, alt: "" })],
              -1
            )
          ),
          ua = na(() =>
            (0, c._)(
              "div",
              { class: "cap" },
              [(0, c._)("img", { src: sa, alt: "" })],
              -1
            )
          )
        function fa(a, t, e, i, s, n) {
          return (
            (0, c.wg)(),
            (0, c.iD)("div", oa, [
              ra,
              da,
              ((0, c.wg)(!0),
              (0, c.iD)(
                c.HY,
                null,
                (0, c.Ko)(
                  s.card,
                  (a, t) => (
                    (0, c.wg)(),
                    (0, c.iD)("div", { class: "card_list", key: t }, [
                      (0, c._)("div", la, [
                        (0, c._)("img", { src: a.pic, alt: "" }, null, 8, va),
                      ]),
                      (0, c._)("div", pa, [
                        (0, c._)("h3", null, (0, h.zw)(a.tit), 1),
                        (0, c._)("p", null, (0, h.zw)(a.p), 1),
                      ]),
                    ])
                  )
                ),
                128
              )),
              ha,
              ua,
            ])
          )
        }
        var ma = {
          data() {
            return {
              card: [
                {
                  pic: "../img/gg1.png",
                  tit: "Create a Wallet",
                  p: "download metamask or your wallet of choice from the app store or google play store for free. Desktopusers, download the google chrome extension by going to metamask.io.",
                },
                {
                  pic: "../img/gg2.png",
                  tit: "Get Some BNB",
                  p: "have BNB in your wallet to switch to $HKFLOKI. If you don’t have any BNB, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.",
                },
                {
                  pic: "../img/gg3.png",
                  tit: "Go to PancakeSwap",
                  p: "connect to Pancakeswap. Paste the $HKFLOKI token address into PancakeSwap, select HKFLOKI, and confirm. When Metamask prompts you for a wallet signature, sign.",
                },
                {
                  pic: "../img/gg4.png",
                  tit: "Switch BNB for $HKFLOKI",
                  p: "switch ETH for $HKFLOKI. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.",
                },
              ],
            }
          },
        }
        const ba = (0, o.Z)(ma, [
          ["render", fa],
          ["__scopeId", "data-v-6d32866d"],
        ])
        var ga = ba,
          Ea = e.p + "img/token.e07d394d.png",
          wa = e.p + "img/token_num.fecc2e06.png",
          ya = e.p + "img/ggbundr.8e9ce933.png"
        const Aa = (0, c.uE)(
          '<div class="title" id="TOKENOMICS" data-v-66b2a360><img src="' +
            Ea +
            '" alt="" data-v-66b2a360></div><div class="container main" data-v-66b2a360><div class="left" data-v-66b2a360><div class="text_tit" data-v-66b2a360><div class="number" data-v-66b2a360>Token Supply:</div><div class="number numberbg" data-v-66b2a360> 420,690,000,000,000 <img src="' +
            wa +
            '" alt="" data-v-66b2a360></div></div><div class="card" data-v-66b2a360><h3 data-v-66b2a360>LOW Taxes, No Bullshit. It’s that simple.</h3><p data-v-66b2a360>563% of the tokens were sent to the liquidity pool,LP tokens were lock 1 year, and contract is renounced.The remaining 11% of the supply is being held in amulti-sig wallet only to be used as tokens for futurecentralized exchange listings, bridges, and liquidity pools.”</p><br data-v-66b2a360></div></div><div class="riht" data-v-66b2a360><div class="pic" data-v-66b2a360><img src="' +
            ya +
            '" alt="" data-v-66b2a360></div></div></div>',
          2
        )
        function ka(a, t, e, i, c, s) {
          return Aa
        }
        var Ha = {
          data() {
            return {}
          },
        }
        const Da = (0, o.Z)(Ha, [
          ["render", ka],
          ["__scopeId", "data-v-66b2a360"],
        ])
        var Ka = Da,
          Ca = e.p + "img/672.a7ea36b0.png",
          Ma = e.p + "img/roadmap.0284caaf.png",
          Sa = e.p + "img/667.7e3c0c8e.png"
        const Oa = { class: "road_box" },
          xa = (0, c.uE)(
            '<div class="container main" id="ROADMAP" data-v-ccf4467e><div class="pic" data-v-ccf4467e><img src="' +
              Ca +
              '" alt="" data-v-ccf4467e></div><div class="cont" data-v-ccf4467e><div class="title" data-v-ccf4467e><img src="' +
              Ma +
              '" alt="" data-v-ccf4467e></div><div class="card" data-v-ccf4467e><p data-v-ccf4467e>Phase 1: Meme</p><p data-v-ccf4467e>Phase 2: Vibe and HODL</p><p data-v-ccf4467e>Phase 3: Meme Takeover</p></div></div><div class="pic" data-v-ccf4467e><img src="' +
              Sa +
              '" alt="" data-v-ccf4467e></div></div><div class="main text_main" style="margin-top:60px;" data-v-ccf4467e><p data-v-ccf4467e>All jokes aside, here is a rough sketch of $HKFLOKI path ahead. We dont wan’t</p><p data-v-ccf4467e>to give everything away on day 1, Expect surprises along the way ;)</p></div><div class="card_list main" data-v-ccf4467e><div class="card" data-v-ccf4467e><h3 data-v-ccf4467e>Phase 1</h3><p data-v-ccf4467e>Launch</p><p data-v-ccf4467e>CoinGecko/Coinmark</p><p data-v-ccf4467e>etcap Listings</p><br data-v-ccf4467e><p data-v-ccf4467e>1,000+ Holders</p><p data-v-ccf4467e>Get $HKFLOKI Trending</p><p data-v-ccf4467e>on twitter with our</p><p data-v-ccf4467e>memetic power</p></div><div class="card" data-v-ccf4467e><h3 data-v-ccf4467e>Phase 2</h3><p data-v-ccf4467e>Community Partnerships</p><p data-v-ccf4467e>HKFLOKI Times digital</p><p data-v-ccf4467e>newsletter</p><br data-v-ccf4467e><p data-v-ccf4467e>Formation of token gated</p><p data-v-ccf4467e>discord group, HKFLOKI</p><p data-v-ccf4467e>Palace, for holders, more</p><p data-v-ccf4467e>details tba</p><br data-v-ccf4467e><p data-v-ccf4467e>CEX Listings</p><p data-v-ccf4467e>10,000+holders</p></div><div class="card" data-v-ccf4467e><h3 data-v-ccf4467e>Phase 3</h3><p data-v-ccf4467e>HKFLOKI merch</p><p data-v-ccf4467e>HKFLOKI Academy</p><p data-v-ccf4467e>HKFLOKI Tools</p><p data-v-ccf4467e>T1 Exchange Listings</p><p data-v-ccf4467e>100,000+ holders</p><br data-v-ccf4467e><p data-v-ccf4467e>Meme Takeover</p></div></div>',
            3
          ),
          Ta = { class: "banners" }
        function ja(a, t, e, i, s, n) {
          const o = (0, c.up)("MyBanner")
          return (
            (0, c.wg)(),
            (0, c.iD)("div", Oa, [
              xa,
              (0, c._)("div", Ta, [
                (0, c.Wm)(o, { speeds: 2800, ss: 2.8 }, null, 8, ["ss"]),
              ]),
            ])
          )
        }
        var Ga =
          "data:image/png;base64,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"
        const Za = { class: "banner_box" },
          Va = (0, c.uE)(
            '<div class="item" data-v-d5f9294c><img src="' +
              Ga +
              '" alt="" data-v-d5f9294c></div><div class="item" data-v-d5f9294c><img src="' +
              Ga +
              '" alt="" data-v-d5f9294c></div><div class="item" data-v-d5f9294c><img src="' +
              Ga +
              '" alt="" data-v-d5f9294c></div><div class="item" data-v-d5f9294c><img src="' +
              Ga +
              '" alt="" data-v-d5f9294c></div><div class="item" data-v-d5f9294c><img src="' +
              Ga +
              '" alt="" data-v-d5f9294c></div><div class="item" data-v-d5f9294c><img src="' +
              Ga +
              '" alt="" data-v-d5f9294c></div><div class="item" data-v-d5f9294c><img src="' +
              Ga +
              '" alt="" data-v-d5f9294c></div>',
            7
          ),
          Wa = [Va]
        function Na(a, t, e, i, s, n) {
          return (
            (0, c.wg)(),
            (0, c.iD)("div", Za, [
              (0, c._)(
                "div",
                { class: "banner_scroll", style: (0, h.j5)(s.ans) },
                Wa,
                4
              ),
            ])
          )
        }
        var Xa = {
          data() {
            return { ans: "" }
          },
          created() {
            this.an_rows()
          },
          methods: {
            an_rows() {
              let a = 1
              setTimeout(() => {
                a++,
                  (this.ans = `transition:all ${
                    this.ss
                  }s linear;transform:translateX(-${300 * a}px)`)
              }),
                setInterval(() => {
                  if ((a++, a > 6))
                    return (
                      (a = 0),
                      void (this.ans = `transition:none;transform:translateX(-${
                        340 * a
                      }px)`)
                    )
                  this.ans = `transition:all ${
                    this.ss
                  }s linear;transform:translateX(-${340 * a}px)`
                }, this.speeds)
            },
          },
          props: { speeds: Number, ss: Number },
        }
        const Ia = (0, o.Z)(Xa, [
          ["render", Na],
          ["__scopeId", "data-v-d5f9294c"],
        ])
        var Pa = Ia,
          qa = {
            data() {
              return {}
            },
            components: { MyBanner: Pa },
          }
        const Ua = (0, o.Z)(qa, [
          ["render", ja],
          ["__scopeId", "data-v-ccf4467e"],
        ])
        var Fa = Ua,
          Ra = e.p + "img/contact.9553c46d.png"
        const za = (a) => (
            (0, c.dD)("data-v-002078dd"), (a = a()), (0, c.Cn)(), a
          ),
          Ba = { class: "containerst" },
          Ja = { class: "container main" },
          La = za(() =>
            (0, c._)(
              "div",
              { class: "title" },
              [(0, c._)("img", { class: "title_img", src: Ra, alt: "" })],
              -1
            )
          ),
          Qa = za(() =>
            (0, c._)(
              "div",
              { class: "title" },
              [(0, c._)("img", { src: x, alt: "" })],
              -1
            )
          ),
          Ya = { class: "icon_list" },
          _a = ["href"],
          $a = za(() =>
            (0, c._)(
              "div",
              { class: "main text_main" },
              [
                (0, c._)(
                  "p",
                  null,
                  "$HKFLOKI coin has no association with Matt Furie or his creation Poo the Frog.​"
                ),
                (0, c._)(
                  "p",
                  null,
                  "This token is simply paying homage to a meme we all love and recognize."
                ),
              ],
              -1
            )
          ),
          at = za(() =>
            (0, c._)(
              "div",
              { class: "main text_main" },
              [
                (0, c._)(
                  "p",
                  null,
                  "$HKFLOKI is a meme coin with no intrinsic value or expectation of financial​"
                ),
                (0, c._)(
                  "p",
                  null,
                  "return. There is no formal team or roadmap. the coin is completely useless"
                ),
              ],
              -1
            )
          )
        function tt(a, t, e, i, s, n) {
          return (
            (0, c.wg)(),
            (0, c.iD)("div", Ba, [
              (0, c._)("div", Ja, [
                La,
                Qa,
                (0, c._)("ul", Ya, [
                  ((0, c.wg)(!0),
                  (0, c.iD)(
                    c.HY,
                    null,
                    (0, c.Ko)(
                      s.ico_list,
                      (a, t) => (
                        (0, c.wg)(),
                        (0, c.iD)("li", { key: t }, [
                          (0, c._)(
                            "a",
                            { href: a.href, style: (0, h.j5)(a.style) },
                            null,
                            12,
                            _a
                          ),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
                $a,
                at,
              ]),
            ])
          )
        }
        var et = {
          data() {
            return {
              ico_list: [
                { href: "https://t.me/HKDogeEntire" },
                { href: "https://twitter.com/HKDOGECEO" },
                { href: "#" },
              ],
            }
          },
          created() {
            this.iconlist()
          },
          methods: {
            iconlist() {
              const a = []
              this.ico_list.forEach((t, e) => {
                a.push({
                  style: `background-image: url(../img/bottom_ico_${
                    e + 1
                  }.png)`,
                  href: t.href,
                })
              }),
                (this.ico_list = a)
            },
          },
        }
        const it = (0, o.Z)(et, [
          ["render", tt],
          ["__scopeId", "data-v-002078dd"],
        ])
        var ct = it
        function st(a, t) {
          return (
            (0, c.wg)(),
            (0, c.iD)(
              "footer",
              null,
              "2023 @ HK FLOKI Finance, an anon community, brand, and movement"
            )
          )
        }
        const nt = {},
          ot = (0, o.Z)(nt, [
            ["render", st],
            ["__scopeId", "data-v-a4385462"],
          ])
        var rt = ot,
          dt = {
            data() {
              return {
                ico_list: [
                  { href: "https://twitter.com/HKDOGECEO" },
                  { href: "https://t.me/HKDogeEntire" },
                  {
                    href: "https://www.dextools.io/app/cn/bnb/pair-explorer/0xf21d88df8d95803f1c1fab5a909ee12050c490d0",
                  },
                  {
                    href: "https://www.dexview.com/bsc/0xB29fcA944571E857F0DcA789df7c1dF695183B56",
                  },
                  { href: "#" },
                  {
                    href: "https://www.pinksale.finance/launchpad/0xEC6A6e69e58e7B73037aEa036b278005DD2F9FeD?chain=BSC&refId=0xcA86b3Ac18627762590ee90139eB67f0135374d5",
                  },
                ],
              }
            },
            created() {
              this.iconlist()
            },
            methods: {
              iconlist() {
                const a = []
                this.ico_list.forEach((t, e) => {
                  ;(t.style = `background-image: url(../img/00${e + 1}.png)`),
                    a.push(t)
                }),
                  (this.ico_list = a)
              },
            },
            components: {
              MyHeader: R,
              About: ta,
              MyHow: ga,
              MyToken: Ka,
              MyPoamap: Fa,
              MyContact: ct,
              Footer: rt,
              MyBanner: Pa,
            },
          }
        const lt = (0, o.Z)(dt, [
          ["render", O],
          ["__scopeId", "data-v-0a86b283"],
        ])
        var vt = lt
        const pt = [{ path: "/", name: "home", component: vt }],
          ht = (0, p.p7)({ history: (0, p.PO)("/"), routes: pt })
        var ut = ht
        ;(0, i.ri)(d).use(ut).use(l.Z).mount("#app")
      },
    },
    t = {}
  function e(i) {
    var c = t[i]
    if (void 0 !== c) return c.exports
    var s = (t[i] = { exports: {} })
    return a[i].call(s.exports, s, s.exports, e), s.exports
  }
  ;(e.m = a),
    (function () {
      var a = []
      e.O = function (t, i, c, s) {
        if (!i) {
          var n = 1 / 0
          for (l = 0; l < a.length; l++) {
            ;(i = a[l][0]), (c = a[l][1]), (s = a[l][2])
            for (var o = !0, r = 0; r < i.length; r++)
              (!1 & s || n >= s) &&
              Object.keys(e.O).every(function (a) {
                return e.O[a](i[r])
              })
                ? i.splice(r--, 1)
                : ((o = !1), s < n && (n = s))
            if (o) {
              a.splice(l--, 1)
              var d = c()
              void 0 !== d && (t = d)
            }
          }
          return t
        }
        s = s || 0
        for (var l = a.length; l > 0 && a[l - 1][2] > s; l--) a[l] = a[l - 1]
        a[l] = [i, c, s]
      }
    })(),
    (function () {
      e.n = function (a) {
        var t =
          a && a.__esModule
            ? function () {
                return a["default"]
              }
            : function () {
                return a
              }
        return e.d(t, { a: t }), t
      }
    })(),
    (function () {
      e.d = function (a, t) {
        for (var i in t)
          e.o(t, i) &&
            !e.o(a, i) &&
            Object.defineProperty(a, i, { enumerable: !0, get: t[i] })
      }
    })(),
    (function () {
      e.g = (function () {
        if ("object" === typeof globalThis) return globalThis
        try {
          return this || new Function("return this")()
        } catch (a) {
          if ("object" === typeof window) return window
        }
      })()
    })(),
    (function () {
      e.o = function (a, t) {
        return Object.prototype.hasOwnProperty.call(a, t)
      }
    })(),
    (function () {
      e.p = "/"
    })(),
    (function () {
      var a = { 143: 0 }
      e.O.j = function (t) {
        return 0 === a[t]
      }
      var t = function (t, i) {
          var c,
            s,
            n = i[0],
            o = i[1],
            r = i[2],
            d = 0
          if (
            n.some(function (t) {
              return 0 !== a[t]
            })
          ) {
            for (c in o) e.o(o, c) && (e.m[c] = o[c])
            if (r) var l = r(e)
          }
          for (t && t(i); d < n.length; d++)
            (s = n[d]), e.o(a, s) && a[s] && a[s][0](), (a[s] = 0)
          return e.O(l)
        },
        i = (self["webpackChunksprce"] = self["webpackChunksprce"] || [])
      i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)))
    })()
  var i = e.O(void 0, [998], function () {
    return e(1492)
  })
  i = e.O(i)
})()
//# sourceMappingURL=app.cb7080b9.js.map
