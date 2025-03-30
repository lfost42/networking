## Configure a Wireless Router and Client
Connect the correct cables to the correct devices, connect devices to a home wireless router, and configure the router to provide IP addresses to network clients. Additionally, set up a wireless LAN for the home network. 

### Walkthrough

### Part 1: Connect the Devices

The work area shows the interior of your friend’s house. Scroll the window to get a sense of the layout of the house and the location of the devices. In this part, you will connect all the labeled devices.

#### Step 1: Connect the coaxial cables.

Natsumi's cable company delivers internet and video services to her home through a coaxial cable. The cable is connected to an outlet in her home. A splitter device separates the internet data service from the video service. This enables the two services to be connected to the appropriate devices. You will connect the internet service to the cable modem, and the video service to the television.

a.     In Network Components, click Connections (the lightning bolt).  
b.     Locate and click the icon for the Coaxial cable. It is the blue zigzag icon.  
c.     Click the Cable Splitter and select the Coaxial1 port.  
d.     Click the Cable Modem and select Port 0.  
e.     Repeat the previous steps to connect Coaxial2 on the Cable Splitter to Port 0 on the TV.  
f.      Click the TV, and then click ON for Status. If your connections are correct, you should see an image appear that represents a TV program.

#### Step 2: Connect the network cables.

There are two PCs in Natsumi’s house. They don’t have wireless LAN adapters, so they will be connected with Ethernet cables. The home wireless router is the center of the network. It enables devices that are configured on the home network to communicate with each other and the internet. The router includes a network switch that accepts wired connections for up to four hosts. You will connect the PCs to these ports.  

For the Home Wireless Router to access the internet over the cable TV provider network, the cable modem must be connected to the home wireless router internet port. This is done with a copper straight-through cable.  

a.     Click Connections, and then Copper Straight-Through cable. It looks like a solid black line.  
b.     Connect Port 1 on the Cable Modem to the Internet port of the Home Wireless Router.  
c.     Click the Office PC and connect the cable to the FastEthernet0 port. Locate the Home Wireless Router and click it. Connect the other end of the cable to the GigabitEthernet 1 port to complete the connection.  
d.     Repeat the previous steps to connect the Bedroom PC to the GigabitEthernet 2 port on the Home Wireless Router.  

The wired home network is now fully connected to the internet through the cable TV provider network.

### Part 2: Configure the Wireless Router

Most home wireless routers are configured by using a graphical user interface (GUI) that is accessed through your computer's web browser. In this part, you will access the home wireless router through the browser on the Office PC and configure Natsumi’s home network.  

#### Step 1: Access the home wireless router GUI.

a.     Click Office PC > Desktop tab, and then IP Configuration.  
b.     Click DHCP. DHCP will automatically configure the Office PC to be on the same IP network as the Home Wireless Router.  
c.     After a brief delay, the values for the IP Configuration should automatically update. The IPv4 address should start with the number 192. If it does not, click Fast Forward Time, which is just below the network topology in the lower left-hand corner. This will speed up the simulation of DHCP.  
d.     Make note of the address for the default gateway. The default gateway is the device that provides devices on the home network with access to outside networks, such as the internet. In this case, the default gateway address is the address of the Home Wireless Router.  
e.     Keeping the Office PC window open, close the IP Configuration window, and then click Web Browser. Enter the IP address of the Home Wireless Router (the default gateway address) into the URL box and click Go.  
f.      Newly installed home routers are configured with default credentials. Enter admin for both the User Name and Password. You should now see the GUI for the Home Wireless Router appear and are ready to configure Natsumi’s network. Adjust the window size, as necessary, to see more of the interface.

Note: Default passwords on real-world devices should be changed immediately because it is widely known, including threat actors.

#### Step 2: Configure basic settings.

Configure a new username and password for the wireless router and limit the number of IP addresses that DHCP will issue to host that are connected to the network.

a.     You are currently viewing configuration options under the Setup tab. Locate the Network Setup area. This is where you can configure the router’s DHCP server settings. Locate the Maximum Number of Users field, enter 10. Scroll down to the bottom of the page and click Save Settings. You must save settings on every page of the GUI that you make changes.  

