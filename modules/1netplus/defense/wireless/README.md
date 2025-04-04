## Configure Wireless Router Hardening and Security

Configure wireless security on a wireless router and harden the router to help mitigate potential attacks. 

### Walkthrough

###Part 1: Configure Basic Security Settings for a Wireless Router

#### Step 1: Change the default router password.

a.     Click the Home, and then click Home Office PC > Desktop tab > Web Browser.  
b.     Connect to the Home Wireless Router at 192.168.0.1.  
c.     Enter admin for both the username and password.  
d.     Click the Administration tab, and then enter cisconetacadrocks! for both password fields.  
e.     Scroll to the bottom and click Save Settings.  
f.      The router requests that you re-authenticate. Log back in with the username admin and the new password, and then click Continue.

#### Step 2: Disable remote management.

a.     From the Administration tab, click the Disabled next to Remote Management.  
b.     Click Save Settings.

Note: This change will cause Home Wireless Router to reset. Close the Web Browser and click Fast Forward Time (Alt+D). Return to Home Office PC and click IP Configuration to check if IP addressing is reassigned. If necessary, toggle between DHCP and Static until Home Office PC receives IP addressing from the 192.168.0.1/24 network. Close IP Configuration, and then click Web Browser. Navigate to 192.168.0.1, and re-authenticate in preparation for the next part of the activity.

### Part 2: Configure Wireless Router Network Security

#### Step 1: Configure and broadcast the HomeNet SSID.

The practice of turning off the SSID broadcast could potentially make the network a higher target for attack because the administrator is trying to hide it.

a.     Click the Wireless tab, and then for each of the three networks, click the Enabled for SSID Broadcast.  
b.     For each of the three networks, change the SSID from default to HomeNet.  
c.     Click Save Settings.

#### Step 2: Configure security for the HomeNet wireless networks.

a.     From the Wireless tab, click Wireless Security.  
b.     For each of the three networks, configure the following:

o    Security Mode: WPA2 Personal  
o    Encryption: AES  
o    Passphrase: ciscorocks

c.     Click Save Settings.

#### Step 3: Configure security for the GuestNet wireless network.

a.     From the Wireless tab, click Guest Network.  
b.     For each of the three networks, click Enable Guest Profile, and then configure the following:

o    SSID: GuestNet  
o    Broadcast SSID: Enabled  
o    Security Mode: WPA2 Personal  
o    Encryption: AES  
o    Passphrase: guestpass

c.     Click Save Settings.

### Part 3: Configure Wireless Clients

#### Step 1: Configure wireless connectivity for the laptops.

a.     Click Home Laptop 1 located in the living room, and then click Desktop tab > PC Wireless.  
b.     Click the Connect tab.  
c.     Click the first entry for HomeNet, and then click Connect.  
d.     Security is already set to WPA2-Personal. Enter ciscorocks for the Pre-shared Key, and then click Connect.  
e.     Click the Link Information tab. You should see message "You have successfully connected to the access point". If you are still not connected, check the configuration of the Home Wireless Router and try this Step again.  
f.      Close the PC Wireless window and click IP Configuration. If the laptop still has an address from the "169" network, toggle between DHCP and Static until it receives IP addressing from the 192.168.0.0/24 network.  
g.     Repeat this step for Home Laptop 2 in the home office, but use the first entry for GuestNet. Enter guestpass as the Pre-shared Key.

#### Step 2: Configure wireless connectivity for the IoT devices.

a.     In the home office, on the top shelf of the bookcase, click the Home_Webcam.  
b.     Click the Config > Wireless0.  
c.     Enter HomeNet for the SSID.  
d.     Choose WPA2-PSK for the Authentication, and then enter ciscorocks for the PSK Pass Phrase.  
e.     Under IP Configuration, click DHCP and verify the device received IP addressing from the 192.168.0.0/24 network. Toggle between DHCP and Static, if necessary.  
f.      Repeat this Step for both the Home_Siren, located in the living room above the bookcase, and Home Doors.

### Part 4: Verify Connectivity and Security Settings

#### Step 1: Test internet connectivity for wireless laptops.
a.     Click Home Laptop 1 > Desktop tab > Web Browser.  
b.     Navigate to www.ptsecurity.com. Packet Tracer may take several seconds to converge. You can click Fast Forward Time (Alt+D) to speed up the process until the Data Center Public Web page loads.  
c.     Repeat this step for Home Laptop 2.

#### Step 2: Configure security for GuestNet and HomeNet interconnectivity.

a.     Use any method you wish to determine the IP address for Home Laptop 1.  
b.     Click Home Laptop 2 > Desktop tab > Command Prompt.  
c.     Enter ping command followed by the IP address for Home Laptop 1. Home Laptop 1 responds to the pings indicating that Home Laptop 2 can access devices on the home network. You will need to set the router to prevent hosts on different networks from communicating with each other.  

d.     From Home Office PC, if necessary, log back into the Home Wireless Router configuration web page at 192.168.0.1.  
e.     Click the Wireless tab, and then the Guest Network submenu.  
f.      Uncheck the box next to Allow guests to see each other and access the local network, and then click Save Settings.  
g.     From Home Laptop 2, attempt to ping Home Laptop 1 again. The pings should now fail. This indicates that the hosts are not allowed to communicate between the two networks.

### Notes

[BACK TO MAIN](https://github.com/lfost42/networking)