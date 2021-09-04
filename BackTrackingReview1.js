/*46. Permutations https://tinyurl.com/3jy75vun
This question will give you an array, just return every possible permutation with any order.
So, we can think about the permutation, for exmaple, nums=[1,2,3], we get

    1       2       3
    /\      /\      /\
   2  3    1  3    1  2
   /   \   /  \    /   \
   3    2 3    1  2     1

We can see that, each permutation only contain each number in the array once.
If start at first number, the rest numbers will appear,  if star the second number,
we need to also contain the first number, how do we do that?
The answer is start add second number, but we also use a loop to go traverse the array.
So, we will go the second number again, if we just go over the array.
How to prevent it? We can add the visited array to tell us, will one we went before, if we met,
we just ignore this number. However, we need to remenber reset the statu for position when
a permutation is add to the result.

step:
start at 1, keeper=[1],visited=[true, false, false], go to next backTracking(first loop)
strat at 1, but 1 is met, go to 2, 2 is not met, keeper=[1,2],visited=[true, true, false],go to next backTracking(first loop a)
strat at 1, but 1,2 are met, go to 3, 3 is not met, keeper=[1,2,3],visited=[true, true, true],go to next backTracking (first loop b), keeper.length===n, push to res, back to first loop b, keeper.pop and visited=[true, true, false] 
Go back to the first loop a, 2 is met, visited set to [true, false, false], then go to 3. 3 is not met, keeper=[1,3],visited=[true, false, true], go to nect backTracking
1, and 3 is met before, just 2 is work for the loop, we call this one is first loop ab, when first loop ab go to 2,keeper=[1,3,2], len=3, push to res, and back to first loop ab, keeper.pop, visited=[t,f,t]
back to first loop a, first loop a finish 1,2,3, beck to frist loop, first loop will go to next number,
so now, start 2, and repeat ythe step as before just start at 2.
...
...
... 
*/

/*
47. Permutations II https://tinyurl.com/3xccz7jr
In this one, the array has some same number, like [1,1], we can see if we call first element a,
and second element b, we got [a,b] and [b,a], but they arealso [1,1], we can not has same element in the 
res. Then, we need to avoid [b,a] if a=b. How???????????
For this kind of question, we can use map to record each element appear time 
Using for loop to reverse [key,val], if nums=[1,1,2]
                1(1)        2(0) 
                /  \            \
              1(0) 2(0)         1(1)
              /      \            \
             2(0)    1(0)          1(0)

first, we have two 1s, use 1 for first loop, go to next BT
1 still have one, 11, got ro next BT
no 1, one 2, push to res
pop 2, back to last BT, next step is 2, now 1*2 and 1*1, push 2, next BT 0*2 1*1, push 1, 121, res
pop 1, pop 2, back to frist BT, irst digit is finish, next digit,
start 2, 2*1, first BT add 1, and next BT add 1 too, 211
*/