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
 var React = require('react');

var UserBioDisplay = React.createClass({
  

	 render: function(){
    
		return(
		<div>
			<div className='container'>
			    <section className= "row col-xs-3">
			     
			     <img src={this.props.profileImage} className='img-thumbnail'/>
			      </section>
			     <section className="row">
			      <h4> {this.props.bio} </h4>
			    </section>
			  </div>
			</div>
			)
	}
});

module.exports = UserBioDisplay;