import { writable } from 'svelte/store';

export const userAuth = writable({
	user_id: null,
	login_screen: true
});
