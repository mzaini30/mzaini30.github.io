<script>
	import {isLogin} from "@/store"
	import {goto} from "@roxi/routify"
	import {sql, admin} from "@/api"
	import {clean} from "@/tools"
	const cekLogin = async () => {
		if (localStorage.password){
			let body = new FormData
			body.append("sql", btoa(btoa(`
				select count(*) as banyak
				from database_${admin}
				where password = "${clean(localStorage.password)}"
			`)))
			let loginKah = await fetch(sql, {
				method: "post",
				body
			}).then(x => x.json())
			loginKah = await loginKah
			if (loginKah[0].banyak < 1){
				$goto("/login")
			}
		} else {
			$goto("/login")
		}
	}
	cekLogin()
</script>
<slot/>
