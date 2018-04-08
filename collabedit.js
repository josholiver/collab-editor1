import React, {Component} from 'react';
import fire from './fire';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';


var database = fire.database();
class Collabedit extends Component{
	
	  componentDidMount(){
    	var data = database.ref("Collabedit/collab");
    	data.on('value',function(snapshot){
    		// updatedata(postElement, snapshot.val());
    	});

    	 // database.ref("/Collabedit/collab").on()
  		}
	render(){

	return(
			<div>
				<AceEditor
					mode="javascript"
					theme="monokai"
					name="blah2"
					onLoad={this.onLoad}
					onChange={(val)=>{database.ref("/Collabedit/collab").set(val)}}
					fontSize={14}
					showPrintMargin={true}
					showGutter={true}
					highlightActiveLine={true}
					value={`function onLoad(editor) {
					console.log("i've loaded");
					}`}
					setOptions={{
					enableBasicAutocompletion: false,
					enableLiveAutocompletion: false,
					enableSnippets: false,
					showLineNumbers: true,
					tabSize: 2,
					}}/>
			</div>

		);
	}
}

export default Collabedit;

