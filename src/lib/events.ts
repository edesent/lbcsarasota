export interface ChurchEvent {
  when: string;
  title: string;
  detail?: string;
}

// The regular weekly rhythm of the church (evergreen — safe to show on the homepage).
export const weeklyEvents: ChurchEvent[] = [
  { when: "Sunday · 9:00 AM", title: "Small Groups", detail: "Age-appropriate groups for children, teens, and adults" },
  { when: "Sunday · 10:00 AM", title: "Morning Worship", detail: "Hymns, special music, and Bible preaching" },
  { when: "Sunday · 10:00 AM", title: "Junior Church", detail: "A service just for children ages 3–11" },
  { when: "Wednesday · 7:00 PM", title: "Midweek Service", detail: "Adult Bible study, kids4Truth, and Youth4Truth" },
];

// Standing ministries and fellowship opportunities (shown on the full Events page).
export const ministryEvents: ChurchEvent[] = [
  { when: "Sunday Evenings", title: "Patch the Pirate Club", detail: "Character-building fun and Bible truth for children" },
  { when: "Every Service", title: "Nursery", detail: "Loving, secure care for babies and toddlers ages 2 and under" },
  { when: "Sundays · 9:00 AM", title: "Small Groups", detail: "Age-appropriate groups for children, teens, and adults" },
  { when: "Year-round", title: "World Missions", detail: "Praying for and supporting missionaries helping reach more than 200 countries and territories" },
];
