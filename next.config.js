const withImages = require("next-images");

module.exports = withImages({
    fileExtensions: ["jpg", "jpeg", "png", "gif"],
    esModule : true ,
    inlineImageLimit: false,
    webpack(config, options) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        return config
    }
})
