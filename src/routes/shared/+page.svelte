<script>
  import { page } from "$app/stores";
  import Flock from "$lib/components/Flock.svelte";

  const titleParam = $page.url.searchParams.get('t');
  const dateParam = $page.url.searchParams.get('d');

</script>

<Flock title={titleParam} date={new Date(dateParam)} showToolDrawer={false} />