const config = {
  siteTitle: "PPL VC", // Site title.
  siteTitleShort: "PPL VC", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "PPL VC | An ISA Marketplace", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://pplvc.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "All about income share agreements", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Uncategorized", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Brad Johansen", // Username to display in the author segment.
  userEmail: "brad.johansen@pplvc.com", // Email used for RSS feed's author segment
  userTwitter: "brad_johansen", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Houston, TX", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "Trying to build something new. Learning everything I can about income share agreements.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    //{
      //label: "GitHub",
      //url: "https://github.com/bradjohansen",
      //iconClassName: "fa fa-github"
    //},
    {
      label: "Twitter",
      url: "https://twitter.com/ppl_vc",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:brad.johansen@pplvc.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. PPL VC" // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
