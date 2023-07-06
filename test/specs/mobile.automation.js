import HomePage from '../POM/home.page';
import WelcomePage from '../POM/welcome.page';

describe('Test Positive diet-meal.apk', () => {
    it('TC_001 - Positive - Add User with valid input', async () => {
        await expect(WelcomePage.splashScreen).toExist()
        await expect(WelcomePage.splashScreen).toHaveText('Empat Sehat, Lima Sempurna')

        await expect(WelcomePage.headerWelcome).toExist()
        await expect(WelcomePage.headerWelcome).toHaveText('Welcome...')
        await expect(WelcomePage.headerDesc).toExist()
        await expect(WelcomePage.headerDesc).toHaveText('Isi formulir untuk membuat/menambahkan user')

        await WelcomePage.inputName.setValue("Dwiky")

        await WelcomePage.inputWeight.setValue("60")

        await WelcomePage.inputHeight.setValue("175")

        await WelcomePage.chooseSexMale.click()

        await WelcomePage.buttonNext.click()

        await WelcomePage.chooseActivity.click()

        await WelcomePage.buttonSelesai.click()

        await expect(HomePage.hiHomeScreen).toExist()
        await expect(HomePage.hiHomeScreen).toHaveText('Hi,')
        await expect(HomePage.hiHomeScreenDescription).toExist()
        await expect(HomePage.hiHomeScreenDescription).toHaveText('Ready to some calories today?')
        await expect(HomePage.buttonHome).toExist()
        await expect(HomePage.buttonHome).toHaveText('Home')
    })
})