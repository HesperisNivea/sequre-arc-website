<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	import NavBar from '../lib/components/NavBar/Navbar.svelte';

	let { children } = $props();
</script>

<NavBar />

{@render children()}

<Footer />