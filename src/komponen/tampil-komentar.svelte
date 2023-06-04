<script>
  import excalibur from "excalibur-zen";
  import { id, api } from "../data/komentar";
  import { url } from "gravatar";

  export let slug;

  let data;

  async function ambil_data() {
    let datanya = await excalibur(api, {
      id,
      kunci: "dapatkan-semua",
      slug,
    });
    datanya = await datanya.json();
    data = datanya;
  }
  ambil_data();
</script>

{#if data}
  {#each data as x}
    <div class="flex w-full gap-2 pt-7">
      <div class="grow-0 shrink-0">
        <img
          class="aspect-[1/1] object-cover rounded-[50%] w-10"
          src={url(x.email)}
          alt="Foto profil {x.nama}"
        />
      </div>
      <p class="grow mt-0 pt-0 shrink">{x.komentar}</p>
    </div>
  {/each}
{/if}
