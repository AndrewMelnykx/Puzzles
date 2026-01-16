function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    // Calculate the width and the minimum height
    const width = right - left;
    const containerHeight = Math.min(height[left], height[right]);

    // Calculate the area and update maxArea if it's greater
    const area = width * containerHeight;
    maxArea = Math.max(maxArea, area);

    // Move the pointer for the shorter line to try to find a larger area
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
