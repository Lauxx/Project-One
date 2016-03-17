var React = require('react');

var PictureBoardDisplay = React.createClass({



	render: function(){
		console.log(this.props.imagesArr);
		var self = this; 
		var image = this.props.imagesArr.map(function(image){
			 return (
			 			<div className="col-xs-4">
			 				<img src = {image.imageUrl} />
			 			</div>

			 	)
		})

		return (
			<div>
			<div className = "container">
				<div className="jumbotron">
			 		<div className="row">
			 			{image}
			 			
			 		</div>
			 	</div>
			</div>
			</div>

			)
	}
});









module.exports = PictureBoardDisplay;