---
layout: simple
title: Exercise App Backend
---

## Learning Objectives

* Working with Data Structures
* Data Validation
* Standard Algorithms (min, max, search & sort)

## Introduction

Cyclomatic is a new startup working on developing a mobile app for people to track their cycling habits. You have been drafted in by a friend to help them with some of the design and technical aspects of their app.

## Ride Data

As well as automatically tracking a ride using GPS and other technologies, users can enter details manually in cases where they have forgotten to start the app before their ride.

You must design a Data Structure that could be used to hold the data gathered either from an automatic capture or manual input. You will find the items of data required to be stored in this list:

* Start Latitude
* Start Longitude
* Ride Title
* Start Time
* Finish Time
* Distance Ridden
* Maximum Speed
* Average Speed
* Minimum Altitude
* Maximum Altitude

## Back-end

As part of a proof-of-concept demonstration to potential investors, Cyclomatic want to demonstrate some of the analysis features of the app and have asked you to write some prototype code.

Write a program that presents the user with a simple menu:

```
	(L)oad Data		- Load the data from a text file
	(S)ave Data		- Save the data to a text file
	(A)dd Ride		- Add details for a new manual ride
	(D)isplay Key Data	- Display total distance ridden, 
	                        - total metres climbed, 
                            - fastest speed ridden
```

The program should be able to load the data from the [text file provided](resources/Cycle_App_Data.txt) into an appropriate data structure and should be able to perform each of the functions listed in the menu.

## Adding a Ride

It's the third option, but probably the first one you want to implement. Normally the app would track the details of a ride automatically, however, sometimes users forget to launch it before they ride, so it's important to have feature that allows users to enter the data for a ride manually.

Because this app is designed to perform data analysis, it is *vital* that all data entered is sensible. In computing, this process is called **data validation**

### Data Validation

There are a number of different types of data validation:

| Presence Check | Used to ensure that a value is entered |
| Type Check     | Used to ensure that data of the correct type is entered |
| Length Check   | Used to ensure that data of the right length is entered |
| Range Check    | Used to ensure that numerical data between set values   |
| Lookup Check   | Used to ensure data is entered from a set of allowed values |
| Format Check   | Used to ensure data is entered in a specified format |

For each of the data items listed above, you must apply the appropriate validation rules to ensure that data that is manually entered is valid.


## Test Plan & Review

You must ensure that your program functions correctly. Write a simple test plan that would ensure that each feature functions correctly.
