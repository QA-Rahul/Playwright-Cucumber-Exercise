import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I will select the cart', async () => {
  await new Product(getPage()).clickCartBtn();
});

Then('I will checkout', async () => {
  await new Product(getPage()).clickCheckoutBtn();
});

Then('I will fill the first name, last name and zip code {string} {string} {string}', async (firtsname, lastName, postCode) => {
  await new Product(getPage()).enterInformation(firtsname, lastName, postCode);
});

Then('I will select continue', async () => {
  await new Product(getPage()).clickContinueBtn();
});

Then('I will select finish', async () => {
  await new Product(getPage()).clickFinishBtn();
});

Then('Validate the complete order text {string}', async (completeOrderText) => {
  await new Product(getPage()).verifyCompleteOrderText(completeOrderText);
  await new Product(getPage()).clickBackHomeBtn();
});

Then('I will sort the item by high to low {string}', async (OptionToSelect) => {
  await new Product(getPage()).selectSortOption(OptionToSelect);
});

Then('Validate all six items are sorted correctly by price high to low', async () => {
  await new Product(getPage()).verifyPriceFromHighToLow();

});

Then('I will sort the item by low to high {string}', async (OptionToSelect) => {
  await new Product(getPage()).selectSortOption(OptionToSelect);
});

Then('Validate all six items are sorted correctly by price low to high', async () => {
  await new Product(getPage()).verifyPriceFromLowToHigh();

});

Then('I will add the backpack to the cart again', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I will select the cart again', async () => {
  await new Product(getPage()).clickCartBtn();
});

Then('I will select remove', async () => {
  await new Product(getPage()).clickRemoveBtn();
});

Then('Verify the product is removed', async () => {
  await new Product(getPage()).verifyProductIsRemoved();
});