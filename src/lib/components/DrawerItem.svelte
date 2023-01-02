<script context="module">
  export const items = {
    edit: "Edit",
    share: "Share",
    delete: "Delete"
  };
</script>

<script>
  import { goto } from "$app/navigation";
  import { flockStore } from "$lib/stores/FlockStore.js";

  export let item;
  export let flockId;

  let flock = $flockStore.find((f) => flockId === f.id);

  function handleClick() {
    if (item === items.edit) {
      goto('/create' + (flockId ? '?id=' + flockId : ''));

    } else if (item === items.share) {
      goto(`/shared?t=${flock.title}&d=${flock.date}`);

    } else if (item === items.delete) {
      flockStore.update((flocks) => {
        return flocks.filter((f) => f.id !== flockId);
      });

    }
  }

</script>

<div class="DrawerItem">
  <button on:click={handleClick}>{item}</button>
<!--  TODO: SVG instead? -->
</div>

<style>
  .DrawerItem {
      display: inline-block;
      color: #B046E8;
  }
</style>