<script>
  import { page } from "$app/stores";
  import Flock from "$lib/components/Flock.svelte";
  import PageNav from "$lib/components/PageNav.svelte";

  const titleParam = $page.url.searchParams.get('t');
  const dateParam = $page.url.searchParams.get('d');

  let timeStamp = Number(dateParam);
  let date = new Date(timeStamp);

</script>

<PageNav>
  <a id="myFlocksButton" href="/">My Flocks</a>
</PageNav>
<Flock title={titleParam} dateTimestamp={date} showToolDrawer={false} />
<button id="#saveButton">Save</button>

<style>

    #myFlocksButton {
        display: flex;
        margin: 0 8px;
        color: white;
        text-decoration: none;
        font-size: 16px;
    }

</style>