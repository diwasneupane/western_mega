/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "westernmegabackend.e-aribt.com" },
      { protocol: "https", hostname: "westernmegacollege.edu.np" },
    ],
  },
};

export default nextConfig;