Note: It is possible that you will lose your connection to the router. Click Go in the web browser to reload the GUI page. You may need to close the Web Browser, click IP Configuration, and toggle between DHCP and Static to refresh the IP addressing for Office PC. Then verify the Office PC has an IP address configuration that starts with 192, open the Web Browser again, enter the router's IP address, and re-authenticate with admin as the default credentials.  

b.     Click the Administration tab. Here, you can change the default admin password. Enter and confirm MyPassword1! as the new password. Scroll to the bottom of the page and click Save Settings.  

You will be prompted to login again. Enter admin as the User Name and MyPassword1! as the new password, and the click Continue.  

#### Step 3: Configure a wireless LAN.

At this point, you are ready to configure Natsumi's wireless network so that she can connect her wireless devices to the internet over Wi-Fi.  

a.     Scroll back to the top of the window, and then click the Wireless tab.  
b.     For the 2.4 GHz network, click Enable to activate the network radio.  
c.     Change the Network Name (SSID) from Default to MyHome. When people look for Wi-Fi networks to connect to, they will see this network name. The network name can be hidden, but this can make it a little harder for guests to connect to the network. Scroll to the bottom of the page and click Save Settings.  
d.     Now you will configure security on the MyHome network. This will prevent unauthorized people from connecting to the wireless network. Scroll back to the top of the window, and then click the Wireless Security under the Wireless tab.  
e.     Notice that security is currently disabled on all three wireless networks. You are only using the 2.4 GHz network. Click the dropdown menu for the 2.4 GHz network and select WPA2 Personal. This is the strongest security that this router offers for wireless networks.  
f.      More settings are revealed. WPA2 Personal requires a passphrase that must be entered by anyone who wants to connect to the wireless network. Enter MyPassPhrase1! as the Passphrase. Note that capitalization is important.  
g.     Scroll to the bottom of the page and click Save Settings, and then close the Web Browser for the Office PC.  

### Part 3: Configure IP Addressing and Test Connectivity

Now that the router is configured, in this part you will configure IP addressing for the PCs and laptop and verify that they can connect to the internet.

#### Step 1: Connect the laptop to the wireless network.

a.     Click the Laptop in the living room, and then the Desktop tab > PC Wireless.  
b.     Click the Connect tab. After a short delay you should the wireless network that you configured previously appear in the list of wireless network names.  
c.     Click the name of the network that you created, and then click the Connect button.  
d.     Enter the passphrase that you configured early for the wireless network in the Pre-shared Key field, and then click Connect. 

`MyPassPhrase1!`  

e.     Click the Link Information tab. You should see the message: You have successfully connected to the access point.  
f.      Click the More Information button to see details about the connection. If the IP address does not begin with 192, click the Fast Forward Time several times to speed up the simulation.  
g.     Close the PC Wireless app and open the Web Browser. Verify that the Laptop can now connect to skillsforall.srv, clicking Fast Forward Time until the page loads. This verifies that the Laptop has internet connectivity.  

#### Step 2: Test connectivity from the Office PC.

You know that the Office PC can connect to the network because you used it to configure the router. However, can it also access the internet? If it can, then you will know that the wired network is properly connected and configured.

a.     Click Office PC > Desktop tab > Web Browser.  
b.     Enter skillsforall.srv and click Go. After a brief delay, you should see the webpage appear. If necessary, click Fast Forward Time several times to speed up the convergence.  

Loading an external website verifies that internet connectivity for the Office PC.

#### Step 3: Configure the bedroom PC.

a.     For the Bedroom PC, open IP Configuration and set it to DHCP. Verify that the Bedroom PC received an IP address that begins with 192.  
b.     Close the IP Configuration window and open the Web Browser. Verify that the Bedroom PC can now connect to skillsforall.srv, clicking Fast Forward Time until the page loads. This verifies that the Bedroom PC has internet connectivity.  

You have now completed connecting network devices, configuring the router and wireless LAN, and configuring hosts to connect to the network. All devices should be able to connect to the internet. Your job is done and Natsumi has offered to cook dinner for you as a reward for your help.  

### Notes

[BACK TO MAIN](https://github.com/lfost42/networking)