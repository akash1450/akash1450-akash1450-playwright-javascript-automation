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
        
        this.error_msg          =       this.page.locator("h3")


    }

    async gotoSauceDemo ()
    {

        await this.page.goto(SAUCEDEMO_URL)

    }

    async login (username, password)
    {

        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()

    }

    async verifyLogin ()
    {

        await expect(this.page).toHaveTitle("Swag Labs")

    }

    async getErrormessage ()
    {

        await expect(this.error_msg).toContainText('Epic sadface: Username and password do not match any user in this service')

    }

    async verifyhometitle ()
    {

        await expect(this.page).toHaveTitle("Swag Labs")

    }

    async verifyHomeUrl ()
    {

        await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html")

    }

    


}