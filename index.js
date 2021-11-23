const navLinks = document.getElementById('navLinks')

function hideMenu() {
  navLinks.style.right = '-200px'
}

function showMenu() {
  navLinks.style.right = '0'
}

// form
const sendEmail = document.getElementById('sendEmail')
sendEmail.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = document.getElementById('send_name').value
  const email = document.getElementById('send_email').value
  const message = document.getElementById('send_message').value
  //   console.log(name, email, message)
  const url = `https://joeberetta.xyz/notify_tg/`
  const body = { name, email, message }
  const xhr = new XMLHttpRequest()
  xhr.open('POST', url, true)

  //Передаёт правильный заголовок в запросе
  xhr.setRequestHeader('Content-type', 'application/json')

  xhr.onreadystatechange = function () {
    //Вызывает функцию при смене состояния.
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      // Запрос завершён. Здесь можно обрабатывать результат.
      console.log('111')
    }
  }
  // xhr.send('foo=bar&lorem=ipsum')
  // xhr.send('string');
  // xhr.send(new Blob());
  // xhr.send(new Int8Array());
  // xhr.send({ form: 'data' });
  xhr.send(JSON.stringify(body))
})
