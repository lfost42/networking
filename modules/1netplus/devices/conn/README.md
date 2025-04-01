## Implement Basic Connectivity

Basic switch configurations.

### Walkthrough

### Part 1: Perform SVI Configuration on S1 and S2

#### Step 1: Configure S1 with a hostname.

a.     Open configuration window. Click S1, and then click the CLI tab.  
b.     Enter the privileged EXEC mode. Then enter the global configuration mode.

Switch> `enable`  
Switch# `configure terminal`  
Enter configuration commands, one per line. End with CNTL/Z.

c.     Configure the hostname as S1 `hostname S1`  

#### Step 2: Configure S1 with an IP address.

Switches can be used without any configurations. Switches forward information from one port to another based on Media Access Control (MAC) addresses. Why does a switch need an IP address?

a.     In the global configuration mode, enter the following commands to configure S1 with an IP address in VLAN 1.

S1(config)# `interface vlan 1`  
S1(config-if)# `ip address 192.168.1.253 255.255.255.0`  
S1(config-if)# `no shutdown`

b.     Exit the configuration mode and save the configuration.

S1(config-if)# `end`  
S1#  
S1# `copy running-config startup-config`  
S1#  
Destination filename [startup-config]?  
Building configuration...
[OK]

c.     Verify the IP address configuration on S1.

S1# `show ip interface brief`

<output omitted>

Vlan1 192.168.1.253 YES manual up up

close configuration window

#### Step 3: Configure S2 with a hostname and IP address.

Configure S2 with a hostname and IP address.

a.     Click `S2`. In the CLI tab, enter the global configuration mode.  
b.     Configure the switch `S2` with a hostname using the information according to the Addressing Table.  

`en`
`conf t`
`hostname s2`
`interface vlan 1`  
`ip address 192.168.1.254 255.255.255.0`  
`no shutdown`
`end`  
`copy run start`  

c.     Use the information in the Addressing Table, repeat the same process to configure the switch S2 with an IP address.  
d.     Exit the configuration mode. Verify the IP address configuration on S2.  

S2# `show ip interface brief`  
<output omitted>  
Vlan1 192.168.1.254 YES manual up up  

e.     Save the configuration file to NVRAM. Enter the `copy running-config startup-config` command to save the configuration. Close configuration window. 

### Part 2: Configure the PCs

Configure PC1 and PC2 with IP addresses and verify network connectivity.

#### Step 1: Configure both PCs with IP addresses.

a.     Click PC1, and then click the Desktop tab.  
b.     Click IP Configuration. In the Addressing Table above, you can see that the IP address for PC1 is supposed to be 192.168.1.1 and the subnet mask 255.255.255.0. Enter this information for PC1 in the IP Configuration window.  
c.     Repeat the previous steps for PC2. Use the IP address listed in the Address Table for PC2.  IP address 192.168.1.2, subnet mask 255.255.255.0. 

#### Step 2: Test connectivity from the PCs.

a.     Click PC1. Close the IP Configuration window if it is still open. In the Desktop tab, click Command Prompt.  
b.     Enter the ping command and the IP address for S1.  

PC> `ping 192.168.1.253`

f.     From PC1, ping S2 and PC2.  
g.     Repeat the pings to S1, S2, and PC1 from PC2.

All pings should be successful. If your first ping result is 80%, retry; it should now be 100%. You will learn why a ping may fail the first time later in your studies. If you are unable to ping any of the devices, check your configuration for errors.

#### Step 3: Verify network connectivity from the switches.

Network connectivity can be verified using the ping command. It is very important that connectivity exists throughout the network.

a.     From S1, ping the other devices in the network. The ping to PC1 is displayed below as an example.

S1> `ping 192.168.1.1`

Type escape sequence to abort.

b.     From S2, ping the other devices in the network.

All pings should be successful. If your first ping result is 80%, retry; it should now be 100%. You will learn why a ping may fail the first time later in your studies. If you are unable to ping any of the devices, check your configuration for errors.

### Notes

This was another good exercise for me. I'm feeling a lot more comfortable with cisco now. 

[BACK TO MAIN](https://github.com/lfost42/networking)