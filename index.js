const express = require("express")

const app = express()
let ct = 0;

app.use("/api/static", express.static("./static"));


app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        data: {
            name: "Parag Agrawal",
            designation: "CEO",
            company: "Twitter"
        }
    })
})

app.get("/api/count", (req, res) => {
    ct++;

    console.log(ct);
    res.json({
        success: true,
        data: {
            name: "Swayam Gupta",
            designation: "CEO",
            company: "swayamcodes",
            requestCount: ct
        }
    })
})

app.listen(5000, () => {
    console.log("server started at port 5000...")
})