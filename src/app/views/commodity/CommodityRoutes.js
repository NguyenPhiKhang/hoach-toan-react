const { default: Products } = require("./Products");

const CommodityRoutes = [
    {
        path: "/commodity/products",
        component: Products
    },
];

export default CommodityRoutes;