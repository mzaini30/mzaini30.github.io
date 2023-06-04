<script>
  import { url } from "gravatar";
  import TampilKomentar from "./tampil-komentar.svelte";
  import toast from "only-toast";
  import excaliburZen from "excalibur-zen";
  import { id, api } from "../data/komentar";

  let acak = crypto.randomUUID();

  export let slug;

  let is_login = true;
  let gambar = url(localStorage.email);

  if (!localStorage.email && !localStorage.nama) {
    is_login = false;
  }

  function mulai_login() {
    const nama = prompt("Masukkan nama");
    const email = prompt("Masukkan email");
    if (nama && email) {
      localStorage.nama = nama;
      localStorage.email = email;
      is_login = true;
    }
  }

  let komentar;

  async function kirim() {
    let mengirim = await excaliburZen(api, {
      id,
      kunci: "tambah-baru",
      nama: localStorage.nama,
      email: localStorage.email,
      komentar,
      slug,
    });
    if (mengirim) {
      toast("Komentar terkirim...");
      acak = crypto.randomUUID();
      komentar = "";
    }
  }
</script>

{#if is_login}
  <form on:submit|preventDefault={kirim} class="pt-2" action="">
    <div class="flex w-full gap-2">
      <div>
        <img
          src={gambar}
          class="aspect-[1/1] object-cover rounded-[50%] w-10"
          alt="Profil pengomentar"
        />
      </div>
      <textarea
        bind:value={komentar}
        name=""
        id=""
        cols="30"
        rows="2"
        required
        class="border-b-2 w-full border-b-black focus:no-outline"
        placeholder="Tambahkan komentar..."
      />
    </div>
    <div class="justify-between flex pt-3">
      <div />
      <button
        class="inline-block focus:(bg-white text-black border-black border) hover:(bg-white text-black border-black border) text-white bg-black rounded-lg p-2 px-4 text-sm"
        >Komentar</button
      >
    </div>
  </form>
{:else}
  <button
    on:click={mulai_login}
    class="w-full bg-green-500 text-white p-2 rounded-lg"
    >Login untuk berkomentar</button
  >
{/if}
{#key acak}
  <TampilKomentar {slug} />
{/key}

<style>
  textarea:focus-visible {
    outline: none;
  }
</style>
