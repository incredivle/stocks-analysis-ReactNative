// export const ADD_NEW_COMPANY = 'ADD_NEW_COMPANY';

// export const addNewCompany = (data) => {
//     return {type: ADD_NEW_COMPANY, data: data};
// }

// export const addNewCompany = (data) => {
    
//     return {
//         type: 'NEW_COMPANY',
//         payload: data
//     };
// };

import Company from "../../models/company";

export const fetchSavedCompanies = () => {
    return async (dispatch, getState) => {
        
        const token = getState().auth.token;
        const userId = getState().auth.userId;
        

        const response = await fetch(`https://real-stocks-analysis.firebaseio.com/companies/${userId}.json?auth=${token}`);

        const resData = await response.json();
        
        const loadedCompanies = [];

        for (const key in resData){
            loadedCompanies.push(new Company (key, 'u1', resData[key]))
        }
        dispatch({
            type: 'FETCH_SAVED_COMPANIES',
            companies: loadedCompanies
        })
    }
}

export const addNewCompany = (data) => {
    // getState here gives access to all of store.
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const userId = getState().auth.userId;
        console.log(userId);
        // any async code you want
        const response = await fetch(`https://real-stocks-analysis.firebaseio.com/companies/${userId}.json?auth=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();

        console.log(resData);
        dispatch ({
            type: 'NEW_COMPANY',
            // can add in id here from resData.id, make payload into an object containing data and id
            payload: {
                data: data,
                id: resData.name
            }
        });
    }
    
    
};


