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
  import Button from "$lib/components/Button.svelte";

  export let item;
  export let flockId;

  let flock = $flockStore.find((f) => flockId === f.id);

  function handleClick() {
    if (item === items.edit) {
      goto('/create' + (flockId ? '?id=' + flockId : ''));

    } else if (item === items.share) {
      goto(`/shared?t=${flock.title}&d=${flock.dateTimestamp}`);

    } else if (item === items.delete) {
      flockStore.update((flocks) => {
        return flocks.filter((f) => f.id !== flockId);
      });

    }
  }

</script>

<div class="DrawerItem">
  <Button clickFunction={handleClick}>{item}</Button>
</div>

<style>

  .DrawerItem {
      margin-top: 4px;
      display: inline-block;
      color: #B046E8;
  }

  button {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 65px;
      padding: 6px 14px;
      border-radius: 6px;
      border: none;

      color: #b046e8;
      background: white;
      background-origin: border-box;
  }

</style>