export function forms(){
  $('.ui.form')
    .form({
      fields: {
        name     : {
          identifier: 'name',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter your name'
            }
          ]
        },
        mail     : 'empty',
        message    : 'empty'
      }
    });
}
