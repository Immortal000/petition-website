export const GET = async ({ url, params, fetch, cookies }) => {
	const new_post = await fetch(
		`https://nor-cal-hacks.vercel.app/login?username=${params.username}&password=${params.password}`,
		{
			method: 'GET'
		}
	);

	const data = await new_post;
	cookies.set('user_name', params.username);
	cookies.set('user_logged_in', true);

	return new Response(JSON.stringify(data));
};
