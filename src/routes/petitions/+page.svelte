<script>
	import '../../styles/app.css';
	import Petition from '../../components/Petition.svelte';
	import Create from '../../components/Create.svelte';
</script>

<div class="w-full justify-between">
	<div class="w-1/3">
		<Petition
			petition_description={'wahoo'}
			petition_title={'example'}
			image_src={'https://images.unsplash.com/photo-1689597944680-9e3ac64c8aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'}
		/>
		<Petition
			petition_description={'wahoo'}
			petition_title={'example'}
			image_src={'https://images.unsplash.com/photo-1689597944680-9e3ac64c8aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'}
		/>
		<Petition
			petition_description={'wahoo'}
			petition_title={'example'}
			image_src={'https://images.unsplash.com/photo-1689597944680-9e3ac64c8aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'}
		/>
		<Petition
			petition_description={'wahoo'}
			petition_title={'example'}
			image_src={'https://images.unsplash.com/photo-1689597944680-9e3ac64c8aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'}
		/>
		<Petition
			petition_description={'wahoo'}
			petition_title={'example'}
			image_src={'https://images.unsplash.com/photo-1689597944680-9e3ac64c8aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'}
		/>
	</div>
	<div class="w-1/3 fixed top-32 right-56">
		<Create />
	</div>
</div>
