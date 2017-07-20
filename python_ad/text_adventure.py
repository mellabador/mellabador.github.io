#start of story
<<<<<<< HEAD
#context
start = '''
You're currently a high school student and it is time to consider working on your college application. 
Do you want to start your college process early or later?
'''

print(start)

#recieve input: early or later
print("Type 'early' to start early or 'later' to start later.")
user_input = input()


#ouput of input: early or later
if user_input == "early":
	print("You decide to start your college process early. You are motivated! You have three choices: to research colleges, to visit school campuses, and to research your interests. How do you want to begin your process? ") 
user_input = input("To research colleges, to visit school campuses or to research your interests?")
if user_input == "to research colleges":
	print("You have concluded the school you wanted to go to!")
elif user_input == "to visit school campuses":
	print("You realize you are one step closer to freedom!")
elif user_input == "to research your interests":
	print("You have found something you enjoy to do!")
  
elif user_input == "later":
	print("You decide to start your college process later. You are bored and do not know what to do. What do you want to do?") 
user_input = input("To hang out with your friends, to take a nap, or to go watch your shows on Netflix?")
if user_input == "to hang out with your friends":
	print ("Your day is wasted!")
elif user_input == "to take a nap":
	print ("You have slept more than you thought and it is the next day!")
elif user_input == "to go watch your shows on Netflix":
	print ("Many hours has passed and your day is over!")
=======
user_input = input("You're currently a high school student and it is time to consider working on your college application. Do you want to start your college process early or later?")

while user_input != "early" and user_input != "later":
	print("You're currently a high school student and it is time to consider working on your college application. Do you want to start your college process early or later?")
	print("Type 'early' to start early or 'later' to start later.")
	user_input = input()
	
while user_input == "early":
	print("You decide to start your college process early. You are motivated! You have three choices: to research colleges, to visit college campuses, and to research your interests. How do you want to begin your process?")
	print("Type in your choice: to research colleges, to visit college campuses or to research your interests")
	user_input = input()
	if user_input == "to research colleges":
		print("You have concluded the school you wanted to go to!")
	elif user_input == "to visit college campuses":
		print("You realize you are one step closer to freedom!")
	elif user_input == "to research your interests":
		print("You have found something you enjoy to do!")

while user_input == "later":
	print("You decide to start your college process later. You are bored and do not know what to do. What do you want to do?")
	print("Type in your choice: to hang out with your friends, to take a nap or to got watch your shows on Netflix")
	user_input = input()
	if user_input == "to hang out with your friends":
		print ("Your day is wasted!")
	elif user_input == "to take a nap":
		print ("You have slept more than you thought and it is the next day!")
	elif user_input == "to go watch your shows on Netflix":
		print ("Many hours has passed and your day is over!")


	

>>>>>>> python
