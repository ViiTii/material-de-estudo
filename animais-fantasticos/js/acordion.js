const accordion = document.querySelector('[data-js="acordion"]')

accordion.addEventListener('click', e => {
  const accordionHeaderId = e.target.dataset.acordionHeader
  const clickedAccordionHeader = document.querySelector(`[data-acordion-header="${accordionHeaderId}"]`)
  const accordionItemToBeOpened = document.querySelector(`[data-acordion-body="${accordionHeaderId}"]`)
  clickedAccordionHeader.classList.toggle('ativo')
  accordionItemToBeOpened.classList.toggle('ativo')
})



