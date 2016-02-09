#### Form State Handler
Here's an idea I've been throwing around my head for a few days. 

The need stemmed from having many modules dependent on the state of a single module. So I have a structure that many modules are interested in, and they all need to be notified when this module is updated. 
It seems like a textbook observer pattern, so I implemented something close to it. You have your module register to the subject and as it gets updated the subscribers are notified. I have considered a little more abstraction.
Specifically in splitting up the way you update the subject and what is responsible for publishing these accepted changes. Ultimately I figured for a basic example I could have the update mechanism and the publishing mechanism as one. 

While reviewing this: 
Please pay attention to the registering of behavior to specific change actions. I am catering to simplicity while developing these related modules.  
