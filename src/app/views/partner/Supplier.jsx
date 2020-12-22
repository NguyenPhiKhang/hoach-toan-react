import React, { Component } from 'react';
import Breadcrumb from '../../../matx/Breadcrumb';
import SimpleCard from '../../../matx/cards/SimpleCard';
import SupplierTable from './table/TableSupplier';

class Supplier extends Component {
    render() {
        return (
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                            { name: "partner", path: "/partner" },
                            { name: "Supplier" }
                        ]}
                    />
                </div>
                {/* <SimpleCard title="Danh sách khách hàng"> */}
                    <SupplierTable/>
                {/* </SimpleCard> */}
            </div>
        );
    }
}

export default Supplier;