import { FaBox, FaChartArea, FaCog, FaDiceD6, FaHeart, FaUsers } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { TiHome } from "react-icons/ti";

export const sections = [
    {
        icon: <TiHome/>,
        name: "Anasayfa",
        url: "/",
    },
    {
        icon: <FaDiceD6/>,
        name: "Ürünler ",
        url: "/products",
    },
    {
        icon: <FaUsers/>,
        name: "Kullanıcılar",
        url: "/users",
    },
    {
        icon: <IoIosPricetags/>,
        name: "Siparişler",
        url: "/orders",
    },
    {
        icon: <FaChartArea/>,
        name: "Grafikler",
        
    },
    {
        icon: <FaHeart/>,
        name: "Favoriler",
        url: "/",
    },
    {
        icon: <FaBox/>,
        name: "Envanter",
        url: "/",
        
    },
    {
        icon: <FaCog/>,
        name: "Ayarlar",
        
    }
];

export const inputs = [
    {
        label: "İsim",
        name: "name",
    },
    {
        label: "Marka",
        name: "brand",
    },

    {
        label: "Kategori",
        name: "category",
    },
    {
        label: "Fiyat",
        name: "price",
        type: "number",
    },
    {
        label: "Stok",
        name: "stock",
        type: "number",
    },
    {
        label: "Açıklama",
        name: "description",
        type: "number",
    },
];