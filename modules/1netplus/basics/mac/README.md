## Identify MAC and IP Addresses

Inspect Ethernet frames and IP packets at different points in the network as they travel from source to destination. Focus on the way the MAC and IP addresses change depending on the destination (local or remote) and the place where the PDUs are captured. 

### Walkthrough

### Part 1: Gather PDU Information for a Local Network Communication
Study how a device on a local network does not need a default gateway to communicate with another device on the same local network.

Note: Review the Reflection Questions in Part 3 before proceeding with this part. It will give you an idea of the type of information you will need to gather.

a.     Click host 172.16.31.3 and open the Command Prompt.  
b.     Enter the ping 172.16.31.2 command. This command will issue a series of ICMP echo request packets to the destination. If the packets reach the destination, it will send echo-reply messages pack to the source of the ping requests.  
c.     Click the Simulation mode button to switch to simulation mode. Repeat the ping 172.16.31.2 command. An envelope icon that represents a PDU appears next to 172.16.31.3.  
d.     Click the PDU and locate the following information in both the OSI Model and Outbound PDU Details tabs. The Outbound PDU Details tab shows simplified packet and frame headers for the PDU. You should observe the following details regarding addressing for the PDU.  

·         At Device: 172.16.31.3  
·         Source MAC Address: 0060.7036.2849  
·         Destination MAC Address: 000C:85CC:1DA7  
·         Source IP Address: 172.16.31.3
·         Destination IP Address: 172.16.31.2  

e.     Click Capture / Forward (the right arrow followed by a vertical bar) and the PDU moves to the next step in its journey. Use the OSI model tab to gather the same information from Step 1d. Repeat this process until the PDU reaches its destination. For each step on the path to delivery, record the information for each PDU into a spreadsheet that uses a format like the table shown below. The information for the first step is shown in the table.  
f.      You will notice that the information for the inbound PDU is unchanged.  
g.     Return to Realtime mode.  

### Part 2: Gather PDU Information for a Remote Network Communication
To communicate with remote networks, a gateway device is necessary. The gateway device connects two or more networks together. Study the process that takes place when one device communicates with another device that is on a remote network. Pay close attention to the MAC addresses used.

Note: Move your mouse over the Router. You will see information about the addressing of the router interfaces. Refer to these addresses as you observe the PDU flow through the router.

a.     Return to the Command Prompt for 172.16.31.3.  
b.     Enter the ping 10.10.10.2 command. The first couple of pings may time out.  
c.     Switch to Simulation mode and repeat the ping 10.10.10.2 command. A PDU appears next to 172.16.31.3.  
d.     Click the PDU and note the following information tab:  

·         At Device: 172.16.31.3  
·         Source MAC Address: 0060.7036.2849  
·         Destination MAC Address: 00D0:BA8E:741A  
·         Source IP Address: 172.16.31.3  
·         Destination IP Address: 10.10.10.2  

e.     Click Capture / Forward (the right arrow followed by a vertical bar) to move the PDU to the next device. Gather the same information from Step 1d. Repeat this process until the PDU reaches its destination.   
f.      Repeat the process for the echo-reply message that originates from host 10.10.10.2.  

### Notes

The spreadsheets were a little tedious but a good exercise if you have a tendency to get things mixed up. 


[BACK TO MAIN](https://github.com/lfost42/networking)