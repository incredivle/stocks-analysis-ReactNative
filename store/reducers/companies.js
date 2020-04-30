// import { ADD_NEW_COMPANY } from "../actions/companies";

import { combineReducers } from "redux";

// const initialState = {
//     newCompanyData: {}
// }


// const companyReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_NEW_COMPANY:
//             newCompanyData = action.data
//             return {newCompanyData}
//         default:
//             return state;

//     }
    

// }

// export default companyReducer;

export const newCompanyReducer = ( companyToSave=null, action) => {
    if(action.type === 'NEW_COMPANY'){
        return action.payload;
    }  

    return companyToSave;
};

export const fetchCompaniesReducer = ( companies=null, action) => {
    if (action.type === "FETCH_SAVED_COMPANIES"){
        return action.companies.filter(company => company.userId === 'u1');
    }

    return companies
}

const reducers = combineReducers({
    newCompany: newCompanyReducer,
    fetchCompanies: fetchCompaniesReducer
})

export default reducers;