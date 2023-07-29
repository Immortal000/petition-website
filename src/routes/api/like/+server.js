export const GET = async ({ url, fetch }) => {
	const id = url.searchParams.get('id');
	console.log(id);
	const user_name = url.searchParams.username;
	const new_post = await fetch(`https://nor-cal-hacks.vercel.app/like?index=${id}&username=hi`, {
		method: 'GET'
	});

	return new Response('Post liked');
};
