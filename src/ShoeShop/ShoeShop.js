import React, { Component } from "react";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";

export default class ShoeShop extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <CartShoe />
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <ListShoe />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <DetailShoe />
                </div>
            </div>
        );
    }
}
