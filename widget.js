class Widget {
    constructor({ containerId, buttonText, backgroundColor, textColor, buttonBackgroundColor, buttonTextColor }) {
      this.containerId = containerId;
      this.buttonText = buttonText || 'Submit';
      this.backgroundColor = backgroundColor || '#fff';
      this.textColor = textColor || '#333';
      this.buttonBackgroundColor = buttonBackgroundColor || '#007bff';
      this.buttonTextColor = buttonTextColor || '#fff';
      
      this.render();
    }

    render() {
      const container = document.getElementById(this.containerId);
      const form = document.createElement('form');

      form.style.backgroundColor = this.backgroundColor;
      form.style.color = this.textColor;

      const nameField = document.createElement('input');
      nameField.type = 'text';
      nameField.placeholder = 'Your Name';
      nameField.style.color = this.textColor;

      const dateField = document.createElement('input');
      dateField.type = 'date';
      dateField.placeholder = 'DD.MM.YYYY';
      dateField.style.color = this.textColor;

      const submitButton = document.createElement('button');
      submitButton.textContent = this.buttonText;
      submitButton.style.backgroundColor = this.buttonBackgroundColor;
      submitButton.style.color = this.buttonTextColor;

      submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const name = nameField.value;
        const date = dateField.value;
        if (name && date) {
          alert(`Submitted with Name: ${name} and Date: ${date}`);
        } else {
          alert('Please fill all fields!');
        }
      });

      form.appendChild(nameField);
      form.appendChild(dateField);
      form.appendChild(submitButton);

      container.appendChild(form);
    }
  }
  