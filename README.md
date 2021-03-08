# WEEK THREE

## LABS

### Introduction to javascript

- Request - req
- request - res
- client side = ui 
- server side = api & database

_The JavaScript Engine_
![image](https://res.cloudinary.com/practicaldev/image/fetch/s--pHrmQNaA--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/q0vxo5pcm6qjo14k0ami.png)

-Process of engine
Network, Cache, Worker
Script loaded as a UTF-16 byte stream and passed to byte stream decoder

- Byte stream decoder creates Tokens from the decoded stream of bytes in Ascii

- Keyword gets identified and sent to the pre-parser and the parser

- The pre parser handles code that may be used later on but doesn't need to be read at the time.

- When the code is needs to be executed it gets sent to the parser

``console.log("Hello World)``\
``function add(a,b) {``\
``return a+be``\
``}``\
``var res = add(10, 11)``\
``console.log (res)``\

- The parser creates nodes based on the tokens, it then creates an Abstract Syntax tree

- 

## LECTURE
