import Customer from "./Customer";
import Supplier from "./Supplier";

const partnerRoutes = [
    {
        path: "/partner/customers",
        component: Customer,
        exact: true,
    },
    {
        path: "/partner/supplier",
        component: Supplier
    }
];

export default partnerRoutes;