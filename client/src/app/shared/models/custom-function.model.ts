export class CustomFunctions {

    storageItems = {
        token: 'token',
        lang: 'lang',
    }

    getLocalStorage(key: string): string {
        // @ts-ignore
        return localStorage.getItem(key.toString());
    }

    setLocalStorage(key = '', value = ''): void {
        localStorage.setItem(key.toString(), value.toString());
    }

    removeLocalStorageItem(key: string): void {
        localStorage.removeItem(key.toString());
    }

    getSessionStorage(key: string): string {
        // @ts-ignore
        return sessionStorage.getItem(key.toString());
    }

    setSessionStorage({key = '', value = ''}): void {
        sessionStorage.setItem(key.toString(), value.toString());
    }

    removeSessionStorageItem(key: string): void {
        sessionStorage.removeItem(key.toString());
    }

    openModal(selector: string): void {
        // @ts-ignore
        $(selector).modal('show');
    }

    closeModal(selector: string): void {
        // @ts-ignore
        $(selector).modal('hide');
    }
}