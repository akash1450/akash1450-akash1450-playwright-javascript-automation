import { expect } from "@playwright/test"
import { BasePage } from "../BasePage.js"
import { JS_ALERT_URL } from "../../utils/constants.js"
import javascript_alert_data from "../../testdata/javascript_alert_data.json"

export class JavaScriptAlertPage extends BasePage
{

    constructor(page)
    {

        super (page)

        this.alert_btn          =       this.page.locator('[onclick="jsAlert()"],Click for JS Alert')

        this.confirm_btn        =       this.page.locator('[onclick="jsConfirm()"],Click for JS Confirm')

        this.prompt_btn         =       this.page.locator('[onclick="jsPrompt()"],Click for JS Prompt')

        this.result             =       this.page.locator('#result')

    }

//go to page
    async goto_alert_page ()
    {

        await this.navigate(JS_ALERT_URL)

    }

//normal alert
    async verify_alert ()
    {

        this.page.once("dialog" , async(dialog)=>
        {

            await dialog.accept()

        })

        await this.alert_btn.click()

        await expect(this.result).toHaveText(javascript_alert_data.alertMessage)

    }



    async verify_confirm ()
    {

        this.page.once("dialog" , async(dialog)=>
        {

            await dialog.accept()

        })

        await this.confirm_btn.click()

        await expect(this.result).toHaveText(javascript_alert_data.confirmMessage)

    }

    async verify_prompt ()
    {

        this.page.once("dialog" , async(dialog)=>
        {

            await dialog.accept(javascript_alert_data.promptText)

        })

        await this.prompt_btn.click()

        await expect(this.result).toHaveText(javascript_alert_data.promptMessage)

    }

}