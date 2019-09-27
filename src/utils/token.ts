const STORAGE_TOKEN_NAME = 'AUTHORIZATION';

export function getToken() {
    return localStorage.getItem(STORAGE_TOKEN_NAME);
}
export function saveToken(token: string) {
    localStorage.setItem(STORAGE_TOKEN_NAME, token);
}
export function removeToken() {
    localStorage.clear();
}