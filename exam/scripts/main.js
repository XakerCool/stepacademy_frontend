$(document).ready(function() {
    $('.up__burger').click(function(){
        $('#left_side_menu').toggleClass('hidden_element');
        $('#left_side_menu').toggleClass('hide_left_side_menu');
        $('#left_side_menu').toggleClass('show_left_side_menu');
    });
    $('.left_side_menu_item').click(function(){
        $('#left_side_menu').toggleClass('hidden_element');
        $('#left_side_menu').toggleClass('hide_left_side_menu');
        $('#left_side_menu').toggleClass('show_left_side_menu');
    });

    $('.work').click(function(){
        $('.work_name').text('A ' + $(this).attr('techname'));
        $('.works_full_size_img').attr('src', 'images/tech_'+ $(this).attr('techname') + '.jpg');
        $('#work_full_size').attr('style', 'display:block;');
    });
    $('#work_full_size').click(function(){
        $(this).attr('style', 'display:none;');
    });
    $('.work_full_size__cross').click(function(){
        $('#work_full_size').attr('style', 'display:none;');
    });
});