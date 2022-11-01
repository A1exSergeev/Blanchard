// Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
           center: [55.75846806898367,37.60108849999989],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
           zoom: 15,
           controls: []
      },
      {
          suppressMapOpenBlock: true
      });

    
      
      var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/section-map/map-location.svg',
        iconImageSize: [20, 20],
      });
      myMap.geoObjects.add(myPlacemark);

      myMap.controls.add('zoomControl', {
        size: 'small',
        float: 'none',
        position: {
            bottom: '360px',
            right: '15px',
        },
      });

      
      myMap.controls.add('geolocationControl', {
        float: 'none',
        size: 'large',
        position: {
            bottom: '320px',
            right: '15px',
            
        }
      });

      myMap.behaviors.disable('scrollZoom');
} 