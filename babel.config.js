module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",
                "debug": true,
                "targets": "> 0.25%, not dead",
                "shippedProposals": true
            }
        ]
    ]
}