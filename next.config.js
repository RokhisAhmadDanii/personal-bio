const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/profile',
        destination: 'https://lrmn.is-a.fun/',
        permanent: true,
      },
      {
        source: '/virtualphotography',
        destination: 'https://vp.lrmn.fun/',
        permanent: true,
      },
      {
        source: '/airdrop',
        destination: 'https://lrmn-airdrop.vercel.app/',
        permanent: true,
      },
      {
        source: '/mybot',
        destination: 'https://mewwme.is-a.fun/',
        permanent: true,
      },
      {
        source: '/whatsapp',
        destination: 'https://instagram.com/dani_alguero',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/RokhisAhmadDanii',
        permanent: true,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/playlist/1VnNEKTBgEnZhILMnLuimF?si=wRkd6b5FQz2kf_0RMqUZpw&pi=Xr_zuo9gTLCMW',
        permanent: true,
      },
      {
        source: '/whatsapp',
        destination: 'https://wa.me/6285194739970',
        permanent: true,
      },
    ];
  }, 
  trailingSlash: false // Tambahkan opsi trailingSlash di sini
}; 
