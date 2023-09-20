import withVideos from 'next-videos'

/** @type {import('next').NextConfig} */
const nextConfigBase = {
  output: 'export',
  pageExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'md',
    'mdx',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/'
      },
      {
        protocol: 'https',
        hostname: 'oddlyshapeddog.github.io',
        port: '',
        pathname: '/'
      },
      {
        protocol: 'https',
        hostname: 'oddly.shaped.dog',
        port: '',
        pathname: '/'
      },
    ]
  }
}

/** @type {import('next').NextConfig} */
const nextConfigFinal = withVideos(nextConfigBase)

export default nextConfigFinal
