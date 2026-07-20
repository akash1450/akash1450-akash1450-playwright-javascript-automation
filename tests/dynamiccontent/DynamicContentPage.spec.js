import { test , expect } from "@playwright/test"
import { DynamicContentPage } from "../../pages/dynamiccontent/DynamicContentPage.js"

test.describe( "verify" , ()=>
{

    test ("verify_dynamic" , async({page})=>
    {

        const dy    =   new DynamicContentPage(page)

        await dy.goto_dynamiccontent_page()

        await dy.verifyheading()

        await dy.verify_contentload()

        await dy.page_reload()

        await dy.verify_after_reload()

    })

})