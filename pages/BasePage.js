import { expect } from "@playwright/test"


export class BasePage 
{

    constructor(page)

    {
        this.page   =   page
    }

    // Goto URL
    async navigate(url)
    {
        await this.page.goto(url)
    }



}
