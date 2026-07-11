import { test, expect } from "@playwright/test";
import { TextBox } from "../../pages/textbox/TextBox.js"
import { BasePage } from "../../pages/BasePage.js";



test.describe("verify textbox test", ()=>
{

    test("verify textbox",async ({page}) =>
    {
            const textbox = new TextBox(page)

            await textbox.navigateto_textboxpage()
            await textbox.fill_data()

            await textbox.data_verify()
    })

})