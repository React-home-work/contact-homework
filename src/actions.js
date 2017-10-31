
export const authenticateUser = (userName, passWd) => ({
    type: "AUTHENTICATE_USER",
    userName: userName,
    passWd: passWd
});

export const addOne = (name, phone) => ({
    type: "ADD_ONE",
    name: name,
    phone: phone
})

export const getList = () => ({
    type: "GET_LIST"
})