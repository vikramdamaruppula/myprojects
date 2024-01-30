import Inputs from "./Inputs";

export default {
    title:"example inputs",
    component:Inputs,
    tags:['autoDocs'],
    argTypes:{
        backgroundColor:{control:"color"}
    }
}

export const PrimaryInput = {
    args:{
        primary:true,
        labels:"Name Please",
    }
}

export const SecondaryInput = {
     args:{
        labels:"Phone Number Please"
     }
}