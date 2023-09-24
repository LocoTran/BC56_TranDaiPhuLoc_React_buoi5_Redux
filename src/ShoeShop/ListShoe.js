import React, { Component } from "react";
import { connect } from "react-redux";
import ItemShoe from "./ItemShoe";

class ListShoe extends Component {
    renderListShoe = () => {
        return this.props.shop.map((item, index) => {
            return (
                <div className="col-3 p-0">
                    <ItemShoe key={index} item={item} />
                </div>
            );
        });
    };
    render() {
        return <div className="row">{this.renderListShoe()}</div>;
    }
}

let mapStateToProps = (state) => {
    return {
        shop: state.shoe.list,
    };
};

export default connect(mapStateToProps)(ListShoe);
