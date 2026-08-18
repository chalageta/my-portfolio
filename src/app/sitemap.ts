import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Update this to your primary domain once you link it in Vercel
  const baseUrl = "https://portifolio-delta-tawny-75.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
