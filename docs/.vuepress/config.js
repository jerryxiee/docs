module.exports = {
  title: "Documentation",
  description: "Your guide to RTLOC's positioning products",
  // base: "/docs/",
  head: [
    ['link', { rel: 'icon', href: `/img/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#095A9E' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#095A9E' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-150x150.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  // theme: 'vue',
  themeConfig: {
    // repo: "RT-LOC/docs", // Shows link in top nav bar
    editLinks: true,
    docsDir: "docs",
    docsBranch: "master",
    // displayAllHeaders: true, // Default: false
    lastUpdated: "Last Updated", // string | boolean
    sidebarDepth: 3,
    nav: [
      // { text: "Home", link: "/" }, // Don't need this
      { text: "Get Started", link: "/getstarted/" },
      {
        text: "System guide",
        items: [
          { text: "Introduction", link: "/guide/" },
          {
            // text: "Components",
            items: [
              { text: "Hub", link: "/hub/" },
              { text: "Manager", link: "/manager/" },
              { text: "Portal (web)", link: "/web/" },
              { text: "Embedded/Hardware", link: "/hardware/" }
            ]
          }
          // {
          //   text: "Other",
          //   items: [
          //     { text: "Reference", link: "/reference/" },
          //     { text: "FAQ", link: "/faq/" },
          //     { text: "Troubleshoot", link: "/troubleshoot/" }
          //   ]
          // }
          // { text: 'cxRTLS',link: '/cxRTLS/'},
          // { text: 'Web',link: '/web/'},
          // { text: 'Embedded/Hardware', link: '/hardware/'},
          // { text: 'Reference', link: '/reference/'},
          // { text: 'PC', items: [
          //   { text: 'cxRTLS', link: '/cxRTLS/' },
          //   // { text: '', link: '/guide/' }
          //   ]
          // }
          // items: [
          //   { text: 'Interfaces', link: '/hardware/hw_interfaces' },
          //   { text: 'Flashing Boards', link: '/hardware/flashing/hw_flashing' }
          //   ]
          // }
        ]
      },
      { text: "API", link: "/api/" },
      {
        text: "Learn more",
        items: [
          { text: "Reference", link: "/reference/" },
          { text: "FAQ", link: "/faq/faq_general" },
          { text: "Troubleshoot", link: "/troubleshoot/" }
        ]
      },
      { text: "Support", link: "https://rtloc.com/customer-support" }
    ],
    // sidebar: 'auto'
    sidebar: {
      "/getstarted/": getInstallSidebar(),
      "/manager/": getcxRTLSSidebar(),
      "/hardware/": getHardwareSidebar(),
      "/hub/": [{
        title: "Hub",
        collapsable: false,
        children: [
          ["installation", "Installation"], ["apps", "App management"], ["firmware", "Firmware management"]
        ]
      }],
      "/web/": getWebSidebar(),
      // "/system/web": getWebSidebar(),
      // "/web/": webSideBar,
      "/api/": getAPISidebar(),
      "/reference/": getReferenceSidebar(),
      "/faq/": getFAQSidebar(),
      "/troubleshoot/": getTroubleshootSidebar()
    }
  },
  plugins: [
    ["@vuepress/plugin-pagination", true],
    ["@vuepress/plugin-back-to-top", true],
    ["@vuepress/search", true],
    ["@vuepress/plugin-medium-zoom", true],
    ["@vuepress/last-updated", true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
  ],
  evergreen: true
};

function getInstallSidebar() {
  return [
    {
      title: "Basic Positioning (starterskit)",
      collapsable: true,
      children: [
        // ["distance_tracking_getting_started", "Getting Started"],
        ["basic_positioning_introduction", "Introduction"],
        ["basic_positioning_getting_started", "First Setup"],
        ["basic_positioning_next", "What's Next"],

        // ["firststeps", "First steps"]
        // ["anchor_placement", "Anchor Placement"]
      ]
    },
    {
      title: "Pro Positioning",
      collapsable: true,
      children: [
        ["pro_positioning_introduction", "Introduction"],
        ["pro_positioning_getting_started", "Getting Started"],
        // ["firststeps", "First steps"],
        ["anchor_placement", "Anchor Placement"]
      ]
    },
    {
      title: "Distance Tracking",
      collapsable: true,
      children: [
        ["distance_tracking_getting_started", "Getting Started"],
        // ["firststeps", "First steps"]
        // ["anchor_placement", "Anchor Placement"]
      ]
    },
  ];
}

function getcxRTLSSidebar() {
  return [
    ['', 'Desktop configurator'],
    {
      title: "Program sections",
      collapsable: true,
      children: [
        ["cxRTLS_config", "Config"],
        ["cxRTLS_cross", "Cross"],
        ["cxRTLS_fwup", "Firmware Update"],
        ["cxRTLS_license", "License"],
        ["cxRTLS_logconn", "LogConn"],
        ["cxRTLS_replay", "Replay"],
        ["cxRTLS_actions", "Actions"],
        ["cxRTLS_adhoc", "Adhoc"]
      ]
    },
    {
      title: "Concepts",
      collapsable: true,
      children: [
        ["cxRTLS_concepts", "Concepts"],
        ["cxRTLS_rfprofile", "RF Profile"]
      ]
    },
    {
      title: "Details",
      collapsable: true,
      children: [
        ["cxRTLS_console", "Console"],
        ["cxRTLS_engine", "Engine"],
        ["cxRTLS_tasks", "Tasks"]
      ]
    }
  ];
}

function getTroubleshootSidebar() {
  return [
    {
      title: "Troubleshooting",
      collapsable: true,
      children: [
        ["/troubleshoot/troubleshoot_enet", "Ethernet"],
        ["/troubleshoot/troubleshoot_embedded", "Firmware"]
        // ["/faq/faq_rf", "RF"],
      ]
    }
  ];
}

function getFAQSidebar() {
  return [
    {
      title: "FAQs",
      collapsable: true,
      children: [
        ["/faq/faq_general", "General"],
        ["/faq/faq_sensors", "Sensors"],
        ["/faq/faq_network", "Network"]
        // ["/faq/faq_rf", "RF"],
      ]
    }
  ];
}

function getAPISidebar() {
  return [
    {
      title: "Real-time data",
      collapsable: false,
      children: [
        ["/api/api_application", "Binary data format"],
        ["/api/api_web", "JSON data format"],
        ["/api/api_conns", "Connection types"],
      ]
    },
    {
      title: "Meta data",
      collapsable: false,
      children: [
        ["/api/api_rest", "REST (meta data) API"]
      ]
    },
    // {
    //   title: "Connection protocols",
    //   collapsable: false,
    //   children: [
    //     ["/api/api_mqtt", "MQTT"],
    //     ["/api/api_direct", "TCP/UDP or Websocket"]
    //   ]
    // },
    {
      title: "Single device Connection",
      collapsable: false,
      children: [
        ["/api/api_console", "Console (CLI)"],
        ["/api/api_firmware", "Firmware library"],
        ["/api/api_ble", "BLE service(s)"]
      ]
    }
  ];
}

function getWebSidebar() {
  return [
// const webSideBar = [
    ['', 'Web portal'],
    {
      title: "Configuration",
      collapsable: false,
      children: [
        // ['', 'Introduction'],
        // ["user", "User accounts"],
        ["client", "Clients, projects and setups"],
        ["data", "Data"],
        // ["/web/viewer", "Viewer"],
        // ["/web/data", "Data control"]
      ]
    },
    {
      title: "Views / tabs",
      collapsable: false,
      children: [
        ["viewer", "Viewer"],
        ["debug", "Debug"],
        ["settings", "Settings"],
        // ["data", "Data control"],
      ]
    },
    {
      title: "BLE",
      collapsable: false,
      children: [
        ["ble_introduction", "Introduction"],
        ["ble_monitor", "Monitor"],
        ["ble_visualise", "Visualise"],
        ["ble_configure", "Configure"],
        // ["data", "Data control"],
      ]
    }
  ];
}

function getHardwareSidebar() {
  return [
    {
      title: "Building & Flashing",
      collapsable: true,
      // children: [["hardware/flashing/hw_flashing", "Flashing Boards"]]
      children: [
        ["flashing/hw_building", "Building"],
        ["flashing/hw_flashing", "Flashing"],
        ["hw_boards", "Boards"]
      ]
    },
    {
      title: "Interfaces",
      collapsable: true,
      children: [
        ["hw_interface_ble", "BLE"],
        ["hw_interface_usb", "USB"],
        ["hw_interface_uart", "UART"],
        ["hw_interface_can", "CAN"],
        ["hw_interface_sniffer", "Sniffer"]
      ]
    }
  ];
}

function getReferenceSidebar() {
  return [
    {
      title: "Reference",
      collapsable: false,
      children: [
        ["leds", "LED Patterns"],
        ["pinouts", "Pinout"],
        ["terminology", "Terminology"],
        ["algorithms", "Algorithms"],
        ["rf", "RF"],
        ["updaterate", "Update Rate"]
      ]
    }
  ];
}
