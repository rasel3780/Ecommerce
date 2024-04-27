var AccountService = {
    VerifyUser: (userName, password) => {
        $.get("http://localhost:58345/AccoutAPI/VerifyUser?userName= " + userName + "&password=" + password, function (data, status) {
            alert(status)
        });
    }
}