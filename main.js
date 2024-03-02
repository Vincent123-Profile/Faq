const accordionBtns = document.querySelectorAll('.accordion-btn')

accordionBtns.forEach(btn => {
    btn.addEventListener('click', funtion () {
        this.classList.toggle('active')
        const accordionDescription = this.nextElementSibling
        const plusIcon = this.querySelector('.plus-icon')
        const minusIcon = this.querySelector('.minus-icon')I

        if(accordionDescription.style.maxHeight) {
            accordionDescription.style.maxHeight = null 
            plusIcon.style.display = 'block'
            minusIcon.style.display = 'none'
        } else {
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight +
            'px'
            plusIcon.style.display = 'none'
            minusIcon.style.display = 'block'
             }
          })
        })