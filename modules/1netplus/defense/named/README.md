## Configure Named Standard IPv4 ACLs

Create a standard named ACL to prevent access to a file server. The file server contains the data base for the web applications. Only the Web Manager workstation PC1 and the Web Server need to access the File Server. All other traffic to the File Server should be denied.

### Walkthrough

### Part 1: Configure and Apply a Named Standard ACL

#### Step 1: Verify connectivity before the ACL is configured and applied.

All three workstations should be able to ping both the Web Server and File Server.

#### Step 2: Configure a named standard ACL.

Open configuration window

a.     Configure the following named ACL on R1.  
R1(config)# ip access-list standard File_Server_Restrictions  
R1(config-std-nacl)# `permit host 192.168.20.4`  
R1(config-std-nacl)# `permit host 192.168.100.100`  
R1(config-std-nacl)# `deny any`

Note: For scoring purposes, the ACL name is case-sensitive, and the statements must be in the same order as shown.  
b.     Use the show access-lists command to verify the contents of the access list before applying it to an interface. Make sure you have not mistyped any IP addresses and that the statements are in the correct order.  

R1# `show access-lists`  
Standard IP access list File_Server_Restrictions  
10 permit host 192.168.20.4  
20 permit host 192.168.100.100  
30 deny any

#### Step 3: Apply the named ACL.

a.     Apply the ACL outbound on the Fast Ethernet 0/1 interface. Note: In an actual operational network, applying an access list to an active interface is not a good practice and should be avoided if possible. 

`int f0/1`  
`ip access-group File_Server_Restrictions out`  

b.     Save the configuration. Close configuration window 

`end`  
`exit`  
`copy run start`  

### Part 2: Verify the ACL Implementation

#### Step 1: Verify the ACL configuration and application to the interface.

Open configuration window

Use the show access-lists command to verify the ACL configuration. Use the show run or show ip interface fastethernet 0/1 command to verify that the ACL is applied correctly to the interface. `show run`

#### Step 2: Verify that the ACL is working properly.

All three workstations should be able to ping the Web Server, but only PC1 and the Web Server should be able to ping the File Server. Repeat the show access-lists command to see the number of packets that matched each statement.   

### Notes

I'm glad we're getting practice with access lists. These are the labs in CertMaster that fell out of my head after doing them. 

[BACK TO MAIN](https://github.com/lfost42/networking)