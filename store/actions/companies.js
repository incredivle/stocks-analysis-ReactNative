

import Company from "../../models/company";

export const fetchSavedCompanies = () => {
    return async (dispatch, getState) => {
        
        const token = getState().auth.token;
        const userId = getState().auth.userId;
        

        const response = await fetch(`https://real-stocks-analysis.firebaseio.com/companies/${userId}.json?auth=${token}`);

        const resData = await response.json();
        
        const loadedCompanies = [];

        for (const key in resData){
            loadedCompanies.push(new Company (key, userId, resData[key]))
        }
        dispatch({
            type: 'FETCH_SAVED_COMPANIES',
            companies: loadedCompanies
        })
    }
}

export const addNewCompany = (data, logo, domain) => {
    // getState here gives access to all of store.
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const userId = getState().auth.userId;
        
        // any async code you want
        const response = await fetch(`https://real-stocks-analysis.firebaseio.com/companies/${userId}.json?auth=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: data,
                logo: logo,
                domain: domain
            })
        });

        const resData = await response.json();
        console.log(resData)

        
        dispatch ({
            type: 'NEW_COMPANY',
            // can add in id here from resData.id, make payload into an object containing data and id
            payload: {
                data: data,
                logo: logo,
                domain: domain,
                id: resData.name
            }
        });
    }
    
    
};

export const deleteCompany = companyId => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const userId = getState().auth.userId;
        await fetch(`https://real-stocks-analysis.firebaseio.com/companies/${userId}/${companyId}.json?auth=${token}`, {
            method: 'DELETE'
            
        });

        dispatch({ type: 'DELETE_COMPANY', companyId: companyId});
    }
}


