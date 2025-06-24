import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  experimental: { serverActions: { bodySizeLimit: '5mb' } },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
