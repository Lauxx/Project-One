{/*
- VisionBoard

  - PictureApp

  - GoalsApp
    - GoalBoxDisplay
    - GoalBoxForm
    - CommentBox
      - CommentList
        - Comment
      - CommentForm

  - UserBioApp
    - UserBioDisplay
    - UserBioForm

 */}
 

var UserBioDisplay = React.createClass({
  

	 render: function(){
    
		return(
		<div>
			<div className='container'>
			    <section className= "row col-xs-3">
			     {this.props.bio}
			      </section>
			     <section className="row">
			      <h4 > {this.props.profileImage} </h4>
			    </section>
			  </div>
			</div>
			)
	}
});