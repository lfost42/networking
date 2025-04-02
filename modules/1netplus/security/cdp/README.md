## Use CDP to Map a Network

Map a network using CDP and SSH remote access.

### Walkthrough

A senior network administrator requires you to map the Remote Branch Office network and discover the name of a recently installed switch that still needs an IP address to be configured. Your task is to create a map of the branch office network. You must record all of the network device names, IP addresses and subnet masks, and physical interfaces interconnecting the network devices, as well as the name of the switch that does not have an IP address.

To map the network, you will use SSH for remote access and the Cisco Discovery Protocol (CDP) to discover information about neighboring network devices. Because CDP is a Layer 2 protocol, it can be used to discover information about devices that do not have IP addresses. You will record the gathered information to complete the Addressing Table and provide a topology diagram of the Remote Branch Office network.

The local and remote administrative usernames and passwords are:

Local Network  
Username: admin01  
Password: S3cre7P@55  

Branch Office Network  
Username: branchadmin  
Password: S3cre7P@55

### Part 1: Use SSH to Remotely Access Network Devices

Use the Admin-PC to remotely access the Edge1 gateway router. Next, from the Edge1 router you will SSH into the Remote Branch Office.

a.     On the Admin-PC, open a command prompt.  
b.     SSH into the gateway router at 192.168.1.1 using the username admin01 and the password S3cre7P@55.`ssh –l admin01 192.168.1.1` Note: Notice that you are placed directly into privileged EXEC mode. This is because the admin01 user account is set to privilege level 15.  
c.     Use the show ip interface brief and show interfaces commands to document the Edge1 router’s physical interfaces, IP addresses, and subnet masks in the Addressing Table.  

Interface              IP-Address      OK? Method Status                Protocol  
GigabitEthernet0/0     192.168.1.1     YES manual up                    up  
Serial0/0/0            209.165.200.5   YES manual up                    up  

d.     From Edge1, use SSH to access the Remote Branch Office at 209.165.200.10 with the username branchadmin and the same password as above: `ssh –l branchadmin 209.165.200.10` `S3cre7P@55` After connecting to the Remote Branch Office what piece of previously missing information can now be added to the Addressing Table above?

Interface              IP-Address      OK? Method Status                Protocol  
GigabitEthernet0/0     192.168.3.249   YES manual up                    up   
Serial0/0/1            209.165.200.10  YES manual up                    up  

### Part 2: Use CDP to Discover Neighboring Devices

You are now remotely connected to the Branch-Edge router. Using CDP, begin looking for connected network devices.  

a.     Issue the show ip interface brief and show interfaces commands to document the Branch-Edge router’s network interfaces, IP addresses, and subnet masks. Add the missing information to the Addressing Table to map the network:

`show ip interface brief`  
`show interfaces`

b.     Security best practice recommends only running CDP when needed, so CDP may need to be turned on. Use the show cdp command to display its status. `show cdp`  
c.     You need to turn on CDP, but it is a good idea to only broadcast CDP information to internal network devices and not to external networks. To do this, turn on the CDP protocol and then disable CDP on the S0/0/1 interface.

Branch-Edge# `configure terminal`  
Branch-Edge(config)# `cdp run`  
Branch-Edge(config)# `interface s0/0/1`  
Branch-Edge(config-if)# `no cdp enable`  
Branch-Edge(config-if)# `exit`

d.     Issue a show cdp neighbors command to find any neighboring network devices. `show cdp neighbors` Note: CDP will only show connected Cisco devices that are also running CDP.  Is there a neighboring network device? What type of device is it? What is its name? On what interface is it connected? Is the device’s IP address listed? Record the information in the Addressing Table. Note: It may take some time for CDP updates to be received. If you see no output from the command, press the Fast Forward Time button several times.  

`Router, Branch-Firewall, Gig 0/0, IP address doesn't show in show cdp neighbors`

e.     To find the IP address of the neighboring device use the show cdp neighbors detail command and record the ip address: `show cdp neighbors detail` Aside from the neighboring device’s IP address, what other piece of potentially sensitive information is listed?  

`192.168.3.253, also shows cisco version and duplex`

f.      Now that you know the IP address of the neighbor device, connect to it with SSH in order to discover other devices that may be its neighbors. Note: To connect with SSH use the same Remote Branch Office username and password. `ssh –l branchadmin 192.168.3.253` `S3cre7P@55`

What is the IP address of the neighbor device? After successfully connecting with SSH, what does the command prompt show?

`show cdp neighbors detail`  

>> `sw-br-floor2 192.168.4.132 g0/1`

g.     You are remotely connected to the next neighbor. Use the show cdp neighbors command, and the show cdp neighbors detail command, to discover other connected neighbor devices. What types of network devices neighbor this device? Record any newly discovered devices in the Addressing Table. Include their hostname, interfaces, and IP addresses.  

`ssh -l branchadmin 192.168.4.132`
`show cdp neighbors detail`

>> `sw-br-floor3 192.168.4.133 f0/24`

h.     Continue discovering new network devices using SSH and the show CDP commands. Eventually, you will reach the end of the network and there will be no more devices to discover. What is the name of the switch that does not have an IP address on the network?  

`ssh -l branchadmin 192.168.4.133` `S3cre7P@55`

>> `sw-br-floor1, no IP address, g0/1` and `sw-br-floor2 192.168.4.132 f0/24`

i.      Draw a topology of the Remote Branch Office network using the information you have gathered using CDP. 

                                                 /-- sw-br-floor3 -|
Branch-Edge --- Branch-Firewall --- sw-br-foor2 <                  | 
                                                 \-- sw-br-floor1  /

### Notes

My first instinct was to use the device name to ssh into sw-br-floor2 and it took me a minute to realize I needed to keep using branchadmin. It was smooth sailing after that, a really fun activity! 

[BACK TO MAIN](https://github.com/lfost42/networking)