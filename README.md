This repo will one day become an example for https://github.com/VeliovGroup/meteor-autoform-file

For now I'm this a working example of https://github.com/VeliovGroup/Meteor-Files with easy integration with autoform as a replacement for yogiben:autoform-file.

This is what I did to get it integrated easily into a form.

'''javascript
{{#autoForm collection="Persons" type="insert" id="insertPerson"}}
	{{> afQuickField name="name"}}
	{{> uploadImage fieldName="profilePicId"}}
	{{> uploadImage fieldName="backgroundPicId"}}
	<button class="btn btn-primary" type="submit">Submit</button>
{{/autoForm}}
'''

Any pull requests welcome.