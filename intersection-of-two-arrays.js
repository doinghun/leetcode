//Brute Force

var intersection = function(nums1, nums2) {
    nums1.sort((a,b)=> a-b)
    nums2.sort((a,b)=> a-b)
    let ans = [];
    for(i=0;i<nums1.length;i++){
        if(nums1[i] == nums1[i+1]) continue
        for(j=0;j<nums2.length;j++){
            if(nums1[i] == nums2[j] && nums2[j] !== nums2[j+1]){
                ans.push(nums2[j])
            }
        }
    }
    return ans
};

//Using Set
var intersection = function(nums1, nums2) {
    let ans = [] 
    for(i=0;i<nums1.length;i++){
         for(j=0; j<nums2.length;j++){
             if(nums1[i] == nums2[j]){
                 ans.push(nums2[j])
             }
         }
     }
    return Array.from(new Set(ans))
};
