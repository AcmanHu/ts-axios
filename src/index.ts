import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { tranformRequest } from './helpers/data'


function axios(config: AxiosRequestConfig): void {
    processConfig(config)
    xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
    config.url = transformURL(config)
    config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
    const { url, params } = config
    return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
    return tranformRequest(config)
}

export default axios