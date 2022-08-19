import { environment } from '@environments/environment'

export default class API_URL {
    static readonly LOGIN = `${environment.API_URL}/login`;
}
