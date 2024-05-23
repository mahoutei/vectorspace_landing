/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
        domains: [
          'uploadthing.com',
          'utfs.io',
          'img.clerk.com',
          'subdomain',
          'files.stripe.com',
        ],
      },
};

export default nextConfig;
