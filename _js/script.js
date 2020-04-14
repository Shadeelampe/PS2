const form = document.getElementById('form')
const name = document.getElementById('name')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const date = document.getElementById('date')
const amount = document.getElementById('amount')
const package1 = document.getElementById('package1')
const package2 = document.getElementById('package2')
const errorElement = document.getElementById ('error')

form.addEventListener('submit' , (e) => {
	let messages = []
	if (name.value === '' || email.value == null) {
		messages.push('Name is required')
	}

	if (email.value === '' || name.value == null) {
		messages.push('Email is required')
	}

	if (password.value.length >= 20) {
		messages.push('Password must be less than 20 characters')
	}

	if (messages.length > 3) {
		e.preventDefault()
		errorElement.innerText = messages.join(', ')
	}
})


