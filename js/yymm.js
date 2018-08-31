function YYYYMMDDstart() {
			MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

			//先给年下拉框赋内容   
			var y = new Date().getFullYear();
			for(var i = (y - 60); i < (y + 1); i++) { //以今年为准，前30年，后30年   

				$('#year').append(new Option("" + i, i));
			}

			//赋月份的下拉框   
			for(var i = 1; i < 13; i++)

				$('#month').append(new Option("" + i, i));

			$('#year').value = y;

			$('#month').value = new Date().getMonth() + 1;

			var n = MonHead[new Date().getMonth()];

			if(new Date().getMonth() == 1 && IsPinYear(YYYYvalue)) n++;

			writeDay(n); //赋日期下拉框Author:meizz   

			$('#day').value = new Date().getDate();

		}
		if(document.attachEvent)
			window.attachEvent("onload", YYYYMMDDstart);
		else
			window.addEventListener('load', YYYYMMDDstart, false);
		//		年

		function YYYYDD(src) //年发生变化时日期发生变化(主要是判断闰平年)   

		{
			console.log("调试成功");
			//			var MMvalue = document.reg_testdate.MM.options[document.reg_testdate.MM.selectedIndex].value;
			var MMvalue = $('.month_list .layui-this').text();
			if(MMvalue == "") {
				//				var e = document.reg_testdate.DD;
				var e = $('#day');
				console.log(e)
				optionsClear(e);
				return;
			}
			var n = MonHead[MMvalue - 1];
			if(MMvalue == 2 && IsPinYear(str)) n++;
			writeDay(n)
		}
		//	月
		function MMDD(str) //月发生变化时日期联动   
		{
			console.log('m')
			var YYYYvalue = document.reg_testdate.YYYY.options[document.reg_testdate.YYYY.selectedIndex].value;
			if(YYYYvalue == "") {
				var e = document.reg_testdate.DD;
				optionsClear(e);
				return;
			}
			var n = MonHead[str - 1];
			if(str == 2 && IsPinYear(YYYYvalue)) n++;
			writeDay(n)
		}

		function writeDay(n) //据条件写日期的下拉框   
		{

			var e = $('#day');

			optionsClear(e);

			for(var i = 1; i < (n + 1); i++)

				//				e.options.add(new Option(" " + i + " 日", i));
				$('#day').append(new Option("" + i, i));

		}

		function IsPinYear(year) //判断是否闰平年   
		{
			return(0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
		}

		function optionsClear(e) {

			$('#day options').length = 1;

		}

		$('.year_list').on('click', function() {
			var year = $('.month_list .layui-this').text();
			if(year == '') {
				var e = $('#day');
				optionsClear(e);
				return;
			}
			var n = MonHead[year - 1];

		})