import axios from "axios";
import {Config} from "../config";

const domain = Config.apiDomain

export async function getRequest<T>(path: string, params: any = null): Promise<T> {
    return axios.request<T>({
        params,
        headers: {'X-MICROCMS-API-KEY': Config.apiKey},
        url: `${domain}${path}`
    }).then((response) => response.data)
        .catch(err => {
            throw err
        })
}