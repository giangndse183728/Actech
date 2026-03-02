export type ImageData = {
  src: string;
  alt: string;
};

export type Project = {
  project: string;
  thumbnail: ImageData;
  title: string;
  description: string;
  type: string;
  dateCompleted: string;
  images: ImageData[];
  area: string;
  location: string;
};

export type Service = {
  title: string;
  image: string;
  project: string;
  description: string;
};

export const projects: Project[] = [
  {
    project: "Residential Interior",
    thumbnail: {
      src: "/images/projects/project-02.jpg",
      alt: "Residential Interior Design in Chau Duc",
    },
    title: "Suburban House Interior",
    description:
      "A contemporary residential interior design located in suburban Chau Duc, focusing on spatial harmony, natural lighting, and refined material selection. The project emphasizes comfort, functionality, and a calm living atmosphere.",
    type: "Residential Interior Design",
    dateCompleted: "2023",
    images: [
      {
        src: "/images/projects/project-02.jpg",
        alt: "Suburban House Interior - Chau Duc",
      },
    ],
    area: "100 m²",
    location: "Chau Duc (Suburban Area), Vietnam",
  },
  {
    project: "Residential Design",
    thumbnail: {
      src: "/images/projects/project-01.jpg",
      alt: "Modern Villa Design in Vung Tau",
    },
    title: "Modern Villa in Vung Tau",
    description:
      "A contemporary villa design located in Vung Tau, defined by clean geometric forms, expansive glazing, and seamless indoor-outdoor living. The project emphasizes natural ventilation, coastal climate adaptation, and refined material detailing.",
    type: "Luxury Residential Villa",
    dateCompleted: "2023",
    images: [
      {
        src: "/images/projects/project-01.jpg",
        alt: "Modern Villa Exterior - Vung Tau",
      },
    ],
    area: "450 m²",
    location: "Vung Tau, Vietnam",
  },
  {
    project: "Vietso Executive Meeting Room",
    thumbnail: {
      src: "/images/projects/C.jpg",
      alt: "Vietso Executive Meeting Room Design",
    },
    title: "Vietso Executive Meeting Room",
    description:
      "A refined executive meeting room designed for high-level officials at Vietso, emphasizing authority, clarity, and discretion. The interior features premium materials, controlled lighting, acoustic optimization, and a balanced spatial composition to support strategic discussions and formal decision-making.",
    type: "Corporate Interior Design",
    dateCompleted: "2023",
    images: [
      {
        src: "/images/hero.png",
        alt: "Vietso Executive Meeting Room Interior",
      },
    ],
    area: "120 m²",
    location: "Vietnam",
  },
  {
    project: "Vietnamese Traditional Residential",
    thumbnail: {
      src: "/images/projects/vn1.jpg",
      alt: "Vietnamese Traditional Residential Design",
    },
    title: "Vietnamese Cultural House",
    description:
      "A residential design inspired by traditional Vietnamese architecture, blending cultural heritage with contemporary living standards. The project incorporates natural materials, open courtyards, layered spaces, and passive ventilation strategies to create a harmonious and climate-responsive home.",
    type: "Residential Architecture",
    dateCompleted: "2022",
    images: [
      {
        src: "/images/projects/vn1.jpg",
        alt: "Vietnamese Traditional House Interior",
      },
    ],
    area: "180 m²",
    location: "Vietnam",
  },
  {
    project: "Vietso Office Building",
    thumbnail: {
      src: "/images/hero/house-5.jpg",
      alt: "Vietso Office Building Exterior",
    },
    title: "Vietso Office Building",
    description:
      "Architectural design for the Vietso office building, focused on functional workspace planning, structural clarity, and a contemporary façade expression. The project integrates efficient circulation, natural lighting strategies, and a balanced composition to reflect corporate identity and long-term sustainability.",
    type: "Office Building Architecture",
    dateCompleted: "2021",
    images: [
      {
        src: "/images/hero.png",
        alt: "Vietso Office Building Exterior View",
      },
    ],
    area: "8,500 m²",
    location: "Vietnam",
  }
];

export const highlightStats = {
  stat: "$2B+",
  statDescription: "annual combined construction value of our projects",
};

export const heroGridImages = {
  left: [
    {
      src: "/images/hero/house-1.jpg",
      alt: "",
    },
    {
      src: "/images/hero/house-5.jpg",
      alt: "",
    },
  ],
  right: [
    {
      src: "/images/hero/house-6.jpg",
      alt: "",
    },
    {
      src: "/images/hero/house-2.jpg",
      alt: "",
    },
  ],
};

export const services: Service[] = [
  {
    title: "Interior Design",
    image: "/images/services/B_01.jpg",
    project: "Modern Fusion Traditional House",
    description:
      "A modern interpretation of traditional Vietnamese housing, combining cultural heritage with contemporary design.",
  },
  {
    title: "Residential & Building Design",
    image: "/images/services/b&r.png",
    project: "Vietso Office Building",
    description:
      "Architectural design for residential and commercial buildings with clear form and functional planning.",
  },
  {
    title: "Renovation & Remodeling",
    image: "/images/services/remodel.jpg",
    project: "Industrial Facility Upgrade",
    description:
      "Design consultancy and renovation planning for factories and large-scale facilities, focusing on structural enhancement, safety standards, and long-term performance optimization.",
  },
  {
    title: "Urban Planning",
    image: "/images/services/urban-planning.jpg",
    project: "Greenfield City District",
    description:
      "Large-scale visions that choreograph architecture, landscape, and movement into one narrative.",
  },
];

