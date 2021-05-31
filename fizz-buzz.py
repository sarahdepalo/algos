# ## 5. FizzBuzz
# A classic; write a program that prints out a sequential string of numbers.
# If divisible by 3, output `"Fizz`.
# If divisible by 5, output `"Buzz`.
# If divisible by both 3 and 5, output `FizzBuzz`.
# Otherwise, print out the string.
# ```python
# Between 1 and 5, output:
# "1"
# "2"
# "Fizz"
# "4"
# "Buzz"
# ```

def fizzBuzz():
    for i in range(1, 16):
        if i %3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)
    
fizzBuzz()