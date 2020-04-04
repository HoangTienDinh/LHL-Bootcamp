# Day 5 Notes

*Dependency Injection*
"passing an object the things it needs rather than having the object access them itself".
It makes for code that is much more modular and testable.

### Summary of OOP features that we covered:
We learned the following features about Classical OOP:
* A class is a blueprint from which instance of objects can be created (i.e. newTask vs a task)
* Classes have data in the form of value properties and behavior in the form of methods
* Classes can inherit behaviour from other classes using the extends keyword
* Subclasses can override methods that are inherited in their superclass
* JavaScript also gives us get and set keywords to more cleverly define methods that are data getters and setters




It also has you spending time with the request module, but if you're already feeling comfortable with that, then skip that part
It's a bit old and uses var, doesn't employ arrow functions for callbacks, but feel free to modify those parts as you work through the tutorial
Use port 3000 not 7000 in your Vagrant machine. Not all the ports are accessible from your host machine, but 3000 is