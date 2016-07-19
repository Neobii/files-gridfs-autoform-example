#Autoform file with and gridFS

##This repo will one day become an example for https://github.com/VeliovGroup/meteor-autoform-file

For now I'm this a working example of https://github.com/VeliovGroup/Meteor-Files with easy integration with autoform as a replacement for yogiben:autoform-file.

This is how you define your file upload input.  Make sure to reference https://github.com/VeliovGroup/Meteor-Files on how to set up your collections.

Don't forget to meteor npm install to install gridFS deps!

```javascript
profilePicId: {
		type: String,
		label: "Profile Pic Id",
		autoform: {
			afFieldInput: {
				type: "fileUpload",
				collection: 'Images'
			}
		}
	},
```

Any pull requests welcome.

###TODO
The biggest thing I need to do before I package this up, is the ability to specify collection in the afFieldInput definition