/*
- VisionBoard

  -PictureBoardDisplay
  -PictureBoardForm

  - GoalsApp
    - GoalBoxDisplay
      - CommentForm
    - GoalBoxForm
   

  - UserBioApp
    - UserBioDisplay
    - UserBioForm
 */




var React = require('react');

var PictureBoardDisplay = React.createClass({

 

	render: function(){
		console.log(this.props.imagesArr);
		var self = this; 
		var allImages = this.props.imagesArr.map(function(image){
			 return (
			 			<div className="col-xs-4">
			 				<img src = {image} height="250px" width="360px"/>
			 			</div>

			 	)
		})

		return (
		<div>
			<div className = "container">
				<div className="jumbotron">
			 		<div className="row">
			 			{allImages}
			 			
			 		</div>
			 	</div>
			</div>
		</div>

			)
	}
});









module.exports = PictureBoardDisplay;