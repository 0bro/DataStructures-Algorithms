/**
 * @param {number[]} nums
 * @return {number[]}
 */
module.exports = function (nums) {
    let rtrn = [...nums];
    for (
      let i = 0;
      i < nums.length;
      i++ // iterator between 0 .. nums.length
    )
      for (
        let j = i - 1;
        j >= 0;
        j-- // iterate between i .. 0
      )
        rtrn[i] += nums[j]; // add nums[j] to
  
    return rtrn;
  };
  