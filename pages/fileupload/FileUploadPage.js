import { expect } from "@playwright/test"
import { BasePage } from "../BasePage.js"
import { FILE_UPLOAD_URL } from "../../utils/constants.js"
import file_upload_data from "../../testdata/file_upload_data.json"

export class FileUploadPage extends BasePage
{

    constructor(page)
    {

        super (page)

        this.uploadInput        =       this.page.locator("#file-upload")

        this.uploadBtn          =       this.page.locator("#file-submit")

        this.heading            =       this.page.locator("h3")

        this.uploadedFile       =       this.page.locator("#uploaded-files")

    }

    async goto_upload_page ()
    {

        await this.navigate(FILE_UPLOAD_URL)

    }

    async verify_file_upload ()
    {

        await this.uploadInput.setInputFiles("testdata/sample.txt")

        await this.uploadBtn.click()

         await expect(this.heading).toHaveText(file_upload_data.expectedHeading)

        await expect(this.uploadedFile).toHaveText(file_upload_data.expectedFileName)

    }

}