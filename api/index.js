
import express from "express"

import { extractMeta } from "./extractMeta.js"

import { home } from "./home.js"

import cors from "cors"


const app = express()


app.use(cors())


app.get("/", (_, res) => {

    res.send(home())
})


app.get("/getmeta", async (req, res) => {

    const { url } = req.query

    try{

        const meta = await extractMeta(url)

        res.json({

            error: null,

            data: meta
        })
    }
    catch(error){

        res.json({

            error: error.message,

            data: null
        })
    }
})

export default app

