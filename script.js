console.log("test");

const accordionBtn = document.querySelector('.accordion__question')


document.querySelectorAll('.accordion__question').forEach(item => {
    item.addEventListener('click', () => {
        console.log("click");

        if (!item.classList.contains('open')) {
            console.log('toggle accordion button');
            item.nextElementSibling.classList = 'accordion__collapse collapsing';
            setTimeout(() => {
                console.log("open accordion button");
                item.nextElementSibling.classList = 'accordion__collapse open'
            }, 300)
        } else {
            item.nextElementSibling.classList = 'accordion__collapse collapsing';

            setTimeout(() => {
                console.log("close accordion button");
                item.nextElementSibling.classList = 'accordion__collapse collapse'
            }, 300)
        }
        item.classList.toggle('open');

    })
})