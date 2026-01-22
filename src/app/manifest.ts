import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'شركة النيل للتطوير العقاري | رواد ناطحات السحاب',
    short_name: 'نايل للتطوير العقاري',
    description: 'نايل للتطوير العقاري هي شركة مساهمة مصرية ومقيدة بالبورصة وهيئة الاستثمار أسست بواسطة المهندس محمد طاهر و الأستاذ محمود طاهر.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#91724a',
    icons: [
      {
        src: '/assets/images/logos/main-logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
