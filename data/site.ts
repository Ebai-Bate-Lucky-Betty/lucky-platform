export const siteContent = {
  brand: {
    name: "Lucky Betty",
  },

  contact: {
    whatsapp: {
      label: "WhatsApp",
      value: "+237 681097196",

      // International format without + or spaces.
      // Example: 2376XXXXXXXX
      number: "237681097196",

      href: "https://wa.me/237681097196",

      external: true,
    },

    email: {
      label: "Email",
      value: "ebaibateluckybetty@gmail.com",
      href: "mailto:ebaibateluckybetty@gmail.com",

      external: false,
    },

    github: {
      label: "GitHub",
      value: "https://github.com/Ebai-Bate-Lucky-Betty",
      href: "https://github.com/Ebai-Bate-Lucky-Betty",

      external: true,
    },
  },

  footer: {
    copyright: "© 2026 Lucky Betty. All rights reserved.",
  },
} as const;