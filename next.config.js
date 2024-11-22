/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "thumbs.dreamstime.com",
      "encrypted-tbn0.gstatic.com",
      "media.istockphoto.com",
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/files/",
          },
        },
      ],
    });

    return config;
  },

  reactStrictMode: false,
};

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "thumbs.dreamstime.com",
      "encrypted-tbn0.gstatic.com",
      "media.istockphoto.com",
    ],
  },
};

module.exports = nextConfig;
