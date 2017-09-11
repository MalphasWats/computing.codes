---
layout: simple
title: MicroRover
---

A microcontroller is a tiny special purpose computer that collects information about its surroundings (INPUT), uses it to perform calculations (PROCESS) and produces a response either by displaying something or moving something (OUTPUT). This is called the INPUT-PROCESS-OUTPUT model of computation.

You are working with a small team developing a new MicroRover. MicroRover is a very small robot which will be sent to Mars as part of a bigger project looking for water.

![MicroRover](resources/rover.jpg)

MicroRover has the following specification:

* Powerful microprocessor
* Two 3.7 volt lithium-ion batteries
* One 4.2 volt solar panel
* 4 bi-directional hub-motors driving 2 tracks
* 1 3-axis accelerometer
* 1 air pressure sensor
* 1 temperature sensor
* 2 Radar distance sensor (front & back)
* 1 moisture probe
* 1 transmitter (to orbital relay)

## I/O

Your first task is to identify the inputs and outputs in the MicroRover system.

Copy the table below into a new Word document and complete it

| Item | Input / Output | Purpose |
|======|================|=========|
|      |                |         |
|      |                |         |

## Where are we?

Why can't our rover use GPS to find where it is?

The MicroRover's mission is to search an area of 10 square kilometres, using its probe to detect water in the ground. It must report once every hour to the Orbital Relay which will send any data back to Earth for you to analyse.

When the MicroRover lands, the Orbital Relay automatically sends you its exact starting position on the surface of Mars.

After the first hour, you receive your first datapacket.

```
    0000: AXELX     0.01 m/s^2
    0001: AXELX     0.01 m/s^2
    0002: AXELX     0.00 m/s^2
    0003: WAIT
    0004: WAIT
    0005: WAIT
    0006: AXELX     -0.01 m/s^2
    0007: AXELX     -0.01 m/s^2
    0008: AXELX     0.00 m/s^2
    0009: WAIT
    0010: PROBE     FALSE
```

MicroRover reported 2 seconds of acceleration, followed by 4 seconds of *no acceleration*, followed by 2 seconds of decerlation.

How far did MicroRover move from its starting point?

## Who am I?

Your task is to produce a labelled design of your MicroRover. You can do it on paper or on the computer but you must make sure you include all of the features listed in the specification.