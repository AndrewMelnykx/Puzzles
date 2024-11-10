var findPoisonedDuration = function (timeSeries, duration) {
  let total_poisoned_time = 0;

  for (let i = 0; i < timeSeries.length - 1; i++) {
    const interval = timeSeries[i + 1] - timeSeries[i];
    total_poisoned_time += Math.min(interval, duration);
  }

  total_poisoned_time += duration;

  return total_poisoned_time;
};
