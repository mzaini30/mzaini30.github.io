new Vue({
	el: '.vue',
	router: new VueRouter({
		routes: [
			{
				path: '/',
				component: beranda
			},
			{
				path: '/todo',
				component: todo_index,
				children: [
					{
						path: '',
						component: todo_all
					},
					{
						path: ':id',
						component: todo_baca
					}
				]
			}
		]
	})
})