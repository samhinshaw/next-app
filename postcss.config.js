const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
const purgeCssPlugins = process.env.NODE_ENV === "production" ? [purgecss] : [];

module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "postcss-preset-env",
    ...purgeCssPlugins,
  ],
};
