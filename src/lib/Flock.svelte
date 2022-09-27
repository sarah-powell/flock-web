<script>
  import dayjs from 'dayjs'
  import Duration from 'dayjs/plugin/duration'
  import TimeSlot from "$lib/TimeSlot.svelte";
  dayjs.extend(Duration) // Needed to extend the API

  export let title;
  export let date = new Date(1970, 1, 1);
  export let url;

  let duration = getDurationFrom(date);

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
      {date}
    </div>
  </div>
  <div class="slots">
    <TimeSlot value={duration.years()} label="Years"/>
    <TimeSlot value={duration.months()} label="Months"/>
    <TimeSlot value={duration.days()} label="Days"/>
    <TimeSlot value={duration.hours()} label="Hours"/>
    <TimeSlot value={duration.minutes()} label="Minutes"/>
    <TimeSlot value={duration.seconds()} label="Seconds"/>
  </div>
</div>


<style>
  .flock {
      display: inline;
  }
</style>