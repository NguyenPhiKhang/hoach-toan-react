import Mock from "../mock";
import shortId from "shortid";

const CustomerDB = {
    list: [
        {
            "idKH": "KH01",
            "nameKH": "Nguyễn Văn A",
            "phone": "02344343434",
            "owe": 11343434,
            "totalSale": 23535355555
        },
        {
            "idKH": "KH02",
            "nameKH": "Nguyễn Văn B",
            "phone": "0879392894",
            "owe": 3834333,
            "totalSale": 3299902423
        },
        {
            "idKH": "KH03",
            "nameKH": "Nguyễn Văn C",
            "phone": "0287934233",
            "owe": 28738942,
            "totalSale": 9283843222
        },
        {
            "idKH": "KH04",
            "nameKH": "Nguyễn Văn D",
            "phone": "02344343434",
            "owe": 11343434,
            "totalSale": 23535355555
        },
        {
            "idKH": "KH05",
            "nameKH": "Nguyễn Văn E",
            "phone": "08723472443",
            "owe": 11343434,
            "totalSale": 23535355555
        },
        {
            "idKH": "KH06",
            "nameKH": "Nguyễn Văn F",
            "phone": "02872974333",
            "owe": 11343434,
            "totalSale": 23535355555
        },
        {
            "idKH": "KH07",
            "nameKH": "Nguyễn Văn G",
            "phone": "02344343434",
            "owe": 11343434,
            "totalSale": 23535355555
        }
    ]
};

Mock.onGet("/api/notification").reply(config => {
    const response = NotificationDB.list;
    return [200, response];
});

Mock.onPost("/api/notification/add").reply(config => {
    const response = NotificationDB.list;
    return [200, response];
});

Mock.onPost("/api/notification/delete").reply(config => {
    let { id } = JSON.parse(config.data);
    console.log(id);

    const response = NotificationDB.list.filter(
        notification => notification.id !== id
    );
    NotificationDB.list = [...response];
    return [200, response];
});

Mock.onPost("/api/notification/delete-all").reply(config => {
    NotificationDB.list = [];
    const response = NotificationDB.list;
    return [200, response];
});
