"use client";

import { useEffect, useMemo, useState } from "react";

const TIME_ZONE = "America/New_York";

type Service = {
  day: number;
  hour: number;
  minute: number;
  label: string;
};

const streamedServices: Service[] = [
  { day: 0, hour: 10, minute: 0, label: "Sunday Morning Worship" },
  { day: 3, hour: 19, minute: 0, label: "Wednesday Bible Study" },
];

function zonedParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);

  const value = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value || 0);

  const weekday = parts.find((part) => part.type === "weekday")?.value || "Sun";
  const dayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  return {
    year: value("year"),
    month: value("month"),
    date: value("day"),
    weekday: dayMap[weekday],
    hour: value("hour"),
    minute: value("minute"),
    second: value("second"),
  };
}

function localTimeToEpoch(year: number, month: number, date: number, hour: number, minute: number) {
  const desiredAsUtc = Date.UTC(year, month - 1, date, hour, minute, 0);
  let guess = desiredAsUtc;

  for (let i = 0; i < 2; i += 1) {
    const actual = zonedParts(new Date(guess));
    const actualAsUtc = Date.UTC(
      actual.year,
      actual.month - 1,
      actual.date,
      actual.hour,
      actual.minute,
      actual.second,
    );
    guess += desiredAsUtc - actualAsUtc;
  }

  return guess;
}

function nextService(now: Date) {
  const local = zonedParts(now);
  const localMidnight = new Date(Date.UTC(local.year, local.month - 1, local.date));

  for (let offset = 0; offset <= 7; offset += 1) {
    const calendar = new Date(localMidnight.getTime() + offset * 86400000);
    const weekday = calendar.getUTCDay();

    for (const service of streamedServices) {
      if (weekday !== service.day) continue;
      const target = localTimeToEpoch(
        calendar.getUTCFullYear(),
        calendar.getUTCMonth() + 1,
        calendar.getUTCDate(),
        service.hour,
        service.minute,
      );
      if (target > now.getTime()) return { ...service, target };
    }
  }

  return null;
}

function splitTime(milliseconds: number) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export default function ServiceCountdown({ compact = false }: { compact?: boolean }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const next = useMemo(() => nextService(now), [now]);
  if (!next) return null;

  const remaining = splitTime(next.target - now.getTime());
  const units = [
    [remaining.days, "Days"],
    [remaining.hours, "Hours"],
    [remaining.minutes, "Minutes"],
    [remaining.seconds, "Seconds"],
  ] as const;

  return (
    <div className={compact ? "text-center" : "text-center max-w-4xl mx-auto"}>
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
        Our Next Livestream Begins In
      </p>
      <div className="grid grid-cols-4 gap-2 md:gap-4 mb-4">
        {units.map(([value, label]) => (
          <div key={label} className="rounded-xl bg-cream border border-cream-dark px-2 py-4 md:py-5">
            <div className="font-serif text-2xl md:text-4xl font-bold text-brown-light tabular-nums">
              {String(value).padStart(2, "0")}
            </div>
            <div className="text-[10px] md:text-xs font-bold tracking-[0.12em] uppercase text-text-light mt-1">
              {label}
            </div>
          </div>
        ))}
      </div>
      <p className="font-serif text-lg md:text-xl font-semibold text-text-dark">{next.label}</p>
      <p className="text-sm text-text-light mt-1">
        {next.day === 0 ? "Sunday at 10:00 AM" : "Wednesday at 7:00 PM"}
      </p>
    </div>
  );
}
