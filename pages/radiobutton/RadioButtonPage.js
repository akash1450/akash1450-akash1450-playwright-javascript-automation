import { expect } from "@playwright/test"
import { RADIO_URL } from "../../utils/constants.js"

export class RadioButtonPage 
{

    constructor (page)
    {

        this.page               =       page
        this.radiobtnclick      =       this.page.locator("#yesRadio")
        this.verifyclick        =       this.page.locator(".mt-3")

    }

    async navigatetoradiobutton ()
    {

        await this.page.goto(RADIO_URL)

    }

    async clickyesradiobutton ()
    {

        await this.radiobtnclick.click()

        await expect(this.verifyclick).toContainText("You have selected ")

    }


}