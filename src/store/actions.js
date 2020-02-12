//import { apiConfig } from '../common/config';

export const actList = () => {
    return new Promise((resolve, reject) => {
        fetch('/products.json').then((response => response.json())).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        })
    })
}