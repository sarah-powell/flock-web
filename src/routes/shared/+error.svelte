<script>
  import { page } from '$app/stores';
</script>

<h1>An error occurred</h1>
<p>{$page.error.code}: {$page.error.message}</p>