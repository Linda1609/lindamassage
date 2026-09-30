type Review = {
  id: number;
  name: string;
  initials: string;
  image?: string; // optional
  date: string;
  review: string;
  rating?: number;
  verified: boolean;
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Michael R",
    initials: "MR",
    date: "2026-09-29",
    review:
      "Excellent experience. Everything was professional, relaxing, and exactly what I needed. I left feeling refreshed and comfortable.",
    rating: 5,
    verified: true,
    image: "/reviews/Michael.jpg",
  },
  {
    id: 2,
    name: "Amanda T",
    initials: "AT",
    date: "2026-09-28",
    review:
      "Wonderful service and a very relaxing atmosphere. I really appreciated the attention to detail and will definitely be coming back.",
    rating: 5,
    verified: true,
  },
  {
    id: 3,
    name: "Robert H",
    initials: "RH",
    date: "2026-09-28",
    review:
      "Very professional and welcoming. The session helped relieve a lot of the tension I had been carrying. Highly recommended.",
    rating: 5,
    verified: true,
    image: "/reviews/Robert.jpg",
  },
  {
    id: 4,
    name: "Jessica B",
    initials: "JB",
    date: "2026-09-25",
    review:
      "Great experience from start to finish. The service was thoughtful, comfortable, and exactly what I was looking for.",
    rating: 4,
    verified: true,
    
  },
  {
    id: 5,
    name: "Daniel M",
    initials: "DM",
    date: "2026-09-23",
    review:
      "Really enjoyed my session. Everything was handled professionally and I felt noticeably more relaxed afterward.",
    rating: 5,
    verified: true,
    image: "/reviews/Daniel.jpg",
  },
  {
    id: 6,
    name: "Lauren S",
    initials: "LS",
    date: "2026-09-20",
    review:
      "A peaceful and enjoyable experience. The service was friendly, professional, and helped me unwind after a busy week.",
    rating: 4,
    verified: true,
  },
  {
    id: 7,
    name: "Kevin W",
    initials: "KW",
    date: "2026-09-18",
    review:
      "Very good experience overall. The atmosphere was comfortable and the session helped with the tightness in my shoulders.",
    rating: 4,
    verified: false,
    image: "/reviews/Kevin.jpg",
  },
  {
    id: 8,
    name: "Rachel P",
    initials: "RP",
    date: "2026-09-15",
    review:
      "I had a great experience and felt completely comfortable throughout the session. Everything was clean, calm, and professional.",
    rating: 5,
    verified: true,
  },
 {
  id: 9,
  name: "James & Olivia",
  initials: "JO",
  date: "2026-09-14",
  review:
    "My wife and I had a wonderful experience. Everything was relaxing, professional, and welcoming from start to finish. We both left feeling refreshed and would definitely come back again.",
  rating: 5,
  verified: true,
  image: "/reviews/James-Olivia.jpg",
},

  {
    id: 10,
    name: "Samantha C",
    initials: "SC",
    date: "2026-09-08",
    review:
      "A lovely experience. The service was professional and the whole session gave me a chance to properly relax and reset.",
    rating: 5,
    verified: false,

  },
  {
    id: 11,
    name: "Andrew L",
    initials: "AL",
    date: "2026-09-03",
    review:
      "Everything went smoothly and the service was excellent. I felt relaxed afterward and would happily book another session.",
    rating: 4,
    verified: true,
  },
  {
    id: 12,
    name: "Nicole F",
    initials: "NF",
    date: "2026-08-29",
    review:
      "Really positive experience. The environment was calm and welcoming, and I left feeling much less stressed.",
    rating: 5,
    verified: false,
  },
  {
    id: 13,
    name: "James D",
    initials: "JD",
    date: "2026-08-25",
    review:
      "Professional service and a comfortable atmosphere. The session was exactly what I needed after a long week.",
    rating: 4,
    verified: true,
    image: "/reviews/James.jpg",
  },
  {
    id: 14,
    name: "Olivia N",
    initials: "ON",
    date: "2026-08-21",
    review:
      "Very relaxing and enjoyable. I appreciated the friendly approach and the care taken throughout the appointment.",
    rating: 5,
    verified: true,
  },
  {
    id: 15,
    name: "William G",
    initials: "WG",
    date: "2026-08-14",
    review:
      "Good overall experience. The service was professional, the atmosphere was peaceful, and I felt refreshed afterward.",
    rating: 4,
    verified: false,
  },
];
