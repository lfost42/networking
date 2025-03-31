## Lab Template

File Transfer Protocol (FTP) is a commonly used application to transfer files between clients and servers on the network. The server is configured to run the service where clients connect, login, and transfer files. FTP uses port 21 as the server command port to create the connection. FTP then uses port 20 for data transfer.

### Walkthrough

### Part 1: Upload a file to an FTP server.

In this part, you will locate the file sampleFile.txt and upload it to an FTP server.

#### Step 1: Locate the file.

a.     Click PC-A.  
b.     Click Desktop.  
c.     Click Command Prompt.  
d.     At the prompt, click ? to list the available commands.  
e.     Enter dir to see the files on the PC. Notice that there is a sampleFile.txt file in the C:\ directory.

```C:\> dir  

Volume in drive C has no label.  
Volume Serial Number is 5E12-4AF3  
Directory of C:\  

12/31/1969 17:0 PM 26 sampleFile.txt  
26 bytes 1 File(s)```

#### Step 2: Connect to the FTP server.

a.     FTP to the FTP server at 209.165.200.226 or ftp.pka.

```C:\> ftp 209.165.200.226  
Trying to connect...209.165.200.226  
Connected to 209.165.200.226```

b.     Enter the username student and password class to gain access.

```220- Welcome to PT Ftp server  
Username:student  
331- Username ok, need password  
Password:  
230- Logged in  
(passive mode On)```

#### Step 3: Upload a file to an FTP server.

a.     Enter ? to see the commands available in the ftp client.

```ftp> ?  
?  
cd  
delete  
dir  
get  
help  
passive  
put  
pwd  
quit  
rename  
ftp>```

b.     Enter dir to see the files available on the server.

```ftp> dir  

Listing /ftp directory from 192.168.1.3:  
0 : asa842-k8.bin 5571584  
1 : asa923-k8.bin 30468096  
2 : c1841-advipservicesk9-mz.124-15.T1.bin 33591768  
3 : c1841-ipbase-mz.123-14.T7.bin 13832032  
<output omitted>```

c.     Enter put sampleFile.txt to send the file to the server.

```ftp> put sampleFile.txt  

Writing file sampleFile.txt to 209.165.200.226:  
File transfer in progress...  

[Transfer complete - 26 bytes]

26 bytes copied in 0.08 secs (325 bytes/sec)  
ftp>```

d.     Use the dir command again to list the contents of the FTP server to verify that the file has been uploaded to the FTP server.

### Part 2: Download a file from an FTP server.

You can also download a file from an FTP server. In this part, you will rename the file sampleFile.txt and download it from the FTP server.

#### Step 1: Rename the file on an FTP server.

a.     At the ftp> prompt, rename the file sampleFile.txt to sampleFile_FTP.txt.

```ftp> rename sampleFile.txt sampleFile_FTP.txt  
Renaming sampleFile.txt  
ftp>  
[OK Renamed file successfully from sampleFile.txt to sampleFile_FTP.txt]  
ftp>```

b.     At the ftp> prompt, enter dir to verify the file has been renamed.

#### Step 2: Download the file from the FTP server.

a.     Enter the command get sampleFile_FTP.txt to retrieve the file from the server.

```ftp> get sampleFile_FTP.txt  
Reading file sampleFile_FTP.txt from 209.165.200.226:  
File transfer in progress...  

[Transfer complete - 26 bytes]  

26 bytes copied in 0.013 secs (2000 bytes/sec)  
ftp> ```  

b.     Enter quit to exit the FTP client when finished.  
c.     Display the contents of the directory on the PC again to see the image file from the FTP server.

#### Step 3: Delete the file from the FTP server.

a.     Log into the FTP server again to delete the file sampleFile_FTP.txt.  
b.     Enter the command to delete the file sampleFile_FTP.txt from the server.  
c.     Enter quit to exit the FTP client when finished.  

### Notes

I had only previously used ftp in a gui so this was new!

[BACK TO MAIN](https://github.com/lfost42/networking)