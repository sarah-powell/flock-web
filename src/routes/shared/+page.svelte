<script>
  import { page } from "$app/stores";
  import Flock from "$lib/components/Flock.svelte";

  const titleParam = $page.url.searchParams.get('t');
  const dateParam = $page.url.searchParams.get('d');

  let timeStamp = Number(dateParam);
  let date = new Date(timeStamp);

</script>

<Flock title={titleParam} dateTimestamp={date} showToolDrawer={false} />