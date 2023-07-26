<script>
	import '../../styles/app.css';
	import Petition from '../../components/Petition.svelte';
	import Create from '../../components/Create.svelte';
	import { postsHandler } from '../../store';

	export let data;
	const { posts } = data;
	$postsHandler.allPosts = posts;
</script>

<div class="w-full justify-between">
	<div class="w-1/3">
		<Petition />
	</div>
	<div class="w-1/3 fixed top-32 right-56">
		<Create />
	</div>
</div>
