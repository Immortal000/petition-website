export const load = ({ depends, cookies }) => {
	depends('get-all-posts');
	const getPosts = async () => {
		const response = await fetch('https://nor-cal-hacks.vercel.app/all');
		const data = await response.json();

		return data;
	};

	const getUserPosts = async () => {
		const username = 'hi';
		console.log(username);
		if (!!username) {
			const all_posts = await fetch(
				`https://nor-cal-hacks.vercel.app/user_posts?username=${username}`
			);

			const data = await all_posts.json();

			return data;
		}

		return {};
	};

	return {
		posts: getPosts(),
		userPosts: getUserPosts()
	};
};
