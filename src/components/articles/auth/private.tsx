
import { profileProps } from './profile'
import {Login} from './login'
type privateProps={
    isLoggedIn: boolean,
    component:React.ComponentType<profileProps>
}
export const Private=({isLoggedIn,component:Component}:privateProps)=> {
    if(isLoggedIn){
        return <Component name="settingsPage"/>
    }else{
        return <Login/>
    }

}