$(document).ready(function(){
	$('.header__burger').click(function() {
		$('.up__nav').toggleClass('up__nav_height-100');
		$('.nav__list').toggleClass('show_list');
	});
	$('.nav__list').children().each(function(index, item){
		$(item).click(function(){
			$('.up__nav').toggleClass('up__nav_height-100');
			$('.nav__list').toggleClass('show_list');
		});
	});

	$('.menus__options').click(function(){
		$(this).toggleClass('options__more_info');
		$(this).children().each(function(index, item){
			if($(item).attr('class')=='options__body options__body_hidden'){
				$(item).toggleClass('options__body_hidden');
			}
			else if($(item).attr('class')=='options__body'){
				$(item).toggleClass('options__body_hidden');
			}
		});
	});

	$('.team__avatar').click(function(){
		if($(this).attr('order')=='avatar1')
		{
			$('.our_team__team').children().each(function(index, item){
				if($(item).attr('order')=='avatar2'){
					$(item).toggleClass('avatar1');
					$(item).toggleClass('avatar2');
					$(item).attr('order', 'avatar1');
				}
			});
			$(this).toggleClass('avatar1');
			$(this).toggleClass('avatar2');
			$(this).attr('order', 'avatar2');
		}
		else if($(this).attr('order')=='avatar3')
		{
			$('.our_team__team').children().each(function(index, item){
				if($(item).attr('order')=='avatar2'){
					$(item).toggleClass('avatar2');
					$(item).toggleClass('avatar3');
					$(item).attr('order', 'avatar3');
				}
			});
			$(this).toggleClass('avatar3');
			$(this).toggleClass('avatar2');
			$(this).attr('order', 'avatar2');
		}
		$('.selected_avatar').toggleClass('unselected_avatar');
		$('.selected_avatar').toggleClass('selected_avatar');
		$(this).toggleClass('unselected_avatar');
		$(this).toggleClass('selected_avatar');
		$('.comment__user_name').text($(this).attr('userName'));
	});
});
