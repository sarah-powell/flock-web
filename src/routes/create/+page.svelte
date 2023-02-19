<script>
  import FlockForm from "$lib/components/FlockForm.svelte";
  import PageNav from "$lib/components/PageNav.svelte";
</script>

<svelte:head>
  <title>Flock - Create</title>
  <meta name="description" content="Create a new Flock">
</svelte:head>

<PageNav>
  <a id="cancelButton" href="/">Cancel</a>
</PageNav>
<FlockForm/>

<style>

    #cancelButton {
        display: flex;
        margin: 0 8px;
        color: white;
        text-decoration: none;
        font-size: 16px;
    }

</style>