Contact = new Meteor.Collection("contacts");


if (Meteor.isClient) {
  Template.contacts_list.contacts = function() {
    return Contact.find();
  };

  Template.add_contact.events({
    "submit form": function(event, template) {
      event.preventDefault();
      var fullname = template.find('.fullname').value;
      Contact.insert({ name: fullname })
    }
  });

  Template.contact_item.events({
    "click .delete": function(event, template) {
      event.preventDefault();
      Contact.remove({ _id: this._id });
    }
  });
}
