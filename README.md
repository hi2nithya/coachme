# Twilio Programmable Chat Quickstart and Demo

[![N|Solid](https://static0.twilio.com/marketing/bundles/archetype/img/logo-wordmark--red.svg)](https://www.twilio.com/chat)




# With Twilio Programmable Chat 

  - Add chat to any app with SDKs for mobile and web. Powered by the Twilio cloud.
  - Cut development effort. Quickly create mobile-friendly chat experiences with Twilio’s full-featured SDKs and global real-time messaging infrastructure.
  - Cut development effort. Quickly create mobile-friendly chat experiences with Twilio’s full-featured SDKs and global real-time messaging infrastructure.
  
  
 # Remixing   
 
 Go to config.js and populate the following value from your Twilio Account. 
 
    accountSid: '',
    apiKey: '',
    apiSecret: '',
    serviceSid: '',

If you do not know how to get these values , read the section "Server Component" below 


# Components 


A complete secure chat app typically has 2 components
  - [1] Server ,that vouches for the identity of clients and grants them specific permissions to perform various functions in a chat.
  - [2] Chat clients (web or mobile), that acts as the User Interface wanting to communicate


### Server Component
This is needed to generate access tokens.
Access tokens are the way to grant permissions and authentication to chat clients when using Twilio Programmable Chat. You need the following information to generate an access token:


| Entities | Details |
| ------ | ------ |
| Twilio Account SID | Go to your [Programmable Chat dashboard](https://www.twilio.com/console/chat/getting-started ). In the top right-hand corner, click Show API Credentials. (You will not use the Auth Token. More on that below.) |
| Chat Service SID |Each Twilio Programmable Chat app has its own channels, conversations, message history and participants. You’ll need a Chat Service SID to identify which Chat app you’d like to use. On the [Chat dashboard](https://www.twilio.com/user/account/ip-messaging/getting-started), click Manage Your Programmable Chat Service Instances, create a new IPM Service |
| Twilio API Keys | If you’ve worked with Twilio before, you may be used to copying the AUTH_TOKEN  along with the ACCOUNT_SID. The problem with a single authentication token is that if it gets compromised (e.g. you accidentally commit it to a public repo) then you have to change it in all of your Twilio apps. Instead, we’ll create a set of API keys for use by this app only. Visit your [API keys dashboard](https://www.twilio.com/user/account/ip-messaging/dev-tools/api-keys), create a set of API Keys |
| Identity | Since a Twilio Chat Client can be an app on multiple devices, you should assign an identity ( representing a user of chat ) and endpoint ( representing a device/app for that user ) . If you want to allow a user to log in from multiple devices and apps ( ex- multiple tabs on a computer ), design your endpoint accordingly. |



### Client Component
#####  Login Module 

![N|Solid](https://cdn.glitch.com/dc415a0e-213d-4b6e-9f5b-181c910c5294%2FsignInWindow.png?1490112727810)

  - A drop down to collect information on Channel Visibility
  - A unique identifier to be associated with a chat member uniquely
  - Name of the Channel 
  - An actionable link ( in the form of a button) , to consume information from above 3 elements and pass it to the server component built above to get authentication token and initialize chat client. Button also serves the purpose of hiding login module and surfacing up the chat module ( since this is a one-page app) 
```sh
onclick="startChat();showChatWindow();hideSignInWindow()"
```








##### Chat Modules 


###### Chat Window 
![N|Solid](https://cdn.glitch.com/dc415a0e-213d-4b6e-9f5b-181c910c5294%2FchatWindow.png?1490112729897)


###### Chat Message 
![N|Solid](https://cdn.glitch.com/dc415a0e-213d-4b6e-9f5b-181c910c5294%2FchatMessage.png?1490112728457)
Chat Messages are added dynamically , so the static HTML elements are those for Chat Window as shown below


```sh
<!-- START : CHAT SECTION  -->
<section id="chat-section" >
<div class="chatArea" id="chatWindow" hidden="true">
     <!-- start chat-history -->
      <div class="scrollable chatMessages" id="chatHistory" >
      </div>
      <!-- end chat-history -->
      <div class="typingArea">
          <div >
              <input id="chatInput" name="chatInput" type="text" placeholder="Type your Message" class="form-control input-md" autofocus>
          </div>
          <div>
              <label id="statusMessages"></label>
          </div>
       </div>
    </div> 
</section>
```

"chatHistory" is where we will dynamically add HTML elements to display the new/old messages using Chat’s listener events and javascript. 


##### Let’s make the parts moving 
Now that we have the skeleton ready, lets power it up with Twilio Programmable Chat and get it working 

Do the groundwork for chat 
 - On click of the button above  the actions performed are 
    - Hide Login Module and show the chat module
    - Get Authentication token by passing the memberName and
    - Initialize Chat Client 
      -  Get Channel 
          -   If Channel exist, join channel
          -   If Channel Does Not exist, create and Join Channel 
          -   Listen to relevant event handlers (Channel events mentioned at the end of this document)   
      -  Show UI Message about joining of channel


Start Chatting
We can now use Twilio Programmable Chat powered chat client sitting in your webpage to start sending, receving the message. These are the steps to do that 
 - Listen to “typingArea” , and when user presses enter, send the message out 


License
----

MIT


**Happy Chatting !**

