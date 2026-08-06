import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Liberty Baptist Church",
    short_name: "Liberty Baptist",
    description:
      "Liberty Baptist Church — a warm, Bible-preaching church family in Sarasota, Florida, and the home of Liberty Baptist Academy.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9fcfd",
    theme_color: "#0b2740",
    icons: [
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
