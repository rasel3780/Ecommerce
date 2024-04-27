var AccountController = {
    VerifyUser: (actionBtn) => {
        let userName = $('#xtUserName').val();
        let password = $('#txtPassword').val();
        AccountService.VerifyUser(userName, password);
    }
}