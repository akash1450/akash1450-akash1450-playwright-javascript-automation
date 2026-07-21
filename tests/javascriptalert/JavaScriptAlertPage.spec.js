import { test , expect } from "@playwright/test"
import { JavaScriptAlertPage } from "../../pages/javascriptalert/JavaScriptAlertPage.js"

test.describe("verify all alerts" , ()=>
{

    test("all alerts" , async({page})=>
    {

        const js    =   new JavaScriptAlertPage(page)

        await js.goto_alert_page()

        await js.verify_alert()
        await page.waitForTimeout(2000)

        await js.verify_confirm()
        await page.waitForTimeout(2000)

        await js.verify_prompt()
        await page.waitForTimeout(2000)

    })

})
