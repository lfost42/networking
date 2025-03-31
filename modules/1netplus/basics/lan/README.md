## Create a LAN

A new branch office is opening, and you have been asked to set up the LAN. The network devices are already set up, but you need to connect them and the hosts together. You also need to configure IPv4 addressing on the end devices and verify that they can reach local and remote resources.

### Walkthrough

### Part 1: Connect Network Devices and Hosts

#### Step 1: Power on the end devices and Office Router.

a.     Click each device and open its Physical Tab. Note: There is no power switch on the switch model used in this activity.  
b.     Locate the power switch for each device in the Physical Device View window.  
c.     Click the power switch to turn the device on. You should see a green light near the power switch to indicate that the device is powered on.  

#### Step 2: Connect the end devices.

Use the table and instructions to connect the network devices and hosts to create the physical network.

Connections Table  
|   |   |  |
| --- | --- | --- |
| Device | Interface/Port | Connected to Device | Connection Interface/Port | 
| Office Router | G0/0 | ISP1 | G0/0 | 
| Office Router | G0/1 | Switch | G0/1 | 
| Admin PC | NIC (F/0) | Switch | F0/1 |
| Manager PC | NIC (F/0) | Switch | F0/2 |
| Printer | NIC (F/0) | Switch | F0/24 |

Note: In the table above, interfaces designated with G are GigabitEthernet interfaces. Interfaces that are designated with F are FastEthernet interfaces.

a.     Connect the networking devices according to the information in the Connections Table using Ethernet copper straight-through cables. For the internet to Office Router connection, select the device and port from the dropdown menus that appear when you click the cloud with connections tool selected.  
b.     Connect the two PCs and the printer to the office switch according to the information in the connections table. Use copper straight-through cables.  
c.     You should see green link lights on all connections after a brief delay.  

### Part 2: Configure Devices with IPv4 Addressing

#### Step 1: Configure the hosts with addressing information.
a.     The Admin and Manager PCs should receive their IP addressing information from DHCP. The Office Router has been configured to supply IP addresses to hosts on the branch office LAN. Click the PCs and go to the Desktop tabs on each PC. Open the IP Configuration application and configure the PCs to receive their IP addresses dynamically.  
b.     Printers and servers are often manually configured with addressing because other devices on the network are configured to access them using IP addresses. Manual configuration with a static address will ensure that the IP addresses of these devices do not change.  

1)    Click the printer and open the Config tab.  
2)    Click the FastEthernet0 interface in the left-hand pane.  
3)    Enter the addressing information from the Addressing Table.  

c.     Because the two computers are on the same network, their IPv4 addresses will be similar, their subnet masks and default gateways will be identical.  


### Part 3: Verify the End Device Configuration and Connectivity

#### Step 1: Verify connectivity between the two PCs.

a.     Go to the desktops of the PCs and check the IP addressing configuration. You should see that the PCs have dynamically received IP addresses on the 192.168.1.0 255.255.255.0 network. You should also see that they have received addresses for the Default Gateway and DNS server settings.  
b.     From the command prompt on Admin PC, ping the IP address of the Printer. Repeat this process for the Manager PC. You should see successful pings for each. This verifies that the PCs and the printer are powered on, and correctly connected and addressed.  

#### Step 2: Verify connectivity to the internet.

From the desktop of the PCs, open the Web Browser. Enter the IP address of the internet server to display the webpage. Repeat the process but connect using the URL of the server.

### Part 4: Use Networking Commands to View Host Information

The networking commands that are available from command prompt on PCs are very similar to those that are available in Windows. In this part of the activity, you will use ipconfig and tracert to learn more about the LAN.

#### Step 1: Use the ipconfig command.

The ipconfig command displays details about the addressing that is configured on a host.

#### Step 2: Use the tracert command.

The tracert command uses ICMP to return information about the routers that are passed as packets go from the source PC to the destination.

Trace to a remote destination by going to one of the PCs and entering tracert followed by the URL of the web server.

### Notes

This was one a little more interesting than the previous labs. 

[BACK TO MAIN](https://github.com/lfost42/networking)