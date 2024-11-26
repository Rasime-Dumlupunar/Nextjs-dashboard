(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_3586d7._.js", {

"[project]/app/components/form/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Input = ({ item, value })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: item.name,
                className: "font-semibold text-xl",
                children: [
                    " ",
                    item.label
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/form/input.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: item.name,
                type: item.type,
                defaultValue: value || "",
                name: item.name,
                className: "shadow rounded-lg py-1 px-3 text-lg"
            }, void 0, false, {
                fileName: "[project]/app/components/form/input.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/form/input.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this);
};
_c = Input;
const __TURBOPACK__default__export__ = Input;
var _c;
__turbopack_refresh__.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/utils/api.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/form/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/constants.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$form$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/form/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/api.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/react-toastify.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
const Form = ({ editItem })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = (e)=>{
        e.preventDefault();
        // formdata örneği al
        const formData = new FormData(e.target);
        const productData = Object.fromEntries(formData.entries());
        // edit item yoksa yeni ürün oluştur
        if (!editItem) {
            // resim ekle
            const id = Math.round(Math.random() * 100);
            productData.images = `https://picsum.photos/seed/${id}/500/500`;
            // varsayılan rating ve yorum sayısını belirle
            //@ts-ignore
            productData.rating = 0;
            //api'a ekleme isteği at
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProduct"])(productData).then(()=>{
                router.push("/products");
                router.refresh();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Ürün başarıyla oluştu");
            });
        } else {
            // edit item varsa ürünü düzenle
            // api isteğinde gönderilecek nesneyi hazırla
            let updatedItem = {
                ...editItem,
                ...productData
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editProduct"])(updatedItem).then(()=>{
                router.push("/products");
                router.refresh();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Ürün başarıyla düzenlendi");
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "flex flex-col gap-5 mt-3 text-xl",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$constants$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputs"].map((i)=>//@ts-ignore
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$form$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    item: i,
                    //@ts-ignore
                    value: editItem ? editItem[i.name] : ""
                }, void 0, false, {
                    fileName: "[project]/app/components/form/index.tsx",
                    lineNumber: 60,
                    columnNumber: 13
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: ".",
                        type: "button",
                        className: "bg-gray-300 hover:bg-gray-400 py-2 px-5 rounded-lg text-xl",
                        children: "Geri"
                    }, void 0, false, {
                        fileName: "[project]/app/components/form/index.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "bg-blue-300 hover:bg-blue-400 py-2 px-5 rounded-lg text-xl",
                        children: editItem ? "Kaydet" : "Oluştur"
                    }, void 0, false, {
                        fileName: "[project]/app/components/form/index.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/form/index.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/form/index.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
};
_s(Form, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Form;
const __TURBOPACK__default__export__ = Form;
var _c;
__turbopack_refresh__.register(_c, "Form");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(pages)/products/[slug]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_3586d7._.js.map