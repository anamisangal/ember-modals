import defaultFor from 'ember-modals/utils/default-for';
import Ember from 'ember';

export default Ember.Mixin.create({

  /* You shouldn't need to call these actions directly. Use
  show() and hide() on the modal controller */

  actions: {

    renderModal: function(options) {
      var templateName = options.template;

      /* Assert the template exists */

      Ember.assert('Could not render the modal because no template was found with the name ' + templateName,
        this.container.has('template:' + templateName));

      /* Default to route's controller */

      options.controller = defaultFor(
        options.controller,
        this.get('controller.currentRouteName')
      );

      this.render(templateName, options);
    },

    removeModal: function(outlet, parentView) {
      this.disconnectOutlet({
        outlet: outlet,
        parentView: parentView
      });
    }

  },

});