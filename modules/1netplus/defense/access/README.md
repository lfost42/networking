## Configure Access Control

Authentication and authorization are distinct security processes in the world of identity and access management (IAM). Authentication uses passwords and other identification methods to confirm that users are who they say they are. By contrast, authorization assigns user permissions to the resources that the user is allowed access. Configure authentication and authorization for network services including wireless network access, email, and FTP services.

### Walkthrough

### Part 1: Configure and Use AAA Authentication Credentials

#### Step 1: Configure user accounts on the AAA server.

a.     Navigate to Headquarters and then click the Wiring Closet, which is the tall, black server chassis in the bottom left corner.  
b.     On the right side Rack, click AAA-RADIUS server > Services tab, and then AAA under SERVICES.  
c.     Turn on the AAA service.  
d.     Under User Setup, add the following usernames / passwords.  
    o    user1 / PASSuser1!  
    o    user2 / PASSuser2!

#### Step 2: Configure wireless authentication on HQ-Laptop-1.

a.     Navigate back to HQ and click HQ-Laptop-1. It is located two rooms to the right from the Wiring Closet.  
b.     Click Config tab, and then under INTERFACE, click Wireless0.  
c.     In the SSID box, type HQ-INT.  
d.     In the Authentication area, click WPA2.  
e.     In the User ID box, enter user1; and enter PASSuser1! in the Password box.  
f.      In IP Configuration section, click DHCP. What a few moments for the DHCP offer to be accepted. Verify HQ-Laptop-1 received IP addressing and is assigned an address in the 192.168.50.0/24 network.

Note: It may be necessary to toggle between Static and DHCP to force Packet Tracer to converge on your settings. Also, click Check Results to make sure you correctly configured the AAA server and the wireless settings on the laptop. Clicking Check Results may also force Packet Tracer to converge. If everything is configured correctly, proceed to the configuration of HQ-Laptop-2, and then return to HQ-Laptop-1 and check its IP configuration. This issue is typically resolved.

#### Step 3: Configure wireless authentication on HQ-Laptop-2.

a.     Click HQ-Laptop-2, which is located in the top right corner of HQ.  
b.     Repeat the previous steps to configure the wireless settings for HQ-Laptop-2, using the user2 credentials.  
c.     Verify HQ-Laptop-2 received IP addressing and is assigned an address in the 192.168.50.0/24 network.

### Part 2: Configure and Use Email Services

#### Step 1: Activate email services and configure email user accounts.

a.     Navigate to the Wiring Closet.  
b.     On the right side Rack, click Mail server > Services tab, and then EMAIL under SERVICES.  
c.     Turn on both the SMTP and POP3 services.  
d.     Set the domain to mail.cyberhq.com.  
e.     Under User Setup, enter the following usernames / passwords. Click the plus sign (+) to add each pair.  
    o    HQuser1 / Cisco123!  
    o    HQuser2 / Cisco123~  
    o    BRuser1 / Cisco123-  
    o    BRuser2 / Cisco123+  

Step 2: Configure email clients.

a.     Navigate back to HQ and click the PC 1-1, which is in the bottom corner.  
b.     Click Desktop tab > Email. The Configure Mail settings open.  
c.     Enter the following information:  
    o    Your Name: Suk-Yi  
    o    Email Address: HQuser1@mail.cyberhq.com  
    o    Incoming & Outgoing Email Server(s): mail.cyberhq.com  
    o    User Name: HQuser1  
    o    Password: Cisco123!  
Click Save.  
d.     Use the information in the table to configure email settings for 2-3, HQ-Laptop-1, and Net-Admin. PC 2-3 is in the office below the conference room. The Net-Admin PC is in the Wiring Closet.

#### Step 3: Send an email as Suk-Yi.

a.     On PC 1-1, click Compose.  
b.     Compose an email Ajulo at BRuser1@mail.cyberhq.com. Enter a subject and email message of your choice. Click Send when finished. Note: Packet Tracer may take several seconds to converge before you see a Send Success message at the bottom of the window. Note: Packet Tracer does not grade this step. Verify you correctly completed this step by receiving the email sent by Suk-Yi on Ajulo's PC 2-3.  
c.     Navigate to Ajulo's PC 2-3. If necessary, click Desktop tab > Email.  
d.     Click Receive and read the email from Suk-Yi.

### Part 3: Configure and Use FTP Services

#### Step 1: Activate the FTP Service.

a.     Navigate to the Wiring Closet.  
b.     On the right side Rack, click FTP server > Services tab, and then FTP under SERVICES.  
c.     Turn on the FTP service.

#### Step 2: Create the FTP user accounts.

a.     Under User Setup enter the follow usernames, passwords, and privileges. Click Add to add each user. Note: Be sure username malia does not include Delete as one of the user privileges.  
b.     Verify each user is correctly created and close the server.

#### Step 3: Transfer files between Net-Admin and the FTP server.

a.     Click Net-Admin PC, and then click Desktop > Command Prompt.  
b.     Enter the command ftp 192.168.75.2 to log in to the FTP server, and then authenticate with username sukyi and password cisco123.  
c.     Enter the dir command to list the files on the FTP server.  
d.     Use the get command to download aMessage.txt.  
e.     Quit the FTP session.  
f.      Close the Command Prompt, click Text Editor, and then File > Open. Open the downloaded file aMessage.txt.  
g.     Click File > New. Type a text message your choice.  
h.     Click File > Save and save the new file as aMessage_new.txt. Close the Text Editor.  
i.      Click Command Prompt and then log back in to the FTP server as user sukyi.  
j.      Use the put command to upload aMessage_new.txt. `put aMessage_new.txt`  
k.     Quit the FTP session.

#### Step 4: Verify FTP user privileges are working as configured.

a.     Navigate back to HQ and click HQ-Laptop-1, Desktop tab > Command Prompt.  
b.     Login to the FTP server at 192.168.75.2 with username malia and password cisco123.  
c.     Use the delete command to attempt to remove the newly uploaded file aMessage_new.txt. `delete aMessage_new.txt`  
d.     Use the rename command to attempt to change the name of aMessage_new.txt to aMessage_rename.txt. `rename aMessage_new.txt aMessage_rename.txt`  
e.     Quit the FTP session and close the HQ-Laptop-1 window.

### Notes

I completed this activity during the Network Support and Security course and moved it here because it fit better. It's very weird to keep working with FTP knowing how inherently insecure it is. I was also surprised to learn that it is still being used for some things in the IT space. 

[BACK TO MAIN](https://github.com/lfost42/networking)