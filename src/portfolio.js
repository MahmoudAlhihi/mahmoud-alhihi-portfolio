/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mahmoud Alhihi",
  title: "Computer Vision & Machine Learning Student",
  subTitle: emoji(
    "Computer Vision | Deep Learning | Robotics & AI in Healthcare"
  ),
  resumeLink: "/Mahmoud_Alhihi_Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MahmoudAlhihi",
  linkedin: "https://www.linkedin.com/in/mahmoud-alhihi-238047254/",
  gmail: "mahmoudalhihi7@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "COMPUTER VISION & DEEP LEARNING ENGINEER BUILDING AI FOR HEALTHCARE AND AUTONOMOUS SYSTEMS",
  skills: [
    emoji(
      "⚡ Design and train CV models (CNNs, ViTs) for medical imaging tasks "
    ),
    emoji(
      "⚡ Deploy ML pipelines on AWS (EC2, S3, SageMaker) with reproducibility and monitoring"
    ),
    emoji("⚡ Build perception to planning to control pipelines in ROS2 for autonomous systems"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "YOLOv8",
      fontAwesomeClassname: "fas fa-crosshairs"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "MediaPipe",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "DICOM",
      fontAwesomeClassname: "fas fa-microscope"
    },
    {
      skillName: "ROS2",
      fontAwesomeClassname: "fas fa-image"
    },
    {
      skillName: "Google Colab",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "Matplotlib",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Minnesota Twin Cities",
      logo: require("./assets/images/umnLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2024 - May 2026",
      desc: "Focused on Computer Vision, Deep Learning, and Robotics, with applications in healthcare and autonomous systems.",
      descBullets: [
        "3x Dean’s List recipient",
        "Tau Sigma Honor Society member for transfer student excellence",
        "Teaching Assistant for CSCI 3923 (Ethics and Computing) and CSCI 4511W (Artificial Intelligence)"
      ]
    },
    {
      schoolName: "Century College",
      logo: require("./assets/images/centuryLogo.png"),
      subHeader: "Associate of Science in Computer Science",
      duration: "August 2022 - July 2024",
      desc: "Focused on foundational computer science, algorithms, and mathematics, building a strong base for advanced AI coursework.",
      descBullets: [
        "4x Dean’s List recipient",
        "Phi Theta Kappa (PTK) member for academic excellence",
        "Worked 3 on-campus jobs while maintaining strong academic performance"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Pytorch",
      progressPercentage: "80%"
    },
    {
      Stack: "ROS2",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Teaching Assistant",
      company: "University of Minnesota",
      companylogo: require("./assets/images/umnLogo.png"),
      date: "September 2025 – Present",
      desc: "Courses: CSCI 3923 (Ethics and Computing), CSCI 4511W (Artifical Intelligence)",
      descBullets: [
        "Hold weekly office hours to support students with course material, assignments, and conceptual undersatanding",
        "Procotor examinations and ensure compliance with university policies",
        "Grade assignments, quizzes, midterms, and papers while maintaing academic integrity and consistency",
        "Participate in weekly TA meetings"
      ]
    },
    {
      role: "Tech Assistant",
      company: "Century College",
      companylogo: require("./assets/images/centuryLogo.png"),
      date: "January 2023 – May 2024",
      desc: "Supported faculty and students in HyFlex learning environments by managing technology, troubleshooting issues, and ensuring smooth class delivery across in-person, live Zoom, and asynchronous online formats.",
      descBullets: [
        "Assisted six professors in delivering hybrid and online courses.",
        "Monitored Zoom sessions and resolved technical issues in real time.",
        "Set up, operated, and maintained classroom technology including cameras and projectors."
      ]
    },
    {
      role: "Tech Coach (Volunteer)",
      company: "Minnesota Literacy",
      companylogo: require("./assets/images/mnLitLogo.png"),
      date: "August 2023 – December 2023",
      desc: "Provided technology training and one-on-one support to immigrants and formerly incarcerated individuals, helping build essential digital literacy",
      descBullets: [
        "Taught basic hardware and software usage to increase confidence in using technology.",
        "Covered topics including Microsoft Office, Google Workspace, and internet safety."
      ]
    },
     {
      role: "Peer Mentor",
      company: "Century College",
      companylogo: require("./assets/images/centuryLogo.png"),
      date: "August 2023 – May 2024",
      desc: "Mentored and supported a diverse group of students, providing guidance on academic success, campus resources, and personal development.",
      descBullets: [
        "Earned NASPA Certified Peer Educator (CPE) credential",
        "Supported students with time management, stress management, and academic planning.",
        "Collaborated with students and supervisors from diverse backgrounds to connect students with appropriate campus resources."

      ]

    },
    {
      role: "Support services greeter",
      company: "Century College",
      companylogo: require("./assets/images/centuryLogo.png"),
      date: "January 2023 – January 2024",
      desc: "Provided front-line support to students and parents by offering guidance, answering questions, and maintaining a welcoming, organized study environment.",
      descBullets: [
        "Assisted students and parents with inquiries related to tutoring services, study spaces and campus navigation.",
        "Communicated clearly and professionaly with diverse audiences in a fast=paced academic environment",
        "Helped maintain an organized, welcoming space that supported focused study and student engagement"

      ]
    },

   

    

    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I WORKED ON",
  projects: [
    {
      image: require("./assets/images/detect.jpeg"),
      projectName: "YOLOv11s-Based Stationary Object Detection",
      projectDesc: "Implemented a full YOLO-based detection pipeline in Google Colab, including custom dataset preparation, automated train/validation splitting, YAML configuration generation, model trainimg, validation inference, and model export. Trained a YOLOv11s detector for 60 epochs on manually annotated dataset and evaluated performance on unseen validation images before packaging trained weights and results for deployment",
      footerLink: [
        {
          name: "View Training Notebook",
          url: "https://colab.research.google.com/drive/1IY3cwbWdetpRWfH-Qe_h8FWRKmCRfORd?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/map.png"),
      projectName: "Drone Simulation",
      projectDesc: "Developed a C++ based drone delivery simulation as part of a team project, featuring real-time navigation, delivery workflows, and dynamic entity interactions in a 3D environment. I designed and implemented the SkyReaper adversarial interception module, which probabilistically detects, tracks, and attempts to intercept delivery drones by stealing packages during transit. The system models stochastic success and failure outcomes, simulating realistic security threats and enabling evaluation of drone safety and interception scenarios",
      footerLink: [
        {
          name: "View Demo Video",
          url: "https://youtu.be/Wv5aVv6Qr6Q?si=LagIaNo8OCOcBMif"
        }
      ]
    },
    {
      image: require("./assets/images/mazebot.png"),
      projectName: "Mazebot",
      projectDesc: "Implemented an autonomous maze-solving robot in ROS2 and Gazebo using a Sense-plan-act architecture. Designed a Planning node based on the Bug2 algorithm for goal-directed navigation and a Safety node leveraging LiDAR data for real-time obstacle avoidance. Contributed to motion planning logic, obstacle detection, and system integration, enabling safe navigation through custom maze environments",
      footerLink: [
        {
          name: "Demo Video",
          url: "https://youtu.be/LaflHsUZ3YU"
        }
      ]
    },
    {
      image: require("./assets/images/loading.png"),
      projectName: "MedGuard Vision",
      projectDesc: "Designing a hospital-focused computer vision system for real-time safety and monitoring and threat detection in clinical environments. Scoping datasets, model architectures, and deployment workflows for an end-to-end medical AI pipeline, with an emphasis on robustness, privacy, and real-time inference. This project is currently under active development.",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    },

    {
      image: require("./assets/images/skin.png"),
      projectName: "Skin Cancer segmentation",
      projectDesc: "Implemented an end-to-end skin lesion segmentation pipeline using medical imaging data, including dataset loading, metadata processing, image-mask pairing, and preprocessing. Built and Trained a U-Net architecture in Tensorflow for pixel-wise lesion segmentation, performing image normalization, train/validation/test splitting, and qualitative evaluation through predicted mask visualization. The project focuses on learning robust medical image preprocessing and segmentation workflows and is currenlty under active development",
      footerLink: [
        {
          name: "Visit Training Notebook",
          url: "https://colab.research.google.com/drive/1GNp1aoua_5pPH4k0ENwzmQpPdn-5guMD?usp=sharing"
        }
      ]
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    " Certifications, that I have achieved !",

  achievementsCards: [
    {
      title: "Fundamentals of Machine Learning and Artificial Intelligence",
      subtitle:
        "Foundational training in AI and ML concepts, covering the relationships between AI, ML, DL, and generative AI. Developed a solid understanding of core AI terminology, learning paradigms, and model categories, along with practical exposure to Amazon Web Servivces AI and ML services. Explored how cloud based AI tools are applied to real world problems across industries, emphasizing scalable deployment, innovation, and responsible use of AI",
      image: require("./assets/images/aws_logo.png"),
      imageAlt: "Stanford Medicine Logo",
      footerLink: [
        {
          name: "Certification ",
          url: "https://drive.google.com/file/d/17I5KM1HBASloMKqSA2IdysyiS_EiQ9O7/view?usp=sharing"
        }
      ]
    },
    {
      title: "OpenCV bootcamp",
      subtitle:
        "Hands-on training in computer vision using OpenCV and deep learning, covering image processing and manipulation, annotation and enhancement, image filtering, feature detection and alignment, panorama stitching, HDR imaging, real-time camera and video processing, object tracking, face detection, TensorFlow-based object detection, and human pose estimation using OpenPose.",
      image: require("./assets/images/cv.png"),
      imageAlt: "OpenCV logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1W3rYEpKtShJK5-4PIwlpN1mlXf3BmThy/view?usp=sharing"
        },

      ]
    },
    {
      title: "Tensorflow bootcamp",
      subtitle: "Hands-on training in deep learning fundamentals and applications, covering neural network architectures and training principles, linear regression modeling, multilayer perceptrons for MNIST digit classification, convolutional neural networks, CIFAR-10 image classification, image classification using pre-trained ImageNet models, transfer learning and fine-tuning, as well as introductory concepts in semantic segmentation and object detection. ",
      image: require("./assets/images/cv.png"),
      imageAlt: "Tensorflow Logo",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/19TpYoQ569Hi9eJXKh-KmnoI42137U2Or/view?usp=sharing" },

      ]
    },
    {
      title: "Introduction to Healtcare systems",
      subtitle:
        "Key points learned include healthcare access and stakeholders, physician practices and payment models, hospital systems, insurance intermediaries, Medicare and Medicaid, the pharmaceutical industry, healthcare quality, and the ethical implications of AI in medicine.",
      image: require("./assets/images/stanford.png"),
      imageAlt: "Stanford Medicine logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1tlU5j9vyR56_dv6nN4fNqEJSyqNeotRz/view?usp=sharing"
        }
      ]
    },
    {
      title: "Introduction to Clincal Data",
      subtitle:
        "Training in clincal data science and healthcare AI concepts, covering electronic health records, clincal research workflows, and the ethical use of patient data. Topics included electronic phenotyping, rule-based and machine learning based phenotype definitions, feature vs. phenotype modeling, imperfect labeling strategies and probalisitc phenotyping using observational data.",
      image: require("./assets/images/stanford.png"),
      imageAlt: "Stanford Medicine Logo",
      footerLink: [
        {
          name: "Certification ",
          url: ""
        }
      ]
    },

    
   
    {
      title: "Fundamentals of AI and Machine Learning in Healthcare",
      subtitle:
        "Training in core machine learning concepts and algorithms, covering supervised and unsupervised learning, linear and logistic regression, k-neares neighbors, decision trees, support vector machines, and clustering methods. Studied model training and evaluation, loss functions, regularization, bisa-variance trade-offs, and performance metrics.",
      image: require("./assets/images/stanford.png"),
      imageAlt: "Stanford Medicine Logo",
      footerLink: [
        {
          name: "Certification ",
          url: "https://drive.google.com/file/d/1B-85-1Qs1y4Y-7iXRFvgxJz7A16v2sOc/view?usp=sharing "
        }
      ]
    },
    {
      title: "Evaluations of AI applications in Healthcare",
      subtitle:
        "Conceptual training in ethical, legal, and social aspects of artificial intelligence, focusing on responsible design, deployment, and evaluation of AI systems. Covered algorithmic bias, fairness, transparency, accountability, and explainability in machine learning models, as well as ethical trade-offs in data collection, labeling, and deployment.",
      image: require("./assets/images/stanford.png"),
      imageAlt: "Stanford Medicine Logo",
      footerLink: [
        {
          name: "Certification ",
          url: "https://drive.google.com/file/d/1bOHriV8-tfcLDKlc1Af_OugGY83ftEii/view?usp=sharing"
        }
      ]
    },
    {
      title: "AI in healthcare Capstone project",
      subtitle:
        "Hands-on experience in end to end machine learning for helathcare applications, covering real world clincal data challeneges, including multimodal datasets (medical imaging and EHR), data leakage prevention, class imbalance handling, patient level data splitting, feature engineering and missing data treatment. Designed, trianed, and evaluated deep learning and classical ML models for clincal prediction tasks, with emphasis on robustness, fairness, and deployment aware evaluation",
      image: require("./assets/images/stanford.png"),
      imageAlt: "Stanford Medicine Logo",
      footerLink: [
        {
          name: "Certification ",
          url: "https://drive.google.com/file/d/1VzwRHLBtyvvmOrcplkdtHnAi2wEKBU_n/view?usp=sharing"
        }
      ]
    },
     {
      title: "Peer Educator",
      subtitle: "Gained skills in peer support, ethics, cultural competence, empathy, bystander intervention, and event planning to promote positive change and effectively assist students in navigating challenges. ",
      image: require("./assets/images/naspa.png"),
      imageAlt: "NASPA Logo",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/10Hz2IWpDaJlxBdi5aBWa_7e-Fduhepx4/view?usp=sharing" },

      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

// Research Section (using blogSection structure but with only one item)

const blogSection = {
  title: "Research",
  subtitle:
    "AI, Computer Vision, and Healthcare research I'm currently working on.",

  displayMediumBlogs: "false", // We are not using Medium blog fetch

  blogs: [
    {
      url: `${process.env.PUBLIC_URL}/paper/Research_paper.pdf`,
 // Add the link to your paper, GitHub repo, Overleaf PDF later
      title:
        "Comparative Analysis of CNNs and Vision Transformers for Medical Imaging",
      description:
        "Ongoing research project analyzing model performance on lung/colon cancer histopathology and chest X-ray pneumonia datasets using CNNs, ResNet18, and ViT-B/16. Focused on classification accuracy, training behavior, and feature representation differences."
    }
  ],

  display: true
};


// Talks Sections

const talkSection = {
  title: "Featured",
  subtitle: "Featured stories, interviews, and editorial highlights recognizing my academic and professional journey",

  talks: [
    {
      title: "Meet Century College Alum Mahmoud Alhihi",
      subtitle:"Featured by Century College.",
      event_url: "https://www.century.edu/live/news/1056-meet-century-college-alum-mahmoud-alhihi",
    },
    {
      title: "CSpotlight",
      subtitle:"Featured by University of Minnesota",
      event_url: "https://cse.umn.edu/cs/news/cspotlight-mastering-foundations",
    }
  ],

  display: true // Set to true since this is a featured section now
};


// Guest Lecture Section

// Guest Lecture Section
// Guest Lecture Section (using the original podcastSection name)
const podcastSection = {
  title: emoji("Guest Lectures 🎤"),
  subtitle: "Talks I've delivered on AI, Computer Vision, Robotics, and ML",

  // This array is what Podcast.js will render as embedded iframes
  podcast: [
    // Guest lecture recording 1
    "https://www.youtube.com/embed/GmRhBanvpz0",
    "https://www.youtube.com/embed/ahG0sb6v8LE",

    
  ],

  display: true
};



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 612(919)-5747",
  email_address: "mahmoudalhihi7@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
