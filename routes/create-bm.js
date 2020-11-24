var express = require('express');
var router = express.Router();

const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
var random = require('random-name')


/* GET home page. */
router.get('/', function(req, res, next) {
    // var name =
    // res.send(rrag.random());
    run(res)
});
var run = async(res) => {

    await puppeteer.launch({ headless: false }).then(async browser => {

        // ===========================Email==============//
        var email = 'phuongdy1997@gmail.com'
            // ============================Password=========//
        var password = "nhoxcoz1"
            // ============================================
        const faker = require("faker")
        var commerce = await faker.company.companyName()
        var zipCode = ["3001", "3004", "3005", "3006", "3007", "3008", "3010", "3011", "3012", "3013", "3014", "3015", "3018", "3019", "3020", "3027", "3032", "3037", "3048", "3063", "3072", "3084", "3097", "3172"];
        var code = zipCode[Math.floor(Math.random() * zipCode.length)]
        var street = await faker.address.streetAddress()
        var city = "Bern"
        var domain = await faker.internet.domainWord() + ".ch";
        const page = await browser.newPage();
        await page.setViewport({ width: 1600, height: 900 });
        const navigationPromise = page.waitForNavigation()
        await page.setDefaultNavigationTimeout(0);


        await page.goto('https://accounts.google.com/signin/v2/identifier?service=lbc&passive=1209600&continue=https%3A%2F%2Fbusiness.google.com%2F%3FskipPagesList%3D1%26skipLandingPage%3Dtrue%26hl%3Dvi%26gmbsrc%3Dvn-vi-z-z-z-gmb-s-z-l~mhp-hom_topnav-u%26_ga%3D2.253369993.1815716535.1606223419-670923263.1606223419&followup=https%3A%2F%2Fbusiness.google.com%2F%3FskipPagesList%3D1%26skipLandingPage%3Dtrue%26hl%3Dvi%26gmbsrc%3Dvn-vi-z-z-z-gmb-s-z-l~mhp-hom_topnav-u%26_ga%3D2.253369993.1815716535.1606223419-670923263.1606223419&hl=vi&flowName=GlifWebSignIn&flowEntry=ServiceLogin');


        await navigationPromise

        await page.waitForSelector('input[type="email"]')
        await page.click('input[type="email"]')

        await navigationPromise

        //TODO : change to your email 
        await page.type('input[type="email"]', email)

        await page.waitForSelector('#identifierNext')
        await page.click('#identifierNext')

        await page.waitForNavigation({ waitUntil: 'networkidle0' })
        await page.waitFor(1000);

        await page.waitForSelector('input[type="password"]')
            // await page.click('input[type="email"]')
            // await page.waitFor(500);

        //TODO : change to your password
        await page.type('input[type="password"]', password)

        await page.waitForSelector('#passwordNext')
        await page.click('#passwordNext')
        await page.waitFor(500);
        await navigationPromise
        // await page.goto("https://business.google.com/create")
        await page.waitForNavigation({ waitUntil: 'networkidle0' })
        await page.waitFor(500);
        await page.click(".U26fgb.O0WRkf.oG5Srb.HQ8yf.C0oVfc.B580Hc");

        await page.waitForNavigation({ waitUntil: 'networkidle0' })
        await page.waitFor(1000);
        await page.waitForSelector("input:first-child");
        await page.click("input:first-child");

        await page.type("input:first-child", commerce)
        await page.click(".U26fgb.O0WRkf.oG5Srb.UxubU.C0oVfc.B580Hc.JvxUib.wTAsbd");

        await page.waitForNavigation({ waitUntil: 'networkidle0' })
        await page.waitFor(1000);
        await page.waitForSelector("input:first-child");
        await page.click("input:first-child");
        await page.type("input:first-child", 'Jeans shop')
        await page.click(".U26fgb.O0WRkf.oG5Srb.UxubU.C0oVfc.B580Hc.JvxUib.wTAsbd.M9Bg4d")

        await page.waitForNavigation({ waitUntil: 'networkidle0' })
        await page.waitFor(1000);
        await page.waitForSelector("input#c2");
        await page.click("input#c2");
        await page.click(".U26fgb.O0WRkf.oG5Srb.UxubU.C0oVfc.B580Hc.JvxUib.wTAsbd.M9Bg4d")

        await page.waitForNavigation({ waitUntil: 'networkidle0' })
        await page.waitFor(500);

        await page.click(".U26fgb.O0WRkf.oG5Srb.UxubU.C0oVfc.B580Hc.JvxUib.wTAsbd.M9Bg4d")
        await page.waitForNavigation({ waitUntil: 'networkidle0' })
        await page.waitFor(1000);

        await page.evaluate(() => {
            var ts = document.querySelector("div[data-value='CH']")
            var us = document.querySelector("div[data-value='US']")
            us.classList.remove("KKjvXb")
            us.setAttribute("aria-selected", false)
            ts.classList.add("KKjvXb")
            ts.setAttribute("aria-selected", true)
        })

        await page.waitFor(500);

        await page.click(".U26fgb.O0WRkf.oG5Srb.UxubU.C0oVfc.B580Hc.JvxUib.wTAsbd.M9Bg4d")
        await page.waitForNavigation({ waitUntil: 'networkidle0' })

        await page.waitFor(1000);

        await page.evaluate(({ domain }) => {

            document.querySelectorAll("input[type='radio']")[0].click();
            var ts = document.querySelector("input[type='text']")
            ts.setAttribute("value", domain)
        }, { domain })
        await page.waitFor(500);
        await page.click(".U26fgb.O0WRkf.oG5Srb.UxubU.C0oVfc.B580Hc.JvxUib.wTAsbd.M9Bg4d")

        await page.waitForNavigation({ waitUntil: 'networkidle0' })

        await page.waitFor(500);
        await page.evaluate(() => {
            if (document.querySelectorAll("input[type='radio']").length != 0) {
                document.querySelectorAll("input[type='radio']")[0].click();
            }

        })
        await page.waitFor(500);
        await page.click(".U26fgb.O0WRkf.oG5Srb.UxubU.C0oVfc.B580Hc.JvxUib.wTAsbd.M9Bg4d")

        await page.waitForNavigation({ waitUntil: 'networkidle0' })

        // await page.waitFor(500);
        // await page.click(".U26fgb.O0WRkf.oG5Srb.UxubU.C0oVfc.B580Hc.JvxUib.wTAsbd.M9Bg4d")
        // await page.waitForNavigation({ waitUntil: 'networkidle0' })
        await page.waitFor(1000);

        await page.evaluate(({ street, code, city }) => {
            var input = document.querySelectorAll("input[type='text']")
            input[3].setAttribute("value", street)
            input[4].setAttribute("value", code)
            input[5].setAttribute("value", city)
        }, { street, code, city })
        await page.waitFor(500);
        await page.click("button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.p22zw");

        await navigationPromise
        await page.waitForNavigation({ waitUntil: 'networkidle0' })
        await page.waitFor(500);
        await page.click("a#sdgBod")
        await page.waitForNavigation({ waitUntil: 'networkidle0' })
            // await browser.close();
    })
    await res.send("welcome");
}
module.exports = router;