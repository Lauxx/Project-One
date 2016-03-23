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

 var React = require('react');
 

var UserBioApp = React.createClass({
  getInitialState: function() {
    return {
      showDetails: true,
      profileImage: '', 
      bio: '',
    } 
  },

  toggleDetails: function(){
    this.setState({
      showDetails: !this.state.showDetails
    });
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
    
    this.props.handleBioSubmit({ profileImage: profileImage, bio: bio });
    this.setState({ profileImage: '', bio: ''})
  

  },


  renderDetails: function(){


      if(!this.props.guest) {
      var pencil =  <div className="">
                      <button onClick={this.toggleDetails} type="button" className="btn btn-default btn-lg edit-button">
                      <span className="glyphicon glyphicon-pencil" ></span> 
                      </button>
                    </div>
    } else {
      var pencil = null;
    };




      var showStuff = this.state.showDetails;
      if(showStuff){
   
         return(
          <div><br/><br/>
              <div className='container show-me'>
               <div className='jumbotron jumbo'>
                 <div className="row">
              
                  <section className= "row col-lg-3 col-lg-offset-0 col-xs-3 col-xs-offset-1"> 
                    <img src={this.props.profileImage} className='img-thumbnail'/>
                  </section>

                   <section className="row col-lg-7 col-lg-offset-1 col-xs-7 col-xs-offset-1">
                    <h3 className="legend"> A little about me.</h3>
                    <p className="legend"> {this.props.bio} </p>

                    {pencil}
                    
                  </section>
               
                    <br/><br/><br/>
                  </div>
                </div>
              </div>
            </div>
            )
      } else {
        return (

      <div>
        <div className='container'>
          <div className='jumbotron userbio-form-jumbo'>
          <div className='row col-lg-7 col-xs-8 col-xs-offset-1'>
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
              <button type="submit"  hide={this.state.showDetails} className="legend button-color margin-left">Submit</button>
              <button type="reset" onClick={this.toggleDetails}  className="legend button-color margin-left">Cancel</button>
              </form>
              <br/><br/>
              </div>
            </div>
        </div>
      </div>





          )
      }
    },

	render: function(){

    
		return(
			<div>
       {this.renderDetails()}
    

			</div>
			)
	}
});

module.exports = UserBioApp;

     