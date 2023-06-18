import {UserContext} from './App';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Users from './services/users';
function ComponentC(){


    const dispatch = useDispatch();
    const usersInfo = useSelector((state) => state.users);


    useEffect(() => {
      
        setTimeout(()=>{
            Users.loadUsers(dispatch);
        },5000)
    }, [])

return(<div>
        <UserContext.Consumer>
            {
                obj=>{
                    return (<div>{obj}</div>)
                }
            }
        </UserContext.Consumer>
        This is component {usersInfo.fullName}</div>)
}

export default ComponentC;