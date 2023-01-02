<script>
  import { page } from "$app/stores";
  import Flock from "$lib/components/Flock.svelte";

  const titleParam = $page.url.searchParams.get('title');
  const dateParam = Number($page.url.searchParams.get('date'));

  // TODO, need to decide if I want the date param to be the timestamp or the date string
  // TODO, need to figure out the flow for local vs UTC dates.

</script>

<Flock title={titleParam} date={new Date(dateParam)} showToolDrawer={false} />