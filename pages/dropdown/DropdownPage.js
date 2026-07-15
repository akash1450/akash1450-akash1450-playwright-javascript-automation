import { expect } from "@playwright/test";
import { BasePage } from "../BasePage.js";
import { DROPDOWN_URL } from "../../utils/constants.js"
import dropdown_data from "../../testdata/dropdown_data.json"

export class DropdownPage extends BasePage
{

    constructor (page)
    {

        super (page)

        this.mainloc = this.page.locator("#dropdown")

    }

    async gotodropdownpage()
    {

        await this.navigate(DROPDOWN_URL)

    }

    async selectoption()
    {

        await this.mainloc.selectOption(dropdown_data.option_2)

    }

    async verifyoption()
    {
        await expect(this.mainloc).toHaveValue(dropdown_data.option_2)
    }



}