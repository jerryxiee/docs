(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{168:function(t,e,a){t.exports=a.p+"assets/img/engine_single.a2e66422.png"},169:function(t,e,a){t.exports=a.p+"assets/img/engine_multi.525a6805.png"},256:function(t,e,a){"use strict";a.r(e);var n=a(2),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"engine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine"}},[t._v("#")]),t._v(" Engine")]),t._v(" "),n("p",[t._v("The engine is a set of algorithms that convert a data set into a position of the tag. This data set can be distances between a tag and multiple anchors (TWR) or differences of the time of arrival of tagsignals on the anchors.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(168),alt:"engine_single"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(169),alt:"engine_multi"}})]),t._v(" "),n("h2",{attrs:{id:"internal-or-external"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#internal-or-external"}},[t._v("#")]),t._v(" Internal or External?")]),t._v(" "),n("p",[t._v("The engine can run on different places. Where exactly will depend on the situation.")]),t._v(" "),n("h3",{attrs:{id:"on-the-boards"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#on-the-boards"}},[t._v("#")]),t._v(" On the boards")]),t._v(" "),n("p",[t._v("If you choose to run the system in one of the inverse modes ("),n("router-link",{attrs:{to:"/reference/algorithms.html#tdoa2"}},[t._v("TDOA2")]),t._v(" or "),n("router-link",{attrs:{to:"/reference/algorithms.html#twr2"}},[t._v("TWR2")]),t._v("), the engine will run on the tags so that each tag can calculate its own position.\nFor low-end systems (not too many anchors and tags), the engine can also run on one of the anchors when in one of the normal modes.")],1),t._v(" "),n("h3",{attrs:{id:"internal-engine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#internal-engine"}},[t._v("#")]),t._v(" Internal Engine")]),t._v(" "),n("p",[t._v("As soon as the amount of anchors and tags grows however, the calculation power of the anchor will not be sufficient (since it also has to do many other tasks). In that case we will switch to running the engine on the PC.\nHere it can run from within the data collection program (RTManager).")]),t._v(" "),n("h3",{attrs:{id:"external-engine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#external-engine"}},[t._v("#")]),t._v(" External Engine")]),t._v(" "),n("p",[t._v("You can also implement your own positioning engine. Such an external engine preferably runs within the same network and connect to RTManager via a UDP connection. The raw data is then distributed over all connected external engines, crunched and forged into positions and (optionally) fed back to RTManager.")]),t._v(" "),n("h2",{attrs:{id:"mathematics"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mathematics"}},[t._v("#")]),t._v(" Mathematics")]),t._v(" "),n("p",[t._v("The RTLOC engine supports two localization techniques: trilateration and multilateration.")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("We have some descriptions and a comparison of the algorithms "),n("router-link",{attrs:{to:"/reference/algorithms.html"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),n("h3",{attrs:{id:"trilateration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#trilateration"}},[t._v("#")]),t._v(" Trilateration")]),t._v(" "),n("p",[t._v("Trilateration offers a solution for TWR problems. When you have a set of distances from tag to multiple anchors, the trilateration algorithm calculates the position of the tag from these distances.")]),t._v(" "),n("h3",{attrs:{id:"multilateration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#multilateration"}},[t._v("#")]),t._v(" Multilateration")]),t._v(" "),n("p",[t._v("Multilateration offers a solution for the TDOA problem. You have Time Difference of Arrivals as input. These can be mapped on hyperbolas. The position of the tag is at the intersection of these hyperbolas.")])])}),[],!1,null,null,null);e.default=o.exports}}]);