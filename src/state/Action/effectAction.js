import * as effectAction from '../Contant/effectContant';


export const turnOnOrOffForFormOfferAndBackgroundBody = () =>{      
        return {

            type :   effectAction.turnOnOrOffBackgroundBodyAndFormOffer
        }
}
export const openInfoOffer =() =>{

        return {

            type: effectAction.openInfoOffer
        }
}
export const closeInfoOffer = () =>{

        return {


            type : effectAction.closeInfoOffer
        }
}

