import { apiConfig } from '../common/config';

export const actList = () => {
    return new Promise((resolve, reject) => {
        fetch(apiConfig.apiBaseUrl).then((response) => {
            if (response.status === 200 && response.ok === true) {
                return response.json();
            }
            throw new Error('Not Found');
        }).then((result) => {
            resolve(result);
        }).catch((error) => {
            reject(error);
        })
    })
}