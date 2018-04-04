$(function() {

	
	//Add new form function start
	$('.salary-form__add-new').click(function(){

		$('.salary-form__start-title').removeClass('salary-form__start-title_active');

		//Prepare form-wrap to clone it start
		$('.form-wrap').eq(0).clone().trigger('reset').appendTo('.salary-form');
		//Prepare form-wrap to clone it end

		//Loop for creating new form-wrap start
		$('.form-wrap').each(function(){

			//Input focused for each new start
			$('.salary-form__input').focusin(function(){
				$(this).parents('.salary-form__fieldset').find('.salary-form__text_on-input').addClass('salary-form__text_on-input_translated');
				$(this).parents('.salary-form__fieldset').find('.salary-form__prefix').addClass('salary-form__prefix_active');
			});
			//Input focused for each new end

			//Input blured for each new start
			$('.salary-form__input').blur(function(){
				var result = '';
				if($(this).val() === result){
					$(this).parents('.salary-form__fieldset').find('.salary-form__text_on-input').removeClass('salary-form__text_on-input_translated');
					$(this).parents('.salary-form__fieldset').find('.salary-form__prefix').removeClass('salary-form__prefix_active');
				}
				else{
					$(this).parents('.salary-form__fieldset').find('.salary-form__text_on-input').addClass('salary-form__text_on-input_translated');
				}
			});
			//Input blured for each new end

			//Radio IDs
			var formWrapIndex = $(this).index();
			var radioIndex1 = $('.salary-form__tax:first-of-type').index();
			var radioIndex2 = $('.salary-form__tax:nth-of-type(2)').index();
			var radioIndex3 = $('.salary-form__tax:last-of-type').index();

			$(this).attr('id', 'form-wrap' +'_'+ formWrapIndex);
			$(this).find('.salary-form__label:first-of-type').children('.salary-form__radio').attr('id', formWrapIndex+ '_'+'form-wrap' + '--' + radioIndex1+ '_' +'radio');
			$(this).find('.salary-form__label:nth-of-type(2)').children('.salary-form__radio').attr('id', formWrapIndex+ '_'+'form-wrap' + '--' + radioIndex2+ '_' +'radio');
			$(this).find('.salary-form__label:last-of-type').children('.salary-form__radio').attr('id', formWrapIndex+ '_'+'form-wrap' + '--' + radioIndex3+ '_' +'radio');
			$(this).find('.salary-form__label .salary-form__radio').attr('name', formWrapIndex+ '_'+'form-wrap' + '--priority');


			$(this).find('.salary-form__tax:first-of-type').children('.salary-form__radio').attr('id', formWrapIndex+ '_'+'form-wrap' + '--' + radioIndex1+ '_' +'tax-radio');
			$(this).find('.salary-form__tax:nth-of-type(2)').children('.salary-form__radio').attr('id', formWrapIndex+ '_'+'form-wrap' + '--' + radioIndex2+ '_' +'tax-radio');
			$(this).find('.salary-form__tax:last-of-type').children('.salary-form__radio').attr('id', formWrapIndex+ '_'+'form-wrap' + '--' + radioIndex3+ '_' +'tax-radio');
			$(this).find('.salary-form__tax .salary-form__radio').attr('name', formWrapIndex+ '_'+'form-wrap' + '--tax');

			//Switch IDs
			$(this).find('.salary-form__checkbox').attr('id', formWrapIndex+ '_'+'form-wrap' + '--checkbox');

			//Btn IDs
			$(this).find('.salary-form__btn').attr('id', formWrapIndex+ '_' + 'form-wrap--btn');

			//Calculating for each new start
			$(this).find('.salary-form__input').keyup(function(){
				var dolhour = $(this).parents('.form-wrap').find('.salary-form__input_dollar').val();
				var hours = $(this).parents('.form-wrap').find('.salary-form__input_hour').val();

				if(!$(this).parents('.form-wrap').find('.salary-form__checkbox').prop('checked') && $(this).parents('.form-wrap').find('.salary-form__label:last-of-type .salary-form__radio').prop('checked')){
					$(this).parents('.form-wrap').find('.salary-form__input_result').val(Math.round((dolhour*hours)*0.9) + '$');
				}
				else if($(this).parents('.form-wrap').find('.salary-form__checkbox').prop('checked') && $(this).parents('.form-wrap').find('.salary-form__label:last-of-type .salary-form__radio').prop('checked')){
					$(this).parents('.form-wrap').find('.salary-form__input_result').val(Math.round(((dolhour*0.8)*hours)*0.9) + '$');
				}
				else if(!$(this).parents('.form-wrap').find('.salary-form__checkbox').prop('checked')){
					$(this).parents('.form-wrap').find('.salary-form__input_result').val(Math.round((dolhour*hours)*0.5) + '$');
				}
//				else if($(this).parents('.form-wrap').find('.salary-form__checkbox').prop('checked')){
//					$(this).parents('.form-wrap').find('.salary-form__input_result').val(Math.round(((dolhour*0.8)*hours)*0.5) + '$');
//				}
				else if($(this).parents('.form-wrap').find('.salary-form__checkbox').prop('checked') && $(this).parents('.form-wrap').find('.salary-form__tax:first-of-type .salary-form__radio').prop('checked')){
					$(this).parents('.form-wrap').find('.salary-form__input_result').val(Math.round(((dolhour*0.8)*hours)*0.5) + '$');
				}
				else if($(this).parents('.form-wrap').find('.salary-form__checkbox').prop('checked') && $(this).parents('.form-wrap').find('.salary-form__tax:nth-of-type(2) .salary-form__radio').prop('checked')){
					$(this).parents('.form-wrap').find('.salary-form__input_result').val(Math.round(((dolhour*0.9)*hours)*0.5) + '$');
				}
				else if($(this).parents('.form-wrap').find('.salary-form__checkbox').prop('checked') && $(this).parents('.form-wrap').find('.salary-form__tax:nth-of-type(3) .salary-form__radio').prop('checked')){
					$(this).parents('.form-wrap').find('.salary-form__input_result').val(Math.round(((dolhour*0.95)*hours)*0.5) + '$');
				}
			});
			//Calculating for each new end

			//Calculating for each new start
			$(this).find('.salary-form__checkbox, .salary-form__radio').change(function(){
				var dolhour = $(this).parents('.form-wrap').find('.salary-form__input_dollar').val();
				var hours = $(this).parents('.form-wrap').find('.salary-form__input_hour').val();

				if(!$(this).parents('.form-wrap').find('.salary-form__checkbox').prop('checked') && $(this).parents('.form-wrap').find('.salary-form__label:last-of-type .salary-form__radio').prop('checked')){
					$(this).parents('.form-wrap').find('.salary-form__input_result').val(Math.round((dolhour*hours)*0.9) + '$');
				}
				else if($(this).parents('.form-wrap').find('.salary-form__checkbox').prop('checked') && $(this).parents('.form-wrap').find('.salary-form__tax:first-of-type .salary-form__radio').prop('checked') && $(this).parents('.form-wrap').find('.salary-form__label:last-of-type .salary-form__radio').prop('checked')){
					$(this).parents('.form-wrap').find('.salary-form__input_result').val(Math.round(((dolhour*0.8)*hours)*0.9) + '$');
				}
				else if($(this).parents('.form-wrap').find('.salary-form__checkbox').prop('checked') && $(this).parents('.form-wrap').find('.salary-form__tax:nth-of-type(2) .salary-form__radio').prop('checked') && $(this).parents('.form-wrap').find('.salary-form__label:last-of-type .salary-form__radio').prop('checked')){
					$(this).parents('.form-wrap').find('.salary-form__input_result').val(Math.round(((dolhour*0.9)*hours)*0.9) + '$');
				}
				else if($(this).parents('.form-wrap').find('.salary-form__checkbox').prop('checked') && $(this).parents('.form-wrap').find('.salary-form__tax:nth-of-type(3) .salary-form__radio').prop('checked') && $(this).parents('.form-wrap').find('.salary-form__label:last-of-type .salary-form__radio').prop('checked')){
					$(this).parents('.form-wrap').find('.salary-form__input_result').val(Math.round(((dolhour*0.95)*hours)*0.9) + '$');
				}

				else if(!$(this).parents('.form-wrap').find('.salary-form__checkbox').prop('checked')){
					$(this).parents('.form-wrap').find('.salary-form__input_result').val(Math.round((dolhour*hours)*0.5) + '$');
				}
				else if($(this).parents('.form-wrap').find('.salary-form__checkbox').prop('checked') && $(this).parents('.form-wrap').find('.salary-form__tax:first-of-type .salary-form__radio').prop('checked')){
					$(this).parents('.form-wrap').find('.salary-form__input_result').val(Math.round(((dolhour*0.8)*hours)*0.5) + '$');
				}
				else if($(this).parents('.form-wrap').find('.salary-form__checkbox').prop('checked') && $(this).parents('.form-wrap').find('.salary-form__tax:nth-of-type(2) .salary-form__radio').prop('checked')){
					$(this).parents('.form-wrap').find('.salary-form__input_result').val(Math.round(((dolhour*0.9)*hours)*0.5) + '$');
				}
				else if($(this).parents('.form-wrap').find('.salary-form__checkbox').prop('checked') && $(this).parents('.form-wrap').find('.salary-form__tax:nth-of-type(3) .salary-form__radio').prop('checked')){
					$(this).parents('.form-wrap').find('.salary-form__input_result').val(Math.round(((dolhour*0.95)*hours)*0.5) + '$');
				}
			});
			//Calculating for each new end

			
			$('.salary-form__radio-icon-wrap').mousedown(function(){
				$(this).addClass('salary-form__radio-icon-wrap_pressed');
			});
			$('.salary-form__radio-icon-wrap').mouseup(function(){
				$(this).removeClass('salary-form__radio-icon-wrap_pressed');
			});
		});
		//Loop for creating new form-wrap end

		//Add on page total box start
		$('.total-wrap').addClass('total-wrap_active');
		//Add on page total box end

		//Remove form-wrap from the page start
		$('.remove-wrap').click(function(){
			$(this).parent().remove();
			if($('.salary-calc').height() == 32){
				$(this).addClass('salary-calc_shadowed');
			} else {
				$(this).removeClass('salary-calc_shadowed');
			}
			console.log($('.salary-calc').height());
		});
		//Remove form-wrap from the page end

		//Regular for number input start
		$('.salary-form__input').keyup(function() {
			var preg = $(this).val().replace(/[^\d\.]/g,'');
			$(this).val(preg);
		});
		//Regular for number input end

		//Total alculating start
		$('.total-box__btn').click(function(){
			var resultArr = [];
			$('.salary-form__input_result').each(function(){
				$(this).split
				resultArr.push(+$(this).val().slice(0,-1));
			});
			var result = resultArr.reduce(function(sum, current) {
				return sum + current;
			}, 0);
			$('.total-box__value-box').text(Math.round(result) + '$');
		});
		//Total alculating end




		$.fn.toggleAttr = function(attr) {
			return this.each(function() {
				$(this).attr(attr) ? $(this).removeAttr(attr) : $(this).attr(attr, attr);
			});
		};

		$('.form-wrap').each(function(){
			$(this).find('.salary-form__checkbox').change(function(){

					$(this).parents('.form-wrap').find('.form-group_tax .salary-form__radio').toggleAttr('disabled');

					$(this).parents('.form-wrap').find('.salary-form__tax').toggleClass('disabled-label');
					$(this).parents('.form-wrap').find('.salary-form__text-switching').toggleClass('disabled-text');
					$(this).parents('.form-wrap').find('.form-group_tax .salary-form__text-radio').toggleClass('disabled-text');

//				if($(this).parents('.form-wrap').find('.salary-form__tax').hasClass('disabled-label') && $(this).parents('.form-wrap').find('.salary-form__tax .salary-form__radio-icon-wrap').hasClass('disabled-radio_active')){
//					$(this).parents('.form-wrap').find('.salary-form__tax .salary-form__radio-icon-wrap').addClass('disabled-radio_active');
//				} else{
//					$(this).parents('.form-wrap').find('.salary-form__tax .salary-form__radio-icon-wrap').removeClass('disabled-radio_active');
//				}
//				$(this).parents('.form-wrap').find('.salary-form__tax .salary-form__radio-icon-wrap').toggleClass('disabled-radio');
			});
		});



	});
	//Add new form function end

	$('.total-box__icon').click(function(){
		$('.total-wrap').removeClass('total-wrap_active');
	});


	//Preloader Start
	$('.preloader').fadeOut();
	//Preloader End

	

});
