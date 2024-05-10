const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          // Para o webpack 4:
          // test: /\.(js|ts)x?$/
          // Para o webpack 5:
          and: [/\.(js|ts)x?$/]
        },
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;