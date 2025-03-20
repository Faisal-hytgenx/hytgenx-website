/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export mode
    images: {
      unoptimized: true, // Required for static exports if using Next.js Image component
    },
  };
  
  export default nextConfig;
  