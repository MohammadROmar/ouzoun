import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'ouzon.somee.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  experimental: { serverActions: { bodySizeLimit: '5mb' } },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
