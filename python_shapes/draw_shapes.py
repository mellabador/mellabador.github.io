from turtle import *
import math

# Name your Turtle.
t = Turtle()

# Set Up your screen and starting position.
#starts at origin (0,0)


setup(500,300)
x_pos = 0
y_pos = 0
t.setposition(x_pos, y_pos)

### Write your code below:


#style pen
pendown()

t.pen(fillcolor="AliceBlue", pencolor="CadetBlue",pensize=20)


#loop for square
#side length of 4; repeat forward/angle change
#total_angle=360
#sides=int (input("Drawing a shape: How many sides?"))
#for x in range (sides):
	#forward(distance)
	#right(total_angle/sides)

#to draw a square
#square side length=50
#square angle=90
right(90)
forward(50)
left(90)
forward(50)
right(90)
forward(-50)
left(90)
forward(-50)


#draw a circle and fill in
#radius of 60 
t.color=("red")

t.begin_fill()
t.circle(60)
t.end_fill()

# Close window on click.
exitonclick()