<script>
  import dayjs from 'dayjs'
  import Duration from 'dayjs/plugin/duration'
  import TimeSlot from "$lib/components/TimeSlot.svelte";
  import DrawerItem from "$lib/components/DrawerItem.svelte";
  import { items } from "$lib/components/DrawerItem.svelte";

  dayjs.extend(Duration) // Needed to extend the API

  export let id;
  export let title;
  export let date = new Date(1970, 1, 1);
  const numSlotsToDisplay = 3;

  let duration = getDurationFrom(date);

  const components = [
    { value: duration.years(), label: "years" },
    { value: duration.months(), label: "months" },
    { value: duration.days(), label: "days" },
    { value: duration.hours(), label: "hours" },
    { value: duration.minutes(), label: "minutes" },
    { value: duration.seconds(), label: "seconds" }
  ];

  /**
   * Find the displayable time components to render
   * @returns array of components
   */
  function displayableTimes() {
    let compLength = components.length;

    let startIndex = 0;
    let endIndex = 6;

    // Find the first non-zero value
    for (const [index, comp] of components.entries()) {
      if (Math.abs(comp.value) > 0) {
        // Determine how many slots we can render with this index
        let canRender = Math.min(compLength - index, numSlotsToDisplay);
        let backFillAmount = numSlotsToDisplay - canRender;
        startIndex = index - backFillAmount;
        endIndex = Math.min(compLength, startIndex + numSlotsToDisplay);
        break;
      }
    }

    return components.slice(startIndex, endIndex);
  }

  function getDurationFrom(date) {
    const now = dayjs();
    return dayjs.duration(now.diff(date));
  }

</script>

<div class="flock">
  <div class="header">
    <div class="flock-title">
      {title}
    </div>
    <div class="flock-date">
      {date.toLocaleDateString()}
    </div>
  </div>
  <div class="slots">
    {#each displayableTimes() as comp}
      <TimeSlot value={Math.abs(comp.value)} label={comp.label}/>
    {/each}
  </div>
  <div class="drawer">
    <DrawerItem item="{items.edit}" flockId="{id}"/>
    <DrawerItem item="{items.share}" flockId="{id}"/>
    <DrawerItem item="{items.delete}" flockId="{id}"/>
  </div>
</div>


<style>

    .flock {
        display: block;
        margin-bottom: 30px;
    }

    .header {
        display: flex;
        justify-content: space-between;
    }

    .slots {
        display: flex;
        justify-content: space-between;
    }

    .drawer {
        background-color: white;
        display: flex;
        justify-content: space-around;
    }

</style>