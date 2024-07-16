import { expect, Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly cartIcon_btn: string = 'a[class="shopping_cart_link"]'
    private readonly checkout_btn: string = 'button[id="checkout"]'
    private readonly first_Name: string = 'input[id="first-name"]'
    private readonly last_Name: string = 'input[id="last-name"]'
    private readonly postal_Code: string = 'input[id="postal-code"]'
    private readonly conitnue_btn: string = 'input[id="continue"]'
    private readonly finish_btn: string = 'button[id="finish"]'
    private readonly complete_order_text: string = 'h2[class="complete-header"]'
    private readonly back_to_home_btn: string = 'button[id="back-to-products"]'
    private readonly sort_option: string = 'select[class="product_sort_container"]'
    private readonly remove_btn = 'button[class="btn btn_secondary btn_small cart_button"]'
    private readonly item_price = '(div[@class="inventory_item_price"])[1]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async clickCartBtn() {
        await this.page.locator(this.cartIcon_btn).click()
    }

    public async clickCheckoutBtn() {
        await this.page.locator(this.checkout_btn).click()
    }

    public async enterInformation(firstName: string, lastName: string, postCode: string) {
        await this.page.locator(this.first_Name).fill(firstName)
        await this.page.locator(this.last_Name).fill(lastName)
        await this.page.locator(this.postal_Code).fill(postCode)
    }
    public async clickContinueBtn() {
        await this.page.locator(this.conitnue_btn).click()
    }
    public async clickFinishBtn() {
        await this.page.locator(this.finish_btn).click()
    }
    public async verifyCompleteOrderText(completeOrderText: string) {
        await expect(this.page.locator(this.complete_order_text)).toHaveText(completeOrderText);
    }
    public async clickBackHomeBtn() {
        await this.page.locator(this.back_to_home_btn).click()
    }
    public async selectSortOption(OptionToSelect: string) {
        await this.page.locator(this.sort_option).selectOption({value: OptionToSelect})
    }
    public async verifyPriceFromHighToLow() {
        const item_price_list =  this.page.locator('div[class="inventory_item_price"]');
        console.log(await item_price_list.count())
        for (let i=0; i<await item_price_list.count()-1; i++) {
            console.log("Prices are")
            let firstPrice = await item_price_list.nth(i).innerText()
            let firstPriceWithoutSign = Number(firstPrice.replace("$", ""))
            console.log(firstPriceWithoutSign)
            let laterPrice = await item_price_list.nth(i+1).innerText()
            let laterPriceWithoutSign = Number(laterPrice.replace("$", ""))
            console.log(laterPriceWithoutSign)
            if (firstPriceWithoutSign==laterPriceWithoutSign){
                console.log("prices are equal")
            } else {
            expect(firstPriceWithoutSign).toBeGreaterThan(laterPriceWithoutSign)
            }
        }
    }
    public async verifyPriceFromLowToHigh() {
        const item_price_list =  this.page.locator('div[class="inventory_item_price"]');
        console.log(await item_price_list.count())
        for (let i=0; i<await item_price_list.count()-1; i++) {
            console.log("Prices are")
            let firstPrice = await item_price_list.nth(i).innerText()
            let firstPriceWithoutSign = Number(firstPrice.replace("$", ""))
            console.log(firstPriceWithoutSign)
            let laterPrice = await item_price_list.nth(i+1).innerText()
            let laterPriceWithoutSign = Number(laterPrice.replace("$", ""))
            console.log(laterPriceWithoutSign)
            if (firstPriceWithoutSign==laterPriceWithoutSign){
                console.log("prices are equal")
            } else {
            expect(laterPriceWithoutSign).toBeGreaterThan(firstPriceWithoutSign)
            }
        }
    }
    public async clickRemoveBtn() {
        await this.page.locator(this.remove_btn).click()
    }
    public async verifyProductIsRemoved() {
        await expect(this.page.locator(this.cartIcon_btn)).toBeEmpty;
    }
}