import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Liberty Baptist Church",
    short_name: "Liberty Baptist",
    description:
      "Liberty Baptist Church — an old-fashioned, King James Bible, gospel-preaching church family in Sarasota, Florida.",
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
