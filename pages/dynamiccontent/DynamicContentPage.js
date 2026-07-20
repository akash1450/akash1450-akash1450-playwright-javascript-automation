import { expect } from "@playwright/test"
import { BasePage } from "../BasePage.js"
import { DYNAMIC_CONTENT_URL } from "../../utils/constants.js"
import dynamic_content_data from "../../testdata/dynamic_content_data.json"


export class DynamicContentPage extends BasePage
{

    constructor (page)
    {

        super (page)

        this.heading                =   this.page.locator("h3")
        this.contentBlocks          =   this.page.locator("#content .row") 

    }

    async goto_dynamiccontent_page ()
    {

        await this.navigate(DYNAMIC_CONTENT_URL)

    }

    async verifyheading ()
    {

        await expect(this.heading).toHaveText(dynamic_content_data.expectedHeading)

    }

    async verify_contentload ()
    {

        await expect(this.contentBlocks.first()).toBeVisible()

    }

    async page_reload ()
    {

        await this.page.reload()

    }

    async verify_after_reload ()
    {

        await expect(this.contentBlocks.first()).toBeVisible()

    }

}

