<script>
	import '../../styles/app.css';
	import '../../styles/main.css';
	import Petition from '../../components/Petition.svelte';
	import Create from '../../components/Create.svelte';
	import { postsHandler, userAuth } from '../../store';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	const { posts } = data;
	$postsHandler.allPosts = posts;

	$: userPosts = data.userPosts;
	$: $postsHandler.allPosts = data.posts;
	$: user_liked_posts = data.userPosts.map((x) => x.id);

	const refresh = () => {
		invalidate('get-all-posts');
	};

	onMount(() => {
		refresh();
	});

	const upvote = async (e) => {
		if ($userAuth.user_logged_in == false) {
			alert('Log in first!');
		} else if (e.target.dataset.id in user_liked_posts) {
			alert('Post already liked!');
		} else {
			let clicked_id = e.target.dataset.id;
			$postsHandler.allPosts.forEach(async (post) => {
				if (post.id == clicked_id) {
					const response = await fetch(`/api/like?id=${post.id}&username=hi`);
					post.upvotes += 1;
					$postsHandler = $postsHandler;
				}
			});
			invalidate('get-all-posts');
		}
	};
</script>

<div class="w-full justify-between">
	<div class="w-1/3">
		{#each $postsHandler.allPosts as post}
			<div class="w-full shadow-md m-8 flex justify-between relative" data-id={post.id}>
				<div class="flex-col flex mb-5 flex-grow py-3 px-5">
					<p class="text-3xl">{post.title}</p>
					<p>{post.description}</p>
				</div>
				<div class="absolute bottom-0 right-2 flex justify-evenly m-2 text-center align-center">
					<button
						data-id={post.id}
						on:click={upvote}
						class={user_liked_posts.includes(post.id) ? 'liked' : ''}
					>
						<i class={'fa-solid fa-heart'} data-id={post.id} />
					</button>
					<p>{post.upvotes}</p>
				</div>
			</div>
		{/each}
	</div>
	<div class="w-1/3 fixed top-32 right-56">
		<Create />
	</div>
</div>
