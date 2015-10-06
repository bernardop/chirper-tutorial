import Ember from 'ember';

export default Ember.Component.extend({
    focusOnTextarea: Ember.on('didInsertElement', function() {
        Ember.run.scheduleOnce('afterRender', () => {
            this.$().find('textarea').focus();
        })
    }),

    chirpText: '',

    remainingChars: Ember.computed('chirpText', function() {
        return 140 - this.get('chirpText').length;
    }),

    noCharsLeft: Ember.computed('remainingChars', function() {
        return (this.get('remainingChars') < 0);
    }),

    store: Ember.inject.service(),

    actions: {
        postChirp: function() {
            var text = this.get('chirpText');

            this.get('store').findRecord('user', 1).then((user) => {
                var chirpData = {
                    text: text,
                    user: user,
                    createdAt: new Date()
                };

                var newChirp = this.get('store').createRecord('chirp', chirpData);

                return newChirp.save();
            }).then(() => {
                this.attrs.dismiss();
            });
        }
    }
});
