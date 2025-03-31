## IPv6 Neighbor Discovery

For a device to communicate with another device, the MAC address of the destination must be known. With IPv6, a process called Neighbor Discovery using NDP or ND protocol is responsible for determining the destination MAC address. Gather PDU information in simulation mode to better understand the process. 

### Walkthrough

### Part 1: IPv6 Neighbor Discovery Local Network

In this part, you will obtain the MAC address of a destination device on the same network.

#### Step 1: Check the router for any neighbors that it discovered.

a.     Click the RTA Router. Select the CLI tab and issue the command show ipv6 neighbors from the privileged EXEC mode. If there are any entries displayed, remove them using the command clear ipv6 neighbors.  

b.     Click PCA1, select the Desktop tab and click the Command Prompt icon.

#### Step 2: Switch to Simulation Mode to capture events.

a.     Click the Simulation button in the lower right corner of the Packet Tracer Topology window.  
b.     Click the Show All/None button in the Simulation Panel until Event List Filters – Visible Events displays None.  
c.     Click Edit Filters. Select the IPv6 tab at the top and check the boxes for ICMPv6 and NDP. Close the Edit ACL Filters window. Now the Event List Filters displays ICMPv6 and NDP.  
d.     From the command prompt on PCA1, issue the command `ping –n 1 2001:db8:acad:1::b`. This will start the process of pinging PCA2.  
e.     Click Play (Hands Free) in the PLAY CONTROLS outside the Simulation Panel. If prompted, click View Previous Events in the Buffer Full - Packet Tracer window. You should have approximately 12 entries in the window.  
f.      Click the square in the Type column for the first event, which should be ICMPv6.  
g.     Click the square next to the next event in the Simulation Panel. It should be at device PCA1 and the type should be NDP.  
h.     Navigate back to the Event List. Select the first NDP event at SwitchA.  
i.      Select the first NDP event at PCA2. Click the Outbound PDU Details.  
j.      Select the first NDP event at RTA.   
k.     Click through the Next Layer >> button until the end and read steps 4 through 7 for further explanation.  
l.      Click the next ICMPv6 event at PCA1.  
m.   Click the last ICMPv6 event at PCA1. Notice this is the last communication listed.  
n.     Click the Reset Simulation button in the Simulation Panel. From the command prompt of PCA1, repeat the ping to PCA2. (Hint: you should be able to press the up arrow to bring the previous command back.)  
o.     Click Play (Hands Free) to complete the ping process. Click View Previous Events if prompted.  

### Part 2: IPv6 Neighbor Discovery Remote Network

In the following case, the destination host is on another LAN. Observe how the Neighbor Discovery process differs from the process you observed in the previous part. Pay close attention to some of the additional addressing steps that take place when a device communicates with a device that is on a different network.

#### Step 1: Capture events for remote communication.

a.     Click the Reset Simulation button to clear out the previous events. Display and clear any entries in the IPv6 neighbor device table as was done in the previous part.  
b.     Verify only ICMPv6 and NDP are listed in the Event List Filters - Visible Events.  
c.     From the command prompt on PCA1, issue the command ping –n 1 2001:db8:acad:2::a to ping host PCB1.  
d.     Click Play (Hands Free) in the PLAY CONTROLS outside the Simulation Panel. If prompted, click View Previous Events in the Buffer Full -- Packet Tracer window.  
e.     When the pinging process is done, click the square in the Type Column for the first event, which should be ICMPv6. Because the message starts with this event, there is only an Outbound PDU. Notice that it is missing the Layer 2 information as it did in the previous scenario.  
f.      Click the first NDP event At Device PCA1.  
g.     Click the second ICMPv6 event for PCA1. PCA1 now has enough information to create an ICMPv6 echo request.  
h.     Click the next ICMPv6 event at device RTA. Notice that the outbound PDU from RTA lacks the destination Layer 2 address, This means that RTA once again has to perform a Neighbor Discovery for the interface that has the 2001:db8:acad:2:: network because it does not know the MAC addresses of the devices on the G0/0/1 LAN.  
i.      Skip down to the first ICMPv6 event for device PCB1.  
j.      The next few NDP events are associating the remaining IPv6 addresses to MAC addresses. The previous NDP events associated MAC addresses with Link Local addresses.  
k.     Skip to the last set of ICMPv6 events and notice that all the addresses have been learned. The required information is now known, so PCB1 can send echo reply messages to PCA1.  
l.      Click the Reset Simulation button in the Simulation Panel. From the command prompt of PCA1 repeat the command to ping PCB1.  
m.   Click Play (Hands Free) to complete the ping process. Click View Previous Events if prompted in the Buffer Full window.  
j.      The next few NDP events are associating the remaining IPv6 addresses to MAC addresses. The previous NDP events associated MAC addresses with Link Local addresses.  
k.     Skip to the last set of ICMPv6 events and notice that all the addresses have been learned. The required information is now known, so PCB1 can send echo reply messages to PCA1.  
l.      Click the Reset Simulation button in the Simulation Panel. From the command prompt of PCA1 repeat the command to ping PCB1.  
m.   Click Play (Hands Free) to complete the ping process. Click View Previous Events if prompted in the Buffer Full window.

#### Step 2: Examine router outputs.

a.     Return to Realtime mode.  
b.     Click RTA and select the CLI tab. At the router prompt enter the command show ipv6 neighbors.  
c.     Ping PCA2 from the router.  
d.     Issue the show ipv6 neighbors command.

### Notes

I think I struggle in being too interested in the activities involving simulations. It makes more sense in my head than it does in the interface. 

[BACK TO MAIN](https://github.com/lfost42/networking)