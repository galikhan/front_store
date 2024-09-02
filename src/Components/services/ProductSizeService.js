import { URL } from '../Common/ddata';
import AuthService from "./AuthService";

const ProductSizeService = {

    findAllByProductId: function (productId) {
        return fetch(URL + "/product/size/" + productId, {
            method: "GET",
        }).then((data) => { return data.json() })
    },

    remove: function (id) {
        return fetch(URL + "/product/size/" + id, {
            method: "DELETE",
        }).then((data) => { return data.json() });
    },

    update: function (product) {
        return fetch(URL + "/product/size", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer " + AuthService.token(),
              },
            body: JSON.stringify(product),
          }).then((response) => response.json());
    },

    create: function (product) {
        return fetch(URL + "/product/size", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer " + AuthService.token(),
              },
            body: JSON.stringify(product),
          }).then((response) => response.json());
    },

    // findFirstLevelRowsByChildId: function (childId) {
    //     return fetch(URL + "/category/by/first-level-rows-by-child-id/" + childId, {
    //         method: "GET",
    //     }).then((data) => { return data.json() });
    // }
    
};

export default ProductSizeService;