## Configure Initial Router Settings

Basic routing configuration tasks. 

### Walkthrough

### Part 1: Verify the Default Router Configuration

#### Step 1: Establish a console connection to R1.

a.     Choose a Console cable from the available connections.  
b.     Click PCA and select RS 232.  
c.     Click R1 and select Console.  
d.     Click PCA > Desktop tab > Terminal.  
e.     Click OK and press ENTER. You are now able to configure R1.

#### Step 2: Enter privileged mode and examine the current configuration.

You can access all the router commands from privileged EXEC mode. However, because many of the privileged commands configure operating parameters, privileged access should be password-protected to prevent unauthorized use.

a.     Enter privileged EXEC mode by entering the enable command. Open a configuration window.  

Router> `enable`  

Notice that the prompt changed in the configuration to reflect privileged EXEC mode.

b.     Enter the show running-config command.

Router# `show running-config`

What is the router’s hostname?  
How many Fast Ethernet interfaces does the Router have?  
How many Gigabit Ethernet interfaces does the Router have?  
How many Serial interfaces does the router have?  
What is the range of values shown for the vty lines?

c.     Display the current contents of NVRAM.

Router# `show startup-config`

Why does the router respond with the startup-config is not present message? Close a configuration window. 

### Part 2: Configure and Verify the Initial Router Configuration

To configure parameters on a router, you may be required to move between various configuration modes. Notice how the prompt changes as you navigate through the IOS configuration modes.

#### Step 1: Configure the initial settings on R1.

Note: If you have difficulty remembering the commands, refer to the content for this topic. Open a configuration window

a.     Configure R1 as the hostname. 

`conf t`
`hostname R1`

b.     Configure Message of the day text: Unauthorized access is strictly prohibited. 

`banner motd $Unauthorized access is strictly prohibited.$`

c.     Encrypt all plain text passwords.

`service password-encryption`

Use the following passwords:  
1)    Privileged EXEC, encrypted: itsasecret  
2)    Console: letmein

`line console 0`
`password letmein` // console password
`login`
`exit`
`enable secret itsasecret` // EXEC password
`exit`
`copy run start`

#### Step 2: Verify the initial settings on R1.

a.     Verify the initial settings by viewing the configuration for R1. What command do you use?  `show running-config`
b.     Exit the current console session until you see the following message:

`exit`  
R1 con0 is now available

c.     Press ENTER; you should see the following message:  

Unauthorized access is strictly prohibited.  
User Access Verification  

Why should every router have a message-of-the-day (MOTD) banner? If you are not prompted for a password before reaching the user EXEC prompt, what console line command did you forget to configure?

R1(config-line)# `login`

d.     Enter the passwords necessary to return to privileged EXEC mode. If you configure any more passwords on the router, are they displayed in the configuration file as plain text or in encrypted form? Close a configuration window. 

### Part 3: Save the Running Configuration File

#### Step 1: Save the configuration file to NVRAM.

a.     Open a configuration window. You have configured the initial settings for R1. Now back up the running configuration file to NVRAM to ensure that the changes made are not lost if the system is rebooted or loses power.

`copy run start`  

What command did you enter to save the configuration to NVRAM? `copy run start`
What is the shortest, unambiguous version of this command? `cop r st`
Which command displays the contents of the NVRAM?  `show start`

b.     Verify that all the parameters configured are recorded. If not, analyze the output and determine which commands were not executed or were entered incorrectly. You can also click Check Results in the instruction window.

#### Step 2: Optional: Save the startup configuration file to flash.

Although you will be learning more about managing the flash storage in a router in later chapters, you may be interested to know that, as an added backup procedure, you can save your startup configuration file to flash. By default, the router still loads the startup configuration from NVRAM, but if NVRAM becomes corrupt, you can restore the startup configuration by copying it over from flash. Complete the following steps to save the startup configuration to flash.

a.     Examine the contents of flash using the show flash command:

`enable`
R1# `show flash`

How many files are currently stored in flash?  
Which of these files would you guess is the IOS image?  
Why do you think this file is the IOS image?  

b.     Save the startup configuration file to flash using the following commands:

R1# `copy startup-config flash`

The router prompts you to store the file in flash using the name in brackets. If the answer is yes, then press ENTER; if not, type an appropriate name and press ENTER.

c.     Use the show flash command to verify the startup configuration file is now stored in flash.

### Notes

This course keeps talking about the CCNA. I think I'm going to really enjoy working on that one after NET+!

[BACK TO MAIN](https://github.com/lfost42/networking)