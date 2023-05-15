import fetch from "../axiosHelper";
import objectToQueryParams from "../../utils/convertObjToQueryParams";

export async function getAnimations(page: number, sort?: string) {
    const param = objectToQueryParams({
        page, sort
    })
    console.log("param" , param)
    return await fetch(`/wp-json/api/v2/reviews-category/animations${param}`, "get", null)
}