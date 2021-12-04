module.exports = {
    apps : [{
        name   : "talk-back-core",
        script : "./dist/main.js",
        env_production: {
            NODE_ENV: "production"
        }
    }]
}