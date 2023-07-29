<script>
	import '../styles/app.css';
	import { userAuth } from '../store/index';
</script>

<nav class="flex justify-between w-10/12 m-auto py-5">
	<div class="w-max">
		<ul class="flex">
			<li class="mr-3">
				<a
					class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
					href="/">Home</a
				>
			</li>
			<li class="mr-3">
				<a
					class="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
					href="/petitions">Petitions</a
				>
			</li>
			<li class="mr-3">
				<form
					action="/"
					method="POST"
					autocomplete="on"
					class="flex justify-between h-full w-full px-2 border border-gray-500 rounded focus-within:outline"
				>
					<input type="text" name="search" placeholder="Search" class="h-full focus:outline-none" />
					<button>
						<i class="fa-solid fa-magnifying-glass" />
					</button>
				</form>
			</li>
		</ul>
	</div>
	{#if $userAuth.user_logged_in}
		<button>
			<a
				class="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
				>Sign Out
			</a>
		</button>
	{:else}
		<button>
			<a
				class="inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
				href="/register"
				>Login
			</a>
		</button>
	{/if}
</nav>
