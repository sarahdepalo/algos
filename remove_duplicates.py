# Given a string of letters and / or numbers, remove all duplicates and return the new string. Study the example carefully. Please avoid any special built in methods or operators (Set).

# "Loops are cool!!"

# "Lops are cl!"

test_string = "Loops are cool!"
test_num_str = "11122223333444 5555 6666 777"

def remove_duplicates(str):
    newstring = ""
    space = " "
    for letter in str:
        if letter not in newstring or letter == space: 
            newstring += letter
          
    print(newstring)

remove_duplicates(test_string)
remove_duplicates(test_num_str)
