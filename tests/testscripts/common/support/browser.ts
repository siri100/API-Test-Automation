const { Builder} = require('selenium-webdriver');
const Chrome = require('selenium-webdriver/chrome');
import {Shared} from "../support/shared";



export class Browser {
    private static browser;
    public static Driver(){
        if (Shared.browserType=='chrome') {
            let browser =  new Builder().forBrowser(Shared.browserType)
            .setChromeOptions(new Chrome.Options().addArguments('--headless','--no-sandbox','--disable-gpu','--disable-extensions','--no-cache','window-size=1366,667'))
            .build();
        browser.manage().window().maximize();
     this.browser = browser;
        return browser; 
        }       
            
    }

    public static QuitBrowser(){
        this.browser.quit();
    }
}




