var number = 1;
        // Функция обнуления задач
        $('.page-reset').click(function(){
            number = 1;
            $('.page-item').hide();
        });
        // Функция завершения задания
        $('.page-item').click(function(){
            $(this).css('color','red');
        })
        // Функция добавления задания
        var newTask = function(){
            switch (number) {
                case 1:
                    $('#item1').show();
                    $('#item1text').text($('.task-name').val());
                    $('.task-name').val('');
                    number = number + 1;
                    break;
                case 2:
                    $('#item2').show();
                    $('#item2text').text($('.task-name').val());
                    $('.task-name').val('');
                    number = number + 1;
                    break;
                case 3:
                    $('#item3').show();
                    $('#item3text').text($('.task-name').val());
                    $('.task-name').val('');
                    number = number + 1;
                    break;
                case 4:
                    $('#item4').show();
                    $('#item4text').text($('.task-name').val());
                    $('.task-name').val('');
                    number = number + 1;
                    break;
                case 5:
                    $('#item5').show();
                    $('#item5text').text($('.task-name').val());
                    $('.task-name').val('');
                    number = number + 1;
                    break;
                case 5:
                    $('#item1').show();
                    $('#item2text').text($('.task-name').val());
                    $('.task-name').val('');
                    number = number + 1;
                    break;
                default:
                    alert('Достигнуть лимит!');
                    break;
            }
        }