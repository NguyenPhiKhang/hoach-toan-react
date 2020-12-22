import React, { Component } from 'react';
import Breadcrumb from '../../../matx/Breadcrumb';
import SimpleCard from '../../../matx/cards/SimpleCard';
import CustomerTable from './table/TableCustomer';

class Customer extends Component {
    render() {
        return (
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                            { name: "partner", path: "/partner" },
                            { name: "Customers" }
                        ]}
                    />
                </div>
                {/* <SimpleCard title="Danh sách khách hàng"> */}
                    <CustomerTable/>
                {/* </SimpleCard> */}
            </div>
        );
    }
}

export default Customer;