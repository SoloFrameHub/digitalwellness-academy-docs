export default {
  github: "https://github.com/SoloFrameHub/mental-health-education-platform",
  docsRepositoryBase: "https://github.com/SoloFrameHub/mental-health-education-platform/blob/main",
  titleSuffix: " – Digital Wellness Academy",
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Digital Wellness Academy</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Platform Documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#6366f1" />
      <meta name="theme-color" content="#6366f1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Digital Wellness Academy: HIPAA-compliant mental health education platform documentation" />
      <meta name="og:description" content="Complete technical documentation for the Digital Wellness Academy platform and services" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="og:title" content="Digital Wellness Academy Documentation" />
      <meta name="apple-mobile-web-app-title" content="DWA Docs" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: "Edit this page on GitHub",
  footerText: <>{new Date().getFullYear()} © Digital Wellness Academy. All rights reserved.</>,
  primaryHue: 260, // Indigo color
  darkMode: true,
};
