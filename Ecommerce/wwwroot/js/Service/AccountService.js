var AccountService = {
    VerifyUser: (ModelAccount, callback) => {
 
        $.post("http://localhost:58345/AccountAPI/VerifyUser", { "ModelAccount": ModelAccount },
            function (data, status) {
                callback(data);
            })
    }
}