(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{287:function(t,e,o){"use strict";o.r(e);var s=o(2),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"setup-your-first-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-your-first-system"}},[t._v("#")]),t._v(" Setup your first system")]),t._v(" "),s("p",[t._v("On this page you'll learn how to set up your very first RTLS system. Don't worry, it's easy! Once you get the hang of it you'll be able to set up a system in minutes. Make sure you have at least one Initiator anchor,  3 normal anchors and one tag.")]),t._v(" "),s("h2",{attrs:{id:"login-on-the-portal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#login-on-the-portal"}},[t._v("#")]),t._v(" Login on the Portal")]),t._v(" "),s("p",[t._v("Before turning to the hardware, you need to make sure you have an account with which you can login. Open the "),s("strong",[t._v("portal app")]),t._v("  via "),s("a",{attrs:{href:"https://cloud.rtloc.com/ble",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cloud.rtloc.com/ble"),s("OutboundLink")],1),t._v(" or from "),s("strong",[t._v("RTHub")]),t._v(". Log in using your account, or create one if you haven't already.")]),t._v(" "),s("p",[t._v('Optionally, create an RTLS "Project". This is not a hard requirement for these first steps.')]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Most browsers should be supported, though recent chromium-based browsers (such as Google Chrome) are your safest bet.")])]),t._v(" "),s("h2",{attrs:{id:"device-firmware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#device-firmware"}},[t._v("#")]),t._v(" Device firmware")]),t._v(" "),s("p",[t._v("First make sure the UWB RTLS devices (tags and anchors) have the necessary firmwares.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("If you are using starter kit, the devices should already have the necessary firmware. In case you want to update the firmware on the tags (or switch to Distance Tracking) have a look at our guide of "),s("router-link",{attrs:{to:"/hardware/flashing/hw_flashing.html"}},[t._v("hardware flashing")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"anchors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anchors"}},[t._v("#")]),t._v(" Anchors")]),t._v(" "),s("p",[t._v("First we take care of the anchors. There is one special anchor called the "),s("code",[t._v("Initiator")]),t._v(". This is the anchor that regulates the system. You will communicate via Bluetooth with this anchor, so make sure you can get close to that anchor with your computer.")]),t._v(" "),s("p",[t._v('The anchors are marked with the label "A" and their ID below.')]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("Power")]),t._v(" all devices over USB (using a power adapter or a battery)")])]),t._v(" "),s("li",[s("p",[t._v("Hang the anchors in a good place. Make sure there is an anchor in each quadrant. More information on good practices on anchor placement can be found "),s("router-link",{attrs:{to:"/reference/anchor_placement.html#_1-anchor-in-each-quadrant"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),s("li",[s("p",[t._v("Press the "),s("strong",[t._v("Bluetooth")]),t._v(" icon and select "),s("code",[t._v("Connect to device")]),t._v(".")])])]),t._v(" "),s("p",[s("img",{attrs:{src:o(31),alt:"BLE"}})]),t._v(" "),s("p",[t._v("Click on the initiator device, called "),s("em",[t._v("INITxxx")]),t._v(' and press "Pair".')]),t._v(" "),s("p",[s("img",{attrs:{src:o(87),alt:"BLE"}})]),t._v(" "),s("p",[t._v("A Bluetooth connection is now being made. If successful, you should see some device information in the bluetooth page of our portal app. You should see something like this:")]),t._v(" "),s("p",[s("img",{attrs:{src:o(88),alt:"BLE"}})]),t._v(" "),s("p",[t._v("If you are not in the BLE specific page, you can always go there by pressing the "),s("strong",[t._v("Bluetooth")]),t._v(" icon and then "),s("code",[t._v("BLE device info")])]),t._v(" "),s("p",[t._v("When all these steps are done, we can continue with calculating where the anchors are hung. We do this by "),s("strong",[t._v("autopositioning")]),t._v(" the anchors. They will try to figure out their relative positions automatically.")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v('Open the "visualize" tab and press the '),s("strong",[t._v("autoposition")]),t._v(" button (make sure all tags are off). The anchor XYZ coordinates are now being measured.")])]),t._v(" "),s("p",[s("img",{attrs:{src:o(89),alt:"BLE"}})]),t._v(" "),s("p",[t._v("You can track the progress of the algorithm live. You will see distances being measured between the anchors.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(90),alt:"BLE"}})]),t._v(" "),s("p",[t._v("Once the algorithm is done, the view will automatically switch to visualize the anchors. You can check if these positions correspond to where you have placed your anchors.\n"),s("img",{attrs:{src:o(91),alt:"BLE"}})]),t._v(" "),s("p",[t._v("You can also see the coordinates of the anchors in the "),s("em",[t._v("Configure")]),t._v(" screen.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(92),alt:"BLE"}})]),t._v(" "),s("p",[t._v("If something went wrong during the autopositioning algorithm, you will get notified to try it again.\n"),s("img",{attrs:{src:o(93),alt:"BLE"}}),t._v("\nIf you don't manage to get good anchor coordinates, please refer to the "),s("router-link",{attrs:{to:"/getstarted/basic_positioning_getting_started.html#autopos-keeps-failing"}},[t._v("troubleshoot section")]),t._v(" below.")],1),t._v(" "),s("h2",{attrs:{id:"tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tags"}},[t._v("#")]),t._v(" Tags")]),t._v(" "),s("p",[t._v('Now that all anchor stuff is done, we can focus on the tags. The tags are labeled with the letter "T", with their ID below.\nThe only thing you have to do is power the tag up. After a couple of seconds, the positions of the tag are coming in and all active tags are visualized.')]),t._v(" "),s("p",[s("img",{attrs:{src:o(94),alt:"BLE"}})]),t._v(" "),s("h2",{attrs:{id:"troubleshoot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshoot"}},[t._v("#")]),t._v(" Troubleshoot")]),t._v(" "),s("h3",{attrs:{id:"lost-ble-connection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lost-ble-connection"}},[t._v("#")]),t._v(" Lost BLE Connection")]),t._v(" "),s("p",[t._v("If you lost the connection with the anchor for some reason, it should reconnect automatically.\nIf this isn't the case, refresh the page and try to connect again.")]),t._v(" "),s("h3",{attrs:{id:"autopos-keeps-failing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autopos-keeps-failing"}},[t._v("#")]),t._v(" Autopos keeps failing")]),t._v(" "),s("p",[t._v("There could be multiple reasons for the autopositioning process to fail. Keep the following rules in mind:")]),t._v(" "),s("ul",[s("li",[t._v("all anchors should have visibility on each other")]),t._v(" "),s("li",[t._v("Try to put the anchors on more or less the same height")]),t._v(" "),s("li",[t._v("Make sure all tags are switched "),s("strong",[t._v("off")])]),t._v(" "),s("li",[t._v("Make sure all anchors are switched "),s("strong",[t._v("on")])])]),t._v(" "),s("h3",{attrs:{id:"i-don-t-see-one-of-my-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i-don-t-see-one-of-my-tags"}},[t._v("#")]),t._v(" I don't see one of my tags")]),t._v(" "),s("p",[t._v("If you are sure your tag has power, try resetting the tag. Also make sure it is in the vicinity of the anchors and it has clear sight on at least 3 anchors.")]),t._v(" "),s("p",[t._v("[TODO]")])])}),[],!1,null,null,null);e.default=a.exports},31:function(t,e,o){t.exports=o.p+"assets/img/ble.96e66fb1.jpg"},87:function(t,e,o){t.exports=o.p+"assets/img/ble2.e0c29b32.png"},88:function(t,e,o){t.exports=o.p+"assets/img/ble3.f66c4982.png"},89:function(t,e){t.exports="data:image/png;base64,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"},90:function(t,e,o){t.exports=o.p+"assets/img/ble4.697df269.png"},91:function(t,e,o){t.exports=o.p+"assets/img/ble_anchor_positions.8f2c7fc2.png"},92:function(t,e,o){t.exports=o.p+"assets/img/ble_anchor_positions2.7ad9d274.png"},93:function(t,e,o){t.exports=o.p+"assets/img/ble5.aff69f9f.png"},94:function(t,e,o){t.exports=o.p+"assets/img/ble_tag_pos.fd9b2fbe.png"}}]);