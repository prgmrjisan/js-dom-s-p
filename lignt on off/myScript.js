alert("on the light");

	
	const btnOn = document.querySelector('.light_on img');
	const btnOff = document.querySelector('.light_off img');
	
	function lighton(){
	
	
		btnOn.style.display = "block";
		btnOff.style.display = "none";
		
		
		 const onof = document.querySelector('#drackopcity');
		 
		 onof.addEventListener('click', function(){
			 onof.classList.add('drakorwhite');
			 onof.classList.remove('drakorwhite');
			 
		 });
		
		
	}
		function lightoff(){
		btnOn.style.display = "none";
		btnOff.style.display = "block";
		
		
		 const onof = document.querySelector('#drackopcity');
		 
		 onof.addEventListener('click', function(){
			 onof.classList.remove('drakorwhite');
			 onof.classList.add('drakorwhite');
			 
		 });
	/*	
	 addEventListener('click', function(){
			document.querySelector('#drackopcity')[0].classList.remove('drakorwhite');
			document.querySelector('#drackopcity')[0].classList.add('drakorwhite');
			});
		
		 */
		 
		
	}

	

	/*
 const onof = document.querySelector('#drackopcity');
 
 onof.addEventListener('click', function(){
	 onof.classList.add('drakorwhite');
	 onof.classList.remove('drakorwhite');
	 
 });
*//*
	
	document.addEventListener('click', function lighton(){
		
		btnOn.style.display = "block";
		
	});
		document.addEventListener('click', function lightoff(){
		
		//const btnOff = document.querySelector('.light_off img');
		btnOff.style.display = "block";
		btnOn.style.display = "none";
		
	});
*/

		
	
	
	