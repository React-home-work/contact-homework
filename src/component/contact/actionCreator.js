export const addOne = (name, phone) => ({
  type: "ADD_ONE",
  name: name,
  phone: phone
});

export const getList = () => ({
  type: "GET_LIST"
});

export const changeTab = (tabName) => ({
  type: "CHANGE_TAB",
  tabName: tabName
});

export const setSearchCondition = (condition) => ({
  type: "SET_SEARCH_CONDITION",
  condition: condition
});