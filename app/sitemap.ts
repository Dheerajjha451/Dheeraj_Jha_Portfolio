import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.dheerajjha.com'
  
  const languages = [
    '', 
    '/en-gb',
    '/de',
    '/de-at', 
    '/de-ch',
    '/ar',
    '/ar-ae',
    '/nl',
    '/nl-be',
    '/fr',
    '/fr-be',
    '/fr-ch',
    '/es',
    '/it',
    '/pt',
    '/sv',
    '/da',
    '/no',
    '/fi'
  ]
  
  const routes = [
    {
      path: '',
      priority: 1,
      changeFrequency: 'monthly' as const
    },
    {
      path: '/blogs',
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      path: '/ui',
      priority: 0.7,
      changeFrequency: 'monthly' as const
    }
  ]
  
  const sitemap: MetadataRoute.Sitemap = []
  
  languages.forEach(lang => {
    routes.forEach(route => {
      sitemap.push({
        url: `${baseUrl}${lang}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      })
    })
  })
  
  return sitemap
}
