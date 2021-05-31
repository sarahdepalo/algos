# Given a string of letters, return the reverse of that string. Complete this without using any special built in methods.

# "Hello World"

# "dlroW olleH"

test_string = "Hello World"

def reverse (string):
    reversedString = ""
    index = len(string)
    while index > 0:
        reversedString += string[index - 1]
        index = index -1
    print(reversedString)

reverse(test_string)