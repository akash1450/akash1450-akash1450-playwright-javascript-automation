import { test, expect } from "@playwright/test"
import { RadioButtonPage } from "../../pages/radiobutton/RadioButtonPage.js"

test.describe ("radio_button_verify", ()=>{

    test ("radio_button_test", async({page})=>{

       const radiobutton = new RadioButtonPage(page)

       await radiobutton.navigatetoradiobutton()

       await radiobutton.clickyesradiobutton()

    })

})