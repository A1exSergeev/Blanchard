const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Введите имя',
    },
    {
      rule: 'customRegexp',
      value: /^[A-Za-zА-Яа-яЁё]/,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя слишком короткое',
    },               
    {
      rule: 'maxLength',
      value: 20,
      errorMessage: 'Имя слишком длинное',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Введите номер телефона',
    },
    {
      rule: 'customRegexp',
      value: /[\+]\d{1}\s\d{3}\s\d{3}\s\d{2}\s\d{2}/,
      errorMessage: 'Номер неверен. Пример +7 999 999 99 99',
    },
  ]);

  