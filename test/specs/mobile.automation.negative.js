import HomePage from '../POM/home.page';
import WelcomePage from '../POM/welcome.page';

describe('Test Negative diet-meal.apk', () => {
    it('TC_002 - Negative - Add User with invalid input', async () => {
        await expect(WelcomePage.splashScreen).toExist()
        await expect(WelcomePage.splashScreen).toHaveText('Empat Sehat, Lima Sempurna')

        await expect(WelcomePage.headerWelcome).toExist()
        await expect(WelcomePage.headerWelcome).toHaveText('Welcome...')
        await expect(WelcomePage.headerDesc).toExist()
        await expect(WelcomePage.headerDesc).toHaveText('Isi formulir untuk membuat/menambahkan user')

        await WelcomePage.inputName.setValue("")

        await WelcomePage.inputWeight.setValue("175")

        await WelcomePage.inputHeight.setValue("60")

        await WelcomePage.buttonNext.click()

        await WelcomePage.errorMessageName.isDisplayed()
    })
})