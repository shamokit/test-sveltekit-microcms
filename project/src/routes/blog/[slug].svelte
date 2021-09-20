<script context="module">
	import axios from 'axios';
	export const load = async ({ page }) => {
		try {
			const res = await axios.get(`/blog/${page.params.slug}.json`);
			return {
				props: {
					postData: res.data
				}
			};
		} catch (e) {
			return {
				props: {
					errorMessage: e
				}
			};
		}
	};
</script>

<script>
	export let postData;
	export let errorMessage;
	$: post = postData;
	$: error = errorMessage;
</script>

<svelte:head>
	{#await post then data}
		{#if post}
			<title>{data.title}</title>
		{/if}
	{/await}
</svelte:head>
{#if post}
	<article>
		<h1>{post.title}</h1>
		{@html post.content}
	</article>
{:else if error}
	{error}
{/if}
