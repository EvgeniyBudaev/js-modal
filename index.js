const fruits = [
  {id:1 , title: 'Яблоки', img: 'https://cdn.segodnya.ua/i/image_650x434/media/image/5d6/f90/530/5d6f9053031b6.jpg'},
  {id:2 , title: 'Апельсины', img: 'https://www.vmersine.com/wp-content/uploads/2015/10/%D0%B2%D1%81%D0%B5-%D0%BE%D0%B1-%D0%B0%D0%BF%D0%B5%D0%BB%D1%8C%D1%81%D0%B8%D0%BD%D0%B0%D1%85.jpg'},
  {id:1 , title: 'Манго', img: 'https://blog.metro.ua/wp-content/uploads/2019/06/1-min-25.jpg'},
]

const toHTML = fruit => `
<div class="col">
  <div class="card" style="width: 18rem;">
    <img src="${fruit.img}" class="card-img-top" alt="${fruit.title}">
    <div class="card-body">
      <h5 class="card-title">${fruit.title}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary" data-btn="price">Посмотреть цену</a>
      <a href="#" class="btn btn-danger">Удалить</a>
    </div>
  </div>
</div>
`

function render() {
  const html = fruits.map(toHTML).join('')
  document.querySelector('#fruits').innerHTML = html
}

render()

const modal = $.modal({
  title: 'Заголовок модального окна',
  closable: true,
  content: `
  <p>Lorem ipsum dolor sit.</p>
  <p>Lorem ipsum dolor sit.</p>
  `,
  width: '400px',
  footerButtons: [
    {text: 'Ok', type: 'primary', handler() {
      console.log('Primary btn clicked')
      modal.close()
    }},
    {text: 'Cansel', type: 'danger', handler() {
      console.log('Danger btn clicked')
      modal.close()
    }}
  ]
})