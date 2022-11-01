const element = document.querySelector('select');
    const choices = new Choices(element, {
      searchEnabled: false,
      placeholder: false,
      placeholderValue: '',
      itemSelectText: '',
      position: 'bottom',
    });
    document.querySelector('.choices__item--selectable').textContent = "Живопись"