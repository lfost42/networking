## Verify IPv4 and IPv6 Addressing

Investigate a dual-stack implementation including documenting the IPv4 and IPv6 configuration for end devices, testing connectivity for both IPv4 and IPv6 using ping, and tracing the path from end to end for IPv4 and IPv6.

### Walkthrough

#### Step 1: Use ipconfig to verify IPv4 addressing.

a.     Click PC1 and open the Command Prompt.  
b.     Enter the ipconfig /all command to collect the IPv4 information. Fill-in the Addressing Table with the IPv4 address, subnet mask, and default gateway.  

   IPv6 Address....................: 2001:DB8:1:1::A
   IPv4 Address....................: 10.10.1.100
   Subnet Mask.....................: 255.255.255.224
   Default Gateway.................: FE80::1
                                     10.10.1.97 

c.     Click PC2 and open the Command Prompt.  
d.     Enter the ipconfig /all command to collect the IPv4 information. Fill-in the Addressing Table with the IPv4 address, subnet mask, and default gateway.  

   IPv6 Address....................: 2001:DB8:1:4::A
   IPv4 Address....................: 10.10.1.20
   Subnet Mask.....................: 255.255.255.240
   Default Gateway.................: FE80::3
                                     10.10.1.17

#### Step 2: Use ipv6config to verify IPv6 addressing.

a.     On PC1, enter the ipv6config /all command to collect the IPv6 information. Fill-in the Addressing Table with the IPv6 address, subnet prefix, and default gateway.  

   IPv6 Address....................: 2001:DB8:1:1::A
   IPv4 Address....................: 10.10.1.100
   Subnet Mask.....................: 255.255.255.224
   Default Gateway.................: FE80::1
                                     10.10.1.97

b.     On PC2, enter the ipv6config /all command to collect the IPv6 information. Fill-in the Addressing Table with the IPv6 address, subnet prefix, and default gateway.

   IPv6 Address....................: 2001:DB8:1:4::A
   IPv4 Address....................: 10.10.1.20
   Subnet Mask.....................: 255.255.255.240
   Default Gateway.................: FE80::3
                                     10.10.1.17

### Part 2: Test Connectivity Using Ping

#### Step 1: Use ping to verify IPv4 connectivity.

a.     From PC1, ping the IPv4 address for PC2. Was the result successful? `yes`  
b.     From PC2, ping the IPv4 address for PC1. Was the result successful? `yes`

#### Step 2: Use ping to verify IPv6 connectivity.

a.     From PC1, ping the IPv6 address for PC2. Was the result successful? `yes`  
b.     From PC2, ping the IPv6 address of PC1. Was the result successful? `yes`

### Part 3: Discover the Path by Tracing the Route

#### Step 1: Use tracert to discover the IPv4 path.

a.     From PC1, trace the route to PC2.

PC> `tracert 10.10.1.20`

b.     From PC2, trace the route to PC1. What addresses were encountered along the path? With which interfaces are the four addresses associated?   `10.10.1.17, 10.10.1.9, 10.10.1.6, 10.10.1.100` `G0/0, S0/0/1, S0/0/1, PC1`

#### Step 2: Use tracert to discover the IPv6 path.

a.     From PC1, trace the route to the IPv6 address for PC2.

PC> `tracert 2001:db8:1:4::a`

b.     From PC2, trace the route to the IPv6 address for PC1. What addresses were encountered along the path? With which interfaces are the four addresses associated? `2001:DB8:1:4::1, 2001:DB8:1:3::1, 2001:DB8:1:2::2, 2001:DB8:1:1::A` `G0/0, S0/0/1, S0/0/1, PC1`

### Notes

I appreciated a simpler activity after the rest of this course. 

[BACK TO MAIN](https://github.com/lfost42/networking)