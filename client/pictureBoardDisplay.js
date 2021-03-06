/*
- UserBox
- VisionBoard

  -PictureBoardDisplay
    -PictureBoardForm

  - GoalsApp
    - GoalBoxDisplay
      - CommentForm
    - GoalBoxForm
   

  - UserBioImageApp
    - UserBioApp
   
 */
var PictureBoardForm = require('./pictureBoardForm');
var React = require('react');

var PictureBoardDisplay = React.createClass({

  getInitialState: function() {
    return { 
      activePicture: ""
    };
  },

  handlePicClick: function(picName) {

    var newArr = this.props.imagesArr.map(function(item){
      return item;
    });

        console.log(newArr, "newARR");
        console.log(newArr.length, "newArr length")

    var i = newArr.indexOf(picName);
        console.log("INDEX", i);
      if (newArr.length == 1) {
        newArr.length = 0;
      } else {
        newArr.splice(i, 1);
      };

        console.log(newArr.length, newArr, "END ARR");

    var updateArr = {imageUrl: newArr};

    $.ajax({
      url: this.props.urlPicture + this.props.userId,
      dataType: 'JSON',
      type: 'PUT',
      data: updateArr,
      success: function(data){
        console.log(data, 'image record is updated');
        this.props.loadImageUrlFromServer();
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

    if(!this.props.guest) {
      var showForm = <PictureBoardForm loadUserFromServer={ this.props.loadUserFromServer } loadImageUrlFromServer={ this.props.loadImageUrlFromServer } imagesArr={ this.props.imagesArr }
            urlPicture={ this.props.urlPicture } userId={ this.props.userId } guest={ this.props.guest } />
    } else {
      var showForm = null;
    };

		

		var self = this;
    var picName = " ";
    if(!this.props.guest) {
      var allImages = this.props.imagesArr.map(function(image){
       return (
            <div className="col-xs-4 ">
              <img className="pictureBoardDisplay" src = { image } /> 
              <a className="glyphicon glyphicon-remove-circle" onClick={ self.handlePicClick.bind(null, image) }></a>
            </div>

        )
      }) 
    } else {
		var allImages = this.props.imagesArr.map(function(image){
			 return (
			 			<div className="col-xs-4 ">
			 				<img src = { image } className="pictureBoardDisplay"/>
			 			</div>

			 	)
      })
		};

  return (
		<div>
			<div className = "container">
		 		<div className="row">
		 			{ allImages }		
			 	</div>
        <div>
          { showForm }
        </div>
			</div>
		</div>
	)

	}
});


module.exports = PictureBoardDisplay;
