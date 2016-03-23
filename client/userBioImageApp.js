/*
- UserBox
- VisionBoard

  -PictureBoardDisplay
    -PictureBoardForm

  - GoalsApp
    - GoalBoxDisplay
      - CommentForm
    - GoalBoxForm
   

  - UserBioImageApp
    - UserBioApp
   
 */

var UserBioApp = require('./userBioApp');
 var React = require('react');
 

var UserBioImageApp = React.createClass({

  render: function(){

    if(this.props.user.local){
      var u = this.props.user.local
    } else {
      var u = {};
      u.bio = "none";
      u.profileImage = "none";
      u.username = "none";
    }
    return(
      <div>
        <UserBioApp username={u.username} bio={u.bio} profileImage={u.profileImage} handleBioSubmit={ this.props.handleBioSubmit } guest={ this.props.guest } />
    
      </div>
      )
  }
});

module.exports = UserBioImageApp;

