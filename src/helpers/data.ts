import { isPlainObject } from './util'
export function tranformRequest(data: any): any {
    if (isPlainObject(data)) {
        return JSON.stringify(data)
    }
    return data
}