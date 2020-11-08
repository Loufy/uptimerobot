const axios = require("axios")
const urls = ["https://munari.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong!")).catch(() => {});
        })
    }, 60 * 1000);
