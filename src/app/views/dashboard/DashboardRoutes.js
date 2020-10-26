// import MatxLoadable from "../../../matx/MatxLoadable/MatxLoadable";
import React, { lazy, Suspense } from "react";
import { authRoles } from "../../auth/authRoles";

// const Analytics = MatxLoadable({
//   loader: () => import("./Analytics")
// })

const Analytics = lazy(() => import("./Analytics"));

// const AnalyticsLazy = ()=>(<Suspense ><Analytics/></Suspense>);

// const testui = ()=><div>ok</div>

const dashboardRoutes = [
  {
    path: "/dashboard/analytics",
    component: Analytics,
    auth: authRoles.admin
  }
];

export default dashboardRoutes;
