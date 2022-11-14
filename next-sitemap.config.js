/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yannickaaron.io',
  generateRobotsTxt: true, // (optional)
  // ...other options
}