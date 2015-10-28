Custom JQuery

Your task is to implement minimal version of JQuery using DOM API Methods to implement:

    addClass*
    append
    html*
    attr
    children
    css
    data
    on
    one
    each*

Additional requirements:

    chaining

Example usage

$('.my-class')
    .each(function (index) {
        $(this).html('<b>' + index + '</b>')
    })
    .append($('div'))
    .addClass('my-super-class')
    .css({
        backgroundColor: 'rebeccapurple'
    });
