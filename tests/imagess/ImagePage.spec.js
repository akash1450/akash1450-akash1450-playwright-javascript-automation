import { test , expect } from "@playwright/test"
import { ImagePage } from "../../pages/imagess/ImagePage.js"

test.describe ("verify" , ()=>
{

    test ("verify logo" , async({page})=>
    {

        const vi = new ImagePage(page)

        await vi.goto_image_page()

        await vi.verify_logo()

        await vi.verify_logo_alt()


    })

})