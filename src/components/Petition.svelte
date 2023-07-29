<script>
	import '../styles/app.css';
	import { postsHandler, userAuth } from '../store';

	$: $postsHandler.allPosts;
</script>

{#key $postsHandler.allPosts}{/key}
