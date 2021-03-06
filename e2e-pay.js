describe('E2E Tests - Pay', () => {
	it('Should log into application', () => {
		browser.url('http://zero.webappsecurity.com/index.html')
		$('#signin_button').waitForExist()
		$('#signin_button').click()
		$('#login_form').waitForExist()
		$('#user_login').setValue('username')
		$('#user_password').setValue('password')
		$('input[type="submit"]').click()
		$('.nav-tabs').waitForExist()
        browser.maximizeWindow()
	})

	it('Should make loan payment', () => {
		$('#pay_bills_tab').click()
		const selectPayee = $('#sp_payee')
		selectPayee.waitForExist()
		selectPayee.selectByAttribute('value', 'apple')
		const selectAccount = $('#sp_account')
		selectAccount.waitForExist()
		selectAccount.selectByVisibleText('Loan')
		$('#sp_amount').setValue('500')
		$('#sp_date').setValue('2020-03-31')
		$('#sp_description').setValue('Test')
        browser.pause(2000)
		$('#pay_saved_payees').click()
		const message = $('#alert_content')
		expect(message).toHaveText('The payment was successfully submitted.')
        browser.pause(2000)
	})
    
    it('Should make Credit Card payment', () => {
		$('#pay_bills_tab').click()
		const selectPayee = $('#sp_payee')
		selectPayee.waitForExist()
		selectPayee.selectByAttribute('value', 'bofa')
		const selectAccount = $('#sp_account')
		selectAccount.waitForExist()
		selectAccount.selectByVisibleText('Credit Card')
		$('#sp_amount').setValue('444')
		$('#sp_date').setValue('2021-03-15')
		$('#sp_description').setValue('Pay off credit card debt')
        browser.pause(2000)
		$('#pay_saved_payees').click()
		const message = $('#alert_content')
		expect(message).toHaveText('The payment was successfully submitted.')
        browser.pause(2000)
	})


})

// npm run test
// npm run test --silent