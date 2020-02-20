/**是否处于开发模式 */
export const IS_DEV = typeof process!=="undefined" && process.env.NODE_ENV !== 'production';
/**自定义参数 渠道标识 */
export const SDK_CHANNEL = typeof _SDK_CHANNEL==="string" ? _SDK_CHANNEL : "jssdk";
/**package.json 版本号 */
export const SDK_VERSION = typeof _SDK_VERSION==="string" ? _SDK_VERSION : "1.0.0";

/**域名分配 */
export const DOMAINS = {
    API:undefined,
    RES:undefined,
};
switch(SDK_CHANNEL){
    case "gamesdk":{
        DOMAINS.API = "//gamesdkapi.zhaixiaowai.com/";
        DOMAINS.RES = "//gamesdkres.zhaixiaowai.com/";
        break;
    }
    default:{        
        DOMAINS.API = "//api.zhaixiaowai.com/";
        DOMAINS.RES = "//res.zhaixiaowai.com/";
        break;
    }
}  