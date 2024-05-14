var AccountController = {
    VerifyUser: (actionBtn, url) => {
        let pUserName = $('#txtUserName').val();
        let pPassword = $('#txtPassword').val();

        var ModelAccount =
        {
            userName: pUserName,
            password: pPassword
        }
        AccountService.VerifyUser(ModelAccount, function (response) {
            debugger;
            if (response == "Successfully Authorized") {
                localStorage.setItem("userName", pUserName);
                window.location.href = url;
            }
            else {
                alert("Unathorized")
            }
        });
    }
}