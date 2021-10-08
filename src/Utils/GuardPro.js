
import { isEqual } from 'lodash';
import React from 'react';
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component: Component, auth, ...rest }) => {

console.log(auth)


let chek = {
    isAuth: true
}
// let res = JSON.stringify(auth[0]) === JSON.stringify(chek[0])
console.log('----------res of ternar-----------')
console.log(JSON.stringify(auth) === JSON.stringify(chek))
console.log(isEqual(auth, chek))


console.log(chek[0])
    return(
        <Route {...rest} render={(props) => (
            console.log(auth),
            (JSON.stringify(auth) === JSON.stringify(chek)) ? <Component {...props} />  : <Redirect to='/auth' />
            
        )} />
    )
}

export default GuardedRoute;