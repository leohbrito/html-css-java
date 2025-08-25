import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://coolsolutions.com.br'
  const routes = ['', '/sobre', '/servicos', '/links', '/contato']
  return routes.map((path) => ({ url: `${base}${path}`, changeFrequency: 'weekly', priority: path === '' ? 1 : 0.7 }))
}
