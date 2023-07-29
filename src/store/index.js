import { writable } from 'svelte/store';

export const userAuth = writable({
	login_screen: true,
	user_logged_in: false,
	user_name: ''
});

export const postsHandler = writable({
	allPosts: [],
	userPosts: []
});
