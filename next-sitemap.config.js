// next-sitemap.config.js
module.exports = {
  siteUrl: "https://ghiciucsiasociatii.ro", // Replace with your domain
  generateRobotsTxt: true, // Optional: Generate robots.txt
  sitemapSize: 7000, // Split large sitemaps into multiple files
  exclude: ["/server-sitemap.xml"], // Exclude dynamic/server-side routes
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Allow all crawlers
    ],
    additionalSitemaps: [
      "https://ghiciucsiasociatii.ro/blog",
      "https://ghiciucsiasociatii.ro/abonamente",
      "https://ghiciucsiasociatii.ro/conatct", // Add dynamic sitemaps if needed
    ],
  },
};
