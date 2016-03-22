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

  getInitialState: function() {
    return { 
      activePicture: ""
    };
  },

  handlePicClick: function(picName) {

    var newArr = this.props.imagesArr.map(function(item){
      return item
    });

        console.log(newArr, "newARR");
        console.log(newArr.length, "newArr length")

    var i = this.props.imagesArr.indexOf(picName);

        console.log("INDEX", i);

    
    if (i = 0) {
      delete myArr(i);
    } else {
      newArr.splice(i, 1);
    };

        console.log(newArr, "END ARR");

    var o = {imageUrl: newArr}

    $.ajax({
      url: this.props.urlPicture + this.props.userId,
      dataType: 'JSON',
      type: 'PUT',
      data: o,
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
			</div>
		</div>
	)

	}
});


module.exports = PictureBoardDisplay;
