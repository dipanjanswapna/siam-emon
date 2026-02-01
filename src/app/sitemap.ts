import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drmonishacr.web.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/manifesto`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/get-involved`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/news-updates`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ]
}
