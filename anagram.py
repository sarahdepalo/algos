# Given two strings, check if they are anagrams, and return a boolean.

# "god" "dog" 

# "rat" "cat" 

def anagram(str1, str2):
    if len(str1) != len(str2):
        return False
     
    list1 = list(str1)
    list2 = list(str2)

    for letter in list1:
        if letter not in list2:
            print(f"{str1} and {str2} are NOT anagrams")
            return False
        else:
            print(f"{str1} and {str2} are anagrams")
            return True
        
anagram("cat", "rat")
anagram("dog", "god")