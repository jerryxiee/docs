(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{300:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"connection-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection-types"}},[t._v("#")]),t._v(" Connection types")]),t._v(" "),a("p",[t._v("Real-time data (position data, tag/anchor statuses, sensor data, etc.) can be received over UDP/TCP, (secure) websocket WS(S) or MQTT (Message Queuing Telemetry Transport, pub/sub). The data can be transferred in binary or JSON format (see previous sections).")]),t._v(" "),a("h2",{attrs:{id:"_1-direct-socket-connections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-direct-socket-connections"}},[t._v("#")]),t._v(" 1. Direct socket connections")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Configure data transmission over UDP / TCP / websocket in our desktop application (in the API view)")])]),t._v(" "),a("li",[a("p",[t._v("Connect to your computer/server to the correct IP + port")])])]),t._v(" "),a("h3",{attrs:{id:"code-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-examples"}},[t._v("#")]),t._v(" Code examples")]),t._v(" "),a("p",[t._v("Check out code examples at "),a("a",{attrs:{href:"https://github.com/RT-LOC/APIs",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/RT-LOC/APIs"),a("OutboundLink")],1),t._v(" (C, Python, Javascript)")]),t._v(" "),a("h2",{attrs:{id:"_2-mqtt-data-connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mqtt-data-connection"}},[t._v("#")]),t._v(" 2. MQTT data connection")]),t._v(" "),a("p",[t._v("You can receive data in a pub/sub fashion, through an Mosquitto (MQTT) broker.\nYou can use our MQTT broker (some limitations may apply) or set up your own.")]),t._v(" "),a("p",[t._v("Make sure your RTLS setup is publishing MQTT data to the broker.\nUse the following configuration for your MQTT client(s):")]),t._v(" "),a("ul",[a("li",[t._v("Host: mqtt.cloud.rtloc.com")]),t._v(" "),a("li",[t._v("Port: 1883 (TCP), 8083 (WSS) or 8883(TCP TLS)")]),t._v(" "),a("li",[t._v("Username: "),a("em",[t._v("client slug")]),t._v("*: "),a("em",[t._v("user e-mail")])]),t._v(" "),a("li",[t._v("Password: user password, or valid JWT")])]),t._v(" "),a("p",[t._v("*You can find the "),a("em",[t._v("client slug")]),t._v(" in the license description, in the Hub app or the Portal at "),a("a",{attrs:{href:"https://cloud.rtloc.com/info",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cloud.rtloc.com/info"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("The MQTT topic and data format per type of message is outlined in the "),a("router-link",{attrs:{to:"/api/api_web.html"}},[t._v("format description")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"mqtt-clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-clients"}},[t._v("#")]),t._v(" MQTT clients")]),t._v(" "),a("p",[t._v("Clients can connect to the MQTT broker over TCP/TLS or a secure Websocket (WSS).\nExample client libraries:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Javascript (browser): "),a("a",{attrs:{href:"https://www.npmjs.com/package/mqtt",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT.js"),a("OutboundLink")],1),t._v(" (Recommended for web applications), "),a("a",{attrs:{href:"https://www.eclipse.org/paho/clients/js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eclipse Paho"),a("OutboundLink")],1),t._v(", ...")])]),t._v(" "),a("li",[a("p",[t._v("Python: "),a("a",{attrs:{href:"https://pypi.org/project/paho-mqtt/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Paho MQTT"),a("OutboundLink")],1),t._v(", ...")])]),t._v(" "),a("li",[a("p",[t._v("C#: "),a("a",{attrs:{href:"https://github.com/chkr1011/MQTTnet",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTTnet"),a("OutboundLink")],1),t._v(", Eclipse Paho, ...")])]),t._v(" "),a("li",[a("p",[t._v("...")])])]),t._v(" "),a("h3",{attrs:{id:"code-examples-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-examples-2"}},[t._v("#")]),t._v(" Code examples")]),t._v(" "),a("p",[t._v("The following example uses the "),a("a",{attrs:{href:"https://www.npmjs.com/package/mqtt",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT.js"),a("OutboundLink")],1),t._v(" client library to connect to our MQTT broker. It uses a demo account and displays demo data (replayed RTLS data continuously fed into our broker).")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mqtt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mqtt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmqttOptions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  keepalive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  clientId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'client_'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  protocolId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MQTT'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  protocolVersion"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  clean"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  reconnectPeriod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  connectTimeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  username"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo:demo@rtloc.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12345'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Alternative: access token instead of password")]),t._v("\n  rejectUnauthorized"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Connect to MQTT broker")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" client "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mqtt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wss://mqtt.cloud.rtloc.com:8083/ws'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mqttOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Subscribe to a few topics")]),t._v("\nclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rtls/replay/kart/status'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" qos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rtls/replay/kart/anchors'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" qos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rtls/replay/kart/posxyz'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" qos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// On message: print topic and JSON message")]),t._v("\nclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("topic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' message:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);