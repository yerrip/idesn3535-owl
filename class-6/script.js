			let seconds = 0;

		$('.menu-toggle').on('click', function() {

			  $('.container').toggleClass('open')
			  console.log("Clicked")

			})

		$('.menu-toggle').on('click', function() {
			  $('.menu-toggle').toggleClass('rotate')
})

		

			function displayTime(amountOfSeconds) {

				// define temporary variables
				let hrs = 0;
				let minutes = 0;

				// while amount of seconds is greater than(or equal to) 3600 (3600s = 1hr)
				while (amountOfSeconds >= 3600) {
					hrs++;

					//we've added an hour, let's delete 3600s.
					amountOfSeconds = amountOfSeconds - 3600;
				}

				//while amount of seconds is greater than (or equal to) 60 (60s = 1min)
				while (amountOfSeconds >= 60) {
					//add one hour
					minutes++;

					//we've added an hour, lets delete 3600 seconds.
					amountOfSeconds = amountOfSeconds - 60;
				}

				//note we don't have to loop through seconds because 1s = 1s

				//Now, update our on screen elements with jQuery

				$("#hours").text(hrs);
				$("#minutes").text(minutes);
				$("#seconds").text(amountOfSeconds);

			}

			$(document).ready(function () {

		$(".control-button").on('click', function() {
			//get the amount defined in the data attribute of the button that was clicked on
			const amount = parseInt($(this).data("amount"));

			//add that amount to our global seconds variable (note, the negative numbers will substract)
			seconds += amount;

			//We don't want to worry about negative numbers, so take what's bigger
			//the amount of seconds or 0.
			seconds = Math.max (seconds, 0) 

			//display our new time
			displayTime(seconds);

			});


			let timer;

			function tick() {
				seconds--;

				seconds = Math.max(seconds, 0);

				displayTime(seconds);

			}
			

			$("#start-button").on('click', function() {

				if (timer) {
					clearInterval(timer);
					timer = false;
				} else {
					timer = setInterval(tick, 1000);
				}
			});

	})