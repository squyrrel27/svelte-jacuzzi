type Middleware<T> = (proxy: T, value: T) => T

export default class<T> {
    #value;
    #proxy = $state<T>();
    #onGetMW: Middleware<T> = (proxy, value) => value;
    #onSetMW: Middleware<T> = (proxy, value) => proxy;

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
        return this.#onGetMW(this.#proxy as T, this.#value as T);
    }
                                                                                                                                                                                                                                                             
    get proxy() {        
        return this.#proxy as T;
    }

    set proxy(proxy: T) {
        this.#proxy = proxy;
        this.#value = this.#onSetMW(this.#proxy as T, this.#value as T);
    }

}