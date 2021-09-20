<script context="module">
	import axios from 'axios';
	export const load = async () => {
		try {
			const res = await axios.get('/blog.json');
			return {
				props: {
					postsData: res.data
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
	export let postsData;
	export let errorMessage;
	$: posts = postsData;
	$: error = errorMessage;
</script>

<svelte:head>
	<title>記事一覧</title>
</svelte:head>
<h1>記事一覧</h1>
{#if posts}
	<ul>
		{#each posts as post (post.id)}
			<li><a href="/blog/{post.id}/">{post.title}</a></li>
		{/each}
	</ul>
{:else if error}
	error:{error}
{/if}
