import { expect } from "@playwright/test";
import { BasePage } from "../../pages/BasePage.js"
import { FILE_DOWNLOAD_URL } from "../../utils/constants.js"
import file_download_data from "../../testdata/file_download_data.json"

export class FileDownloadPage extends BasePage
{

    constructor (page)
    {

        super (page)

        this.downloadLink = this.page.locator('[href="download/some-file.txt"]')

    }

    async goto_download_page ()
    {

        await this.navigate(FILE_DOWNLOAD_URL)

    }

    async verify_file_download ()
    {

        const downloadPromise = this.page.waitForEvent("download")

        await this.downloadLink.click()

        const download = await downloadPromise

        await expect(download.suggestedFilename()).toBe(file_download_data.expectedFileName)

    }

}