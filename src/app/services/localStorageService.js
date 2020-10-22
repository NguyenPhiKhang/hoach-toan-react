class localStorageService{
    ls = window.localStorage;

    setItem(key, value){
        value = JSON.stringify(value);
        this.ls.setItem(key, value);
        return true;
    }

    getItem(key){
        try {
            return JSON.parse(this.ls.getItem(key));
        } catch (error) {
            return null;
        }
    }
}

export default new localStorageService();