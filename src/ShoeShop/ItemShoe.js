import React, { Component } from "react";
import { connect } from "react-redux";
import { THEM, XEM } from "./constant/shoeConst";

class ItemShoe extends Component {
    render() {
        let { image, name, price } = this.props.item;
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={image} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">
                            {name.length > 10
                                ? name.slice(0, 10) + "..."
                                : name}
                        </h4>
                        <p className="card-text">{price}$</p>
                        <button
                            className="btn btn-dark"
                            onClick={() => {
                                this.props.handleDetail(this.props.item);
                            }}
                        >
                            View
                        </button>
                        <button
                            className="btn btn-primary mt-1"
                            onClick={() => {
                                this.props.handleAdd(this.props.item);
                            }}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleDetail: (shoe) => {
            let action = {
                type: XEM,
                payload: shoe,
            };
            dispatch(action);
        },
        handleAdd: (shoeID) => {
            dispatch({ type: THEM, payload: shoeID });
        },
    };
};

export default connect(null, mapDispatchToProps)(ItemShoe);
