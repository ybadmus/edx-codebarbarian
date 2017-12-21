var mongoose = require('mongoose');
var productSchema = require('./user');

var User = mongoose.model('User', productSchema);

var u = new User({
  profile: { username: 'vkarpov15' }
});

 console.log(u);
 console.log("");

modifyUserProfile(u, 'http://pbs.twimg.com/profile_images/550304223036854272/Wwmwuh2t.png');
// modifyUserData can **only** modify
// user.profile, not user.data
function modifyUserProfile(user, picture, callback) {
  user.profile.picture = picture;
  user.save(function(error, user) {
    // handle result
  });
}
console.log(u)


