(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{157:function(e,t,a){e.exports=a.p+"assets/img/fwup_version.d4575170.png"},158:function(e,t,a){e.exports=a.p+"assets/img/fwup_import_1.5537023d.png"},159:function(e,t,a){e.exports=a.p+"assets/img/fwup_import_2.797b6f34.png"},160:function(e,t,a){e.exports=a.p+"assets/img/fwup_import_3.b29748b8.png"},161:function(e,t,a){e.exports=a.p+"assets/img/fwup_import.45dbf79c.gif"},162:function(e,t,a){e.exports=a.p+"assets/img/fwup_ota_method1.4a1bf4d8.png"},163:function(e,t,a){e.exports=a.p+"assets/img/fwup_ota_method2.b852bca9.png"},164:function(e,t,a){e.exports=a.p+"assets/img/fwup_ota_forceupd.fb1ef9b1.png"},165:function(e,t,a){e.exports=a.p+"assets/img/fwup_process.7ab15f47.gif"},166:function(e,t,a){e.exports=a.p+"assets/img/fwup_usb_version.d12a3ae1.png"},167:function(e,t,a){e.exports=a.p+"assets/img/fwup_usb_progress.3a584557.png"},258:function(e,t,a){"use strict";a.r(t);var r=a(2),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"firmware-update"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#firmware-update"}},[e._v("#")]),e._v(" Firmware Update")]),e._v(" "),r("p",[e._v("Whenever a new firmware is released or when you built your own with the DevKit, there are multiple ways to deploy that firmware to the system.\nIn this document you can learn how to install the version you want on your system.")]),e._v(" "),r("h2",{attrs:{id:"verify-the-version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#verify-the-version"}},[e._v("#")]),e._v(" Verify the version")]),e._v(" "),r("p",[e._v("In the panel "),r("em",[e._v("'Deca Version'")]),e._v(", you can verify the current version of all the tags and anchors.\nThe version will appear here once the system has received the information from the node. This will happen automatically. Keep in mind however that after booting the RTManager, it might take some time before all the information is collected (typically 20 seconds).")]),e._v(" "),r("p",[r("img",{attrs:{src:a(157),alt:"fwup_version"}})]),e._v(" "),r("h2",{attrs:{id:"import-fws-in-rtmanager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#import-fws-in-rtmanager"}},[e._v("#")]),e._v(" Import FWs in RTManager")]),e._v(" "),r("p",[e._v("Before you can update a node, you need to import the firmware in RTManager. Doing this is easy. First drag and drop the binary you want into the following directory:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("c:\\cxRTLS\\bin\\\n")])])]),r("p",[e._v("The name of the file doesn't matter. You can drag in any type (tag, anchor, listener or fwloader) of firmware into this directory, the software will handle.\n"),r("img",{attrs:{src:a(158),alt:"fwup_import1"}})]),e._v(" "),r("p",[e._v("After doing this, press "),r("em",[e._v("'Search Bin'")]),e._v(" in the lower left corner of the screen.\n"),r("img",{attrs:{src:a(159),alt:"fwup_import2"}})]),e._v(" "),r("p",[e._v("Upon pressing the button, the firmwares will be imported in the system. You can verify the details in the "),r("em",[e._v("'Firmwarefiles'")]),e._v(" panel.\n"),r("img",{attrs:{src:a(160),alt:"fwup_import3"}})]),e._v(" "),r("p",[e._v("Here you have a full example:\n"),r("img",{attrs:{src:a(161),alt:"fwup_import"}})]),e._v(" "),r("h2",{attrs:{id:"update-the-nodes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#update-the-nodes"}},[e._v("#")]),e._v(" Update the Nodes")]),e._v(" "),r("p",[e._v("There are 3 ways to update a node:")]),e._v(" "),r("ul",[r("li",[e._v("Over-The-Air (OTA)")]),e._v(" "),r("li",[e._v("Via USB cable")]),e._v(" "),r("li",[e._v("By reflashing the board")])]),e._v(" "),r("p",[e._v("Whenever your system is all set up and running, the easiest way is to perform an Over-The-Air (OTA) update. Everything can be done from within RTManager and no physical interactions are required. You can also update individual nodes by connecting it to the computer with a USB cable. In case you have a board that has never been flashed before or if you want to update the bootloader, you can use a programmer and the provided scripts.")]),e._v(" "),r("h3",{attrs:{id:"ota-system"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ota-system"}},[e._v("#")]),e._v(" OTA System")]),e._v(" "),r("p",[e._v("The OTA system consists of 2 steps. First you need to force the nodes you want into update mode. Then you can update it with the firmware of choice.")]),e._v(" "),r("blockquote",[r("p",[r("code",[e._v("Note:")]),e._v(" The "),r("em",[e._v("'min FW'")]),e._v(" in the upper right corner will determine the minimum required version for anchor- and tag firmware to load on the nodes. If these numbers are different from zero, you can only send versions that are equal or higher. This way you can prevent sending incompatible versions to the nodes.")])]),e._v(" "),r("h4",{attrs:{id:"put-the-node-in-fw-update-mode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#put-the-node-in-fw-update-mode"}},[e._v("#")]),e._v(" Put the node in FW Update mode")]),e._v(" "),r("p",[e._v("First you need to select the firmware you want to update the node with in the "),r("em",[e._v("'Firmwarefiles'")]),e._v(" panel.\nYou will also need to select the method of transfer.\n"),r("img",{attrs:{src:a(162),alt:"fwup_ota_method1"}})]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("Internal")]),e._v(" method makes that the firmware that is available on the wired anchor will be distributed. This method is fast, but limits you to a single firmware version.")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("External")]),e._v(" method will take the file from the PC and send it to the node. This makes that you can send any version you want (as long as it is available on the PC).")]),e._v(" "),r("p",[r("img",{attrs:{src:a(163),alt:"fwup_ota_method2"}})]),e._v(" "),r("p",[e._v("Now select the node you want to update in the "),r("em",[e._v("'Deca Module'")]),e._v(" panel and press "),r("em",[e._v("'ForceUpd'")]),e._v(" .")]),e._v(" "),r("p",[r("img",{attrs:{src:a(164),alt:"fwup_ota_forceupd"}})]),e._v(" "),r("p",[e._v("The node will exit the current firmware it is running and jump to its firmware loader.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(165),alt:"fwup_process"}})]),e._v(" "),r("h4",{attrs:{id:"update-of-the-fw-tracking-the-progress"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#update-of-the-fw-tracking-the-progress"}},[e._v("#")]),e._v(" Update of the FW & Tracking the progress")]),e._v(" "),r("p",[e._v("The update will start immediately. The progress of all the individual nodes can be tracked in the '"),r("em",[e._v("Deca Module'")]),e._v(" panel. A loading bar will appear under the column "),r("em",[e._v("'UpdBytes'")]),e._v(". You can see which how many and which parts are still missing.")]),e._v(" "),r("p",[e._v("You can repeat the process for any of the nodes you want to update.\nYou don't have to wait for other nodes to be finished to start other updates.")]),e._v(" "),r("h3",{attrs:{id:"ota-local"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ota-local"}},[e._v("#")]),e._v(" OTA Local "),r("Badge",{attrs:{text:"under development",type:"error"}})],1),e._v(" "),r("p",[e._v("This method will make it possible to connect an anchor via USB to your host and update all other nodes wirelessly. This will happen without the need for a listener and a network connection to your anchor will not be required.")]),e._v(" "),r("h3",{attrs:{id:"usb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usb"}},[e._v("#")]),e._v(" USB")]),e._v(" "),r("p",[e._v("If you don't have any infrastructure available or you miss a TCP connection to your anchor(s), the USB firmware update might help you out.\nConnect the node you want to update via a USB cable to the host computer and "),r("a",{attrs:{href:"TODO"}},[e._v("open the connection")]),e._v(".\nForce the node into BootLoader by pressing on "),r("em",[e._v("'BootLoader'")]),e._v(". Select the firmware you want to upload in the Firmware screen. The selected FW will appear in the USB window.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(166),alt:"fwup_usb_version"}})]),e._v(" "),r("p",[e._v("Press "),r("em",[e._v("'Send'")]),e._v(" to start the upload. The progress bar of the update will appear.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(167),alt:"fwup_usb_progress"}})]),e._v(" "),r("p",[e._v("When the update is done, the node will automatically boot its new FW.")]),e._v(" "),r("h3",{attrs:{id:"programmer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#programmer"}},[e._v("#")]),e._v(" Programmer")]),e._v(" "),r("p",[e._v("Connect the programmer of choice (J-Link Segger or different) to the JTAG header of the node.\nIf you have access to the ctx_taglib, you can find the scripts in:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("PATH_TO_LIB/ctx_taglib/scripts/\n")])])]),r("p",[e._v("...\n"),r("a",{attrs:{href:"LINKREQUIRED"}},[e._v("Click here")]),e._v(" for more information on setting up the toolchain.")])])}),[],!1,null,null,null);t.default=o.exports}}]);