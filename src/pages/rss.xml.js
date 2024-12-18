import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Matthew Tao",
    description:
      "Alex Cosmas is a Nairobi-based Product Designer simplifying complexity into seamless, user-focused experiences",
    site: import.meta.env.SITE,
    items: import.meta.glob("./blog/**/*.{md,mdx}"),
  });
