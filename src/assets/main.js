$(function ()
{

    $.ajax('https://www.codeschool.com/users/nefronik.json', {
        dataType: 'jsonp',
        success: function (response)
        {
            var badgesElement = $('#badges');

            for (var i = 0, x = response.courses.completed.length; i < x; i++) {
                var course = response.courses.completed[i],
                    badge = $('<div class="course"></div>');

                badge.append($('<h3>' + course.title + '</h3>'));

                badge.append($('<img src="' + course.badge + '">'));

                badge.append($('<a href="' + course.url + '" target="_blank" class="btn btn-primary">See Course</a>'));

                badgesElement.append(badge);
            }
        }
    })

});
