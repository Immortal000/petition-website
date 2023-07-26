import { writable } from 'svelte/store';

export const userAuth = writable({
	user_id: 1,
	login_screen: true
});

export const postsHandler = writable({
	allPosts: []
});
