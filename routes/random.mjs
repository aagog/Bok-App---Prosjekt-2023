import express from "express";
const router = new express.Router();

router.get("/number", function(req, res, next){
const max = parseInt(req.params.max || Number.MAX_SAFE_INTEGER);
const min = parseInt(req.params.min || 0);

    const number = Math.round(Math.random() * max - min) + min;
    res.status(200).send(number + "").end();
})

router.get("/string", function(req, res, next){
    const rdnString = (Math.random() * 500).toString(16);
    res.status(200).send(rdnString).end();
})

export default router;
