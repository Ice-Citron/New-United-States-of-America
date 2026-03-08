const logotext = "SIENAR INDUSTRIES";
const meta = {
    title: "Shi Hao",
    description: "I'm Shi Hao. AI Czar. Nuclear Fusion Enthusiast",
};

const introdata = {
    title: "I'm Shi Hao",
    animated: {
        first: "I love Nuclear Fusion",
        second: "I am the machine herald",
        third: "I love r/Singularity",
    },
    description: "This portfolio is a work in progress — some project thumbnails may be placeholders or mismatched while I sort through photos. Content is current as of March 2026. Stay tuned for updates!",
    your_img_url: "/assets/images/IMG_4109.JPG",
};

const dataabout = {
    title: "About Me",
    aboutme: `I'm a first-year MEng Computing (AI/ML) student at Imperial College London with a passion for building at the intersection of software and hardware. Currently leading Imperial College Drone Society as co-President, and working as AI Engineer in FO Robotics.

I have a background in low-level game engine programming with C/C++ and OpenGL, full-stack web development (ReactJS, Firebase, Node.js, TS), pre-training GPT-2 transformers from scratch in PyTorch with C/CUDA on H100 clusters, RAG systems and agentic workflows, RLAIF + GRPO + LLM-as-a-judge + LoRA SFT techniques; building augmented railguns (muzzle velocity: 165 km/h) with high-voltage electronics (450V capacitor banks, ZVS transformers), designing and fabricating FPV racing drones (Betaflight, PET-CF frames, 240km/h), aerodynamics and FEA simulation (Ansys Fluent CFD, LS-Dyna electromagnetic), CAD design using Blender, Fusion 360, and SolidWorks with CNC machining and 3D-printing, experience in the glass and steel manufacturing industry (heavy industry) with welding and hot repairs; computer vision with YOLO-v11 fine-tuning, and distributed training pipelines (DDP, Accelerate, etc.); control theory (MPC), etc. (See my project list for more details!)`,
    currentProjects: [
        {
            title: "New Dejima",
            description: "An autonomous AI agent revenue system built on OpenClaw where AI agents build Android apps, self-market on YouTube Shorts, and track revenue-per-token vs cost-per-token (targeting $10K ARR by end of 2026).",
        },
        {
            title: "Project Interceptor",
            description: "Leading the development of a 400km/h interceptor drone with Raspberry Pi-based computer vision for autonomous target tracking and additional autonomous drone-related missions. Powered by NVIDIA Jetson, ROS2 and Ardupilot. Will involve lots of FEA testing from aerodynamic, heat dissipation to structural, to real world testing.",
        },
        {
            title: "Project Automaton",
            description: "Competing in the NVIDIA x Revel robotics competition and Intrinsic AI Challenge, where I'm training and modifying SO-101 and UR5e robotic arms in Isaac Sim, MuJoCo, and Gazebo for tasks including complex Lego assembly (Revel) and cable management for data center server-rack assembly (Intrinsic). The thesis: If I can have the skill of AI programming to the extent where I can train my robot to be able to assemble something as complex as the Lego Millenium Falcon. If you also consider how most cheap-labour Asian manufacturing assembly jobs aren't much harder than assemblying Lego Millenium Falcons, then they are screwed by my robots.",
        },
    ],
    interests: "Currently hugely interested and is exploring in Startups, Frontier AI, Defense Tech and Robotics.",
};

const worktimeline = [
    {
        jobtitle: "Co-President & Re-Founder",
        where: "Imperial College Drone Society",
        date: "2025–Present",
    },
    {
        jobtitle: "AI Engineer",
        where: "First Order Robotics (RoboCup)",
        date: "2025–Present",
    },
    {
        jobtitle: "Engineering Intern",
        where: "Nosco Asia — Taichung, Taiwan",
        date: "2025",
    },
    {
        jobtitle: "Full-Stack Developer",
        where: "Nosco Asia — Singapore (ReactJS, Firebase, GCP)",
        date: "2024",
    },
    {
        jobtitle: "Founder & Director",
        where: "Computational Engineering Society — MCM",
        date: "2024–2025",
    },
    {
        jobtitle: "Chief Engineer & Team Lead",
        where: "F1 in Schools — Team Anduril",
        date: "2023–2024",
    },
];

const skills = [
    {
        name: "Python (PyTorch, RLAIF, GRPO, LoRA)",
        value: 90,
    },
    {
        name: "C / C++ / CUDA (OpenGL, MPC, Robotics)",
        value: 80,
    },
    {
        name: "JavaScript / TypeScript (React, Node, Firebase)",
        value: 75,
    },
    {
        name: "Blender & CAD (Fusion 360, SolidWorks)",
        value: 85,
    },
    {
        name: "FEA / CFD (Ansys Fluent, LS-Dyna)",
        value: 70,
    },
    {
        name: "Robotics (Isaac Sim, Betaflight, ROS2)",
        value: 65,
    },
];

const services = [
    {
        title: "AI & Machine Learning",
        description: "GPT pre-training, RLAIF pipelines, computer vision (YOLOv11), RL for robotics, distributed training on H100 HPC nodes, and agentic AI systems.",
    },
    {
        title: "Engineering & Robotics",
        description: "FPV drone design & fabrication, electromagnetic systems, CFD/FEA simulation (Ansys, LS-Dyna), CNC machining, sim-to-real transfer with Isaac Sim.",
    },
    {
        title: "Full-Stack Development",
        description: "ReactJS, Firebase, GCP, Node.js, TypeScript. Built enterprise workforce management apps and portfolio websites.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "shi-hao.ng25@imperial.ac.uk",
    YOUR_FONE: "",
    description: "Feel free to reach out if you'd like to collaborate on frontier AI, defense tech, robotics, or anything interesting.",
    // creat an emailjs.com account
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Ice-Citron",
    linkedin: "https://www.linkedin.com/in/shi-hao-ng-83b55b224/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
