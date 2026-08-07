type InstagramMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
};

const fallbackPhotos = [
  { src: "/congregation.jpg", alt: "Church family at Liberty Baptist Church" },
  { src: "/youth-conference.jpg", alt: "Liberty Baptist Church teens together" },
  { src: "/choir.jpg", alt: "Liberty Baptist Church choir" },
  { src: "/academy-event.jpg", alt: "Liberty Baptist Academy event" },
  { src: "/car-show.jpg", alt: "Liberty Baptist Church community event" },
  { src: "/pastor-preaching.jpg", alt: "Preaching at Liberty Baptist Church" },
];

async function getInstagramMedia(): Promise<InstagramMedia[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  try {
    const fields = "id,caption,media_type,media_url,permalink,thumbnail_url";
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&limit=6&access_token=${encodeURIComponent(token)}`,
      { next: { revalidate: 1800 } },
    );

    if (!response.ok) return [];
    const data = (await response.json()) as { data?: InstagramMedia[] };
    return (data.data ?? []).filter((item) => item.media_url || item.thumbnail_url).slice(0, 6);
  } catch {
    return [];
  }
}

export default async function LifeAtLiberty() {
  const posts = await getInstagramMedia();
  const hasLiveFeed = posts.length > 0;

  return (
    <section className="py-20 md:py-24 bg-warm-white" aria-labelledby="life-at-liberty-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              @lbcsarasota
            </p>
            <h2 id="life-at-liberty-heading" className="font-serif text-3xl md:text-5xl font-bold text-text-dark">
              Life at <em className="text-brown-light italic">Liberty</em>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/lbcsarasota/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex self-start md:self-auto text-brown-light font-semibold text-sm tracking-wide uppercase border-b-2 border-gold/60 hover:border-gold transition-colors"
          >
            Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {hasLiveFeed
            ? posts.map((post) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-xl bg-cream"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.media_type === "VIDEO" ? post.thumbnail_url || post.media_url : post.media_url}
                    alt={post.caption?.slice(0, 120) || "Recent photo from Liberty Baptist Church on Instagram"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute inset-0 bg-brown-deep/0 group-hover:bg-brown-deep/15 transition-colors" />
                </a>
              ))
            : fallbackPhotos.map((photo) => (
                <a
                  key={photo.src}
                  href="https://www.instagram.com/lbcsarasota/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-xl bg-cream"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute inset-0 bg-brown-deep/0 group-hover:bg-brown-deep/15 transition-colors" />
                </a>
              ))}
        </div>
      </div>
    </section>
  );
}
