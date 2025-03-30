## Connect Devices using Wireless Technologies
Use different wireless technologies to connect end devices in an office. 

### Walkthrough

### Part 1: Connect a Laptop to the Office WLAN
#### Step 1: Install a wireless module to a Laptop.
a.     Click the Laptop to open the configuration window.  
b.     Under the Physical tab, power off the Laptop by clicking the power button.  
c.     Remove the Ethernet module PT-LAPTOP-NM-1CFE from the laptop by dragging it from the Laptop to the list on the left.  
d.     Insert the wireless module WPC300N by dragging it from the list on the left to the Laptop.  
e.     Power on the Laptop.  

#### Step 2: Connect Laptop to the office WLAN.
a.     Click the Desktop tab and select the PC Wireless tool.  
b.     Click the Connect tab and wait until the Employee SSID WLAN is displayed. Note that you may have to click Refresh.  
c.     Click the Employee SSID to select it. Click Connect.  
d.     Enter Cisco123 as the pre-shared key and click Connect.  
e.     After connecting to the wireless network, close the PC Wireless window.  
f.      Click the Config tab and select Wireless0 in the left pane to verify in the IP Configuration section that the Laptop has been assigned an IP address.  
g.     Open the Web Browser from the Desktop. Navigate to office.srv to verify that the Laptop has connectivity.  
h.     Close the Laptop window.  

### Part 2: Connect Devices with Bluetooth Technology
Connect a Bluetooth speaker to a tablet installed with a music player via Bluetooth.

#### Step 1: Enable Bluetooth ports on devices.
a.     Click the Bluetooth Speaker.  
b.     Click the Config tab.  
c.     Click Bluetooth on the left pane and check that the Port Status is On. Note that the speaker is not paired with the Office Tablet.  

#### Step 2: Connect Bluetooth devices.
a.     Open the Office Tablet.  
b.     Click the Config tab.  
c.     Click Bluetooth in the left pane and check the On box for Port Status.  
d.     Click Discover and the Bluetooth Speaker device should be discovered.  
e.     Select the Bluetooth Speaker in the Devices list and click Pair. The status should change to “Paired, Connected”. If prompted for permission to connect, click Yes.  
f.      To test the Bluetooth connection, click the Desktop tab and select Music Player. Click Play/Stop to start the music. Note: Make sure your speaker is on.  
g.     Click Play/Stop again to stop the sound.  

### Part 3: Tether a Laptop to Use a Cellular Network via the Smartphone
Tether a laptop to a smartphone via Bluetooth. The laptop will use the cellular network to access a website.

#### Step 1: Enable Bluetooth on the Laptop.
a.     Click the User-Laptop. Select the Config tab.  
b.     Click Bluetooth on the left panel. Click On for the Port Status.  
c.     Leave the User-Laptop Bluetooth window open.  

#### Step 2: Connect a smartphone to the Cellular network and enable Bluetooth.
a.     Click the Smartphone to open the configuration window.  
b.     Click the Config tab. Check the On box for the Cellular Tethering setting in the Global Settings.  
c.     Click the 3G/4G Cell1 interface. Verify that the Smartphone has an IP address from the cellular network.
d.     Click Bluetooth in the left pane and check the On box for the Port status on the Smartphone.    

#### Step 3: Connect Bluetooth devices and tethering to laptop
a.     On the Bluetooth configuration for the Smartphone, click Discover to search for nearby Bluetooth enabled-devices.  
Note: If Smartphone does not appear after a while, move Smartphone closer to User-Laptop and click Discover again.  
b.     Select User-Laptop and click Pair. A pop-up window appears and asks for permission. Click Yes. The two devices are connected via Bluetooth.  
c.     Return to the User-Laptop. In the Bluetooth panel of the Config tab, highlight Smartphone and click Tether.  
d.     At the bottom pane of the Bluetooth configuration, notice that User-Laptop has now obtained an IP address.  
e.     To test connectivity, navigate to office.srv. Click Desktop > Web Browser. Enter office.srv in the URL field. You can fast forward time to speed up the process.  

### Notes
This lab was more straightforward than the last, possibly due to the time I had spent completng CertMaster labs. 
