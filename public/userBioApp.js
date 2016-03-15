{/*
- VisionBoard

  - PictureApp

  - GoalsApp
    - GoalBoxDisplay
       - CommentBox
        - CommentList
          - Comment
        - CommentForm
    - GoalBoxForm
   

  - UserBioApp
    - UserBioDisplay
    - UserBioForm

 */}
 

var UserBioApp = React.createClass({
	render: function(){

    if(this.props.user.local){
      var u = this.props.user.local
    } else {
      var u = {};
      u.bio = "none";
      u.profileImage = "none";
    }
    console.log("USER BIO APP")
		return(
			<div>
        <UserBioDisplay bio={u.bio} profileImage={u.profileImage}/>
    
			   <UserBioForm ableToUpdateBio = { this.props.handleBioSubmit }/>
			</div>
			)
	}
});