#from numpy import *

# Each of our grades
kristen_grades = [90, 85, 100, 77, 94]
clarisse_grades = [96, 83, 89, 97, 86]
sapna_grades = [82, 91, 94, 87, 99]

# Class grade book
grade_book = [kristen_grades, clarisse_grades, sapna_grades]
grade_book = [[90,85,100,77,94],[96,83,89,97,86],[82,91,94,87,99]]
'''
This is what our grade book looks like
[	[90, 85, 100, 77, 94]
	[96, 83, 89, 97, 86]
	[82, 91, 94, 87, 99] ]

'''

# Traverse through the grade book and print all the indivdual grades
for individual_grades in grade_book: 
	print (individual_grades)
	for grades in individual_grades:
		print(grades)



#average: sum of grade/number of numbers
for grade_1 in kristen_grades:
	kristen_average = (kristen_grades[0]+kristen_grades[1]+kristen_grades[2]+kristen_grades[3]+kristen_grades[4])/(len(kristen_grades))
	print (kristen_average)

for grade_2 in clarisse_grades:
	clarisee_average = (clarisse_grades[0]+clarisse_grades[1]+clarisse_grades[2]+clarisse_grades[3]+clarisse_grades[4])/(len(clarisse_grades))
	print (clarisse_grades)

for grade_3 in sapna_grades:
	sapna_average = (sapana_grades[0]+sapana_grades[1]+sapana_grades[2]+sapana_grades[3]+sapana_grades[4])/(len(sapana_grades))

# Extensions: Find the class average, median, and standard deviation
# (For the extentions google for hints!)

# Super extra extensions: calculate the student with highest/lowest average
