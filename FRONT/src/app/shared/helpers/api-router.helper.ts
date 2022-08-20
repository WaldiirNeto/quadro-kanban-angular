import { environment } from '@environments/environment'

export default class API_URL {
    static readonly LOGIN = `${environment.API_URL}/login`;
    static readonly LIST_CARDS = `${environment.API_URL}/cards`
}
