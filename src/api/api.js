import {createApi,createUpload} from "../utils";

// 无需登录接口
export const mommentListApi = data => createApi("/moment/list", data);
export const momentDetailApi = data => createApi("/moment/detail", data);
