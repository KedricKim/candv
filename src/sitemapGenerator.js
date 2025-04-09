require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./sitemapRoute").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return new Sitemap(router)
    .build("https://candv.co.kr")
    .save("./public/sitemap.xml");
}

generateSitemap();
