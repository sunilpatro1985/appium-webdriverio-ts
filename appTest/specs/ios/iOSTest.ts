describe('IOS Login application', () => {
    it('should login with valid credentials', async () => {
        await (await $('~tab bar option menu')).click()
        await browser.pause(2000)
        await (await $("~menu item log in")).click();
        await browser.pause(2000)
        try{
            await (await $('~Go Shopping button')).click()
           
        }catch(e:any){
            await (await $("~Username input field")).setValue("bob@example.com");
            await (await $("~Password input field")).setValue("10203040");
            await (await $("~Login button")).click();
          
        }
        await browser.pause(2000)
    });
});