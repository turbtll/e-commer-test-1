export interface IProduct {
    _id : string 
    name : string
    description :string 
    price : number
    image : string 
    createdAt : string 
    updateAt : string 

}

export interface IUser {
    name : string 
    email:string 
}

export interface IOrderItems {
    name :string 
    quantity : number 
    image : string 
    price: number 
    product : String 
    // product : IProduct 

}

export interface IDeliveryAddress {
    address : string 
    city : string 

}


export interface IOrder {
    _id : string 
    user:IUser 
    orderItems :IOrderItems[]
    deliveryAddress:IDeliveryAddress
    paymentDetails:{}
    paymentIntentId : string 
    totalPrice:number
    createAt:string
    upDateAt :string
    paymentStatus:string
    email:string


}