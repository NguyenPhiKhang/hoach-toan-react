// import MatxLoadable from "../../matx/MatxLoadable/MatxLoadable";

import { lazy } from "react"

// const Layout1 = MatxLoadable({
//   loader: () => import("./Layout1/Layout1")
// });

const Layout1 = lazy(()=>import("./Layout1/Layout1"));

export const MatxLayouts = {
  layout1: Layout1
}