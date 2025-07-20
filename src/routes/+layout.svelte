<script lang="ts">
	import '../app.css';
	import NavBar from '../lib/components/NavBar/Navbar.svelte';

	let { children } = $props();
</script>

<NavBar />

{@render children()}
