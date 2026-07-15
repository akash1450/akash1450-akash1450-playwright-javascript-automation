import { test, expect } from "@playwright/test"
import { DropdownPage } from "../../pages/dropdown/DropdownPage.js"
import { verify } from "node:crypto"

test.describe ("verify_dropdown", ()=>{

    test ("verify", async({page})=>{

        const ver = new DropdownPage(page)

        await ver.gotodropdownpage()

        await ver.selectoption()

        await ver.verifyoption()


    })


})