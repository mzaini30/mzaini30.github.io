new Vue({
	el: '.vue',
	router: new VueRouter({
		routes: [
			{
				path: '/',
				component: beranda
			},
			{
				path: '/todo-2',
				component: todo_beranda
			}
		],
		mode: 'history'
	})
})