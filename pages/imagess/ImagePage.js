import { expect } from "@playwright/test"
import { BasePage } from "../BasePage.js"
import { IMAGE_URL } from "../../utils/constants.js"
import  imagess_data from "../../testdata/imagess_data.json"

export class ImagePage extends BasePage
{

    constructor (page)
    {

        super (page)

        this.logo       =   this.page.locator('img[alt="Website for automation practice"]')

    }

    async goto_image_page ()
    {

        await this.navigate(IMAGE_URL)

    }

    async verify_logo ()
    {

        await expect(this.logo).toBeVisible

    }

    async verify_logo_alt ()
    {

        await expect(this.logo).toHaveAttribute("alt" , imagess_data.expectedAlt )

    }

}