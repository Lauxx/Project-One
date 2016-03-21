
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

 			<div className= 'container col-lg-4 col-lg-offset-4'>
 				<form action="" method="POST" role="form">
 					<legend>Upload your vision images</legend>
 				
 					<div className="form-group">
 						<label for="">label</label>
 						<input type="text" className="form-control" id="" placeholder="img url here"/>
 					</div>
 				
 					
 				
 					<button type="submit" className="btn btn-primary">Submit</button>
 				</form>
 				<br/><br/><br/>
 			</div>


 			)
 	}

 });

 module.exports = PictureBoardForm;




