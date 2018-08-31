
			$('.btn-off').on('click', function() {
				if($(this).hasClass('btn-on')) {
					$(this).removeClass('btn-on');
					$(this).prev().attr('type', 'password');
				} else {
					$(this).addClass('btn-on');
					$(this).prev().attr('type', 'text');
				}
			});
			$('.code_buttom').on('click', function() {

				var countdown = 60;
				var sending = false;

				$(function() {

					
					 
					if(countdown > 0) {
						sending = true;
						var obj = $(".code_buttom");
						
						obj.html("重新发送(" + countdown + ")");
						settime(obj);
					}

					$(window).on('beforeunload unload', function() {
						if(sending) {
							console.log(countdown);
							$.cookie('validateCodeCountdown', countdown);
						}
						if(!sending) {
							console.log(countdown);
							$.cookie('validateCodeCountdown', 0);
						}
					});
				});

				function send() {
					sending = true;
					var obj = $(".code_buttom");
					settime(obj);
				}

				function settime(obj) { //发送验证码倒计时
					if(countdown == 0) {
						
						obj.html("发送验证码");
						countdown = 60;
						sending = false;
						return;
					} else {						
						obj.html("重新发送(" + countdown + ")");
						countdown--;
					}
					setTimeout(function() {
						settime(obj);
					}, 1000)
				}

			});
