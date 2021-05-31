def helloWorld ():
    user_input = input("What is your name? ")
    lower_user_input = user_input.lower()
    if lower_user_input == "alice":
        print("Hello, " + user_input)
    elif lower_user_input == "bob":
        print("Hello, " + user_input)
    else:
        print(f"Sorry, {user_input} we don't know that name yet.")
    
helloWorld()

def printSum():
    num = int(input("Choose a number "))
    if num % 3 == 0:
        print(num + 1)
    elif num % 5 == 0:
        print(num + 1)
    else:
        print("Not an accepted number")
    
printSum()

def chooseProduct():
    n = int(input("Choose a number "))
    print("Do you want to compute the sum or the product? Type 'sum' or 'product'. ")
    choice = input("").lower()
    if choice == "sum":
        print(f"The sum of your number is {n + n}")
    elif choice == "product":
        print(f"The product of your number is {n * n}")
    else:
        print("Not an accepted choice")
        
chooseProduct()

# Write a program that prints a multiplication table for numbers up to 12.

def multiplicationTable():
    inputNum = int(input("What number do you want to display a multiplication table for? "))
    if inputNum <= 12:
        multiply(inputNum)
    else:
        print("Please choose a number less than 12")

def multiply(num):
    for i in range (1, 13):
        print(num, "x", i, "=", num * i )
        
multiplicationTable()