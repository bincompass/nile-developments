import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nile Developments | The pioneer of skyscrapers',
    short_name: 'Nile Developments',
    description: 'Nile Developments is an Egyptian joint stock company listed on the Stock Exchange and the Investment Authority. It established by Eng. Mohamed Taher and Mr. Mahmoud Taher',
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
