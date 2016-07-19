This repo will one day become an example for https://github.com/VeliovGroup/meteor-autoform-file

For now I'm this a working example of https://github.com/VeliovGroup/Meteor-Files with easy integration with autoform as a replacement for yogiben:autoform-file.

I have an autoform field input now!

'''javascript
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
'''

Any pull requests welcome.