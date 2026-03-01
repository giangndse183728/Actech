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
    project: "Interior Design",
    thumbnail: {
      src: "/images/projects/project-02.jpg",
      alt: "Interior Design",
    },
    title: "Interior Design",
    description:
      "A high-performance fresh produce distribution centre integrating cold storage, logistics efficiency, and long-span industrial architecture.",
    type: "Distribution & warehousing, cold storage & food",
    dateCompleted: "2023",
    images: [
      {
        src: "/images/projects/project-02.jpg",
        alt: "Interior Design",
      },
    ],
    area: "100 m²",
    location: "Hanoi, Vietnam",
  },
  {
    project: "Residential Design",
    thumbnail: {
      src: "/images/projects/project-01.jpg",
      alt: "Residential Design",
    },
    title: "Residential Design",
    description:
      "A high-performance fresh produce distribution centre integrating cold storage, logistics efficiency, and long-span industrial architecture.",
    type: "Distribution & warehousing, cold storage & food",
    dateCompleted: "2023",
    images: [
      {
        src: "/images/projects/project-01.jpg",
        alt: "Metro Vickers distribution centre aerial view",
      },
    ],
    area: "45,000 m²",
    location: "Metro region",
  },
  {
    project: "Vietso Meeting Room",
    thumbnail: {
      src: "/images/projects/C.jpg",
      alt: "Vietso Meeting Room",
    },
    title: "Vietso Meeting Room",
    description:
      "A high-performance fresh produce distribution centre integrating cold storage, logistics efficiency, and long-span industrial architecture.",
    type: "Distribution & warehousing, cold storage & food",
    dateCompleted: "2023",
    images: [
      {
        src: "/images/hero.png",
        alt: "Metro Vickers distribution centre aerial view",
      },
    ],
    area: "45,000 m²",
    location: "Metro region",
  },
  {
    project: "Vietnamese Traditional Interior Design",
    thumbnail: {
      src: "/images/projects/vn1.jpg",
      alt: "Vietnamese Traditional Interior Design",
    },
    title: "Vietnamese Traditional Interior Design",
    description:
      "A contemporary headquarters and logistics facility with an emphasis on natural light, flexible interior space, and a refined façade.",
    type: "Office, industrial",
    dateCompleted: "2022",
    images: [
      {
        src: "/images/projects/vn1.jpg",
        alt: "Coboltec building exterior",
      },
    ],
    area: "100 m²",
    location: "Regional business park",
  },
  {
    project: "Vietso Office Building",
    thumbnail: {
      src: "/images/hero/house-5.jpg",
      alt: "Congebec — frozen storage facility",
    },
    title: "Vietso Office Building",
    description:
      "Master planning and architectural design for a next-generation frozen storage facility with integrated loading and processing zones.",
    type: "Master planning, frozen storage",
    dateCompleted: "2021",
    images: [
      {
        src: "/images/hero.png",
        alt: "Congebec frozen storage exterior",
      },
    ],
    area: "28,000 m²",
    location: "Quebec, Canada",
  },
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
    project: "Luxury Penthouse Suite",
    description:
      "Calm, detail-rich interiors where materials, furniture, and lighting feel seamlessly composed.",
  },
  {
    title: "Renovation & Remodeling",
    image: "/images/services/remodel.jpg",
    project: "Heritage House Revival",
    description:
      "Sensitive transformations that preserve character while introducing contemporary performance.",
  },
  {
    title: "Urban Planning",
    image: "/images/services/urban-planning.jpg",
    project: "Greenfield City District",
    description:
      "Large-scale visions that choreograph architecture, landscape, and movement into one narrative.",
  },
];

