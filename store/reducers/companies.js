

import { combineReducers } from "redux";


export const newCompanyReducer = ( companyToSave=null, action) => {
    if(action.type === 'NEW_COMPANY'){
        return action.payload;
    }  

    return companyToSave;
};

export const fetchCompaniesReducer = ( companies=null, action) => {
    if (action.type === "FETCH_SAVED_COMPANIES"){
        return action.companies;
    }

    return companies
}

const reducers = combineReducers({
    newCompany: newCompanyReducer,
    fetchCompanies: fetchCompaniesReducer,
    
})

export default reducers;

// .filter(company => company.userId === 'u1')