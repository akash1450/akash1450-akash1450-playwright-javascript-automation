import { test, expect } from "@playwright/test"
import { LoginPage } from "../../pages/login/LoginPage.js"
import  saucedemo_invalid_logindata  from '../../testdata/saucedemo_invalid_logindata.json'

test.describe ("Login Module", ()=>
{

    test("Verify user Can Login With Invalid Credentitals", async ({page})=>
    {

       const loginpage = new LoginPage (page)

       await loginpage.gotoSauceDemo()
       await loginpage.login(saucedemo_invalid_logindata.username,saucedemo_invalid_logindata.password)
       await loginpage.getErrormessage()

    })


})