## Configure SSH

Secure a remote switch with password encryption and SSH.

### Walkthrough

### Part 1: Secure Passwords
a.     Using the command prompt on PC1, Telnet to S1. The user EXEC and privileged EXEC password is cisco.

`telnet 10.10.10.2`
`cisco`
`en`
`cisco`

b.     Save the current configuration so that any mistakes you might make can be reversed by toggling the power for S1. 

`copy running-config startup-config`

c.     Show the current configuration and note that the passwords are in plain text. `show running-config`  
d.     In the global configuration mode, enter the command that encrypts plain text passwords:

`conf t`
`service password-encryption`

e.     Verify that the passwords are encrypted. 

`exit`
`show running-config`

### Part 2: Encrypt Communications

#### Step 1: Set the IP domain name and generate secure keys.

It is generally not safe to use Telnet, because data is transferred in plain text. Therefore, use SSH whenever it is available.

a.     Configure the domain name to be netacad.pka.

`conf t`
`ip domain-name netacad.pka`

b.     Secure keys are needed to encrypt the data. Generate the RSA keys using a 1024 key length.

`crypto key generate rsa`  

Choose the size of the key modulus in the range of 360 to 2048 for your General Purpose Keys. Choosing a key modulus greater than 512 may take a few minutes.

`1024`  

#### Step 2: Create an SSH user and reconfigure the VTY lines for SSH-only access.

a.     Create an administrator user with cisco as the secret password.

`username administrator secret cisco`

b.     Configure the VTY lines to check the local username database for login credentials and to only allow SSH for remote access. Remove the existing vty line password.

S1(config)# `line vty 0 15`  
S1(config-line)# `login local`  
S1(config-line)# `transport input ssh`  
S1(config-line)# `no password cisco`

### Part 3: Verify SSH Implementation

a.     Exit the Telnet session and attempt to log back in using Telnet. The attempt should fail.  
b.     Attempt to log in using SSH. Type ssh and press Enter without any parameters to reveal the command usage instructions. Hint: The -l option is the letter “L”, not the number 1.  

`ssh`
`ssh -l administrator 10.10.10.2`
`cisco`

c.     Upon successful login, enter privileged EXEC mode and save the configuration. If you were unable to successfully access S1, toggle the power and begin again at Part 1.

`en`
`cisco`
`copy run start`
`exit`

### Notes

I had a hard time setting the domain name for some reason. I'd reach the end, see it in startup config, and it would still say it's incorrect. 

At some point I redid the domain name after Part 2.a and it finally took. So try that if you're having the same issue. 

[BACK TO MAIN](https://github.com/lfost42/networking)