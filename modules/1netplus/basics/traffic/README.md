## Observe Traffic Flow in a Routed Network

Currently, the network is configured with a single IP network for hosts in all departments. This design has become inefficient and network delays are becoming increasingly noticeable. 

### Walkthrough

### Part 1: Observe Traffic Flow in an Unrouted LAN

The XYZ network consists of about 150 devices that are connected to a LAN. The LAN is configured on a single IPv4 network. Hosts in different departments are connect to switches which are then connected to the Edge router. The router only routes traffic between the LAN and the internet, represented by the ISP cloud. Because only one IP network is used in the LAN, all departments are on the same network.

#### Step 1: Clear the ARP cache on host Sales 1.

Hover your mouse over the Sales 1 host to see its IP address. Make note of it.

a.     Click Sales 1 > Desktop tab > Command Prompt, and then enter the arp -a command. There should be no MAC addresses in the ARP cache. If there are entries in the ARP cache, use the arp -d command to delete them.  

#### Step 2: Observe traffic flow in the network.

a.     Click the Simulation mode button in the lower right-hand corner of the PT window to switch from Realtime to Simulation mode.  
b.     Open the Command Prompt for Sales 2, and then enter the ping command followed by the IP address of Sales 1.  
c.     Use the Capture then Forward button (the triangle pointing to the right with a vertical bar attached) in the Play Controls of the Simulation Panel to begin to execute the ping command. You will see a colored envelope icon appear next to Sales 2. This represents a PDU. Click the Capture then Forward button to move the PDU to the first device on its path to the destination device. Click the PDU envelope to inspect the contents.  

### Part 2: Reconfigure the Network to Route Between LANs.

In this part, you will demonstrate the benefits of routing between department networks. First, you will cable each network switch to connect directly to a router interface. Then, you will reconfigure the hosts to receive addresses on two new IPv4 networks that are created by the router.  

#### Step 1: Change device connections.

The three switches are connected to each other with copper straight through cables.  

a.     For the cable that connects the Accounting switch with Finance switch, click the green triangle on the Accounting switch side of the link.  
b.     Drag that end of the cable to the Edge router and connect the cable to port GigabitEthernet 1/0.  
c.     Repeat this step for the link between Finance and Sales. Connect to the available GigabitEthernet port.  

#### Step 2: Configure the hosts with addresses on the new LANs.

Each interface of the Edge router was previously configured to put each department on its own IPv4 network. The hosts will receive their new IP addresses from the router. However, it will take time for the hosts on the Finance and Sales networks to receive their new IP addresses. (The hosts on the Accounting network will remain on 192.168.1.0/24.)

a.     To speed up the process of getting new IP addresses, open a Command Prompt on each of the four devices in the Finance and Sales networks.  
b.     Enter the ipconfig /renew command. This will force the host to request a new IP address from the DHCP server that is running on the Edge router. You should see confirmation of new IP addressing.  

### Part 3: Observe Traffic Flow in the Routed Network.

Observe how traffic now flows through a routed network.

#### Step 1: Ping Sales 1 from Sales 2.

a.     Return to the Command Prompt for Sales 2 and verify that its ARP cache is empty. If it is not, delete any entries.  
b.     Switch to Simulation mode.  
c.     Ping Sales 1 from Sales 2.  
d.     Use the Capture then Forward button to step the PDUs through the network. Observe how the ARP request message flows through the network this time.  

#### Step 2: Ping other hosts.

Repeat by pinging other hosts and the internet server. Observe the flow of the ARP request PDUs.  

### Notes

I think I'm ready for the training wheels to come off. 

[BACK TO MAIN](https://github.com/lfost42/networking)