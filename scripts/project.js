//Onload Ready Starts Here
	$(document).ready(function(){	
		//Ractive Variable Declarion
		var ractive = new Ractive({
		el: document.body,
		template: '#ractiveTemplate', // Template ID
		data: {
			readonly:	false,					
			progress0: 	10,
			progress1: 	20,
			progress2: 	30,
			//Progress Bar Dropdown array Values  
			progressbars: [
					{ id: '0', name: 'Progress Bar1' },
					{ id: '1', name: 'Progress Bar2' },
					{ id: '2', name: 'Progress Bar3' }
				]
		}
		});
		// Progress Bar Incremental Decremental functionality starts here  
		ractive.on({
			prgsBarIncDec: function (event,val,act) {
				// Selection of Dropdown value
				var obj = $('#selProgressBar option:selected').val();
				//validation for empty dropdown
				if(obj == '' || obj == '- Please Select -'){$('.error').show();}else{$('.error').hide();}
				var progress = ractive.get('progress'+obj);
				if(act == 'plus'){
					 // Calculation to get the width of selected progress bar value in '+' sign
					progress=progress+parseInt(val);
				}else{
					 // Calculation to get the width of selected progress bar value in '-' sign
					progress=progress-parseInt(val);
					if(progress<=0){
						progress=0;
					}					
				}				
				//color defination
				if(progress > 100){
					var progressColor = 'progress-bar-danger';				
				}else if(progress > 49 && progress < 80 ){
					var progressColor = 'progress-bar-success';	
				}else if(progress > 79 && progress < 101 ){
					var progressColor = 'progress-bar-warning';	
				}
				//Set color to progress bar
				ractive.set( 'progressColor'+obj, progressColor);
				//Finally to set the progress bar value to the respective bar's
				ractive.set( 'progress'+obj, progress);
			}
		});

	});