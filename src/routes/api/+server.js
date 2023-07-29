export const GET = async ({ url, fetch }) => {
	const post_title = url.searchParams.get('title');
	const user_name = url.searchParams.get('username');

	const new_post = await fetch(
		`https://nor-cal-hacks.vercel.app/create?title=${post_title}&username=${user_name}`,
		{
			method: 'GET'
		}
	);

	return new Response('New Post added!');
};
