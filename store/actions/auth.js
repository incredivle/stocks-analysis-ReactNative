export const SIGNUP = 'SIGNUP'

export const signup = (email, password) => {
    return async dispatch => {
        console.log("inside action");
        console.log(email, password);

        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API KEY]',
        
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        }
        );

        // if (!response.ok) {
        //     throw new Error('Something went wrong!');
        // }
        const res = await response;
        console.log(res);

        // const resData = await response.json();
        // console.log(resData);
        dispatch({type: SIGNUP});
    };
}