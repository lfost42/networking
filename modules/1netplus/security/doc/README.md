## Document the Network

This is Part I of a two-part series of activities. You will use the documentation that you create in this activity to guide you as you troubleshoot the network in Part II, Packet Tracer - Troubleshooting Challenge - Using Documentation to Solve Issues. As you investigate and document the network topology, make note of issues that you discover that do not adhere to the practices taught in the CCNA curriculum.

### Walkthrough

### Part 1: Test Connectivity

Ping between the PCs and the internet server to test the network. All PCs should be able to ping one another and the internet server. 

### Part 2: Discover PC Configuration Information
Go to the command prompt of each PC and display the IP settings. Record this information in the documentation table.

### Part 3: Discover Information about the Default Gateway Devices

Connect to each default gateway device using the Telnet protocol and record information about the interfaces that are in use in the table. The VTY password is cisco and privileged EXEC password is class.

C:\> `telnet IP_address`

### Part 4: Reconstruct the Network Topology

In this part of the activity, you will continue recording information about the devices in the network in the Addressing Table. In addition, you will start to diagram the network topology based on what you can discover about the device interconnections.

#### Step 1: Access Routing Tables on Each Gateway Device.

Use the routing tables in each router to learn more about the network. Make notes of your findings.

#### Step 2: Discover Non-Gateway Devices.

Use a network discovery protocol to document neighboring devices. Record your findings in the addressing table. At this point you should also be able to begin documenting device interconnections.

### Part 5: Further Explore Device Configurations and Interconnections

#### Step 1: Access Device Configurations.

Connect to the other devices in the network. Gather information about the device configurations.

#### Step 2: View Neighbor Information.

Use discovery protocols to increase your knowledge of the network devices and topologies.

#### Step 3: Connect to Other Devices.

Display configuration information for the other devices on the network. Record your findings in the device table.

By now you should know about all the devices and interface configurations in the network. All rows of the table should contain device information. Use your information to reconstruct as much of the network topology as you can.

Addressing Table

