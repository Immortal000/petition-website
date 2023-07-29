<script>
	import '../styles/app.css';
	let title = '';
	import { invalidate } from '$app/navigation';
	import { userAuth } from '../store/index';

	const create_petition = async () => {
		if ($userAuth.user_logged_in == false) {
			alert('Log in first!');
		} else {
			const response = await fetch(`/api?title=${title}&username=${$userAuth.user_name}`);
			alert('new post added!');
			invalidate('get-all-posts');
		}
	};
</script>

<div class="shadow-md p-10">
	<p class="text-2xl text-center m-2 p-2">Want to start your own petition?</p>
	<p>A petition is a great way to let people know about a cause you care about.</p>
	<input
		type="text"
		placeholder="Input a title"
		class="border-2 border-blue-500"
		bind:value={title}
	/>
	<button
		type="button"
		class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
		on:click={create_petition}>Start a Petition</button
	>
</div>
