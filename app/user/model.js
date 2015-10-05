import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    username: DS.attr('string'),
    numberOfChirps: Ember.computed('chirps', function() {
        return this.get('chirps').get('length');
    }),
    numberOfFollowing: Ember.computed('followees', function() {
        return this.get('followees').get('length');
    }),
    numberOfFollowers: Ember.computed('followers', function() {
        return this.get('followers').get('length');
    }),
    aboutMe: DS.attr('string'),
    joinedAt: DS.attr('date'),
    chirps: DS.hasMany('chirp'),
    followees: DS.hasMany('user', { inverse: 'followers' }),
    followers: DS.hasMany('user', { inverse: 'followees' })
});
