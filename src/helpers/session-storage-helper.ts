function setItemSessionStorage(key: string, value: any, timestamp?: any): void {
    if (!key || !value) { return; }

    if (timestamp) {
        value = { value: value, sessionStorageItemValidUntil: timestamp };
    }

    if (typeof value === "object") {
        value = JSON.stringify(value);
    }

    sessionStorage.setItem(key, value);
}

function isTimeStampValid(timestamp: any): boolean {
    let now = new Date();
    return timestamp >= (now.setMinutes(now.getMinutes()));
}

function getItemSessionStorage(key: string): any {
    let value: any = sessionStorage.getItem(key);
    if (!value) { return; }
    if (value[0] === "{" || value[0] === "[") {
        value = JSON.parse(value);
    }

    if (value && !value["sessionStorageItemValidUntil"]) {
        return value;
    }

    return valueTimeStampValidation(value, key);
}

function valueTimeStampValidation(value: any, key: string): undefined | any {
    if (isTimeStampValid(value["sessionStorageItemValidUntil"])) {
        return value.value;
    } else {
        removeItemSessionStorage(key);
        return undefined;
    }
}

function removeItemSessionStorage(key: string): void {
    sessionStorage.removeItem(key);
}

export { setItemSessionStorage, getItemSessionStorage, removeItemSessionStorage }
