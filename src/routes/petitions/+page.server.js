export const load = () => {
	const getPosts = async () => {
		const response = await fetch('https://nor-cal-hacks.vercel.app/all');
		const data = await response.json();

		return data;
	};

	return {
		posts: getPosts()
	};
};
