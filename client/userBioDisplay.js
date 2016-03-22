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

var UserBioDisplay = React.createClass({
  getInitialState: function() {
    return {
      showDetails: true
    } 
  },

  toggleDetails: function(){
    this.setState({
      showDetails: !this.state.showDetails
    });
  },

  renderDetails: function(){
      var showStuff = this.state.showDetails;
      if(showStuff){
        return "hello"
      } else {
        null;
      }
    },

	render: function(){
    
		return(
        		<div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        			<div className='container show-me'>
        			 <div className='jumbotron jumbo'>
        			   <div className="row">
        			
        			    <section className= "row col-lg-3 "> 
        			     	<img src={this.props.profileImage} className='img-thumbnail'/>
        			    </section>

        			     <section className="row col-lg-7 col-lg-offset-1">
        			      <h3 className="legend"> A little about me.</h3>
        			      <p className="legend"> {this.props.bio} </p>
                    <div className="">
                      <button onClick={this.toggleDetails} type="button" className="btn btn-default btn-lg edit-button">
                      <span className="glyphicon glyphicon-pencil" ></span> 
                      </button>
                    </div>
                    <div className="contentToggleDetail">
                       {this.renderDetails()}
                    </div>
                  </section>
               
                    <br/><br/><br/>
        			    </div>
        			  </div>
        			</div>
        		</div>
        	)
        }
       });







module.exports = UserBioDisplay;