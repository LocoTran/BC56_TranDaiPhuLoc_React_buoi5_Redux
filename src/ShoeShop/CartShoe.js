import React, { Component } from "react";
import { connect } from "react-redux";
import { DOI_SO_LUONG, XOA } from "./constant/shoeConst";

class CartShoe extends Component {
    renderCart = () => {
        return this.props.cart.map((item, index) => {
            let { id, image, name, price, soLuong, totalPrice } = item;
            return (
                <tr key={index}>
                    <td>
                        {name.length > 12 ? name.slice(0, 12) + "..." : name}
                    </td>
                    <td>
                        <img src={image} alt="" width={50} />
                    </td>
                    <td>{price}$</td>
                    <td>
                        <button
                            className="btn btn-secondary"
                            onClick={() => {
                                this.props.handleChangeQuantity(id, -1);
                            }}
                        >
                            -
                        </button>
                        <strong className="mx-1">{soLuong}</strong>
                        <button
                            className="btn btn-secondary"
                            onClick={() => {
                                this.props.handleChangeQuantity(id, 1);
                            }}
                        >
                            +
                        </button>
                    </td>
                    <td>{totalPrice}$</td>
                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                this.props.handleDelete(id);
                            }}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
    };

    calcTotalPrice = (cart) => {
        return cart.reduce((result, shoe) => {
            let { soLuong, price } = shoe;
            return result + price * soLuong;
        }, 0);
    };

    render() {
        return (
            <div>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price/Shoe</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderCart()}</tbody>
                </table>
                <p className="display-4">
                    Total Price:{" "}
                    <strong>{this.calcTotalPrice(this.props.cart)}$</strong>
                </p>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        cart: state.shoe.cart,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: (id) => {
            dispatch({ type: XOA, payload: id });
        },
        handleChangeQuantity: (id, option) => {
            dispatch({ type: DOI_SO_LUONG, payload: { id, option } });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartShoe);
