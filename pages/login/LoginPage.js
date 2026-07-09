import { expect } from '@playwright/test'
import { SAUCEDEMO_URL } from '../../utils/constants.js'
import  saucedemo_logindata  from "../../testdata/saucedemo_logindata.json"

export class LoginPage 
{

    constructor (page) 
    {

        this.page               =       page
        this.usernameInput      =       this.page.locator("#user-name")
        this.passwordInput      =       this.page.locator("#password")
        this.loginButton        =       this.page.locator("#login-button")            

    }

    async gotoSauceDemo ()
    {

        await this.page.goto(SAUCEDEMO_URL)

    }

    async login (username, password)
    {

        await this.usernameInput.fill(saucedemo_logindata.username)
        await this.passwordInput.fill(saucedemo_logindata.password)
        await this.loginButton.click()

    }

    async verifyLogin ()
    {

        await expect(this.page).toHaveTitle("Swag Labs")

    }

    


}