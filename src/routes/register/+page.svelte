<script>
	import { userAuth } from '../../store';
	import Login from '../../components/Login.svelte';
</script>

{#if $userAuth.user_id == null}
	<Login />
{/if}
