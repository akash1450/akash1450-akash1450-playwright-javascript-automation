import { test , expect } from "@playwright/test"
import { ButtonPage } from "../../pages/buttons/ButtonPage"
import { verify } from "node:crypto"

test.describe ("verify double botton" , ()=>
{

    test ("verify" , async({page})=>
    {

        const clk = new ButtonPage(page)

        await clk.gotobuttonpage()
        await clk.click_dbl_btn()


        await clk.click_right_btn()
        await clk.veerify_right()

        await clk.onlyclick()
        await clk.verifyonlyclick()

    })

})