import {WebDriver, WebElement} from 'selenium-webdriver';

export class BasePage {

    private webElement;
    private locator;

    constructor(locator: string, private driver:WebDriver) {
        this.locator = locator;
        this.webElement = driver.findElement(locator);
    }

    async click() {
        await this.webElement.click();
    }

    async clear() {
        await this.webElement.clear();
    }

    async getAttribute(attribute: string) {
        return await this.webElement.getAttribute(attribute);
    }

    async getVisibleText() {
        await this.waitForText();
        return await this.webElement.getText();
    }

    async sendKeys(keys: string) {
        await this.webElement.sendKeys(keys);
    }

    async getCssValue(cssStyleProperty: string) {
        let getCss = await this.webElement.getCssValue(cssStyleProperty);
        return getCss;
    }

    async isVisible() {
        return this.webElement.isDisplayed();
    }

    async isEnabled() {
        return await this.webElement.isEnabled();
    }

    async isDisplayed() {
        let i = 0
        while(i<3){
        try {
            this.webElement = await this.driver.findElement(this.locator);
            await this.webElement;
            return true;
        } catch (ex) {
            await this.driver.sleep(2000);
            console.log('Element is not interactable. Relocating Element');
            if(i==2){console.error(ex);return false;}
            }
            i++
        }
    }

    async getPageSource() {
        return await this.driver.getPageSource();
    }

    async hardClick() {
        await this.driver.actions().mouseMove(this.webElement).perform();
        return this.webElement.click();
    }

    async mouseMove() {
        return await this.driver.actions().mouseMove(this.webElement).perform();
    }

    async scrollToElement() {
        return await this.driver.executeScript('arguments[0].scrollIntoView();', this.webElement);
    }

    async expandShadowElement(locator: String) {
        let i = 0;
        while (i < 5){
            try{
                await this.driver.sleep(2000);
                this.webElement = await this.driver.findElement(this.locator);
                let rootElement: WebElement;
                rootElement = await this.driver.executeScript("return arguments[0].shadowRoot;", this.webElement);
                await this.driver.sleep(2000);
                return await rootElement.findElement(locator);
            }
            catch(error){
                console.log('Error occurred while accessing Shadow Elements. Trying Again.....');
                if (i == 4){console.error(error);}              
            }
            i++;
        }       
    }

    async clickScript() {
        return await this.driver.executeScript('arguments[0].click();', this.webElement);
    }

    async waitForText() {
        let i=0;
        while(i<30000){
            try {
                return await this.webElement.getText();
            } catch (ex) {
                await this.driver.sleep(1000);
                this.webElement = await this.driver.findElement(this.locator);
                if(i==29000){console.error(ex);}
                }
            i++;
        }
}

    async waitForElement() {
        let i=0;
        while(i<3){
            try {
                this.webElement = await this.driver.findElement(this.locator);
                await this.webElement
                return true;
            } catch (ex) {
                await this.driver.sleep(2000);
                if(i==2){console.error(ex);return false;}
                }
            i++;
        }
    }

    async waitForElementInteractive() {
        let i=0;
        while(i<30000){
            try {
                await this.webElement.isEnabled();
                return true;
            } catch (ex) {
                await this.driver.sleep(1000);
                this.webElement = await this.driver.findElement(this.locator);
                if(i==29000){console.error(ex);return false;}
                }
            i++;
        }
    }
}