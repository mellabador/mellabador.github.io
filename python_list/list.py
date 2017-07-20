#to pick a number and recieve a grocery

#list of groceries
groceries = ["steak","lime","mushrooms","asparagus","potatoes","toast","eggs","carrots","corn","rice","chicken"]

index = [1,2,3,4,5,6,7,8,9,10]

#start of program
#ask to pick a number 
print("Pick a number from 0-10")
#recieve user_input and print out input
user_input=input()
print(user_input)

#print out user_iput aka. index 
print (groceries[int(user_input)])

#for x in range(len(groceries)):
	#print (groceries[x])

#for item in groceries:
	#print(item)

#numbers = [1,2,3,4,5,6,7,8,9,10]

#end of program



#start of another program
#to combine diff. combinations of first and last names
from random import*

#list of first and last names
names = ["Melinda", "Aina","Bob","Bryan","Dylan","Goblin","Winnie"]
last_names = ["Mei","Muhd","Lee","Dan","Fam","Loo","Tan"]

#list of names already used
names_used = []
last_names_used = []

for index in range(len(names)):
	random_num1 = randint(0, len(names) - 1)
	random_num2 = randint(0, len(names) - 1)
	
	#random index for first and last name 
	rand_first = names[random_num1]
	rand_last = last_names[random_num2]

	#if random first name is used, pick another
	while rand_first in names_used:
		rand_first = names[randint(0, len(names) - 1)]

	#if random last name is used, pick another
	while rand_last in last_names_used: 
		rand_last = last_names[randint(0, len(last_names) - 1)]

	#adding the names together in the list
	#append = add to back of list 
	names_used.append(rand_first)
	last_names_used.append(rand_last)

	print(rand_first + " " + rand_last)
	#end of program

#start another program
#create a menu 
from random import*

#list of foods and deserts
foods = ["chicken and rice","pizza","fried chicken","egg salad"]
deserts = ["chocolate cake", "earl gray cake", "ice cream", "fruits"]




