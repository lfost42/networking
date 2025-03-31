## The Client Interaction

This activity will track the flow of traffic that happens when a web page is requested, how the IP address of the web page is resolved, and the web page is delivered.

### Walkthrough

### Part 1: Enter simulation mode.

When Packet Tracer starts, it presents a logical view of the network in realtime mode.

Click the Simulation Mode to enter simulation mode. The simulation mode icon is located in the bottom right-hand of the logical workplace.

### Part 2: Set Event List Filters.

In simulation mode, the default is to capture all events. You will use filters to only capture DNS and HTTP events.

a.     In the Event List Filters section, click Show All/None to clear all the checks.  
b.     Click Edit Filters. Under the IPv4 tab, select DNS. Under the Misc tab, select HTTP. Close the window when done. The Event List Filters shows DNS and HTTP as the only visible events. 

### Part 3: Request a web page from the PC.

You will open a simulated web browser on the PC and request a web page from the server.

a.     Click PC. Click Desktop tab and click Web Browser.  
b.     A simulated web browser opens. Type www.example.com into the URL box and click Go button to the right. Minimize the PC window.  

### Part 4: Run the simulation.

a.     In the Play Controls section of the Simulation Panel, click Play. The exchange between the PC and the server is animated and the events are added to the Event List.  

These events represent the PC’s request to resolve the URL to an IP address, the server’s providing of the IP address, the PC's request for the web page, the server’s sending the web page in two segments, and the PC’s acknowledging the web page.

b.     Click View Previous Event to continue when the buffer is full.  

### Part 5: Access a specific PDU.

a.     Restore the simulated PC window. Notice there is a web page displayed in the Web Browser. Minimize the simulated browser window.  
b.     In the Simulation Panel Event List section, the last column contains a colored box that provides access to detailed information about an event. Click the colored box in the first row for the first event. The PDU Information window opens.

### Part 6: Examine the contents of the PDU Information Window.

The first tab in the PDU Information window contains information about the inbound and/or outbound PDU as it relates to the OSI model. Click Next Layer >> repeatedly to cycle through the inbound and outbound layers and read the description in the box below the layers to get an overview of how the exchange works.  

Examine the PDU information for the other events to get an overview of the entire exchange process.  

### Notes

This would have been fascinating if I had trouble understanding how websites worked. 

[BACK TO MAIN](https://github.com/lfost42/networking)