Array.prototype.forEach.call(document.forms, function (form) {
    form.onsubmit = async (e) => {
        e.preventDefault();

        const jsonData = buildJsonFromForm(form);
        await fetch(form.action, {
            method: form.method,
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        });
    }
})

function buildJsonFromForm(form) {
    const jsonData = {};
    Array.prototype.forEach.call(form.elements, (el) => {
        if (el instanceof HTMLInputElement && !['submit', 'button', 'reset'].includes(el.type)) {
            if (el.type === 'checkbox' || el.type === 'radio') {
                jsonData[el.name] = el.checked;
            } else {
                if (['number', 'range'].includes(el.type) && !isNaN(el.value)) {
                    jsonData[el.name] = parseInt(el.value);
                } else {
                    jsonData[el.name] = el.value;
                }
            }
        }
    });
    return jsonData;
}
