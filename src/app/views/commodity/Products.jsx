import React, { Component } from 'react';
import Breadcrumb from '../../../matx/Breadcrumb';
import SimpleCard from '../../../matx/cards/SimpleCard';

class Products extends Component {
    render() {
        return (
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                            { name: "commodity", path: "/commodity" },
                            { name: "Products" }
                        ]}
                    />
                </div>
                <SimpleCard title="Danh sách sản phẩm"/>
            </div>
        );
    }
}

export default Products;