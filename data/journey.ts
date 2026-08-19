export interface JourneyPoint {
  year: string;
  title: string;
  description: string[];
}

export const journeyPage = {
  intro: {
    eyebrow: "MY JOURNEY",
    title: "A story still being written.",
    description: [
      "My journey into technology began without a clear sense of where it would lead. Along the way, questions, uncertainty, faith, unexpected discoveries, and a growing understanding of my own strengths gradually changed the direction of my path.",

      "What began as simply earning a degree became a search for the kind of work I could truly see myself building. That search led me to discover the connection between software engineering, creativity, storytelling, and immersive technology.",

      "This page tells that story.",
    ],
  },

  points: [
    {
      year: "THE BEGINNING",
      title: "A Beginning Without a Clear Direction",
      description: [
        "Every journey begins somewhere. Mine began with uncertainty.",

        "After successfully obtaining my GCE Advanced Level, I was, by God's grace, admitted into the Computer Science program. Around 500 students were selected from well over a thousand applicants. I was grateful for the opportunity, but if I'm honest, I wasn't passionate about computer science at the time.",

        "My goal was simple: earn my degree, find a job, and begin building my life.",
      ],
    },

    {
      year: "SEARCHING",
      title: "Searching for My Place",
      description: [
        "As the years went by, I noticed something about my classmates. Each of them seemed to have discovered a field they genuinely loved. Some were known for cybersecurity, others for artificial intelligence, software engineering, networking, or data science. Their passion pushed them to excel, and people naturally associated them with their area of expertise.",

        "I admired them.",

        "Meanwhile, I found myself in a different position. I understood almost every subject reasonably well. I could adapt, learn, and perform across different areas, but I never felt deeply connected to any of them. I wasn't failing, but I wasn't thriving either. I was becoming average at many things instead of exceptional at one.",

        "That realization troubled me.",
      ],
    },

    {
      year: "THE TURNING POINT",
      title: "A Prayer That Changed Everything",
      description: [
        "One day, I sat alone, reflecting on where I was heading. Out of that moment came a quiet prayer, not a long prayer, not an eloquent one, simply the desperate cry of someone asking God for direction.",

        "In that silence, one verse came to my heart:",

        "\"Your gift will make room for you.\"",

        "At first, I didn't understand.",

        "What gift?",
      ],
    },

    {
      year: "THE DISCOVERY",
      title: "Rediscovering My Gift and Discovering Creative Technology",
      description: [
        "Then I thought about something that had always been part of me.",

        "Since I was young, I had loved writing stories. I could look at a single object, a photograph, or a simple idea and imagine an entire world around it. Creating characters, places, and stories came naturally to me. Sometimes I would spend hours imagining worlds that existed nowhere except in my mind.",

        "Storytelling had always been my gift.",

        "But I couldn't understand how storytelling and computer science could possibly belong together.",

        "So I began searching.",

        "I researched careers that combined technology with creativity, engineering with imagination, logic with storytelling.",

        "That search introduced me to a field I had never heard of before:",

        "Creative Technology.",

        "Everything suddenly made sense.",

        "For the first time, I wasn't choosing between being technical and being creative.",

        "I realized I could become both.",

        "That discovery changed the way I viewed my studies. Computer science was no longer just a degree to earn. It became the foundation upon which I could build the kinds of experiences I had always imagined.",
      ],
    },

    {
      year: "BECOMING AN ENGINEER",
      title: "Falling in Love with Software Engineering",
      description: [
        "As I learned more, I also realized something equally important.",

        "Before creating immersive worlds, I first needed to know how to build solid systems.",

        "Beautiful experiences still require reliable foundations.",

        "That understanding sparked a deep appreciation for software engineering, not simply programming, but designing robust, scalable, maintainable systems capable of supporting meaningful experiences.",

        "Today, software engineering is more than a profession I respect. It has become a passion in its own right.",
      ],
    },

    {
      year: "EXPANDING",
      title: "Expanding My Creative Toolbox",
      description: [
        "At the same time, I have never lost sight of where I want this journey to lead.",

        "That is why I'm gradually exploring technologies such as Unity, Blender, interactive media, and immersive computing. Every new skill is another tool that allows me to transform ideas into experiences.",
      ],
    },

    {
      year: "LOOKING AHEAD",
      title: "Building Toward Something Bigger",
      description: [
        "My journey is still unfolding.",

        "My ambition is to become a Creative Technologist who combines software engineering, artificial intelligence, storytelling, and immersive technologies to create experiences that are both technically excellent and deeply meaningful.",

        "I believe strong engineering provides the foundation.",

        "Creativity gives it life.",

        "My goal is to bring both together.",
      ],
    },
  ] satisfies JourneyPoint[],

  closing: {
    eyebrow: "STILL BECOMING",
    title: "The journey isn't finished.",
    description: [
      "Every project, every challenge, every lesson, and every new idea adds another line to the story. I’m still learning, still building, and still discovering what becomes possible when engineering and creativity are given room to grow together.",
    ],
  },
};