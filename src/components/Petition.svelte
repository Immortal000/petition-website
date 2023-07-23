<script>
	import '../styles/app.css';
	export let petition_title;
	export let petition_description;
	export let image_src;
</script>

<div class="w-full h-40 shadow-md m-8 flex justify-between relative">
	<div class="w-1/3 flex-0">
		<img src={image_src} alt="Logo" class="h-full w-full object-cover" />
	</div>
	<div class="flex-col flex mb-5 flex-grow py-3 px-2">
		<p class="text-3xl">{petition_title}</p>
		<p>{petition_description}</p>
	</div>
	<div class="absolute bottom-0 right-2 flex justify-evenly m-2">
		<i class="fa-solid fa-heart fa-2x text-green" />
	</div>
</div>
