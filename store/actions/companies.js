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

export const addNewCompany = (data) => {
    return async dispatch => {
        // any async code you want
        const response = await fetch("https://stocks-react-native.firebaseio.com/companies.json", {
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


