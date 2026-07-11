import { expect } from "@playwright/test";
import { BasePage } from "../BasePage.js";
import { DEMOQA } from "../../utils/constants.js"
import demoqa_data from "../../testdata/demoqa_data.json"


export class TextBox extends BasePage 
{

    constructor(page) 
    {

        super(page)

        this.fullname                   =       this.page.locator("#userName")
        this.email                      =       this.page.locator("#userEmail")
        this.current_address            =       this.page.locator("#currentAddress")
        this.permanent_address          =       this.page.locator("#permanentAddress")
        this.submitbtn                  =       this.page.locator("#submit")

        this.verifyfullname             =       this.page.locator("#name")
        this.verifyemail                =       this.page.locator("#email")
        this.verifycurrent_address      =       this.page.locator("//p[@id='currentAddress']")
        this.verifypermanent_address    =       this.page.locator("p:nth-child(4)")

        
    }

    async navigateto_textboxpage ()
    {

        await this.navigate(DEMOQA)

    }

    async fill_data ()
    {

        await this.fullname.fill(demoqa_data.name)
        await this.email.fill(demoqa_data.mailid)
        await this.current_address.fill(demoqa_data.curr_address)
        await this.permanent_address.fill(demoqa_data.per_address)
        await this.submitbtn.click()

    }

    async data_verify()
    {

        await expect(this.verifyfullname).toContainText(demoqa_data.name)
        await expect(this.verifyemail).toContainText(demoqa_data.mailid)
        await expect(this.verifycurrent_address).toContainText(demoqa_data.curr_address)
        await expect(this.verifypermanent_address).toContainText(demoqa_data.per_address)

    }



}