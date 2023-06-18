 import {useSelector } from 'react-redux';


function ComponentA(){

    const usersInfo = useSelector((state) => state.users);
    const list = useSelector((state) => state.list);

    return(<div>This is component A {usersInfo.list.map((obj)=>{
         return (<div>{obj}</div>)
    })}
    <div>list:{list.fullName}</div>
    </div>)
}

export default ComponentA;