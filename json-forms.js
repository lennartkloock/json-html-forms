Array.prototype.forEach.call(document.forms, function (form) {
    form.onsubmit = async function (e) {
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
    Array.prototype.forEach.call(form.elements, function (el) {
        if (el instanceof HTMLInputElement && el.type !== 'submit' && el.type !== 'button' && el.type !== 'reset') {
            if (el.type === 'checkbox' || el.type === 'radio') {
                jsonData[el.name] = el.checked;
            }
            else {
                if (typeof el.value === 'string' && isNaN(el.value)) {
                    jsonData[el.name] = el.value;
                }
                else {
                    jsonData[el.name] = parseInt(el.value);
                }
            }
        }
    });
    return jsonData;
}
