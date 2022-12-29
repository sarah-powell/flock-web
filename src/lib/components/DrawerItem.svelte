<script context="module">
  export const items = {
    edit: "Edit",
    share: "Share",
    delete: "Delete"
  };
</script>

<script>
  import { goto } from "$app/navigation";

  export let item;
  export let flockId;

  function handleClick() {
    if (item === items.edit) {
      goto('/create' + (flockId ? '?id=' + flockId : ''));
    } else if (item === items.delete) {
      //deleteFlock(flockId);
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