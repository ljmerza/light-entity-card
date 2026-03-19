module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",
                "corejs": 3,
                "debug": true,
                "targets": "> 0.25%, not dead",
                "shippedProposals": true
            }
        ]
    ]
}