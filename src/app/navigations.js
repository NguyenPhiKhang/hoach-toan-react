export const navigations = [
  {
    name: "Tổng quan",
    path: "/dashboard/analytics",
    icon: "dashboard"
  },
  {
    name: "Hàng hoá",
    icon: "description",
    children: [
      {
        name: "Sản phẩm",
        path: "/commodity/products",
        iconText: "E"
      },
      {
        name: "Thiết lập giá",
        path: "/forms/basic",
        iconText: "B"
      },
    ]
  },
  {
    name: "Đối tác",
    icon: "description",
    children: [
      {
        name: "Khách hàng",
        path: "/partner/customers",
        iconText: "B"
      },
      {
        name: "Nhà cung cấp",
        path: "/partner/supplier",
        iconText: "E"
      }
    ]
  },
  {
    name: "Giao dịch",
    icon: "trending_up",
    path: "/ddddd"
  },
  {
    name: "Nhân viên",
    icon: "format_list_bulleted",
    path: "/fsafasfdasd"
  },
  {
    name: "Sổ quỹ",
    icon: "trending_up",
    path: "/fasdfasd"
  },
  {
    name: "Báo cáo",
    icon: "favorite",
    children: [
      {
        name: "Cuối ngày",
        path: "/material/autocomplete",
        iconText: "A"
      },
      {
        name: "Hàng hoá",
        path: "/material/buttons",
        iconText: "B"
      },
      {
        name: "Nhân viên",
        path: "/material/checkbox",
        iconText: "C"
      },
      {
        name: "Nhà cung cấp",
        path: "/material/dialog",
        iconText: "D"
      }
    ]
  }
];
