import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'شركة نايل للتطوير العقاري | رائدة ناطحات السحاب',
    short_name: 'نايل للتطوير العقاري',
    description: 'شركة نايل للتطوير العقاري هي شركة مساهمة مصرية مقيدة بالبورصة وهيئة الاستثمار. تأسست بواسطة المهندس محمد طاهر والسيد محمود طاهر',
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
