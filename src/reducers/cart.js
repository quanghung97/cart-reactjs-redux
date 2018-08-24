import * as types from './../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('CART'));

var initialState = [
    {
        product : {
            id : 1,
            name : 'Iphone 7 plus',
            image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description : 'Sản phẩm do apple sản xuất',
            price : 500,
            inventory : 10,
            rating : 4
        },
        quantity : 5
    }
];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default: return [...state];

    }
}

export default cart;
