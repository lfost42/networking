## Implement Physical Security with IoT Devices

Install an IoT device to enhance home security. Configure all the IoT devices to connect to the wireless network and communicate with a remote IoT registration server.

### Walkthrough

### Part 1: Connect IoT Devices to the Network

#### Step 1: Connect the Siren to the Door

a.     Click Home and locate the Home_Siren and Home Doors in the living room.  
b.     In the toolbar at the bottom, click Connections > IoT Custom Cable, which is the second to last option.  
c.     Click Home_Siren > DO interface, and then click Home Doors > DO interface.  
d.     Press and hold the ALT key and then click the door to open and close it. Notice that opening the door will now activate the siren.

#### Step 2: Associate all IoT Devices to HomeNet wireless network.

a.     Locate the four wireless IoT devices:  
      o      Home_Siren  
      o      Home Doors  
      o      Home_Motion_Sensor (home office windows)  
      o      Home_Webcam (home office bookshelf) 

b.     Click Home_Siren, and then Config tab > Wireless0.  
c.     Configure the SSID and Authentication mode.  
      o      SSID: HomeNet  
      o      Authentication: WPA2-PSK  
      o      Pass Phrase: ciscorocks

d.     In IP Configuration, click DHCP. Verify the device received an IP address from the 192.168.0.0/24 network. Note: It may be necessary to toggle between Static and DHCP to force Packet Tracer to converge on your settings.  
e.     Record the MAC address for the IoT device. Format the addresses with colons between each two hexadecimal numbers instead of a period between each four hexadecimal numbers. This format is required for the next step when you will apply MAC address filtering.  
      o      Home_Siren  
      o      Home Doors  
      o      Home_Motion_Sensor  
      o      Home_Webcam  
f.      Repeat these steps for each IoT device.

#### Step 3: Configure MAC address filtering to allow the IoT devices.

a.     Click Home Office PC > Desktop tab > Web Browser.  
b.     Login to the Home Wireless Router at 192.168.0.1. Use admin as both the username and password.  
c.     Click Home Wireless Router > GUI tab.  
d.     Click Wireless, and then Wireless MAC Filter.  
e.     Verify that the filter is enabled for the 2.4 GHz wireless port and that it is set to permit PCs to access the wireless network.  
f.      Add the four IoT device MAC addresses to the table.  
g.     Scroll to the bottom and click Save Settings.  
h.     The Home Wireless Router will reboot. Close the Web Browser, and then click IP Configuration. If necessary, toggle the DHCP and Static buttons to renew the IP configuration so that Home Office PC has an IP address from the 192.168.0.0/24 network.

### Part 2: Add IoT Devices to the Registration Server

#### Step 1: Create an account on the ISP IoT Registration Server.

a.     On Home Office PC, close IP Configuration, and then click Web Browser.  
b.     Navigate to http://10.3.0.125.  
c.     Click Sign up now and create a new account with username HomeUser and password Pa$$w0rd.

#### Step 2: Register each IoT device with the Registration Server

Each of the four IoT devices must be registered with a registration server to remotely monitor and manage the device. Repeat the following steps for each IoT device.

a.     Click the device > Config tab > Settings under GLOBAL.  
b.     Scroll to the IoT section at the bottom of the page and enter the following information:  
      o      Select Remote Server  
      o      Server Address: 10.3.0.125  
      o      User Name: HomeUser  
      o      Password: Pa$$w0rd  
c.     Click Connect button. The button will change to Connecting and then to Refresh in a few seconds. The IoT device is now registered with the server. Note: If it does not change to Refresh then you may have entered the information incorrectly. Therefore, re-enter the information and repeat this step.  
d.     Repeat the above steps to register all the IoT devices.

#### Step 3: Verify all devices are registered.

a.     Return to the Web Browser on the Home Office PC. If necessary, browse to 10.3.0.125 and login with username HomeUser and password Pa$$w0rd.  
b.     Verify all four IoT devices are registered on the server. Open configuration window

### Part 3: Explore IoT Security Device Functionality

#### Step 1: Observe and control IoT devices from the registration server.

a.     From the Web Browser on the Home Office PC, click each section for each IoT device to display device details. What is the status of each device?  
b.     Click the red rectangle under Home Doors to activate it. What happened?  
c.     Click the door rectangle again to deactivate the device. What happened?  
d.     Click the green rectangle for Home_Webcam. What happened?  
e.     Click the green rectangle again to turn on the Home_Webcam.  
f.      Click the red circle for Home_Motion_Sensor. Nothing will happen because the motion sensor only sends information to the registration server. This is an example of a device that can be monitored only.

#### Step 2: Interact with the sensors in the home.

In Packet Tracer, the IoT devices can normally be activated by holding down the ALT key and then clicking the device (ALT-click). The Motion sensor is activated by holding down the ALT key and moving the mouse over the sensor. Have the IoT registration server screen visible for these actions.

a.     ALT-Click on the door. What happened?  
b.     ALT-Click on the webcam. What happened?  
c.     Depress the ALT key and move your mouse over the motion sensor. What happened?

### Notes

[BACK TO MAIN](https://github.com/lfost42/networking)