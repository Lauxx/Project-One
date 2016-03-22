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

var UserBioForm = React.createClass({
	getInitialState: function(){
		return {profileImage: '', bio: ''};

	},

	handlePhotoChange: function(e){
		this.setState({ profileImage: e.target.value});
	},

	handleBioChange: function(e){
		this.setState({ bio: e.target.value});
	},

	handleBioSubmit: function(e){
		console.log("handleBioSubmit being called");
		e.preventDefault();
		var profileImage = this.state.profileImage.trim();
		var bio = this.state.bio.trim();

		console.log(profileImage, bio);
		
		this.props.ableToUpdateBio({ profileImage: profileImage, bio: bio });
		this.setState({ profileImage: '', bio: ''})
	},

	render: function(){
		return(
			<div>
				<div className='container'>
					<div className='jumbotron userbio-form-jumbo'>
					<div className='row col-lg-7'>
						<legend className='legend line'>Update User Bio</legend>
				  		<form onSubmit={ this.handleBioSubmit } role="form" className='row'>
				  			<div className="form-group margin-left">
				      			<label className="legend" htmlFor="">Profile Image</label>
				      			<input type="text" className="form-control col-xs-4" id="" 
				      			value={ this.state.profileImage } onChange={ this.handlePhotoChange }
				      			placeholder="Ex. http://example-image.jpg"/>
				      			<br/><br/><br/><br/>
								

				         		<label className="legend">Bio Update</label>
				         		<input type="text" name="" id="input" className="form-control col-xs-4" value={this.state.bio} 
                    			onChange={this.handleBioChange} placeholder="Update your bio here" title=""/>
				         	</div>
				         	<br/><br/>
							<button type="submit" className="legend button-color margin-left">Submit</button>
				     	</form>
				  		<br/><br/>
				  		</div>
				  	</div>
				</div>
			</div>

			)
	}
});

module.exports = UserBioForm;