(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{148:function(e,t,a){e.exports=a.p+"assets/img/2_config.d5fd14aa.png"},149:function(e,t,a){e.exports=a.p+"assets/img/2_listener_module.fa1a2822.png"},150:function(e,t,a){e.exports=a.p+"assets/img/2_cfg_slots_parameters.dab93151.png"},151:function(e,t,a){e.exports=a.p+"assets/img/2_cfg_slots.7d633c07.png"},152:function(e,t,a){e.exports=a.p+"assets/img/2_cfg_buttons.30ddd924.png"},261:function(e,t,a){"use strict";a.r(t);var s=a(2),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[e._v("#")]),e._v(" Config")]),e._v(" "),s("p",[e._v("The configuration screen allows you to configure the most important timing parameters. You can choose the slots and update rate for the anchors and tags or let everything be configured automatically (this feature is coming). Also the parameters for the listeners are set here.")]),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("p",[s("img",{attrs:{src:a(148),alt:"config"}})]),e._v(" "),s("p",[e._v("1.timestamps\n1.test2")]),e._v(" "),s("h2",{attrs:{id:"listener-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#listener-module"}},[e._v("#")]),e._v(" Listener Module")]),e._v(" "),s("p",[e._v("All the connected listeners will appear in this screen. You will see their node numbers and IP addresses, to which IP the listener is sending its data and on which panID/subnetwork it is listening.\n"),s("img",{attrs:{src:a(149),alt:"listener_module"}})]),e._v(" "),s("p",[e._v("You can reset each listener individually and change the destination IP address.\nHaving problems getting the listeners in? Have a look at the troubleshoot (hier link).")]),e._v(" "),s("h2",{attrs:{id:"slots-frames"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slots-frames"}},[e._v("#")]),e._v(" Slots & Frames")]),e._v(" "),s("p",[e._v("Every second is subdivided into frames. During each frame, all of the nodes have a chance to send their data once. The size of the frames can be adjusted (more on that below), and the amount of frames that fit within a second determines the maximum update rate for the tags. The shorter the frame, the higher the update rate can be.")]),e._v(" "),s("p",[e._v("Each frame is subdivided into slots. You can assign a slot to each anchor and tag. This will determine when  they will send their data in time exactly (cfr. TDMA or Time Division Multiple Access).")]),e._v(" "),s("p",[e._v("There are multiple kind of slots. Three slotkinds are allocated for tags (Fast, Slow and ***), two are for anchors (Anchor & Cable). A tag cannot be put in an anchorslot and vice-versa.  Each slotkind has multiple editable parameters:")]),e._v(" "),s("ul",[s("li",[e._v("Chunks - how long the slot is")]),e._v(" "),s("li",[e._v("Count - how many of these slots are available in a frame")]),e._v(" "),s("li",[e._v("SlotMod - how many tags or anchors can fit in this slot. Together with the framesize fully determines the updaterate of the node (shown in the column Hertz).")]),e._v(" "),s("li",[e._v("Mode - extra parameter given to the node, available via the embedded api.")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(150),alt:"slots_params"}})]),e._v(" "),s("h3",{attrs:{id:"assigning-slots"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assigning-slots"}},[e._v("#")]),e._v(" Assigning slots")]),e._v(" "),s("p",[e._v("You can auto-assign the slots to the anchors and tags manually or automatically.\nFor the manual way, click on the tag or anchor you want, and keep pressing until you see XX. Then drag it into the slot you want. To make this automatic, click AutoAnchor. The anchor will then be assigned to the lowest possible slot.\n"),s("img",{attrs:{src:a(151),alt:"slots"}})]),e._v(" "),s("h3",{attrs:{id:"update-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-configuration"}},[e._v("#")]),e._v(" Update configuration")]),e._v(" "),s("p",[e._v("Whenever you are done configuring the nodes, press 'Bld Config' to send the configuration to the system. The number of the configuration is shown in the box left of the button. Whenever the system has successfully received the configuration, the box will turn green.\n"),s("img",{attrs:{src:a(152),alt:"buttons"}})]),e._v(" "),s("p",[e._v("Whenever the updaterate of a tag is changed, press 'Bld Speed' instead.")])])}),[],!1,null,null,null);t.default=n.exports}}]);