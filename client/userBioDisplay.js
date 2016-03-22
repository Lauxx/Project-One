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
		<div><br/><br/>
			<div className='container'>
			<div className='jumbotron jumbo'>
				<div className="row">
			
			    <section className= "row col-lg-3 ">
			     
			     	<img src={this.props.profileImage} className='img-thumbnail'/>
			    </section>

			     <section className="row col-lg-7 col-lg-offset-1">
			      <h3 className="legend"> A little about me.</h3>
			      <p className="legend"> {this.props.bio} </p>
			    </section>
			    <br/><br/><br/>
			    </div>
			  </div>
			</div>
			</div>
			)
	}
});







module.exports = UserBioDisplay;