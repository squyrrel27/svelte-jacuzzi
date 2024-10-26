# Jacuzzi - For Svelte

Jacuzzi is a high-level library for creating complex SPA applications in Svelte and SvelteKit.

## Getting Started

The current build is highly experimental. A distribution will be coming in the future.

For now, use the section below for quick a rundown:

## Examples

```ts
// Create a proxy number object:
//   a wrapper around a reactive variable, the proxy value
//   can be get() and set(), while the inner value can
//   only be get()
const p1 = new SpaProxy(0);

p1.onGet((proxy, value) => {
	// Logic for each get call (on the value)
	// true means the actual value will be returned
	// false means the proxy value will be returned
	return true;
});

p1.onSet((proxy, value) => {
	// Logic for each set call (on the proxy)
	// true means the vaule will be set to the proxy after
	// false means the value will not be set to the proxy
	return true;
});

p1.proxy += 1; // set the proxy
console.log(p1.proxy); // get the proxy
console.log(p1.value); // get the value
```

## License

[MIT](./LICENSE)

---

Learn more about me [on my website](https://squyrrel.net/).
