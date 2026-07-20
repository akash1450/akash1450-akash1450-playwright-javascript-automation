import { expect } from "@playwright/test"
import { BasePage } from "../BasePage.js"
import { BUTTON_URL } from "../../utils/constants.js"
import  button_data from "../../testdata/button_data.json"


export class ButtonPage extends BasePage
{

    constructor (page)
    {

        super (page)

        this.clickondbutton         =       this.page.locator("#doubleClickBtn")
        this.verifydblbutton        =       this.page.locator("#doubleClickMessage")

        this.rightclk               =       this.page.locator("#rightClickBtn")
        this.verifyrightbutton      =       this.page.locator("#rightClickMessage")

        this.clickmethod            =       this.page.locator("//button[text()='Click Me']")
        this.verifyclick            =       this.page.locator("#dynamicClickMessage")

    }

    async gotobuttonpage ()
    {

        await this.navigate(BUTTON_URL)

    }

//Double click
    async click_dbl_btn ()
    {

        await this.clickondbutton.dblclick()

    }
    async veerify_dbl ()
    {

        await expect(this.veerify_dbl).toHaveText(button_data.buttondata)

    }


//Right click
    async click_right_btn ()
    {

        await this.rightclk.click({button: "right"})

    }
    async veerify_right ()
    {

        await expect(this.verifyrightbutton).toHaveText(button_data.rightclkdata)

    }


    async onlyclick ()
    {

        await this.clickmethod.click()

    }
    async verifyonlyclick ()
    {

        await expect(this.verifyclick).toHaveText(button_data.normalclick)

    }







}