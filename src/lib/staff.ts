export interface StaffMember {
  slug: string;
  names: string; // couple, as displayed
  role: string; // short role for cards
  titles: string[]; // full list of roles/responsibilities
  photo: string;
  bio: string[]; // paragraphs
  lead?: boolean;
}

export const staff: StaffMember[] = [
  {
    slug: "anthony-aiken",
    names: "Pastor Anthony & Alaina Aiken",
    role: "Pastor",
    titles: ["Pastor", "Preaching & Teaching", "Discipleship & Counseling"],
    photo: "/pastor-family.jpg",
    lead: true,
    bio: [
      "Pastor Anthony Aiken and his wife Alaina joined the Liberty Baptist Church family in 2026, and Pastor Aiken became pastor in July of 2026. A graduate of West Coast Baptist College and Pensacola Theological Seminary (Pensacola Christian College), he brings a heart for clear, Christ-centered preaching that works through the Scriptures one passage at a time — and a passion for reaching people with the Gospel.",
      "The Aikens have two children and love pouring their lives into the church family. Together they are committed to continuing Liberty's legacy as a Bible-preaching church with a compassionate vision to reach the world.",
      "Whether you have questions about the Bible, want someone to talk to, or simply need prayer, Pastor Aiken would love to meet you. We're here for you.",
    ],
  },
];

// Honored separately (no detail page): the church's founding pastor.
export const founder = {
  names: "Dr. Gary & Martha Jackson",
  role: "Founding Pastor & Pastor Emeritus",
  years: "1978 – 2026",
  bio: [
    "Dr. Gary Jackson founded Liberty Baptist Church on August 6, 1978, and faithfully led the church for nearly five decades. Holding a Master of Divinity and a Doctorate of Ministry, he built Liberty on the preaching of God's Word and a passion for reaching the world with the Gospel.",
    "Dr. Jackson and his wife Martha have three children and eight grandchildren. The Liberty family is forever grateful for his decades of faithful, Bible-centered ministry — a legacy that continues today.",
  ],
};

export function getStaff(slug: string) {
  return staff.find((m) => m.slug === slug);
}
