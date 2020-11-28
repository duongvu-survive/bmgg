var express = require('express');
const { lorem } = require('faker');
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
        const page = await browser.newPage();
        await page.setViewport({ width: 1600, height: 900 });
        await page.setDefaultNavigationTimeout(0);


        var createBM = await business(page);

        var registerAds = await register(browser);

        await reloadBM(browser);
        await reloadBM2(browser);

        // await browser.close();

    })
    await res.send("welcome");
}

var reloadBM = async(browser) => {
    var url = "https://business.google.com/dashboard";
    const page = await browser.newPage();
    await page.setViewport({ width: 1600, height: 900 });
    const navigationPromise = page.waitForNavigation()
    await page.setDefaultNavigationTimeout(0);
    await page.goto(url);
    await page.waitForSelector('.U26fgb.O0WRkf.oG5Srb.HQ8yf.C0oVfc.B580Hc.XAza6c.bUHq3d', { visible: true, timeout: 0 });
    var urlNew = await page.evaluate(() => {
        var a = document.querySelector(".U26fgb.O0WRkf.oG5Srb.HQ8yf.C0oVfc.B580Hc.XAza6c.bUHq3d a")
        return a.getAttribute("href")
    })
    await page.waitFor(1000);
    await page.goto(urlNew);
    await page.waitForSelector('.btn.btn-yes', { visible: true, timeout: 0 });

    await page.evaluate(() => {
        var btn = document.querySelectorAll(".btn.btn-yes")
        btn[0].click();
    })
    await timeout(page, 1000);
    await page.evaluate(() => {
        var btn = document.querySelectorAll(".btn.btn-yes")
        btn[0].click();
    })
    await timeout(page, 1000);
    await page.evaluate(() => {
        var btn = document.querySelectorAll(".btn.btn-yes")
        btn[0].click();
    })
    await timeout(page, 1000);
    await page.evaluate(() => {
            var btn = document.querySelectorAll(".btn.btn-yes")
            btn[0].click();
        })
        // await timeout(page, 1000);
        // await page.evaluate(() => {
        //     var btn = document.querySelectorAll(".btn.btn-yes")
        //     btn[0].click();
        // })
    await timeout(page, 1000);
    await page.waitForSelector('.allowed-country-picker .button-text', { visible: true, timeout: 0 });
    await timeout(page, 1000);
    await page.waitForNavigation({ waitUntil: 'networkidle0' })
    await page.evaluate(() => {
        document.querySelectorAll(".allowed-country-picker .button-text")[0].click()

    })

    await page.waitForSelector('material-select-dropdown-item.item', { visible: true, timeout: 0 });
    await page.evaluate(() => {
        document.querySelectorAll("material-select-dropdown-item.item")[193].click();
        document.querySelectorAll(".opt-in-radio")[0].click();
        document.querySelector(".confirm-button").click()
    })
    await page.waitFor(2000);
    await page.goto(url);
    await page.waitForSelector('.U26fgb.O0WRkf.oG5Srb.HQ8yf.C0oVfc.B580Hc.XAza6c.bUHq3d', { visible: true, timeout: 0 });
    var urlNew = await page.evaluate(() => {
        var a = document.querySelector(".U26fgb.O0WRkf.oG5Srb.HQ8yf.C0oVfc.B580Hc.XAza6c.bUHq3d a")
        return a.getAttribute("href")
    })
    await page.waitFor(1000);
    await page.goto(urlNew);
    await page.waitForSelector('.btn.btn-yes', { visible: true, timeout: 0 });

    await timeout(page, 1000);
    await page.evaluate(() => {
        var btn = document.querySelectorAll(".btn.btn-yes")
        btn[0].click();
    })
    await timeout(page, 1000);
    await page.evaluate(() => {
        var btn = document.querySelectorAll(".btn.btn-yes")
        btn[0].click();
    })
    await timeout(page, 1000);
    await page.evaluate(() => {
        var btn = document.querySelectorAll(".btn.btn-yes")
        btn[0].click();
    })
    await page.waitFor(1000);
    await page.evaluate(() => {
            document.querySelectorAll(".payments-back-button-icon")[0].click()
        })
        // back no--tbn
    for (let i = 0; i < 6; i++) {
        await timeout(page, 1000);
        await page.evaluate(() => {
            var btn = document.querySelectorAll(".btn.btn-no")
            btn[0].click();
        })
    }
    await page.waitForSelector('#experiencedUserLink', { visible: true, timeout: 0 });
    await page.click("#experiencedUserLink")
    await page.waitForSelector('.signup-escape', { visible: true, timeout: 0 });
    await page.click(".signup-escape")


    await page.waitForSelector('', { visible: true, timeout: 0 });
    await page.evaluate(() => {
        document.querySelectorAll("country-select .button-text")[0].click()
    })
    await page.waitForSelector('material-select-dropdown-item.item', { visible: true, timeout: 0 });
    await page.evaluate(() => {
        document.querySelectorAll("material-select-dropdown-item.item")[216].click();
        document.querySelectorAll(".opt-in-radio")[0].click();

    })
    await page.waitFor(1000)
    await page.waitForSelector('.account-activation-button', { visible: true, timeout: 0 });
    await page.click(".account-activation-button")
    await page.waitFor(1000)
    await page.waitForSelector('.explore-campaign-button', { visible: true, timeout: 0 });
    await page.click(".explore-campaign-button")
    await navigationPromise

}
var register = async(browser) => {
    var url = "https://ads.google.com/nav/selectaccount?authuser=0&pli=1";
    const page = await browser.newPage();
    await page.setViewport({ width: 1600, height: 900 });
    const navigationPromise = page.waitForNavigation()
    await page.setDefaultNavigationTimeout(0);
    await page.goto(url);
    // await timeout(page, 1000);
    // await navigationPromise
    await page.waitForSelector('.new-account-button', { visible: true, timeout: 0 });
    await page.click(".new-account-button")
    await page.waitForSelector('.btn.btn-yes', { visible: true, timeout: 0 });
    await page.waitFor(1000);
    await page.evaluate(() => {
        var option = document.querySelectorAll("li.goal-panel.northbird");
        option[1].click();
    })
    await page.click(".btn.btn-yes");
    await timeout(page, 1000);
    await page.click(".btn.btn-yes");
    await timeout(page, 1000);
    await page.waitForSelector("input[type='radio']", { visible: true, timeout: 0 });
    await page.evaluate(() => {
        var radio = document.querySelectorAll("input[type='radio']");
        radio[1].click();
    });
    await page.waitFor(1000);
    await page.evaluate(() => {
        var btn = document.querySelectorAll(".btn.btn-yes")
        btn[1].click();
        // document.querySelector(".btn.btn-yes").click();
    });
    await page.waitForSelector('.btn.btn-yes', { visible: true, timeout: 0 });

    await page.evaluate(() => {
        document.querySelectorAll(".btn.btn-yes")[1].click();
    });
    await page.waitForSelector("input[type='text']", { visible: true, timeout: 0 });
    const faker = require("faker")
    await page.waitForSelector(".headline1 input[type='text']");
    await page.type(".headline1 input[type='text']", "Welcome my store 1");

    await page.waitForSelector(".headline2 input[type='text']");
    await page.type(".headline2 input[type='text']", "Welcome my store 2");

    await page.waitForSelector(".headline3 input[type='text']");
    await page.type(".headline3 input[type='text']", "Welcome my store 3");

    await page.waitForSelector(".description input[type='text']");
    await page.type(".description input[type='text']", "Welcome my store 4");

    await page.waitForSelector(".description2 input[type='text']");
    await page.type(".description2 input[type='text']", "Welcome my store 5");



    await page.evaluate(() => {

        var radio = document.querySelector("input[type='checkbox']")
        if (radio.checked) {
            document.querySelector(".call-checkbox").click();
        }

    })
    await page.waitFor(1000)
    await page.click(".btn.btn-yes");
    await timeout(page, 1000);
    await page.click(".add-keyword-button")
    await page.waitForSelector("input[type='text']");
    await page.type("input[type='text']", "a");
    await page.waitForSelector(".dynamic-item ", { visible: true, timeout: 0 });
    await page.click(".dynamic-item");
    await page.evaluate(() => {
        var btn = document.querySelectorAll(".btn.btn-yes")
        btn[0].click();
    })
    await timeout(page, 1000);
    await page.evaluate(() => {
        var btn = document.querySelectorAll(".btn.btn-yes")
        btn[0].click();
    })
    await navigationPromise
    await page.close()
    return;

}
var business = async(page) => {
    // ===========================Email==============//
    var email = 'duongdiemdy@gmail.com'
        // ============================Password=========//
    var password = "Duongvu123!"
        // ============================================
    const faker = require("faker")
    var commerce = await faker.company.companyName()
    var zipCode = ["3001", "3004", "3005", "3006", "3007", "3008", "3010", "3011", "3012", "3013", "3014", "3015", "3018", "3019", "3020", "3027", "3032", "3037", "3048", "3063", "3072", "3084", "3097", "3172"];
    var code = zipCode[Math.floor(Math.random() * zipCode.length)]
    var street = await faker.address.streetAddress()
    var city = "Bern"
    var domain = await faker.internet.domainWord() + ".ch";
    const navigationPromise = page.waitForNavigation()
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
    // await page.close();
    // return;
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
    await page.waitFor(1000);

    await page.click(".U26fgb.O0WRkf.oG5Srb.UxubU.C0oVfc.B580Hc.JvxUib.wTAsbd.M9Bg4d")

    await page.waitForNavigation({ waitUntil: 'networkidle0' })
    await page.waitFor(2000);

    await page.evaluate(() => {
        var ts = document.querySelector("div[data-value='CH']")
        if (ts != undefined && ts.length != 0) {
            ts.classList.add("KKjvXb")
            ts.setAttribute("aria-selected", true)
        }
        var us = document.querySelector("div[data-value='US']")
        if (us != undefined && us.length != 0) {
            us.classList.remove("KKjvXb")
            us.setAttribute("aria-selected", false)
        }


    })

    await page.waitFor(500);

    await page.click(".U26fgb.O0WRkf.oG5Srb.UxubU.C0oVfc.B580Hc.JvxUib.wTAsbd.M9Bg4d")
    await page.waitForNavigation({ waitUntil: 'networkidle0' })

    await page.waitFor(2500);

    await page.evaluate(({ domain }) => {

        document.querySelectorAll("input[type='radio']")[0].click();
        var ts = document.querySelector("input[type='text']")
        if (ts.length != 0)
            ts.setAttribute("value", domain)
    }, { domain })
    await page.waitFor(500);
    await page.click(".U26fgb.O0WRkf.oG5Srb.UxubU.C0oVfc.B580Hc.JvxUib.wTAsbd.M9Bg4d")

    await page.waitForNavigation({ waitUntil: 'networkidle0' })

    await page.waitFor(1000);
    await page.evaluate(() => {
        if (document.querySelectorAll("input[type='radio']").length != 0) {
            document.querySelectorAll("input[type='radio']")[0].click();
        }

    })
    await page.waitFor(1000);
    await page.click(".U26fgb.O0WRkf.oG5Srb.UxubU.C0oVfc.B580Hc.JvxUib.wTAsbd.M9Bg4d")

    await page.waitForNavigation({ waitUntil: 'networkidle0' })

    // await page.waitFor(500);
    // await page.click(".U26fgb.O0WRkf.oG5Srb.UxubU.C0oVfc.B580Hc.JvxUib.wTAsbd.M9Bg4d")

    await page.waitFor(10000);

    await page.evaluate(({ street, code, city }) => {
        var input = document.querySelectorAll("input[type='text']")
        if (input.length > 3) {
            input[3].setAttribute("value", street)
            input[4].setAttribute("value", code)
            input[5].setAttribute("value", city)
        }
    }, { street, code, city })
    await page.waitFor(500);
    await page.click("button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.p22zw");


    await page.waitForNavigation({ waitUntil: 'networkidle0' })
    await page.waitFor(500);
    await page.click("a#sdgBod")
    await page.waitForNavigation({ waitUntil: 'networkidle0' })
    await navigationPromise
    await page.close()
    return;
}
var timeout = async(page, time) => {
    await page.waitForNavigation({ waitUntil: 'networkidle0' })
    await page.waitFor(time);
}
module.exports = router;