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
		<div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			<div className='container'>
			
			    <section className= "row col-xs-3">
			     
			     <img src={this.props.profileImage} className='img-thumbnail'/>
			      </section>

			     <section className="row col-xs-4">
			      <h4> {this.props.bio} </h4>
			    </section>
			    <br/><br/><br/>
			  </div>
			</div>
			)
	}
});

module.exports = UserBioDisplay;