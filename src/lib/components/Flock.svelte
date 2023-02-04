<script>
  import dayjs from 'dayjs'
  import Duration from 'dayjs/plugin/duration'
  import TimeSlot from "$lib/components/TimeSlot.svelte";
  import DrawerItem from "$lib/components/DrawerItem.svelte";
  import { items } from "$lib/components/DrawerItem.svelte";
  import { onMount, onDestroy } from "svelte";

  dayjs.extend(Duration) // Extends the API

  const numSlotsToDisplay = 3;
  const endDateFormat = 'MMM D, YYYY [at] h:mm A';

  // Component args
  export let id = undefined;
  export let title;
  export let dateTimestamp = 0;
  export let disableToolDrawer = false;

  // Local vars
  let endDate = new Date(dateTimestamp);
  let duration = getDurationFrom(endDate);
  let drawerIsOpen = false;

  $: years = duration.years();
  $: months = duration.months();
  $: days = duration.days();
  $: hours = duration.hours();
  $: minutes = duration.minutes();
  $: seconds = duration.seconds();

  // Refresh the timer often for responsive times
  let refreshTick;
  onMount(() => {
    refreshTick = setInterval(() => {
      duration = getDurationFrom(endDate);
    }, 100);
  });

  onDestroy(() => {
    clearInterval(refreshTick)
  });

  /**
   * Find the displayable time components to render
   * @returns array of components
   */
  function displayableTimes() {
    let components = [
      { years: duration.years() },
      { months: duration.months() },
      { days: duration.days() },
      { hours: duration.hours() },
      { minutes: duration.minutes() },
      { seconds: duration.seconds() }
    ];

    let compLength = components.length;

    let startIndex = 0;
    let endIndex = 6;

    // Find the first non-zero value
    for (const [index, comp] of components.entries()) {
      if (Math.abs(Object.values(comp)[0]) > 0) {
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

  /**
   * Returns the DayJS duration object for the given date
   */
  function getDurationFrom(date) {
    const now = dayjs();
    return dayjs.duration(now.diff(date));
  }

  /**
   * Calculates how the end date should render
   */
  function getDisplayableEndDate(date) {
    return dayjs(date).format(endDateFormat)
  }

</script>

<div class="flock" on:click={() => drawerIsOpen = !drawerIsOpen}>
  <div class="header">
    <div class="flock-title">
      {title}
    </div>
    <div class="flock-date">
      {getDisplayableEndDate(endDate)}
    </div>
  </div>
  <div class="slots">
    {#if displayableTimes().some(c => "years" in c)}
      <TimeSlot value={years} label="years"/>
    {/if}
    {#if displayableTimes().some(c => "months" in c)}
      <TimeSlot value={months} label="months"/>
    {/if}
    {#if displayableTimes().some(c => "days" in c)}
      <TimeSlot value={days} label="days"/>
    {/if}
    {#if displayableTimes().some(c => "hours" in c)}
      <TimeSlot value={hours} label="hours"/>
    {/if}
    {#if displayableTimes().some(c => "minutes" in c)}
      <TimeSlot value={minutes} label="minutes"/>
    {/if}
    {#if displayableTimes().some(c => "seconds" in c)}
      <TimeSlot value={seconds} label="seconds"/>
    {/if}
  </div>
  {#if !disableToolDrawer && drawerIsOpen}
    <div class="drawer">
      <DrawerItem item={items.edit} flockId={id}/>
      <DrawerItem item={items.share} flockId={id}/>
      <DrawerItem item={items.delete} flockId={id}/>
    </div>
  {/if}
</div>


<style>

    .flock {
        display: block;
        margin-bottom: 30px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4px;
    }

    .slots {
        display: flex;
        justify-content: space-between;
    }

    .drawer {
        background-color: #B046E8;
        display: flex;
        justify-content: space-evenly;
    }

</style>