<script>
  import dayjs from 'dayjs'
  import Duration from 'dayjs/plugin/duration'
  import TimeSlot from "$lib/TimeSlot.svelte";
  dayjs.extend(Duration) // Needed to extend the API

  export let title;
  export let date = new Date(1970, 1, 1);
  export let url;

  let duration = getDurationFrom(date);

  const components = [
    { component: duration.years(), label: "years" },
    { component: duration.months(), label: "months" },
    { component: duration.days(), label: "days" },
    { component: duration.hours(), label: "hours" },
    { component: duration.minutes(), label: "minutes" },
    { component: duration.seconds(), label: "seconds" }
  ];

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
    {#each components as comp}
      <TimeSlot value={comp.component} label={comp.label}/>
    {/each}
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
    }

</style>