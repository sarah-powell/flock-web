<script context="module">
  export const items = {
    edit: "Edit",
    share: "Share",
    delete: "Delete"
  };
</script>

<script>
  export let item;
  export let flockId;

  function handleClick() {
    if (item === items.edit) {
      window.location = '/create' + (flockId ? '?id=' + flockId : '');
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