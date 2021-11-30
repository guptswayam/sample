const express = require("express")

const app = express()


app.use("/static", express.static("./static"));


app.get("/test", (req, res) => {
    res.json({
        success: true,
        data: {
            name: "Parag Agrawal",
            designation: "CEO",
            company: "Twitter"
        }
    })
})


app.listen(5000, () => {
    console.log("server started at port 5000...")
})