import React, { Component } from "react";
import { connect } from "react-redux";

class DetailShoe extends Component {
    render() {
        let { image, price, name, description } = this.props.detail;
        return (
            <div className="col-12 p-0">
                <div className="row border align-items-center m-0">
                    <div className="col-5 text-center p-0">
                        <img
                            src={image}
                            alt=""
                            style={{
                                width: "50%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                    <div className="col-7 p-0">
                        <h5>{name}</h5>
                        <p>{description}</p>
                        <strong>{price}$</strong>
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        detail: state.shoe.detail,
    };
};

export default connect(mapStateToProps)(DetailShoe);
