import { fileURLToPath } from "url";
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    config.resolve.alias["@"] = path.resolve(__dirname, "assets"); // Mengarahkan alias '@' ke folder 'assets'
    return config;
  },
};

export default nextConfig;
