import { message } from "antd";
import { DOI_SO_LUONG, THEM, XEM, XOA } from "../constant/shoeConst";
import { shoeArr } from "../data";

let initialState = {
    list: shoeArr,
    detail: shoeArr[0],
    cart: [],
};

export let shoeReducer = (state = initialState, action) => {
    switch (action.type) {
        case XEM: {
            return { ...state, detail: action.payload };
        }
        case THEM: {
            let cloneCart = [...state.cart];
            let index = cloneCart.findIndex(
                (item) => item.id === action.payload.id
            );
            if (index === -1) {
                let newShoe = {
                    ...action.payload,
                    soLuong: 1,
                    totalPrice: action.payload.price,
                };
                cloneCart.push(newShoe);
            } else {
                ++cloneCart[index].soLuong;
                cloneCart[index].totalPrice =
                    cloneCart[index].price * cloneCart[index].soLuong;
            }
            message.success("Đã thêm vào giỏ hàng!");
            return { ...state, cart: cloneCart };
        }

        case XOA: {
            let cloneCart = [...state.cart];
            let index = cloneCart.findIndex(
                (item) => item.id === action.payload
            );

            if (index !== -1) {
                cloneCart.splice(index, 1);
            }
            message.success("Xóa khỏi giỏ hàng thành công!");
            return { ...state, cart: cloneCart };
        }

        case DOI_SO_LUONG: {
            let { id, option } = action.payload;
            let cloneCart = [...state.cart];
            let index = cloneCart.findIndex((item) => item.id === id);
            cloneCart[index].soLuong += option;
            cloneCart[index].totalPrice =
                cloneCart[index].price * cloneCart[index].soLuong;
            if (cloneCart[index].soLuong == 0) {
                cloneCart.splice(index, 1);
                message.success("Đã xóa do số lượng là 0!");
            }
            return { ...state, cart: cloneCart };
        }

        default: {
            return state;
        }
    }
};
