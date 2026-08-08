export interface ChurchEvent {
  when: string;
  title: string;
  detail?: string;
}

// The regular weekly rhythm of the church (evergreen — safe to show on the events page).
export const weeklyEvents: ChurchEvent[] = [
  { when: "Sunday · 9:00 AM", title: "Small Groups", detail: "Age-appropriate groups for children, teens, and adults" },
  { when: "Sunday · 10:00 AM", title: "Morning Worship", detail: "Hymns, special music, and Bible preaching" },
  { when: "Sunday · 10:00 AM", title: "Junior Church", detail: "Children are dismissed after the music service and picked up in the education building after Morning Worship" },
  { when: "Wednesday · 7:00 PM", title: "Midweek Service", detail: "Adult Bible study, kids4Truth, and Teen Bible Study" },
  { when: "Every Service", title: "Nursery", detail: "Loving, secure care for babies and toddlers ages 2 and under" },
];