|     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- |
| Device | Interface | Device Type | IP Address    | Subnet Mask   | Default Gateway | 
| PC1    |    f0     |   host      | 192.168.1.153 | 255.255.255.0 | 192.168.1.1 | --SW-B1, HUB (168.0.1)
| SW-B1  |  g0/1 g0/0/0    |   switch    | 192.168.1.1 |   |   | --Branch-1
| SW-B1  |  g0/0/0 g1    |   switch    | 192.168.1.252 |   |   | --Branch-1
| Branch-1  |  g0/0/0   |   router    | 192.168.0.2 |   |   | --SW-B1, Hub (168.0.1)
| Branch-1  |  s0/1/0 s0/1/0   |   router    | ... |   |   | --SB2, Hub (168.0.5)
| Branch-1  |  g0/1 g0/0/0   |   router    | 192.168.1.1 |   |   | --SW-B1, Hub (168.0.1)
| Hub   |  s0/1/0 s0/2/1    |   router       | 192.168.0.1 |   |   | --ISP, Branch-2, Factory, HQ, Branch-1
| Hub   |  s0/1/0 s0/1/0    |   router       | ... |   |   |
| ISP    |  g0/0/0   |   router       | 192.0.2.2 |   |   | -- Hub (0.2.1)
| Branch-2    |  s0/1/1 s0/1/0   |   router       | 192.168.0.6 |   |   | --SW-B2, Hub (168.0.5)
| Branch-2    |  g0/1 g0/0/0   |   router       |  |   |   |
| Branch-2    |  g0/1 g0/0/0 .1  |   router       | 192.168.2.1 |   |   | --SB2, Hub (168.0.5)
| Branch-2    |  g0/1 g0/0/0.32 |   router       | 192.168.2.33 |   |   | --SW-B2, Hub (168.0.5)
| Branch-2    |  g0/1 g0/0/0.64 |   router       | 192.168.2.65 |   |   | --SW-B2, Hub (168.0.5)
| Factory    |  s0/2/1 s0/1/0   |   router       | 192.168.0.14 |   |   | --SW-F2, Hub (168.0.13)
| HQ    |  s0/2/0 s0/1/0   |   router       | 192.168.0.10 |   |   | --SW-HQ1, Hub (168.0.9)
| HQ    |  G0/1 g0/0/0   |   router       |  |   |   |
| HQ    |  g0/1 g0/0/0.1   |   router       | 192.168.6.1 |   |   | --SW-HQ1, Hub(168.0.9)
| HQ    |  g0/1 g0/0/0.5   |   router       | 192.168.5.1 |   |   | --SW-HQ1, Hub(168.0.9)
| HQ    |  g0/1 g0/0/0.10   |   router       | 192.168.5.129 |   |   | --SW-HQ1, Hub(168.0.9)
| PC2    |    f0     |   host      | 192.168.3.50  | 255.255.255.0 | 192.168.3.1 | -- SW-F1, SW-F2, HUB
| SW-F1  |  g0/0/0 g0/1    |   switch    | 192.168.3.252 |   |   | --Factory
| SW-F2  |  g0/0/1 g0/1   |   switch    | 192.168.4.252 |   |   | --Factory
| HUB    |  s0/1/0 s0/2/1   |   hub       | 192.168.0.13 |   |   | --ISP, Branch-2, Factory, HQ, Branch-1
| PC3    |    f0     |   host      | 192.168.4.115 | 255.255.255.0 | 192.168.4.1 | -- SW-F1, SW-F2, HUB
| PC4    |    f0     |   host      | 192.168.5.83 | 255.255.255.128 | 192.168.5.1 | --SW-HQ1, HUB
| SW-HQ1 |  g0/0/0 g0/1    |   switch    | 192.168.6.252 |   |   | --SW-HQ3, HQ, SW-HQ2, SW-HQ3
| SW-HQ1 |  Port-channel1 f0/19    |   switch    | ... |   |   |
| SW-HQ1 |  Port-channel1 f0/29    |   switch    | ... |   |   |
| SW-HQ1 |  Port-channel1 Port-channel1    |   switch    | ... |   |   |
| SW-HQ1 |  Port-channel13 Port-channel13    |   switch    | ... |   |   |
| SW-HQ2 |  Port-channel1 f0/19    |   switch    | 192.168.6.253 |   |   | --SW-HQ3, SQ-HQ1
| SW-HQ2 |  Port-chanel1 f0/20    |   switch    | ... |   |   |
| SW-HQ2 |  Port-chanel12 f0/21    |   switch    | ... |   |   |
| SW-HQ2 |  Port-chanel12 f0/22    |   switch    | ... |   |   |
| SW-HQ2 |  Port-chanel1 Port-channel1    |   switch    | ... |   |   |
| SW-HQ2 |  Port-chanel2 Port-channel2    |   switch    | ... |   |   |
| SW-HQ3 |  Port-channel12, f0/22    |   switch    | 192.168.6.254 |   |   | --SW-HQ1, SQ-HQ2
| SW-HQ3 |  Port-channel12, Port-channel12    |   switch    | ... |   |   |
| SW-HQ3 |  Port-channel13, e0/23    |   switch    | ... |   |   |
| SW-HQ3 |  Port-channel13, e0/24    |   switch    | ... |   |   |
| SW-HQ3 |  Port-channel13, Port-channel13    |   switch    | ... |   |   |
| HUB    |  s0/1/0 s0/2/10   |   hub       | 192.168.0.9 |   |   | --ISP, Branch-2, Factory, HQ, Branch-1
| PC5    |    f0     |   host      | 192.168.5.227 | 255.255.255.128 | 192.168.5.129 | --SW-HQ1, HUB
| PC6    |    f0     |   host      | 192.168.2.48 | 255.255.255.224 | 192.168.2.33 | --SW-B2, HUB
| SW-B2 |  g0/0/0.1 g0/1    |   switch    | 192.168.2.17 |   |   | --Branch-2
| HUB    |  s0/1/0 s0/1/1   |   hub       | 192.168.0.5 |   |   | --ISP, Branch-2, HQ, Branch-2
| PC7    |    f0     |   host      | 192.168.2.67 | 255.255.255.224 | 192.168.2.65 | --SW-B2, HUB
| Internet Server | f0 | server | 203.0.113.27 | 255.255.255.0 | 203.0.113.1 |

### Notes

Alright, that was a lot of repetition and work. I'm going to need to take a break from CDP!

[BACK TO MAIN](https://github.com/lfost42/networking)