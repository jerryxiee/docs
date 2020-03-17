(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{195:function(e,t,a){e.exports=a.p+"assets/img/anchor_placement.76d7bb80.png"},196:function(e,t,a){e.exports=a.p+"assets/img/totalstation.3b584829.jpg"},248:function(e,t,a){"use strict";a.r(t);var n=a(2),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"anchor-placement"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#anchor-placement"}},[e._v("#")]),e._v(" Anchor Placement")]),e._v(" "),n("p",[e._v("The anchors serve as the reference points of your system. They are similar to the satellites in a GPS system.\nIt is crucial that they are put on a strategic place and that their coordinates are calculated very accurately.")]),e._v(" "),n("h2",{attrs:{id:"placement-strategy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#placement-strategy"}},[e._v("#")]),e._v(" Placement Strategy")]),e._v(" "),n("p",[e._v("There are some rules of thumb to keep in mind when you are placing your anchors in order to get the most out of your system.")]),e._v(" "),n("h3",{attrs:{id:"_1-anchor-in-each-quadrant"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-anchor-in-each-quadrant"}},[e._v("#")]),e._v(" 1. Anchor in each Quadrant")]),e._v(" "),n("p",[e._v("For every possible position the tags can come, you want to have at least one anchor in every quadrant around that position.\nThis makes that the underlying mathematical problem is "),n("em",[e._v("well-conditioned")]),e._v(", which basically means that errors in the measurements have a smaller influence on the error of the calculated position.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(195),alt:"anchor_placement"}})]),e._v(" "),n("h3",{attrs:{id:"_2-daisy-chain-anchors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-daisy-chain-anchors"}},[e._v("#")]),e._v(" 2. Daisy-chain Anchors")]),e._v(" "),n("p",[e._v("Try to put the anchors such that every anchor sees at least a couple other anchors.\nDoing this makes the time synchronization between the anchors easier and thus more accurate.")]),e._v(" "),n("h3",{attrs:{id:"_3-keep-los-in-mind"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-keep-los-in-mind"}},[e._v("#")]),e._v(" 3. Keep LOS in mind")]),e._v(" "),n("p",[e._v("Any object that is in between the "),n("code",[e._v("Line of Sight")]),e._v(" between an anchor and a tag will have a certain influence on the measurement.\nSome objects are worse than others. Metal, concrete and fluids for example can severely attenuate the UWB signal and increase the measured distance.")]),e._v(" "),n("h3",{attrs:{id:"_4-keep-the-antenna-away-from-metal"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-keep-the-antenna-away-from-metal"}},[e._v("#")]),e._v(" 4. Keep the Antenna away from metal")]),e._v(" "),n("p",[e._v("Aim your antenna well and make sure it doesn't have any metal objects nearby.")]),e._v(" "),n("h2",{attrs:{id:"calculating-anchor-coordinates"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#calculating-anchor-coordinates"}},[e._v("#")]),e._v(" Calculating Anchor Coordinates")]),e._v(" "),n("h3",{attrs:{id:"autopositioning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#autopositioning"}},[e._v("#")]),e._v(" AutoPositioning")]),e._v(" "),n("p",[e._v("The easiest way to calculate the coordinates of the anchors is by using the built-in function "),n("code",[e._v("AutoPos")]),e._v(".\nThe AutoPos algorithm has two main steps:")]),e._v(" "),n("ol",[n("li",[e._v("Range between all anchors")]),e._v(" "),n("li",[e._v("Run a mathematical model to map the anchors")])]),e._v(" "),n("p",[e._v("This procedure is quite convenient, but you need to keep in mind that this is only useful in small setups with a small amount of anchors deployed (typically up to 6).\nWhen more anchors are used, the algorithm will still work but the results might become unreliable. Especially when there are some missing measurements between some anchors because they are out of range for each other.\nThe returned anchor coordinates are a relative reference system. You can give the coordinates an offset or rotate them around the zero-point.")]),e._v(" "),n("p",[e._v("You can find a step-by-step guide on how to use the AutoPos "),n("a",{attrs:{href:"LINK"}},[e._v("here")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"total-station"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#total-station"}},[e._v("#")]),e._v(" Total Station")]),e._v(" "),n("p",[e._v("A total station (TS) is an electronic/optical instrument that is mostly used for surveying and building construction.\nIt allows you to very accurately (up to a few millimeters in all directions) measure the coordinates of static points in your scene.\nIn our case, those static points will be the anchors.\nThis is what a TS can look like:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(196),alt:"totalstation"}})]),e._v(" "),n("p",[e._v("If you want to achieve as accurate results as possible, you should always consider using a TS to calculate the coordinates of your anchors.")])])}),[],!1,null,null,null);t.default=s.exports}}]);