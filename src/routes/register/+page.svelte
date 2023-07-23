<script>
	import { userAuth } from '../../store';
	import Login from '../../components/login.svelte';
	import Register from '../../components/Register.svelte';

	let login = true;
</script>

{#if $userAuth.user_id != null}
	<h1>Already logged in!</h1>
{:else if $userAuth.login_screen == true}
	<Login />
{:else}
	<Register />
{/if}
