/** @type {import('next').NextConfig} */
const nextConfig = {
   images:{
    domains:["images.unsplash.com","www.fwu.edu.np","avatars.githubusercontent.com"]
   }
}

module.exports = nextConfig
// next.config.js
// module.exports = {
//    webpack: (config, { isServer }) => {
//      // Exclude the specific HTML file causing issues from webpack bundling
//      if (!isServer) {
//        config.module.rules.push({
//          test: /@mapbox[\\\/]node-pre-gyp[\\\/]lib[\\\/]util[\\\/]nw-pre-gyp[\\\/]index\.html$/,
//          use: 'html-loader',
//        });
//      }
 
//      return config;
//    },
//  };
 
 
