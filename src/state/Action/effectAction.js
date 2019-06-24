import * as effectContant from '../Contant/effectContant';


export const changeStateForm = () =>{
        // Turn On Or Turn Off BackGround And Form Offer     
        return {

            type : effectContant.changeStateFormOffer
        }
}
export const openInfoOffer =() =>{
        return {
            type: effectContant.openInfoOffer
        }
}
export const closeInfoOffer = () =>{

        return {


            type : effectContant.closeInfoOffer
        }
}
export const changeStateNotification =() =>{

              // Handle Open And Close  Of Notification  
        return {

            type : effectContant.changeNotification

        }

}

