//Tạo mảng dữ liệu (bình thường là lấy từ CSDL thông qua API, trả về một chuỗi gọi là chuỗi JSON)
var mangdl = [
    {
        id: 1,
        ten: "Luu Bi",
        anh: "luu_bi.jpg",
        cmt: "Em oi anh la Luu Bi, cho anh xin sdt nhe"
    },
    {
        id: 2,
        ten: "Quan Vu",
        anh: "quan_vu.jpg",
        cmt: "Anh hai lam em mat mat qua"
    },
    {
        id: 3,
        ten: "Truong Phi",
        anh: "truong_phi.jpg",
        cmt: "HaizZ, ong anh toi"
    }
];

for (var i = 0; i < mangdl.length; i++) {
    var noiDungMotKhoi = 
    `<img src="${mangdl[i].anh}" alt="" class="float-xs-left pr-1 rounded-circle">
    <b>${mangdl[i].ten}</b>
    <p>${mangdl[i].cmt}</p>`;
    
    console.log(mangdl[i].ten);        
    console.log(noiDungMotKhoi);
}
