# Write a program to sort a list of numbers in ascending order, comparing and swapping two numbers at a time. 

# [3,1,4,2]
# [1,3,4,2]
# [1,3,2,4]
# [1,2,3,4]

bubble_list = []

def bubblesort(bubble_list):
    smallest = bubble_list[0]
    for num in bubble_list:
        if num < smallest:
            smallest = num
    print("the smallest number is %d" % (smallest))
    return smallest
  

# # prints the smallest integer
bubble_list = [2, 8, 1, 9]
bubblesort(bubble_list)

# Sorts in ascending order
bubble_list.sort()
print(bubble_list)

# Sorts in ascending order by comparing two numbers at a time. 
def bubble(list_a):
    #List are always len - 1 
    indexing_length = len(list_a) -1
    sorted = False
    
    while not sorted:
        sorted = True
        #starts at index zero and ends at the length of the list
        for i in range(0, indexing_length):
            # if the value on the left is greater than the value on the right:
            if list_a[i] > list_a[i+1]:
                sorted = False
                #list those two items 
                list_a[i], list_a[i + 1] = list_a[i + 1], list_a[i]
    return list_a


print(bubble([4, 10, 12, 5, 3, 9]))
        
