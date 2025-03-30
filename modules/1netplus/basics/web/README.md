## Connect to a Web Server

Observe how packets are sent across the Internet using IP addresses.

### Walkthrough

### Part 1: Verify connectivity to the web server

a.     Open the source host command prompt window. Select PC0.  
b.     Select the Desktop Tab > Command Prompt.  
c.     Verify connectivity to the web server. At the command prompt, ping the IP address of the web server by entering `ping 172.33.100.50`.

PC> ping 172.33.100.50

Pinging 172.33.100.50 with 32 bytes of data:

Reply from 172.33.100.50: bytes=32 time=0ms TTL=127
Reply from 172.33.100.50: bytes=32 time=0ms TTL=127
Reply from 172.33.100.50: bytes=32 time=0ms TTL=127
Reply from 172.33.100.50: bytes=32 time=0ms TTL=127

Ping statistics for 172.33.100.50:

Packets: Sent = 4, Received = 3, Lost = 1 (25% loss),  
Approximate round trip times in milli-seconds:  
Minimum = 0ms, Maximum = 0ms, Average = 0ms  

A reply verifies connectivity from the client to the destination web server. The reply may time out initially while devices load and ARP is performed.

d.     Close the command prompt window only, by selecting the x within the command prompt window. Be sure to leave the PC0 configuration window open.

### Part 2: Connect to the Web Server via the web client

a.     In the Desktop tab on PC0, select Web Browser.  
b.     Enter 172.33.100.50 into the URL and click Go. The web client will connect to the web server via the IP address, and open the web page.  

### Notes

This exercise was very fast, I was surprised there wasn't more to it. 

[BACK TO MAIN](https://github.com/lfost42/networking)