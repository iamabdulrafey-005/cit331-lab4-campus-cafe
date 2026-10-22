# HTTP observations (Lab 4, Task 1)


 Request method for index.html  GET 
 Status code with Disable cache ticked  200 OK 
 Status code on a normal reload  304 
 Status code for /nothing-here.html  404 Not Found 
 Value of the Content-Type response header  text/html; charset=UTF-8 
 Remote Address (IP and port)  127.0.0.1:5500 
 Protocol in the address bar (http or https)  http 

## Why is this address http and not https?
This address uses http because 127.0.0.1 is my  laptop  had so  traffic never travels across a network where someone could read it. HTTPS protects data in transit and here there is no transit to protect my data and its server fails 