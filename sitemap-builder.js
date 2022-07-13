require("babel-register")({
  presets: ["es2015", "react"]
});
 
const router = require('./src/sitemap-routes').default;
const Sitemap = require('react-router-sitemap').default;
 
// (
//     new Sitemap(router)
//         .build('https://kuants.in')
//         .save('./sitemap.xml')
        
// );
function generateSitemap() {
  var mySitemap = new Sitemap(router).build("https://kuants.in");
  for (let i = 0; i < mySitemap.sitemaps[0].urls.length; i++) {
    mySitemap.sitemaps[0].urls[i].lastmod = new Date();
    mySitemap.sitemaps[0].urls[i].changefreq =  'monthly';
    mySitemap.sitemaps[0].urls[i].priority = 1.0;
  }

  mySitemap.save('./sitemap.xml');
}

generateSitemap();

