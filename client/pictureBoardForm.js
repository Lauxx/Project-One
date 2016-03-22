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

 var PictureBoardForm = React.createClass({
 	getInitialState: function (){
 		return {
      uploadImage: '',
 		}
 	},

 	handleImageChange: function(e){
    this.setState({uploadImage: e.target.value});
  },

  handleImageSubmit: function(uploadImage) {

    var newArr = this.props.imagesArr.map(function(item){
      return item;
    });

        console.log(newArr, "newARR");
        console.log(newArr.length, "newArr length")

    var uploadImage = this.state.uploadImage;

    newArr.push(uploadImage);
    console.log(newArr, "view new array with added image");

        console.log(newArr.length, newArr, "END ARR");

    var addArr = {imageUrl: newArr};

    $.ajax({
      url: this.props.urlPicture + this.props.userId,
      dataType: 'JSON',
      type: 'PUT',
      data: addArr,
      success: function(data){
        console.log(data, 'image record is updated');
        this.props.loadImageUrlFromServer();
        this.setState({uploadImage: ""});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.urlPicture, status, err.toString());
      }.bind(this)
    });

  },

  componentDidMount: function(){
    this.props.loadImageUrlFromServer();
  },

 	render: function(){
 		return (
 			<div className= 'container col-lg-4 col-lg-offset-4'>
 				<form onSubmit={ this.handleImageSubmit } role="form">
 					<legend>Upload your vision images</legend>
 				
 					<div className="form-group">
 						<label for=""></label>
 						<input type="text" className="form-control" id="" value={this.state.uploadImage} 
                    onChange={this.handleImageChange} placeholder="add image URL here"/>
 					</div>
 				
 					<button type="submit" className="btn btn-primary">Add Image</button>
 				</form>
 			</div>
		)
 	}

 });

 module.exports = PictureBoardForm;




