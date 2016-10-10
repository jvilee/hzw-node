// $('.form-group').removeClass('has-error')

// $('.form-group span').hide()

// $('.form-group input').keyup(function (e) {
//     $(this).parent().parent().removeClass('has-error')
//     $(this).parent().find('span').hide()

// })

function doSubmit(event) {

    var name = $('input[name="name"]').val()
    var level = $('input[name="level"]').val()
    var skill = $('input[name="skill"]').val()
    var dream = $('input[name="dream"]').val()
    var weakness = $('input[name="weakness"]').val()

    var boolValidated = true
    $('.form-group input').each(function (index) {
        if ($(this).val() == "") {
            $(this).parent().parent().addClass('has-error')
            $(this).parent().find('span').show
            boolValidated = false
        }
    })

    if (!boolValidated) {
        event.preventDefault();
        return false
    }




    $.ajax({
        url: "/sub",
        method: "post",
        dataType: "json",
        data: {
            name: name,
            level: level,
            skill: skill,
            dream: dream,
            weakness: weakness
        },
        success: function (res) {
            console.dir(res)
        },

        err: function (res) {
            console.dir(err)
        }
    })

}
