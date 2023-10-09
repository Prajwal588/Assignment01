const express = require("express");
const router = express();


router.get("/",(req,res)=>{
    res.render("partials/home");
});

router.get("/homeejs",(req,res)=>{
    res.render("partials/home");
})

router.get("/aboutejs",(req,res)=>{
    res.render("partials/about");
});

router.get("/serviceejs",(req,res)=>{
    res.render("partials/service");
});

router.get("/projectejs",(req,res)=>{
    res.render("partials/project");
});

router.get("/contactejs",(req,res)=>{
    res.render("partials/contact");
});

module.exports = router;
