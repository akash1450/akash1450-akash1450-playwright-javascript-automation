import { test } from "@playwright/test"
import { FileUploadPage } from "../../pages/fileupload/FileUploadPage.js"

test.describe("Verify File Upload",()=>
{

    test("Upload File",async({page})=>
    {

        const upload = new FileUploadPage(page)

        await upload.goto_upload_page()

        await upload.verify_file_upload()

    })

})