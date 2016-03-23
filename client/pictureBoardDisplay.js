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

		console.log(this.props.imagesArr);

		var self = this;
    var picName = " ";
		var allImages = this.props.imagesArr.map(function(image){
			 return (
			 			<div className="col-xs-4 ">
			 				<img src = { image } height="250px" width="100%"/>
              <a onClick={ self.handlePicClick.bind(this, image) }> clickMe! </a>
			 			</div>

			 	)
		})

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
