module.exports = {

"[project]/app/utils/api.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createProduct": (()=>createProduct),
    "deleteProduct": (()=>deleteProduct),
    "deleteUsers": (()=>deleteUsers),
    "editProduct": (()=>editProduct),
    "getOrders": (()=>getOrders),
    "getProductById": (()=>getProductById),
    "getProducts": (()=>getProducts),
    "getUserById": (()=>getUserById),
    "getUsers": (()=>getUsers),
    "getValues": (()=>getValues)
});
const getOrders = async ()=>{
    try {
        const res = await fetch("http://localhost:3090/orders");
        return res.json();
    } catch (err) {
        console.log(err);
        throw Error("Siparişler alınırken bir sorun oluştu");
    }
};
const getProducts = async ()=>{
    try {
        const res = await fetch("http://localhost:3090/products?_sort=-id", {
            cache: "no-store"
        });
        return res.json();
    } catch (err) {
        console.log(err);
        throw Error("Ürün verileri alınırken bir sorun oluştu");
    }
};
const deleteProduct = async (id)=>{
    try {
        const res = await fetch(`http://localhost:3090/products/${id}`, {
            method: "DELETE"
        });
        return res.json();
    } catch (err) {
        console.log(err);
        throw Error("Ürünü silerken oluştu");
    }
};
const createProduct = async (data)=>{
    try {
        const res = await fetch(`http://localhost:3090/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return res.json();
    } catch (err) {
        console.log(err);
        throw Error("Ürün eklenirken oluştu");
    }
};
const getProductById = async (id)=>{
    try {
        const res = await fetch(`http://localhost:3090/products/${id}`, {
            cache: "no-store"
        });
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return await res.json();
        } else {
            throw Error("Geçersiz JSON formatı!");
        }
    } catch (err) {
        console.error("Hata:", err);
        throw Error("Ürün verileri alınırken bir sorun oluştu!");
    }
};
const editProduct = async (data)=>{
    try {
        const res = await fetch(`http://localhost:3090/products/${data.id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        });
        return res.json();
    } catch (err) {
        console.log(err);
        throw Error("Ürün bulunamadı!");
    }
};
const getUsers = async ()=>{
    try {
        const res = await fetch(`http://localhost:3090/users`, {
            cache: "no-store"
        });
        return res.json();
    } catch (err) {
        console.log(err);
        throw Error("Ürün eklenirken oluştu!");
    }
};
const deleteUsers = async (id)=>{
    try {
        const res = await fetch(`http://localhost:3090/users/${id}`, {
            method: "DELETE"
        });
        return res.json();
    } catch (err) {
        console.log(err);
        throw Error("Ürün silinirken bir sorun oluştu!");
    }
};
const getUserById = async (id)=>{
    try {
        const res = await fetch(`http://localhost:3090/users/${id}`);
        return res.json();
    } catch (err) {
        throw Error("Kullanıcı bulunamadı!");
    }
};
const getValues = async ()=>{
    const orderData = await getOrders() || [];
    const userData = await getUsers() || [];
    const productData = await getProducts() || [];
    console.log(orderData);
    return {
        totalUser: userData.length * 109,
        totalOrder: orderData.reduce((a, b)=>a + b.items.reduce((c, d)=>c + d.quantity, 0), 0) * 63,
        totalIncome: "$" + orderData.reduce((incomeTotal, order)=>incomeTotal + order.items.reduce((itemIncome, item)=>itemIncome + (item.price || 0), 0), 0).toFixed(2),
        productsCount: productData.length * 204
    };
};
}}),
"[project]/app/components/table/DeleteButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$api$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/api.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/react-toastify.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const DeleteButtonn = ({ id })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    //kullanıcı hesabını sil
    const handleDelete = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$api$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteUsers"])(id).then(()=>{
            router.refresh();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Kullanıcı hesabı kaldırıldı");
        }).catch(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Kullanıcı hesabı kaldırılamadı!");
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleDelete,
            className: "border shadow p-2 rounded-md hover:shadow-lg hover:bg-gray-200 transition",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTrash"], {
                className: "text-red-500"
            }, void 0, false, {
                fileName: "[project]/app/components/table/DeleteButton.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/table/DeleteButton.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/table/DeleteButton.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = DeleteButtonn;
}}),
"[project]/app/(pages)/users/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=app_5405af._.js.map