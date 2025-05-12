
const sliderItems = [
    {
      image: '../../assets/images/coffee-slider-1.png',
      title: 'S’mores Frappuccino',
      description: 'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.',
      price: '$5.50',
    },
    {
      image: '../../assets/images/coffee-slider-2.jpg',
      title: 'Pumpkin Spice Latte',
      description: 'A perfect mix of pumpkin puree, espresso, and steamed milk topped with whipped cream.',
      price: '$4.75',
    },
    {
      image: '../../assets/images/coffee-slider-3.jpg',
      title: 'Caramel Macchiato',
      description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and caramel drizzle.',
      price: '$5.00',
    }
];
  
let currentIndex = 0;

function updateSlider() {
    const currentItem = sliderItems[currentIndex];
    document.getElementById('slider-image').src = currentItem.image;
    document.getElementById('slider-title').textContent = currentItem.title;
    document.getElementById('slider-description').textContent = currentItem.description;
    document.getElementById('slider-price').textContent = currentItem.price;

    updateSliderControl();
}
  

function updateSliderControl() {
    const controlItems = document.querySelectorAll('.slider-control__item');
    controlItems.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function moveLeft() {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    updateSlider();
}

function moveRight() {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    updateSlider();
}
  
updateSlider();
  