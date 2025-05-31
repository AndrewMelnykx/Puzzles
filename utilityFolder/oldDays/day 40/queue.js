function queueTime(customers, n) {
  const tills = Array(n).fill(0);
  customers.forEach((customerTime) => {
    const leastBusyTillIndex = tills.indexOf(Math.min(...tills));
    tills[leastBusyTillIndex] += customerTime;
  });
  return Math.max(...tills);
}
