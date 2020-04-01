module.exports = function(eleventyConfig) {
    // copy files
    eleventyConfig.addPassthroughCopy("assets");
  
    // override default config
    return {
        passthroughFileCopy: true, 
        templateFormats: ["html", "njk", "md"],
      dir: {
        input: "src",
        output: "_site",
        includes: "includes",
        data: "dataJson"
      }
    };
  };