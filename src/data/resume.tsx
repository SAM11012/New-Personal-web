import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Samyak Meshram",
  initials: "SM",
  url: "https://dillion.io",
  location: "Bengaluru Karnataka",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Software Engineer",
  summary:
    "I'm a passionate Full Stack Engineer with experience building scalable, production-grade web applications and developer-focused platforms that drive real business value. I specialize in designing end-to-end systems—from intuitive UIs to robust backends and deployment pipelines.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQFoVsCa9K0FYg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699167738788?e=1756944000&v=beta&t=KDfjLAjS7Tku8bUxv-CWCGqiggi4gD_wQKm5nd6Fwcs",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Express.js",
    "Node.js",
    "React-Redux Toolkit",
    "Python",
    "Mongo-DB",
    "AWS-S3",
    "AWS-Pipelines",
    "Cloudfront",
    "SQL",
    "GSAP",
    "Tailwind CSS",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "samyakmeshram2020@gmail.com",
    tel: "+91-89753 40914",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SAM11012",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/0samyak/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
      leetcode: {
        name: "Leetcode",
        url: "https://leetcode.com/u/samyakmeshram2020/",
        icon: Icons.leetcode,
        navbar:true
      },

    },
  },

  work: [
    {
      company: "Pibit.ai",
      href: "https://pibit.ai",
      badges: [],
      location: "In-Office",
      title: "Full Stack Engineer",
      logoUrl:
        "https://d359yxwk2f1nzv.cloudfront.net/media-cdn/common/pibit-ai-logo.png",
      start: "Dec 2023",
      end: "Current",
      description:
        "At Pibit.AI (YC W21), I worked as a Full Stack Engineer, driving multiple high-impact initiatives across infrastructure, product, and AI integration. I built a production-grade AWS CI/CD pipeline that automated deployments with 99.9% reliability, revamped the client onboarding system to cut onboarding time by 90%, and led SEO and frontend performance improvements that significantly increased traffic and scalability.I also developed a secure, Excel-like collaborative tool, scaled frontend handling to 300MB+ datasets, replaced AWS Amplify with a custom auth system, and integrated LLM-powered pipelines to automate insurance document processing—cutting manual effort by 60%. Additionally, I improved incident response through deep root-cause analysis, reducing MTTR by 65%.",
    },
    {
      company: "Bagcampus Private Limited",
      badges: [],
      href: "https://in.linkedin.com/company/bagcampus",
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl:
        "data:image/jpeg;base64,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QaJkhSNvdoQ1po4jvH9YR9ke5+a978L9F1l8xYuPR5/q2dp+6gUBfRDzQWQEAQBAEAQBAEAWOFygFnlMz4Ce9R7PUby0ggkEG4I0IKjsqjOLUuTaM3B7onRdmdpo6pogqbNmGgdwEv5O7l8y698OTok7qFrH+x6jp/U1NbJvknZqBw9nUfNeS3Shx7LlJGhOxoNngX6Ot+9dFVl/8Mn/ADI5Qh7MLp4I9S+Nvi1q6o1Zt/C1ZFKyiPnQjqzaemj9lxkd0aNPNWuJ8M5t7/eLRfecl3VMetaR5ZWMWx+ao3fYj91vP4nmva9M+HsbDW58y+8osrqVl/2U9ER1LSySuyRMc93Roure/Lx8eG6ckkcVdM7HokXPAdhTcSVZ0/4bTx/E78vNeK6v8WR02Y38y8xOj6vdaXqGJrGhjGhrQLAAWAC8HbdK6bnY9WeghXGC0ie1DFOXBu2VLazaxsAMFOQ6bgXDVsX5u+i9n0H4clfpdeuPX4lJ1HqSgtkPJzdziSSSSTqSdSSvplcFXFRiuDy8pOT1Z8W5qEAQBAEAQBAEAQBAEAQBAfVrKMZx0kjKbT1RbMA21khAjqAZYxwd/KtH9bxXj+rfCtd+tlHD/uXWH1adf2Z8ovFJXUtayzSyUc2uAJHxaV4XIwMvAn9qOn9S/ryKb1wzTqdkaGTXscp+65zfley6KfiHNr43cfkiKfTaJ8tGp/sJR/8AU/nj8l2r4szPTIP2PSzap9j6Fhv2OY/ec53yvZct3xP1CfG8mh0rHj6JmnpmRtyxsaxvRoDR8lTXZdtv1ybO2FUIfSjKoEmzc0cTxeCmF5pA3o3i8/BvFWOF0rIypaVxOa7MrpWs2ULH9tJZwY4AYozxP8q8fH7Ph5r6B0n4VrxtLLuX/Y89mdVnZxDhFUXroxUVoimbb8hbGAgCAIAgCAIAgCAIAgCAIAgCGdfQWB4PTHlpDmkgjgQbEKOdMLI6SWptGco8onKLa+ti07XOBykGf58fmqPK+GcG7nbozuq6nfDjUmIfSFIPbp2u/C8s+oKpLfgmE/os0/Q7o9ckvMTP/vEH/Kn+k/wqD/oiX/t/oS/t3/4Nef0hyH2KdrfxOL/pZdNXwXCP1T1/Qin1yT+mOhD1211bLp2uQdIxk+fH5q5xvhrCp5cNWcVvVMiz2Qj3EklxJJ4k6kq8rqrrWkY6HBKcpeWeVL6NAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCA/9k=",
      start: "May 2022",
      end: "July 2023",
      description:
        "At Bagcampus Private Limited, I served as a Software Development Intern, where I played a key role in building real-time and user-centric applications from the ground up. I engineered a fully functional video conferencing platform using WebRTC, Socket.IO, and Node.js, supporting features like screen sharing, peer-to-peer communication, and encryption. The platform scaled to handle 100+ concurrent users, delivering low-latency, secure communication ideal for remote assessments and meetings.In addition, I led the UI revamp of the company’s assessment platform, implementing a responsive, mobile-friendly interface using React.js, HTML5, and CSS3. This redesign not only improved visual consistency across devices but also made the platform PWA-enabled, significantly enhancing load speed, offline access, and user engagement—resulting in a 45% increase in user satisfaction.",
    },
  ],
  education: [
    {
      school: "NIT Raipur",
      href: "https://nitrr.ac.in/",
      degree: "B-Tech,Electronics and Communications",
      logoUrl: "https://nitrr.ac.in/images/nitrr.gif",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "LiveDocs - A Collaborator Editor",
      href: "https://livedocs-iota-pied.vercel.app/",
      dates: "Apr 2024 - Jun 2024",
      active: true,
      description:
        "LiveDocs is a real-time collaborative document editor built with role-based access control, secure Clerk authentication, and seamless presence synchronization using Liveblocks. It features a custom JSM Editor supporting markdown, slash commands, and threaded comments, offering an experience similar to Notion or Google Docs.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Liveblocks",
        "Clerk",
        "JSM Editor",
        "Shadcn UI",
        "TailwindCSS",
        "JWT",
        "WebSockets",
      ],
      links: [
        {
          type: "Website",
          href: "https://livedocs-iota-pied.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SAM11012/LIVEDOCS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Full Stack Chat Application",
      href: "https://github.com/SAM11012/ChatAppSAm",
      dates: "Mar 2024 - May 2024",
      active: true,
      description:
        "A serverless real-time chat app with support for multimedia sharing, push notifications, and user presence tracking. Built using Firebase for real-time data sync, hosting, and authentication, with a modern UI in Next.js and Tailwind CSS. End-to-end encrypted conversations ensure user privacy and security.",
      technologies: [
        "React.js",
        "Next.js",
        "JavaScript",
        "TailwindCSS",
        "Firebase",
        "Firebase Cloud Messaging",
        "WebSockets",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SAM11012/ChatAppSAm",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chat-app.jpg",
      video: "",
    },
    {
      title: "WatchIt Movie App",
      href: "https://watchitnow12.netlify.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "WatchIt is a sleek movie discovery platform that fetches real-time data from the TMDB API. It offers users a dynamic, up-to-date experience with a wide collection of movies across genres, complete with detailed descriptions, posters, and ratings. Designed with React and SCSS for a modern, responsive UI.",
      technologies: ["React.js", "JavaScript", "Sass", "TMDB API"],
      links: [
        {
          type: "Website",
          href: "https://watchitnow12.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/SAM11012/movix-main",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/movie-app.png",
      video: "",
    },
    {
      title: "Real-Time Share Market Networking",
      href: "https://github.com/SAM11012/StocksProject",
      dates: "Feb 2024 - Apr 2024",
      active: true,
      description:
        "A real-time social platform for investors to chat, share insights, and get notified about stock movements. Built using custom backend architecture with Express and MongoDB, and real-time messaging with Socket.io. Integrated Twilio for alerts, AWS S3 for file storage, and Cloudinary for optimized media delivery.",
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Socket.io",
        "MongoDB",
        "Twilio",
        "AWS S3",
        "Cloudinary",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SAM11012/StocksProject",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
   
  ],
} as const;
