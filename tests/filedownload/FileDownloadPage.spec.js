import { test , expect } from "@playwright/test"
import { FileDownloadPage } from "../../pages/filedownload/FileDownloadPage.js"

test.describe("Verify File Download" ,()=>
{

    test ("verify" , async({page})=>
    {

        const down  =   new FileDownloadPage(page)

        await down.goto_download_page()

        await down.verify_file_download()

    })

})