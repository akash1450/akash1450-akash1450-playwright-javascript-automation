import { test, expect } from "@playwright/test"
import { LoginPage } from "../../pages/login/LoginPage.js"
import  saucedemo_logindata  from '../../testdata/saucedemo_logindata.json'

test.describe ("Login Module", ()=>
{

    test("Verify user is able to login successfully with valid credentials and verify title", async ({page})=>
    {

       const loginpage = new LoginPage (page)

       await loginpage.gotoSauceDemo()
       await loginpage.verifyhometitle()

    })


})