import Ember from 'ember';

export default Ember.Controller.extend({
    showAppName: false,
    appName: "Chirper",
    showingComposeModal: false,
    actions: {
        toggleComposeModal: function() {
            this.set('showingComposeModal', !this.get('showingComposeModal'));
        }
    }
});
