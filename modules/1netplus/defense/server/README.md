## Configure Server-Based Authentication with TACACS+ and RADIUS

Configure router R2 to support server-based authentication using the TACACS+ protocol. The TACACS+ server has been pre-configured with the following:  
o    Client: R2 using the keyword tacacspa55  
o    User account: Admin2 and password admin2pa55

Finally, you will configure router R3 to support server-based authentication using the RADIUS protocol. The RADIUS server has been pre-configured with the following:  
o    Client: R3 using the keyword radiuspa55  
o    User account: Admin3 and password admin3pa55

The routers have also been pre-configured with the following:  
o    Enable secret password: ciscoenpa55  
o    OSPF routing protocol with MD5 authentication using password: MD5pa55

### Walkthrough

### Part 1: Configure Server-Based AAA Authentication Using TACACS+ on R2

#### Step 1: Test connectivity.

=   Ping from PC-A to PC-B.  
=   Ping from PC-A to PC-C.  
=   Ping from PC-B to PC-C.

#### Step 2: Configure a backup local database entry called Admin.

For backup purposes, configure a local username of Admin2 and a secret password of admin2pa55 [on R1]. 

`en`  
`ciscoenpa55`  
`conf t`  
`username Admin2 secret admin2pa55`

#### Step 3: Verify the TACACS+ Server configuration.

Click the TACACS+ Server. On the Services tab, click AAA. Notice that there is a Network configuration entry for R2 and a User Setup entry for Admin2.

#### Step 4: Configure the TACACS+ server specifics on R2.

Configure the AAA TACACS server IP address and secret key on R2.

Note: The commands tacacs-server host and tacacs-server key are deprecated. Currently, Packet Tracer does not support the new command tacacs server.

R2(config)# `tacacs-server host 192.168.2.2`  
R2(config)# `tacacs-server key tacacspa55`

#### Step 5: Configure AAA login authentication for console access on R2.

Enable AAA on R2 and configure all logins to authenticate using the AAA TACACS+ server. If it is not available, then use the local database. 

`aaa new-model`  
`aaa authentication login default group tacacs+ local`

#### Step 6: Configure the line console to use the defined AAA authentication method.

Configure AAA authentication for console login to use the default AAA authentication method.  

`line console 0`
`login authenticaion default`  

#### Step 7: Verify the AAA authentication method.

Verify the user EXEC login using the AAA TACACS+ server.

`end`
`exit`
`Admin2`
`admin2pa55`

### Part 2: Configure Server-Based AAA Authentication Using RADIUS on R3

#### Step 1: Configure a backup local database entry called Admin.

For backup purposes, configure a local username of Admin3 and a secret password of admin3pa55.

`en`  
`ciscoenpa55`  
`conf t`  
`username Admin3 secret admin3pa55`

#### Step 2: Verify the RADIUS Server configuration.

Click the RADIUS Server. On the Services tab, click AAA. Notice that there is a Network configuration entry for R3 and a User Setup entry for Admin3.

#### Step 3: Configure the RADIUS server specifics on R3.

Configure the AAA RADIUS server IP address and secret key on R3.

Note: The commands radius-server host and radius-server key are deprecated. Currently Packet Tracer does not support the new command radius server.

`radius-server host 192.168.3.2`  
`radius-server key radiuspa55`

#### Step 4: Configure AAA login authentication for console access on R3.

Enable AAA on R3 and configure all logins to authenticate using the AAA RADIUS server. If it is not available, then use the local database.

#### Step 5: Configure the line console to use the defined AAA authentication method.

Configure AAA authentication for console login to use the default AAA authentication method.

`aaa new-model`  
`aaa authentication login default group tacacs+ local`  
`line console 0`  
`login authentication default`  

#### Step 6: Verify the AAA authentication method.

Verify the user EXEC login using the AAA RADIUS server.

`end`  
`exit`  
`Admin3`  
`admin3pa55`  

#### Step 7: Check results.

Your completion percentage should be 100%. Click Check Results to see feedback and verification of which required components have been completed.

### Notes

This was an exercise in using ? and running efficient searches after setting username and secret. I'm sure I'll be doing this again for CCNA.   

[BACK TO MAIN](https://github.com/lfost42/networking)