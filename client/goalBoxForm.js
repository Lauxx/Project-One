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

var GoalBoxForm = React.createClass({
  getInitialState: function() {
    return {
     goalTitle: '', 
     intention: '',
     startDate: '', 
     endDate: '', 
     taskList: [],
     task: ''
   };
  },

  handleGoalTitleChange: function(e) {
    this.setState({goalTitle: e.target.value});
  },

  handleIntentionChange: function(e) {
    this.setState({intention: e.target.value});
  },

  handleStartDateChange: function(e) {
    this.setState({startDate: e.target.value});
  },

  handleEndDateChange: function(e) {
    this.setState({endDate: e.target.value});
  },

  handleTaskChange: function(e) {
    this.setState({task: e.target.value});
  },

  myArr: [],

  handleTaskSubmit: function(e) {
    e.preventDefault();
    var task = this.state.task;

    this.myArr.push(task);
    console.log(this.myArr);
    this.setState({task: ""});
    this.setState({ taskList: this.myArr});

  },

  handleSubmit: function(e) {
    e.preventDefault();
    var goalTitle = this.state.goalTitle.trim();
    var intention = this.state.intention.trim();
    var startDate = this.state.startDate.trim();
    var endDate = this.state.endDate.trim();
    var taskList = this.state.taskList;
    

    if(!goalTitle && !intention && !startDate && !taskList) {
      return;
    }
    this.props.ableToSubmit({goalTitle: goalTitle, intention: intention, startDate: startDate, endDate: endDate, taskList: taskList});
    this.setState({goalTitle: '', intention: '', startDate: '', endDate: '', taskList: '', task: ''});
    this.myArr.length = 0;

    alert("Congrats! Check out your new goal in the Goals dropdown menu.");
  },


	render: function(){

    var tL = this.myArr.map(function(t){
      return(
        <div>
          <ul>
            <li className="legend">{t}</li>

          </ul>


        </div>


        )
    });





    
		return(
			<div>
				<div className='container'>
          <div> <br/> <br/>
				  <div className='row col-xs-12 col-lg-6 col-lg-offset-3 friends-border'>
            <legend className='legend line'>Goal</legend>
				  		<form action="" method="POST" role="form" onSubmit={this.handleSubmit}>
				  			<div className="form-group">
                    <label className="row legend margin-left-intention" for="">Goal Title</label>
                    <input type="text" className="form-control" id="" value={this.state.goalTitle} 
                    onChange={this.handleGoalTitleChange} placeholder="Goal Title"/>
               </div>
                <div className="form-group">
				      			<label className="row legend margin-left-intention" for="">Intention</label>
				      			<input type="text" className="form-control" id="" value={this.state.intention} 
                    onChange={this.handleIntentionChange} placeholder="Intention"/>
				    	 </div>
				    	
                <div className="form-group">
				      			<label className="legend">Start Date</label><br/>
				         		<input type="date" name="" id="input" className="form col-xs-3 date-input" data-date-format="mm/dd/yyyy" value={this.state.startDate} 
                    onChange={this.handleStartDateChange} required="required" title=""/><br/>
				        </div>
				         	
                <div className="form-group">
				         		<label className='legend'>End Date</label><br/>
				         		<input type="date" name="" id="input" className="form col-xs-3 date-input" data-date-format="mm/dd/yyyy" value={this.state.endDate} 
                    onChange={this.handleEndDateChange} required="required" title=""/>
				         </div>
				         	<br/><br/>
                  <div>
                    {tL}
                  </div>
				         	<div className="form-group">
				         		<textarea  className='legend margin-left' value={this.state.task} onChange={this.handleTaskChange} placeholder="Enter your task here"></textarea>
				            <br/><br/>
                    <button type="submit" onClick={this.handleTaskSubmit} className="legend task-button-color margin-left">Add Tasks</button><br/><br/>
				        		<button type="submit" className="legend button-color margin-left" >Submit</button>
				        	</div>
				  		</form>
              </div>
				  	</div>
         </div>
			</div>
			)
	}
});

module.exports = GoalBoxForm;