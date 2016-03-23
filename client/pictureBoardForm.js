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

  handleImageSubmit: function(e) {
    e.preventDefault();
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
 			<div className= 'container col-lg-4 col-lg-offset-8'>
 				<form role="form">
 					<p className="legend line">Upload image to your VisionBoard.</p>
 				
 					<div className="form-group">
 						<input type="text" className="form-control" id="" value={this.state.uploadImage} 
                    onChange={this.handleImageChange} placeholder="Ex. http://example-image.jpg"/>
 					</div>
 				
 					<button onClick={ this.handleImageSubmit } type="submit" className="legend button-color">Add Image</button>
 				</form>
 			</div>
		)
 	}

 });

 module.exports = PictureBoardForm;




