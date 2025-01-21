import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  return [
    {
      url: 'https://www.dheeraj-jha.tech',
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 1.0,
    },
    {
      url: 'https://www.dheeraj-jha.tech/ui',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.dheeraj-jha.tech/blogs',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];
}
