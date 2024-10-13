type Middleware<T> = (curr: T, future: T) => boolean

export default class<T> {
    #value;
    #proxy = $state<T>();
    #onGetMW: Middleware<T> = (e) => true;
    #onSetMW: Middleware<T> = (e) => true;

    constructor(initial: T) {
        this.#value = initial;
        this.#proxy = initial;
    }

    onGet(mw: Middleware<T>) {
        this.#onGetMW = mw;
    }

    onSet(mw: Middleware<T>) {
        this.#onSetMW = mw;
    }

    get value() {        
        if (this.#onGetMW(this.#proxy as T, this.#value as T)) {
            return this.#value as T;
        }
        return this.#proxy as T;
    }
                                                                                                                                                                                                                                                             
    get proxy() {        
        return this.#proxy as T;
    }

    set proxy(proxy: T) {
        this.#proxy = proxy;
        if (this.#onSetMW(this.#proxy as T, this.#value as T)) {
            this.#value = this.#proxy;
        }
    }

}