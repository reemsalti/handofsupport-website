const express = require("express")
const app = express()
require("dotenv").config()
const stripe = require("stripe")("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")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())


app.post("/payment", cors(), async (req, res) => {
    let { amount } = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "CAD",
            description: "Donate to HOS",
            automatic_payment_methods: { 
                enabled: true,
            },
        });
        console.log("Payment", payment)
        res.json({
            message: "Payment successful",
            success: true
        });
        
    } catch (error) {
        console.log("Error", error)
        res.json({
            message: "Payment failed",
            success: false
        })
    }
})


app.listen(process.env.PORT || 4000, () => {
    console.log("Server is listening on port 4000")
})

