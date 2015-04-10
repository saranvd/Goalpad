
var request = $http({
    method: "post",
    url: "/login",
    transformRequest: transformRequestAsFormPost,
    data: {
        id: sara,
        password: "1234"
    }
});