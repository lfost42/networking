## Configure IPv6 ACLs

Configure, apply, and verify IPv6 ACLs. 

### Walkthrough

### Part 1: Configure, Apply, and Verify an IPv6 ACL

Logs indicate that a computer on the 2001:db8:1:11::0/64 network is repeatedly refreshing a web page. This is causing a Denial-of-Service (DoS) attack against Server3. Until the client can be identified and cleaned, you must block HTTP and HTTPS access to that network with an access list.

#### Step 1: Configure an ACL that will block HTTP and HTTPS access.

Configure an ACL named BLOCK_HTTP on R1 with the following statements.

a.     Block HTTP and HTTPS traffic from reaching Server3.  
R1(config)# `deny tcp any host 2001:db8:1:30::30 eq www`  
R1(config)# `deny tcp any host 2001:db8:1:30::30 eq 443`  
b.     Allow all other IPv6 traffic to pass.

#### Step 2: Apply the ACL to the correct interface.

Apply the ACL on the interface closest to the source of the traffic to be blocked.

#### Step 3: Verify the ACL implementation.

Verify that the ACL is operating as intended by conducting the following tests:  
=    Open the web browser of PC1 to http://2001:db8:1:30::30 or https://2001:db8:1:30::30. The website should appear.  
=    Open the web browser of PC2 to http://2001:db8:1:30::30 or https://2001:db8:1:30::30. The website should be blocked.  
=    Ping from PC2 to 2001:db8:1:30::30. The ping should be successful.

### Part 2: Configure, Apply, and Verify a Second IPv6 ACL

The logs now indicate that your server is receiving pings from many different IPv6 addresses in a Distributed Denial of Service (DDoS) attack. You must filter ICMP ping requests to your server.

#### Step 1: Create an access list to block ICMP.

Configure an ACL named BLOCK_ICMP on R3 with the following statements:

a.     Block all ICMP traffic from any hosts to any destination. 
b.     Allow all other IPv6 traffic to pass.

#### Step 2: Apply the ACL to the correct interface.

In this case, ICMP traffic can come from any source. To ensure that ICMP traffic is blocked, regardless of its source or any changes that occur to the network topology, apply the ACL closest to the destination.

#### Step 3: Verify that the proper access list functions.

a.     Ping from PC2 to 2001:db8:1:30::30. The ping should fail.  
b.     Ping from PC1 to 2001:db8:1:30::30. The ping should fail.  
c.     Open the web browser of PC1 to http://2001:db8:1:30::30 or https://2001:db8:1:30::30. The website should display.

### Notes

[BACK TO MAIN](https://github.com/lfost42/networking)