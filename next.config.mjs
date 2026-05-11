/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "westernmegabackend.e-aribt.com" },
      { protocol: "https", hostname: "westernmegacollege.edu.np" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
