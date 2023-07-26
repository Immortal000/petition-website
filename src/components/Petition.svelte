<script>
	import '../styles/app.css';
	import { postsHandler, userAuth } from '../store';

	$: $postsHandler.allPosts;

	const upvote = async (e) => {
		console.log($userAuth.user_id);
		if ($userAuth.user_id == null) {
			alert('Log in first!');
			window.location.href = '/register';
		} else {
			let clicked_id = e.target.dataset.id;
			$postsHandler.allPosts.forEach(async (post) => {
				if (post.id == clicked_id) {
					const response = await fetch(
						`https://nor-cal-hacks.vercel.app/upvote?index=${clicked_id}`
					);
					console.log(response);
					location.reload();
					post.upvotes += 1;
					console.log($postsHandler);
				}
			});
		}
	};
</script>

{#key $postsHandler.allPosts}
	{#each $postsHandler.allPosts as post}
		<div class="w-full shadow-md m-8 flex justify-between relative" data-id={post.id}>
			<div class="flex-col flex mb-5 flex-grow py-3 px-5">
				<p class="text-3xl">{post.title}</p>
				<p>{post.description}</p>
			</div>
			<div class="absolute bottom-0 right-2 flex justify-evenly m-2 text-center align-center">
				<button data-id={post.id} on:click={upvote}>
					<i class="fa-solid fa-heart text-green" data-id={post.id} />
				</button>
				<p>{post.upvotes}</p>
			</div>
		</div>
	{/each}
{/key}
