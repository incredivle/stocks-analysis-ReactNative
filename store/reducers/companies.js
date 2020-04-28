import { ADD_NEW_COMPANY } from "../actions/companies";

const initialState = {
    newCompanyData: {}
}


const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_COMPANY:
            newCompanyData = action.data
            return {newCompanyData}
        default:
            return state;

    }
    

}

export default companyReducer;