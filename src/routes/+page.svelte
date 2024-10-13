<script lang="ts">
	import { SpaContext, SpaProxy } from '$lib/index.js';

	const ctx = $state(new SpaContext());
	const p1 = new SpaProxy(0);
	
	let proxied = $state(false);

	p1.onSet((proxy: number, value: number) => {
		console.log (proxy, value);
		if (proxy % 5 == 0)
			return true;
		else {
			return false;
		}
	});


	p1.onGet((proxy: number, value: number) => {
		return proxied;
	});

	ctx.values.count = 0;

	ctx.addRunner(() => {
		console.log('hello world', ctx.values.count);
        if ((ctx.values.count as number) > 10) {
            console.log("we gettin' large");
        }
	});

</script>

<div>
	<h1>Welcome to Jacuzzi!</h1>
	<h3>A library for SPA devs</h3>
	<div>
		<button onclick={() => ctx.run()}>$</button>
		<button onclick={() => ctx.values.count-= 1}>-</button>
		<button onclick={() => ctx.values.count+= 1}>+</button>
		<button onclick={() => ctx.run()}>{ctx.values.count}</button>
	</div>	
	<div>
		<button onclick={() => console.log(p1.proxy)}>{p1.proxy}</button>
		<button onclick={() => p1.proxy -= 1}>-</button>
		<button onclick={() => p1.proxy += 1}>+</button>
		<button onclick={() => p1.proxy -= 10}>{p1.value}</button>
		<input type="checkbox" onchange={() => proxied = !proxied}/>
	</div>	

</div>

<style>
	button {
		width: 30px;
	}
</style>