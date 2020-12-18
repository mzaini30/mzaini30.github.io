<form on:submit|preventDefault={cekLogin}>
 <div class="form-group">
  <input type="password" class="form-control" placeholder="Masukkan password" bind:value={password} required>
 </div>
</form>
<svelte:head>
 <title>Login</title>
</svelte:head>
<script>
import {clean} from "@/tools"
import {sql, admin} from "@/api"
import {isLogin} from "@/store"
import {goto} from "@roxi/routify"
let password = ""
const cekLogin = async () => {
	let body = new FormData
	body.append("sql", btoa(btoa(`
	 select count(*) as banyak
	 from database_${admin}
	 where password = "${clean(password)}"
	`)))
	let adaPassword = await fetch(sql, {
		method: "post",
		body
	}).then(x => x.json())
	adaPassword = await adaPassword
	if (adaPassword[0].banyak > 0){
		localStorage.setItem("password", password)
		$isLogin = true
		$goto("/")
	} else {
		password = ""
	}
}
</script>
