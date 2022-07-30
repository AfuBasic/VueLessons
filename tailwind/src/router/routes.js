import ProductUploader from "../uploader/ProductUploader.vue";
import ShopHome from "../pages/ShopHome";

const routes = [
    { path: "/", name: "homepage", component: ShopHome },
    { path: "/upload", name: "upload-product", component: ProductUploader },
];

export default routes;