/*
- VisionBoard

  - PictureApp

  - GoalsApp
    - GoalBoxDisplay
      - CommentForm
    - GoalBoxForm
   

  - UserBioApp
    - UserBioDisplay
    - UserBioForm
 */
 var UserBioDisplay = require('./userBioDisplay');
 var UserBioForm = require('./userBioForm');
 var React = require('react');
 

var UserBioApp = React.createClass({
	render: function(){

    if(this.props.user.local){
      var u = this.props.user.local
    } else {
      var u = {};
      u.bio = "none";
      u.profileImage = "none";
    }
		return(
			<div>
        <UserBioDisplay bio={u.bio} profileImage={u.profileImage}/>
    
			   <UserBioForm ableToUpdateBio = { this.props.handleBioSubmit }/>
			</div>
			)
	}
});

module.exports = UserBioApp;