## Explore Device Configuration Using the CLI (console)
Use terminal emulation software to connect to the console of a device for the purpose of updating the configuration.

A new switch, Office-SW2, is being added to the network. Before placing a networking device into a network, the device must be configured and tested. Many types of networking devices, such as switches and routers, may not be preconfigured with enough information to make them accessible through an Ethernet or wireless connection. It may be necessary to load an initial configuration using another method. A console connection and a terminal emulation application provide a convenient way to access the device without having to be on an active network.

### Walkthrough

### Part 1: Connect to the Device Using a Console Connection.
In this part, you will use the terminal emulation program on the laptop to access the command line interface (CLI) on the Office-SW2 switch and view the configuration information.

Console connections are made between a laptop or computer and the networking device using a cable designed to provide a direct cable connection. In this Packet Tracer activity, the cable is identified as Console and is shown as a light blue cable.

#### Step 1: Use the Terminal Emulation application on the laptop to access the CLI on the switch.
Use the Terminal Emulation program on the laptop to access the CLI on the switch.  
a.     Click the Laptop0 on the table in the Physical Workspace.  
b.     Click the Desktop tab in the configuration window.  
c.     Open the Terminal application. The Terminal Configuration window contains the settings that will be used to communicate with the switch. Accept the defaults and click OK.  
d.     A terminal window will open and the switch console will be displayed. If the switch is not yet fully powered up, messages may scroll on the screen. Wait until the scrolling stops and the message “Press RETURN to get started!” appears on the screen. Press ENTER.

#### Step 2: Access the Privileged EXEC mode to view configuration information.
Cisco networking devices open in User EXEC mode by default when accessing the device through a console connection. User EXEC mode provides access to the device to view information about the status and operation of the device. In order to alter the configuration on the device, you must enter the Privileged EXEC mode.

a.     At the Switch> prompt, enter a question mark (?) and press ENTER. A list of commands that are available in User EXEC mode will be displayed.  
b.     To enable the Privilege EXEC mode, type enable at the prompt and press ENTER.  

Switch> `enable`  
Switch#

Notice that the prompt has changed to indicate Privileged EXEC mode.  
c.     Enter a question mark (?) at the prompt. A list of available commands will be displayed. If the message --More- appears at the bottom of the screen, press the spacebar to advance to the next screen.  
d.     Enter the show running-config command to view the current configuration running on the device and press ENTER.  

Switch# `show running-config`

The configuration information will display one screen at a time. Press CTRL-C to return to the switch prompt. The running configuration consists of configuration information that a Cisco IOS device uses to operate on a network. In this case, because the switch is new, it has a minimal default configuration.  

### Part 2: Copy Configuration Information to the Device

In this part, you will copy configuration information into the device. You will change the device name and set a password for the console connection.

#### Step 1: Enter global configuration mode.
To configure a device, you must first enter the configuration mode. Enter the command configure terminal and press ENTER.

Switch# `configure terminal`  
Enter configuration commands, one per line. End with CNTL/Z.
Switch(config)#  

Notice how the switch prompt changes to indicate that you are now in the configuration mode.  

#### Step 2: Copy the commands and paste the commands to the switch.
a.     Copy the commands shown below. Select the list of commands below and press CTRL-C to copy to the clipboard.  

```hostname Office-SW2
line con 0
password Cisco123
login
end```

b.     To paste the commands into the switch, right-click at the switch prompt and select Paste from the drop-down menu. The commands will appear on the console as shown:

Switch(config)# `hostname Office-SW2`
Office-SW2(config)# `line con 0`
Office-SW2(config-line)# `password Cisco123`
Office-SW2(config-line)# `login`
Office-SW2(config-line)# `end`
Office-SW2#
%SYS-5-CONFIG_I: Configured from console by console

The commands are now active on the switch. Commands entered in configuration mode take effect immediately and become part of the running configuration on the device. Press `ENTER`.

Notice that switch prompt has changed to reflect the new name assigned to the device.

#### Step 3: Test the new configuration settings.
a.     The new configuration commands set a password for the console connection. To test that configuration change, type `exit` and press `ENTER`.

b.     The screen will refresh and the Press `RETURN` to get started! message will display. Press `ENTER`.  
c.     Enter the password `Cisco123` and press `ENTER`.  
Note: The password will not display on the screen. The User EXEC prompt will appear.  

### Part 3: Save the Updated Configuration to the Device
In this part, you will save the configuration changes to permanent memory on the device. If the configuration changes are not saved, they will be lost if the device loses power or is intentionally rebooted. When a Cisco IOS devices starts, it reads the configuration file that is permanent memory and loads it into the running configuration in RAM. Configuration changes are only made to the running configuration. The changes must be saved so that they will become available to a device on startup.

#### Step 1: Use the enable command to enter the Privileged EXEC mode on the switch.

Office-SW2> `enable`
Office-SW2#

#### Step 2: Copy the current running configuration to the startup configuration.  
a.     Use the copy running-config startup-config command to save the current configuration running on the device to the startup configuration that will load when the device powers up. Press `ENTER` to accept the default filename.  

Office-SW2# `copy running-config startup-config`  
Destination filename [startup-config]?  
Building configuration...  
[OK]  

b.     To verify that the configuration changes were saved properly, reload the device using the reload command. Press ENTER to proceed. Reloading the router will reboot the IOS software and IOS will load the saved configuration file. If the new configuration was made and saved in permanent memory, the device will prompt you for a password to access the device console.  

Office-SW2# `reload`  
Proceed with reload? [confirm]  

c.     Press `ENTER` when the message `Press RETURN to get started!` appears. If the configuration was saved successfully, the User Access Verification message will be displayed.  
d.     Enter the password `Cisco123` at the password prompt. If the password is correct, the User EXEC prompt will appear.

### Notes
This was an introduction to Cisco. We had quite a few of these labs in CertMaster so no surprises in this one!

[BACK TO MAIN](https://github.com/lfost42/networking)
