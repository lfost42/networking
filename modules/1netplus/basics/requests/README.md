## Observe Web Requests

View the client/server traffic sent from a PC to a web server when requesting web services.

### Walkthrough

### Part 1: Verify connectivity to the web server.

a.     Click External Client and access the Command Prompt from the Desktop tab.  
b.     Use the ping command to reach the URL ciscolearn.web.com.

PC> ping ciscolearn.web.com

Notice the IP address included in the ping output. This address is obtained from the DNS server and resolves to the domain name ciscolearn.web.com. All traffic forwarded across a network uses source and destination IP address information.

c.     Close the Command Prompt window but leave the External Client desktop window open.

### Part 2: Connect to the web server.

a.     From the Desktop window, access the Web Browser.  
b.     In the URL block, type ciscolearn.web.com.

*Be sure to read the web page that is displayed. Leave this page open.

c.     Minimize the External Client window but do not close it.

### Part 3: View the HTML code.

a.     From the Logical topology, click ciscolearn.web.com server.  
b.     Click the Services tab > HTTP tab. Then next to the index.html file click (edit).  
c.     Compare the HTML markup code on the server that creates the Web Browser display page on the External Client. This may require that you re-maximize the External Client window if it shrunk when you opened the server window.  
d.     Close both the External Client and web server windows.

### Part 4: Observe traffic between the client and the web server.

a.     Enter Simulation mode by clicking the Simulation tab in the lower right-hand corner.  
b.     Double click the Simulation Panel to unlock it from the PT window. This allows you to move the Simulation Panel to view the entire network topology.  
c.     View traffic by creating a Complex PDU in Simulation mode.

1)    From the Simulation Panel, select Edit Filters.  
2)    Click the Misc tab to verify that only the boxes for TCP and HTTP are selected.  
3)    Add a Complex PDU by clicking the open envelope located above the Simulation mode icon.  
4)    Click the External Client to specify it as the source. The Create Complex PDU window will appear.  

d.     Specify the Create Complex PDU settings by changing the following within the Complex PDU window:  

1)    Under PDU Settings, Select Application should be set to HTTP.  
2)    Click the ciscolearn.web.com server to specify it as the destination device. Notice the IP address of the web server will appear in the destination box within the complex PDU window  
3)    For the Starting Source Port, enter 1000.  
4)    Under Simulation Settings, select Periodic Interval and type 120 seconds.

e.     Create the PDU by clicking the box Create PDU in the Create Complex PDU window.  

1)    Observe the traffic flow by clicking Play in the Simulation Panel. Speed up the animation by using the play control slider.

When the Buffer Full window appears, click View Previous Events to close the window.

2)    Scroll through the Event List. Notice the number of packets that traveled from source to destination. HTTP is a TCP protocol, which requires connection establishment and acknowledgement of receipt of packets, considerably increasing the amount of traffic overhead.

### Notes

I think the next two should be more interesting!

[BACK TO MAIN](https://github.com/lfost42/networking)