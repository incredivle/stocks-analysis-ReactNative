export const ADD_NEW_COMPANY = 'ADD_NEW_COMPANY';

export const addNewCompany = (data) => {
    return {type: ADD_NEW_COMPANY, data: data};
}