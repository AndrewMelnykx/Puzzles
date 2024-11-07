def maxArea(height):
    left, right = 0, len(height) - 1
    max_area = 0
    
    while left < right:
        # Calculate the area with the current pointers
        width = right - left
        container_height = min(height[left], height[right])
        area = width * container_height
        
        # Update max_area if the current area is greater
        max_area = max(max_area, area)
        
        # Move the pointer pointing to the shorter line
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    
    return max_area
