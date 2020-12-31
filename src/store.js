import {writable} from 'svelte/store'
export const isLoading = writable(false)
export const isLogin = writable(false)
export const perHalaman = writable(10)