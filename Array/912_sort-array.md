### Problem

Given an array of integers nums, sort the array in ascending order.

Example 1:

```
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
```

Example 2:

```
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
```

Constraints:
`1 <= nums.length <= 50000`
`-50000 <= nums[i] <= 50000`

[Question Source - Leetcode](https://leetcode.com/problems/sort-an-array/)

### Solution

#### Bubble Sort

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var bubbleSort = function(nums) {
  let noSwaps
  for (let i = nums.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1]
        nums[j + 1] = nums[j]
        nums[j] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return nums
}
```

- Runtime: O(N^2)
- Memory: O(1)

#### Selection Sort

```javascript
var selectionSort = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let lowest = i
    for (let j = i + 1; j < nums.length; j++) {
      //find the lowest index
      if (nums[j] < nums[lowest]) lowest = j
    }
    //swap lowest to the front
    let temp = nums[i]
    nums[i] = nums[lowest]
    nums[lowest] = temp
  }
  return nums
}
```

- Runtime: O(N^2)
- Memory: O(1)

#### Insertion Sort

```javascript
var insertionSort = function(nums) {
  for (var i = 1; i < nums.length; i++) {
    var curNum = nums[i]
    for (var j = i - 1; j => 0; j--) {
      if (curNum < nums[j]) {
        nums[j + 1] = nums[j]
      } else break
    }
    nums[j + 1] = curNum
  }
  return nums
}
```

- Runtime: O(N^2)
- Memory: O(1)

#### Merge Sort

Pseudocode

- Merge arrays in sorted order

  - Compare each element in two arrays
  - Push higher value to new result array
  - Continue until 1 array is empty
  - Push all the remaining values of the other array to the new result array

- Merge Sorted Array
  - Break the array into halves until each arrays have one or no elements remaining
  - Merge those arrays with other sorted arrays until back at full length

```javascript
var mergeArrays = function(arr1, arr2) {
  let res = []
  let i = 0,
    j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    res.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    res.push(arr2[j])
    j++
  }
  return res
}

var mergeSort = function(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return mergeArrays(left, right)
}
```

#### Quick Sort

Pseudocode

- Set Pivot

  - Select first (or other) element and set as pivot
  - Iterate over rest of the array
    - If pivot value is higher than element of other index
      - Increase the swap index (to keep track)
      - Swap i _th_ element with swap index _th_ element
  - Swap pivot & swap index element
  - return index

- Quick Sort (Recursion)
  - Base Case : if left < right, return array
  - Set pivot using pivotHelper function
  - Quicksort left of pivot
  - Quicksort right of pivot

```javascript
function pivotHelper(arr, start = 0, end = arr.length-1)= {
  let pivot = arr[start];
  let swapIdx = start;

  function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  for(i=1; i<=end; i++){
    if(pivot > arr[i]){
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSort(arr, left = 0; right = arr.length - 1){
  if(left < right){
    let pivotIdx = pivotHelper(arr,left,right)
    quickSort(arr,left, pivotIdx - 1)
    quickSort(arr,pivotIdx + 1, right)
  }
  return arr
}
```
