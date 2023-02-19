<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Error: {$page.error.code}</title>
  <meta name="description" content="An error has occured">
</svelte:head>

<h1>An error occurred</h1>
<p>{$page.error.code}: {$page.error.message}</p>