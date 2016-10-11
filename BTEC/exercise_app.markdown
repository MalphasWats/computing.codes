---
layout: simple
title: Exercise App Backend
---

# Introduction

Cyclomatic is a new startup working on developing a mobile app for people to track their cycling habits. You have been drafted in by a friend to help them with some of the design and technical aspects of their app.

# Ride Data

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

# Back-end

As part of a proof-of-concept demonstration to potential investors, Cyclomatic want to demonstrate some of the analysis features of the app and have asked you to write some prototype code.

Write a program that presents the user with a simple menu:

```
	(L)oad Data		- Load the data from a text file
	(S)ave Data		- Save the data to a text file
	(A)dd Ride		- Add details for a new manual ride
	(D)isplay Key Data	- Display total distance ridden, total metres climbed, fastest speed ridden
```

The program should be able to load the data from the [text file provided](resources/Cycle_App_Data.txt) into an appropriate data structure and should be able to perform each of the functions listed in the menu.

# Test Plan & Review

You must ensure that your program functions correctly. Write a simple test plan that would ensure that each feature functions correctly.
