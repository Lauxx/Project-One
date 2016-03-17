
 var React = require('react');

 var PictureBoardForm = React.createClass({
 	getInitialState: function (){
 		return {
 			imageUrls: []

 		}
 	},

 	handleImageChange: function(e){
 		

 	},

 	render: function(){
 		return (

 			<div className= 'container'>
 				<form action="" method="POST" role="form">
 					<legend>Upload your vision images</legend>
 				
 					<div className="form-group">
 						<label for="">label</label>
 						<input type="text" className="form-control" id="" placeholder="img url here"/>
 					</div>
 				
 					
 				
 					<button type="submit" className="btn btn-primary">Submit</button>
 				</form>
 			</div>


 			)
 	}

 });

 module.exports = PictureBoardForm;




