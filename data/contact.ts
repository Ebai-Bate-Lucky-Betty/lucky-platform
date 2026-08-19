export const contactPage = {
  intro: {
    eyebrow: "CONTACT",

    title: "Let's build something meaningful.",

    description:
      "Have an idea, a project, an opportunity, or simply want to start a conversation? I'd love to hear from you.",
  },

  links: {
    title: "Find me around the web",
  },

  form: {
    title: "Start a conversation",

    description:
      "Whether it's a project, collaboration, opportunity, or simply an interesting idea, tell me about it.",

    fields: {
      name: {
        label: "Your name",
        placeholder: "How should I call you?",
      },

      email: {
        label: "Your email",
        placeholder: "Where can I reach you?",
      },

      subject: {
        label: "Subject",
        placeholder: "What would you like to talk about?",
      },

      message: {
        label: "Message",
        placeholder: "Tell me a little about it...",
      },
    },

    submitLabel: "Send message",

    sendingLabel: "Sending...",

    successMessage:
      "Thank you. Your message has been sent successfully.",

    errorMessage:
      "Something went wrong. Please try again.",
  },

  closing: {
    eyebrow: "UNTIL THEN",

    title:
      "Every meaningful project starts with a conversation.",
  },
} as const;